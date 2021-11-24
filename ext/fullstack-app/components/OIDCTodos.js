import React from "react";
import Link from "next/link";
import { API, Auth } from "aws-amplify";
import { listPrivateTodos } from "../src/graphql/queries";
import { createPrivateTodo, deletePrivateTodo } from "../src/graphql/mutations";
import {
  onCreatePrivateTodo,
  onUpdatePrivateTodo,
  onDeletePrivateTodo,
} from "../src/graphql/subscriptions";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../src/aws-exports";
import gql from "graphql-tag";

const getAuth0Token = async () => {
  try {
    const {
      data: { access_token },
    } = await axios.post(
      "https://dev-7w7q5fl7.us.auth0.com/oauth/token",
      {
        client_id: "liO9Y36I2JPPM6hUKd0Ka49Boe9d5UWO",
        client_secret:
          "0_3_9FMdT4KfSeBsEUtxbIENmmfe_BO2GZY0S6Ps1SI9wc3iOqS8gStAlnVx4cF4",
        audience: "https://aws.amazon.com",
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return access_token;
  } catch (error) {
    console.log(error);
  }
};

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.OPENID_CONNECT,
    jwtToken: () => getAuth0Token(),
  },
  disableOffline: true,
});

const OIDCTodos = () => {
  const [newPrivateTodo, setNewPrivateTodo] = React.useState("");
  const [privateTodos, setPrivateTodos] = React.useState([]);
  const [OIDCAccessToken, setOIDCAccessToken] = React.useState("");
  const [subAction, setSubAction] = React.useState({
    action: "",
    value: null,
  });
  const [user, setUser] = React.useState(null);

  const loginWithOIDC = async () => {
    const { iss, exp } = jwtDecode(OIDCAccessToken);

    console.log({ iss, exp });

    try {
      const cognitoResponse = await Auth.federatedSignIn(
        "dev-7w7q5fl7.us.auth0.com",
        {
          token: await getAuth0Token(),
          expires_at: exp * 1000 + new Date().getTime(),
        }
      );

      setUser(cognitoResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const getOIDCAccessToken = async () => {
    try {
      const access_token = await getAuth0Token();
      setOIDCAccessToken(access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrivateTodos = async () => {
    try {
      const appsyncResponse = await API.graphql({
        query: listPrivateTodos,
        authMode: "OPENID_CONNECT",
      });
      // const result = await client.query({
      //   query: gql(listPrivateTodos),
      // });
      setPrivateTodos(appsyncResponse.data.listPrivateTodos.items);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewPrivateTodo = async (e) => {
    e.preventDefault();

    try {
      await API.graphql({
        query: createPrivateTodo,
        variables: {
          input: {
            title: newPrivateTodo,
            completed: false,
          },
        },
        authMode: "OPENID_CONNECT",
      });

      setNewPrivateTodo("");

      await getPrivateTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const delPrivateTodo = async (id) => {
    try {
      await API.graphql({
        query: deletePrivateTodo,
        variables: {
          input: {
            id,
          },
        },
        authMode: "OPENID_CONNECT",
        authToken: OIDCAccessToken,
      });

      await getPrivateTodos();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (!OIDCAccessToken) getOIDCAccessToken();
  }, []);

  React.useEffect(() => {
    let createSub;
    let updateSub;
    let deleteSub;

    if (OIDCAccessToken) {
      getPrivateTodos();

      createSub = API.graphql({
        query: onCreatePrivateTodo,
        authMode: "OPENID_CONNECT",
      }).subscribe({
        next: ({ provider, value }) => {
          console.log({ provider, value });
          setSubAction({
            action: "Created: ",
            value: value.data.onCreatePrivateTodo,
          });
        },
      });

      updateSub = API.graphql({
        query: onUpdatePrivateTodo,
        authMode: "OPENID_CONNECT",
      }).subscribe({
        next: ({ provider, value }) => {
          console.log({ provider, value });
          setSubAction({
            action: "Updated: ",
            value: value.data.onUpdatePrivateTodo,
          });
        },
      });

      deleteSub = API.graphql({
        query: onDeletePrivateTodo,
        authMode: "OPENID_CONNECT",
      }).subscribe({
        next: ({ provider, value }) => {
          console.log({ provider, value });
          setSubAction({
            action: "Deleted: ",
            value: value.data.onDeletePrivateTodo,
          });
        },
      });
    }

    return () => {
      createSub?.unsubscribe();
      updateSub?.unsubscribe();
      deleteSub?.unsubscribe();
    };
  }, [OIDCAccessToken]);

  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link href="/">Home</Link>
        <h2>Private Todos (OIDC)</h2>

        <div style={{ marginBottom: "1rem" }}>
          <button onClick={loginWithOIDC}>Sign In With OIDC</button>
          <button
            onClick={() => {
              Auth.signOut({ global: true });
            }}
          >
            Sign Out
          </button>
        </div>

        <form style={{ marginBottom: "1rem" }} onSubmit={createNewPrivateTodo}>
          <input
            name="privateTodo"
            value={newPrivateTodo}
            onChange={(e) => {
              setNewPrivateTodo(e.target.value);
            }}
          />
          <input type="submit" />
        </form>

        <button onClick={getPrivateTodos}>Get Todos With OIDC</button>

        {privateTodos.map((todo) => (
          <div key={todo.id}>
            <p key={todo.id}>{todo.title}</p>
            <button onClick={() => delPrivateTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Subscriptions</h2>
        <div>
          {subAction?.action || "Listening"}:{" "}
          <pre>{JSON.stringify(subAction?.value, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default OIDCTodos;

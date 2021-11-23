import React from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listPrivateTodos } from "../src/graphql/queries";
import { createPrivateTodo, deletePrivateTodo } from "../src/graphql/mutations";
import axios from "axios";

const OIDCTodos = () => {
  const [newPrivateTodo, setNewPrivateTodo] = React.useState("");
  const [privateTodos, setPrivateTodos] = React.useState([]);

  const getPrivateTodos = async () => {
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

      const appsyncResponse = await API.graphql(
        {
          query: listPrivateTodos,
          authMode: "OPENID_CONNECT",
        },
        {
          Authorization: access_token,
        }
      );

      setPrivateTodos(appsyncResponse.data.listPrivateTodos.items);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewPrivateTodo = async (e) => {
    e.preventDefault();

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

      await API.graphql({
        query: createPrivateTodo,
        variables: {
          input: {
            title: newPrivateTodo,
            conmpleted: false,
          },
        },
        authMode: "OPENID_CONNECT",
        authToken: access_token,
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
    getPrivateTodos();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Link href="/">Home</Link>
      <h2>Private Todos (OIDC)</h2>
      <form onSubmit={createNewPrivateTodo}>
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
  );
};

export default OIDCTodos;

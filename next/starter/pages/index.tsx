import { createContext, useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  API,
  Auth,
  DataStore,
  Hub,
  Storage,
  withSSRContext,
} from "aws-amplify";
import gql from "graphql-tag";
import { Authenticator } from "@aws-amplify/ui-react";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../src/aws-exports";
import * as queries from "../src/graphql/queries";
import * as mutations from "../src/graphql/mutations";

import * as styles from "../styles/Home.module.css";

import "@aws-amplify/ui-react/styles.css";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { UpdateTodoInput } from "../src/API";
import { Todo as TodoModel } from "../src/models";

const updateTodo = async (input: UpdateTodoInput) => {
  const res = await API.graphql({
    query: mutations.createTodo,
    variables: {
      input,
    },
  });

  console.log({ res });
};

// const client = new AWSAppSyncClient({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.AWS_IAM,
//     credentials: () => Auth.currentCredentials(),
//   },
// });

const TodoContext = createContext({
  todo: null,
  updateTodo: async (data) => null,
});

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState(null);

  const updateTodo = async (data) => {
    console.log(todo);
    await DataStore.save(
      TodoModel.copyOf(todo, (updated) => {
        updated.description = data.description;
        console.log(updated);
      })
    );
  };

  // useEffect(() => {
  //   const subscription = DataStore.observeQuery(TodoModel).subscribe(
  //     (snapshot) => {
  //       const { items, isSynced } = snapshot;
  //       console.log({ items, isSynced });
  //       if (isSynced) {
  //         setTodo(items[0]);
  //       }
  //     }
  //   );

  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <TodoContext.Provider value={{ todo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const getServerSideProps = async ({ req }) => {
  const { Auth } = withSSRContext({ req });

  let user;

  try {
    user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        userProp: JSON.stringify(user),
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        userProp: null,
        error: JSON.stringify(error),
      },
    };
  }
};

export default function Home({ userProp }): JSX.Element {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(JSON.parse(userProp));
  const { todo, updateTodo } = useContext(TodoContext);

  // ... After sign in through Cognito
  const getFiles = async () => console.log({ file: await Storage.list("") });
  // Error thrown

  const putFile = async () => await Storage.put("test.txt", "test");

  const putFileWithAppSync = async () => {
    const res = await API.graphql({
      query: mutations.createTodo,
      variables: {
        input: {
          name: "test file",
          file,
        },
      },
    });
  };

  // const updateUser = async () => {
  //   try {
  //     await Auth.deleteUserAttributes();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchAnalytics = async () => {
  //   try {
  //     // const res = await API.graphql({
  //     //   query: queries.getAnalytics,
  //     //   variables: {
  //     //     msg: "Hello From Lambda",
  //     //   },
  //     //   authMode: "AWS_IAM",
  //     // });

  //     // const res = await client.query({
  //     //   query: gql`
  //     //     ${queries.getAnalytics}
  //     //   `,
  //     // });

  //     // console.log({ res });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const startDataStore = async () => {
    await DataStore.start()
      .then(() => console.log("DataStore started"))
      .catch((error) => console.log(error));
  };

  const getTodos = async () => {
    const graphqlTodos = (await API.graphql({
      query: queries.listTodos,
    })) as any;

    // console.log({ graphqlTodos: graphqlTodos.data.listTodos.items });

    const dataStoreTodos = await DataStore.query(TodoModel);

    console.log({ dataStoreTodos });
  };

  const createTodo = async () => {
    const res = await DataStore.save(
      new TodoModel({
        name: "first todo",
        description: "this is my first todo",
      })
    );
    console.log({ res });
  };

  const deleteTodo = async () => {
    const todos = await DataStore.query(TodoModel);

    const res = await DataStore.delete(TodoModel, todos[0].id);
    console.log({ res });
  };

  useEffect(() => {
    const datastoreListener = async (hubData) => {
      const { event } = hubData.payload;
      if (event === "ready") {
        console.log("READY");
      }
    };

    const datastoreSubscription = Hub.listen("datastore", datastoreListener);

    return () => {
      Hub.remove("datastore", datastoreListener);
    };
  }, []);

  return (
    <TodoContextProvider>
      <Authenticator>
        {({ signOut }) => {
          return (
            <div className={styles.container}>
              <Head>
                <title>Create Next App</title>
                <meta
                  name="description"
                  content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <main className={styles.main}>
                <h1>Amplify Next App</h1>
                <h2>Welcome, {user?.attributes?.email}</h2>
                <button onClick={signOut}>Sign Out</button>

                <button onClick={putFile}>Put File</button>
                <button onClick={getFiles}>Get Files</button>

                <button onClick={getTodos}>Get Todos</button>
                <button onClick={createTodo}>Create Todo</button>
                <button
                  onClick={() => updateTodo({ description: "new description" })}
                >
                  Update Todo
                </button>
                <button onClick={deleteTodo}>Delete Todo</button>

                <button onClick={startDataStore}>Start DataStore</button>

                <br />

                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFile(file);
                  }}
                />
                <button onClick={putFileWithAppSync}>
                  Put File With AppSync
                </button>

                <section>
                  <h2>Pages</h2>
                  <ul>
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Todo</h2>
                  <p>{todo?.name}</p>
                  <p>{todo?.description}</p>
                </section>
              </main>
            </div>
          );
        }}
      </Authenticator>
    </TodoContextProvider>
  );
}

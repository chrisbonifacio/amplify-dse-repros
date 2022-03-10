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

import styles from "../styles/Home.module.css";

import "@aws-amplify/ui-react/styles.css";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { UpdateTodoInput } from "../src/API";
import { Todo } from "../src/models";
import { GetServerSideProps } from "next";

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
  todo: {
    name: "",
    description: "",
  },
  updateTodo: async (data: any): Promise<Todo | null> => null,
});

const TodoContextProvider = ({ children }: any) => {
  const [todo, setTodo] = useState<any>(null);

  const updateTodo = async (data: any) => {
    console.log(todo);
    const updatedTodo: Todo = await DataStore.save(
      Todo.copyOf(todo!, (updated) => {
        updated.description = data.description;
        console.log(updated);
      })
    );

    return updatedTodo;
  };

  // useEffect(() => {
  //   const subscription = DataStore.observeQuery(Todo).subscribe(
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

export default function Home({ userProp }: any): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
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

    const dataStoreTodos = await DataStore.query(Todo);

    console.log({ dataStoreTodos });
  };

  const createTodo = async () => {
    const res = await DataStore.save(
      new Todo({
        name: "first todo",
        description: "this is my first todo",
      })
    );
    console.log({ res });
  };

  const deleteTodo = async () => {
    const todos = await DataStore.query(Todo);

    const res = await DataStore.delete(Todo, todos[0].id);
    console.log({ res });
  };

  useEffect(() => {
    // const datastoreListener = async (hubData) => {
    //   const { event } = hubData.payload;
    //   if (event === "ready") {
    //     console.log("READY");
    //   }
    // };
    // const datastoreSubscription = Hub.listen("datastore", datastoreListener);
    // return () => {
    //   Hub.remove("datastore", datastoreListener);
    // };
  }, []);

  return (
    <TodoContextProvider>
      <Authenticator>
        {({ signOut, user }) => {
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

              <main className="main">
                <h1>Amplify Next App</h1>
                <ul>
                  <li>
                    <Link href="/customers">Customers</Link>
                  </li>
                  <li>
                    <Link href="/cities">Cities</Link>
                  </li>
                  <li>
                    <Link href="/protected">Protected</Link>
                  </li>
                </ul>
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
                    const file: File = e?.target?.files?.[0]!;
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

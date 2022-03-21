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
import { UpdateMappedTodoInput } from "../src/API";
import { MappedTodo } from "../src/models";
import { GetServerSideProps } from "next";
import Script from "next/script";

const updateMappedTodo = async (input: UpdateMappedTodoInput) => {
  const res = await API.graphql({
    query: mutations.createMappedTodo,
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

const MappedTodoContext = createContext({
  todo: {
    name: "",
    description: "",
  },
  updateMappedTodo: async (data: any): Promise<MappedTodo | null> => null,
});

const MappedTodoContextProvider = ({ children }: any) => {
  const [todo, setMappedTodo] = useState<any>(null);

  const updateMappedTodo = async (data: any) => {
    console.log(todo);
    const updatedMappedTodo: MappedTodo = await DataStore.save(
      MappedTodo.copyOf(todo!, (updated) => {
        updated.description = data.description;
        console.log(updated);
      })
    );

    return updatedMappedTodo;
  };

  // useEffect(() => {
  //   const subscription = DataStore.observeQuery(MappedTodo).subscribe(
  //     (snapshot) => {
  //       const { items, isSynced } = snapshot;
  //       console.log({ items, isSynced });
  //       if (isSynced) {
  //         setMappedTodo(items[0]);
  //       }
  //     }
  //   );

  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <MappedTodoContext.Provider value={{ todo, updateMappedTodo }}>
      {children}
    </MappedTodoContext.Provider>
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
  const { todo, updateMappedTodo } = useContext(MappedTodoContext);

  // ... After sign in through Cognito
  const getFiles = async () => console.log({ file: await Storage.list("") });
  // Error thrown

  const putFile = async () => await Storage.put("test.txt", "test");

  const putFileWithAppSync = async () => {
    const res = await API.graphql({
      query: mutations.createMappedTodo,
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

  const getMappedTodos = async () => {
    // const graphqlMappedTodos = (await API.graphql({
    //   query: queries.listMappedTodos,
    // })) as any;

    // console.log({ graphqlMappedTodos: graphqlMappedTodos.data.listMappedTodos.items });

    const dataStoreMappedTodos = await DataStore.query(MappedTodo);

    console.log({ dataStoreMappedTodos });
  };

  const createMappedTodo = async () => {
    const res = await DataStore.save(
      new MappedTodo({
        name: "first todo",
        description: "this is my first todo",
      })
    );
    console.log({ res });
  };

  const deleteMappedTodo = async () => {
    const todos = await DataStore.query(MappedTodo);

    const res = await DataStore.delete(MappedTodo, todos[0].id);
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
    <MappedTodoContextProvider>
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

                <button onClick={getMappedTodos}>Get MappedTodos</button>
                <button onClick={createMappedTodo}>Create MappedTodo</button>
                <button
                  onClick={() =>
                    updateMappedTodo({ description: "new description" })
                  }
                >
                  Update MappedTodo
                </button>
                <button onClick={deleteMappedTodo}>Delete MappedTodo</button>

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
                  <h2>MappedTodo</h2>
                  <p>{todo?.name}</p>
                  <p>{todo?.description}</p>
                </section>
              </main>
            </div>
          );
        }}
      </Authenticator>
    </MappedTodoContextProvider>
  );
}

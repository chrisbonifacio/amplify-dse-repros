import { useState, useEffect } from "react";
import { Amplify, DataStore } from "aws-amplify";
import { initSchema } from "@aws-amplify/datastore";

Amplify.configure({
  aws_appsync_graphqlEndpoint: "https://fake-appsync-endpoint/graphql",
});

const { User } = initSchema({
  models: {
    User: {
      name: "User",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        firstName: {
          name: "firstName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        lastName: {
          name: "lastName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Users",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: "f6252c821249b6b1abda9fb24481c5a4",
});

function DataStoreRepro() {
  const [withCriteria, setWithCriteria] = useState();
  const [withoutCriteria, setWithoutCriteria] = useState();

  useEffect(() => {
    const subscriptionWithCriteria = DataStore.observeQuery(User, (u) =>
      u.firstName("eq", "Test User")
    ).subscribe(
      (snapshot) =>
        setWithCriteria({
          items: snapshot.items,
          isLoading: false,
          isSynced: snapshot.isSynced,
        }),
      (error) => setWithCriteria({ items: [], error, isLoading: false })
    );

    const subscriptionWithoutCriteria = DataStore.observeQuery(User).subscribe(
      (snapshot) =>
        setWithoutCriteria({
          items: snapshot.items,
          isLoading: false,
          isSynced: snapshot.isSynced,
        }),
      (error) => setWithoutCriteria({ items: [], error, isLoading: false })
    );

    return () => {
      subscriptionWithCriteria.unsubscribe();
      subscriptionWithoutCriteria.unsubscribe();
    };
  }, []);

  const updateRecord = async () => {
    const original = (await DataStore.query(User))[0];
    await DataStore.save(
      User.copyOf(original, (updated) => {
        updated.lastName = "Updated again";
      })
    );
  };

  return (
    <div>
      <h5>DataStore Criteria Bug Repro</h5>
      <button onClick={updateRecord}>Update User</button>
      <div style={{ display: "flex" }}>
        {withCriteria && (
          <pre>withCriteria: {JSON.stringify(withCriteria, null, 2)}</pre>
        )}
        <br />
        {withoutCriteria && (
          <pre>withoutCriteria: {JSON.stringify(withoutCriteria, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeTestState = async () => {
      // DataStore.clear() doesn't appear to reliably work.
      indexedDB.deleteDatabase("amplify-datastore");
      await DataStore.save(
        new User({ firstName: "Test User", lastName: "Initial" })
      );
      setInitialized(true);
    };

    initializeTestState();
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <DataStoreRepro />;
}

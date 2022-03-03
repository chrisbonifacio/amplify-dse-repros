import { useState, useEffect } from "react";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import { initSchema } from "@aws-amplify/datastore";

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint:
    "https://xgmqp4ckgndcnl4hg7qqezvrfu.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-7gv2ywmjhvcwzjkqrmdcabuuzq",
};

Amplify.configure(awsmobile);

Amplify.Logger.LOG_LEVEL = "DEBUG";

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
      (snapshot) => {
        console.log({ withCriteria: { snapshot } });

        setWithCriteria({ items: snapshot.items, isLoading: false });
      },
      (error) => console.log({ error })
    );

    const subscriptionWithoutCriteria = DataStore.observeQuery(User).subscribe(
      (snapshot) => {
        console.log({ withoutCriteria: { snapshot } });
        setWithoutCriteria({ items: snapshot.items, isLoading: false });
      },
      (error) => console.log({ error })
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
        updated.firstName = "Updated";
      })
    );
    console.log("Updated user");
  };

  return (
    <div>
      <h5>DataStore Criteria Bug Repro</h5>
      <button onClick={updateRecord}>Update User</button>
      <div>
        {withCriteria && (
          <code>withCriteria: {JSON.stringify(withCriteria)}</code>
        )}
        <br />
        {withoutCriteria && (
          <code>withoutCriteria: {JSON.stringify(withoutCriteria)}</code>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeTestState = async () => {
      await DataStore.delete(User, Predicates.ALL);
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

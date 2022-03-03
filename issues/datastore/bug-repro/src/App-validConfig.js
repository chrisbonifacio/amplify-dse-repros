import { useState, useEffect } from "react";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import { User } from "./models";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function DataStoreRepro({ user }) {
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
    const original = await DataStore.query(User, user.id);
    await DataStore.save(
      User.copyOf(original, (updated) => {
        updated.lastName = "testing update";
      })
    );
  };

  const clearUserRecords = async () => {
    await DataStore.delete(User, Predicates.ALL);
  };

  return (
    <div>
      <h5>DataStore Criteria Bug Repro</h5>
      <button onClick={updateRecord}>Update User</button>
      <button onClick={clearUserRecords}>Clear Users</button>
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
  const [user, setUser] = useState();
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeTestState = async () => {
      await DataStore.clear();

      let savedUser;

      try {
        savedUser = (await DataStore.query(User))[0];
        setUser(savedUser);
      } catch (error) {
        console.log(error);
      }

      if (!savedUser) {
        const newUser = await DataStore.save(
          new User({ firstName: "Test User", lastName: "Initial" })
        );
        setUser(newUser);
      }

      setInitialized(true);
    };

    initializeTestState();
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <DataStoreRepro user={user} />;
}

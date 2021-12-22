import { useEffect, useState } from "react";
import { DataStore, Hub } from "aws-amplify";
import { Exercise, Routine } from "./models";
import { Authenticator } from "@aws-amplify/ui-react";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authListener = async (capsule) => {
      if (capsule.payload.event === "signIn") {
        setUser(capsule.payload.data);
      }
    };

    Hub.listen("auth", authListener);

    const subExercise = DataStore.observeQuery(Exercise).subscribe({
      next({ items, isSynced }) {
        isSynced && setExercises(items);
      },
    });

    const subRoutine = DataStore.observeQuery(Routine).subscribe({
      next({ items, isSynced }) {
        isSynced && setRoutines(items);
      },
    });

    return () => {
      subExercise.unsubscribe();
      subRoutine.unsubscribe();
      Hub.remove("auth", authListener);
    };
  }, [user]);

  const removeExercise = async (id) => {
    try {
      const exercise = await DataStore.query(Exercise, id);
      await DataStore.delete(exercise);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => {
          console.log({ user });

          const signOutAndClearDataStore = async () => {
            await signOut();
            await DataStore.clear();
          };

          return (
            <div className="App-header">
              <header>
                <h1 style={{ marginBottom: "0px" }}>DataStore</h1>
                <button onClick={signOutAndClearDataStore}>Sign Out</button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    fontSize: "16px",
                  }}
                >
                  <div>
                    <h2>Exercises</h2>

                    {exercises.map((ex) => (
                      <div key={ex.id}>
                        <h3>Exercise</h3>
                        <p>Name: {ex.name}</p>
                        <p>Owner: {ex.owner}</p>
                        <button onClick={() => removeExercise(ex.id)}>
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2>Routines</h2>

                    {routines.map((ex) => (
                      <div key={ex.id}>
                        <h3>Routine</h3>
                        <p>Name: {ex.name}</p>
                        <p>Owner: {ex.owner}</p>
                        <button onClick={() => removeExercise(ex.id)}>
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </header>
            </div>
          );
        }}
      </Authenticator>
    </div>
  );
}

export default App;

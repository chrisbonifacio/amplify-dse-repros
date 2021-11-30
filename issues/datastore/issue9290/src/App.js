import React from "react";
import { DataStore } from "aws-amplify";
import { Part } from "./models";

import "./App.css";

function App({ signOut, user }) {
  const [parts, setParts] = React.useState([]);

  const addPart = async () => {
    try {
      const newPart = await DataStore.save(
        new Part({
          name: `Part ${parts.length + 1}`,
          make: "Jeep",
          model: "Wrangler",
          registrationNumber: String(parseInt(Math.random() * 10000)),
        })
      );

      console.log(newPart);

      getParts();
    } catch (error) {
      console.log(error);
    }
  };

  const removePart = async (id) => {
    try {
      const partToDelete = await DataStore.query(Part, id);

      await DataStore.delete(partToDelete);

      getParts();
    } catch (error) {
      console.log(error);
    }
  };

  const getParts = async () => {
    try {
      const savedParts = await DataStore.query(Part);

      setParts(savedParts);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // getParts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {user && (
          <div>
            <h3>Welcome, {user?.attributes?.email}</h3>
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
        <p>Parts</p>
        <button onClick={addPart}>Add Part</button>
        {parts.map((part) => (
          <div key={part.id}>
            <p>{part.make}</p>
            <p>{part.model}</p>
            <button onClick={() => removePart(part.id)}>Delete</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Authenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import {
  createNotebook,
  deleteNotebook,
  updateNotebook,
} from "./graphql/mutations";
import { listNotebooks } from "./graphql/queries";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [noteBook, setNoteBook] = React.useState({
    title: "",
    description: "",
  });

  const getNoteBook = async () => {
    const res = await API.graphql(graphqlOperation(listNotebooks));
    setNoteBook(res.data.listNotebooks.items[0]);
  };

  const deleteNoteBook = async () => {
    const res = await API.graphql(
      graphqlOperation(deleteNotebook, { input: { id: noteBook?.id } })
    );
    console.log(res);
  };

  const editNoteBook = async () => {
    const res = await API.graphql(
      graphqlOperation(updateNotebook, {
        input: {
          id: noteBook?.id,
          title: `${noteBook?.title}-edited`,
        },
      })
    );
    console.log(res);
  };

  const saveNoteBook = async () => {
    try {
      await API.graphql(
        graphqlOperation(createNotebook, {
          input: {
            title: "My First Notebook",
            description: "a day in the life of a developer",
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteBook();
  }, []);
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welcome, {user.getUsername()}</p>
              <button onClick={signOut}>Sign Out</button>
              <button onClick={saveNoteBook}>Create Notebook</button>
              <button onClick={getNoteBook}>Refetch Notebook</button>

              <div>
                <h2>Notebook</h2>

                <p>Title: {noteBook?.title}</p>
                <p>Description: {noteBook?.description}</p>
                <p>Owner: {noteBook?.owner}</p>

                <div>
                  <button onClick={deleteNoteBook}>Delete</button>
                  <button onClick={editNoteBook}>Edit</button>
                </div>
              </div>
            </header>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;

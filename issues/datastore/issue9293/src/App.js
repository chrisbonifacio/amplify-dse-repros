import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataStore } from "aws-amplify";
import { Todo } from "./models";

function App() {
  React.useEffect(() => {
    DataStore.query(Todo)
      .then((todos) => console.log(todos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

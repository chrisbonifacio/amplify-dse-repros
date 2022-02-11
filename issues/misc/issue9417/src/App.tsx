import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "./graphql/queries";

function App() {
  const getTodos = async () => {
    console.log(await API.graphql(graphqlOperation(listTodos)));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

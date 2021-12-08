import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { Todo } from "./models";

function App() {
  const [todos, setTodos] = useState([]);

  async function saveTodo() {
    try {
      const newTodo = await DataStore.save(
        new Todo({ name: `New Todo ${todos.length + 1}` })
      );

      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTodo(id) {
    try {
      const todoToDelete = await DataStore.query(Todo, id);

      await DataStore.delete(todoToDelete);

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function clearDB() {
    try {
      await DataStore.clear();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await DataStore.query(Todo);
        console.log(res);
        setTodos(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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

        <button onClick={saveTodo}>Create Todo</button>
        <button onClick={clearDB}>Clear Database</button>

        <div style={{ display: "flex" }}>
          {todos.map((todo) => (
            <div style={{ margin: "1rem" }} key={todo.id}>
              <h1>{todo.name}</h1>
              <p>{todo.description}</p>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Todo } from "../src/models";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [newName, setNewName] = useState("");
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    function fetchData() {
      DataStore.query(Todo).then((persistedTodos) => {
        setTodos(persistedTodos);
      });
    }

    fetchData();

    const subscription = DataStore.observe(Todo).subscribe((value) => {
      fetchData();
    });
    return () => subscription.unsubscribe();
  }, []);

  async function addTodo() {
    const initialTodo = await DataStore.save(new Todo({ name: "" }));
    let savedTodo = await DataStore.query(Todo, initialTodo.id);
    if (savedTodo != null) {
      let todoWithChanges = Todo.copyOf(savedTodo, (draft) => {
        draft.name = name;
      });
      const updatedTodo = await DataStore.save(todoWithChanges);
    }
    setName("");
  }

  async function updateTodo(id, name) {
    let savedTodo = await DataStore.query(Todo, id);
    if (savedTodo != null) {
      let todoWithChanges = Todo.copyOf(savedTodo, (draft) => {
        draft.name = name;
      });
      const updatedTodo = await DataStore.save(todoWithChanges);
    }
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.name}
              onInput={(e) => updateTodo(todo.id, e.target.value)}
            />{" "}
            (id: {todo.id})
          </li>
        ))}
      </ul>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default withAuthenticator(App);

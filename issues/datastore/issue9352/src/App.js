import { useState, useEffect } from "react";
import { Amplify, DataStore } from "aws-amplify";
import { Todo } from "./models";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = async (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await DataStore.save(new Todo({ title, completed: false }));

      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const completeTodo = async (id) => {
    try {
      const original = await DataStore.query(Todo, id);
      await DataStore.save(
        Todo.copyOf(original, (updated) => {
          updated.completed = !original.completed;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id) => {
    try {
      const todoToDelete = await DataStore.query(Todo, id);
      await DataStore.delete(todoToDelete);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subTodos = DataStore.observeQuery(Todo).subscribe({
      next: ({ items, isSynced }) => {
        isSynced && setTodos(items);
      },
    });

    return () => subTodos.unsubscribe();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>DataStore observeQuery</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Add a todo"
          />
          <input type="submit" />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {todos.map((todo) => (
          <div key={todo.id}>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
            <button onClick={() => completeTodo(todo.id)}>
              Toggle Complete
            </button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

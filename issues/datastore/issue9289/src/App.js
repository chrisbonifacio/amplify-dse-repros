import React from "react";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { v4 as uidv4 } from "uuid";

import "@aws-amplify/ui-react/styles.css";
import { listTodos } from "./graphql/queries";
import { createTodo, updateTodo, deleteTodo } from "./graphql/mutations";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [editing, setEditing] = React.useState(null);

  const getTodos = async () => {
    const savedTodos = await API.graphql({
      query: listTodos,
    });
    setTodos(savedTodos.data.listTodos.items);
  };

  const addTodo = async () => {
    try {
      const newTodo = await API.graphql({
        query: createTodo,
        variables: {
          input: {
            uid: uidv4(),
            username: "chris",
            title: `Todo #${todos.length + 1}`,
          },
        },
      });
      setTodos((prev) => [...prev, newTodo.data.createTodo]);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedTodo = async (e) => {
    e.preventDefault();
    try {
      // const original = (
      //   await DataStore.query(Todo, (c) => c.id("eq", editing))
      // )[0];

      // console.log({ original });

      // const editedTodo = await DataStore.save(
      //   Todo.copyOf(original, (updated) => {
      //     updated.title = title;
      //   })
      // );

      const editedTodo = await API.graphql({
        query: updateTodo,
        variables: {
          input: {
            id: editing,
          },
        },
      });

      console.log({ editedTodo });
      setEditing(null);

      getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async (todo) => {
    try {
      const deletedTodo = await API.graphql({
        query: deleteTodo,
        variables: {
          input: { id: todo.id },
        },
      });
      console.log({ deletedTodo });
      setTodos((prev) => prev.filter((t) => t.id !== deletedTodo.id));
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <div className="App">
            <h1>Amplify Todos</h1>
            <button onClick={signOut}>Sign Out</button>
            <header className="App-header">
              <button onClick={addTodo}>Create Todo</button>
              {!todos.length ? (
                <p>No todos</p>
              ) : (
                <div style={{ display: "flex" }}>
                  {todos.map((todo) => {
                    return (
                      <div
                        key={todo.id}
                        style={{
                          border: "1px solid white",
                          padding: "1rem",
                          margin: "1rem",
                          fontSize: "1rem",
                        }}
                      >
                        {editing === todo.id ? (
                          <form onSubmit={saveEditedTodo}>
                            <input
                              name="title"
                              value={title}
                              onChange={(e) => {
                                console.log(e);
                                console.log({ todo });
                                setTitle(e.target.value);
                              }}
                            />
                            <input type="submit" />
                          </form>
                        ) : (
                          <p>Title: {todo.title}</p>
                        )}
                        <p>id: {todo.id}</p>
                        <p>Owner: {todo.username}</p>
                        {editing === todo.id ? (
                          <button onClick={() => setEditing(null)}>
                            Cancel
                          </button>
                        ) : (
                          <button onClick={() => setEditing(todo.id)}>
                            Edit
                          </button>
                        )}
                        <button onClick={() => removeTodo(todo)}>Delete</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </header>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;

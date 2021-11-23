import React from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listPublicTodos } from "../src/graphql/queries";
import { createPublicTodo, deletePublicTodo } from "../src/graphql/mutations";

const APIKEYTodos = () => {
  const [newPublicTodo, setNewPublicTodo] = React.useState("");
  const [publicTodos, setPublicTodos] = React.useState([]);

  const getPublicTodos = async () => {
    try {
      const appsyncResponse = await API.graphql({
        query: listPublicTodos,
        authMode: "API_KEY",
      });

      console.log(appsyncResponse);

      setPublicTodos(appsyncResponse.data.listPublicTodos.items);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewPublicTodo = async (e) => {
    e.preventDefault();

    try {
      await API.graphql({
        query: createPublicTodo,
        variables: {
          input: {
            title: newPublicTodo,
            completed: false,
          },
        },
        authMode: "API_KEY",
      });

      setNewPublicTodo("");

      await getPublicTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const delPublicTodo = async (id) => {
    try {
      await API.graphql({
        query: deletePublicTodo,
        variables: {
          input: {
            id,
          },
        },
        authMode: "API_KEY",
      });

      await getPublicTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Link href="/">Home</Link>
      <h2>Public Todos (API_KEY)</h2>
      <form onSubmit={createNewPublicTodo}>
        <input
          name="publicTodo"
          value={newPublicTodo}
          onChange={(e) => {
            setNewPublicTodo(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <button onClick={getPublicTodos}>Get Todos With API Key</button>
      {publicTodos.map((todo) => (
        <div key={todo.id}>
          <p key={todo.id}>{todo.title}</p>
          <button onClick={() => delPublicTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default APIKEYTodos;

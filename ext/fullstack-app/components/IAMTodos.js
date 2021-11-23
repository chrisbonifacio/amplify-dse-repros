import React from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listIAMTodos } from "../src/graphql/queries";
import { createIAMTodo, deleteIAMTodo } from "../src/graphql/mutations";

const IAMTodos = () => {
  const [newIAMTodo, setNewIAMTodo] = React.useState("");
  const [IAMTodos, setIAMTodos] = React.useState([]);

  const getIAMTodos = async () => {
    try {
      const appsyncResponse = await API.graphql({
        query: listIAMTodos,
        authMode: "AWS_IAM",
      });

      console.log(appsyncResponse);

      setIAMTodos(appsyncResponse.data.listIAMTodos.items);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewIAMTodo = async (e) => {
    e.preventDefault();

    try {
      await API.graphql({
        query: createIAMTodo,
        variables: {
          input: {
            title: newIAMTodo,
            completed: false,
          },
        },
        authMode: "AWS_IAM",
      });

      setNewIAMTodo("");

      await getIAMTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const delIAMTodo = async (id) => {
    try {
      await API.graphql({
        query: deleteIAMTodo,
        variables: {
          input: {
            id,
          },
        },
        authMode: "AWS_IAM",
      });

      await getIAMTodos();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getIAMTodos();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Link href="/">Home</Link>
      <h2>IAM Todos</h2>
      <form onSubmit={createNewIAMTodo}>
        <input
          name="IAMTodo"
          value={newIAMTodo}
          onChange={(e) => {
            setNewIAMTodo(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <button onClick={getIAMTodos}>Get Todos With API Key</button>
      {IAMTodos.map((todo) => (
        <div key={todo.id}>
          <p key={todo.id}>{todo.title}</p>
          <button onClick={() => delIAMTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default IAMTodos;

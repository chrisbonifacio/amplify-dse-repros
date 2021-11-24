import React from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listIAMTodos } from "../src/graphql/queries";
import { createIAMTodo, deleteIAMTodo } from "../src/graphql/mutations";
import {
  onCreateIAMTodo,
  onUpdateIAMTodo,
  onDeleteIAMTodo,
} from "../src/graphql/subscriptions";

const IAMTodos = () => {
  const [newIAMTodo, setNewIAMTodo] = React.useState("");
  const [IAMTodos, setIAMTodos] = React.useState([]);
  const [subAction, setSubAction] = React.useState({
    action: "",
    value: null,
  });

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
    let createSub;
    let updateSub;
    let deleteSub;

    getIAMTodos();

    createSub = API.graphql({
      query: onCreateIAMTodo,
      authMode: "AWS_IAM",
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        setSubAction({
          action: "Created: ",
          value: value.data.onCreateIAMTodo,
        });
      },
    });

    updateSub = API.graphql({
      query: onUpdateIAMTodo,
      authMode: "AWS_IAM",
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        setSubAction({
          action: "Updated: ",
          value: value.data.onUpdateIAMTodo,
        });
      },
    });

    deleteSub = API.graphql({
      query: onDeleteIAMTodo,
      authMode: "AWS_IAM",
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        setSubAction({
          action: "Deleted: ",
          value: value.data.onDeleteIAMTodo,
        });
      },
    });

    return () => {
      createSub?.unsubscribe();
      updateSub?.unsubscribe();
      deleteSub?.unsubscribe();
    };
  }, []);

  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link href="/">Home</Link>
        <h2>IAM Todos</h2>
        <form style={{ marginBottom: "1rem" }} onSubmit={createNewIAMTodo}>
          <input
            name="IAMTodo"
            value={newIAMTodo}
            onChange={(e) => {
              setNewIAMTodo(e.target.value);
            }}
          />
          <input type="submit" />
        </form>

        <button style={{ marginBottom: "1rem" }} onClick={getIAMTodos}>
          Get Todos With API Key
        </button>

        {IAMTodos.map((todo) => (
          <div key={todo.id}>
            <p key={todo.id}>{todo.title}</p>
            <button onClick={() => delIAMTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Subscriptions</h2>
        <div>
          {subAction?.action || "Listening"}:{" "}
          <pre>{JSON.stringify(subAction?.value, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default IAMTodos;

import React from "react";
import "./App.css";
import { DataStore, Hub } from "aws-amplify";
import { v4 as uidv4 } from "uuid";

import "@aws-amplify/ui-react/styles.css";
import { Profile, Todo } from "./models";
import { Authenticator } from "@aws-amplify/ui-react";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [editing, setEditing] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  const getTodos = async () => {
    const savedTodos = await DataStore.query(Todo);
    setTodos(savedTodos);
  };

  const addTodo = async () => {
    try {
      const newTodo = await DataStore.save(
        new Todo({
          uid: uidv4(),
          username: "chris",
          title: `Todo #${todos.length + 1}`,
        })
      );
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedTodo = async (e) => {
    e.preventDefault();
    try {
      const original = (
        await DataStore.query(Todo, (c) => c.id("eq", editing))
      )[0];

      console.log({ original });

      const editedTodo = await DataStore.save(
        Todo.copyOf(original, (updated) => {
          updated.title = title;
        })
      );

      console.log({ editedTodo });
      setEditing(null);

      getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async (todo) => {
    try {
      const deletedTodo = await DataStore.delete(todo);
      setTodos((prev) => prev.filter((t) => t.id !== deletedTodo.id));
    } catch (error) {
      console.error(error);
    }
  };

  const addProfile = async () => {
    try {
      const profile = await DataStore.save(
        new Profile({
          bio: "Software Engineer based in Hartford, CT",
          avatar:
            "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        })
      );

      setProfile(profile);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // DataStore.start();

    // const listener = async ({ payload }) => {
    //   const { event, data } = payload;

    //   switch (event) {
    //     case "ready":
    //       console.log("datastore is ready");
    //       break;
    //     case "modelSynced":
    //       console.log("modelSynced", data.model.name);
    //       break;
    //     default:
    //       console.log("unknown event", event, data);
    //   }
    // };

    // Hub.listen("datastore", listener);

    // return () => {
    //   Hub.remove("datastore", listener);
    // };

    const authListener = async ({ payload }) => {
      const { event } = payload;

      if (event === "signOut") {
        await addTodo();
        await DataStore.clear();
      }
    };

    Hub.listen("auth", authListener);

    let profileSub;
    let todoSub;

    profileSub = DataStore.observeQuery(Profile).subscribe(
      ({ items, isSynced }) => {
        console.log({ items, isSynced });

        if (isSynced) {
          const userProfile = items.find((p) => p.owner === "chris");
          setProfile(userProfile);
        }
      }
    );

    // todoSub = DataStore.observeQuery(Todo).subscribe(({ items, isSynced }) => {
    //   console.log({ items, isSynced });

    //   if (isSynced) {
    //     setTodos(items);
    //   }
    // });

    getTodos();

    return () => {
      profileSub?.unsubscribe();
      todoSub?.unsubscribe();
      Hub?.remove("auth", authListener);
    };
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>Amplify Todos</h1>
          <button onClick={signOut}>Sign Out</button>
          <header className="App-header">
            <h2>Welcome, {user?.username}</h2>
            {!profile ? (
              <button onClick={addProfile}>Add Profile</button>
            ) : (
              <div>
                <p>{profile.bio}</p>
                <img
                  style={{ maxWidth: "100px" }}
                  src={profile.avatar}
                  alt="avatar"
                />
              </div>
            )}
            <button onClick={addTodo}>Create Todo</button>
            {!todos?.length ? (
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
                        <button onClick={() => setEditing(null)}>Cancel</button>
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
      )}
    </Authenticator>
  );
}

export default App;

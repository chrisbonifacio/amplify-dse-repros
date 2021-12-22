import { useEffect, useState } from "react";
import "./App.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/queries";
import { createUser, deleteUser } from "./graphql/mutations";
import { Authenticator } from "aws-amplify-react";

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await API.graphql({
        query: listUsers,
      });
      setUsers(res.data.listUsers.items);
    } catch (error) {
      console.error(error);
    }
  };
  const saveUser = async (e) => {
    e.preventDefault();

    try {
      const res = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            id: (await Auth.currentAuthenticatedUser()).username,
            username,
            name,
          },
        })
      );

      setUsername("");
      setName("");

      fetchUsers();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (id) => {
    try {
      await API.graphql({
        query: deleteUser,
        variables: {
          input: {
            id,
          },
        },
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // const signOut = () => {
  //   Auth.signOut();
  // };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Authenticator>
        {/* <Authenticator>
        {({ signOut, user }) => {
          return ( */}
        <div className="App">
          <header className="App-header">
            <button>Sign Out</button>
            <form onSubmit={saveUser}>
              <h2>Create User</h2>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input type="submit" />
            </form>
            <h2>Users</h2>
            <div style={{ display: "flex" }}>
              {users?.map((user) => {
                return (
                  <div
                    style={{
                      border: "1px solid #fff",
                      padding: "1rem",
                      margin: "1rem",
                    }}
                    key={user.id}
                  >
                    <h2>{user.username}</h2>
                    <p>{user.name}</p>
                    <button onClick={() => removeUser(user.id)}>Delete</button>
                  </div>
                );
              })}
            </div>
          </header>
        </div>
      </Authenticator>
      {/* );
        }}
      </Authenticator> */}
    </div>
  );
}

export default App;

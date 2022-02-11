import logo from "./logo.svg";
import "./App.css";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { createResource } from "./graphql/mutations";
import { listResources } from "./graphql/queries";

function App() {
  const [user, setUser] = useState(null);
  const [resources, setResources] = useState([]);

  async function getResources() {
    const resources = await API.graphql(graphqlOperation(listResources));
    console.log(resources);
    setResources(resources.data.listResources.items);
  }

  useEffect(() => {
    if (!user) {
      (async () => {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        setUser(user);
      })();
    }

    if (user) getResources();
  }, [user]);

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
        {!user && (
          <button
            onClick={async () => {
              const user = await Auth.signIn("chris", "Hello123!");
              setUser(user);
            }}
          >
            Sign In
          </button>
        )}
        {user && (
          <>
            <button
              onClick={async () => {
                await API.graphql({
                  query: createResource,
                  variables: {
                    input: {
                      actualHourlyRate: 10.5,
                    },
                  },
                  authMode: "AMAZON_COGNITO_USER_POOLS",
                });
              }}
            >
              Create Resource
            </button>
            <button
              onClick={async () => {
                await Auth.signOut();
                setUser(null);
              }}
            >
              Sign Out
            </button>
          </>
        )}

        <div>
          <h2>Resources</h2>

          {resources?.map((resource) => (
            <div key={resource.id}>
              <p>Tenant ID: {resource.tenantId}</p>
              <p>Hourly Rate: {resource.actualHourlyRate}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

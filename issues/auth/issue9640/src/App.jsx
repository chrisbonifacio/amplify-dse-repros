import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import UploadS3File from "./components/UploadS3File";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello Vite + React!</p>
              <p>Welcome, {user?.getUsername()}!</p>
              <button
                onClick={async () => {
                  try {
                    await Auth.signOut();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Sign Out
              </button>

              <UploadS3File />

              <p>
                <button
                  type="button"
                  onClick={() => setCount((count) => count + 1)}
                >
                  count is: {count}
                </button>
              </p>
              <p>
                Edit <code>App.jsx</code> and save to test HMR updates.
              </p>
              <p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                {" | "}
                <a
                  className="App-link"
                  href="https://vitejs.dev/guide/features.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite Docs
                </a>
              </p>
            </header>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;

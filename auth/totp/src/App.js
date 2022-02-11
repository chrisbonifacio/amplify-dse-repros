import logo from "./logo.svg";
import { Authenticator } from "@aws-amplify/ui-react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welcome, {user.attributes.email}!</p>

              <button onClick={signOut}>Sign Out</button>
            </header>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;

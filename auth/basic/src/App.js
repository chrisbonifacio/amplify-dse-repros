import React from "react";
import "./App.css";
import { Amplify, Hub } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        default:
          setUser(null);
      }
    });
  }, []);

  return user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;

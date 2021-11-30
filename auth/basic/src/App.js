import React from "react";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";

const AuthStateApp = () => {
  const [user, setUser] = React.useState();

  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <div>
            <h1>Welcome, {user?.attributes?.email}</h1>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default AuthStateApp;

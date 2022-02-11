import { Authenticator } from "@aws-amplify/ui-react";

const Login = () => {
  return (
    <Authenticator>
      {({ user, signOut }) => {
        return <div>Welcome, {user.attributes.username}!</div>;
      }}
    </Authenticator>
  );
};

export default Login;

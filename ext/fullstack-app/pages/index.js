import React from "react";
import Link from "next/link";

function App() {
  // React.useEffect(() => {

  // }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Extensibility GraphQL API Test</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <Link href="/todos/apikey">Public Todos (API_KEY)</Link>
        <Link href="/todos/iam">Public Todos (IAM)</Link>
        <Link href="/todos/oidc">Private Todos (OIDC)</Link>
        <Link href="/todos/cognito">Private Todos (Cognito)</Link>
      </div>
    </div>
  );
}

export default App;

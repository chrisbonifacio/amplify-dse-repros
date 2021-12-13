import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, DataStore, API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Customers } from "./models";
import awsConfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsConfig);

function App() {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const customers = await DataStore.query(Customers);
      setCustomers(customers);
    })();
  }, []);

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

        {customers.map((customer) => (
          <div key={customer.id}>
            <h3>Name: {customer.name}</h3>
            <p>Phone: {customer.phone}</p>
            <p>Email: {customer.email}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default withAuthenticator(App);

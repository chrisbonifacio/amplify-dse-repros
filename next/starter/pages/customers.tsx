import { API, graphqlOperation } from "aws-amplify";
import { MouseEventHandler, useEffect, useState } from "react";
import { Customer, CreateCustomerInput, UpdateCustomerInput } from "../src/API";
import { createCustomer, updateCustomer } from "../src/graphql/mutations";
import { onMutateCustomer } from "../src/graphql/subscriptions";
import Link from "next/link";
import { getCustomer } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const createNewCustomer: MouseEventHandler = async () => {
    const input: CreateCustomerInput = {
      name: "Chris",
      email: "christopher.bonifacio@gmail.com",
      admin_notes: "notes",
      customer_notes: "my notes",
      Mobile: "1234567890",
    };

    try {
      const newCustomer = await API.graphql({
        query: createCustomer,
        variables: {
          input,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      console.log({ newCustomer });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCustomer = async () => {
    try {
      const response = await API.graphql({
        query: getCustomer,
        variables: {
          id: "73790b2d-6f8d-4555-bdb0-604725e2c640",
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      setCustomers([response.data.getCustomer]);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateExistingCustomer: MouseEventHandler = async () => {
    const input: UpdateCustomerInput = {
      id: "73790b2d-6f8d-4555-bdb0-604725e2c640",
      name: "Chris updated",
    };
    try {
      await API.graphql({
        query: updateCustomer,
        variables: {
          input,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subscriptionOnCreate = (
      API.graphql(graphqlOperation(onMutateCustomer)) as any
    ).subscribe({
      next: (customerData: any) => {
        console.log("subscription data");
        console.log(customerData);
        // setTimeout(fetchCustomer, 1000); // data is not available immediately after subscription
      },
      error: (error: any) => console.warn(error),
    });

    return () => {
      subscriptionOnCreate.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Customers</h2>
      <button onClick={createNewCustomer}>Create Customer</button>
      <button onClick={updateExistingCustomer}>Update Customer</button>
      <button onClick={fetchCustomer}>Fetch Customer</button>
      {customers.map((customer: Customer) => (
        <div key={customer.id}>{customer.name}</div>
      ))}
    </div>
  );
};

export default Customers;

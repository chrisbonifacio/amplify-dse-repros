import { API, graphqlOperation } from "aws-amplify";
import { MouseEventHandler, useEffect, useState } from "react";
import { City, CreateCityInput, UpdateCityInput } from "../src/API";
import { createCity, deleteCity, updateCity } from "../src/graphql/mutations";
import { onUpdateCity } from "../src/graphql/subscriptions";
import Link from "next/link";
import { getCity } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

const Cities = () => {
  const [cities, setcities] = useState<City[]>([]);

  const createNewCity: MouseEventHandler = async () => {
    const input: CreateCityInput = {
      name: "My City",
      country: "USA",
      zipCode: "12345",
    };

    try {
      const newcity = await API.graphql({
        query: createCity,
        variables: {
          input,
        },
        authMode: "API_KEY",
      });

      console.log({ newcity });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCity = async () => {
    try {
      const response = (await API.graphql({
        query: getCity,
        variables: {
          id: "ceedeaf9-e9f9-45b3-ac89-ded3df3dfa2b",
        },
        authMode: "API_KEY",
      })) as any;

      setcities([response?.data?.getCity]);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateExistingCity: MouseEventHandler = async () => {
    const input: UpdateCityInput = {
      id: "ceedeaf9-e9f9-45b3-ac89-ded3df3dfa2b",
      name: "My City Updated",
    };

    try {
      const updatedCity = await API.graphql({
        query: updateCity,
        variables: {
          input: {
            id: "ceedeaf9-e9f9-45b3-ac89-ded3df3dfa2b",
            name: "Testing Updates",
            country: "USA",
            zipCode: "10463",
          },
        },
        authMode: "API_KEY",
      });

      console.log({ updatedCity });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCity = async () => {
    try {
      const deletedCity = await API.graphql({
        query: deleteCity,
        variables: {
          input: {
            id: "ceedeaf9-e9f9-45b3-ac89-ded3df3dfa2b",
          },
        },
        authMode: "API_KEY",
      });

      console.log(deletedCity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subscriptionOnCreate = (
      API.graphql(graphqlOperation(onUpdateCity)) as any
    ).subscribe({
      next: (cityData: any) => {
        console.log("subscription data");
        console.log(cityData);
        // setTimeout(fetchCity, 1000); // data is not available immediately after subscription
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
      <h2>Cities</h2>
      <button onClick={createNewCity}>Create City</button>
      <button onClick={updateExistingCity}>Update City</button>
      <button onClick={fetchCity}>Fetch City</button>
      <button onClick={removeCity}>Delete City</button>
      {cities.map((city: City) => (
        <div key={city.id}>{city.name}</div>
      ))}
    </div>
  );
};

export default Cities;

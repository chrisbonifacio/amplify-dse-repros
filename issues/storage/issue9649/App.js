import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Amplify, Storage, Analytics } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.Logger.LOG_LEVEL = "DEBUG";

Amplify.configure({
  ...awsconfig,
  // Analytics: {
  //   disabled: true,
  // },
});

export default function App() {
  const [string, setString] = React.useState("");
  const putFile = async () => {
    try {
      await Storage.put("test-android.txt", "Hello World!");
    } catch (error) {
      console.error(error);
    }
  };

  const recordEvent = async () => {
    const stringOfChars = "a".repeat(51);

    console.log(stringOfChars.length);

    try {
      const eventType = {
        name: "test-event",
        attributes: {
          [stringOfChars]: "test-attribute",
        },
      };
      const res = await Analytics.record(eventType);

      console.log({ res });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={putFile} title="Put File" />
      <Button onPress={recordEvent} title="Record Event" />

      <Text>String: {string}</Text>
      <Text>Length: {string.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

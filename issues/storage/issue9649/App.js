import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Amplify, Storage, Analytics, Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

Amplify.Logger.LOG_LEVEL = "DEBUG";

const Config = {
  REACT_APP_ANALYSIS_BUCKET:
    "starter063640379be84c2f99b2df107a4ca1af163147-dev",
  REACT_APP_REGION: "us-east-1",
};

Amplify.configure({
  Analytics: {
    disabled: true,
  },
  Auth: {
    identityPoolId: awsconfig.aws_cognito_identity_pool_id,
    region: awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
  },
  Storage: {
    bucket: Config.REACT_APP_ANALYSIS_BUCKET,
    region: Config.REACT_APP_REGION,
  },
});

function App() {
  const [string, setString] = React.useState("");

  const putFile = async () => {
    try {
      await Auth.currentCredentials();
      await Storage.put("test.txt", "Hello World!", {
        level: "private",
      });
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
      <Button onPress={() => Auth.signOut()} title="Sign Out" />
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

export default withAuthenticator(App);

import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;

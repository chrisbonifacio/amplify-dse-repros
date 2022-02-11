import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

import "../styles/globals.css";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;

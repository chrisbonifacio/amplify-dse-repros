import Amplify from "aws-amplify";
import awsExports from "../src/aws-exports";

import "@aws-amplify/ui-react/styles.css";

import "../styles/globals.css";

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

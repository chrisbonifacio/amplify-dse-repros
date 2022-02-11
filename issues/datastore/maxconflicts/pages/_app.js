import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure(awsconfig);

Amplify.Logger.LOG_LEVEL = "DEBUG";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

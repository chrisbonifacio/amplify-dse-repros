import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";

Amplify.configure({
  ...awsconfig,
  Auth: {
    ...awsconfig,
    mandatorySignIn: false,
  },
  Storage: {
    ...awsconfig,
    AWSS3: {
      customPrefix: {
        public: "",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;

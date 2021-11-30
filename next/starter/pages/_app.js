import "../styles/globals.css";
import { Amplify, withSSRContext } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  let user = null;

  try {
    const { Auth } = withSSRContext(ctx);

    user = await Auth.currentAuthenticatedUser();

    console.log({ user });

    return {
      pageProps: {
        user,
      },
    };
  } catch (error) {
    return {
      pageProps: {
        error,
      },
    };
  }
};

export default MyApp;

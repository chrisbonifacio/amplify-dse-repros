import Router from "next/router";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Auth0Provider } from "@auth0/auth0-react";
import awsconfig from "../src/aws-exports";

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

const onRedirectCallback = (appState) => {
  // Use Next.js's Router.replace method to replace the url
  Router.replace(appState?.returnTo || "/");
};

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={typeof window !== "undefined" && window.location.origin}
      onRedirectCallback={onRedirectCallback}
      scope={process.env.NEXT_PUBLIC_AUTH0_SCOPE}
    >
      <AmplifyProvider>
        <Component {...pageProps} />
      </AmplifyProvider>
    </Auth0Provider>
  );
}

export default MyApp;

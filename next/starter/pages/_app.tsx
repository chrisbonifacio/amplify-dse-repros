import type { AppProps } from "next/app";
import { Amplify, DataStore, syncExpression } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import { Todo } from "../src/models";

import "../styles/globals.css";

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
  ssr: true,
});

DataStore.configure({
  syncExpressions: [
    syncExpression(Todo, () => {
      return (todo) => todo.name("eq", "test");
    }),
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

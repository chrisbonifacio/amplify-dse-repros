import type { AmplifyApiGraphQlResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  resources.api.GraphQLAPI.additionalAuthenticationProviders = [
    {
      authenticationType: "AMAZON_COGNITO_USER_POOLS",
      userPoolConfig: {
        awsRegion: "us-east-1",
        userPoolId: "us-east-1_xupnxN1CM",
      },
    },
    {
      authenticationType: "AWS_IAM",
    },
    {
      authenticationType: "OPENID_CONNECT",
      openIdConnectConfig: {
        authTtl: 0,
        clientId: "liO9Y36I2JPPM6hUKd0Ka49Boe9d5UWO",
        iatTtl: 0,
        issuer: "https://dev-7w7q5fl7.us.auth0.com",
      },
    },
  ];
}

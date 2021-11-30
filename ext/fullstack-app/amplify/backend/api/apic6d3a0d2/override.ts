// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiRestResourceStackTemplate) {
  const { restApiId } = resources.deploymentResource;

  resources.authorizer = {
    name: "CognitoAuthorizer",
    type: "COGNITO_USER_POOLS",
    identitySource: "method.request.header.Authorization",
    restApiId,
    providerArns: [
      "arn:aws:cognito-idp:us-east-1:123710206839:userpool/us-east-1_xupnxN1CM",
    ],
  };
}

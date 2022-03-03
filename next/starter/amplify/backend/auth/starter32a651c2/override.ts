import { AmplifyAuthCognitoStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  resources.userPool.schema = [
    ...(resources.userPool.schema as any[]),
    {
      attributeDataType: "String",
      developerOnlyAttribute: false,
      mutable: true,
      name: "my_custom_attribute",
      required: false,
    },
  ];
}

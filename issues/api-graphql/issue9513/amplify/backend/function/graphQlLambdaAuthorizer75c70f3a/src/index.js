const { CognitoJwtVerifier } = require("aws-jwt-verify");

exports.handler = async (event) => {
  console.log(`event >`, JSON.stringify(event, null, 2));

  const {
    authorizationToken,
    requestContext: { apiId, accountId },
  } = event;

  let response = {
    isAuthorized: false,
    resolverContext: {
      userid: "test user",
      info: "contextual information A",
      more_info: "contextual information B",
    },
    deniedFields: [
      `Mutation.createPermission`,
      `Mutation.updatePermission`,
      `Mutation.deletePermission`,
    ],
    ttlOverride: 0,
  };

  try {
    const verifier = CognitoJwtVerifier.create({
      userPoolId: "us-east-1_UrraAvHrw",
      tokenUse: "access",
      clientId: "7gb622j3ir3oatedu8fodci6ev",
    });

    const jwt = authorizationToken.replace(/^Bearer\s/, "");

    const payload = await verifier.verify(jwt);
    console.log("Token is valid. Payload: ", payload);

    if (
      payload["cognito:groups"] &&
      payload["cognito:groups"].includes("enterprise-admins")
    ) {
      response.deniedFields = [];
    }

    response.isAuthorized = true;
  } catch (error) {
    console.log("Token not valid");
  }

  console.log(`response >`, JSON.stringify(response, null, 2));
  return response;
};

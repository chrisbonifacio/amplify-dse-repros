/* Amplify Params - DO NOT EDIT
	API_STARTER_GRAPHQLAPIENDPOINTOUTPUT
	API_STARTER_GRAPHQLAPIIDOUTPUT
	AUTH_STARTER32A651C2_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

require("isomorphic-fetch");
const AUTH_TYPE = require("aws-appsync").AUTH_TYPE;
const AWSAppSyncClient = require("aws-appsync").default;

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify("hello"),
  };
  return response;
};

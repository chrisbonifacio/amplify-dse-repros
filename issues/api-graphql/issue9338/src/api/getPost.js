import { API } from "aws-amplify";
import { getPost } from "../graphql/queries";

export async function getPostById(id, callback) {
  try {
    const res = await API.graphql({
      query: getPost,
      variables: {
        id,
      },
      authMode: "API_KEY",
    });
    callback(res.data.getPost);
  } catch (error) {
    console.error(error);
  }
}

import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

export async function getPosts(callback) {
  try {
    const res = await API.graphql(graphqlOperation(listPosts));
    callback(res.data.listPosts.items);
  } catch (error) {
    console.error(error);
  }
}

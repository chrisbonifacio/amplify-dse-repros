import React from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { listBlogs } from "../src/graphql/queries";
import { createBlog, deleteBlog } from "../src/graphql/mutations";

const CognitoBlogs = () => {
  const [newBlog, setNewBlog] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);

  const getBlogs = async () => {
    try {
      const appsyncResponse = await API.graphql({
        query: listBlogs,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      setBlogs(appsyncResponse.data.listBlogs.items);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewBlog = async (e) => {
    e.preventDefault();

    try {
      await API.graphql({
        query: createBlog,
        variables: {
          input: {
            name: newBlog,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      setNewBlog("");

      await getBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const delBlog = async (id) => {
    try {
      await API.graphql({
        query: deleteBlog,
        variables: {
          input: {
            id,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      await getBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Link href="/">Home</Link>

      <Authenticator>
        {({ signOut, user }) => (
          <>
            <h2>Private Blogs (Cognito)</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Welcome, {user?.attributes?.email || user?.attributes?.sub}</p>
              <button
                style={{ height: "2rem", marginLeft: "1rem" }}
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>

            <form onSubmit={createNewBlog}>
              <input
                name="newBlog"
                value={newBlog}
                onChange={(e) => {
                  setNewBlog(e.target.value);
                }}
              />
              <input type="submit" />
            </form>
            <button onClick={getBlogs}>Get Blogs With Cognito</button>
            {blogs.map((blog) => (
              <div key={blog.id}>
                <p key={blog.id}>{blog.name}</p>
                <button onClick={() => delBlog(blog.id)}>Delete</button>
              </div>
            ))}
          </>
        )}
      </Authenticator>
    </div>
  );
};

export default CognitoBlogs;

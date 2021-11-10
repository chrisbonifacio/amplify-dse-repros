import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Amplify, API } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listPosts } from "./graphql/queries";

Amplify.Logger.LOG_LEVEL = "DEBUG";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await API.graphql({
        query: listPosts,
        authMode: "AWS_IAM",
      });
      setPosts(res.data.listPosts.items);
      console.log(res.data.listPosts.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    // <AmplifyAuthenticator>
    //   <AmplifySignOut />
    <div className="App-header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button>Create Post</button>

        {posts.map((post) => (
          <div
            style={{
              border: "1px solid white",
              padding: "1rem",
              margin: "1rem",
            }}
            key={post.id}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </header>
    </div>
    // </AmplifyAuthenticator>
  );
}

export default App;

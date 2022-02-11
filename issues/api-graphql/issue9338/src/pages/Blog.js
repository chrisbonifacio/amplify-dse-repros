import { API, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/getPosts";

import { onCreatePost } from "../graphql/subscriptions";
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const sub = API.graphql({
      query: onCreatePost,
      variables: {
        owner: "chris",
      },
    }).subscribe({
      next: (post) => {
        console.log(post);
      },
      error: (err) => console.error(err),
    });

    getPosts((posts) => setPosts(posts));

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Blog</h2>

      <div>
        <Link to="/post/create">Create Post</Link>
      </div>

      <div>
        <h3>Posts</h3>
        {posts.map((post) => {
          return <Link to={`/post/${post.id}`}>{post.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Blog;

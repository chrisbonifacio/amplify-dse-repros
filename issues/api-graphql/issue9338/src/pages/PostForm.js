import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../graphql/mutations";

const PostForm = ({ onSubmit, post }) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const input = Object.fromEntries(formData);

    await API.graphql({
      query: createPost,
      variables: { input },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    navigate("/blog");
  }

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <div>
            <h2>{post ? "Edit" : "Create"} Post</h2>
            <form onSubmit={onSubmit ? onSubmit : handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={post?.title}
              />
              <input
                type="text"
                name="content"
                placeholder="Content"
                defaultValue={post?.content}
              />
              <input type="submit" />
            </form>
            <Link to={`../${post?.id}`}>Cancel</Link>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default PostForm;

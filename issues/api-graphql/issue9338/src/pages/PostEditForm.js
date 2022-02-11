import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../api/getPost";
import { updatePost } from "../graphql/mutations";
import PostForm from "./PostForm";

const PostEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const input = Object.fromEntries(formData);

    await API.graphql({
      query: updatePost,
      variables: {
        input: {
          id,
          ...input,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    navigate("/blog");
  }

  useEffect(() => {
    getPostById(id, (post) => setPost(post));
  }, [id]);

  return <PostForm onSubmit={handleSubmit} post={post} />;
};

export default PostEditForm;

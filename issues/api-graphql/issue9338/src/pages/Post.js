import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../api/getPost";
import { deletePost } from "../graphql/mutations";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState();

  async function removePost(id) {
    try {
      await API.graphql({
        query: deletePost,
        variables: {
          input: {
            id,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      navigate("/blog");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPostById(id, (post) => setPost(post));
  }, [id]);

  return (
    <div>
      <Link to="/blog">Back</Link>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>

      <div>
        <Link to="edit">
          <button>Edit</button>
        </Link>
        <button onClick={() => removePost(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;

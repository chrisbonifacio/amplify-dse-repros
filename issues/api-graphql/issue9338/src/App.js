import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import PostForm from "./pages/PostForm";
import PostEditForm from "./pages/PostEditForm";
import Login from "./pages/Login";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function Layout({ user }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="blog">Blog</Link>{" "}
      </nav>

      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post" element={<Posts />}>
            <Route path="create" element={<PostForm />} />
            <Route path=":id" element={<Post />} />
            <Route path=":id/edit" element={<PostEditForm />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

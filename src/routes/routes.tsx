import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import LoginComponent from "../components/LoginComponent";
import ManagePostComponent from "../components/ManagePost";
import PostDetails from "../components/PostDetails";
import PostList from "../components/PostList";
import AdminPostList from "../components/AdminPostList";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />

        <Route path="/login" element={<LoginComponent />} />

        <Route path="/manage" element={<ManagePostComponent />} />

        <Route path="/posts" element={<PostList />} />

        <Route path="/posts/:id" element={<PostDetails />} />

        <Route path="/posts/admin" element={<AdminPostList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

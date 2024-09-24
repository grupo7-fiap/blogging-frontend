import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import LoginComponent from "../components/LoginComponent";
import ManagePostComponent from "../components/ManagePost";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />

        <Route path="/login" element={<LoginComponent />} />

        <Route path="/manage" element={<ManagePostComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

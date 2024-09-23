import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import LoginComponent from "../components/LoginComponent";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />

        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

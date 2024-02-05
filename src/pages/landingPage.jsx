import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SelectPage from "./selectPage.jsx";
import "./landingPage.css";
import logo from "../logo.png";

const LandingPage = () => {
  return (
    <Router>
      <div className="landingPage">
        <img src={logo} alt="Landing page" />
        <button>
          <Link to="/selectPage">Generate your travel plan now!</Link>
        </button>

        <Routes>
          <Route path="/selectPage" element={<SelectPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LandingPage;

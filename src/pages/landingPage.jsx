import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SelectPage from "./selectPage.jsx";
import "./landingPage.css";
import logo from "../logo.png";

const LandingPage = ({ setShowLandingPage }) => {
  const handleButtonClick = () => {
    // Call the function from props to hide the landing page
    setShowLandingPage(false);
  };
  return (
    <Router>
      <div className="landingPage">
        <img src={logo} alt="Landing page" />
        <button onClick={handleButtonClick}>
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

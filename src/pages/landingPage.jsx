import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SelectPage from "./selectPage.jsx";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <Router>
      <div className="landingPage">
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

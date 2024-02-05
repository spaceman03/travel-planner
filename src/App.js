import React from "react";
import "./App.css";
import LandingPage from "./Pages/landingPage.jsx";
import { useState } from "react";
import SelectPage from "./ages/selectPage.jsx";
// import { Routes } from "react-router";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  return (
    <div className="App">
      {showLandingPage && (
        <LandingPage setShowLandingPage={setShowLandingPage} />
      )}
      {!showLandingPage && <SelectPage />}
    </div>
  );
}

export default App;

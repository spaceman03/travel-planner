import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SelectPage from "./pages/selectPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <button>
          <Link to="/selectPage">Generate your travel plan now!</Link>
        </button>

        <Routes>
          <Route path="/selectPage" element={<SelectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

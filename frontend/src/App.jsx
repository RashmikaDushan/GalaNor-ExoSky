import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css'
import HomePage from "./pages/HomePage"; // Import HomePage component
import SkyView from "./pages/SkyView"; // Import HomePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exoskyview" element={<SkyView />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import React from "react";
import MarketPlace from "./pages/MarketPlace/MarketPlace.jsx"
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

        <Route index element={<MarketPlace />} />
        <Route path="/login" element={<DashBoard />} />

        </Routes>
    </Router>
  );
}

export default App;

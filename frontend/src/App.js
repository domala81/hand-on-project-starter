import "./App.css";
import React from "react";
import MarketPlace from "./pages/MarketPlace/MarketPlace.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import MyAPIs from "./pages/MyAPIs/MyAPIs.jsx";
import BGRemoverApp from "./pages/BGRemoverApp/BGRemoverApp.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/login" element={<DashBoard />} />
        <Route path="/myaccount" element={<MyAPIs />} />
        <Route path="/profile" element={<MyAPIs />} />
        <Route path="/api/bgremover" element={<BGRemoverApp />} />
      </Routes>
    </Router>
  );
}

export default App;

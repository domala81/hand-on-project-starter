import "./App.css";
import React, { useState, useEffect } from "react";
import MarketPlace from "./pages/MarketPlace/MarketPlace.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import MyAPIs from "./pages/MyAPIs/MyAPIs.jsx";
import BGRemoverApp from "./pages/BGRemoverApp/BGRemoverApp.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [apiList, setApiList] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/apis`).then((res) => {
      setApiList(res.data);
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketPlace apiList={apiList} />} />
        <Route path="/login" element={<DashBoard />} />
        <Route path="/myaccount" element={<MyAPIs apiList={apiList} />} />
        <Route path="/profile" element={<MyAPIs />} />
        <Route path="/api/bgremover" element={<BGRemoverApp />} />
      </Routes>
    </Router>
  );
}

export default App;

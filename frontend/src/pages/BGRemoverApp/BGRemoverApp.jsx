import logo from "../../utils/logo.svg";
import styles from "./BGRemoverApp.module.css";
import React from "react";
import LeftInterface from "./LeftInterface.jsx";
import RightInterface from "./RightInterface.jsx";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function BGRemoverApp() {
  const navigate = useNavigate();

  return (
    <div className={styles.total}>
      <header className={styles.header}>
        <img
          src={logo}
          className={styles.logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </header>

      <div className={styles.body}>
        <LeftInterface />
        <RightInterface />
      </div>
    </div>
  );
}

export default BGRemoverApp;

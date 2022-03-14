import logo from "../../utils/logo.svg";
import styles from "./navBar.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function navBar({ viewModal }) {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // eslint-disable-next-line no-undef
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/login`).then((res) => {
    setIsLoggedIn(res.data.loginStatus);
  });

  return (
    <header className={styles.header}>
      <img
        src={logo}
        className={styles.logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      {!isLoggedIn ? (
        <button
          type="button"
          className={styles.loginButton}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login / Signup
        </button>
      ) : (
        <div className={styles.navLinks}>
          <p
            onClick={() => {
              navigate("/myaccount");
            }}
          >
            My APIs
          </p>
          <p
            onClick={() => {
              navigate("/profile");
            }}
          >
            {" "}
            My Account{" "}
          </p>
          <button
            type="button"
            className={styles.loginButton}
            onClick={() => {
              viewModal(true);
            }}
          >
            +New API
          </button>
        </div>
      )}
    </header>
  );
}

export default navBar;

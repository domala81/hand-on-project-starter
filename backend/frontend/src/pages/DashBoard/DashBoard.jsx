import logo from "../../utils/logo.svg";
import dashBoardIcon from "../../utils/DashBoardIcon.svg";
import styles from "./DashBoard.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function loginUser(event) {
    event.preventDefault();
    const { email, password } = user;

    if (email && password) {
      axios
        // eslint-disable-next-line no-undef
        .post("/login", user)
        .then((res) => {
          if (res.data.status === 400) {
            alert(res.data.description);
          } else {
            navigate("/");
          }
        });
    } else {
      alert("Invalid input");
    }
  }

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
        {/* Welcome Board (Left-half) */}
        <div className={styles.welcomeBoard}>
          <img
            src={dashBoardIcon}
            className={styles.welcomeBoardIcon}
            alt="icon"
          />
          <h1 className={styles.welcomeTitle}> Welcome to your Dashboard </h1>
          <p className={styles.welcomeText}>
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>

        {/* login-box (Right-half) */}
        <div className={styles.loginBoard}>
          <div className={styles.loginBox}>
            <form className={styles.loginContent}>
              <label className={styles.loginText}>Login to your account</label>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className={styles.loginInput}
                value={user.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className={styles.loginInput}
                value={user.password}
                autoComplete="off"
                onChange={handleChange}
                required
              />

              <input
                type="submit"
                value="Login / Signup"
                className={styles.loginButton}
                onClick={loginUser}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

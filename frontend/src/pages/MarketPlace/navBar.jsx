import logo from '../../utils/logo.svg';
import styles from './MarketPlace.module.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function navBar () {

  const navigate = useNavigate();

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  axios.get("http://localhost:4040/login")
  .then((res) => {
    setIsLoggedIn(res.data.loginStatus);
  });


  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      { (!isLoggedIn)
        ?
        <button
          type="button"
          className={styles.loginButton}
          onClick= { () => { navigate('/login'); } }>
          Login / Signup
        </button>
        :
        <div className={styles.navLinks}>
          <p> My APIs </p>
          <p> My Account </p>
          <button
            type="button"
            className={styles.loginButton}
            >
            +New API
          </button>
        </div>
      }
    </header>
  );

}

export default navBar;

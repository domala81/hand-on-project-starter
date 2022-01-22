import logo from '../../utils/logo.svg';
import BGRemover from '../../utils/BGRemover.svg';
import styles from './MarketPlace.module.css';
import React from "react";
import APICard from "./APICard.jsx";

function MarketPlace() {

  return (

    <div className={styles.total}>

      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <button type="button" className={styles.loginButton}>Login / Signup</button>
      </header>

      <div className={styles.body}>


        <div className={styles.BGRemover}>

          <img src={BGRemover} alt="BG Remover" />
          <span className={styles.violetBox}> </span>

          <div>
            <p className={styles.BGRemoverText}>Background Image Remove</p>
            <p className={styles.BGRemoverTag}>100% automatic and free</p>
          </div>

          <button type="button" className={styles.appButton}>View App</button>

        </div>

        <h2 className={styles.AllAPIs}>All APIs</h2>

        <div className={styles.APIContainer}>

          <main className={styles.APIGrid}>

            <APICard />
            <APICard />
            <APICard />
            <APICard />
            <APICard />
            <APICard />
            <APICard />
            <APICard />

          </main>

        </div>

      </div>

    </div>
  );
}

export default MarketPlace;

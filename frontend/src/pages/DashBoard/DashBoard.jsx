
import logo from '../../utils/logo.svg';
import dashBoardIcon from '../../utils/DashBoardIcon.svg';
import styles from './DashBoard.module.css';
import React from "react";

function DashBoard() {

  return (

    <div className={styles.total}>

      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>

      <div className={styles.body}>

        {/* Welcome Board (Left-half) */}
        <div className={styles.welcomeBoard}>

            <img src={dashBoardIcon} className={styles.welcomeBoardIcon} alt="icon" />
            <h1 className={styles.welcomeTitle}> Welcome to your Dashboard </h1>
            <p className={styles.welcomeText}>Your uploaded APIs will be displayed here once you login to your account</p>

        </div>

        {/* login-box (Right-half) */}
        <div className={styles.loginBoard}>

          <div className={styles.loginBox}>


            <form className={styles.loginContent}>

                <label className={styles.loginText}>Login to your account</label>
                <input type="email" placeHolder="Email address" className={styles.loginInput} required/>
                <input type="password" placeHolder="Password" className={styles.loginInput} required/>

                <input type="submit" value="Login / Signup" className={styles.loginButton}/>
            </form>


          </div>

        </div>

      </div>


    </div>
  );
}

export default DashBoard;

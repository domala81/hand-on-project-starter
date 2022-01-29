
import styles from './MarketPlace.module.css';
import React from "react";
import Body from "./Body.jsx";
import NavBar from "./navBar.jsx";



function MarketPlace() {


  return (

    <div className={styles.total}>

      <NavBar />

      <Body />

    </div>
  );
}

export default MarketPlace;

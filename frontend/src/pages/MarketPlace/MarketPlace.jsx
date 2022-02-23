import styles from "./MarketPlace.module.css";
import React, { useState } from "react";
import Body from "./Body.jsx";
import NavBar from "../../components/navBar/navBar.jsx";
import Modal from "../../components/newAPIModal/newAPIModal.jsx";

function MarketPlace() {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.total}>
      {modal && <Modal viewModal={setModal} />}

      <NavBar viewModal={setModal} />

      <Body />
    </div>
  );
}

export default MarketPlace;

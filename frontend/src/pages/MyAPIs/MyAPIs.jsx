import React, { useState } from "react";
import styles from "./MyAPIs.module.css";
import NavBar from "../../components/navBar/navBar.jsx";
import APICard from "./APICard.jsx";
import Modal from "../../components/newAPIModal/newAPIModal.jsx";

function MyAPIs() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal && <Modal viewModal={setModal} />}
      <NavBar viewModal={setModal} />

      <div className={styles.body}>
        <h2 className={styles.heading}>Your Uploaded APIs</h2>

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

export default MyAPIs;

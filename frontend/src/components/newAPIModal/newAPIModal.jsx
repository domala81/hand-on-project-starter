import React from "react";
import styles from "./newAPIModal.module.css";

function newAPIModal({ viewModal }) {
  return (
    <div className={styles.modal}>
      <div
        className={styles.modalBG}
        onClick={() => {
          viewModal(false);
        }}
      />
      <div
        className={styles.modalContainer}
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <p>Add new API</p>
        <input
          type="text"
          placeholder="API Name"
          name="APIName"
          className={styles.input}
          autoComplete="off"
          required
        />
        <input
          type="text"
          placeholder="API End Point"
          name="APIEndPoint"
          className={styles.input}
          autoComplete="off"
          required
        />
        <textarea
          rows={3}
          style={{ resize: "none" }}
          placeholder="Description of API"
          name="APIDescription"
          className={styles.input}
          autoComplete="off"
          required
        />
        <button className={styles.addAPIButton}>Add API</button>
      </div>
    </div>
  );
}

export default newAPIModal;

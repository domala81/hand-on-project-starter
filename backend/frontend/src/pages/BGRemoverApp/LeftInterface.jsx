import React from "react";
import BGRemover from "../../utils/BGRemover.svg";
import styles from "./BGRemoverApp.module.css";

function LeftInterface() {
  return (
    <div className={styles.appInfo}>
      <h1 className={styles.appTitle}> Remove image background </h1>
      <p className={styles.appTagLine}> 100% automatic and free </p>
      <img
        src={BGRemover}
        className={styles.BGRemoverPhoto}
        alt="Background Remover"
      />
    </div>
  );
}

export default LeftInterface;

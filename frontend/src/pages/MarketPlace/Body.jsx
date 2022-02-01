import BGRemover from "../../utils/BGRemover.svg";
import styles from "./MarketPlace.module.css";
import React from "react";
import APICard from "./APICard.jsx";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.BGRemover}>
        <img src={BGRemover} alt="BG Remover" />
        <span className={styles.violetBox}> </span>

        <div>
          <p className={styles.BGRemoverText}>Background Image Remove</p>
          <p className={styles.BGRemoverTag}>100% automatic and free</p>
        </div>

        <button
          type="button"
          className={styles.appButton}
          onClick={() => {
            navigate("/api/bgremover");
          }}
        >
          View App
        </button>
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
  );
}

export default Body;

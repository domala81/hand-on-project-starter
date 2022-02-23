import React from "react";
import styles from "./MyAPIs.module.css";
import AllPurposeImage from "../../utils/APIsImage.svg";

function APICard() {
  return (
    <div>
      <article className={styles.APIbox}>
        <img
          src={AllPurposeImage}
          className={styles.APIImage}
          alt="API Image"
        />

        <div className={styles.APIText}>
          <h3>API Name</h3>
          <p>
            The descriptipn of the API in quick brief and we will truncate it
            here, it is continued but shows dots after here
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.editButton}>
            <span className="material-icons">edit</span>
          </button>
          <button className={styles.deleteButton} n>
            <span className="material-icons">delete</span>
          </button>
        </div>
      </article>
    </div>
  );
}

export default APICard;

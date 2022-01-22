
import BGRemover from '../../utils/BGRemover.svg';
import styles from './MarketPlace.module.css';
import React from "react";

function APICard() {

  return (

    <article className={styles.APIbox}>
      <img src={BGRemover} alt="BG Remover" />
      <div className={styles.APIText}>
        <h3>Background Remove</h3>
        <p>The descriptipn of the API in quick brief and we will truncate it here, it is continued  but shows dots after here</p>
      </div>
    </article>

  );
}

export default APICard;

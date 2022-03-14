import AllPurposeImage from "../../utils/APIsImage.svg";
import styles from "./MarketPlace.module.css";
import React from "react";
import PropTypes from "prop-types";

function APICard({ name, endPoint, description }) {
  return (
    <article className={styles.APIbox} onClick={() => window.open(endPoint)}>
      <img src={AllPurposeImage} alt="API Image" />
      <div className={styles.APIText}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

APICard.propTypes = {
  name: PropTypes.string,
  endPoint: PropTypes.string,
  description: PropTypes.string,
};

export default APICard;

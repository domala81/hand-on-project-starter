import React from "react";
import styles from "./MyAPIs.module.css";
import axios from "axios";
import AllPurposeImage from "../../utils/APIsImage.svg";
import PropTypes from "prop-types";

function APICard({
  id,
  name,
  endPoint,
  description,
  setUpdate,
  setUpdateId,
  setPrevName,
  setPrevEndPoint,
  setPrevDescription,
  viewModal,
}) {
  const deleteAPI = (id) => {
    // eslint-disable-next-line no-undef
    axios.delete(`/apis/${id}`);
  };

  return (
    <div onClick={() => window.open(endPoint)}>
      <article className={styles.APIbox}>
        <img
          src={AllPurposeImage}
          className={styles.APIImage}
          alt="API Image"
        />

        <div className={styles.APIText}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.editButton}
            onClick={(event) => {
              event.stopPropagation();
              setUpdate(true);
              setUpdateId(id);
              setPrevName(name);
              setPrevEndPoint(endPoint);
              setPrevDescription(description);
              viewModal(true);
              console.log("clicked!");
            }}
          >
            <span className="material-icons">edit</span>
          </button>
          <button
            className={styles.deleteButton}
            onClick={(event) => {
              event.stopPropagation();
              deleteAPI(id);
            }}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      </article>
    </div>
  );
}

APICard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  endPoint: PropTypes.string,
  description: PropTypes.string,
  setUpdate: PropTypes.func,
  setUpdateId: PropTypes.func,
  setPrevName: PropTypes.func,
  setPrevEndPoint: PropTypes.func,
  setPrevDescription: PropTypes.func,
  viewModal: PropTypes.func,
};

export default APICard;

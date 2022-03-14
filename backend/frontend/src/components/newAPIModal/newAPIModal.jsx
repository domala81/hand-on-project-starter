import React, { useState } from "react";
import styles from "./newAPIModal.module.css";
import axios from "axios";

function newAPIModal({
  viewModal,
  updateAPI,
  setUpdate,
  updateId,
  prevName,
  prevEndPoint,
  prevDescription,
  setPrevName,
  setPrevEndPoint,
  setPrevDescription,
}) {
  const [name, setName] = useState(prevName);
  const [endPoint, setEndPoint] = useState(prevEndPoint);
  const [description, setDescription] = useState(prevDescription);

  const addToList = () => {
    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_BACKEND_URL}/apis`, {
        name: name,
        endPoint: endPoint,
        description: description,
      })
      .then((res) => {
        if (res.data.status === 200) {
          viewModal(false);
        }
        alert(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editList = (id) => {
    axios
      // eslint-disable-next-line no-undef
      .put(`${process.env.REACT_APP_BACKEND_URL}/apis`, {
        id: id,
        name: name,
        endPoint: endPoint,
        description: description,
      })
      .then(() => {
        alert("API updated successfully");
        viewModal(false);
        setUpdate(false);
      });
  };

  return (
    <div className={styles.modal}>
      <div
        className={styles.modalBG}
        onClick={() => {
          viewModal(false);
          setUpdate(false);
          setPrevName("");
          setPrevEndPoint("");
          setPrevDescription("");
        }}
      />
      <div
        className={styles.modalContainer}
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <p>{updateAPI ? "Edit API details" : "Add new API"}</p>
        <input
          type="text"
          placeholder="API Name"
          defaultValue={prevName}
          name="APIName"
          className={styles.input}
          onChange={(event) => {
            setName(event.target.value);
          }}
          autoComplete="off"
          required
        />
        <input
          type="text"
          placeholder="API End Point"
          defaultValue={prevEndPoint}
          name="APIEndPoint"
          className={styles.input}
          onChange={(event) => {
            setEndPoint(event.target.value);
          }}
          autoComplete="off"
          required
        />
        <textarea
          rows={3}
          style={{ resize: "none" }}
          placeholder="Description of API"
          defaultValue={prevDescription}
          name="APIDescription"
          className={styles.input}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          autoComplete="off"
          required
        />
        <button
          className={styles.addAPIButton}
          onClick={() => {
            if (updateAPI) {
              editList(updateId);
              setPrevName("");
              setPrevEndPoint("");
              setPrevDescription("");
            } else {
              addToList();
            }
          }}
        >
          {updateAPI ? "Update API" : "Add API"}
        </button>
      </div>
    </div>
  );
}

export default newAPIModal;

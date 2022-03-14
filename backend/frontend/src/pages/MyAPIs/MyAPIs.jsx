import React, { useState } from "react";
import styles from "./MyAPIs.module.css";
import NavBar from "../../components/navBar/navBar.jsx";
import APICard from "./APICard.jsx";
import Modal from "../../components/newAPIModal/newAPIModal.jsx";
import PropTypes from "prop-types";

function MyAPIs({ apiList }) {
  const [modal, setModal] = useState(false);

  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [prevName, setPrevName] = useState("");
  const [prevEndPoint, setPrevEndPoint] = useState("");
  const [prevDescription, setPrevDescription] = useState("");

  return (
    <div>
      {modal && (
        <Modal
          viewModal={setModal}
          updateAPI={update}
          setUpdate={setUpdate}
          updateId={updateId}
          prevName={prevName}
          prevEndPoint={prevEndPoint}
          prevDescription={prevDescription}
          setPrevName={setPrevName}
          setPrevEndPoint={setPrevEndPoint}
          setPrevDescription={setPrevDescription}
        />
      )}
      <NavBar viewModal={setModal} />

      <div className={styles.body}>
        <h2 className={styles.heading}>Your Uploaded APIs</h2>

        <div className={styles.APIContainer}>
          <main className={styles.APIGrid}>
            {apiList.map((val, key) => {
              return (
                <div key={key}>
                  <APICard
                    id={val._id}
                    name={val.name}
                    endPoint={val.endPoint}
                    description={val.description}
                    setUpdate={setUpdate}
                    setUpdateId={setUpdateId}
                    setPrevName={setPrevName}
                    setPrevEndPoint={setPrevEndPoint}
                    setPrevDescription={setPrevDescription}
                    viewModal={setModal}
                  />
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}

MyAPIs.propTypes = {
  apiList: PropTypes.any,
};

export default MyAPIs;

import styles from "./MarketPlace.module.css";
import React, { useState } from "react";
import Body from "./Body.jsx";
import NavBar from "../../components/navBar/navBar.jsx";
import Modal from "../../components/newAPIModal/newAPIModal.jsx";
import PropTypes from "prop-types";

function MarketPlace({ apiList }) {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.total}>
      {modal && <Modal viewModal={setModal} />}

      <NavBar viewModal={setModal} />

      <Body apiList={apiList} />
    </div>
  );
}

MarketPlace.propTypes = {
  apiList: PropTypes.any,
};

export default MarketPlace;

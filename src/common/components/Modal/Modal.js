import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ center, children }) => {
  const [modalOpen, setModal] = useState(false);
  const modalActive = modalOpen ? "active" : "";

  return (
    <div className={`modal ${center && `modal--center`} ${modalActive}`}>
      {children}
    </div>
  );
};

Modal.defaultProps = {
  center: false,
  children: "",
};

Modal.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;

import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, className, label, invalid }) => {
  const [inputClass, setInputClass] = useState({
    class: "label",
    valid: false,
    touched: false,
  });
  const inputInvalid = <span className="input-error">{invalid}</span>;

  return (
    <div className={`input ${className && className}`}>
      <label className={inputClass.class}>
        <span>{label}</span>
        <input className="input-field" type="text" placeholder={placeholder} />
        {inputClass.touched && inputClass.valid ? inputInvalid : null}
      </label>
    </div>
  );
};

Input.defaultProps = {
  placeholder: "",
  className: "",
  invalid: "Error",
};

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  invalid: PropTypes.string,
};

export default Input;

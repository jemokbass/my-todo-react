import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, type, size, color }) => {
  return (
    <button
      className={`button ${className && className}  ${
        size && `button--${size}`
      } ${color && `button--${color}`} `}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  children: "",
  type: "button",
  size: "",
  color: "",
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["", "ms", "md", "ml"]),
  color: PropTypes.oneOf(["", "dark", "light"]),
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ReactComponent as Back } from "@/images/back.svg";
import { ReactComponent as Next } from "@/images/next.svg";

const Prev = ({ to, className, children }) => {
  return (
    <NavLink to={to}>
      <button className={`button-prev  ${className && className}`}>
        <Back />
        <span>{children}</span>
      </button>
    </NavLink>
  );
};

Prev.defaultProps = {
  to: "/",
  className: "",
  children: "",
};

Prev.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

const Follow = ({ to, className, children }) => {
  return (
    <NavLink to={to}>
      <button className={`button-follow ${className && className}`}>
        <span>{children}</span>
        <Next />
      </button>
    </NavLink>
  );
};

Follow.defaultProps = {
  to: "/",
  className: "",
  children: "",
};

Follow.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

const Url = ({ children, to, className, button }) => {
  return (
    <NavLink to={to}>
      <button
        className={`button-url ${className && className} ${
          button ? `button-url--btn` : null
        }`}
      >
        {children}
      </button>
    </NavLink>
  );
};

Url.defaultProps = {
  to: "/",
  className: "",
  children: "",
  button: false,
};

Url.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  button: PropTypes.bool,
};

const Link = {
  Prev,
  Follow,
  Url,
};

export default Link;

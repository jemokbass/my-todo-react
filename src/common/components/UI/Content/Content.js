import React from "react";
import PropTypes from "prop-types";

const Inner = ({ className, size, children }) => {
  return (
    <div
      className={`inner ${className && className} ${size && `inner--${size}`}`}
    >
      {children}
    </div>
  );
};

Inner.defaultProps = {
  className: "",
  size: "",
  children: "",
};

Inner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["", "lg", "md", "sm"]),
  children: PropTypes.node,
};

const Title = ({ type, className, children, size }) => {
  const clazz = `title ${size && `title--${size}`} ${className && className}`;

  return React.createElement(type, { className: clazz }, children);
};

Title.defaultProps = {
  type: "div",
  className: "",
  children: "",
  size: "",
};

Title.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
};

const Subtitle = ({ type, className, children, size }) => {
  const clazz = `subtitle ${size && `subtitle--${size}`} ${
    className && className
  }`;

  return React.createElement(type, { className: clazz }, children);
};

Subtitle.defaultProps = {
  type: "div",
  className: "",
  children: "",
  size: "",
};

Subtitle.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["", "lg", "md", "sm"]),
};

const Form = ({ className, children }) => {
  return <form className={`form ${className && className}`}>{children}</form>;
};

Form.defaultProps = {
  className: "",
  children: "",
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Content = {
  Inner,
  Title,
  Subtitle,
  Form,
};

export default Content;

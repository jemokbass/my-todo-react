import React from "react";
import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <NavLink className="logo" to="/">
      <img className="logo__img" src="/images/logo.png" alt="logotype" />
    </NavLink>
  );
};

export default Logo;

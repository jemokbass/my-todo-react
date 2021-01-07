import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <NavLink to="/" className="footer__copy">
          Copyright
        </NavLink>
        <p className="footer__thanks">Thanks a lot for using this app</p>
      </div>
    </footer>
  );
};

export default Footer;

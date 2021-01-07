import React, { useState } from "react";
import Burger from "./blocks/Burger/Burger";
import Logo from "./blocks/Logo/Logo";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [isActive, changeState] = useState({
    menuActive: false,
  });
  const menuHandler = () => {
    return changeState({
      ...isActive,
      menuActive: !isActive.menuActive,
    });
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <nav className="header__nav">
          <ul
            className={`header__list ${isActive.menuActive ? " active" : null}`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">My tasks</NavLink>
            </li>
            <li>
              <NavLink to="/">Options</NavLink>
            </li>
          </ul>
        </nav>
        <Burger menuHandler={menuHandler} stateBurger={{ ...isActive }} />
      </div>
    </header>
  );
};

export default Header;

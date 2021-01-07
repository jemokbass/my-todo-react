import React from "react";
import { ReactComponent as Bar } from "@/images/bars.svg";
import { ReactComponent as Cross } from "@/images/cross.svg";

const Burger = (props) => {
  return (
    <button
      onClick={() => {
        props.menuHandler();
      }}
      className="burger"
    >
      {props.stateBurger.menuActive ? <Cross /> : <Bar />}
    </button>
  );
};

export default Burger;

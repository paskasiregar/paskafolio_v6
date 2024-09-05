import React from "react";
import { ArrowRight } from "solar-icon-set/arrows";

const Button = ({ text = "LET'S TALK" }) => {
  return (
    <button className="button">
      <span>{text}</span>
      <div className="icon-container">
        <ArrowRight className="bold-icon" />
      </div>
    </button>
  );
};

export default Button;

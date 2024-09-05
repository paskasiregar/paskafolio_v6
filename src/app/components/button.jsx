import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text = "LETS TALK" }) => {
  return (
    <button className="button">
      <span>{text}</span>
      <div className="icon-container">
        <FaArrowRight className="bold-icon" />
      </div>
    </button>
  );
};

export default Button;

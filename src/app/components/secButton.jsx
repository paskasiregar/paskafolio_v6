import React from "react";

const SecButton = ({ text = "LET'S TALK" }) => {
  return (
    <button className="secbutton">
      <span>{text}</span>
    </button>
  );
};

export default SecButton;

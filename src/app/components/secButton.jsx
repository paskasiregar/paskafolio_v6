import React from "react";

const SecButton = ({ text = "LETS TALK" }) => {
  return (
    <button className="secbutton">
      <span>{text}</span>
    </button>
  );
};

export default SecButton;

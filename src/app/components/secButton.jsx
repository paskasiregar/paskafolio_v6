import React from "react";
import { Calendar } from "solar-icon-set/time";

const SecButton = ({ text = "LET'S TALK" }) => {
  return (
    <button className="secbutton">
      <div className="flex justify-center items-center m-1">
        <Calendar className="bold-icon " />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default SecButton;

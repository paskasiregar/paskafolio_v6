import React from "react";
import "../chip.css";

const Chip = ({ label }) => {
  return <div className="chip md:text-sm">{label}</div>;
};

export default Chip;

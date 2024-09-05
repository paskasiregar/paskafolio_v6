import React from "react";

const GreenDot = () => {
  return <div style={styles.dot}></div>;
};

const styles = {
  dot: {
    width: "10px",
    height: "10px",
    backgroundColor: "#00FFB9", // Green color
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
  },
};

export default GreenDot;

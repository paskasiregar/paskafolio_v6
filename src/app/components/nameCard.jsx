import React from "react";
import GreenDot from "./greenDot";

const NameCard = ({
  name = "Debora Paskarina",
  status = "Available for work",
  avatarUrl = "/assets/1.avif", // Set a default avatar image
}) => {
  return (
    <div style={styles.card}>
      <img src={avatarUrl} alt="Avatar" style={styles.avatar} />{" "}
      {/* Use dynamic avatarUrl */}
      <div>
        <h4 style={styles.name}>{name}</h4>
        <div style={styles.status}>
          <GreenDot />
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "12px",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  status: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "#a0a0a0",
  },
};

export default NameCard;

import React from "react";
import NameCard from "./NameCard";
import SecButton from "./secButton";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <NameCard
        name="Debora Paskarina"
        status="Available for work"
        avatarUrl="/assets/1.avif"
      />
      <h1 style={styles.title}>
        Designing awesome digital experiences, one idea at a time.
      </h1>
      <p style={styles.subtitle}>
        Transforming concepts into sleek, user-friendly digital solutions that
        drive engagement and push innovation forward.
      </p>
      <SecButton text="GET STARTED" />
    </section>
  );
};

const styles = {
  hero: {
    padding: "40px",
    color: "#ffffff",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: "80px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#a0a0a0",
    marginBottom: "30px",
  },
};

export default Hero;

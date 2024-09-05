"use client"; // Ensures the component is treated as a client-side component

import React from "react";
import NameCard from "./nameCard";
import SecButton from "./secButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.hero}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NameCard
          name="Debora Paskarina"
          status="Available for work"
          avatarUrl="/assets/1.avif"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.title}
      >
        Designing awesome digital experiences, one idea at a time.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.subtitle}
      >
        Transforming concepts into sleek, user-friendly digital solutions that
        drive engagement and push innovation forward.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SecButton text="GET STARTED" />
      </motion.div>
    </motion.section>
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

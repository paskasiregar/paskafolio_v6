"use client"; // Ensures the component is treated as a client-side component
import React from "react";
import NameCard from "./nameCard";
import SecButton from "./secButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper my-20">
      <div className="hero-content">
        <NameCard
          name="Debora Paskarina"
          status="Available for work"
          avatarUrl="/assets/1.avif"
        />
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title text-4xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          Designing awesome digital experiences, one idea at a time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-subtitle text-lg md:text-xl lg:text-2xl"
        >
          Transforming concepts into sleek, user-friendly digital solutions that
          drive engagement and push innovation forward.
        </motion.p>
        <SecButton text="GET STARTED" />
      </div>
    </section>
  );
};

// You can add additional styling via Tailwind to make it more responsive

export default Hero;

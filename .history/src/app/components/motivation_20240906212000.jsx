"use client"; // Ensures the component is treated as a client-side component

import React from "react";
import { motion } from "framer-motion";
import "../motivation.css";
import Image from "next/image";

const Motivation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="motivation-wrapper bg-black py-12"
    >
      <div className="motivation-content max-w-6xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="motivation-left"
        >
          <div className="motivation-header flex items-center mb-4">
            <div className="green-dot mr-2"></div>
            <h2 className="motivation-title text-4xl md:text-4xl lg:text-5xl">
              Motivation
            </h2>
          </div>
          <p className="motivation-subtitle text-base md:text-lg lg:text-xl">
            I am <strong>Paska</strong>, an experienced Full Stack Product
            Manager crafting digital experiences from Indonesia 🇮🇩
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="motivation-right"
        >
          <p className="motivation-text text-gray-300 mb-8 md:mb-12 text-sm md:text-base lg:text-lg">
            More than a job, Product Management and Product Design is an outlet
            for my vision. I have the power to take an idea from concept to
            reality. Nothing beats the rush of seeing my product in action.
          </p>
          <p className="motivation-text text-gray-300 mb-8 md:mb-12 text-sm md:text-base lg:text-lg">
            I get to blend art and technology to create &quot;digital
            experiences&quot; that inform, entertain, and inspire. <br /> Every
            day is different; one day I may be sketching site layouts on paper,
            the next I am designing responsive page templates. The Product field
            keeps me on my toes!
          </p>
          <Image
            src="/assets/tdt.png"
            alt="Signature Image"
            width={300}
            height={60}
            className="signature-image mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Motivation;

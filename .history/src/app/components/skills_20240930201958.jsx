"use client"; // Ensures the component is treated as a client-side component

import React from "react";
import Chip from "./chip";
import { motion } from "framer-motion";
import "../motivation.css"; // Using motivation.css for consistency

const Skills = () => {
  const skills = [
    "Figma",
    "Maze",
    "UI/UX Design",
    "Product Management",
    "Web Development",
    "HTML5",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Git Version Control",
  ];

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each chip's animation
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="motivation-wrapper"
    >
      {/* Using same wrapper as Motivation */}
      <div className="motivation-content max-w-6xl ">
        {/* Same layout as Motivation */}
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="motivation-left mb-4 md:mb-0"
        >
          <div className="motivation-header">
            <div className="green-dot mr-4"></div>
            <h2 className="motivation-title text-4xl md:text-4xl lg:text-5xl">
              Skills
            </h2>
          </div>
          <p className="motivation-subtitle text-base md:text-lg lg:text-xl">
            Here, you will find the tools and languages I master. <br />
            From Figma to JavaScript, each skill adds to the mosaic of my
            professional expertise.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="motivation-right"
        >
          <div className="skills-right mt-4 mb-8 flex flex-wrap justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={chipVariants} className="mb-2">
                <Chip label={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

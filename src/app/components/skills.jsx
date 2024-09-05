import React from "react";
import Chip from "./chip";
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

  return (
    <section className="motivation-wrapper">
      {" "}
      {/* Using same wrapper as Motivation */}
      <div className="motivation-content">
        {" "}
        {/* Same layout as Motivation */}
        <div className="motivation-left">
          <div className="motivation-header">
            <div className="green-dot"></div>
            <h2 className="motivation-title">Skills</h2>
          </div>
          <p className="motivation-subtitle text-lg">
            Here, you will find the tools and languages I master. <br />
            From Figma to JavaScript, each skill adds to the mosaic of my
            professional expertise.
          </p>
        </div>
        <div className="motivation-right">
          <div className="skills-right mt-6 flex flex-wrap">
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

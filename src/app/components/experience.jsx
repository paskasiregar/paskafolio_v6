import React from "react";
import Chip from "./chip";

const Experience = ({ title, location, company, timeframe }) => {
  return (
    <div className="experience-item mb-8 flex justify-between items-center">
      {/* Left Section - Job Title and Location */}
      <div className="experience-details">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{location}</p>
      </div>

      {/* Right Section - Chips for Company and Timeframe */}
      <div className="experience-meta flex items-center space-x-4">
        <Chip label={company} />
        <Chip label={timeframe} />
      </div>
    </div>
  );
};

export default Experience;

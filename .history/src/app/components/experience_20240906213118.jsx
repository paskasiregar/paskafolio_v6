import React from "react";
import Chip from "./chip";

const Experience = ({ title, location, company, timeframe }) => {
  return (
    <div className="experience-item my-4 flex flex-col md:flex-row md:text-md justify-between items-start md:items-start">
      {/* Left Section - Job Title and Location */}
      <div className="experience-details md:text-sm mb-4 md:mb-2 sm:mb-2 sm:text-sm">
        <h3 className="text-base md:text-sm sm:text-sm font-bold md:mb-2 sm:mb-2">
          {title}
        </h3>
        <p className="text-gray-400">{location}</p>
      </div>

      {/* Right Section - Chips for Company and Timeframe */}
      <div className="experience-meta flex flex-col md:flex-row items-start md:items-start md:text-sm sm:text-sm space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex">
          <Chip label={company} />
          <Chip label={timeframe} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

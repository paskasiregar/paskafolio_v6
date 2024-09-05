import React from "react";
import Experience from "./Experience"; // Import the Experience component

const Experiences = () => {
  const experienceData = [
    {
      title: "Head of Product",
      location: "Selangor, Malaysia 🇲🇾",
      company: "Nematix",
      timeframe: "2024 - Present",
    },
    {
      title: "Senior Product Manager",
      location: "Selangor, Malaysia 🇲🇾",
      company: "Nematix",
      timeframe: "2023 - 2024",
    },
    {
      title: "Product Owner & Designer",
      location: "New York, United States of America 🇺🇸",
      company: "ZIZO Technologies",
      timeframe: "2023 - 2024",
    },
    {
      title: "Product Manager & Designer",
      location: "Singapore, Singapore 🇸🇬",
      company: "RadX Group",
      timeframe: "2022 - 2023",
    },
    {
      title: "Senior Manager of Learning and Development",
      location: "Jakarta, Indonesia 🇮🇩",
      company: "LingoTalk",
      timeframe: "2020 - 2021",
    },
  ];

  return (
    <section className="experience-wrapper py-16">
      <div className="experience-content max-w-6xl mx-auto">
        {/* Experience List */}
        <div className="experience-list">
          {experienceData.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              location={experience.location}
              company={experience.company}
              timeframe={experience.timeframe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

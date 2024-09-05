import React from "react";
import Image from "next/image";
import Chip from "./chip";
import "../project.css";

const Project = ({ project }) => {
  if (!project) {
    return <p>No project data available</p>; // Fallback if no project is provided
  }

  return (
    <section className="mb-8">
      <div className="project-content max-w-6xl mx-auto mb-8">
        <div className="chip-container flex justify-between mb-4">
          <Chip label={project?.company || "N/A"} className="mb-4" />
        </div>

        <div className="project-grid">
          {/* Left Section - Project Images */}
          <div className="project-images">
            {project?.images?.length > 0 ? (
              project.images.map((image, index) => (
                <div
                  key={index}
                  className={`project-image ${index > 0 ? "mt-6" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={720}
                    height={405}
                    className="rounded-md"
                  />
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>

          {/* Right Section - Project Information */}
          <div className="project-info">
            <h3 className="text-3xl font-bold mb-2">
              {project?.title || "No title available"}
            </h3>
            <ul className="project-details">
              <li>
                <span>Role:</span> {project?.role || "N/A"}
              </li>
              <li>
                <span>Deliverables:</span>
                <div className="deliverables-container">
                  {project?.deliverables?.join(", ") || "N/A"}
                </div>
              </li>
              <li>
                <span>Company:</span> {project?.company || "N/A"}
              </li>
              <li>
                <span>Client:</span> {project?.client || "N/A"}
              </li>
              <li>
                <span>Year:</span> {project?.year || "N/A"}
              </li>
              <li>
                <span>Visit Site:</span>
                <a href={project?.link || "#"} className="visit-link">
                  <span className="arrow-link">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

import Project from "./project";

const projects = [
  {
    title: "Programmatic Out-of-Home",
    role: "Product Designer",
    deliverables: ["Conception", "Web Design"],
    company: "RadX Group",
    client: "In-house Product",
    year: "2022",
    link: "#",
    images: [
      { src: "/assets/maro-1.png", alt: "Programmatic Out-of-Home Project" },
      { src: "/assets/maro-2.png", alt: "Campaign Creation Interface" },
    ],
  },

  {
    title: "Equinox: Financial Ecosystem",
    role: "Senior Product Manager",
    deliverables: ["UIUX", "Development"],
    company: "Nematix",
    client: "In-house Product",
    year: "2023",
    link: "https://equinox-platform.framer.website/",
    images: [
      { src: "/assets/eq-1.png", alt: "Equinox" },
      { src: "/assets/eq-2.png", alt: "Equinox" },
      { src: "/assets/eq-3.png", alt: "Equinox" },
    ],
  },

  {
    title: "YPAS Job Portal",
    role: "Head of Product",
    deliverables: ["Branding", "UIUX", "Development"],
    company: "Nematix",
    client: "Yayasan Pahang AS Malaysia",
    year: "2024",
    link: "https://getjob.framer.website/",
    images: [
      { src: "/assets/ypas-3.png", alt: "YPAS GetJob" },
      { src: "/assets/ypas-4.png", alt: "YPAS GetJob" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="motivation-wrapper m-0">
      {" "}
      {/* Using same wrapper as Motivation */}
      <div className="motivation-content">
        {" "}
        {/* Same layout as Motivation */}
        <div>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

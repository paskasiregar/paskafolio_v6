import Project from "./project";

const projects = [
  {
    title: "PawPaw Portal",
    role: "Founder",
    deliverables: ["End-to-End Product"],
    company: "PawPaw Portal",
    client: "In-house Product",
    year: "2024",
    link: "https://www.pawpawportal.com/",
    images: [{ src: "/assets/ppp.png", alt: "PawPaw Portal" }],
  },

  {
    title: "YPAS Job Portal",
    role: "Head of Product",
    deliverables: ["Branding", "UIUX", "Development"],
    company: "Nematix",
    client: "Yayasan Pahang AS Malaysia",
    year: "2024",
    link: "https://getjob.framer.website/",
    images: [{ src: "/assets/ypas.png", alt: "YPAS GetJob" }],
  },

  {
    title: "Equinox: Financial Ecosystem",
    role: "Senior Product Manager",
    deliverables: ["UIUX", "Development"],
    company: "Nematix",
    client: "In-house Product",
    year: "2023",
    link: "https://equinox-platform.framer.website/",
    images: [{ src: "/assets/eq.png", alt: "Equinox" }],
  },

  {
    title: "Programmatic Out-of-Home",
    role: "Product Designer",
    deliverables: ["Conception", "Web Design"],
    company: "RadX Group",
    client: "In-house Product",
    year: "2022",
    link: "#",
    images: [
      { src: "/assets/maro.png", alt: "Programmatic Out-of-Home Project" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="mb-8">
      <section className="motivation-wrapper my-8 mx-4">
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
    </div>
  );
};

export default Projects;

import "../index.css";

import SpamImg from "../assets/Project_Img/SMA.png";
import FoodImg from "../assets/Project_Img/FOA.png";
import NewsImg from "../assets/Project_Img/F2S.png";

function Projects() {
  const projects = [
    {
      title: "Spam Detection System",
      stack: ["Python", "FastAPI", "Scikit-learn", "NLTK", "MongoDB", "Pandas", "NumPy"],
      description:
        "A personal portfolio website to showcase my skills, achievements, and projects with a modern responsive UI.",
      image: SpamImg,
    },
    {
      title: "Food Ordering Application",
      stack: ["Java", "Spring Boot", "MySQL"],
      description:
        "A CRUD-based employee management application with backend integration, authentication, and database connectivity.",
      image: FoodImg,
    },
    {
      title: "News Broadcasting Site",
      stack: ["React.js","Node.js" , "Express" , "Cloudflare" , "HTML5" , "Tailwind CSS"],
      description:
        "A full-stack shopping application with product listings, cart system, and secure payment integration.",
      image: NewsImg,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
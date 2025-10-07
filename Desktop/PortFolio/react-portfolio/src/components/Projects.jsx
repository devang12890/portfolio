const Projects = () => {
  const projects = [
    {
      title: "Fit Track - Personal Fitness Tracker",
      description: "An app where users can track workouts, calories, meals, water intake and view fitness history.",
      tech: ["Java", "Spring Boot","JavaScript"],
      liveUrl: "https://fittrack-alpha-seven.vercel.app/",
      codeUrl: "https://github.com/devang12890/fittrack"
    },
    {
      title: "Chicken - Online Clothing Store",
      description: "A full Stack web application, where user can view products like their clothes and place orders. Build to simulate a real world shopping Experience.",
      tech: ["Java", "Spring Boot", "H2", "JavaScript"],
      liveUrl: "https://chicken-commerce.vercel.app/",
      codeUrl: "https://github.com/devang12890/chicken-commerce"
    }
  ];

  return (
    <section className="section projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

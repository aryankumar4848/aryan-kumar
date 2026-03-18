import { projects } from "@/data/portfolio";

export default function Projects() {
  const looped = [...projects, ...projects];

  return (
    <main className="projects-main">
      <section className="section tight-section">
        <h2 className="big-h2 neon-gradient">Projects</h2>
        <div className="carousel-shell">
          <div className="carousel-viewport" aria-label="Projects carousel">
            <div className="carousel-track">
              {looped.map((project, index) => (
                <article key={`${project.id}-${index}`} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech" aria-label="Tech stack">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    View project →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

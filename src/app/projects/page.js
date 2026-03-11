import { projects } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}


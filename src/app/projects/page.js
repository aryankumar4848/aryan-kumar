"use client";

import { projects } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function Projects() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const speed = 0.3; // pixels per frame
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + speed;
        if (newOffset >= projects.length * 300) {
          return 0;
        }
        return newOffset;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="projects-main">
      <section className="section tight-section">
<h2 className="big-h2 neon-gradient">Projects</h2>
        <div className="infinite-carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${offset}px)` }}>
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div key={index} className="carousel-item">
                <div className="project-mini-card">
                  <div className="project-image-placeholder"></div>
                  <h4 className="transparent-name">{project.title}</h4>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mini-deploy-link">
                    View Live →
                  </a>
                  <div className="mini-tech">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-mini">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

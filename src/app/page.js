import { personalInfo, about, experience, skills, projects } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="profile-container">
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.name} 
            className="profile-photo"
          />
        </div>
        <h1>
          Hi, I&apos;m <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="subtitle">{personalInfo.title}</p>
        <div className="social-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="about-text">{about.description}</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section alt-bg">
        <h2>Experience</h2>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section alt-bg">
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

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Let&apos;s Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat</p>
        <a href={`mailto:${personalInfo.email}`} className="btn">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}


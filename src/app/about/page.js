import { about, education, skills, certifications, personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <main>
      <section className="section">
        <h2>About Me</h2>
        <p className="about-text">{about.description}</p>
      </section>

      <section className="section alt-bg">
        <h2>Education</h2>
        <div className="about-card">
          <h3>{education.institution}</h3>
          <p className="company">{education.location}</p>
          <p className="period">{education.degree} | CGPA: {education.cgpa}</p>
          <p className="period">{education.period}</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <h2>Certifications & Achievements</h2>
        <div className="experience-list">
          {certifications.map((cert, index) => (
            <div key={index} className="about-card">
              <p>{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <div className="about-card">
          <p><strong>Email:</strong> {personalInfo.email}</p>
          <p><strong>Phone:</strong> {personalInfo.phone}</p>
        </div>
      </section>
    </main>
  );
}


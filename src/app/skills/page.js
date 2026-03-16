import { education, skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <main className="skills-page">
      <section className="section tight-section">
        <h2 className="big-h2">Education</h2>
        <div className="education-card about-card">
          <div className="education-header">
            <h3>{education.institution}</h3>
            <div className="education-meta">
              <span className="degree">{education.degree}</span>
              <span className="cgpa">CGPA: {education.cgpa}</span>
            </div>
          </div>
          <div className="education-details">
            <p className="location">{education.location}</p>
            <p className="dates">December 2022 - June 2026</p>
            <p className="coursework">Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Systems, Distributed Systems, Machine Learning, Software Engineering</p>
          </div>
        </div>
      </section>

      <section className="section tight-section">
        <h2 className="big-h2">Technical Skills</h2>
        <div className="skills-grid large-grid">
          {skills.map((skill, index) => (
            <span key={skill} className="skill-tag large-skill">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

import { experience, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <main>
      <section className="section tight-section">
        <h2 className="big-h2 neon-gradient">Experience</h2>
        <div className="content-card experience-wrap">
          <div className="experience-list">
            {experience.map((exp) => (
              <div key={exp.id} className="experience-card">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                {exp.location && <p className="period">{exp.location}</p>}
                {exp.period && <p className="period">{exp.period}</p>}
                <ul className="experience-items">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight-section">
        <h2 className="big-h2 neon-gradient">Certifications & Achievements</h2>
        <div className="content-card experience-wrap">
          <ul className="experience-items">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

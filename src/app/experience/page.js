import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <main>
      <section className="section">
        <h2>Experience</h2>
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
      </section>
    </main>
  );
}


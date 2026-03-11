import { experience } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export default function Experience() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
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
      </main>
    </>
  );
}


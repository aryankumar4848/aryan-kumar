import { about, personalInfo } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p className="about-text">{about.description}</p>
        </section>
      </main>
    </>
  );
}


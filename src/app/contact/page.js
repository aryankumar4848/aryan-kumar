import { personalInfo } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <h2>Let&apos;s Connect</h2>
          <p>Feel free to reach out for collaborations or just a friendly chat</p>
          <a href={`mailto:${personalInfo.email}`} className="btn">
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}


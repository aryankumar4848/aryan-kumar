import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <main>
      <section className="section">
        <h2>Let&apos;s Connect</h2>
        <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly chat</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope size={20} />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <FaPhone size={20} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <FaGithub size={20} />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="contact-item">
            <FaLinkedin size={20} />
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <SiLeetcode size={20} />
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
        </div>
      </section>
    </main>
  );
}


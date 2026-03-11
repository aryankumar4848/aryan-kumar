import { personalInfo } from "@/data/portfolio";
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
    </main>
  );
}


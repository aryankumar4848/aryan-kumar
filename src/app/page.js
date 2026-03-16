import { personalInfo, about } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <section className="hero">
        <video 
          src="/Portfolio_Video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          alt="Aryan Kumar Portfolio Video"
        />
        <div className="hero-right">
          <h1>
            Hi, I&apos;m <span className="highlight">{personalInfo.name}</span>
          </h1>
          <p className="subtitle">{personalInfo.title}</p>
          <p className="about-text">{about.description}</p>
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
        </div>
      </section>
    </main>
  );
}


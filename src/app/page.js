"use client";

import { personalInfo, about } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-video-wrap" aria-label="Portfolio video">
          <video
            src="/Portfolio_Video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={personalInfo.photo}
            className="hero-video"
          />
        </div>
        <div className="hero-right">
          <h1 className="big-h1 neon-gradient">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
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
          <div className="hero-buttons">
            <a href="/Aryan_Kumar_Resume.pdf" download className="btn neon-btn download-cv">
              Download CV
            </a>
            <Link href="/contact" className="btn neon-btn contact-btn" prefetch>
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

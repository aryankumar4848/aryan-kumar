"use client";

import { personalInfo, about } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

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
            <button onClick={handleContactClick} className="btn neon-btn contact-btn">
              Contact Me
            </button>
          </div>

          {showContactForm && (
            <div className="contact-modal">
              <div className="contact-modal-content">
                <button className="close-btn" onClick={handleCloseForm}>×</button>
                <h3>Get in Touch</h3>
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows={5} required />
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

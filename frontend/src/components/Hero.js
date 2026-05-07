import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sarvjeet Kumar</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              BTech CSE student at Amity University Jharkhand with full-stack 
              development experience in React.js, Node.js, and MongoDB. 
              Hackathon finalist, certified by TATA, Deloitte, and IIT Hyderabad.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Kisan062" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/srvjeet" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:sk7767849@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image fade-in-up">
            <div className="image-wrapper">
              <div className="gradient-circle"></div>
              <div className="profile-placeholder">
                <span className="initials">SK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;

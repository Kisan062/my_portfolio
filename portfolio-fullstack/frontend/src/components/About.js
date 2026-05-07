import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in-up">
            <h3>Hello! I'm a Full Stack Developer</h3>
            <p>
              I'm a BTech CSE student at Amity University Jharkhand with a passion 
              for building full-stack web applications. I specialize in React.js, 
              Node.js, and MongoDB, and love turning ideas into production-ready 
              products.
            </p>
            <p>
              I've built and deployed SkillBridge (an AI-powered placement platform), 
              was a finalist at East India's biggest Web3 hackathon (Innovate-A-Thon 3.0, 
              BIT Mesra), and completed a Cyber Security internship with IIT Hyderabad 
              Entrepreneurship &amp; Innovation Cell.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>7.7</h4>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h4>6+</h4>
                <p>Certifications</p>
              </div>
              <div className="stat-item">
                <h4>20+</h4>
                <p>Technologies</p>
              </div>
            </div>

            <div className="about-highlights">
              <h4>What I Do</h4>
              <ul>
                <li>🎨 Frontend Development with React.js, Tailwind CSS &amp; modern frameworks</li>
                <li>⚙️ Backend Development with Node.js, Express.js &amp; REST APIs</li>
                <li>🗄️ Database Design with MongoDB, Mongoose &amp; MySQL</li>
                <li>🤖 AI Integration using Gemini API</li>
                <li>🔒 Cyber Security — Penetration testing &amp; network security monitoring</li>
              </ul>
            </div>
          </div>

          <div className="about-image fade-in-up">
            <div className="image-container">
              <div className="coding-illustration">
                <div className="code-editor">
                  <div className="editor-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="editor-body">
                    <div className="code-line"><span className="keyword">const</span> developer = {'{'}</div>
                    <div className="code-line">  name: <span className="string">'Sarvjeet Kumar'</span>,</div>
                    <div className="code-line">  role: <span className="string">'Full Stack Dev'</span>,</div>
                    <div className="code-line">  passion: <span className="string">'Building Apps'</span></div>
                    <div className="code-line">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

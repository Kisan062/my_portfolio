import React, { useState, useEffect } from 'react';
import { skillsAPI } from '../services/api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await skillsAPI.getAll();
      setSkills(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-container">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <div 
              key={category} 
              className="skill-category fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map(skill => (
                  <div key={skill._id} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState, useEffect } from 'react';
import { experienceAPI } from '../services/api';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await experienceAPI.getAll();
      setExperiences(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching experiences:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp._id} 
              className="timeline-item fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>
                <div className="exp-details">
                  <span className="exp-detail">
                    <FaCalendarAlt /> {exp.startDate} – {exp.endDate}
                  </span>
                  {exp.location && (
                    <span className="exp-detail">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  )}
                </div>
                <ul className="exp-description">
                  {exp.description && exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {experiences.length === 0 && (
          <p className="no-data">No experience entries yet.</p>
        )}
      </div>
    </section>
  );
};

export default Experience;

import React, { useState, useEffect } from 'react';
import { certificationsAPI } from '../services/api';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const response = await certificationsAPI.getAll();
      setCertifications(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching certifications:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section-title">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert._id} 
              className="cert-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.description && (
                  <p className="cert-description">{cert.description}</p>
                )}
                <div className="cert-footer">
                  <span className="cert-year">
                    <FaCalendarAlt /> {cert.year}
                  </span>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {certifications.length === 0 && (
          <p className="no-data">No certifications added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  const activeSocialLinks = socialLinks.filter(link => link.url);

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about__grid">
          {/* Content */}
          <div className="about__content">
            {/* Bio Text */}
            <div className="about__bio">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="about__text">{paragraph}</p>
              ))}
            </div>

            {/* Info List */}
            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">Name</span>
                <span className="about__info-value">{personalInfo.name}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">{personalInfo.location}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="about__info-value about__info-link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Availability</span>
                <span className="about__info-value about__info-status">
                  <span className="about__status-dot"></span>
                  {personalInfo.availability}
                </span>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="about__actions">
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Download Resume</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              )}

              <div className="about__social">
                {activeSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__social-link"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="about__visual">
            <div className="about__image-wrapper">
              <div className="about__image-bg"></div>
              <div className="about__image-frame">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="about__image"
                  />
                ) : (
                  <div className="about__image-placeholder">
                    <span className="about__image-initials">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="about__decoration about__decoration--1"></div>
              <div className="about__decoration about__decoration--2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
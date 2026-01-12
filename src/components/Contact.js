import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeSocialLinks = socialLinks.filter(link => link.url);

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__intro">
              <h3 className="contact__heading">Let's Talk</h3>
              <p className="contact__text">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div className="contact__detail-content">
                  <span className="contact__detail-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact__detail-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact__detail-content">
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="contact__detail-content">
                  <span className="contact__detail-label">Availability</span>
                  <span className="contact__detail-value contact__detail-value--status">
                    <span className="contact__status-dot"></span>
                    {personalInfo.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact__social">
              <span className="contact__social-label">Find me on</span>
              <div className="contact__social-links">
                {activeSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__input"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__input"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact__input"
                  placeholder="What's this about?"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`contact__status contact__status--${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact__spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
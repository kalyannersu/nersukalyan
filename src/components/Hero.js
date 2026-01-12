import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade-in animation - no heavy effects
            gsap.from(contentRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Get active social links
    const activeSocialLinks = socialLinks.filter(link => link.url);

    const handleScrollClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Simple Gradient Background - No particles, no blur */}
            <div className="hero__background">
                <div className="hero__gradient hero__gradient--1"></div>
                <div className="hero__gradient hero__gradient--2"></div>
            </div>

            {/* Content Container */}
            <div className="hero__container container" ref={contentRef}>
                {/* Left: Social Links */}
                <div className="hero__social">
                    {activeSocialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-link"
                            aria-label={link.name}
                        >
                            <span className="hero__social-icon">
                                {link.icon === 'github' && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                )}
                                {link.icon === 'linkedin' && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                )}
                            </span>
                        </a>
                    ))}
                    <div className="hero__social-line"></div>
                </div>

                {/* Center: Main Content */}
                <div className="hero__content">
                    {/* Greeting */}
                    <div className="hero__greeting">
                        <span className="hero__wave">👋</span>
                        <span className="hero__greeting-text">Hello, I'm</span>
                    </div>

                    {/* Title */}
                    <h1 className="hero__title">
                        <span className="hero__title-line">
                            <span className="hero__name">{personalInfo.name.split(' ')[0]}</span>
                        </span>
                        <span className="hero__title-line">
                            <span className="hero__name hero__name--accent">{personalInfo.name.split(' ')[1]}</span>
                        </span>
                    </h1>

                    {/* Subtitle - Professional Title */}
                    <div className="hero__subtitle">
                        <span className="hero__role">{personalInfo.title}</span>
                    </div>

                    {/* Tagline */}
                    <p className="hero__tagline">
                        {personalInfo.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero__cta">
                        <a href="#projects" className="btn btn-primary btn-lg hero__cta-btn">
                            <span>View My Work</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary btn-lg hero__cta-btn">
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-value">3+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">10+</span>
                            <span className="hero__stat-label">Projects Completed</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">5+</span>
                            <span className="hero__stat-label">Technologies</span>
                        </div>
                    </div>
                </div>

                {/* Right: Email */}
                <div className="hero__email">
                    <a href={`mailto:${personalInfo.email}`} className="hero__email-link">
                        {personalInfo.email}
                    </a>
                    <div className="hero__email-line"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll">
                <button
                    className="hero__scroll-btn"
                    onClick={handleScrollClick}
                    aria-label="Scroll to next section"
                >
                    <span className="hero__scroll-text">Scroll</span>
                    <span className="hero__scroll-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { navItems, socialLinks } from '../data/portfolioData';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections.reverse()) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  // Get active social links (filter out null URLs)
  const activeSocialLinks = socialLinks.filter(link => link.url);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav container">
        {/* Logo */}
        <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="header__logo-text">Nersu</span>
          <span className="header__logo-accent">Kalyan</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="header__menu">
          {navItems.map((item) => (
            <li key={item.id} className="header__menu-item">
              <a
                href={item.href}
                className={`header__menu-link ${activeSection === item.id ? 'header__menu-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links & CTA */}
        <div className="header__actions">
          {/* Social Icons */}
          <div className="header__social">
            {activeSocialLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label={link.name}
              >
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
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="header__cta btn btn-primary btn-sm"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`header__mobile-overlay ${isMobileMenuOpen ? 'header__mobile-overlay--active' : ''}`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--active' : ''}`}>
        <ul className="header__mobile-nav">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="header__mobile-item"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <a
                href={item.href}
                className={`header__mobile-link ${activeSection === item.id ? 'header__mobile-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className="header__mobile-number">0{index + 1}</span>
                <span className="header__mobile-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Social Links */}
        <div className="header__mobile-social">
          {activeSocialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-social-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

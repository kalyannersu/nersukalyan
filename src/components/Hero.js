import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/Hero.css';

// GSAP is loaded dynamically to reduce initial bundle size and improve FCP

const Hero = () => {
    const heroRef = useRef(null);
    const nameRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Get active social links
    const activeSocialLinks = socialLinks.filter(link => link.url);

    // Mouse spotlight effect with smooth follow
    useEffect(() => {
        let animationFrame;
        const targetPosition = { x: 0, y: 0 };
        const currentPosition = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                targetPosition.x = e.clientX - rect.left;
                targetPosition.y = e.clientY - rect.top;
            }
        };

        const animate = () => {
            currentPosition.x += (targetPosition.x - currentPosition.x) * 0.08;
            currentPosition.y += (targetPosition.y - currentPosition.y) * 0.08;
            setMousePosition({ x: currentPosition.x, y: currentPosition.y });
            animationFrame = requestAnimationFrame(animate);
        };

        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
            animate();
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
            }
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    // GSAP Animations - Lazy loaded to improve FCP/LCP
    useEffect(() => {
        let ctx;

        // Dynamically import GSAP to reduce initial bundle size
        import('gsap').then(({ gsap }) => {
            ctx = gsap.context(() => {
                // Create master timeline
                // Using fromTo() with immediateRender: false to prevent CLS
                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out', immediateRender: false },
                    delay: 0.3 // Slightly longer delay to ensure paint happens first
                });

                // Particles fade in - start hidden, animate to visible
                tl.fromTo('.hero__particle',
                    { opacity: 0, scale: 0 },
                    { opacity: 0.6, scale: 1, duration: 0.8, stagger: { amount: 0.5, from: 'random' } }
                );

                // First name reveals with smooth animation
                tl.fromTo('.hero__firstname',
                    { opacity: 0, y: 40, skewY: 3 },
                    { opacity: 1, y: 0, skewY: 0, duration: 0.9 },
                    '-=0.5'
                );

                // Last name reveals with offset
                tl.fromTo('.hero__lastname',
                    { opacity: 0, y: 40, skewY: 3 },
                    { opacity: 1, y: 0, skewY: 0, duration: 0.9 },
                    '-=0.6'
                );

                // Underline draws
                tl.fromTo('.hero__name-underline',
                    { scaleX: 0, transformOrigin: 'left' },
                    { scaleX: 1, duration: 0.6 },
                    '-=0.3'
                );

                // All animated elements fade in with stagger
                tl.fromTo('.hero__animate',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
                    '-=0.4'
                );

                // Counter animation for stats
                const statValues = document.querySelectorAll('.hero__stat-value');
                statValues.forEach((stat, index) => {
                    const finalText = stat.textContent;
                    const number = parseInt(finalText);
                    if (!isNaN(number)) {
                        const obj = { val: 0 };
                        gsap.to(obj, {
                            val: number,
                            duration: 1.5,
                            delay: 1.2 + (index * 0.1),
                            ease: 'power2.out',
                            onUpdate: () => {
                                stat.textContent = Math.round(obj.val).toString().padStart(2, '0') + '+';
                            }
                        });
                    }
                });

                // Continuous particle floating
                gsap.to('.hero__particle', {
                    y: 'random(-25, 25)',
                    x: 'random(-15, 15)',
                    rotation: 'random(-20, 20)',
                    duration: 'random(3, 6)',
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    stagger: { each: 0.15, from: 'random' },
                    delay: 1
                });

                // Magnetic effect on name
                const nameElement = nameRef.current;
                if (nameElement) {
                    const handleNameMove = (e) => {
                        const rect = nameElement.getBoundingClientRect();
                        const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
                        const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
                        gsap.to(nameElement, { x, y, duration: 0.4, ease: 'power2.out' });
                    };

                    const handleNameLeave = () => {
                        gsap.to(nameElement, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
                    };

                    nameElement.addEventListener('mousemove', handleNameMove);
                    nameElement.addEventListener('mouseleave', handleNameLeave);
                }
            }, heroRef);
        });

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    const handleScrollClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Generate floating particles - reduced for performance
    const particles = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        type: i % 3
    }));

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Spotlight Effect */}
            <div
                className="hero__spotlight"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(213, 191, 118, 0.1), transparent 40%)`
                }}
            />

            {/* Background */}
            <div className="hero__background">
                <div className="hero__grid-pattern" />
                <div className="hero__gradient-orb hero__gradient-orb--1" />
                <div className="hero__gradient-orb hero__gradient-orb--2" />
            </div>

            {/* Floating Particles - Using transform for CLS-free positioning */}
            <div className="hero__particles">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className={`hero__particle hero__particle--${p.type === 0 ? 'dot' : p.type === 1 ? 'ring' : 'square'}`}
                        style={{
                            width: p.size + 'px',
                            height: p.size + 'px',
                            // Use transform instead of left/top to avoid CLS
                            transform: `translate(${p.left}vw, ${p.top}vh)`
                        }}
                    />
                ))}
            </div>

            {/* Top Bar */}
            <div className="hero__topbar hero__animate">
                <div className="hero__social">
                    {activeSocialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-icon"
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
                <a href={`mailto:${personalInfo.email}`} className="hero__toplink">
                    {personalInfo.email}
                </a>
            </div>

            {/* Main Content */}
            <div className="hero__content container">
                {/* Name with Magnetic Effect */}
                <div className="hero__name-wrapper" ref={nameRef}>
                    <h1 className="hero__name">
                        <span className="hero__name-line">
                            <span className="hero__firstname">{personalInfo.name.split(' ')[0]}</span>
                        </span>
                        <span className="hero__name-line">
                            <span className="hero__lastname">
                                {personalInfo.name.split(' ')[1]}
                                <span className="hero__name-underline" />
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Role Badge */}
                <div className="hero__role hero__animate">
                    <span className="hero__role-dot" />
                    <span className="hero__role-text">{personalInfo.title}</span>
                </div>

                {/* Tagline */}
                <p className="hero__tagline hero__animate">{personalInfo.tagline}</p>

                {/* CTA Buttons */}
                <div className="hero__cta">
                    <a href="#projects" className="hero__cta-btn hero__cta-btn--primary hero__animate">
                        <span>View My Work</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                    <a href="#contact" className="hero__cta-btn hero__cta-btn--secondary hero__animate">
                        <span>Get In Touch</span>
                    </a>
                </div>

                {/* Stats */}
                <div className="hero__stats hero__animate">
                    <div className="hero__stat">
                        <span className="hero__stat-value">04+</span>
                        <span className="hero__stat-label">Years Experience</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">10+</span>
                        <span className="hero__stat-label">Projects Completed</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">05+</span>
                        <span className="hero__stat-label">Technologies</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll hero__animate">
                <button className="hero__scroll-btn" onClick={handleScrollClick} aria-label="Scroll to next section">
                    <span className="hero__scroll-text">Scroll</span>
                    <span className="hero__scroll-line" />
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;

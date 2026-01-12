import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    // Get unique categories
    const categories = ['all', ...new Set(projects.map(p => p.category))];

    // Filter projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects I've worked on, showcasing my skills in design and development
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="projects__filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`projects__filter ${filter === category ? 'projects__filter--active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects__grid">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image */}
                            <div className="projects__image-wrapper">
                                {project.images.hero ? (
                                    <img
                                        src={project.images.hero}
                                        alt={project.title}
                                        className="projects__image"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="projects__image-placeholder">
                                        <span className="projects__image-icon">📁</span>
                                    </div>
                                )}

                                {/* Overlay with Links */}
                                <div className={`projects__overlay ${hoveredProject === project.id ? 'projects__overlay--visible' : ''}`}>
                                    <div className="projects__links">
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="projects__link"
                                                aria-label="View live site"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="projects__link"
                                                aria-label="View source code"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <span className="projects__badge">Featured</span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="projects__content">
                                <div className="projects__meta">
                                    <span className="projects__category">{project.category}</span>
                                    <span className="projects__date">{project.date}</span>
                                </div>

                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__subtitle">{project.subtitle}</p>
                                <p className="projects__description">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="projects__tech">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span className="tag">+{project.techStack.length - 4}</span>
                                    )}
                                </div>

                                {/* Highlights */}
                                {project.highlights.length > 0 && (
                                    <ul className="projects__highlights">
                                        {project.highlights.slice(0, 2).map((highlight, i) => (
                                            <li key={i} className="projects__highlight">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="projects__cta">
                    <a href="#contact" className="btn btn-secondary">
                        <span>Have a project in mind?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

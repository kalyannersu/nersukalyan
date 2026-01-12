// Project data for the portfolio
// Update this file with your actual project information

export const projects = [
  {
    id: 1,
    title: "OneTracker",
    subtitle: "Task Management Platform",
    description: "A comprehensive task management and collaboration platform designed to help teams organize, track, and complete projects efficiently. Features include real-time updates, board structures, and intuitive dashboards.",
    date: "October 2023",
    category: "Web Application",
    featured: true,
    images: {
      hero: "/media/onetracker/LogIn.svg",
      gallery: [
        "/media/onetracker/CreateAccount.svg",
        "/media/onetracker/BoardStructure.svg",
        "/media/onetracker/CreateStructure.svg",
        "/media/onetracker/DashboardStructure.svg"
      ]
    },
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    links: {
      live: null, // Add live URL when available
      github: null, // Add GitHub URL when available
      caseStudy: null
    },
    highlights: [
      "Real-time collaboration features",
      "Intuitive drag-and-drop interface",
      "Customizable board structures",
      "Analytics dashboard"
    ]
  },
  {
    id: 2,
    title: "Parking Eye",
    subtitle: "Smart Parking Solution",
    description: "An intelligent parking management system that helps users find available parking spots, view real-time occupancy data, and generate detailed reports. Features interactive maps and analytics.",
    date: "September 2023",
    category: "Web Application",
    featured: true,
    images: {
      hero: "/media/parkingEye/Map.svg",
      gallery: [
        "/media/parkingEye/Login.svg",
        "/media/parkingEye/Reports.svg"
      ]
    },
    techStack: ["React", "Python", "PostgreSQL", "Google Maps API", "Chart.js"],
    links: {
      live: null,
      github: null,
      caseStudy: null
    },
    highlights: [
      "Real-time parking availability",
      "Interactive map interface",
      "Comprehensive reporting system",
      "State-wise analytics"
    ]
  },
  {
    id: 3,
    title: "Hindu Events",
    subtitle: "Cultural Events Platform",
    description: "A platform dedicated to discovering and managing Hindu cultural events, festivals, and religious gatherings. Connects community members with local and regional cultural celebrations.",
    date: "September 2021",
    category: "Web Application",
    featured: false,
    images: {
      hero: null, // Add hero image when available
      gallery: []
    },
    techStack: ["React", "Firebase", "Node.js", "Express"],
    links: {
      live: null,
      github: null,
      caseStudy: null
    },
    highlights: [
      "Event discovery and search",
      "Community features",
      "Event management tools",
      "Calendar integration"
    ]
  }
];

// Personal information - Update with your details
export const personalInfo = {
  name: "Nersu Kalyan",
  title: "Software Engineer",
  tagline: "Turning ideas into reality through code",
  email: "contact@nersukalyan.com", // Update with real email
  location: "India",
  availability: "Open to opportunities",
  bio: [
    "I'm a passionate software engineer who loves building digital products that make a difference. With expertise in full-stack development, I create elegant solutions to complex problems.",
    "My journey in tech started at K L University, where I discovered my love for crafting intuitive user experiences and robust backend systems. I specialize in React, Node.js, and modern web technologies.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers."
  ],
  resumeUrl: null, // Add resume URL
  avatarUrl: null // Add avatar image URL
};

// Social links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/nersukalyan", // Update with real URL
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nersu-kalyan-1820a9178",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: null, // Add if available
    icon: "twitter"
  },
  {
    name: "Instagram",
    url: null, // Add if available
    icon: "instagram"
  }
];

// Skills data
export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Next.js", level: 70 },
    { name: "React Native", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 70 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 60 }
  ],
  database: [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Firebase", level: 80 },
    { name: "Redis", level: 60 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 },
    { name: "Vercel", level: 85 },
    { name: "Figma", level: 70 }
  ]
};

// Experience data - Update with your actual experience
export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Your Company", // Update
    location: "India",
    period: "2023 - Present",
    current: true,
    description: "Building scalable web applications and leading frontend development initiatives.",
    achievements: [
      "Developed and maintained multiple React applications",
      "Improved application performance by 40%",
      "Mentored junior developers"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    id: 2,
    role: "Junior Developer",
    company: "Previous Company", // Update
    location: "India",
    period: "2021 - 2023",
    current: false,
    description: "Started career building web applications and learning best practices.",
    achievements: [
      "Built responsive web applications",
      "Collaborated with cross-functional teams",
      "Implemented modern UI/UX designs"
    ],
    technologies: ["JavaScript", "React", "HTML", "CSS"]
  }
];

// Education data
export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science / IT", // Update with actual field
    institution: "K L University",
    location: "India",
    period: "2017 - 2021", // Update with actual years
    achievements: []
  }
];

// Navigation items
export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" }
];

// Portfolio data - easy to update
export const personalInfo = {
  name: "Aryan Kumar",
  title: "Full Stack Developer",
  email: "aryantk4848@gmail.com",
  phone: "+91 99721 19604",
  github: "https://github.com/aryankumar4848",
  linkedin: "https://www.linkedin.com/in/aryan-tk",
  leetcode: "https://leetcode.com/u/aryankumar4848",
  photo: "/Aryan_Profile_Pic.jpeg",
};

export const about = {
  description: `Final-year Computer Science undergraduate with strong foundations in Data Structures, Operating Systems, and Networking. Experienced in designing concurrent, ACID-compliant backend systems and distributed microservices using Java, Spring Boot, PostgreSQL, Docker, and REST APIs. Strong understanding of scalable system design, database consistency models, and cloud-native development practices.`,
};

export const education = {
  institution: "M. S. Ramaiah Institute of Technology",
  location: "Bangalore, India",
  degree: "B.E. in Computer Science Engineering",
  cgpa: "8.68",
  period: "2022 - 2026",
};

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Ramaiah Institute of Technology",
    location: "Bangalore, India",
    period: "",
    description: [
      "Engineered a MERN-based booking system by implementing JWT-based RBAC and atomic slot validation logic, eliminating 100% double-booking across 5,000+ simulated reservations.",
      "Improved database performance by introducing indexed MongoDB queries and benchmarking execution paths, increasing retrieval speed by 3x over 5k+ records.",
      "Accelerated release cycles by automating CI pipelines using GitHub Actions, reducing deployment time by 60% (20 min → 8 min).",
    ],
  },
];

export const skills = [
  // Languages
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  // Backend
  "Spring Boot",
  "Spring Cloud",
  "Node.js",
  "REST APIs",
  "Hibernate",
  "JPA",
  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  // DevOps & Tools
  "Docker",
  "Git",
  "GitHub Actions",
  "Jenkins",
  "CI/CD",
  "Postman",
  "JMeter",
  // Core Concepts
  "Data Structures & Algorithms",
  "OOP",
  "Concurrency",
  "Microservices",
  "Distributed Systems",
  "System Design",
  // OS & Networking
  "Process Management",
  "Synchronization",
  "TCP/IP",
  "HTTP/HTTPS",
];

export const projects = [
  {
    id: 1,
    title: "Fintech Ledger & Payments API Platform",
    description: "Built an ACID-compliant ledger API by implementing transaction isolation and row-level locking, ensuring 100% consistency across deposit, withdrawal, and transfer operations. Eliminated duplicate financial transactions by designing idempotency-key validation. Optimized API throughput using cursor-based pagination and query tuning.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/aryankumar4848/fintech-ledger",
  },
  {
    id: 2,
    title: "Microservice-based Event Booking System",
    description: "Designed a 3-service microservices architecture (User, Event, Booking) enabling modular deployment and service isolation. Prevented 100% seat double-booking under concurrency using transactional database locking. Validated system scalability using JMeter with 150+ concurrent users.",
    tech: ["Spring Boot", "PostgreSQL", "Docker"],
    link: "https://github.com/aryankumar4848/event-driven-ticket-booking-microservice",
  },
  {
    id: 3,
    title: "MBTI Cognitive Chatbot (AI Personality Inference System)",
    description: "Built a full-stack AI chatbot by integrating a React frontend, Node.js backend, and Python ML inference service. Deployed an mBERT-based MBTI classifier (16 classes) achieving 0.81 validation AUC. Containerized client, server, and ML services using Docker Compose.",
    tech: ["React", "Node.js", "Python", "Docker", "TensorFlow"],
    link: "https://github.com/aryankumar4848/mbti-chatbot",
  },
];

export const certifications = [
  "Research Paper Accepted (IEEE Conference 2026) — MBTI-based cognitive chatbot architecture",
  "Azure AZ-900 - Azure fundamentals",
  "Solved 100+ DSA problems across LeetCode and GeeksforGeeks",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];


// Portfolio data - updated from LaTeX resumes (V1 MERN focus)
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
  description: `Final-year Computer Science undergraduate passionate about building real-world products using the MERN stack. Experienced in developing scalable full-stack systems including real-time applications, AI-powered platforms, and e-commerce architectures. Strong foundation in backend engineering, API design, distributed systems basics, and performance optimization with hands-on experience in Docker, Redis, and CI/CD workflows.`,
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
      "Built a MERN-based seminar hall booking system with JWT-based RBAC and atomic slot validation eliminating double-booking across 5,000+ simulated reservations.",
      "Optimized MongoDB indexing and benchmarked queries across 5k+ records improving retrieval speed by 3×.",
      "Configured CI/CD pipelines using GitHub Actions reducing deployment time from 20 minutes to under 8 minutes.",
      "Digitized approval workflows reducing simulated processing time by ~40%.",
    ],
  },
];

export const skills = [
  "JavaScript", "Java", "Python", "SQL",
  "MongoDB", "Express.js", "React.js", "Node.js",
  "REST APIs", "JWT Authentication", "Redis", "Socket.io",
  "React", "Tailwind CSS", "Framer Motion",
  "Docker", "Git", "GitHub Actions", "Postman", "Swagger",
  "Microsoft Azure (AZ-900 In Progress)",
  "Data Structures & Algorithms", "OOP", "Concurrency", "Distributed Systems Basics"
];

export const projects = [
  {
    id: 1,
    title: "Real Time Chat Application",
    description: "High-concurrency chat platform with multi-room support and persistent messaging using MongoDB Atlas. Optimistic UI, debounced typing indicators.",
    tech: ["Node.js", "Express", "React", "MongoDB Atlas", "Socket.io"],
    link: "https://github.com/aryankumar4848/socket-chat-app",
  },
  {
    id: 2,
    title: "AgriConnect — MERN Agricultural Platform",
    description: "Full-stack agricultural platform with e-commerce marketplace, Razorpay payments, JWT RBAC, Redis caching, Docker containerization.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redis", "Docker"],
    link: "https://github.com/aryankumar4848/AgriConnect",
  },
  {
    id: 3,
    title: "MBTI Cognitive Chatbot",
    description: "Full-stack AI chatbot with React frontend, Node.js APIs, Python ML service (mBERT classifier 0.81 AUC, DistilRoBERTa emotion detection), Docker Compose.",
    tech: ["React", "Node.js", "Python", "MongoDB", "Docker"],
    link: "https://github.com/aryankumar4848/MBTI-Chatbot",
  },
  {
    id: 4,
    title: "Fintech Ledger",
    description: "ACID-compliant ledger API with transaction isolation, idempotency keys, cursor pagination, row-level locking.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/aryankumar4848/fintech-ledger",
  },
  {
    id: 5,
    title: "Event Driven Ticket Booking Microservice",
    description: "3-service microservices architecture (User/Event/Booking), Redis caching, JMeter load testing (150+ concurrent).",
    tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    link: "https://github.com/aryankumar4848/event-driven-ticket-booking-microservice",
  },
  {
    id: 6,
    title: "Job Portal",
    description: "Backend services with Admin/Recruiter/Candidate RBAC, 12+ REST endpoints, JPA/Hibernate schema.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/aryankumar4848/job-portal",
  },
  {
    id: 7,
    title: "Stock Analysis",
    description: "Automated financial intelligence pipeline processing historical CSVs into ML-backed investment summaries (Random Forest feature importance).",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/aryankumar4848/stock-analysis",
  },
  {
    id: 8,
    title: "Handwriting Recognition",
    description: "AI-driven pattern recognition framework with CNN pipeline, grayscale normalization, 99.06% accuracy on MNIST.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/aryankumar4848/handwriting-recognition",
  }
];

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900) — In Progress",
  "IEEE Conference Paper (March 2026) — AI-based cognitive chatbot integrating MBTI modeling and emotion-aware NLP",
  "DSA Practice — Solved 100+ problems on LeetCode and GeeksforGeeks",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

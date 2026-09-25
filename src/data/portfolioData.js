export const personalInfo = {
  name: "Kuldeep Chouhan",
  title: "Python Backend Developer",
  location: "Abu Road, Rajasthan",
  email: "Kuldeepchouhan1301@gmail.com",
  phone: "+91 7976219951",
  linkedin: "https://linkedin.com/in/kuldeepchouhan1301",
  linkedinDisplay: "linkedin.com/in/kuldeepchouhan1301",
  github: "https://github.com/kuldeepchouhan1301",
  githubDisplay: "github.com/kuldeepchouhan1301",
  resumeViewUrl: "/resume.pdf",
  resumeDownloadUrl: "/resume.pdf",
  resumeUrl: "/resume.pdf",
  heroHeadline: "Building reliable backends, scalable web applications.",
  heroSummary: "I build production-ready web applications and backend systems using Python, Django, Flask, PHP and SQL.",
  fullSummary: "Python Backend Developer skilled in Django, Flask, REST API development and SQL databases. Experienced in building scalable web applications, authentication systems, automation scripts, and deploying production projects. Strong foundation in OOP, Data Structures, MVC architecture, and backend optimization.",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Adarsh College of Professional Studies",
  location: "Aburoad, Rajasthan",
  period: "2023 — 2026",
  cgpa: "7.27",
};

export const educationList = [
  {
    num: "01",
    level: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    institution: "Adarsh College of Professional Studies, Aburoad",
    university: "Mohanlal Sukhadia University, Udaipur",
    scoreType: "CGPA",
    score: "7.27",
    isHighest: true,
  },
  {
    num: "02",
    level: "12th",
    institution: "Jawahar Navodaya Vidyalaya, Kalandri",
    board: "Central Board of Secondary Education (CBSE)",
    scoreType: "Percentage",
    score: "63.40%",
    isHighest: false,
  },
  {
    num: "03",
    level: "10th",
    institution: "Jawahar Navodaya Vidyalaya, Kalandri",
    board: "Central Board of Secondary Education (CBSE)",
    scoreType: "Percentage",
    score: "79.80%",
    isHighest: false,
  }
];

export const whatIBuild = [
  {
    title: "Backend Systems",
    description: "Robust, modular backend architecture using Python (Django/Flask) and PHP with clear separation of concerns.",
    icon: "Server"
  },
  {
    title: "REST APIs",
    description: "Clean, documented, and secure API endpoints built for seamless frontend integration and efficient data transport.",
    icon: "Code2"
  },
  {
    title: "Database Architecture",
    description: "Optimized relational database schemas, migrations, and queries using MySQL, SQLite, and ORM abstractions.",
    icon: "Database"
  },
  {
    title: "Authentication Systems",
    description: "Secure session management, role-based access control (RBAC), and password hashing for web applications.",
    icon: "ShieldCheck"
  },
  {
    title: "Automation & Scripts",
    description: "Python automation scripts for data extraction, log analysis workflows, and third-party API integrations.",
    icon: "Workflow"
  },
  {
    title: "Production Deployments",
    description: "Hands-on experience configuring web servers (Apache, cPanel), Git workflows, and hosting production platforms.",
    icon: "Rocket"
  }
];

export const skillCategories = [
  {
    id: "backend",
    category: "Backend",
    skills: ["Python", "Django", "Flask", "REST APIs", "PHP", "MVC", "Authentication", "Session Management"]
  },
  {
    id: "databases",
    category: "Databases",
    skills: ["MySQL", "SQLite", "Database Design"]
  },
  {
    id: "languages",
    category: "Languages",
    skills: ["Python", "PHP", "SQL", "JavaScript", "HTML", "CSS"]
  },
  {
    id: "tools",
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman"]
  },
  {
    id: "libraries",
    category: "Python Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Requests"]
  },
  {
    id: "deployment",
    category: "Deployment",
    skills: ["Apache", "cPanel", "Hosting", "Git Deployment"]
  },
  {
    id: "concepts",
    category: "Concepts",
    skills: ["DSA", "SDLC", "Agile", "Debugging", "API Testing"]
  }
];

export const featuredProject = {
  id: "mbvm-school",
  tag: "FEATURED PROJECT",
  title: "MBVM School Website",
  subtitle: "Production School Management Platform",
  type: "BCA Major Project",
  year: "2026",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  liveUrl: "https://madhusudanschoolmungthala.co.in",
  githubUrl: "https://github.com/kuldeepchouhan1301/MBVM-School-Website",
  description: "Developed and deployed a production school management platform with 10+ modules including admissions, results, events and admin dashboard.",
  features: [
    "PHP/MySQL backend & database architecture",
    "Secure authentication & session handling",
    "Complete CRUD operations for school records",
    "File handling & document upload pipelines",
    "Google Sheets automation & integration",
    "CSV export engine for student records",
    "Comprehensive admin management dashboard",
    "Admissions, Results & Events modules",
    "Performance optimization & production deployment"
  ],
  modulesCount: "10+",
  status: "Production Deployed"
};

export const otherProjects = [
  {
    id: "arkitektur",
    number: "PROJECT 02",
    title: "Arkitektur",
    subtitle: "Architecture Showcase Website",
    type: "Personal Project",
    year: "2025",
    tech: ["Python", "Django", "SCSS", "JavaScript", "SQLite"],
    githubUrl: "https://github.com/kuldeepchouhan1301/arkitektur-django",
    description: "Developed a Django web application following MVT architecture with modular apps, models, views and templates.",
    features: [
      "Django MVT architecture implementation",
      "Django ORM model structures",
      "SQLite relational database setup",
      "Dynamic URL routing & view rendering",
      "Authentication-ready security structure",
      "Modular & scalable backend project structure"
    ]
  },
  {
    id: "student-analytics",
    number: "PROJECT 03",
    title: "Student Performance Analysis System",
    subtitle: "Academic Analytics Platform",
    type: "Academic Project",
    year: "2025",
    tech: ["PHP", "MySQL", "Bootstrap 5", "Chart.js"],
    githubUrl: null,
    description: "Built a full-stack student analytics platform with role-based authentication for students and admins.",
    features: [
      "Role-based authentication (Student & Admin)",
      "Performance & marks analytics visualization",
      "Attendance tracking & assignment reports",
      "Interactive Chart.js visual dashboards",
      "Detailed student insights & admin management"
    ]
  }
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    company: "Codec Technologies Pvt. Ltd.",
    period: "September 2025 — October 2025",
    responsibilities: [
      "Automated security log analysis workflows using Python scripts, reducing manual verification tasks.",
      "Performed vulnerability assessment for web applications including SQL Injection, XSS, and authentication issues.",
      "Worked with security tools and documented mitigation strategies following secure coding practices."
    ],
    note: "Applied web security knowledge directly to Python and PHP backend engineering, ensuring secure API endpoints and robust database queries."
  }
];

export const achievements = [
  {
    number: "01",
    title: "Built & Deployed 3 Full-Stack Applications",
    description: "Developed and successfully shipped 3 full-stack applications using Python/Django and PHP/MySQL stacks."
  },
  {
    number: "02",
    title: "Production School Platform",
    description: "Engineered and deployed a live production platform managing admissions, student results, and administrative workflows."
  },
  {
    number: "03",
    title: "Cybersecurity Internship",
    description: "Completed a specialized internship analyzing security vulnerabilities and implementing secure coding practices for web applications."
  }
];

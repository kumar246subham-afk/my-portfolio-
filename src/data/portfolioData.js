export const personalInfo = {
  name: "Subham Kumar Keshari",
  title: "Aspiring Data Analyst | Full-Stack Developer | Data Science Enthusiast",
  roles: [
    "Data Analyst",
    "Full-Stack Developer",
    "Data Science Enthusiast"
  ],
  education: {
    degree: "B.Tech in Computer Engineering",
    university: "Marwadi University",
    location: "Rajkot, Gujarat, India",
    status: "Undergraduate Student",
    description: "Specializing in software engineering fundamentals, database systems, analytical mathematics, and data structures."
  },
  shortBio: "I build meaningful digital experiences by combining technology, data and creativity.",
  aboutText: "I am Subham Kumar Keshari, a Computer Engineering student at Marwadi University, passionate about Data Analytics, Full-Stack Development and emerging AI technologies. I enjoy building practical applications, solving problems and continuously learning new technologies.",
  email: "kumar246subham@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=kumar246subham@gmail.com",
  mailtoUrl: "mailto:kumar246subham@gmail.com",
  github: "https://github.com/kumar246subham-afk",
  linkedin: "https://www.linkedin.com/in/subham-kumar-keshari-28b349321/",
  resumePath: "/resume/subham-resume.pdf",
  profileImage: "/images/subham-profile.png",
  interests: [
    "Data Analytics",
    "Data Science",
    "Artificial Intelligence",
    "Full-Stack Web Development",
    "Building practical real-world applications"
  ]
};

export const skillCategories = [
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description: "Deriving actionable insights, data manipulation, statistical modeling, and interactive dashboards.",
    color: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/50",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400/50",
    skills: [
      { name: "Python", level: "Advanced", icon: "Code2" },
      { name: "SQL", level: "Proficient", icon: "Database" },
      { name: "Power BI", level: "Proficient", icon: "BarChart3" },
      { name: "Microsoft Excel", level: "Advanced", icon: "Sheet" },
      { name: "Pandas", level: "Proficient", icon: "Binary" },
      { name: "NumPy", level: "Proficient", icon: "Cpu" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting modern, high-performance, and responsive user interfaces with sleek interactions.",
    color: "from-cyan-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-cyan-500/50",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "Code" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript", level: "Advanced", icon: "FileCode2" },
      { name: "React", level: "Proficient", icon: "Atom" },
      { name: "Vite", level: "Proficient", icon: "Zap" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Wind" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting reliable server-side services, RESTful APIs, data persistence, and secure authentication.",
    color: "from-violet-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-violet-500/50",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400/50",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "Network" },
      { name: "REST APIs", level: "Proficient", icon: "Workflow" },
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "MySQL", level: "Proficient", icon: "TableProperties" },
      { name: "JWT Authentication", level: "Proficient", icon: "ShieldCheck" }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering Fundamentals",
    description: "Core computer science principles, object-oriented design patterns, and systems programming.",
    color: "from-indigo-500/20 to-blue-500/10",
    borderGlow: "group-hover:border-indigo-500/50",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/50",
    skills: [
      { name: "Java", level: "Academic", icon: "Coffee" },
      { name: "C++", level: "Academic", icon: "Terminal" },
      { name: "C#", level: "Familiar", icon: "Box" },
      { name: ".NET", level: "Familiar", icon: "Layers" },
      { name: "OOP Principles", level: "Proficient", icon: "GitCommit" }
    ]
  },
  {
    id: "developer-tools",
    title: "Developer Tools & Platforms",
    description: "Modern version control, cloud deployment environments, API testing, and developer environments.",
    color: "from-sky-500/20 to-indigo-500/10",
    borderGlow: "group-hover:border-sky-500/50",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-400/50",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Laptop" },
      { name: "Postman", level: "Proficient", icon: "Send" },
      { name: "Vercel", level: "Proficient", icon: "Globe" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "convertx",
    title: "ConvertX",
    badge: "File Conversion Suite",
    description: "An online file conversion platform designed to make document and image conversion simple and accessible, eliminating complex software barriers for everyday users.",
    image: "/projects/convertx-preview.png",
    technologies: ["React", "Vite", "Node.js", "Express.js", "pdf-lib"],
    features: [
      "Image to PDF",
      "PDF to Images",
      "Word to PDF",
      "Excel to PDF",
      "PowerPoint to PDF"
    ],
    github: "https://github.com/kumar246subham-afk/convertx",
    liveDemo: "https://convertx-client.onrender.com", 
    liveStatusLabel: "Live Production App",
    gradient: "from-blue-600/30 via-cyan-600/20 to-transparent",
    borderAccent: "hover:border-cyan-500/50"
  },
  {
    id: "resume-checker-ai",
    title: "Resume-Checker-AI",
    badge: "AI & ATS Platform",
    description: "An AI-powered resume platform that helps users build ATS-optimized resumes, analyze compatibility against job requirements, and identify missing critical keywords.",
    image: "/projects/resume-checker-preview.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OCR"],
    features: [
      "ATS Compatibility Scoring",
      "Optical Character Recognition (OCR)",
      "Job Description Match Analysis",
      "Smart Resume Builder",
      "Keyword & Skills Gap Detection"
    ],
    github: "https://github.com/kumar246subham-afk/Resume-Checker-AI",
    liveDemo: "https://resume-checker-ai-blush.vercel.app",
    liveStatusLabel: "Live Production App",
    gradient: "from-violet-600/30 via-indigo-600/20 to-transparent",
    borderAccent: "hover:border-violet-500/50"
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

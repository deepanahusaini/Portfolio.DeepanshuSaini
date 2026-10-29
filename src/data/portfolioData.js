export const portfolioData = {
  profile: {
    logoInitials: "Portfolio",
    firstName: "Deepanshu",
    lastName: "Saini",
    greeting: "👋 Hello, I'm",
    headlineRoles: [
      "Cloud Architectures ☁️",
      "Full-Stack Products 💻",
      "Generative AI Systems 🤖",
      "Scalable Experiences 🚀"
    ],
    bio: "A passionate engineer at the intersection of Cloud Computing, Full-Stack Development and Generative AI. I design scalable architectures, craft immersive web experiences and build intelligent systems that turn ideas into reality.",
    ctaPrimary: { label: "Explore My Work", href: "#cloud" },
    ctaSecondary: { label: "Get In Touch", href: "#contact" },
    stats: [
      { count: 1, label: "Fresher" },
    ]
  },

  navLinks: [
    { label: "About", href: "#hero", id: "hero" },
    { label: "Cloud", href: "#cloud", id: "cloud" },
    { label: "Full Stack", href: "#fullstack", id: "fullstack" },
    { label: "Gen AI", href: "#genai", id: "genai" },
    { label: "Contact", href: "#contact", id: "contact" }
  ],

  cloud: {
    id: "cloud",
    tag: "01 — Cloud Computing",
    title: "Scaling Ideas in the Cloud",
    subtitle: "Building practical solutions across cloud computing, Generative AI, and full-stack development — from containerized applications and cloud infrastructure to intelligent AI-powered systems and responsive web experiences.",
    timeline: [
      {
        date: "2026 — Present",
        title: "Aspiring Cloud Engineer · Generative AI & Full-Stack Developer",
        description: "Developing hands-on projects using AWS, Linux, Docker, Python, LLM APIs, React, Node.js, and databases. Exploring cloud deployment, AI agents, application integration, and scalable software architecture through practical implementation."
      },
      {
        date: "2025",
        title: "Cloud Computing & DevOps",
        description: "Built GitHub Actions pipelines, Docker-ized."
      }
    ],
    cards: [
      {
        icon: "🐳",
        title: " Containerized Application Deployment",
        meta: "Docker · Ubuntu · Node.js",
        description: "Containerizing Node.js applications using Docker and Ubuntu to understand consistent application environments, image creation, and portable deployments.",
        tags: ["Docker", "Ubuntu Linux", "Node.js", "Dockerfile"],
        colors: { c1: "#38bdf8", c2: "#60a5fa" }
      },
      {
        icon: "☁️",
        title: "Cloud Infrastructure & Networking",
        meta: "AWS · VPC · EC2",
        description: "Practicing cloud infrastructure fundamentals, including virtual machines, network configuration, IP addressing, security groups, and cloud resource management.",
        tags: ["AWS EC2", "VPC & Networking", "IAM & Security", "Cloud Architecture"],
        colors: { c1: "#38bdf8", c2: "#60a5fa" }
      },
      {
        icon: "🏗️",
        title: "Infrastructure Automation",
        meta: "Docker · Linux · Git & GitHub",
        description: "Building practical skills in application deployment, environment configuration, version control, and repeatable development workflows.",
        tags: ["Docker", "Linux", "GIT/GIT HUB", "CI/CD Pipelines"],
        colors: { c1: "#38bdf8", c2: "#60a5fa" }
      },
      {
        icon: "🎖️",
        title: "Certifications & Learning",
        meta: "Cloud Computing · Generative AI · Software Development",
        description: "Building a strong technical foundation through hands-on projects, structured learning, and practical implementation.",
        tags: ["AWS Cloud Fundamentals", "Linux & Docker", "Generative AI & LLM Engineering", "Full-Stack Web Development"],
        colors: { c1: "#38bdf8", c2: "#60a5fa" }
      }
    ]
  },

  fullstack: {
    id: "fullstack",
    tag: "02 — Full Stack Development",
    title: "Crafting End-to-End Experiences",
    subtitle: "Building responsive web applications by combining intuitive frontend interfaces, reliable backend APIs, and efficient database integration — with a focus on usability, functionality, and maintainable code.",
    timeline: [
      {
        date: "2026 — Present",
        title: "Full-Stack Developer · Personal & Academic Projects",
        description: "Developing full-stack applications using React, Node.js, Express, and PostgreSQL. Working on authentication, real-time communication, media management, API integration, and database-driven features."
      }
    ],
    cards: [
      {
        icon: "🎨",
        title: "Frontend Development",
        meta: "React · Vite · Tailwind CSS",
        description: "Creating responsive, modern user interfaces with reusable components, clean layouts, and interactive experiences.",
        tags: ["React JS", "Vite","Tailwind", "HTML5 & CSS3","JavaScript"],
        colors: { c1: "#34d399", c2: "#fbbf24" }
      },
      {
        icon: "🧠",
        title: "Backend",
        meta: "Node.js · Express · REST APIs",
        description: "Building backend services, API endpoints, authentication workflows, and integrations to connect frontend applications with databases and external services.",
        tags: ["Node.js", "Express.Js", "REST APIs", "Fast API", "Python & Streamlit"],
        colors: { c1: "#34d399", c2: "#fbbf24" }
      },
      {
        icon: "🗄️",
        title: "Databases & Integrations",
        meta: "PostgreSQL · Prisma · MongoDB",
        description: "Working with relational databases, ORM-based data access, application data models, and third-party service integrations.",
        tags: ["PostgreSQL", "MongoDB", "PrismaORM", "Firebase"],
        colors: { c1: "#34d399", c2: "#fbbf24" }
      },
      {
        icon: "🚀",
        title: "Featured Project — The Real VO Artist",
        meta: "React · Express · PostgreSQL · Prisma · Socket.IO",
        description: "A full-stack platform designed around voice-over artists, featuring a modern frontend, backend API architecture, database integration, media management, and real-time communication.",
        tags: ["React + Vite", "Tailwind CSS", "Node.js + Express", "PostgreSQL + Prisma", "Socket.IO","Cloudinary"],
        wide: true,
        colors: { c1: "#34d399", c2: "#fbbf24" }
      },
      {
        icon: "📱",
        title: "Application Development & Integration",
        meta: "Full-Stack Web Apps · API Integration",
        description: "Developing end-to-end web applications that connect user interfaces, backend logic, databases, and external services into a unified experience.",
        tags: ["Responsive Web Design", "Authentication & OTP Verification", "Real-Time Communication","File & Media Management","Git & GitHub"],
        colors: { c1: "#34d399", c2: "#fbbf24" }
      }
    ]
  },

  genai: {
    id: "genai",
    tag: "03 — Generative AI",
    title: "Building Intelligent Systems",
    subtitle: "Exploring Generative AI, Large Language Models, and AI-powered applications to build systems that generate content, assist with decision-making, and automate real-world tasks.",
    timeline: [
      {
        date: "2026 — Present",
        title: "Generative AI Developer · Personal & Academic Projects",
        description: "Developing practical AI solutions using Python, LLM APIs, and machine learning concepts. Exploring prompt engineering, LLM integration, AI agents, and the development of intelligent applications."
      }
    ],
    cards: [
      {
        icon: "🤖",
        title: "LLM-Powered Applications",
        meta: "Python · OpenAI API · Prompt Engineering",
        description: "Building AI-powered applications that use large language models to understand user queries, generate responses, and assist with everyday tasks.",
        tags: ["Python", "OpenAI API", "PPrompt Engineering", "LangChain — learning & experimentation"],
        colors: { c1: "#f472b6", c2: "#a78bfa" }
      },
      {
        icon: "🕸️",
        title: "AI Agent — Online Shopping Scam Detection",
        meta: "Python · LLMs · Web Technologies",
        description: "Developing an AI agent concept to help identify suspicious online shopping activity by analyzing product claims, website information, and potential scam indicators.",
        tags: ["Python", "LLM Integration", "Information Extraction","AI Agent Workflows"],
        colors: { c1: "#f472b6", c2: "#a78bfa" }
      },
      {
        icon: "🖼️",
        title: "Text-to-Image Generation",
        meta: "Deep Learning · Encoder–Decoder Architecture · Diffusion Models",
        description: "Exploring AI-based image generation through text prompts, learning how language representations and generative models can be used to create visual content.",
        tags: ["Python", "Deep Learning", "Encoder–Decoder Concepts", "Diffusion Models — learning & exploration"],
        colors: { c1: "#f472b6", c2: "#a78bfa" }
      },
      {
        icon: "🛡️",
        title: "AI & Machine Learning — Credit Card Fraud Detection",
        meta: "Python · Scikit-learn · Streamlit",
        description: "Developing a machine-learning-based fraud detection system that analyzes transaction patterns, identifies potentially fraudulent activity, and presents results through an interactive dashboard.",
        tags: ["Python", "Scikit-learn", "Streamlit","Pandas & NumPy","Isolation Forest"],
        colors: { c1: "#f472b6", c2: "#a78bfa" }
      },
      {
        icon: "📊",
        title: "LLM Engineering & AI Application Development",
        meta: "LLM APIs · Model Integration · Evaluation",
        description: "Building a foundation in the practical engineering of LLM-powered applications, from API integration and prompt design to response validation and application workflows.",
        tags: ["LLM API Integration", "Python", "Prompt Engineering", "Model Evaluation Fundamentals","Git & GitHub"],
        wide: true,
        colors: { c1: "#f472b6", c2: "#a78bfa" }
      }
    ]
  },

  contact: {
    id: "contact",
    tag: "04 — Let's Connect",
    title: "Have a Project in Mind?",
    subtitle: "I'm open to full-time roles, freelance projects and collaborations. Let's build something amazing together.",
    links: [
      { label: "✉️ Email", href: "mailto:deepanshu0saini@gmail.com?subject=Hii,%20I recently visited your portfolio site" },
      { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/deepanshu-saini-5a2653259/", external: true },
      { label: "🐙 GitHub", href: "https://github.com/deepanahusaini", external: true },
      { label: "📄 Resume", href: "#", download: true }
    ]
  }
};

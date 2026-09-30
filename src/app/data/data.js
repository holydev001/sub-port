export const projects = [
  {
    name: "Visual Query Builder",
    category: "Developer Tool",
    year: "2025",
    slug: "visual-query-builder",
    coverImage: "/querycraft-preview.png",
    shortDescription: "Build production-ready SQL queries visually",
    textColor: "text-white",
    fullDescription:
      "An interactive, drag-and-drop SQL query builder that makes complex data exploration accessible without requiring users to memorize SQL syntax.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://visual-query-builder-ten.vercel.app/",
    githubUrl: "https://github.com/holydev001/visual-query-builder",
  },
  {
    name: "OBJEKT//404",
    category: "Interactive Experience",
    year: "2025",
    slug: "objekt-404",
    coverImage: "/objekt-404.png",
    shortDescription: "A cinematic, interactive 3D web artifact",
    textColor: "text-white",
    fullDescription:
      "An experimental interactive artifact recovered from a future not yet rendered. Drag, scroll, and hover to manipulate the broadcast in this exploration of brutalist design and real-time 3D.",
    techStack: ["React", "Three.js", "TypeScript", "GSAP"],
    liveUrl: "https://objekt-404.vercel.app/",
    githubUrl: "https://github.com/holydev001/objekt-404",
  },
  {
    name: "Kairo",
    category: "Desktop Application",
    year: "2026",
    slug: "kairo",
    coverImage: "/kairo-preview.png",
    shortDescription: "A local-first personal command center",
    textColor: "text-white",
    fullDescription:
      "A local-first daily journal and personal command center built around Kaizen. Set intentions, keep commitments, reflect each evening, and review your direction each week—all on your device.",
    techStack: ["Electron", "React", "TypeScript", "SQLite", "Zustand"],
    liveUrl:
      "https://github.com/holydev001/kairo/releases/download/v0.1.0-beta.11/Kairo-Setup-0.1.0-beta.11-x64.exe",
    liveLabel: "Download for Windows",
    githubUrl: "https://github.com/holydev001/kairo",
  },
  {
    name: "3D Portfolio",
    category: "Portfolio Variation",
    year: "2026",
    slug: "3d-portfolio",
    coverImage: "/portfolio-3d-preview.png",
    shortDescription: "An immersive cosmic portfolio experience",
    textColor: "text-white",
    fullDescription:
      "An immersive cosmic portfolio with an interactive Three.js hero, particle systems, orbiting geometry, and GSAP-powered motion.",
    techStack: ["Next.js", "Three.js", "React Three Fiber", "GSAP", "TypeScript"],
    liveUrl: "https://3d-port-phi.vercel.app/",
    githubUrl: "https://github.com/holydev001/3d-port",
  },
];

export const experience = [
  {
    company: "Emerj LLC",
    role: "Lead Frontend Developer",
    period: "2025 — Present",
    summary: "Building admin analytics, data visualization, and scalable Next.js product features.",
  },
  {
    company: "Nexus Haven",
    role: "Fullstack Engineer",
    period: "2026",
    summary: "Shipped a performant 3D experience and an async FastAPI and MongoDB waitlist backend.",
  },
  {
    company: "Content Q",
    role: "Web Developer",
    period: "2025",
    summary: "Led frontend delivery for a production marketing site and its waitlist system.",
  },
  {
    company: "HNG",
    role: "Intern / Junior Developer",
    period: "2025",
    summary: "Built and shipped features with an agile, cross-functional product team.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

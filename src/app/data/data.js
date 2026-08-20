// app/data/projects.js

export const projects = [
  {
    name: "Hephzi Shoes",
    slug: "hephzi-shoes",
    coverImage: "/project1.png",
    shortDescription: "A modern footwear e-commerce platform",

    // 👇 IMPORTANT: text color for overlays
    textColor: "text-black",

    fullDescription:
      "Hephzi Shoes is a modern e-commerce platform focused on delivering a seamless footwear shopping experience with clean UI and scalable architecture.",

    techStack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    name: "VR Hobb",
    slug: "vr-hobb",
    coverImage: "/vrhobb.png",
    shortDescription: "An immersive VR experience hub",

    textColor: "text-white",

    fullDescription:
      "VR Hobb is an immersive platform designed to showcase and explore virtual reality experiences in a visually engaging way.",

    techStack: ["React", "Three.js", "WebXR"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    name: "ContentQ",
    slug: "contentq",
    coverImage: "/content.png",
    shortDescription: "A content management system for creators",

    textColor: "text-black",

    fullDescription:
      "ContentQ is a content management system designed to help creators manage and publish their content efficiently.",

    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://contentq.me/",
    githubUrl: "#",
  },
];

// Helper
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

import ProgressiveBlur from "../../components/techstack";

const technologies = [
  { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
  { name: "Python", icon: "/tech-icons/python.svg" },
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "Next.js", icon: "/tech-icons/nextdotjs.svg" },
  { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
  { name: "Node.js", icon: "/tech-icons/nodedotjs.svg" },
  { name: "Express.js", icon: "/tech-icons/express.svg" },
  { name: "Django", icon: "/tech-icons/django.svg" },
  { name: "FastAPI", icon: "/tech-icons/fastapi.svg" },
  { name: "MySQL", icon: "/tech-icons/mysql.svg" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  { name: "Supabase", icon: "/tech-icons/supabase.svg" },
  { name: "React Native", icon: "/tech-icons/react.svg" },
  { name: "Git", icon: "/tech-icons/git.svg" },
];

export default function RollingSkills() {
  return (
    <div className="w-[700px]">
      <div className="relative w-full overflow-hidden py-10">
        <ProgressiveBlur
          direction="horizontal"
          intensity="3xl"
          className="backdrop-blur-2xl"
        />

        <div className="rolling-track flex items-center gap-7 md:gap-15">
          {[...technologies, ...technologies].map((technology, index) => (
            <img
              key={`${technology.name}-${index}`}
              src={technology.icon}
              alt={technology.name}
              title={technology.name}
              loading="lazy"
              decoding="async"
              className="h-9 w-9 shrink-0 object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

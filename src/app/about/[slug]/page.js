import { notFound } from "next/navigation";
import Link from "next/link";
import GlassCard from "@/components/glassCard";
import { getProjectBySlug } from "@/app/data/data";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[750px] px-4 pb-24 pt-10">
      {/* Back */}
     

      {/* SINGLE FOCUSED CARD */}
      <GlassCard className="p-6">
        {/* Title */}
         <div className="mb-2">
        <Link
          href="/#projects"
          className="text-sm font-medium flex text-blue-400 hover:text-blue-300"
        >
          🡨  Back to Projects
        </Link>
      </div>
        <h1
          className={`text-[26px] font-semibold leading-tight ${project.textColor}`}
        >
          {project.name}
        </h1>

        {/* Description */}
        <p className="mt-3 text-[14px] leading-relaxed text-white/75">
          {project.fullDescription}
        </p>

        {/* Image */}
        <div className="my-6 overflow-hidden border border-blue-500/40">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full object-cover"
          />
        </div>

        {/* Tech stack */}
        {project.techStack?.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-2 text-[15px] font-semibold text-white">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="theme-panel border border-blue-500/40 px-3 py-1 text-[12px] text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div>
            <h2 className="mb-2 text-[15px] font-semibold text-white">
              Links
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-panel border border-blue-500 px-4 py-2 text-[13px] text-white"
                >
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-panel border border-blue-500 px-4 py-2 text-[13px] text-white"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        )}
      </GlassCard>
    </main>
  );
}

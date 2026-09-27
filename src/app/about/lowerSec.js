"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/data/data";

export default function LowerSec() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="w-full scroll-mt-24">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue-200/70">
            Selected builds / {String(projects.length).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Project archive</h3>
        </div>
        <p className="max-w-[340px] text-sm leading-relaxed text-white/50">
          Product tools, interactive experiments, and portfolio systems built across the full stack.
        </p>
      </div>

      <div className="mb-[100px] grid w-full grid-cols-1 gap-5 md:mb-[50px] md:grid-cols-2 xl:grid-cols-6">
        {projects.map((project, index) => {
          const featured = index < 2;

          return (
            <motion.article
              key={project.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.58, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 xl:col-span-3"
            >
              <Link
                href={`/about/${project.slug}`}
                className="project-card group flex h-full flex-col overflow-hidden border border-blue-500/45"
              >
                <div className={`project-card-image relative overflow-hidden border-b border-blue-500/35 ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <motion.img
                    src={project.coverImage}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top opacity-80"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
                    <span className="border border-blue-300/35 bg-black/20 px-2 py-1 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-3xl font-semibold leading-none text-white md:text-4xl">
                      {project.name}
                    </h4>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-blue-500/45 text-blue-200 transition-colors group-hover:bg-white/10 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="border border-blue-500/30 bg-white/[0.035] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white/55 backdrop-blur-md"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

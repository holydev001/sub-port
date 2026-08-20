"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/data/data";

export default function LowerSec() {
  return (
    <section id="projects" className="w-full scroll-mt-24">
      <h1 className="mb-6 w-full text-center text-[25px] font-semibold">
        Projects
      </h1>

      <div className="flex w-full flex-col gap-8 md:flex-row md:mb-[50px] mb-[100px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 38, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
          <Link href={`/about/${project.slug}`} className="block h-full">
            <motion.div
              className="relative h-full min-h-[280px] cursor-pointer overflow-hidden border-2 border-blue-500 backdrop-blur-[3px]"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              {/* Project Image */}
              <motion.img
                src={project.coverImage}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
                variants={{
                  rest: { scale: 1, opacity: 0.42 },
                  hover: { scale: 1.025, opacity: 0.85 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay */}
              <motion.div
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="theme-panel-strong absolute inset-x-0 bottom-0 flex min-h-[48%] flex-col items-center justify-start border-t-2 border-blue-400 px-4 pt-[10px] text-center backdrop-blur-md"
              >
                <h3
                  className={`text-[30px] font-semibold ${project.textColor}`}
                >
                  {project.name}
                </h3>

                <p className={`mt-2 ${project.textColor}`}>
                  {project.shortDescription}
                </p>
              </motion.div>
            </motion.div>
          </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

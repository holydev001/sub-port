import GlassCard from "@/components/glassCard";
import Techstack from "./techstackroll";
import Image from "next/image";

export default function UpperSec() {
  return (
    <div className="relative flex w-full flex-col gap-8 lg:flex-row">
      {/* LEFT COLUMN */}
      <div className="relative flex w-full flex-1 flex-col gap-8">
        {/* ABOUT — now grows and contains bio */}
        <GlassCard className="relative flex flex-1 flex-col gap-4 p-[14px]">
          {/* Header */}
          <div className="bdbg item1 flex items-center gap-4 px-[20px] py-[12px]">
            <Image
              width={90}
              height={90}
              src="/pfp.webp"
              alt="Profile picture"
              loading="lazy"
              decoding="async"
              className="theme-tint h-[90px] w-[90px] border-[2px] border-blue-500"
            />

            <a
              href="https://drive.google.com/file/d/10fGkRdGm-2iDLL9nR2aYa3JiUtPm4hOV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-tint flex h-[40px] items-center border-[2px] border-blue-500 px-[14px]"
            >
              <span className="text-[18px] font-bold">Resume</span>
            </a>
          </div>

          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-3">
            <div className="theme-panel border border-blue-500/40 p-[12px]">
              <p className="text-[14px] leading-relaxed text-white/80">
                I’m a full-stack developer with a strong focus on building
                clean, scalable, and user-friendly web applications. I enjoy
                turning complex ideas into practical digital solutions and
                continuously improving my craft through hands-on projects and
                learning.
              </p>
            </div>

            <div className="theme-panel border border-blue-500/40 p-[12px]">
              <p className="text-[14px] leading-relaxed text-white/80">
                My experience spans frontend and backend development, with a
                growing interest in system design, performance optimization, and
                developer experience.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* TECH STACK — compact again */}

        <GlassCard className="relative">
          <h1 className="w-[100%] absolute mt-[5px] text-center font-semibold text-[15px]">
            {" "}
            Techstack
          </h1>
          <Techstack className="w-full" />
        </GlassCard>
      </div>

      {/* RIGHT COLUMN — CERTIFICATIONS */}
      <GlassCard className="flex w-full flex-1 flex-col p-[16px]">
        <h2 className="mb-4 text-[22px] font-semibold tracking-wide">
          Certifications
        </h2>

        <div className="flex flex-col gap-3">
          <div className="theme-panel border border-blue-500/40 p-[12px]">
            <p className="text-[15px] font-medium">Project Management</p>
            <span className="text-[13px] text-white/60">
              Joint Professional Training and Support
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/10fGkRdGm-2iDLL9nR2aYa3JiUtPm4hOV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-panel border border-blue-500/40 p-[12px] transition"
          >
            <p className="text-[15px] font-medium group-hover:underline">
              Introduction to Programming
            </p>
            <span className="text-[13px] text-white/60">Suacode</span>
          </a>

          <div className="theme-panel border border-blue-500/40 p-[12px]">
            <p className="text-[15px] font-medium">
              Foundations of Web Development
            </p>
            <span className="text-[13px] text-white/60">Udemy</span>
          </div>

          <div className="theme-panel border border-blue-500/40 p-[12px]">
            <p className="text-[15px] font-medium">
              Full Stack Web Development
            </p>
            <span className="text-[13px] text-white/60">Udemy</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

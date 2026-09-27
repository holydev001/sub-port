import GlassCard from "@/components/glassCard";
import Techstack from "./techstackroll";
import Image from "next/image";
import { experience } from "@/app/data/data";

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
              href="/holydev.pdf"
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
                I&apos;m a full-stack developer based in Nigeria with 3+ years
                building modern web applications from end to end. I work
                across JavaScript, TypeScript, React, Next.js, and Node.js.
              </p>
            </div>

            <div className="theme-panel border border-blue-500/40 p-[12px]">
              <p className="text-[14px] leading-relaxed text-white/80">
                I focus on clean architecture, predictable APIs, performance,
                and interfaces that respect the user&apos;s time. I currently shape
                admin analytics and data visualization tools at Emerj LLC.
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

      {/* RIGHT COLUMN — EXPERIENCE */}
      <GlassCard className="flex w-full flex-1 flex-col p-[16px]">
        <h2 className="mb-4 text-[22px] font-semibold tracking-wide">
          Experience
        </h2>

        <div className="flex flex-col gap-3">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="theme-panel border border-blue-500/40 p-[12px]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[15px] font-medium">{item.role}</p>
                  <span className="text-[13px] text-blue-200">{item.company}</span>
                </div>
                <span className="font-mono text-[11px] text-white/50">{item.period}</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">{item.summary}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

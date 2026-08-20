"use client";

import Image from "next/image";

import figma from "../../../public/figma.svg";
import git from "../../../public/git.png";
import tailwindcss from "../../../public/tailwindcss.svg";
import bootstrap from "../../../public/bootstrap.svg";
import css from "../../../public/css.svg";
import html5 from "../../../public/html5.svg";
import react from "../../../public/react.svg";
import javascript from "../../../public/javascript.svg";

import ProgressiveBlur from "../../components/techstack";

export default function RollingIcons() {
  const icons = [
    { src: figma, alt: "Figma" },
    { src: git, alt: "Git" },
    { src: tailwindcss, alt: "Tailwind CSS" },
    { src: css, alt: "CSS" },
    { src: html5, alt: "HTML5" },
    { src: react, alt: "React" },
    { src: javascript, alt: "JavaScript" },
    { src: bootstrap, alt: "Bootstrap" },
  ];

  return (
    <div className=" w-[700px]  ">
      <div className="relative w-full overflow-hidden py-10">
        {/* Glassy blur edges */}
        <ProgressiveBlur
          direction="horizontal"
          intensity="3xl"
          className="backdrop-blur-2xl"
        />

        {/* Scrolling container */}
        <div className="rolling-track flex items-center gap-7 md:gap-15">
          {[...icons, ...icons, ...icons, ...icons].map((icon, i) => (
            <Image
              key={i}
              src={icon.src}
              alt={icon.alt}
              className="w-[35px] h-[35px] object-contain opacity-90 hover:opacity-100 transition duration-300 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

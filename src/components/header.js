"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="z-40 flex w-full items-center justify-between p-5 md:px-[70px] md:py-[30px]"
    >
      {/*<img
        src="/log.png"
        alt="David Adams Logo"
        loading="eager"
        decoding="async"
        className="md:h-[70px] h-[40px] z-50"
      />*/}
      <h1 className="text-white text-[25px] font-bold"> holy.dev </h1>

      <div className="flex items-center gap-2 md:gap-3">
        <ThemeSwitcher />
        <a href="#contact" className="action-link header-contact z-30 text-sm md:text-base">
          Contact Me
        </a>
      </div>
    </motion.header>
  );
}

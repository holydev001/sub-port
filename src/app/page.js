"use client";

import Header from "../components/header";
import TypingLoop from "../components/typingLoop";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import UpperSec from "./about/upperSec";
import LowerSec from "./about/lowerSec";
import ContactPage from "./contactPage/page";
import Reveal from "../components/Reveal";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const icons = useMemo(
    () => [
      {
        src: "/x.png",
        alt: "twitter",
        link: "https://x.com/holydev0001",
      },
      {
        src: "/github.png",
        alt: "github",
        link: "https://github.com/holydev001",
      },
      {
        src: "/linked-in.png",
        alt: "linkedin",
        link: "https://www.linkedin.com/in/david-adams-b0228835b/",
      },
    ],
    [],
  );

  return (
    <main className="overflow-x-hidden">
      <section id="home" className="flex min-h-screen scroll-mt-6 flex-col">
        <Header />
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="mb-24 flex items-center justify-center px-7 md:px-24">
            <div className="hero-intro flex max-w-[760px] flex-col items-center">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-blue-300">
                David Adams — Full-stack developer
              </p>
              <h1 className="glowing-text text-center text-[52px] font-bold leading-[0.9] text-white md:text-[88px]">
                Building digital
                <br />
                products that work.
              </h1>
              <TypingLoop
                words={[
                  "Frontend engineering",
                  "Backend development",
                  "Responsive interfaces",
                  "Scalable web applications",
                ]}
                typingSpeed={72}
                eraseSpeed={36}
                delayBetween={1600}
                className="mt-6 min-h-7 text-lg text-blue-200"
              />
              <p className="mt-5 max-w-[620px] text-center text-[16px] leading-relaxed text-white/65 md:text-[18px]">
                I turn ideas into fast, accessible, and dependable web
                experiences—from polished interfaces to the systems behind them.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <a className="action-link" href="#projects">View projects</a>
                <a className="action-link action-link-secondary" href="#contact">
                  Start a conversation
                </a>
              </div>
              <div className="mt-7 flex justify-center gap-5">
                {icons.map((icon) => (
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={icon.alt}
                    href={icon.link}
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    <img src={icon.src} alt={icon.alt} className="h-7 w-7" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="page-section scroll-mt-10">
        <Reveal className="section-heading">
          <span>01</span>
          <div>
            <p>Profile</p>
            <h2>About & expertise</h2>
          </div>
        </Reveal>
        <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-3">
          <Reveal><UpperSec /></Reveal>
          <Reveal delay={0.08}><LowerSec /></Reveal>
        </div>
      </section>

      <ContactPage />
    </main>
  );
}

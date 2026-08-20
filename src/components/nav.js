"use client";

import { motion, useReducedMotion } from "framer-motion";
import { House, Mail, Briefcase } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function Nav() {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("home");
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", icon: House },
      { id: "about", label: "Work", icon: Briefcase },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    [],
  );

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="flex justify-center">
      <motion.div
        initial={prefersReducedMotion ? false : { y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mobile-nav-shell fixed z-50 w-[calc(100%-56px)] max-w-[340px]"
      >
        <nav
          aria-label="Page sections"
          className="theme-nav flex w-full items-stretch justify-between border p-1.5 backdrop-blur-md"
        >
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "location" : undefined}
                className={`nav-item relative flex min-h-12 flex-1 items-center justify-center border px-2 py-2 transition-colors ${
                  isActive
                    ? "theme-nav-active text-white"
                    : "border-transparent text-white/55 hover:text-white"
                }`}
              >
                <motion.span
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </motion.span>
                <span className="sr-only">{label}</span>
              </a>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Radio,
  Twitter,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const directChannels = [
  {
    index: "01",
    label: "Email",
    value: "davebenaaa@gmail.com",
    href: "mailto:davebenaaa@gmail.com",
    icon: Mail,
  },
  {
    index: "02",
    label: "Phone / WhatsApp",
    value: "+234 911 4576 734",
    href: "https://wa.me/2349114576734",
    icon: MessageCircle,
    target: "_blank",
  },
];

const socialChannels = [
  {
    label: "GitHub",
    handle: "holydev001",
    href: "https://github.com/holydev001",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "David Adams",
    href: "https://www.linkedin.com/in/david-adams-b0228835b/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    handle: "@holydev0001",
    href: "https://x.com/holydev0001",
    icon: Twitter,
  },
];

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="page-section scroll-mt-10 pb-36">
      <Reveal className="section-heading">
        <span>02</span>
        <div>
          <p>Contact</p>
          <h2>Open a channel.</h2>
        </div>
      </Reveal>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.12 }}
        className="contact-command mx-auto w-full max-w-[1100px] overflow-hidden border border-blue-500/60"
      >
        <div className="contact-command-header flex flex-wrap items-center justify-between gap-4 border-b border-blue-500/40 px-5 py-4 md:px-7">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-blue-200">
            <Radio className="h-4 w-4" />
            <span>Communications console</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
            <span className="contact-status-dot h-2 w-2 bg-green-400" />
            Available for remote work
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-[360px] flex-col justify-between border-b border-blue-500/40 p-6 md:p-9 lg:border-b-0 lg:border-r">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-blue-200">
                Establish connection
              </p>
              <h3 className="mt-5 max-w-[460px] text-5xl font-semibold leading-[0.9] text-white md:text-6xl">
                Let&apos;s build something that works.
              </h3>
              <p className="mt-6 max-w-[430px] text-base leading-relaxed text-white/60">
                Have a product to ship, an interface to refine, or a system that
                needs a dependable engineer? Choose a channel and say hello.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px border border-blue-500/35 bg-blue-500/35">
              <div className="bg-white/[0.035] p-4 backdrop-blur-2xl">
                <MapPin className="mb-3 h-4 w-4 text-blue-300" />
                <span className="block font-mono text-[10px] uppercase tracking-widest text-white/45">Base</span>
                <strong className="mt-1 block text-sm font-medium text-white">Nigeria</strong>
              </div>
              <div className="bg-white/[0.035] p-4 backdrop-blur-2xl">
                <Clock3 className="mb-3 h-4 w-4 text-blue-300" />
                <span className="block font-mono text-[10px] uppercase tracking-widest text-white/45">Time zone</span>
                <strong className="mt-1 block text-sm font-medium text-white">WAT · UTC+1</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 md:p-6">
            <div className="space-y-3">
              {directChannels.map(({ index, label, value, href, icon: Icon, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.18 }}
                  className="contact-primary-action group grid min-h-[116px] grid-cols-[auto_1fr_auto] items-center gap-4 border border-blue-500/45 p-5 md:gap-6 md:p-6"
                >
                  <span className="font-mono text-[10px] text-blue-200/70">{index}</span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{label}</span>
                    <span className="mt-2 block break-all text-xl font-medium text-white md:text-3xl">{value}</span>
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center border border-blue-500/50 text-blue-200 transition-colors group-hover:bg-blue-500/25 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 border-t border-blue-500/35 pt-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                External nodes
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {socialChannels.map(({ label, handle, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="contact-social-node group flex min-h-[112px] flex-col justify-between border border-blue-500/40 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <Icon className="h-5 w-5 text-blue-200" />
                      <ArrowUpRight className="h-4 w-4 text-white/35 transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-white">{label}</span>
                      <span className="mt-1 block truncate font-mono text-[10px] text-white/45">{handle}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const icons = useMemo(() => [
    {
      src: "/x.png",
      alt: "Twitter",
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
  ], []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);
    setError(null);

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      setError("Please complete every field before sending.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSuccess("Thank you! I'll get back to you soon!");
      form.reset();
    } catch (err) {
      console.error(err);
      setError("There was a connection problem. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="page-section scroll-mt-10 pb-36">
      <Reveal className="section-heading">
        <span>02</span>
        <div>
          <p>Contact</p>
          <h2>Let&apos;s build something.</h2>
        </div>
      </Reveal>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-12 md:flex-row md:items-center md:justify-between"
      >
        {/* LEFT COPY */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:w-[40%]">
          <p className="text-[18px] text-white ">Get in touch</p>

          <h1 className="mt-1 text-[28px] leading-tight md:text-[42px]">
            Let&apos;s work together
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Have a project in mind or just want to say hello? <br />
            I&apos;m always open to discussing new opportunities, collaborations, or
            simply sharing ideas.
          </p>
        </div>

        {/* FORM */}
        <form
          className="contact-glow flex w-full flex-col gap-4 pb-6 md:w-[55%]"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="name"
            required
            className="contact-input"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            className="contact-input min-h-[120px] resize-none"
          />

          {/* FEEDBACK */}
          {success && <p className="text-green-400 text-[16px] font-semibold">{success}</p>}
          {error && <p className="text-red-400 text-[16px] font-semibold">{error}</p>}

          {/* ACTIONS */}
          <div className="mt-4 flex flex-col items-center gap-5">
            <button
              type="submit"
              disabled={loading}
              className="flex w-[200px] items-center justify-center border-2 border-blue-500 bg-[rgba(255,255,255,0.1)] px-5 py-2 text-[15px] backdrop-blur-[3px] transition hover:bg-[rgba(255,255,255,0.15)] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {icons.map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.16 }}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-[32px] w-[32px]"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

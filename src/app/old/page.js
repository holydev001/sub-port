"use client";

import Header from "../../components/header";
import TypingLoop from "../../components/typingLoop";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const icons = useMemo(
    () => [
      { src: "/x(twitter).png", alt: "twitter", link: "https://x.com" },
      { src: "/github.svg", alt: "github", link: "https://x.com" },
      { src: "/linked in.png", alt: "linkedin", link: "https://x.com" },
    ],
    []
  );

  return (
    <>
      <Header />

      <div className="flex justify-center items-center md:h-[70vh] ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-[100px] px-[30px] mb-[100px]">

          {/* LEFT CONTENT */}
          <div className="md:w-[50%] flex flex-col items-center md:items-start">
            <h1 className="md:text-[42px] text-[25px] glowing-text text-[#ffffff80]">
              Hello
            </h1>

            <h2 className="md:text-[35px] text-[20px] text-white">
              I am David Adams
            </h2>

            <h1 className="md:text-[42px] text-[25px] glowing-text text-[#ffffffa2]">
              A Fullstack Developer
            </h1>

            <TypingLoop
              words={[
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
              ]}
              typingSpeed={100}
              eraseSpeed={50}
              delayBetween={1200}
              className="text-xl glowing-text text-blue-200"
            />

            <p className=" text-[18px] text-center md:text-left font-normal text-[rgba(255,255,255,0.51)]">
              Bringing your digital ideas to life with innovative design and
              seamless development. I specialize in creating responsive,
              user-friendly websites that not only look great but perform
              flawlessly. Explore my portfolio to see how I can help transform
              your vision into a captivating online experience.
            </p>

            {/* ICONS */}
            <div className="flex mt-[20px] justify-center md:justify-start md:w-[200px]">
              {icons.map((icon) => (
                <motion.a
                  key={icon.alt}
                  href={icon.link}
                  whileHover={!prefersReducedMotion ? { scale: 1.25 } : {}}
                  transition={{ duration: 0.25 }}
                  className="mx-[20px] md:mx-0 md:mr-[20px]"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[35px] w-[35px]"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={prefersReducedMotion ? false : { x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, -6, 0] }
              }
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden bg-[rgba(3,150,255,0.3)] border-4 border-blue-500"
            >
              <img
                src="/variant2.png"
                alt="David Adams"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

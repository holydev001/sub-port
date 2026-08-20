"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingLoop({
  words = [],
  typingSpeed = 100,
  eraseSpeed = 50,
  delayBetween = 1500,
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting && text.length < currentWord.length) {
      // typing forward
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && text.length > 0) {
      // deleting backward
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        eraseSpeed
      );
    } else if (!isDeleting && text.length === currentWord.length) {
      // pause at end before erasing
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && text.length === 0) {
      // move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    eraseSpeed,
    delayBetween,
    prefersReducedMotion,
  ]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`font-medium ${className}`}
    >
      {prefersReducedMotion ? words[0] : text}
      <motion.span
        animate={prefersReducedMotion ? undefined : { opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 bg-white ml-1 align-middle"
      />
    </motion.span>
  );
}

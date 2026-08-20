"use client";

import FloatingCircles from "./FloatingCircles";
import BackgroundGrid from "./gridone";
import GridTwo from "./GridTwo";

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Gradient base layer */}
      <div className="theme-background absolute inset-0 w-[150%]" />

      {/* Animated layers */}
      <FloatingCircles />
      <GridTwo />
    </div>
  );
}

"use client";

import FloatingCircles from "./FloatingCircles";
import GridTwo from "./GridTwo";

export default function Background() {
  return (
    <div
      className="fixed -inset-y-24 inset-x-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Gradient base layer */}
      <div className="theme-background absolute inset-0 w-[150%]" />

      {/* Animated layers */}
      <FloatingCircles />
      <GridTwo />
    </div>
  );
}

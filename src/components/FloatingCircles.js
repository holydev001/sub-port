"use client";

export default function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glowing blurry circles (GPU optimized) */}
      <div
        className="absolute top-1/2 left-20 w-80 h-72 bg-blue-500/35 blur-[120px]"
      />

      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/35 blur-[150px]"
      />

      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/30 blur-[100px]"
      />

      {/* Floating outlined circles (transform-only animation) */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 border border-blue-500 animate-float-slow" />

      <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-blue-500 animate-float-medium" />

      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 border border-blue-500 animate-float-fast" />

      <div className="absolute top-10 right-20 w-16 h-16 border border-blue-500 animate-float-xslow" />
    </div>
  );
}

import { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [glows, setGlows] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlows((g) => {
        const newGlow = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          id: Date.now(),
        };
        return [...g.slice(-9), newGlow];
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Build mask only if glows exist
  const maskImage =
    glows.length > 0
      ? glows
          .map(
            (g) =>
              `radial-gradient(circle 80px at ${g.x}% ${g.y}%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)`
          )
          .join(", ")
      : null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.0) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.0) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }}
    >
      {maskImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgb(var(--accent) / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--accent) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage,
            WebkitMaskImage: maskImage,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            pointerEvents: "none",
            transition: "mask-position 0.15s ease",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

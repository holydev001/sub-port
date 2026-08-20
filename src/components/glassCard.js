// components/GlassCard.jsx
export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative isolate overflow-hidden border-2 border-blue-500 shadow-md ${className}`}
    >
      {/* single backdrop layer (absolute) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          backdropFilter: "blur(5px) saturate(120%)",
          WebkitBackdropFilter: "blur(5px) saturate(120%)",
        }}
      />
      {/* content goes on top */}
      <div className="relative ">{children}</div>
    </div>
  );
}

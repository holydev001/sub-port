"use client";

import { Check, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const themes = [
  { id: "blue", label: "Electric blue", color: "#3b82f6" },
  { id: "green", label: "Emerald", color: "#22c55e" },
  { id: "red", label: "Signal red", color: "#ef4444" },
  { id: "graphite", label: "Graphite", color: "#9ca3af" },
  { id: "gold", label: "Lightning gold", color: "#facc15" },
  { id: "purple", label: "Ultraviolet", color: "#a855f7" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("blue");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const initial = themes.some(({ id }) => id === saved) ? saved : "blue";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  useEffect(() => {
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  const selectTheme = (id) => {
    document.documentElement.dataset.theme = id;
    localStorage.setItem("portfolio-theme", id);
    setTheme(id);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative z-50">
      <button
        type="button"
        aria-label="Choose color theme"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="theme-trigger"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Theme</span>
        <span
          className="h-3 w-3 border border-white/70"
          style={{ backgroundColor: themes.find(({ id }) => id === theme)?.color }}
        />
      </button>

      {open && (
        <div className="theme-menu" role="menu" aria-label="Color themes">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Interface color
          </p>
          {themes.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === item.id}
              onClick={() => selectTheme(item.id)}
              className="theme-option"
            >
              <span className="h-4 w-4 border border-white/40" style={{ backgroundColor: item.color }} />
              <span>{item.label}</span>
              {theme === item.id && <Check className="ml-auto h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

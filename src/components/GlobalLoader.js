"use client";

import { useEffect, useState, useRef } from "react";

export default function GlobalLoader({ children }) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const originalOverflow = useRef("");

  // 1️⃣ Mark when we are on the client (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2️⃣ Loader logic (client-only)
  useEffect(() => {
    if (!mounted) return;

    // Lock scroll
    originalOverflow.current = document.body.style.overflow || "";
    document.body.style.overflow = "hidden";

    // Keep the transition brief so content is available quickly.
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 450);

    // Page fully loaded
    const handleLoad = () => setReady(true);

    if (document.readyState === "complete") {
      setReady(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [mounted]);

  const showLoader = mounted && !(ready && minTimePassed);

  // 3️⃣ Restore scroll when loader is gone
  useEffect(() => {
    if (mounted && !showLoader) {
      document.body.style.overflow = originalOverflow.current || "auto";
    }
  }, [showLoader, mounted]);

  // ❗ Render nothing until mounted (no flash, no hydration error)
  if (!mounted) {
    return null;
  }

  // Loader view
  if (showLoader) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgb(var(--surface-deep))]">
        <LoaderVisual />
      </div>
    );
  }

  // Page content (no animation)
  return <>{children}</>;
}

function LoaderVisual() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-2 border-blue-500/30" />
        <div className="absolute inset-0 border-t-2 border-blue-500 animate-spin" />
      </div>

      <p className="text-blue-400 text-sm tracking-widest animate-pulse">
        LOADING
      </p>
    </div>
  );
}

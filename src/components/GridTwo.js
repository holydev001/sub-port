"use client";
import { useRef, useEffect } from "react";

export default function GridTwo({
  gridSize = 48,
  baseLineColor = "rgba(255,255,255,0.04)",
  pulseColors = ["rgba(59,150,246)", "rgba(59,130,246)"],
  maxPulses = 10,
  spawnInterval = 250,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pulsesRef = useRef([]);
  const lastSpawnRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0, cols: 0, rows: 0 });
  const pausedRef = useRef(false);
  const themeColorsRef = useRef(pulseColors);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const updateThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const pulse = styles.getPropertyValue("--pulse-a").trim().replaceAll(" ", ",");
      const accent = styles.getPropertyValue("--accent").trim().replaceAll(" ", ",");
      const colors = [`rgba(${pulse},1)`, `rgba(${accent},1)`];
      themeColorsRef.current = colors;
      pulsesRef.current.forEach((item, index) => {
        item.color = colors[index % colors.length];
      });
    };
    updateThemeColors();
    const themeObserver = new MutationObserver(updateThemeColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    function resize() {
      const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(window.innerWidth);
      const h = Math.floor(window.innerHeight);

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      sizeRef.current.w = w;
      sizeRef.current.h = h;
      sizeRef.current.cols = Math.floor(w / gridSize);
      sizeRef.current.rows = Math.floor(h / gridSize);
    }

    function spawnPulse() {
      const { cols, rows } = sizeRef.current;
      if (cols < 1 || rows < 1) return;

      const ix = Math.floor(Math.random() * (cols + 1));
      const iy = Math.floor(Math.random() * (rows + 1));

      const dirs = [];
      if (ix < cols) dirs.push(0);
      if (iy < rows) dirs.push(1);
      if (ix > 0) dirs.push(2);
      if (iy > 0) dirs.push(3);
      if (!dirs.length) return;

      pulsesRef.current.push({
        ix,
        iy,
        dir: dirs[Math.floor(Math.random() * dirs.length)],
        offset: Math.random() * gridSize * 0.4,
        speed: 40 + Math.random() * 5,
        color:
          themeColorsRef.current[
            Math.floor(Math.random() * themeColorsRef.current.length)
          ],
        thickness: 2,
      });

      if (pulsesRef.current.length > maxPulses) {
        pulsesRef.current.splice(0, pulsesRef.current.length - maxPulses);
      }
    }

    function chooseNextDir(pulse) {
      const { cols, rows } = sizeRef.current;
      const possible = [];
      if (pulse.ix < cols) possible.push(0);
      if (pulse.iy < rows) possible.push(1);
      if (pulse.ix > 0) possible.push(2);
      if (pulse.iy > 0) possible.push(3);

      const reverse = (pulse.dir + 2) % 4;
      const pool = possible.filter((d) => d !== reverse);
      pulse.dir = (pool.length ? pool : possible)[
        Math.floor(Math.random() * (pool.length || possible.length))
      ];
    }

    function updateAndDraw(dt) {
      const { w, h, cols, rows } = sizeRef.current;

      ctx.clearRect(0, 0, w, h);

      // grid (unchanged)
      ctx.strokeStyle = baseLineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();

      ctx.globalCompositeOperation = "lighter";

      for (let i = pulsesRef.current.length - 1; i >= 0; i--) {
        const p = pulsesRef.current[i];
        p.offset += p.speed * dt;

        while (p.offset >= gridSize) {
          p.offset -= gridSize;

          if (p.dir === 0) p.ix++;
          else if (p.dir === 1) p.iy++;
          else if (p.dir === 2) p.ix--;
          else p.iy--;

          if (p.ix < 0 || p.iy < 0 || p.ix > cols || p.iy > rows) {
            pulsesRef.current.splice(i, 1);
            break;
          }
          chooseNextDir(p);
        }

        if (!p) continue;

        const dirVec = [
          [1, 0],
          [0, 1],
          [-1, 0],
          [0, -1],
        ][p.dir];

        const px = p.ix * gridSize + dirVec[0] * p.offset;
        const py = p.iy * gridSize + dirVec[1] * p.offset;

        const tailLen = Math.min(60, p.offset + 20);

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(Math.atan2(dirVec[1], dirVec[0]));

        const grad = ctx.createLinearGradient(-tailLen, 0, 0, 0);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(1, p.color);

        ctx.fillStyle = grad;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(-tailLen, -p.thickness / 2, tailLen, p.thickness);
        ctx.restore();
      }

      ctx.globalCompositeOperation = "source-over";
    }

    let lastTime = performance.now();
    let lastDrawTime = 0;
    function frame(t) {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      if (t - lastDrawTime < 33) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }
      lastDrawTime = t;
      const dt = Math.min(0.05, (t - lastTime) / 1000);
      lastTime = t;

      if (t - lastSpawnRef.current > spawnInterval) {
        lastSpawnRef.current = t;
        if (pulsesRef.current.length < maxPulses) spawnPulse();
      }

      updateAndDraw(dt);
      rafRef.current = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    const handleVisibilityChange = () => {
      pausedRef.current = document.hidden;
      lastTime = performance.now();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      themeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [gridSize, baseLineColor, pulseColors, maxPulses, spawnInterval]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

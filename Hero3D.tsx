"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers, Cpu, Server, Activity, Workflow } from "lucide-react";

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 140, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);

  useEffect(() => {
    let cachedRect: DOMRect | null = null;

    const updateRect = () => {
      if (containerRef.current) {
        cachedRect = containerRef.current.getBoundingClientRect();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!cachedRect) updateRect();
      if (!cachedRect) return;
      const x = (e.clientX - cachedRect.left) / cachedRect.width - 0.5;
      const y = (e.clientY - cachedRect.top) / cachedRect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      updateRect();
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("resize", updateRect, { passive: true });
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateRect);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  // 3D Canvas Particle Field & Orbiting Ring Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let width = (canvas.width = 560);
    let height = (canvas.height = 460);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      angle: number;
      speed: number;
      orbitRadius: number;
      color: string;
    }> = [];

    // Colors derived from Yacht Club theme
    const colors = ["rgba(36, 95, 115, 0.75)", "rgba(115, 62, 36, 0.75)", "rgba(187, 189, 188, 0.6)"];

    for (let i = 0; i < 28; i++) {
      particles.push({
        x: 0,
        y: 0,
        z: Math.random() * 160 - 80,
        radius: Math.random() * 2.2 + 1,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius: Math.random() * 120 + 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let wireframeRotation = 0;

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      wireframeRotation += 0.006;

      // Draw 3D Orbiting Wireframe Rings centered on emblem
      for (let ring = 1; ring <= 3; ring++) {
        const ringRadius = ring * 55;
        ctx.save();
        ctx.beginPath();
        ctx.translate(centerX, centerY);
        ctx.rotate(wireframeRotation * (ring % 2 === 0 ? 1 : -1) + ring);
        ctx.scale(1, 0.42);
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle =
          ring === 1
            ? "rgba(36, 95, 115, 0.45)"
            : ring === 2
              ? "rgba(115, 62, 36, 0.4)"
              : "rgba(187, 189, 188, 0.35)";
        ctx.lineWidth = 1.6;
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.restore();
      }

      // Pre-calculate positions
      const coords = particles.map((p) => {
        p.angle += p.speed;
        const pX = centerX + Math.cos(p.angle) * p.orbitRadius;
        const pY = centerY + Math.sin(p.angle) * (p.orbitRadius * 0.42) + p.z * 0.18;
        const scale = (p.z + 160) / 240;
        const alpha = Math.min(1, Math.max(0.35, scale));
        return { p, pX, pY, scale, alpha };
      });

      // Draw floating orbital particles
      coords.forEach(({ p, pX, pY, scale, alpha }) => {
        ctx.beginPath();
        ctx.arc(pX, pY, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      });

      // Connect nearby particles with 3D laser lines (j = i + 1 single pass)
      ctx.strokeStyle = "rgba(36, 95, 115, 0.28)";
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      for (let i = 0; i < coords.length; i++) {
        const { pX, pY } = coords[i];
        for (let j = i + 1; j < coords.length; j++) {
          const { pX: p2X, pY: p2Y } = coords[j];
          const dx = pX - p2X;
          const dy = pY - p2Y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 3600) { // 60 * 60
            ctx.moveTo(pX, pY);
            ctx.lineTo(p2X, p2Y);
          }
        }
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    // Use IntersectionObserver to pause rendering when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !isVisible) {
          isVisible = true;
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else if (!nowVisible) {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const nodes = [
    {
      title: "Strategy",
      sub: "Business Alignment",
      icon: Cpu,
      pos: "top-2 left-0",
      z: 45,
      delay: 0.1,
      glow: "border-accent/40 hover:border-accent hover:shadow-accent/20",
    },
    {
      title: "Planning",
      sub: "Project Roadmap",
      icon: Server,
      pos: "top-2 right-0",
      z: 35,
      delay: 0.25,
      glow: "border-accent-purple/40 hover:border-accent-purple hover:shadow-accent-purple/20",
    },
    {
      title: "Execution",
      sub: "Deployment & Go-Live",
      icon: Workflow,
      pos: "bottom-2 left-0",
      z: 40,
      delay: 0.4,
      glow: "border-good/40 hover:border-good hover:shadow-good/20",
    },
    {
      title: "Adoption",
      sub: "Training & Support",
      icon: Activity,
      pos: "bottom-2 right-0",
      z: 50,
      delay: 0.55,
      glow: "border-accent/40 hover:border-accent hover:shadow-accent/20",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-[560px] h-[460px] mx-auto flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Interactive 3D Parallax Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center transform-style-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background 3D Canvas Ray & Particle Orbit Ring */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0"
          style={{ transform: "translateZ(-40px)" }}
        />

        {/* Ambient Radial Glow */}
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-radial from-accent/15 via-accent-purple/10 to-transparent blur-3xl pointer-events-none"
          style={{ transform: "translateZ(-60px)" }}
        />

        {/* Connecting SVG Laser Lines from 4 Corners to Center Core */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 560 460"
          fill="none"
          style={{ transform: "translateZ(10px)" }}
        >
          {/* Top-Left to Center */}
          <line x1="200" y1="55" x2="235" y2="190" stroke="rgba(36, 95, 115, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Top-Right to Center */}
          <line x1="360" y1="55" x2="325" y2="190" stroke="rgba(115, 62, 36, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Bottom-Left to Center */}
          <line x1="200" y1="405" x2="235" y2="270" stroke="rgba(115, 62, 36, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Bottom-Right to Center */}
          <line x1="360" y1="405" x2="325" y2="270" stroke="rgba(36, 95, 115, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* 4 Distinct Quadrant 3D Enterprise Badges (NO OVERLAP GUARANTEED) */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.title}
              className={`absolute ${node.pos} z-20`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: node.delay }}
              style={{ transform: `translateZ(${node.z}px)` }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className={`glass-panel rounded-2xl px-4 py-3 border ${node.glow} shadow-xl backdrop-blur-xl transition-all duration-300 group flex items-center gap-3.5 w-[235px]`}
              >
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs text-text whitespace-nowrap group-hover:text-accent transition-colors">
                    {node.title}
                  </div>
                  <div className="text-[10px] text-text-faint whitespace-nowrap mt-0.5">{node.sub}</div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Perfectly Centered 3D Core Emblem */}
        <motion.div
          className="relative z-30 w-32 h-32 rounded-3xl glass-panel border border-accent/40 flex flex-col items-center justify-center shadow-2xl shadow-accent/15 group"
          style={{ transform: "translateZ(85px)" }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent-purple/15 opacity-60 group-hover:opacity-100 transition-opacity" />
          <Layers className="text-accent mb-1 group-hover:scale-110 transition-transform" size={28} />
          <span className="font-display font-extrabold text-xl text-gradient-cyan">ERP</span>
          <span className="font-mono text-[9px] text-text-dim uppercase tracking-wider">Implementation</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

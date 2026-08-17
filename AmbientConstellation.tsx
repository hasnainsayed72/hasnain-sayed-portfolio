"use client";

import { useEffect, useRef } from "react";

interface AmbientConstellationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "split" | "random-corners" | "top-right-bottom-left";
  className?: string;
}

export function AmbientConstellation({
  position = "split",
  className = "",
}: AmbientConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isVisible = false;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Determine cluster centers based on position prop
    const getCenters = () => {
      switch (position) {
        case "top-left":
          return [{ x: 180, y: 160 }];
        case "top-right":
          return [{ x: width - 180, y: 160 }];
        case "bottom-left":
          return [{ x: 180, y: height - 160 }];
        case "bottom-right":
          return [{ x: width - 180, y: height - 160 }];
        case "top-right-bottom-left":
          return [
            { x: width - 180, y: 160 },
            { x: 180, y: height - 160 },
          ];
        case "random-corners":
          return [
            { x: 160, y: 140 },
            { x: width - 160, y: height - 140 },
          ];
        case "split":
        default:
          return [
            { x: 140, y: 150 },
            { x: width - 140, y: height > 350 ? height - 150 : 150 },
          ];
      }
    };

    // Colors matching Yacht Club & Hero3D theme
    const colors = [
      "rgba(36, 95, 115, 0.85)",
      "rgba(115, 62, 36, 0.85)",
      "rgba(36, 95, 115, 0.65)",
    ];

    // Create particle structure for each cluster (optimized 24 particles)
    const clusters = getCenters().map((center) => {
      const particles: Array<{
        z: number;
        radius: number;
        angle: number;
        speed: number;
        orbitRadius: number;
        color: string;
      }> = [];

      for (let i = 0; i < 24; i++) {
        particles.push({
          z: Math.random() * 200 - 100,
          radius: Math.random() * 2.8 + 1.2,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          orbitRadius: Math.random() * 130 + 40,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      return {
        center,
        particles,
        rotation: Math.random() * Math.PI,
      };
    });

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      clusters.forEach((cluster) => {
        const { center, particles } = cluster;
        cluster.rotation += 0.008;

        // 1. Draw 3D Orbiting Wireframe Ellipse Rings
        for (let ring = 1; ring <= 3; ring++) {
          const ringRadius = ring * 52;
          ctx.save();
          ctx.beginPath();
          ctx.translate(center.x, center.y);
          ctx.rotate(cluster.rotation * (ring % 2 === 0 ? 1 : -1) + ring);
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
          const pX = center.x + Math.cos(p.angle) * p.orbitRadius;
          const pY = center.y + Math.sin(p.angle) * (p.orbitRadius * 0.42) + p.z * 0.2;
          const scale = (p.z + 200) / 300;
          const alpha = Math.min(1, Math.max(0.35, scale));
          return { p, pX, pY, scale, alpha };
        });

        // Draw floating particles
        coords.forEach(({ p, pX, pY, scale, alpha }) => {
          ctx.beginPath();
          ctx.arc(pX, pY, p.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        });

        // 2. Connect nearby particles using single-pass loop (j = i + 1)
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

            if (distSq < 3025) { // 55^2
              ctx.moveTo(pX, pY);
              ctx.lineTo(p2X, p2Y);
            }
          }
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

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
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-90" />
    </div>
  );
}

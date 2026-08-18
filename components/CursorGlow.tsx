"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 opacity-40 hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)",
        borderRadius: "100%",
        filter: "blur(40px)",
      }}
    />
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${scrolled
            ? "glass-panel bg-surface-glass border border-white/10 shadow-2xl shadow-accent/5 backdrop-blur-xl py-3 px-6"
            : "bg-surface/40 backdrop-blur-md border border-white/5 py-4 px-6"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="group flex items-center gap-2 font-display font-bold text-lg tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-accent glow-dot group-hover:scale-125 transition-transform" />
            <span className="text-accent">Hasnain</span>
            <span className="text-accent-purple font-mono text-xs font-normal"></span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link py-1">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-primary text-xs tracking-wide uppercase px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 group"
            >
              Let&apos;s Connect
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-full glass-pill text-text hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mt-3 max-w-6xl mx-auto glass-panel bg-surface/95 border border-white/10 rounded-2xl p-6 pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-sm font-medium">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link py-2 text-base flex items-center justify-between"
                  onClick={() => setOpen(false)}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center text-sm py-3 rounded-xl mt-2 inline-flex items-center justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

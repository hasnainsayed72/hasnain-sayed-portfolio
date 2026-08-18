"use client";

import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent glow-dot" />
          <span className="font-display font-bold text-lg text-text">Hasnain</span>
          <span className="text-accent-purple font-mono text-xs font-normal"></span>
        </div>

        <div className="text-xs text-text-faint font-mono text-center">
          © {new Date().getFullYear()} Mohammad Hasnain Sayed.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sayedhasnain66@gmail.com"
            className="p-2.5 rounded-full glass-pill text-text-dim hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-pill text-text-dim hover:text-accent hover:border-accent/40 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { AmbientConstellation } from "./AmbientConstellation";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sayedhasnain66@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <AmbientConstellation position="split" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

            <span className="eyebrow inline-flex items-center gap-2 mb-4 glass-pill px-4 py-1.5 rounded-full border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent glow-dot animate-pulse" />
              Get In Touch
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-2 mb-6 tracking-tight">
              Let&apos;s talk about your <span className="text-gradient-cyan">next implementation</span>
            </h2>

            <p className="text-text-dim text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether it&apos;s a complex multi-entity ERP rollout, a SaaS deployment, or a digital transformation program needing execution ownership - I&apos;m ready to talk it through.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:sayedhasnain66@gmail.com"
                className="btn-primary rounded-full px-8 py-4 text-sm font-semibold tracking-wide inline-flex items-center gap-2 group"
              >
                <Mail size={16} />
                Schedule a Discussion
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-ghost rounded-full px-7 py-4 text-sm font-medium inline-flex items-center gap-2 hover:border-accent/40"
              >
                {copied ? <Check size={16} className="text-good" /> : <Copy size={16} className="text-accent" />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-sm font-mono pt-8 border-t border-white/10">
              <a
                href="mailto:sayedhasnain66@gmail.com"
                className="glass-pill p-4 rounded-2xl flex items-center justify-center gap-2.5 text-text hover:text-accent hover:border-accent/40 transition-all group"
              >
                <Mail size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <span className="truncate">sayedhasnain66@gmail.com</span>
              </a>

              <a
                href="tel:+917678059114"
                className="glass-pill p-4 rounded-2xl flex items-center justify-center gap-2.5 text-text hover:text-accent hover:border-accent/40 transition-all group"
              >
                <Phone size={16} className="text-good group-hover:scale-110 transition-transform" />
                <span>+91-7678059114</span>
              </a>

              <div className="glass-pill p-4 rounded-2xl flex items-center justify-center gap-2.5 text-text-dim">
                <MapPin size={16} className="text-accent-purple" />
                <span>Parwanoo, HP (From Mumbai)</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

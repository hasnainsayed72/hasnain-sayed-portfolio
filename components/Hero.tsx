"use client";

import { Download, Rocket, ShieldCheck, Globe, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { Counter } from "./Counter";
import { Hero3D } from "./Hero3D";

const nodes = [
  {
    title: "ERP Strategy",
    sub: "5 group companies",
    pos: "top-[71px] left-[152px]",
    width: "w-[175px]",
    color: "accent",
    floatY: [0, -6, 0],
    delay: 0.2,
    floatDuration: 3.5,
  },
  {
    title: "Implementation",
    sub: "SaaS & ERP rollouts",
    pos: "top-[173px] left-0",
    width: "w-[175px]",
    color: "accent",
    floatY: [0, 6, 0],
    delay: 0.35,
    floatDuration: 4.0,
  },
  {
    title: "Customer Success",
    sub: "SLA management",
    pos: "top-[275px] left-[152px]",
    width: "w-[175px]",
    color: "good",
    floatY: [0, -6, 0],
    delay: 0.5,
    floatDuration: 3.8,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-20 grid-lines">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full eyebrow mb-4 border border-accent/20 shadow-lg shadow-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent glow-dot animate-pulse" />
            Head - ERP & Digital Transformation
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] mb-5 tracking-tight">
            Mohammad
            <br />
            Hasnain <span className="text-gradient-cyan">Sayed</span>
          </h1>
          <p className="text-base sm:text-lg text-text-dim max-w-lg mb-6 leading-relaxed font-normal">
            I turn fragmented operations into systems that run themselves - leading ERP strategy, SaaS
            rollouts, and cross-functional teams across Healthcare, Manufacturing, and FMCG.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary rounded-full px-7 py-3.5 text-sm tracking-wide shadow-xl shadow-accent/20"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Mohammad_Hasnain_Sayed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <Download size={16} className="text-accent" />
              Download Resume
            </motion.a>
          </div>
          <RevealStagger className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl" staggerDelay={0.08}>
            {/* Card 1 */}
            <RevealItem>
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="glass-panel rounded-2xl px-3 py-4 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all" />
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center text-accent border border-accent/20 group-hover:scale-110 transition-transform">
                    <Rocket size={15} />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot animate-pulse" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-cyan tracking-tight">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="font-mono text-[9px] sm:text-[9.5px] font-semibold text-text-dim uppercase tracking-tight mt-1.5 whitespace-nowrap">
                  Implementations
                </div>
              </motion.div>
            </RevealItem>

            {/* Card 2 */}
            <RevealItem>
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="glass-panel rounded-2xl px-3 py-4 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all" />
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center text-accent border border-accent/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={15} />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent tracking-tight">
                  <Counter target={98} suffix="%" />
                </div>
                <div className="font-mono text-[9px] sm:text-[9.5px] font-semibold text-text-dim uppercase tracking-tight mt-1.5 whitespace-nowrap">
                  SLA Adherence
                </div>
              </motion.div>
            </RevealItem>

            {/* Card 3 */}
            <RevealItem>
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="glass-panel rounded-2xl px-3 py-4 border border-white/10 hover:border-accent-purple/50 hover:shadow-xl hover:shadow-accent-purple/10 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent-purple/10 rounded-full blur-xl group-hover:bg-accent-purple/20 transition-all" />
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center text-accent-purple border border-accent-purple/20 group-hover:scale-110 transition-transform">
                    <Globe size={15} />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple glow-dot" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-purple tracking-tight">
                  <Counter target={3} />
                </div>
                <div className="font-mono text-[9px] sm:text-[9.5px] font-semibold text-text-dim uppercase tracking-tight mt-1.5 whitespace-nowrap">
                  Industries
                </div>
              </motion.div>
            </RevealItem>

            {/* Card 4 */}
            <RevealItem>
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="glass-panel rounded-2xl px-3 py-4 border border-white/10 hover:border-good/50 hover:shadow-xl hover:shadow-good/10 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-good/10 rounded-full blur-xl group-hover:bg-good/20 transition-all" />
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center text-good border border-good/20 group-hover:scale-110 transition-transform">
                    <Briefcase size={15} />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-good glow-dot-good" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-good tracking-tight">
                  <Counter target={7} suffix="+" />
                </div>
                <div className="font-mono text-[9px] sm:text-[9.5px] font-semibold text-text-dim uppercase tracking-tight mt-1.5 whitespace-nowrap">
                  Years Exp.
                </div>
              </motion.div>
            </RevealItem>
          </RevealStagger>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto hidden sm:block">
          <Hero3D />
        </Reveal>
      </div>
    </section>
  );
}

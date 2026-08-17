import { Reveal } from "./Reveal";

const items = ["Healthcare Systems", "Manufacturing SMEs", "FMCG Distribution", "SaaS & ERP Platforms", "International Government Projects"];

export function Industries() {
  const loop = [...items, ...items, ...items];
  return (
    <section className="py-16 border-t border-white/5 bg-surface/30 overflow-hidden relative">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-8 mb-8">
        <span className="eyebrow flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
          Industry Footprint
        </span>
      </Reveal>

      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="relative flex overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap font-display font-bold text-2xl md:text-3xl text-text-dim/80 animate-marquee py-2">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-12 group cursor-default">
              <span className="group-hover:text-gradient-cyan group-hover:scale-105 transition-all">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent glow-dot opacity-60" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}

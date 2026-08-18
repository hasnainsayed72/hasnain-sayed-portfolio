import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const stops = [
  { year: "'19", title: "SDE", org: "Dreamz Vision Creative Geeks" },
  { year: "'20", title: "IT Support Engineer", org: "N. Kumar Associates" },
  { year: "'21", title: "Functional Analyst", org: "Manorama Infosolutions" },
  { year: "'24", title: "Implementation Consultant", org: "TranZact" },
  { year: "'25", title: "Growth Consultant", org: "Bizom" },
  { year: "'26", title: "Head - ERP & Digital Transformation", org: "Electrowaves Electronics", current: true },
];

export function Journey() {
  return (
    <section className="py-24 border-t border-white/5 bg-surface/30 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-16 text-center">
          <span className="eyebrow flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Professional Journey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Seven years, <span className="text-gradient-cyan">one throughline</span>
          </h2>
          <p className="text-text-dim mt-3 max-w-xl mx-auto text-base">
            From writing code to owning ERP strategy for a five-company group - each role added a layer
            of scope, building towards holistic digital transformation.
          </p>
        </Reveal>

        <div className="relative">
          {/* Track line for desktop */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-accent/20 via-accent-purple/30 to-good/40 z-0" />

          <RevealStagger
            className="flex overflow-x-auto md:overflow-visible gap-6 md:grid md:grid-cols-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 scroll-snap-x relative z-10"
            staggerDelay={0.08}
          >
            {stops.map((s) => (
              <RevealItem key={s.title} className="min-w-[170px] md:min-w-0 flex flex-col items-center md:items-start group">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative font-mono text-xs font-semibold shadow-lg transition-all duration-300 group-hover:scale-110 ${s.current
                    ? "bg-gradient-to-br from-accent to-good text-white shadow-accent/20 ring-4 ring-accent/20 glow-dot"
                    : "glass-panel bg-surface border border-white/10 text-accent group-hover:border-accent/40"
                    }`}
                >
                  {s.year}
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5 w-full group-hover:border-accent/30 transition-all duration-300">
                  <div className={`font-bold text-sm leading-snug ${s.current ? "text-gradient-cyan" : "text-text group-hover:text-accent transition-colors"}`}>
                    {s.title}
                  </div>
                  <div className="text-[11px] text-text-faint font-medium mt-1 leading-tight">{s.org}</div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { AmbientConstellation } from "./AmbientConstellation";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden"
    >
      <AmbientConstellation position="bottom-right" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <Reveal>
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            About
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 leading-tight tracking-tight">
            The person behind the <span className="text-gradient-cyan">go-lives</span>
          </h2>

          <div className="mt-8 p-6 glass-panel rounded-2xl border border-white/10 relative overflow-hidden hidden md:block">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2">Core Philosophy</div>
            <p className="text-sm text-text-dim leading-relaxed italic">
              &ldquo;Software shouldn&apos;t force humans to adapt to computers - systems must be built to elevate human capability.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-text-dim leading-relaxed shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-purple to-good rounded-t-3xl" />

          <p className="text-base text-text">
            I sit at the point where a business&apos;s daily operations meet the
            software meant to run them - and I make sure that meeting goes seamlessly.
            Over seven years, that has meant leading requirement-gathering
            workshops, configuring ERP and SaaS platforms, and staying on the
            line through go-live and every crucial week after.
          </p>

          <p>
            From connecting hospital networks to national healthcare infrastructure,
            to unifying inventory governance across manufacturing enterprises and
            deploying FMCG field-force platforms — I specialize in transforming
            fragmented business demands into dependable, production-ready
            enterprise systems
          </p>

          <p>
            I currently head ERP &amp; Digital Transformation for a
            multi-entity manufacturing group, managing ERP implementation,
            cross-functional coordination, vendor relationships, and data
            governance across five companies.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
            <span className="glass-pill font-mono text-xs px-4 py-2 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-accent/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Based in Parwanoo, HP
            </span>

            <span className="glass-pill font-mono text-xs px-4 py-2 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-accent-purple/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              Originally from Mumbai
            </span>

            <span className="glass-pill font-mono text-xs px-4 py-2 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-good/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-good glow-dot-good" />
              Open to Relocation
            </span>

            <span className="glass-pill font-mono text-xs px-4 py-2 rounded-full text-text-dim border border-white/10">
              Healthcare • Manufacturing • FMCG • SaaS
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
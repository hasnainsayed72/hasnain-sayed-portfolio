import Image from "next/image";
import { Reveal } from "./Reveal";
import { AmbientConstellation } from "./AmbientConstellation";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden"
    >
      <AmbientConstellation position="bottom-right" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Top Header */}
        <Reveal className="mb-12">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            About
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight">
            The person behind the <span className="text-gradient-cyan">go-lives</span>
          </h2>
        </Reveal>

        {/* 2 Equal Length Cards Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Photo & Core Philosophy */}
          <Reveal delay={0.1} className="h-full">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between h-full shadow-2xl group">
              {/* Profile Photo */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-surface mb-5">
                <Image
                  src="/hasnain.jpg"
                  alt="Mohammad Hasnain Sayed"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_15%] group-hover:scale-103 transition-transform duration-500 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Core Philosophy Box */}
              <div className="p-5 glass-panel rounded-2xl border border-white/10 bg-surface/50 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
                  Core Philosophy
                </div>
                <p className="text-sm text-text-dim leading-relaxed italic font-normal">
                  &ldquo;Software shouldn&apos;t force humans to adapt to computers - systems must be built to elevate human capability.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Career Overview & Details */}
          <Reveal delay={0.2} className="h-full">
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full shadow-2xl relative">
              <div className="space-y-5 text-text-dim leading-relaxed text-sm sm:text-base">
                <p className="text-text font-normal">
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
                  enterprise systems.
                </p>

                <p>
                  I currently head ERP &amp; Digital Transformation for a
                  multi-entity manufacturing group, managing ERP implementation,
                  cross-functional coordination, vendor relationships, and data
                  governance across five companies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-6 mt-6 border-t border-white/10">
                <span className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-accent/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Based in Parwanoo, HP
                </span>

                <span className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-accent-purple/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                  Originally from Mumbai
                </span>

                <span className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-full text-text flex items-center gap-1.5 border border-white/10 hover:border-good/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-good glow-dot-good" />
                  Open to Relocation
                </span>

                <span className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-full text-text-dim border border-white/10">
                  Healthcare • Manufacturing • FMCG • SaaS
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
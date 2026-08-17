import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { Counter } from "./Counter";
import { SpotlightCard } from "./SpotlightCard";

export function Achievements() {
  return (
    <section className="py-24 border-t border-white/5 bg-surface/30 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-14">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Key Accomplishments
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Numbers that <span className="text-gradient-cyan">held up under pressure</span>
          </h2>
        </Reveal>
        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          <RevealItem>
            <SpotlightCard className="p-7 group">
              <div className="font-display font-bold text-4xl text-gradient-cyan mb-3">
                <Counter target={50} suffix="+" />
              </div>
              <div className="text-sm text-text-dim leading-relaxed font-medium">
                End-to-end SaaS &amp; ERP implementations across Healthcare, Manufacturing &amp; FMCG
              </div>
            </SpotlightCard>
          </RevealItem>
          <RevealItem>
            <SpotlightCard className="p-7 group">
              <div className="font-display font-bold text-4xl text-accent mb-3">
                <Counter target={98} suffix="%+" />
              </div>
              <div className="text-sm text-text-dim leading-relaxed font-medium">SLA adherence: 3-hr FRT, 12-hr RT, consistently held without breach</div>
            </SpotlightCard>
          </RevealItem>
          <RevealItem>
            <SpotlightCard className="p-7 group" spotlightColor="rgba(168, 85, 247, 0.15)">
              <div className="font-display font-bold text-4xl text-gradient-purple mb-3">
                <Counter target={25} suffix="+" />
              </div>
              <div className="text-sm text-text-dim leading-relaxed font-medium">MSR/QSR executive reviews led with C-level stakeholders</div>
            </SpotlightCard>
          </RevealItem>
          <RevealItem>
            <SpotlightCard className="p-7 group" spotlightColor="rgba(52, 211, 153, 0.15)">
              <div className="font-display font-bold text-4xl text-good mb-3">🌍</div>
              <div className="text-sm text-text-dim leading-relaxed font-medium">
                Selected for international government healthcare project - Seychelles Ministry of Health
              </div>
            </SpotlightCard>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}

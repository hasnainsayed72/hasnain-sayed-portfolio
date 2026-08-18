import { Search, FileCheck2, Layers, ClipboardCheck, Rocket, CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { AmbientConstellation } from "./AmbientConstellation";

const stages = [
  { icon: Search, title: "Discovery", desc: "Stakeholder interviews, current-state mapping, gap analysis" },
  { icon: FileCheck2, title: "Requirements", desc: "FSDs, workflow specs, sign-off with business owners" },
  { icon: Layers, title: "Configuration", desc: "System setup, master data migration, integrations" },
  { icon: ClipboardCheck, title: "UAT", desc: "Structured testing cycles with business users, defect triage" },
  { icon: Rocket, title: "Go-Live", desc: "Cutover planning, hypercare, on-floor support" },
  { icon: CheckCircle2, title: "Adoption & SLA", desc: "MSR/QSR reviews, SLA tracking, renewal-ready accounts", good: true },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 border-t border-white/5 bg-surface/40 relative overflow-hidden">
      <AmbientConstellation position="bottom-left" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-8">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            ERP & SaaS Implementation Lifecycle
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            How an implementation <span className="text-gradient-cyan">actually gets to go-live</span>
          </h2>
          <p className="text-text-dim mt-3 max-w-xl text-base">
            The proven six-stage methodology, run 50+ times across healthcare networks, manufacturing SMEs, and FMCG field teams.
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-14"
          staggerDelay={0.08}
        >
          {stages.map((s, idx) => (
            <RevealItem key={s.title}>
              <SpotlightCard className="h-full rounded-2xl p-5 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl glass-pill flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform ${s.good ? "text-good glow-dot-good" : "text-accent glow-dot"}`}>
                      <s.icon size={18} />
                    </div>
                    <span className="font-mono text-[10px] text-text-faint font-semibold">0{idx + 1}</span>
                  </div>
                  <div className="font-bold text-sm text-text group-hover:text-accent transition-colors mb-1.5">{s.title}</div>
                  <div className="text-xs text-text-faint leading-relaxed font-normal">{s.desc}</div>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

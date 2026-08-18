import { Reveal } from "./Reveal";
import { AmbientConstellation } from "./AmbientConstellation";

const core = [
  "ERP Implementation",
  "Project Management",
  "Business Analysis",
  "Requirement Gathering",
  "UAT Coordination",
  "SLA Management",
  "Training & Enablement",
  "Post Go-Live Support",
  "Stakeholder Management",
  "Digital Transformation",
];

const domain = [
  "Manufacturing Ops",
  "Inventory Management",
  "Procurement",
  "Production Planning",
  "CRM Workflows",
  "Reporting & Analytics",
  "Documentation",
  "Leadership",
  "Communication",
  "Healthcare Systems",
];

const tools = [
  "Python",
  "C#",
  "C++",
  "MySQL",
  "Microsoft SQL Server",
  "Power BI",
  "Tableau",
  "ZOHO CRM",
  "HubSpot",
  "SSMS",
  "MS Office",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <AmbientConstellation position="top-right" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-16">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Skills &amp; Toolkit
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Capabilities &amp; <span className="text-gradient-cyan">Technical Toolkit</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Reveal className="card rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent glow-dot" />
              <h3 className="font-display font-bold text-xl text-text">Core Capabilities</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-text-dim">
              {core.map((s) => (
                <div key={s} className="glass-pill px-3 py-2 rounded-xl border border-white/5 flex items-center gap-2 text-text hover:border-accent/40 transition-colors">
                  <span className="text-accent text-xs">✦</span>
                  <span className="font-medium text-xs sm:text-sm">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-good/5 rounded-full blur-2xl group-hover:bg-good/15 transition-all" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-good glow-dot-good" />
              <h3 className="font-display font-bold text-xl text-text">Domain Expertise</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-text-dim">
              {domain.map((s) => (
                <div key={s} className="glass-pill px-3 py-2 rounded-xl border border-white/5 flex items-center gap-2 text-text hover:border-good/40 transition-colors">
                  <span className="text-good text-xs">✦</span>
                  <span className="font-medium text-xs sm:text-sm">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="card rounded-3xl p-8 border border-white/10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Technical Toolkit &amp; Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="glass-pill font-mono text-xs px-4 py-2.5 rounded-xl border border-white/10 text-text hover:border-accent/40 hover:scale-105 transition-all shadow-md">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const projects = [
  {
    tag: "HEALTHCARE · INTEGRATION",
    title: "Mumbai Hospital HMIS Integration",
    problem:
      "Nair Hospital, Wockhardt, and other MCGM hospitals needed their systems integrated into a shared HMIS without disrupting live patient care.",
    role: "Functional Analyst - requirements, business process documentation, implementation oversight.",
    outcome:
      "Unified registration, billing, EMR/EHR, LIS and RIS workflows across multiple major hospitals with minimal disruption to clinical operations.",
    stack: ["HMIS", "EMR/EHR", "LIS/RIS"],
  },
  {
    tag: "GOVERNMENT · INTERNATIONAL",
    title: "Seychelles Ministry of Health - Lab Integration",
    problem:
      "The Seychelles Ministry of Health needed its lab machines integrated into a national health information system.",
    role: "Selected as the implementation representative for this international government engagement.",
    outcome:
      "Successful lab-machine integration delivered on foreign soil under government compliance requirements - a rare credential this early in a career.",
    stack: ["Govt. Healthcare", "Lab Systems"],
  },
  {
    tag: "DATA · ANALYTICS",
    title: "Credit Card Financial Dashboard",
    problem: "Stakeholders lacked real-time visibility into transaction and customer performance metrics.",
    role: "Built the dashboard end-to-end from a SQL database.",
    outcome: "Streamlined reporting and shared findings that directly informed stakeholder decision-making.",
    stack: ["Power BI", "MySQL", "Excel"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-16">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Case Studies
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Selected <span className="text-gradient-cyan">Impact &amp; Case Studies</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((p) => (
            <RevealItem key={p.title}>
              <SpotlightCard className="p-7 flex flex-col h-full group">
                <span className="glass-pill font-mono text-[10px] font-semibold text-accent px-3 py-1 rounded-full border border-accent/20 w-fit mb-4 uppercase tracking-wider">
                  {p.tag}
                </span>

                <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors mb-4 leading-snug">
                  {p.title}
                </h3>

                <div className="space-y-3.5 mb-6 text-sm text-text-dim leading-relaxed flex-grow">
                  <p>
                    <strong className="text-text font-semibold">Problem:</strong> {p.problem}
                  </p>
                  <p>
                    <strong className="text-text font-semibold">Role:</strong> {p.role}
                  </p>
                  <p className="bg-accent/5 p-3 rounded-xl border border-accent/15 text-text">
                    <strong className="text-accent font-semibold">Outcome:</strong> {p.outcome}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {p.stack.map((s) => (
                    <span key={s} className="glass-pill font-mono text-[11px] px-2.5 py-1 rounded-lg border border-white/10 text-text-dim">
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

type Job = {
  period: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
  current?: boolean;
};

const jobs: Job[] = [
  {
    period: "Apr 2026 — Present",
    role: "Head - ERP & Digital Transformation",
    company: "Electrowaves Electronics Pvt. Ltd.",
    summary:
      "Own ERP adoption and digital transformation across five group companies, standardizing processes and coordinating cross-entity operations.",
    points: [
      "Primary liaison between internal departments and ERP vendors for requirements, customization, and rollout planning",
      "Driving ERP across Sales, Purchase, Inventory & Production for full process visibility",
      "Owning master data accuracy - BOMs, inventory structures, item mapping",
      "Building reporting and digital workflows to sharpen production monitoring and decisions",
    ],
    current: true,
  },
  {
    period: "Nov 2025 — Mar 2026",
    role: "Growth Consultant",
    company: "Bizom",
    summary:
      "Led end-to-end SaaS implementation for FMCG clients, from deployment through post-go-live stabilization.",
    points: [
      "Held SLA governance to 3-hr FRT / 12-hr RT with no breaches",
      "Ran MSR/QSR reviews with CXO stakeholders, strengthening renewals",
      "Wrote FSDs from requirement workshops for enhancements & CRs",
      "Directed UAT with Product & Tech teams for stable releases",
    ],
  },
  {
    period: "Nov 2024 — Nov 2025",
    role: "Implementation Consultant",
    company: "TranZact",
    summary:
      "Led 25+ SaaS ERP implementations for manufacturing SMEs and supervised a team of consultants across parallel rollouts.",
    points: [
      "Managed ~20 active client accounts through onboarding to adoption",
      "Guided a team of Implementation Consultants against shared milestones",
      "Directed configuration, data migration, and UAT for clean go-lives",
      "Tracked risk logs and resolved escalations proactively",
    ],
  },
  {
    period: "Nov 2021 — Jul 2024",
    role: "Functional Analyst",
    company: "Manorama Infosolutions Pvt. Ltd.",
    summary:
      "Implemented and supported HMIS systems for major Mumbai hospitals and an international healthcare integration.",
    points: [
      "Integrated Nair Hospital (MCGM), Wockhardt & other MCGM hospitals with HMIS",
      "Selected for an international project - Ministry of Health, Seychelles",
      "Documented requirements, risks, and business process flows",
      "Worked across EMR, EHR, Registration & Billing, LIS, RIS modules",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal className="mb-16">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Work Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            Where the <span className="text-gradient-cyan">implementations happened</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="timeline-rail" />

          {jobs.map((job, i) => (
            <Reveal
              key={job.company}
              delay={i * 0.05}
              className="relative md:grid md:grid-cols-2 gap-10 mb-16 pl-10 md:pl-0"
            >
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2.5 w-4 h-4 rounded-full border-2 border-bg transition-transform duration-300 hover:scale-125 ${job.current ? "bg-accent glow-dot animate-pulse" : "bg-accent/80 glow-dot"
                  }`}
              />
              <div className="md:text-right md:pr-10">
                <div className="font-mono text-xs text-text-faint mb-1.5 uppercase tracking-wider">{job.period}</div>
                <h3 className="font-display font-bold text-lg text-text">{job.role}</h3>
                <div className="text-sm font-semibold text-accent mt-0.5">{job.company}</div>
              </div>
              <div className="md:pl-10 mt-4 md:mt-0">
                <div className="card rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300">
                  <p className="text-sm text-text leading-relaxed mb-4 font-normal">{job.summary}</p>
                  <ul className="text-sm text-text-dim space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2.5 items-start">
                        <span className="text-accent text-xs mt-1">✦</span>
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="relative md:grid md:grid-cols-2 gap-10 pl-10 md:pl-0">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2.5 w-4 h-4 rounded-full bg-text-faint/60 border-2 border-bg" />
            <div className="md:text-right md:pr-10">
              <div className="font-mono text-xs text-text-faint mb-1.5 uppercase tracking-wider">Jun 2019 — Nov 2021</div>
              <h3 className="font-display font-bold text-lg text-text">Early Career Foundation</h3>
              <div className="text-sm text-text-dim font-medium">N. Kumar Associates · Dreamz Vision Creative Geeks</div>
            </div>
            <div className="md:pl-10 mt-4 md:mt-0">
              <div className="card rounded-2xl p-6 border border-white/10">
                <p className="text-sm text-text-dim leading-relaxed">
                  Started as an SDE, then moved into IT Support - the technical grounding that now
                  underpins how I scope, configure, and troubleshoot complex enterprise ERP systems.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

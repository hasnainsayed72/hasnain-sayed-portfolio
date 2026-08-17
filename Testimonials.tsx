import { Quote } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

const quotes = [
  {
    text: "Hasnain kept our go-live on schedule and stayed reachable through every escalation. Our SLA never slipped on his watch.",
    author: "Enterprise Client, FMCG",
  },
  {
    text: "He translated our messy shop-floor reality into something the ERP could actually work with — that's rarer than it sounds.",
    author: "Operations Head, Manufacturing",
  },
  {
    text: "Calm under pressure during a hospital integration with zero room for downtime. Exactly who you want on a live system.",
    author: "IT Lead, Healthcare",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="mb-14">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Endorsements
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
            What stakeholders <span className="text-gradient-cyan">have said</span>
          </h2>
        </Reveal>
        <RevealStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {quotes.map((q) => (
            <RevealItem key={q.author}>
              <div className="card rounded-3xl p-7 border border-white/10 hover:border-accent/40 transition-all duration-300 relative flex flex-col justify-between h-full group">
                <div>
                  <Quote size={28} className="text-accent/30 mb-4 group-hover:text-accent group-hover:scale-110 transition-all" />
                  <p className="text-sm text-text leading-relaxed mb-6 font-normal italic">
                    &ldquo;{q.text}&rdquo;
                  </p>
                </div>
                <div className="text-xs text-accent font-mono pt-4 border-t border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {q.author}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

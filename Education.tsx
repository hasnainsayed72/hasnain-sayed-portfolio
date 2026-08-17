import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { AmbientConstellation } from "./AmbientConstellation";

export function Education() {
  return (
    <section className="py-24 border-t border-white/5 bg-surface/30 relative overflow-hidden">
      <AmbientConstellation position="bottom-right" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12">
        <Reveal>
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Education
          </span>
          <h2 className="font-display font-bold text-3xl mt-3 mb-8 tracking-tight">Academic <span className="text-gradient-cyan">Foundation</span></h2>
          <div className="space-y-4">
            <div className="card rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-accent shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="font-bold text-base text-text group-hover:text-accent transition-colors">B.Sc. Information Technology</div>
                  <div className="text-sm text-text-dim mt-1 font-medium">Rizvi College of Arts, Science &amp; Commerce, Mumbai</div>
                  <div className="text-xs text-accent font-mono mt-3 inline-block glass-pill px-3 py-1 rounded-full border border-accent/20">
                    2016 – 2019 · CGPA 7.1
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-text-dim shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="font-bold text-base text-text">HSC — Science (PCMB)</div>
                  <div className="text-sm text-text-dim mt-1 font-medium">Rizvi College of Arts, Science &amp; Commerce, Mumbai</div>
                  <div className="text-xs text-text-faint font-mono mt-3 inline-block glass-pill px-3 py-1 rounded-full border border-white/10">
                    2014 – 2016
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent glow-dot" />
            Certifications
          </span>
          <h2 className="font-display font-bold text-3xl mt-3 mb-8 tracking-tight">Continuous <span className="text-gradient-purple">Learning</span></h2>
          <div className="space-y-4">
            <a
              href="https://www.hackerrank.com/certificates/10acba330248"
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-2xl p-6 border border-white/10 hover:border-accent-purple/50 transition-all duration-300 group flex items-center justify-between block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-accent-purple shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-bold text-base text-text group-hover:text-accent-purple transition-colors flex items-center gap-2">
                    <span>SQL (Basic) Verification</span>
                    <ExternalLink size={14} className="text-accent-purple opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-sm text-text-dim mt-0.5 font-medium">HackerRank</div>
                </div>
              </div>
              <div className="text-xs text-accent-purple font-mono glass-pill px-3 py-1 rounded-full border border-accent-purple/20">Apr 2024</div>
            </a>

            <a
              href="https://certified-fallback.s3.amazonaws.com/certificate_Sayed_Mohammad_Hasnain_2169620_Z6fmtI_.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-2xl p-6 border border-white/10 hover:border-good/50 transition-all duration-300 group flex items-center justify-between block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-good shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-bold text-base text-text group-hover:text-good transition-colors flex items-center gap-2">
                    <span>Project Management Assessment</span>
                    <ExternalLink size={14} className="text-good opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-sm text-text-dim mt-0.5 font-medium">LearnTube.ai</div>
                </div>
              </div>
              <div className="text-xs text-good font-mono glass-pill px-3 py-1 rounded-full border border-good/20">Mar 2026</div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

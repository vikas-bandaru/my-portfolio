import Reveal from "@/components/Reveal";
import { GraduationCap, Code2, GitBranch, Video } from "lucide-react";

export const evidenceParagraphs = [
  "12 years spent teaching in engineering education and managing technical training programs revealed a recurring structural failure: graduates routinely score top marks on theoretical exams, yet struggle to debug an asynchronous failure or build a functional software system.",
  "When learning happens in isolated subject silos, students memorize abstract syntax without forming conceptual mental models. Real reform requires shifting from passive recall to empirical consequence — where building things makes learning meaningful, and employment becomes a natural byproduct of genuine capability.",
];

export const aboutSignals = [
  { icon: GraduationCap, text: "Engineering education & technical training programs" },
  { icon: Code2, text: "Full-stack application engineering & agentic workflows" },
  { icon: GitBranch, text: "Simulation, systems thinking & consequence-driven learning" },
  { icon: Video, text: "Public writing & build-in-public video" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-700">
                The Evidence &amp; The Problem
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-foreground-950 tracking-tight leading-[1.15]">
                12 years of teaching exposed the same structural failure.
              </h2>
              <div className="mt-6 space-y-5">
                {evidenceParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm md:text-base text-foreground-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-background-200 bg-background-100 p-6 md:p-8 h-full shadow-xs">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500">
                Where this work lives
              </h3>
              <ul className="mt-6 space-y-4">
                {aboutSignals.map((signal, i) => {
                  const Icon = signal.icon;
                  return (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="w-9 h-9 shrink-0 rounded-lg bg-accent-100 text-accent-800 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm text-foreground-800 leading-relaxed pt-1.5">
                        {signal.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 pt-6 border-t border-background-200">
                <p className="font-heading italic text-lg text-foreground-900 leading-snug">
                  &ldquo;Reform isn’t a new syllabus. It’s a new consequence.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

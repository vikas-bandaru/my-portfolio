import Reveal from "@/components/base/Reveal";
import { evidenceParagraphs, aboutSignals } from "@/mocks/home";

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
                A decade of teaching exposed the same structural failure.
              </h2>
              <div className="mt-6 space-y-5">
                {evidenceParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm md:text-base text-foreground-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-background-200 bg-background-100 p-6 md:p-8 h-full">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500">
                Where this work lives
              </h3>
              <ul className="mt-6 space-y-4">
                {aboutSignals.map((signal) => (
                  <li key={signal.text} className="flex items-start gap-3.5">
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-accent-100 text-accent-800 flex items-center justify-center">
                      <i className={`${signal.icon} text-lg`} aria-hidden="true"></i>
                    </span>
                    <span className="text-sm text-foreground-800 leading-relaxed pt-1.5">
                      {signal.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-background-200">
                <p className="font-heading italic text-lg text-foreground-900 leading-snug">
                  “Reform isn’t a new syllabus. It’s a new consequence.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
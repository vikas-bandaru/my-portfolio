import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Layers, Briefcase, Compass, ExternalLink, Quote, Award } from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Vikas Bandaru — Learning, Technology & Real-World Problem Solving",
  description:
    "Engineering educator, learning architect, Salesforce Certified Platform Developer, and creator of LogicSims exploring how people learn through building and consequence.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Profile &amp; Background"
        badgeDotColor="bg-primary-400"
        title="About Vikas Bandaru"
        titleHighlight="— Builder &amp; Educator"
        description="Engineering educator, technical learning architect, Salesforce Certified Platform Developer, and independent software builder exploring how people learn through consequence."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "12", label: "Years Teaching" },
          { value: "02", label: "Salesforce Certs" },
          { value: "01", label: "Core Vision (LogicSims)" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Editorial Pull-Quote Banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-background-200 bg-background-50/80 p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xs">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border border-background-200 bg-background-100 shadow-sm">
              <Image
                src="/images/editorial/hero-network.webp"
                alt="Systems and Network Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 font-mono text-xs uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-primary-600" />
                First-Principles Stance
              </div>
              <p className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-foreground-950 tracking-tight leading-snug">
                &ldquo;Learning isn&rsquo;t listening to descriptions of the machine. It is turning the gears, breaking the tension, and observing the consequence.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        {/* Story Narrative Sections */}
        <div className="space-y-12">
          {/* Section 1: The Experiential Foundation */}
          <Reveal delay={100}>
            <section className="space-y-5 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
              <div className="border-b border-background-200/80 pb-4">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                  Academic Instruction &amp; Training Leadership
                </span>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                  The Experiential Foundation
                </h2>
              </div>
              <div className="space-y-4 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  My work spans 12 years in engineering education — spending 7 years in higher education as an Assistant Professor and 4 years leading technical training management. Across thousands of students and cohorts, I observed a persistent and troubling paradox: students work tirelessly to score top percentile marks in university examinations and LeetCode-style drills, yet collapse when asked to design a real-world web architecture or trace a non-deterministic race condition.
                </p>
                <p>
                  The failure is structural, not cognitive. Conventional higher education treats software engineering as an exercise in rote memorization and syllabus completion. In the post-2026 generative AI era, where LLMs generate boilerplate code in milliseconds, syntax-first rote instruction is not just ineffective — it renders graduates economically and intellectually brittle.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Section 2: Independent Builder & LogicSims */}
          <Reveal delay={150}>
            <section className="space-y-6 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
              <div className="border-b border-background-200/80 pb-4">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                  Systems Development
                </span>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                  The Pivot to Independent Building
                </h2>
              </div>
              <div className="space-y-4 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Rather than remaining solely within theoretical frameworks, I stepped out to build solutions directly. I earned Salesforce Certified App Builder and Platform Developer I credentials, delivered enterprise platform training, and immersed myself in modern full-stack web engineering.
                </p>
                <p>
                  This journey began with <strong className="text-foreground-900 font-medium">LogicSims Java</strong> — an early practical experiment exploring what an interactive, simulator-based environment for learning programming concepts could look like. What began as a focused investigation into programming education through consequence and state visualization evolved into a broader vision: <strong className="text-foreground-900 font-medium">LogicSims</strong>, an architecture using logic as a first-principles operating system for understanding complex systems.
                </p>
                <p>
                  Today, LogicSims Java is publicly available as the first live prototype, while the broader systems-learning architecture continues to develop through learner feedback and classroom observation.
                </p>
              </div>

              {/* Live Prototype Spotlight Card */}
              <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-primary-950 via-[#0a1b30] to-foreground-950 border border-primary-500/40 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Prototype Available
                  </span>
                  <p className="text-sm sm:text-base text-foreground-200 font-light">
                    Try the hands-on simulation prototype in your browser.
                  </p>
                </div>
                <a
                  href="https://logic-sims-java.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 hover:bg-primary-400 text-white font-medium text-xs shadow-md transition-all shrink-0"
                >
                  <span>Launch LogicSims Java</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>
          </Reveal>

          {/* Section 3: Technology as an Augmenter */}
          <Reveal delay={200}>
            <section className="space-y-5 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
              <div className="border-b border-background-200/80 pb-4">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                  Cognitive Philosophy
                </span>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                  Technology as an Augmenter
                </h2>
              </div>
              <div className="space-y-4 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Technology is neither inherently good nor bad; it is an amplifier of capability that carries consequences. My position on modern tools, including Generative AI, is deliberate: understand the technology, recognize its capabilities and limitations, use it deliberately, and retain human agency. AI should augment human thinking rather than replace independent reasoning.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Section 4: The Developing Nations Perspective */}
          <Reveal delay={250}>
            <section className="space-y-5 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
              <div className="border-b border-background-200/80 pb-4">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                  Regional Grounding
                </span>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                  The Developing Nations Perspective
                </h2>
              </div>
              <div className="space-y-4 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  A major area of my ongoing exploration is what India and developing nations can build with today&apos;s technologies — not merely adopting systems built elsewhere, but building solutions designed for our own unique conditions, constraints, and public impact, and eventually building tools the rest of the world can utilize.
                </p>
              </div>
            </section>
          </Reveal>
        </div>

        {/* Engagement Footnotes */}
        <Reveal delay={300}>
          <div className="pt-8 border-t border-background-200 flex flex-wrap items-center gap-4">
            <Link
              href="/logicsims"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
              id="about-cta-logicsims"
            >
              <span>Explore LogicSims</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background-200 bg-white hover:bg-background-100 text-foreground-800 font-medium text-xs transition-all shadow-xs"
              id="about-cta-work"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background-200 bg-white hover:bg-background-100 text-foreground-800 font-medium text-xs transition-all shadow-xs"
              id="about-cta-collab"
            >
              <span>Collaborate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Layers, Briefcase, Compass, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Vikas Bandaru — Learning, Technology & Real-World Problem Solving",
  description:
    "Engineering educator, learning architect, Salesforce Certified Platform Developer, and creator of LogicSims exploring how people learn through building and consequence.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <PageHeader
          eyebrow="Profile & Background"
          eyebrowIcon={<Sparkles className="w-3.5 h-3.5 text-primary-600" />}
          title="About Vikas Bandaru"
          description="Engineering educator, technical learning architect, Salesforce Certified Platform Developer, and independent software builder."
        />
      </Reveal>

      {/* Editorial Banner */}
      <Reveal delay={100}>
        <div className="relative overflow-hidden rounded-3xl border border-foreground-100 bg-gradient-to-br from-primary-50/50 via-white/80 to-background-100/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border border-foreground-200/60 bg-white shadow-xs">
            <Image
              src="/images/editorial/hero-network.webp"
              alt="Systems and Network Architecture"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">
              First-Principles Stance
            </span>
            <p className="font-serif text-lg sm:text-xl text-foreground-950 font-normal leading-snug">
              &ldquo;Learning isn&rsquo;t listening to descriptions of the machine. It is turning the gears, breaking the tension, and observing the consequence.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>

      <div className="space-y-12 leading-relaxed">
        {/* Section 1: The Experiential Foundation */}
        <Reveal delay={150}>
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
              The Experiential Foundation
            </h2>
            <div className="space-y-4 text-foreground-700">
              <p>
                My work spans over a decade in engineering education across academic instruction and technical training management. During these years, I witnessed a persistent paradox: students work tirelessly to score top percentile marks in exams, yet struggle when asked to build a real-world web service or debug an asynchronous logic failure.
              </p>
              <p>
                The root problem is structural rather than individual capability. Conventional technical education treats software engineering as an exercise in memorization rather than empirical discovery and problem solving.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Section 2: Independent Builder & LogicSims */}
        <Reveal delay={200}>
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
              The Pivot to Independent Building
            </h2>
            <div className="space-y-4 text-foreground-700">
              <p>
                Rather than remaining solely within theoretical frameworks, I stepped out to build solutions directly. I earned Salesforce Certified App Builder and Platform Developer I credentials, delivered enterprise platform training, and immersed myself in modern full-stack web engineering.
              </p>
              <p>
                This journey began with <strong>LogicSims Java</strong> — an early practical experiment exploring what an interactive, simulator-based environment for learning programming concepts could look like. What began as a focused investigation into programming education through consequence and state visualization evolved into a broader vision: <strong>LogicSims</strong>, an architecture using logic as a first-principles operating system for understanding complex systems.
              </p>
              <p>
                Today, LogicSims Java is publicly available as the first live prototype, while the broader systems-learning architecture continues to develop through learner feedback and classroom observation.
              </p>
            </div>

            {/* Live Prototype Callout */}
            <div className="mt-4 p-5 rounded-2xl bg-primary-50/70 border border-primary-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-primary-800 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Prototype Available
                </span>
                <p className="text-xs sm:text-sm text-foreground-800 font-medium">
                  Try the hands-on simulation prototype in your browser.
                </p>
              </div>
              <a
                href="https://logic-sims-java.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium text-xs shadow-xs transition-all shrink-0"
              >
                Launch LogicSims Java <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </section>
        </Reveal>

        {/* Section 3: Technology as an Augmenter */}
        <Reveal delay={250}>
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
              Technology as an Augmenter
            </h2>
            <div className="space-y-4 text-foreground-700">
              <p>
                Technology is neither inherently good nor bad; it is an amplifier of capability that carries consequences. My position on modern tools, including Generative AI, is deliberate: understand the technology, recognize its capabilities and limitations, use it deliberately, and retain human agency. AI should augment human thinking rather than replace independent reasoning.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Section 4: The Developing Nations Perspective */}
        <Reveal delay={300}>
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
              The Developing Nations Perspective
            </h2>
            <div className="space-y-4 text-foreground-700">
              <p>
                A major area of my ongoing exploration is what India and developing nations can build with today&apos;s technologies — not merely adopting systems built elsewhere, but building solutions designed for our own unique conditions, constraints, and public impact, and eventually building tools the rest of the world can utilize.
              </p>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Engagement Footnotes */}
      <Reveal delay={350}>
        <div className="pt-8 border-t border-foreground-100 flex flex-wrap items-center gap-4">
          <Link
            href="/logicsims"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-sm hover:bg-primary-600 transition-all shadow-xs"
            id="about-cta-logicsims"
          >
            Explore LogicSims <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-200 bg-white/80 hover:bg-background-100 text-foreground-800 font-medium text-sm transition-all"
            id="about-cta-work"
          >
            Work With Me
          </Link>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-200 bg-white/80 hover:bg-background-100 text-foreground-800 font-medium text-sm transition-all"
            id="about-cta-collab"
          >
            Collaborate
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

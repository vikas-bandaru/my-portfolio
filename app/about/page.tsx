import Link from "next/link";
import { ArrowRight, Sparkles, Layers, Briefcase, Compass } from "lucide-react";

export const metadata = {
  title: "About Vikas Bandaru — Learning, Technology & Real-World Problem Solving",
  description:
    "Engineering educator, learning architect, Salesforce Certified Platform Developer, and creator of LogicSims exploring how people learn through building and consequence.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          About Vikas Bandaru
        </h1>
        <p className="text-lg text-stone-600 font-medium leading-relaxed">
          Engineering educator, technical learning architect, Salesforce Certified Platform Developer, and independent software builder.
        </p>
      </header>

      <div className="prose-custom space-y-8 text-stone-800 leading-relaxed">
        {/* Section 1: The Experiential Foundation */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            The Experiential Foundation
          </h2>
          <p>
            My work spans over a decade in engineering education across academic instruction and technical training management. During these years, I witnessed a persistent paradox: students work tirelessly to score top percentile marks in exams, yet struggle when asked to build a real-world web service or debug an asynchronous logic failure.
          </p>
          <p>
            The root problem is structural rather than individual capability. Conventional technical education treats software engineering as an exercise in memorization rather than empirical discovery and problem solving.
          </p>
        </section>

        {/* Section 2: Independent Builder & LogicSims */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            The Pivot to Independent Building
          </h2>
          <p>
            Rather than remaining solely within theoretical frameworks, I stepped out to build solutions directly. I earned Salesforce Certified App Builder and Platform Developer I credentials, delivered enterprise platform training, and immersed myself in modern full-stack web engineering.
          </p>
          <p>
            Today, I am the lead developer of <strong>LogicSims</strong> — a discovery-based learning platform designed to replace passive lectures with interactive, consequence-driven simulations.
          </p>
        </section>

        {/* Section 3: Technology as an Augmenter */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            Technology as an Augmenter
          </h2>
          <p>
            Technology is neither inherently good nor bad; it is an amplifier of capability that carries consequences. My position on modern tools, including Generative AI, is deliberate: understand the technology, recognize its capabilities and limitations, use it deliberately, and retain human agency. AI should augment human thinking rather than replace independent reasoning.
          </p>
        </section>

        {/* Section 4: The Developing Nations Perspective */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            The Developing Nations Perspective
          </h2>
          <p>
            A major area of my ongoing exploration is what India and developing nations can build with today's technologies — not merely adopting systems built elsewhere, but building solutions designed for our own unique conditions, constraints, and public impact, and eventually building tools the rest of the world can utilize.
          </p>
        </section>
      </div>

      {/* Engagement Footnotes */}
      <div className="pt-6 border-t border-stone-200 flex flex-wrap gap-4">
        <Link
          href="/logicsims"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors"
          id="about-cta-logicsims"
        >
          Explore LogicSims <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
          id="about-cta-work"
        >
          Work With Me
        </Link>
        <Link
          href="/collaborate"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
          id="about-cta-collab"
        >
          Collaborate
        </Link>
      </div>
    </div>
  );
}

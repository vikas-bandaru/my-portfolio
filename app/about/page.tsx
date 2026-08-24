import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Vikas Bandaru — Educator, Architect, Builder",
  description:
    "11 years in engineering education: 7 in academia as Assistant Professor, 4 in technical training management. Creator of LogicSims.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          About Vikas Bandaru
        </h1>
        <p className="text-lg text-stone-600 font-medium leading-relaxed">
          Engineering educator, technical learning architect, Salesforce Certified Platform Developer, and independent software builder.
        </p>
      </header>

      <div className="prose-custom space-y-6 text-stone-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            11 Years in Technical Education
          </h2>
          <p>
            My work spans 7 years as an Assistant Professor in university academia and 4 years managing technical training programs for software teams. During this decade, I witnessed a persistent paradox: students work tirelessly to score top percentile marks in exams, yet struggle when asked to build a real-world web service or debug an asynchronous logic failure.
          </p>
          <p>
            The root problem isn't student capability — it's structural. Indian technical education treats software engineering as an exercise in memorization rather than empirical discovery and problem solving.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            Independent Builder & LogicSims
          </h2>
          <p>
            Rather than staying within theoretical academia, I stepped out to build solutions directly. I earned Salesforce App Builder and Platform Developer I certifications, spent 1.5 years teaching enterprise platform development, and taught myself modern full-stack web engineering.
          </p>
          <p>
            Currently, I am the owner and lead developer of <strong>LogicSims</strong> — a discovery-based edtech platform designed to replace passive lectures with interactive, simulation-driven problem solving.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
            YouTube & Community Work
          </h2>
          <p>
            I run a YouTube channel dedicated to Indian developers, focusing on deep, practical technical breakdowns rather than superficial coding tutorials. My goal is to build clear mental models so developers can reason from first principles.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-stone-200 flex gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors"
          id="about-cta-contact"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/teaching"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
          id="about-cta-teaching"
        >
          Explore Teaching Programs
        </Link>
      </div>
    </div>
  );
}

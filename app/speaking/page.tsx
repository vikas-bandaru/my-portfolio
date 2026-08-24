import Link from "next/link";
import { ArrowRight, Mic, Calendar } from "lucide-react";

export const metadata = {
  title: "Speaking & Workshops — Vikas Bandaru",
  description:
    "Keynotes and technical workshops on Indian education reform, discovery-based curriculum design, and practical software mental models.",
};

export default function SpeakingPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Speaking & Keynotes
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          I speak at engineering colleges, edtech summits, and developer conferences on shifting technical training from score-obsessed rote learning to hands-on capability.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Available Talk Topics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-5 border border-stone-200 rounded-xl bg-white space-y-2">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <Mic className="w-4 h-4 text-sky-600" />
              Reforming Indian Tech Education
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Why high GPA graduates underperform in production roles, and how institutions can shift toward discovery-based learning models.
            </p>
          </div>

          <div className="p-5 border border-stone-200 rounded-xl bg-white space-y-2">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <Mic className="w-4 h-4 text-sky-600" />
              Building Discovery-Based Curricula
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Practical blueprint for educators: designing interactive simulations that teach first-principles reasoning over syntax memorization.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Past Engagements
        </h2>
        <div className="space-y-3 text-sm text-stone-700">
          <div className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <Calendar className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-900">
                National Engineering Pedagogy Summit 2025
              </p>
              <p className="text-xs text-stone-500">
                Keynote: "Moving Beyond the Scorecard: Practical Capability as the Primary Goal of Technical Training"
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <Calendar className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-900">
                Developer Educator Roundtable
              </p>
              <p className="text-xs text-stone-500">
                Workshop: "Teaching Asynchronous Architecture Through Interactive Mental Models"
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-6 border-t border-stone-200">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors"
          id="speaking-cta-book"
        >
          Book Vikas for a Keynote or Workshop
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

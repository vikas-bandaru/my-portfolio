import Link from "next/link";
import { ArrowRight, Compass, Layers, School, Microscope, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Collaborate (Participate in the Mission) — Vikas Bandaru",
  description:
    "Non-transactional mission participation: contribute domain variables to LogicSims, pilot discovery simulations in classrooms, or co-author systems research.",
};

export default function CollaboratePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700">
          <Compass className="w-3.5 h-3.5 text-stone-700" />
          <span>Mission Participation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Collaborate on the Mission
        </h1>

        <p className="text-stone-600 leading-relaxed font-medium">
          Changing how people learn, think, and solve real-world problems is not a solo endeavor. Here are concrete ways domain experts, educators, and researchers can participate.
        </p>
      </header>

      {/* Distinction Note */}
      <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
        <p className="font-bold text-stone-900 text-sm">Non-Transactional Collaboration</p>
        <p className="leading-relaxed">
          If you are looking to hire Vikas for training, consulting, or speaking, visit <Link href="/work" className="text-sky-700 font-semibold underline">Work With Me</Link>. This page is dedicated to open mission participation, research, and shared experiments.
        </p>
      </div>

      {/* Collaboration Areas */}
      <div className="space-y-6">
        {/* Area 1: LogicSims Domain Modeling */}
        <section className="p-6 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">
              1. LogicSims & Domain Modeling
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            LogicSims will eventually expand beyond software engineering into complex real-world domains such as agriculture, public transit, supply chains, and local economics.
          </p>

          <div className="text-xs text-stone-700 space-y-1">
            <p className="font-semibold text-stone-900">How you can contribute:</p>
            <p className="text-stone-600">
              If you are a domain specialist (agronomist, urban planner, economist, engineer), help extract variables, map constraints, and define real-world state machines for new simulation nodes.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=collab-logicsims"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
              id="collab-logicsims-link"
            >
              Propose a Domain Model <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Area 2: Institutional & Classroom Pilots */}
        <section className="p-6 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <School className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">
              2. Classroom & Sandbox Pilots
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Are you a forward-thinking college professor, department head, or academy lead willing to experiment with discovery-based learning in your classroom?
          </p>

          <div className="text-xs text-stone-700 space-y-1">
            <p className="font-semibold text-stone-900">How you can contribute:</p>
            <p className="text-stone-600">
              Run active learning trials using LogicSims prototypes with your student cohorts and share empirical feedback, student debugging observations, and learning curve telemetry.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=collab-pilot"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
              id="collab-pilot-link"
            >
              Inquire to Run a Pilot <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Area 3: Research & Systems Analysis */}
        <section className="p-6 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center">
              <Microscope className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">
              3. Research & Systems Exploration
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Investigating questions around Indian technical education outcomes, developing nation technology adoption, and human agency in the age of AI.
          </p>

          <div className="text-xs text-stone-700 space-y-1">
            <p className="font-semibold text-stone-900">How you can contribute:</p>
            <p className="text-stone-600">
              Share empirical datasets, co-investigate case studies, or provide constructive critical critique on published essays.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=collab-research"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950"
              id="collab-research-link"
            >
              Start a Research Discussion <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>

      {/* Direct Contact Flow */}
      <section className="p-6 rounded-2xl bg-stone-900 text-white space-y-3">
        <h3 className="text-xl font-bold tracking-tight">
          Have a Different Idea for Collaboration?
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
          If your perspective or project intersects with this mission in a way not listed above, reach out directly.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?intent=collab-general"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-stone-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
          >
            Get in Touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

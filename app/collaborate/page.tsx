import Link from "next/link";
import { ArrowRight, Compass, Layers, School, Microscope } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Collaborate (Participate in the Mission) — Vikas Bandaru",
  description:
    "Non-transactional mission participation: contribute domain variables to LogicSims, pilot discovery simulations in classrooms, or co-author systems research.",
};

export default function CollaboratePage() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <div className="space-y-6">
          <PageHeader
            eyebrow="Mission Participation"
            eyebrowIcon={<Compass className="w-3.5 h-3.5 text-primary-600" />}
            title="Collaborate on the Mission"
            description="Changing how people learn, think, and solve real-world problems is not a solo endeavor. Here are concrete ways domain experts, educators, and researchers can participate."
          />

          {/* Distinction Note */}
          <div className="p-6 rounded-3xl bg-primary-50/60 border border-primary-200/60 text-xs text-foreground-800 space-y-1.5 shadow-xs">
            <p className="font-serif text-base font-normal text-foreground-950">Non-Transactional Collaboration</p>
            <p className="leading-relaxed text-foreground-700 text-sm">
              If you are looking to hire Vikas for training, consulting, or speaking, visit{" "}
              <Link href="/work" className="text-primary-700 font-semibold underline hover:text-primary-900">
                Work With Me
              </Link>
              . This page is dedicated to open mission participation, research, and shared experiments.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Collaboration Areas */}
      <div className="space-y-6">
        {/* Area 1: LogicSims Domain Modeling */}
        <Reveal delay={100}>
          <section className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-4 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                1. LogicSims & Domain Modeling
              </h2>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              LogicSims will eventually expand beyond software engineering into complex real-world domains such as agriculture, public transit, supply chains, and local economics.
            </p>

            <div className="text-xs text-foreground-700 space-y-1 bg-background-50 p-4 rounded-2xl border border-foreground-100">
              <p className="font-semibold text-foreground-950 font-mono text-xs uppercase tracking-wider">How you can contribute:</p>
              <p className="text-foreground-600 text-sm leading-relaxed">
                If you are a domain specialist (agronomist, urban planner, economist, engineer), help extract variables, map constraints, and define real-world state machines for new simulation nodes.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=collab-logicsims"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                id="collab-logicsims-link"
              >
                Propose a Domain Model <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Area 2: Institutional & Classroom Pilots */}
        <Reveal delay={150}>
          <section className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-4 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                <School className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                2. Classroom & Sandbox Pilots
              </h2>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Are you a forward-thinking college professor, department head, or academy lead willing to experiment with discovery-based learning in your classroom?
            </p>

            <div className="text-xs text-foreground-700 space-y-1 bg-background-50 p-4 rounded-2xl border border-foreground-100">
              <p className="font-semibold text-foreground-950 font-mono text-xs uppercase tracking-wider">How you can contribute:</p>
              <p className="text-foreground-600 text-sm leading-relaxed">
                Run active learning trials using LogicSims prototypes with your student cohorts and share empirical feedback, student debugging observations, and learning curve telemetry.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=collab-pilot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs"
                id="collab-pilot-link"
              >
                Inquire to Run a Pilot <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Area 3: Research & Systems Analysis */}
        <Reveal delay={200}>
          <section className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-4 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                <Microscope className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                3. Research & Systems Exploration
              </h2>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Investigating questions around Indian technical education outcomes, developing nation technology adoption, and human agency in the age of AI.
            </p>

            <div className="text-xs text-foreground-700 space-y-1 bg-background-50 p-4 rounded-2xl border border-foreground-100">
              <p className="font-semibold text-foreground-950 font-mono text-xs uppercase tracking-wider">How you can contribute:</p>
              <p className="text-foreground-600 text-sm leading-relaxed">
                Share empirical datasets, co-investigate case studies, or provide constructive critical critique on published essays.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=collab-research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                id="collab-research-link"
              >
                Start a Research Discussion <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Direct Contact Flow */}
      <Reveal delay={250}>
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-900/40 text-white space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
            Have a Different Idea for Collaboration?
          </h3>
          <p className="text-sm text-foreground-300 leading-relaxed max-w-xl">
            If your perspective or project intersects with this mission in a way not listed above, reach out directly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=collab-general"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

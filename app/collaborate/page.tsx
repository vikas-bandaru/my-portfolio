import Link from "next/link";
import { ArrowRight, Compass, Layers, School, Microscope } from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Collaborate (Participate in the Mission) — Vikas Bandaru",
  description:
    "Non-transactional mission participation: contribute domain variables to LogicSims, pilot discovery simulations in classrooms, or co-author systems research.",
};

export default function CollaboratePage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Mission Participation"
        badgeDotColor="bg-primary-400"
        title="Collaborate on the Mission"
        titleHighlight="— Open Systems"
        description="Changing how people learn, think, and solve real-world problems is not a solo endeavor. Here are concrete ways domain experts, educators, and researchers can participate."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "03", label: "Open Pathways" },
          { value: "100%", label: "Mission-Driven" },
          { value: "Open", label: "Empirical Feedback" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Non-Transactional Distinction Banner */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Non-Transactional Collaboration
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              Shared Research &amp; Open Domain Modeling
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              If you are looking to hire Vikas for training, consulting, or speaking, visit{" "}
              <Link href="/work" className="text-primary-700 font-semibold underline hover:text-primary-900">
                Work With Me
              </Link>
              . This page is dedicated to open mission participation, research, and shared experiments.
            </p>
          </div>
        </Reveal>

        {/* 3 Collaboration Tracks */}
        <div className="grid grid-cols-1 gap-8">
          {/* Area 1: LogicSims Domain Modeling */}
          <Reveal delay={80}>
            <section className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-primary-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">Track 01</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-primary-600 transition-colors">
                    1. LogicSims &amp; Domain Modeling
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                LogicSims will eventually expand beyond software engineering into complex real-world domains such as agriculture, public transit, supply chains, and local economics.
              </p>

              <div className="p-6 rounded-2xl bg-background-100/70 border border-background-200 space-y-1.5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-950">How you can contribute:</p>
                <p className="text-foreground-700 text-xs sm:text-sm leading-relaxed font-light">
                  If you are a domain specialist (agronomist, urban planner, economist, engineer), help extract variables, map constraints, and define real-world state machines for new simulation nodes.
                </p>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=collab-logicsims"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                  id="collab-logicsims-link"
                >
                  <span>Propose a Domain Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Area 2: Institutional & Classroom Pilots */}
          <Reveal delay={120}>
            <section className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-semibold block">Track 02</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-emerald-700 transition-colors">
                    2. Classroom &amp; Sandbox Pilots
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Are you a forward-thinking college professor, department head, or academy lead willing to experiment with discovery-based learning in your classroom?
              </p>

              <div className="p-6 rounded-2xl bg-background-100/70 border border-background-200 space-y-1.5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-950">How you can contribute:</p>
                <p className="text-foreground-700 text-xs sm:text-sm leading-relaxed font-light">
                  Run active learning trials using LogicSims prototypes with your student cohorts and share empirical feedback, student debugging observations, and learning curve telemetry.
                </p>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=collab-pilot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs"
                  id="collab-pilot-link"
                >
                  <span>Inquire to Run a Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Area 3: Research & Systems Analysis */}
          <Reveal delay={160}>
            <section className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-purple-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center shrink-0">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold block">Track 03</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-purple-700 transition-colors">
                    3. Research &amp; Systems Exploration
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Investigating questions around Indian technical education outcomes, developing nation technology adoption, and human agency in the age of AI.
              </p>

              <div className="p-6 rounded-2xl bg-background-100/70 border border-background-200 space-y-1.5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-950">How you can contribute:</p>
                <p className="text-foreground-700 text-xs sm:text-sm leading-relaxed font-light">
                  Share empirical datasets, co-investigate case studies, or provide constructive critical critique on published essays.
                </p>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=collab-research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium text-xs hover:bg-purple-500 transition-all shadow-xs"
                  id="collab-research-link"
                >
                  <span>Start a Research Discussion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>
        </div>

        {/* Direct Contact Flow Card */}
        <Reveal delay={200}>
          <section className="relative rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-500/30 text-white p-8 sm:p-12 shadow-2xl space-y-6">
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight text-white">
              Have a Different Idea for Collaboration?
            </h3>
            <p className="text-sm sm:text-base text-foreground-200 leading-relaxed max-w-xl font-light">
              I am open to unexpected, high-signal conversations with educators, engineers, and researchers.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?intent=collab-other"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
                id="collab-other-link"
              >
                <span>Write to Vikas Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

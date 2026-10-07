import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GitBranch, GraduationCap, Search, ArrowRight, HeartHandshake } from "lucide-react";

export const collabPaths = [
  {
    icon: GitBranch,
    bubble: "bg-primary-100 text-primary-800",
    title: "LogicSims & Domain Modeling",
    intro:
      "LogicSims will eventually expand beyond software engineering into complex real-world domains such as agriculture, public transit, supply chains, and local economics.",
    contribute:
      "If you are a domain specialist (agronomist, urban planner, economist, engineer), help extract variables, map constraints, and define real-world state machines for new simulation nodes.",
    cta: "Propose a Domain Model",
    href: "/contact?intent=collab-logicsims",
  },
  {
    icon: GraduationCap,
    bubble: "bg-accent-100 text-accent-800",
    title: "Classroom & Sandbox Pilots",
    intro:
      "Are you a forward-thinking college professor, department head, or academy lead willing to experiment with discovery-based learning in your classroom?",
    contribute:
      "Run active learning trials using LogicSims prototypes with your student cohorts and share empirical feedback, student debugging observations, and learning curve telemetry.",
    cta: "Inquire to Run a Pilot",
    href: "/contact?intent=collab-pilot",
  },
  {
    icon: Search,
    bubble: "bg-secondary-100 text-secondary-800",
    title: "Research & Systems Exploration",
    intro:
      "Investigating questions around Indian technical education outcomes, developing nation technology adoption, and human agency in the age of AI.",
    contribute:
      "Share empirical datasets, co-investigate case studies, or provide constructive critical critique on published essays.",
    cta: "Start a Research Discussion",
    href: "/contact?intent=collab-research",
  },
];

export default function CollaborateSection() {
  return (
    <section id="collaborate" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 border border-primary-200 text-xs font-semibold text-primary-800">
              <HeartHandshake className="w-4 h-4" />
              Mission Participation
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl font-semibold text-foreground-950 tracking-tight leading-tight">
              Collaborate on the Mission
            </h2>
            <p className="mt-4 text-sm md:text-base text-foreground-700 leading-relaxed">
              Changing how people learn, think, and solve real-world problems is not a solo
              endeavor. Here are concrete ways domain experts, educators, and researchers can
              participate.
            </p>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-8 rounded-xl bg-secondary-50 border border-secondary-200 p-5 md:p-6">
            <p className="font-heading text-sm font-semibold text-foreground-950">
              Non-Transactional Collaboration
            </p>
            <p className="mt-1.5 text-sm text-foreground-700 leading-relaxed">
              If you are looking to hire Vikas for training, consulting, or speaking, visit{" "}
              <Link href="/work" className="text-primary-700 font-semibold underline">
                Work With Me
              </Link>
              . This section is dedicated to open mission participation, research, and shared
              experiments.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {collabPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={index * 100}>
                <article className="group h-full flex flex-col rounded-2xl border border-background-200 bg-background-50 p-6 md:p-7 transition-colors duration-300 hover:border-primary-400 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${path.bubble}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-foreground-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950 leading-snug">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{path.intro}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-foreground-900">How you can contribute:</p>
                    <p className="mt-1 text-sm text-foreground-600 leading-relaxed">
                      {path.contribute}
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <Link
                      href={path.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                    >
                      {path.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl bg-foreground-950 text-background-50 p-7 md:p-10 relative overflow-hidden shadow-sm">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-500/25 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight max-w-2xl leading-tight">
                Have a Different Idea for Collaboration?
              </h3>
              <p className="mt-3 text-sm md:text-base text-background-100/80 leading-relaxed max-w-xl">
                If your perspective or project intersects with this mission in a way not listed
                above, reach out directly.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-primary-600 shadow-xs"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

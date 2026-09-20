import Link from "next/link";
import { ArrowRight, ExternalLink, Layers, Cpu, ShieldCheck, Zap, Sparkles, GitBranch, RefreshCw } from "lucide-react";
import { MaturityBadge } from "@/components/MaturityBadge";

export const metadata = {
  title: "LogicSims & LogicSims Java — Discovery-Based Simulation Architecture | Vikas Bandaru",
  description:
    "LogicSims is a discovery-based learning architecture grounded in consequence and systems thinking. Explore LogicSims Java, the first live public prototype.",
};

export default function LogicSimsPage() {
  return (
    <div className="space-y-16 max-w-3xl">
      {/* Header & Tagline */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700">
            <Layers className="w-3.5 h-3.5 text-sky-700" />
            <span>Flagship Experiment</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Live Prototype
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
          LogicSims
        </h1>
        <p className="text-lg text-stone-600 font-medium leading-relaxed">
          A discovery-based learning architecture using logic as a first-principles operating system for understanding complex systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://logic-sims-java.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors shadow-xs"
            id="logicsims-launch-live-btn"
          >
            Try the Public Prototype (LogicSims Java) <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
            id="logicsims-collab-btn"
          >
            Collaborate on Domain Models
          </Link>
        </div>
      </header>

      {/* 1. THE FIRST EXPERIMENT: LOGICSIMS JAVA */}
      <section className="space-y-4 p-6 rounded-2xl bg-sky-50/60 border border-sky-200/80">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            The First Experiment
          </h2>
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-100 text-sky-900 border border-sky-300/80">
            Public Live Prototype
          </span>
        </div>

        <h3 className="text-xl font-bold text-stone-900">
          LogicSims Java — The First Practical Step
        </h3>

        <div className="prose-custom space-y-3 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p>
            Before the broader LogicSims architecture was fully articulated, I started with a simpler question: <em>what could programming education look like if learners could manipulate a system, observe what happens, and build mental models through interaction?</em>
          </p>
          <p>
            <strong>LogicSims Java</strong> is that first concrete experiment. It focuses directly on programming concepts, utilizing interactive simulations and visual state execution to let learners experience consequence-driven learning firsthand. It explores localized and personalized learning mechanics in the ways currently implemented.
          </p>
          <p className="text-xs text-stone-600 italic">
            Note: LogicSims Java is an early, focused prototype demonstrating part of this direction — it does not represent the complete, multi-domain LogicSims vision.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="https://logic-sims-java.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-800 text-white font-medium text-xs hover:bg-sky-900 transition-colors"
            id="logicsims-java-prototype-link"
          >
            Try the public prototype →
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 2. THE FEEDBACK LOOP: WHAT I AM LEARNING */}
      <section className="space-y-4 p-6 rounded-2xl bg-stone-100/70 border border-stone-200/80">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-sky-700" />
          <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            What I Am Learning From It
          </h2>
        </div>

        <div className="p-3 rounded-lg bg-white border border-stone-200 text-xs font-mono text-stone-700 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[520px]">
            <span>BUILD</span>
            <span className="text-stone-400">→</span>
            <span>PUT IN FRONT OF LEARNERS</span>
            <span className="text-stone-400">→</span>
            <span>OBSERVE</span>
            <span className="text-stone-400">→</span>
            <span>COLLECT FEEDBACK</span>
            <span className="text-stone-400">→</span>
            <span>REFLECT</span>
            <span className="text-stone-400">→</span>
            <span>IMPROVE</span>
          </div>
        </div>

        <div className="prose-custom space-y-3 text-stone-800 text-sm leading-relaxed">
          <p>
            A functioning prototype demonstrates that an idea has been implemented and can be experienced. It is now becoming part of an active empirical feedback loop.
          </p>
          <p>
            I am beginning to use the prototype in my online classes as a way to observe learner interaction and gather direct feedback. Seeing where students hesitate, which state representations clarify concepts, and where mental models break down provides real data that directly informs subsequent iterations.
          </p>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="space-y-4 p-6 rounded-2xl bg-white border border-stone-200">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-stone-500">
          The Underlying Problem
        </h2>
        <div className="prose-custom space-y-3 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p>
            Traditional technical education treats software engineering as an exercise in formula memorization. Students spend hundreds of hours memorizing syntax rules to pass multiple-choice exams, but when faced with an open-ended debugging challenge or asynchronous race condition, their mental models break down.
          </p>
          <p>
            Lectures tell students what should happen in ideal conditions. Production systems, however, are non-deterministic, constrained, and stateful. True competence requires developing an intuitive understanding of why systems behave the way they do through empirical interaction.
          </p>
        </div>
      </section>

      {/* 4. THE BROADER PHILOSOPHY (VISION) */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            Vision & Foundations
          </span>
          <h2 className="text-xl font-bold text-stone-900 mt-0.5">
            The Core Philosophy
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
              <Cpu className="w-4 h-4 text-sky-700" />
              Logic as a First-Principles OS
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every complex system — whether software runtime, economic market, or logistics network — can be deconstructed into variables, constraints, state transitions, and feedback loops.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
              <Zap className="w-4 h-4 text-amber-600" />
              Learning Through Consequence
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Instead of reading explanations, learners manipulate system variables and observe immediate consequences in a sandbox. The error message and state visualization become the teacher.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
              <GitBranch className="w-4 h-4 text-emerald-700" />
              Visual State Machines
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Replacing invisible execution buffers with interactive, step-by-step state machines so learners construct durable spatial mental models of execution flow.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              Proof of Work Validation
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Capability is proved by stress-testing student solutions against broken constraints and non-deterministic edge cases, rather than grading theoretical answers.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PEDAGOGICAL ARCHITECTURE (LONG-TERM DIRECTION) */}
      <section className="space-y-4">
        <div className="border-b border-stone-200 pb-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            Long-Term Direction
          </span>
          <h2 className="text-xl font-bold text-stone-900 mt-0.5">
            Pedagogical Architecture
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          The evolving LogicSims architecture organizes learning through a 4-tier progressive hierarchy moving from high-level system intuition down to low-level constraints:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900 text-sm">1. Macro Level (System Context)</div>
            <p>Understand the macro goals, boundaries, and overarching mechanics of the system as a whole.</p>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900 text-sm">2. Meso Level (Subsystem Interactions)</div>
            <p>Observe how discrete modules, buffers, and concurrent queues communicate and transfer state.</p>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900 text-sm">3. Micro Level (Variable Constraints)</div>
            <p>Directly manipulate variables, threshold triggers, and conditional logic to examine localized failure states.</p>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900 text-sm">4. Capstone Stress-Testing</div>
            <p>Validate mastery by diagnosing and fixing deliberately broken, noisy real-world scenarios under load.</p>
          </div>
        </div>
      </section>

      {/* 6. AI & HUMAN AGENCY (VISION) */}
      <section className="space-y-4 p-6 rounded-2xl bg-white border border-stone-200">
        <div className="flex items-center gap-2 font-bold text-stone-900 text-base">
          <Sparkles className="w-5 h-5 text-sky-700" />
          The Role of AI: Socratic Mentor & Auditor (Vision)
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          In the broader LogicSims vision, AI is never used as a simple answer generator. The goal is cognitive self-mastery. When a learner struggles, AI acts as a Socratic guide — asking diagnostic questions about the observed state transitions rather than producing copy-paste code.
        </p>
      </section>

      {/* 7. HONEST MATURITY BREAKDOWN */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Project Maturity & Roadmap
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Live Prototype */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-emerald-950 text-sm">Live Prototype: LogicSims Java</h3>
              <span className="inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs">
                Live Prototype
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              The first practical experiment is available to use. Functional interactive web prototype for programming logic and code simulation accessible live at{" "}
              <a
                href="https://logic-sims-java.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-800 font-semibold underline"
              >
                logic-sims-java.vercel.app
              </a>
              .
            </p>
          </div>

          {/* Building */}
          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-amber-950 text-sm">Building: Feedback Integration & Engine Generalization</h3>
              <MaturityBadge status="building" />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Gathering learner observations from online classes, refining simulation mechanics, generalizing underlying state machine visualizers, and structuring Socratic guidance routines.
            </p>
          </div>

          {/* Vision */}
          <div className="p-5 rounded-xl border border-stone-300 bg-stone-50 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-950 text-sm">Long-Term Vision: Multi-Domain Systems Architecture</h3>
              <MaturityBadge status="vision" />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Expanding simulation-based learning beyond programming to model complex real-world domains such as agriculture, public transit systems, local economics, and supply chain constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 rounded-2xl bg-stone-900 text-white space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          Explore the Prototype or Collaborate
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
          Try the live LogicSims Java prototype online today, or connect to collaborate on pedagogical research and real-world system modeling.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://logic-sims-java.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-stone-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
            id="logicsims-bottom-launch-btn"
          >
            Explore LogicSims Java Prototype <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-700 text-stone-200 font-medium text-xs hover:bg-stone-800 transition-colors"
          >
            Collaborate on Simulations
          </Link>
        </div>
      </section>
    </div>
  );
}

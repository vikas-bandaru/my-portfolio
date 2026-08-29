import Link from "next/link";
import { ArrowRight, ExternalLink, Layers, Cpu, ShieldCheck, Zap, Sparkles, GitBranch, Terminal } from "lucide-react";
import { MaturityBadge } from "@/components/MaturityBadge";

export const metadata = {
  title: "LogicSims — First-Principles Simulation Environment | Vikas Bandaru",
  description:
    "Replacing passive lectures with interactive, consequence-driven simulations. A discovery-based learning architecture built from first principles.",
};

export default function LogicSimsPage() {
  return (
    <div className="space-y-16 max-w-3xl">
      {/* Header & Tagline */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700">
            <Layers className="w-3.5 h-3.5 text-sky-700" />
            <span>Flagship Learning Environment</span>
          </div>
          <MaturityBadge status="live" size="md" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
          LogicSims
        </h1>
        <p className="text-lg text-stone-600 font-medium leading-relaxed">
          A discovery-based learning platform using logic as a first-principles operating system for understanding complex systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://logicsims.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors shadow-xs"
            id="logicsims-launch-live-btn"
          >
            Launch Live Prototype <ExternalLink className="w-4 h-4" />
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

      {/* 1. THE PROBLEM */}
      <section className="space-y-4 p-6 rounded-2xl bg-stone-100/70 border border-stone-200/80">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
          The Problem It Addresses
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

      {/* 2. THE CORE PHILOSOPHY */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          The Core Philosophy
        </h2>

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

      {/* 3. PEDAGOGICAL ARCHITECTURE */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Pedagogical Architecture
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          LogicSims organizes learning through a 4-tier progressive hierarchy that moves from high-level system intuition down to low-level constraints:
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

      {/* 4. AI & HUMAN AGENCY */}
      <section className="space-y-4 p-6 rounded-2xl bg-white border border-stone-200">
        <div className="flex items-center gap-2 font-bold text-stone-900 text-base">
          <Sparkles className="w-5 h-5 text-sky-700" />
          The Role of AI: Socratic Mentor & Auditor
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          In LogicSims, AI is never used as a simple answer generator. The goal is cognitive self-mastery. When a learner struggles, AI acts as a Socratic guide — asking diagnostic questions about the observed state transitions rather than producing copy-paste code.
        </p>
      </section>

      {/* 5. HONEST MATURITY BREAKDOWN */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Project Maturity & Roadmap
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Live */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-emerald-950 text-sm">Currently Live (Existing Prototype)</h3>
              <MaturityBadge status="live" />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Functional interactive web prototype for programming logic and asynchronous JavaScript state tracing accessible live at <a href="https://logicsims.com" target="_blank" rel="noopener noreferrer" className="text-sky-800 font-semibold underline">logicsims.com</a>.
            </p>
          </div>

          {/* Building */}
          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-amber-950 text-sm">Currently Being Built (In Development)</h3>
              <MaturityBadge status="building" />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Generalizing the underlying constraint-mapping engine, expanding state machine visualizers, and refining Socratic auditing routines.
            </p>
          </div>

          {/* Vision */}
          <div className="p-5 rounded-xl border border-stone-300 bg-stone-50 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-950 text-sm">Long-Term Vision (Future Expansion)</h3>
              <MaturityBadge status="vision" />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Expanding the simulation architecture beyond programming to model complex real-world domains such as agriculture, public transit systems, local economics, and supply chain constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 rounded-2xl bg-stone-900 text-white space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          Experience LogicSims or Collaborate
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
          Test the interactive proof of concept online today, or join as a domain contributor to help model real-world system constraints.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://logicsims.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-stone-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
          >
            Launch logicsims.com <ExternalLink className="w-3.5 h-3.5" />
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

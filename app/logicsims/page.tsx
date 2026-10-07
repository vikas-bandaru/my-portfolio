import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
  GitBranch,
  RefreshCw,
} from "lucide-react";
import { MaturityBadge } from "@/components/MaturityBadge";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "LogicSims & LogicSims Java — Discovery-Based Simulation Architecture | Vikas Bandaru",
  description:
    "LogicSims is a discovery-based learning architecture grounded in consequence and systems thinking. Explore LogicSims Java, the first live public prototype.",
};

export default function LogicSimsPage() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      {/* Header */}
      <Reveal>
        <PageHeader
          eyebrow="Flagship Architecture"
          eyebrowIcon={<Layers className="w-3.5 h-3.5 text-primary-600" />}
          badge={
            <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-0.5 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Prototype
            </span>
          }
          title="LogicSims"
          description="A discovery-based learning architecture using logic as a first-principles operating system for understanding complex systems."
        >
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-sm hover:bg-primary-600 transition-all shadow-xs"
              id="logicsims-launch-live-btn"
            >
              Try Prototype (LogicSims Java) <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-200 bg-white/80 text-foreground-800 font-medium text-sm hover:bg-background-100 transition-all"
              id="logicsims-collab-btn"
            >
              Collaborate on Domain Models
            </Link>
          </div>
        </PageHeader>
      </Reveal>

      {/* 1. THE FIRST EXPERIMENT: LOGICSIMS JAVA */}
      <Reveal delay={100}>
        <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-50/70 via-white/80 to-background-100/50 border border-primary-200/70 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-800">
              The First Experiment
            </span>
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
              Public Live Prototype
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="space-y-3 flex-1">
              <h2 className="font-serif text-2xl font-normal text-foreground-950 tracking-tight">
                LogicSims Java — The First Practical Step
              </h2>
              <div className="space-y-3 text-foreground-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Before the broader LogicSims architecture was fully articulated, I started with a simpler question:{" "}
                  <em>what could programming education look like if learners could manipulate a system, observe what happens, and build mental models through interaction?</em>
                </p>
                <p>
                  <strong>LogicSims Java</strong> is that first concrete experiment. It focuses directly on programming concepts, utilizing interactive simulations and visual state execution to let learners experience consequence-driven learning firsthand. It explores localized and personalized learning mechanics in the ways currently implemented.
                </p>
                <p className="text-xs text-foreground-500 italic">
                  Note: LogicSims Java is an early, focused prototype demonstrating part of this direction — it does not represent the complete, multi-domain LogicSims vision.
                </p>
              </div>
            </div>

            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border border-foreground-200/60 bg-white shadow-xs self-center sm:self-start">
              <Image
                src="/images/editorial/build-logicsims.webp"
                alt="LogicSims State Machine Engine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium text-xs shadow-xs transition-all"
              id="logicsims-java-prototype-link"
            >
              Try the public prototype →
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </Reveal>

      {/* 2. THE FEEDBACK LOOP: WHAT I AM LEARNING */}
      <Reveal delay={150}>
        <section className="space-y-4 p-6 sm:p-7 rounded-3xl bg-white/90 border border-foreground-100 shadow-xs">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-primary-600" />
            <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-800">
              What I Am Learning From It
            </h2>
          </div>

          <div className="p-3.5 rounded-2xl bg-background-50 border border-foreground-100/80 text-xs font-mono text-foreground-700 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[560px] font-semibold text-[11px]">
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60">BUILD</span>
              <span className="text-foreground-400">→</span>
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60">PUT IN FRONT OF LEARNERS</span>
              <span className="text-foreground-400">→</span>
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60">OBSERVE</span>
              <span className="text-foreground-400">→</span>
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60">COLLECT FEEDBACK</span>
              <span className="text-foreground-400">→</span>
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60">REFLECT</span>
              <span className="text-foreground-400">→</span>
              <span className="px-2 py-1 rounded bg-white border border-foreground-200/60 text-primary-700">IMPROVE</span>
            </div>
          </div>

          <div className="space-y-3 text-foreground-700 text-sm leading-relaxed">
            <p>
              A functioning prototype demonstrates that an idea has been implemented and can be experienced. It is now becoming part of an active empirical feedback loop.
            </p>
            <p>
              I am beginning to use the prototype in my online classes as a way to observe learner interaction and gather direct feedback. Seeing where students hesitate, which state representations clarify concepts, and where mental models break down provides real data that directly informs subsequent iterations.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 3. THE PROBLEM */}
      <Reveal delay={200}>
        <section className="space-y-4 p-6 sm:p-7 rounded-3xl bg-white/90 border border-foreground-100 shadow-xs">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground-500">
            The Underlying Problem
          </span>
          <h2 className="font-serif text-2xl font-normal text-foreground-950 tracking-tight">
            Why Rote Syntax Fails Real-World Engineering
          </h2>
          <div className="space-y-3 text-foreground-700 text-sm sm:text-base leading-relaxed">
            <p>
              Traditional technical education treats software engineering as an exercise in formula memorization. Students spend hundreds of hours memorizing syntax rules to pass multiple-choice exams, but when faced with an open-ended debugging challenge or asynchronous race condition, their mental models break down.
            </p>
            <p>
              Lectures tell students what should happen in ideal conditions. Production systems, however, are non-deterministic, constrained, and stateful. True competence requires developing an intuitive understanding of why systems behave the way they do through empirical interaction.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 4. THE BROADER PHILOSOPHY (VISION) */}
      <Reveal delay={250}>
        <section className="space-y-6">
          <div className="border-b border-foreground-100 pb-3">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-700">
              Vision & Foundations
            </span>
            <h2 className="font-serif text-2xl font-normal text-foreground-950 mt-1">
              The Core Philosophy
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-2xl border border-foreground-100 bg-white/90 shadow-xs space-y-2.5 hover:border-primary-300 transition-all">
              <div className="flex items-center gap-2 font-semibold text-foreground-950 text-sm">
                <Cpu className="w-4 h-4 text-primary-600" />
                Logic as a First-Principles OS
              </div>
              <p className="text-xs text-foreground-600 leading-relaxed">
                Every complex system — whether software runtime, economic market, or logistics network — can be deconstructed into variables, constraints, state transitions, and feedback loops.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-foreground-100 bg-white/90 shadow-xs space-y-2.5 hover:border-primary-300 transition-all">
              <div className="flex items-center gap-2 font-semibold text-foreground-950 text-sm">
                <Zap className="w-4 h-4 text-amber-600" />
                Learning Through Consequence
              </div>
              <p className="text-xs text-foreground-600 leading-relaxed">
                Instead of reading explanations, learners manipulate system variables and observe immediate consequences in a sandbox. The error message and state visualization become the teacher.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-foreground-100 bg-white/90 shadow-xs space-y-2.5 hover:border-primary-300 transition-all">
              <div className="flex items-center gap-2 font-semibold text-foreground-950 text-sm">
                <GitBranch className="w-4 h-4 text-emerald-600" />
                Visual State Machines
              </div>
              <p className="text-xs text-foreground-600 leading-relaxed">
                Replacing invisible execution buffers with interactive, step-by-step state machines so learners construct durable spatial mental models of execution flow.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-foreground-100 bg-white/90 shadow-xs space-y-2.5 hover:border-primary-300 transition-all">
              <div className="flex items-center gap-2 font-semibold text-foreground-950 text-sm">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                Proof of Work Validation
              </div>
              <p className="text-xs text-foreground-600 leading-relaxed">
                Capability is proved by stress-testing student solutions against broken constraints and non-deterministic edge cases, rather than grading theoretical answers.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. PEDAGOGICAL ARCHITECTURE */}
      <Reveal delay={300}>
        <section className="space-y-4">
          <div className="border-b border-foreground-100 pb-3">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-700">
              Long-Term Direction
            </span>
            <h2 className="font-serif text-2xl font-normal text-foreground-950 mt-1">
              Pedagogical Architecture
            </h2>
          </div>
          <p className="text-sm text-foreground-600 leading-relaxed">
            The evolving LogicSims architecture organizes learning through a 4-tier progressive hierarchy moving from high-level system intuition down to low-level constraints:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-5 rounded-2xl bg-white/90 border border-foreground-100 shadow-xs text-xs text-foreground-700 space-y-1">
              <div className="font-semibold text-foreground-950 text-sm">1. Macro Level (System Context)</div>
              <p className="leading-relaxed">Understand the macro goals, boundaries, and overarching mechanics of the system as a whole.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-foreground-100 shadow-xs text-xs text-foreground-700 space-y-1">
              <div className="font-semibold text-foreground-950 text-sm">2. Meso Level (Subsystem Interactions)</div>
              <p className="leading-relaxed">Observe how discrete modules, buffers, and concurrent queues communicate and transfer state.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-foreground-100 shadow-xs text-xs text-foreground-700 space-y-1">
              <div className="font-semibold text-foreground-950 text-sm">3. Micro Level (Variable Constraints)</div>
              <p className="leading-relaxed">Directly manipulate variables, threshold triggers, and conditional logic to examine localized failure states.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-foreground-100 shadow-xs text-xs text-foreground-700 space-y-1">
              <div className="font-semibold text-foreground-950 text-sm">4. Capstone Stress-Testing</div>
              <p className="leading-relaxed">Validate mastery by diagnosing and fixing deliberately broken, noisy real-world scenarios under load.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. AI & HUMAN AGENCY */}
      <Reveal delay={350}>
        <section className="space-y-4 p-6 sm:p-7 rounded-3xl bg-white/90 border border-foreground-100 shadow-xs">
          <div className="flex items-center gap-2 font-serif text-xl font-normal text-foreground-950">
            <Sparkles className="w-5 h-5 text-primary-600" />
            The Role of AI: Socratic Mentor & Auditor (Vision)
          </div>
          <p className="text-sm text-foreground-600 leading-relaxed">
            In the broader LogicSims vision, AI is never used as a simple answer generator. The goal is cognitive self-mastery. When a learner struggles, AI acts as a Socratic guide — asking diagnostic questions about the observed state transitions rather than producing copy-paste code.
          </p>
        </section>
      </Reveal>

      {/* 7. HONEST MATURITY BREAKDOWN */}
      <Reveal delay={400}>
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
            Project Maturity & Roadmap
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Live Prototype */}
            <div className="p-6 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-emerald-950 text-sm">Live Prototype: LogicSims Java</h3>
                <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Prototype
                </span>
              </div>
              <p className="text-foreground-700 leading-relaxed">
                The first practical experiment is available to use. Functional interactive web prototype for programming logic and code simulation accessible live at{" "}
                <a
                  href="https://logic-sims-java.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-800 font-semibold underline"
                >
                  logic-sims-java.vercel.app
                </a>
                .
              </p>
            </div>

            {/* Building */}
            <div className="p-6 rounded-2xl border border-amber-200/80 bg-amber-50/40 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-amber-950 text-sm">Building: Feedback Integration & Engine Generalization</h3>
                <MaturityBadge status="building" />
              </div>
              <p className="text-foreground-700 leading-relaxed">
                Gathering learner observations from online classes, refining simulation mechanics, generalizing underlying state machine visualizers, and structuring Socratic guidance routines.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl border border-foreground-200/60 bg-white/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground-950 text-sm">Long-Term Vision: Multi-Domain Systems Architecture</h3>
                <MaturityBadge status="vision" />
              </div>
              <p className="text-foreground-700 leading-relaxed">
                Expanding simulation-based learning beyond programming to model complex real-world domains such as agriculture, public transit systems, local economics, and supply chain constraints.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Call to Action */}
      <Reveal delay={450}>
        <section className="p-8 rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-900/40 text-white space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
            Explore the Prototype or Collaborate
          </h3>
          <p className="text-sm text-foreground-300 leading-relaxed max-w-xl">
            Try the live LogicSims Java prototype online today, or connect to collaborate on pedagogical research and real-world system modeling.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
              id="logicsims-bottom-launch-btn"
            >
              Explore LogicSims Java Prototype <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-700 text-foreground-200 font-medium text-xs hover:bg-foreground-900/80 transition-all"
            >
              Collaborate on Simulations
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

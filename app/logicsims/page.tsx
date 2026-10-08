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
  CheckCircle2,
} from "lucide-react";
import { MaturityBadge } from "@/components/MaturityBadge";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "LogicSims & LogicSims Java — Discovery-Based Simulation Architecture | Vikas Bandaru",
  description:
    "LogicSims is a discovery-based learning architecture grounded in consequence and systems thinking. Explore LogicSims Java, the first live public prototype.",
};

export default function LogicSimsPage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Flagship Architecture"
        badgeDotColor="bg-emerald-400"
        title="LogicSims"
        titleHighlight="&amp; LogicSims Java"
        description="A discovery-based learning architecture using logic as a first-principles operating system for understanding complex systems — moving past passive lectures toward consequence-driven mental modeling."
        bgImage="/images/editorial/build-logicsims.webp"
        stats={[
          { value: "01", label: "Live Java Simulator" },
          { value: "04", label: "Pedagogical Tiers" },
          { value: "01", label: "Active Feedback Loop" },
        ]}
      >
        <div className="flex flex-wrap gap-4 pt-3">
          <a
            href="https://logic-sims-java.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
            id="logicsims-launch-live-btn"
          >
            <span>Try Prototype (LogicSims Java)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background-50/20 bg-background-50/10 text-background-50 font-medium text-xs hover:bg-background-50/20 transition-all backdrop-blur-sm"
            id="logicsims-collab-btn"
          >
            <span>Collaborate on Domain Models</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </EditorialSubpageHero>

      {/* Main Content Body */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* 1. THE FIRST EXPERIMENT: LOGICSIMS JAVA */}
        <Reveal>
          <section className="relative rounded-3xl bg-gradient-to-br from-primary-950 via-[#0a1b30] to-foreground-950 border border-primary-500/40 text-white p-7 sm:p-10 md:p-12 shadow-xl overflow-hidden group">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-300">
                The First Experiment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-700/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Public Live Prototype
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pt-6">
              <div className="space-y-4 flex-1">
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                  LogicSims Java — The First Practical Step
                </h2>
                <div className="space-y-4 text-foreground-200/90 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Before the broader LogicSims architecture was fully articulated, I started with a simpler question:{" "}
                    <em className="text-white font-normal">what could programming education look like if learners could manipulate a system, observe what happens, and build mental models through interaction?</em>
                  </p>
                  <p>
                    <strong className="text-white font-medium">LogicSims Java</strong> is that first concrete experiment. It focuses directly on programming concepts, utilizing interactive simulations and visual state execution to let learners experience consequence-driven learning firsthand. It explores localized and personalized learning mechanics in the ways currently implemented.
                  </p>
                  <p className="text-xs text-foreground-400 italic">
                    Note: LogicSims Java is an early, focused prototype demonstrating part of this direction — it does not represent the complete, multi-domain LogicSims vision.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="https://logic-sims-java.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-400 text-white font-medium text-xs shadow-md transition-all"
                    id="logicsims-java-prototype-link"
                  >
                    <span>Launch the Public Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative w-full sm:w-64 h-48 sm:h-52 lg:w-72 lg:h-56 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-xl self-stretch lg:self-center">
                <Image
                  src="/images/editorial/build-logicsims.webp"
                  alt="LogicSims State Machine Engine"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* 2. THE FEEDBACK LOOP: WHAT I AM LEARNING */}
        <Reveal delay={100}>
          <section className="space-y-6 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary-600" />
              <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-800">
                What I Am Learning From It
              </h2>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-background-200 text-xs font-mono text-foreground-700 overflow-x-auto shadow-xs">
              <div className="flex items-center justify-between min-w-[560px] font-semibold text-[11px]">
                <span className="px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">BUILD</span>
                <span className="text-foreground-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">PUT IN FRONT OF LEARNERS</span>
                <span className="text-foreground-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">OBSERVE</span>
                <span className="text-foreground-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">COLLECT FEEDBACK</span>
                <span className="text-foreground-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">REFLECT</span>
                <span className="text-foreground-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-primary-50 border border-primary-200 text-primary-700 font-bold">IMPROVE</span>
              </div>
            </div>

            <div className="space-y-3 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                A functioning prototype demonstrates that an idea has been implemented and can be experienced. It is now becoming part of an active empirical feedback loop.
              </p>
              <p>
                I am beginning to use the prototype in my online classes as a way to observe learner interaction and gather direct feedback. Seeing where students hesitate, which state representations clarify concepts, and where mental models break down provides real data that directly informs subsequent iterations.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 3. THE UNDERLYING PROBLEM */}
        <Reveal delay={150}>
          <section className="space-y-4 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground-500">
              The Underlying Problem
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 tracking-tight">
              Why Rote Syntax Fails Real-World Engineering
            </h2>
            <div className="space-y-4 text-foreground-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Traditional technical education treats software engineering as an exercise in formula memorization. Students spend hundreds of hours memorizing syntax rules to pass multiple-choice exams, but when faced with an open-ended debugging challenge or asynchronous race condition, their mental models break down.
              </p>
              <p>
                Lectures tell students what should happen in ideal conditions. Production systems, however, are non-deterministic, constrained, and stateful. True competence requires developing an intuitive understanding of why systems behave the way they do through empirical interaction.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 4. THE BROADER PHILOSOPHY & COGNITIVE LEARNING THEORY */}
        <Reveal delay={200}>
          <section className="space-y-8">
            <div className="border-b border-background-200 pb-4">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                Cognitive Theory &amp; Foundations
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                Pedagogical &amp; Epistemic Architecture
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-7 rounded-3xl border border-background-200 bg-background-50/80 shadow-xs space-y-3 hover:border-primary-400/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 font-heading font-semibold text-foreground-950 text-base">
                  <Cpu className="w-5 h-5 text-primary-600" />
                  Macro: Meaningful Reception (Ausubel DAG)
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Linear lecture sequences assume tabula rasa minds. LogicSims structures curricula as a Directed Acyclic Graph (DAG) of cognitive anchors. Advanced organizers bridge prior mental schema to new abstractions, activating intrinsic structural anchors before introducing code.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-background-200 bg-background-50/80 shadow-xs space-y-3 hover:border-primary-400/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 font-heading font-semibold text-foreground-950 text-base">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Meso: Experiential Learning (Kolb Cycle)
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Learners move systematically through four cyclical quadrants: Concrete Experience (stress-testing state) → Reflective Observation (inspecting execution telemetry) → Abstract Conceptualization (synthesizing invariants) → Active Experimentation (refactoring under load).
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-background-200 bg-background-50/80 shadow-xs space-y-3 hover:border-primary-400/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 font-heading font-semibold text-foreground-950 text-base">
                  <GitBranch className="w-5 h-5 text-emerald-600" />
                  Micro: Dual-Coding State Machines (Paivio)
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Replacing invisible heap and stack buffers with synchronized verbal syntax and nonverbal spatial state representations. By activating verbal and visual cognitive channels simultaneously without cross-talk overload, learners build durable spatial mental models.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-background-200 bg-background-50/80 shadow-xs space-y-3 hover:border-primary-400/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 font-heading font-semibold text-foreground-950 text-base">
                  <ShieldCheck className="w-5 h-5 text-purple-600" />
                  Authentic Proof of Work for the Mind
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  When LLMs write synthetic code effortlessly, paper diplomas and LeetCode ranks lose all epistemic credibility. Mastery is proven through interactive diagnostic telemetry, architectural post-mortems, and edge-case survival under chaotic state injection.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 5. PLATFORM ENGINE & STRUCTURAL WORKFLOW */}
        <Reveal delay={250}>
          <section className="space-y-6">
            <div className="border-b border-background-200 pb-4">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-600 block">
                Platform Architecture
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                The 4 Operational Engine Layers
              </h2>
            </div>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
              While the cognitive foundations define <em>how the mind learns</em>, the LogicSims engine implements a concrete, gated product workflow that moves the learner from initial orientation to public construction:
            </p>

            <div className="grid gap-4 pt-2">
              {[
                {
                  tier: "Layer 01",
                  title: "Macro Shelf: The Knowledge Graph (Directed Acyclic Graph)",
                  desc: "Instead of a flat catalog or endless linear video playlists, subjects live on a navigable Knowledge Graph. Learners see explicit prerequisite paths, understanding where a domain sits in their mental roadmap before taking their first step.",
                  badge: "Navigation & Scope"
                },
                {
                  tier: "Layer 02",
                  title: "Meso Orchestrator: The Gated Progression Loop",
                  desc: "Within each module, progression follows a strict, locked sequence: Brief (relevance) → Real-World App (context) → Simulator (discovery) → Logic Synthesis (formalization) → Diagnostic Challenge. Locking later stages prevents the cognitive overwhelm that causes students to abandon difficult concepts.",
                  badge: "Scaffolded Progression"
                },
                {
                  tier: "Layer 03",
                  title: "Micro Sandbox: Interactive Simulator & Live Code Mind",
                  desc: "The dual-surface interaction layer. On the left, an interactive visual canvas lets learners manipulate physical system variables, thresholds, and queues. On the right, 'Code Mind' synchronizes execution state in real time, turning invisible memory into tangible cause-and-effect.",
                  badge: "Interactive Core"
                },
                {
                  tier: "Layer 04",
                  title: "Capstone Studio: Emergent Synthesis & Constructionist Portfolios",
                  desc: "Mastery does not end with multiple-choice quizzes. The engine tracks mastered logic patterns (e.g. loops + state buffers + pointers) and generates an Emergent Synthesis Project. Learners build and export a verifiable, interactive public portfolio asset proving hands-on capability.",
                  badge: "Proof of Competence"
                },
              ].map((layer, idx) => (
                <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-background-50/80 border border-background-200 shadow-xs space-y-2 hover:border-primary-400/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-primary-700 font-semibold">
                      {layer.tier}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 font-mono text-[10px] font-medium">
                      {layer.badge}
                    </span>
                  </div>
                  <div className="font-heading font-semibold text-foreground-950 text-base sm:text-lg">
                    {layer.title}
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* 6. AI & HUMAN AGENCY: SOCRATIC COMPANION CORE */}
        <Reveal delay={300}>
          <section className="space-y-4 p-7 sm:p-9 md:p-10 rounded-3xl bg-background-50/80 border border-background-200 shadow-xs">
            <div className="flex items-center gap-2 font-heading font-semibold text-xl text-foreground-950">
              <Sparkles className="w-5 h-5 text-primary-600" />
              The Socratic Companion Core &amp; Assessment Isolation Governor
            </div>
            <div className="space-y-3 text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
              <p>
                In the LogicSims architecture, artificial intelligence is deliberately constrained from functioning as an automated code generator or answer dispenser. To prevent epistemic dependency and cognitive atrophy, the Socratic Companion Core operates strictly as an inquisitive diagnostician.
              </p>
              <p>
                When a student encounters a runtime contradiction or invalid state, the system asks probing questions about observed variable transitions rather than suggesting solutions. During formal evaluation, the Assessment Isolation Governor disconnects auto-completion entirely, verifying that the human mind retains genuine diagnostic mastery.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 7. HONEST MATURITY BREAKDOWN */}
        <Reveal delay={350}>
          <section className="space-y-6">
            <div className="border-b border-background-200 pb-4">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground-500 block">
                Roadmap
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                Project Maturity &amp; Roadmap
              </h2>
            </div>

            <div className="space-y-5">
              {/* Live Prototype */}
              <div className="p-7 rounded-3xl border border-emerald-300/80 bg-emerald-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-emerald-950 text-base">Live Prototype: LogicSims Java</h3>
                  <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 px-3 py-0.5 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Prototype
                  </span>
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed font-light">
                  The first practical experiment is available to use. Functional interactive web prototype for programming logic and code simulation accessible live at{" "}
                  <a
                    href="https://logic-sims-java.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 font-semibold underline hover:text-primary-900"
                  >
                    logic-sims-java.vercel.app
                  </a>
                  .
                </p>
              </div>

              {/* Building */}
              <div className="p-7 rounded-3xl border border-amber-300/80 bg-amber-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-amber-950 text-base">Building: Feedback Integration &amp; Engine Generalization</h3>
                  <MaturityBadge status="building" />
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed font-light">
                  Gathering learner observations from online classes, refining simulation mechanics, generalizing underlying state machine visualizers, and structuring Socratic guidance routines.
                </p>
              </div>

              {/* Vision */}
              <div className="p-7 rounded-3xl border border-background-200 bg-background-50/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground-950 text-base">Long-Term Vision: Multi-Domain Systems Architecture</h3>
                  <MaturityBadge status="vision" />
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed font-light">
                  Expanding simulation-based learning beyond programming to model complex real-world domains such as agriculture, public transit systems, local economics, and supply chain constraints.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Bottom Call to Action */}
        <Reveal delay={400}>
          <section className="relative rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-500/30 text-white p-8 sm:p-12 shadow-2xl space-y-6">
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight text-white">
              Explore the Prototype or Collaborate
            </h3>
            <p className="text-sm sm:text-base text-foreground-200 leading-relaxed max-w-xl font-light">
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
                <span>Explore LogicSims Java Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-700 bg-white/5 text-foreground-200 font-medium text-xs hover:bg-white/10 hover:text-white transition-all"
              >
                <span>Collaborate on Simulations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


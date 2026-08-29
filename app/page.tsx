"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Play, Sparkles, Cpu, Layers, Users, Briefcase, Compass } from "lucide-react";
import { getIdeas, getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";

export default function HomePage() {
  const [learningMode, setLearningMode] = useState<"rote" | "discovery">("discovery");

  const featuredIdeas = getIdeas().slice(0, 3);
  const featuredBuilds = getBuilds();

  return (
    <div className="space-y-20">
      {/* 1. THE CLAIM (HERO) */}
      <section className="space-y-6 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700">
          <Sparkles className="w-3.5 h-3.5 text-sky-700" />
          <span>Independent Learning Architect & Builder</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]">
          Degrees test memory. <br />
          <span className="text-sky-800">Building solves real problems.</span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 font-medium leading-relaxed max-w-2xl">
          Exploring how people develop the capability to solve complex real-world problems through technology — while grounding learning in consequences, public impact, and human agency.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/logicsims"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors shadow-xs"
            id="hero-cta-logicsims"
          >
            Explore LogicSims (Live Proof)
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
            id="hero-cta-ideas"
          >
            Read Ideas & Essays
          </Link>
        </div>
      </section>

      {/* 2. THE EVIDENCE (CREDIBILITY & INTERACTIVE MOMENT) */}
      <section className="space-y-6">
        <div className="p-8 rounded-2xl bg-stone-100/70 border border-stone-200/80 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            The Evidence & The Problem
          </h2>
          <div className="prose-custom space-y-3 text-stone-800">
            <p>
              Over a decade spent teaching in engineering education and managing technical training programs revealed a recurring structural failure: graduates routinely score top marks on theoretical exams, yet struggle to debug an asynchronous failure or build a functional software system.
            </p>
            <p>
              When learning happens in isolated subject silos, students memorize abstract syntax without forming conceptual mental models. Real reform requires shifting from passive recall to empirical consequence — where building things makes learning meaningful, and employment becomes a natural byproduct of genuine capability.
            </p>
          </div>
        </div>

        {/* Interactive Proof: Discovery vs Rote Simulator */}
        <div className="border border-stone-200 rounded-xl p-6 bg-white shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Pedagogical Comparison: Rote vs. Consequence-Driven Discovery
              </h3>
              <p className="text-xs text-stone-500">
                Toggle below to see how learning through consequence builds durable engineering intuition.
              </p>
            </div>

            <div
              className="inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200 self-start sm:self-auto"
              role="tablist"
              aria-label="Learning Approach Switcher"
            >
              <button
                onClick={() => setLearningMode("rote")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  learningMode === "rote"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-500 hover:text-stone-900"
                }`}
                role="tab"
                aria-selected={learningMode === "rote"}
                id="mode-rote-tab"
              >
                Rote Instruction
              </button>
              <button
                onClick={() => setLearningMode("discovery")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  learningMode === "discovery"
                    ? "bg-sky-700 text-white shadow-xs"
                    : "text-stone-500 hover:text-stone-900"
                }`}
                role="tab"
                aria-selected={learningMode === "discovery"}
                id="mode-discovery-tab"
              >
                Discovery Simulator
              </button>
            </div>
          </div>

          <div className="pt-2">
            {learningMode === "rote" ? (
              <div className="space-y-3 p-4 bg-amber-50/50 border border-amber-200/60 rounded-lg text-sm">
                <div className="flex items-center gap-2 text-amber-900 font-semibold">
                  <XCircle className="w-4 h-4 text-amber-600" />
                  Conventional Rote Method (Formula Recall)
                </div>
                <p className="text-stone-700 text-xs sm:text-sm">
                  <strong>Instruction:</strong> "Memorize this syntax block and answer 5 multiple-choice questions on loop states for the exam."
                </p>
                <p className="text-stone-600 text-xs italic">
                  <strong>Outcome:</strong> High score on the scorecard, zero ability to diagnose a runtime error in production next month.
                </p>
              </div>
            ) : (
              <div className="space-y-3 p-4 bg-sky-50/50 border border-sky-200/60 rounded-lg text-sm">
                <div className="flex items-center gap-2 text-sky-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  Discovery Method (LogicSims Consequence Engine)
                </div>
                <p className="text-stone-700 text-xs sm:text-sm">
                  <strong>Simulation:</strong> "Here is a live state machine dropping 15% of packets. Manipulate the event loop buffer and observe where execution starves."
                </p>
                <p className="text-stone-600 text-xs italic">
                  <strong>Outcome:</strong> Deep mental model of state transitions, empirical debugging intuition, and transferable problem-solving confidence.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. THE THINKING (OPERATING LOOP & WORKING DRAFTS) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
              The Operating Loop
            </h2>
            <h3 className="text-xl font-bold text-stone-900 mt-1">
              Ideas, Systems & Research
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Working notes and exploratory pieces in development as the body of work expands.
            </p>
          </div>
          <Link
            href="/ideas"
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            id="home-all-ideas-link"
          >
            Explore All Ideas <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* The Thinking Loop Visual Bar */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/90 text-xs text-stone-600 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[550px] font-mono text-[11px] text-stone-700">
            <span>OBSERVE</span>
            <span className="text-stone-400">→</span>
            <span>TRANSLATE</span>
            <span className="text-stone-400">→</span>
            <span>CONNECT</span>
            <span className="text-stone-400">→</span>
            <span>QUESTION</span>
            <span className="text-stone-400">→</span>
            <span>IMAGINE</span>
            <span className="text-stone-400">→</span>
            <span>EXPERIMENT</span>
            <span className="text-stone-400">→</span>
            <span>BUILD</span>
            <span className="text-stone-400">→</span>
            <span>SHARE</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featuredIdeas.map((idea) => (
            <article
              key={idea.slug}
              className="p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-semibold text-sky-700 uppercase tracking-wider">
                    {idea.category}
                  </span>
                  <span>{idea.readTime}</span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm group-hover:text-sky-700 transition-colors leading-snug">
                  <Link href={`/ideas/${idea.slug}`}>{idea.title}</Link>
                </h4>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {idea.excerpt}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href={`/ideas/${idea.slug}`}
                  className="text-xs font-semibold text-sky-700 inline-flex items-center gap-1 group-hover:underline"
                >
                  Read Essay <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. THE BUILDING (FLAGSHIP: LOGICSIMS & LIVING BUILDS) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
              The Body of Work
            </h2>
            <h3 className="text-xl font-bold text-stone-900 mt-1">
              Building, Platforms & Experiments
            </h3>
          </div>
          <Link
            href="/builds"
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            id="home-all-builds-link"
          >
            View All Builds <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Flagship Feature: LogicSims */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 text-white space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-300">
                Flagship Project
              </span>
            </div>
            <MaturityBadge status="live" className="bg-emerald-950/80 text-emerald-300 border-emerald-800" />
          </div>

          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              LogicSims — Discovery-Based Simulation Environment
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Logic as a first-principles operating system for complexity. Designed to replace passive lectures with interactive, consequence-driven simulations where learners manipulate variables, observe constraints, and master systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/logicsims"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-stone-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
              id="home-logicsims-deepdive-btn"
            >
              Deep Dive into LogicSims Architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://logicsims.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-700 text-stone-200 font-medium text-xs hover:bg-stone-800 transition-colors"
              id="home-logicsims-external-btn"
            >
              Launch Live Simulator
            </a>
          </div>
        </div>

        {/* Other Real Builds */}
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredBuilds.map((build) => (
            <div
              key={build.slug}
              className="p-5 rounded-xl border border-stone-200 bg-white space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    {build.category}
                  </span>
                  <MaturityBadge status={build.status} />
                </div>
                <h4 className="font-bold text-stone-900 text-base">
                  <Link href={`/builds/${build.slug}`} className="hover:text-sky-700 transition-colors">
                    {build.title}
                  </Link>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {build.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {build.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-stone-100 rounded text-[10px] text-stone-600 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE SHARING (WATCH: TWO CHANNELS, TWO PURPOSES) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
              Video & Public Thinking
            </h2>
            <h3 className="text-xl font-bold text-stone-900 mt-1">
              Two Channels, Two Distinct Roles
            </h3>
          </div>
          <Link
            href="/watch"
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            id="home-watch-hub-link"
          >
            Explore Video Hub <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Channel 1: Official */}
          <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-semibold">
                Translate + Legitimize
              </div>
              <h4 className="font-bold text-stone-900 text-base">
                Vikas Bandaru (Official Channel)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Broader systems thinking, Indian education policy, future of work, AI-washing critique, and what developing nations can build for their own conditions.
              </p>
              <p className="text-[11px] text-stone-500 italic">
                Audience: Educators, decision-makers, parents, and systems thinkers.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://www.youtube.com/@VikasBandaruOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                id="home-yt-official-link"
              >
                Visit Official Channel <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 2: Tech */}
          <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                Enable + Implement
              </div>
              <h4 className="font-bold text-stone-900 text-base">
                Vikas Bandaru Tech1
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Technical how-tos, programming breakdowns, Salesforce/Agentforce implementation, LogicSims engine development, and build-in-public logs.
              </p>
              <p className="text-[11px] text-stone-500 italic">
                Audience: Software engineers, aspiring builders, and hands-on developers.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://www.youtube.com/@VikasBandaruTech1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                id="home-yt-tech-link"
              >
                Visit Tech Channel <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE INVITATION (ENGAGE WITH VIKAS: TWO PATHWAYS) */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-sky-800">
            Next Steps & Engagement
          </h2>
          <h3 className="text-xl font-bold text-stone-900 mt-1">
            Two Ways to Engage
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Pathway A: Work With Me */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/70 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">
                Work With Me (Paid Engagements)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Legitimate professional services: technical mentorship, faculty development workshops, full-stack web application engineering, and keynotes.
              </p>
            </div>
            <div className="pt-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                id="home-pathway-work-link"
              >
                Explore Professional Tracks <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pathway B: Collaborate */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/70 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">
                Collaborate (Mission Participation)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Non-transactional avenues: contribute domain variables to LogicSims, run experimental active learning pilots in your institution, or explore research questions.
              </p>
            </div>
            <div className="pt-3">
              <Link
                href="/collaborate"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950"
                id="home-pathway-collab-link"
              >
                Join the Mission <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

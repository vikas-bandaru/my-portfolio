"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Play } from "lucide-react";

export default function HomePage() {
  const [learningMode, setLearningMode] = useState<"rote" | "discovery">("discovery");

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]">
          Degrees test memory. <br />
          <span className="text-sky-700">Building solves real problems.</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 font-medium leading-relaxed max-w-2xl">
          11 years in engineering education. Now building tools, training educators, and teaching upcoming developers to learn by doing.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://logicsims.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors shadow-sm"
            id="hero-cta-logicsims"
          >
            Explore LogicSims (Proof of Concept)
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
            id="hero-cta-essays"
          >
            Read Education Reform Essays
          </Link>
        </div>
      </section>

      {/* Core Mission Statement */}
      <section className="p-8 rounded-2xl bg-stone-100/70 border border-stone-200/80 space-y-4">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-sky-800">
          The Mission
        </h2>
        <div className="prose-custom space-y-4 text-stone-800">
          <p>
            In Indian technical education, we’ve optimized for test scores at the expense of genuine capability. Engineering graduates enter the industry with high marks on paper, yet struggle to build software or solve open-ended problems.
          </p>
          <p>
            Real reform isn’t about adding more slides or harder exams. It’s about shifting the goalpost: making hands-on problem solving the primary way people learn, so employment becomes a natural byproduct of capability, not the single obsessive objective.
          </p>
          <p>
            I built <strong>LogicSims</strong> as a proof of concept for discovery-based learning. But fixing technical education isn't a one-man job or a single commercial product. This site is where I share the evidence, the curriculum, and the lessons from 11 years in classroom academia and technical training management — for anyone who wants to build better ways to teach and learn.
          </p>
        </div>
      </section>

      {/* Single Restrained Interactive Element: Discovery vs Rote Simulator */}
      <section className="space-y-4 border border-stone-200 rounded-xl p-6 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              Interactive Moment: Learning Approach Comparison
            </h2>
            <p className="text-xs text-stone-500">
              Toggle between conventional rote instruction and discovery-based learning to see the shift in outcome.
            </p>
          </div>

          <div
            className="inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200 self-start sm:self-auto"
            role="tablist"
            aria-label="Learning Mode Switcher"
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
              Rote-Based Problem
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

        <div className="pt-4 border-t border-stone-100">
          {learningMode === "rote" ? (
            <div className="space-y-3 p-4 bg-amber-50/50 border border-amber-200/60 rounded-lg text-sm">
              <div className="flex items-center gap-2 text-amber-800 font-semibold">
                <XCircle className="w-4 h-4 text-amber-600" />
                Conventional Rote Approach
              </div>
              <p className="text-stone-700">
                <strong>Instruction:</strong> "Memorize this 20-line syntax block and answer 5 multiple-choice questions on loop syntax for the exam."
              </p>
              <p className="text-stone-600 text-xs italic">
                <strong>Student Outcome:</strong> High score on Friday, zero ability to write a working function next month.
              </p>
            </div>
          ) : (
            <div className="space-y-3 p-4 bg-sky-50/50 border border-sky-200/60 rounded-lg text-sm">
              <div className="flex items-center gap-2 text-sky-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                Discovery-Based Approach (LogicSims Method)
              </div>
              <p className="text-stone-700">
                <strong>Simulation:</strong> "Here is a broken network request handler. Debug why 15% of packets drop by tracing the event loop in real time."
              </p>
              <p className="text-stone-600 text-xs italic">
                <strong>Student Outcome:</strong> Deep mental model of asynchronous execution, debugging confidence, and transferable engineering intuition.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Flagship Teaching Clip Block */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-stone-900">
          Flagship Teaching Breakdown
        </h2>
        <div className="relative aspect-video rounded-xl bg-stone-900 overflow-hidden flex items-center justify-center border border-stone-800 group shadow-md">
          <div className="absolute inset-0 bg-stone-950/40 flex flex-col justify-end p-6 text-white z-10">
            <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Featured Lesson
            </span>
            <h3 className="text-lg font-bold">
              Deconstructing Async JS & Event Loop Mental Models
            </h3>
            <p className="text-xs text-stone-300">
              YouTube Channel • Practical breakdown for Indian developers
            </p>
          </div>

          <a
            href="https://www.youtube.com/@VikasBandaruTech1"
            target="_blank"
            rel="noopener noreferrer"
            className="z-20 w-16 h-16 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg"
            id="featured-video-play-btn"
            aria-label="Play Featured Teaching Breakdown Video"
          >
            <Play className="w-7 h-7 fill-current translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Section Snapshots Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-stone-900">
          Explore the Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/about"
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors group"
            id="card-about"
          >
            <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors flex items-center justify-between">
              About Vikas
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-sky-700 transition-colors" />
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              From 7 years as Assistant Professor in academia to training management & independent software development.
            </p>
          </Link>

          <Link
            href="/blog"
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors group"
            id="card-blog"
          >
            <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors flex items-center justify-between">
              Education Essays
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-sky-700 transition-colors" />
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Articles and essays on Indian education reform, curriculum design, and discovery learning.
            </p>
          </Link>

          <Link
            href="/teaching"
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors group"
            id="card-teaching"
          >
            <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors flex items-center justify-between">
              Teaching & YouTube
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-sky-700 transition-colors" />
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Featured YouTube coding breakdowns, plus Train-the-Student & Train-the-Trainer consulting.
            </p>
          </Link>

          <Link
            href="/consulting"
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors group"
            id="card-consulting"
          >
            <h3 className="font-bold text-stone-900 group-hover:text-sky-700 transition-colors flex items-center justify-between">
              Dev & Salesforce Consulting
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-sky-700 transition-colors" />
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Salesforce Certified App Builder / Platform Developer I expertise, plus recent client web dev work.
            </p>
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="p-8 rounded-2xl bg-stone-900 text-white space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Join the Conversation
        </h2>
        <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
          Whether you’re an educator looking to upgrade classroom capability or a developer tired of surface-level tutorials, let’s build practical alternatives to rote learning together.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 text-stone-950 font-semibold text-sm hover:bg-sky-400 transition-colors"
            id="cta-join"
          >
            Get in Touch / Subscribe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

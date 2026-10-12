"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  QrCode,
  ArrowRight,
  GraduationCap,
  X,
  ExternalLink,
} from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";
import ServiceTestimonials from "@/components/ServiceTestimonials";

// WhatsApp Contact Configuration
const WHATSAPP_PHONE = "918096990227";
const WHATSAPP_PREFILLED_MESSAGE =
  "Hello, I am interested in joining the 4-week AI-Assisted Frontend Foundations Cohort (Build & Explain). Could you please share details on upcoming cohort start dates, batch timings, and enrolment?";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

// High-resolution API QR Code generator pointing to the prefilled WhatsApp link
const WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(
  WHATSAPP_LINK
)}`;

export default function FrontendFoundationsPage() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Live Small-Group Cohort"
        badgeDotColor="bg-emerald-400"
        title="AI-Assisted Frontend Foundations:"
        titleHighlight="Build &amp; Explain"
        description="Learn HTML, CSS, Bootstrap, and JavaScript through daily guided coding, real projects, and small AI-assisted experiments. Practise generating, checking, debugging, and improving code instead of simply prompting for a website."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "04", label: "Weeks Duration" },
          { value: "30", label: "Guided Hours" },
          { value: "₹3,999", label: "Fee Per Student" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Cohort Stance Callout Banner */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Pedagogical Stance
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              Build with AI. Understand the code.
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              Designed for engineering and CS undergraduates balancing college coursework.
              Move beyond one-shot prompt generation into deep understanding of semantic structure,
              cascade, DOM interactions, and disciplined verification.
            </p>
          </div>
        </Reveal>

        {/* Overview & Quick Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <Reveal delay={60}>
            <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 space-y-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
                    Cohort Structure
                  </span>
                  <h2 className="font-heading font-semibold text-2xl text-foreground-950">
                    Live Daily Practice, Monday to Friday
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Sessions combine concept explanations, code demonstrations, active programming time,
                and live debugging. You learn from shared questions and real friction while getting
                direct feedback from the instructor.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "Daily Session", value: "90 Mins" },
                  { label: "Frequency", value: "5 Days / Wk" },
                  { label: "Total Sessions", value: "20 Live" },
                  { label: "Cohort Size", value: "10-15 Max" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-background-200 bg-background-100/60 text-center space-y-1"
                  >
                    <div className="font-heading font-bold text-lg text-foreground-950">
                      {item.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-foreground-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs with Mobile / Desktop WhatsApp handling */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-all shadow-xs"
                  id="cohort-hero-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-background-300 bg-background-50 hover:bg-background-100 text-foreground-800 font-medium text-xs transition-all shadow-xs cursor-pointer"
                  title="Scan QR on Desktop to chat on Mobile"
                >
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scan QR on Mobile</span>
                </button>

                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background-300 text-foreground-700 font-medium text-xs hover:bg-background-100 transition-all"
                >
                  <span>View Curriculum</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pricing Card */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-primary-200/80 bg-background-50 p-7 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <div className="font-heading text-4xl font-bold text-foreground-950">
                  ₹3,999
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">
                  Per Student · Proposed Cohort Fee
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                {[
                  "4 weeks of live small-group coaching",
                  "20 weekday sessions × 90 minutes",
                  "2 guided mini-projects & 1 capstone project",
                  "3 integrated AI-assisted experiments",
                  "Entry diagnostic & live code verification",
                  "AI prompt toolkits & interview practice guides",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 space-y-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-background-200 bg-background-100/60 text-foreground-700 text-[11px] font-mono hover:bg-background-200 transition-all cursor-pointer"
                >
                  <QrCode className="w-3 h-3 text-emerald-600" />
                  <span>On Desktop? Scan QR code</span>
                </button>
              </div>

              <p className="text-[11px] text-foreground-500 leading-relaxed">
                * No job guarantee or placement promise. Built for durable technical foundations.
              </p>
            </div>
          </Reveal>
        </div>

        {/* The 3 Core Outcomes */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Core Capabilities
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Move Beyond Passive Tutorials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "HTML & CSS",
                title: "Structure & Style",
                desc: "Semantic HTML5, cascade, box model, Flexbox, Grid, and mobile-first responsive layout techniques.",
              },
              {
                tag: "Bootstrap",
                title: "Responsive Frameworks",
                desc: "Harness Bootstrap's grid system, navbars, cards, and modal components while understanding the underlying CSS mechanics.",
              },
              {
                tag: "JavaScript + AI",
                title: "Interaction & Logic",
                desc: "DOM manipulation, events, form validation, and using AI coding assistants as skeptical, verified pair programmers.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-3 shadow-xs hover:border-primary-400/50 transition-all">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-50 text-primary-700 border border-primary-200/60">
                    {card.tag}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    {card.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Projects Progression */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Project Portfolio
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Three Projects, Increasing Independence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Mini-Project 01",
                title: "Personal Profile Webpage",
                desc: "Practise semantic page architecture, internal links, image handling, typography, and pure CSS styling foundations.",
              },
              {
                tag: "Mini-Project 02",
                title: "Responsive Landing Page",
                desc: "Recreate a provided production UI using Flexbox, media query breakpoints, and Bootstrap components.",
              },
              {
                tag: "Capstone",
                title: "Interactive Business Website",
                desc: "Build a multi-section responsive web app with navigation, interactive modals, and client-side form validation.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-3 shadow-xs">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {item.tag}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4-Week Syllabus */}
        <div id="curriculum" className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Curriculum Roadmap
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Four Weeks of Focused Mastery
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                week: "Week 01",
                title: "HTML & CSS Foundations",
                desc: "Semantic structure, hyperlinks, image assets, forms, selectors, the cascade, box model, typography, and spacing. Hands-on build: Personal Profile Webpage.",
              },
              {
                week: "Week 02",
                title: "Responsive Design & Bootstrap",
                desc: "Flexbox layouts, mobile-first design, responsive breakpoints, Bootstrap grid systems, components, and utility classes. Hands-on build: Responsive Landing Page.",
              },
              {
                week: "Week 03",
                title: "JavaScript & DOM Interaction",
                desc: "Variables, conditionals, loops, functions, arrays, objects, DOM query selectors, event handlers, and input validation. Hands-on build: Interactive Task-List & Validator.",
              },
              {
                week: "Week 04",
                title: "Capstone, AI Iteration & Live Code Defense",
                desc: "Complete the interactive business website. Incorporate AI-guided incremental enhancements, inspect code diffs, debug errors, and defend implementation choices.",
              },
            ].map((w, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="p-6 sm:p-7 rounded-2xl border border-background-200 bg-background-50/80 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-xs hover:border-primary-400/40 transition-colors">
                  <div className="w-24 shrink-0 font-mono text-sm font-bold uppercase tracking-wider text-primary-700">
                    {w.week}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground-950">
                      {w.title}
                    </h3>
                    <p className="text-sm text-foreground-600 leading-relaxed font-light">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* AI-Assisted Experiments */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              AI Methodology
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              AI as an Assistant: Not an Authority
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              AI experiments are integrated into the 30 scheduled hours. We use free tools (Gemini, Claude, ChatGPT) to develop critical inspection habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "Experiment 01",
                title: "Generate, Then Evaluate",
                desc: "Prompt an LLM to generate a component. Scrutinize the result line-by-line against semantics, responsive behavior, and accessibility.",
              },
              {
                num: "Experiment 02",
                title: "Debug AI-Generated Code",
                desc: "Inspect flawed generated snippets. Reproduce issues, form hypotheses, use browser devtools, test fixes, and explain the root cause.",
              },
              {
                num: "Experiment 03",
                title: "Improve with Evidence",
                desc: "Prompt AI for performance or CSS improvements on your capstone. Review trade-offs, test in the browser, and reject flawed suggestions.",
              },
            ].map((exp, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-3 shadow-xs">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-50 text-primary-700 border border-primary-200/60">
                    {exp.num}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Common Questions
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Before You Join
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Can I join with other students?",
                a: "Yes. This is a small-group coaching program. Students learn together and work through guided practical tasks in the same scheduled weekday sessions.",
              },
              {
                q: "Do I need prior coding experience?",
                a: "Professional experience is not required. Basic computer familiarity and a willingness to commit 90 daily minutes to practice are expected. A brief entry diagnostic establishes starting calibration.",
              },
              {
                q: "Will I receive individual coaching for all 30 hours?",
                a: "No. The 30 hours consist of live group instruction, demos, and guided debugging. Guidance is provided to learners within the group context, not 30 hours of 1-on-1 private tutoring.",
              },
              {
                q: "Will I learn React or backend development?",
                a: "No. The program deliberately focuses on HTML, CSS, Bootstrap, and vanilla JavaScript foundations. React, backend APIs, server setup, and databases are outside this cohort's scope.",
              },
              {
                q: "Are session recordings included?",
                a: "No. Live presence and active coding during the 90 minutes are core to the pedagogical model. Recordings are excluded from the standard fee.",
              },
              {
                q: "Will this guarantee an internship or job?",
                a: "No. The program builds genuine, demonstrable frontend competence and problem-solving habits. Employment and hiring outcomes depend on external factors and are never guaranteed.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 rounded-2xl border border-background-200 bg-background-50/80 transition-all shadow-xs"
              >
                <summary className="font-heading font-semibold text-base sm:text-lg text-foreground-950 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-foreground-500" />
                </summary>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed font-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Student Feedback & Testimonials */}
        <ServiceTestimonials
          serviceSlug="frontend-foundations"
          serviceTitle="AI-Assisted Frontend Foundations Cohort"
          badge="Verified Student Experiences"
          badgeTone="emerald"
        />

        {/* Contact CTA */}
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl border border-background-200 bg-primary-50/60 text-center space-y-6 shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Enrollment &amp; Inquiries
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-foreground-950">
                Ask About the Next Cohort
              </h2>
              <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light">
                Share your current learning level, college schedule, and semester goals.
                We will confirm whether the small-group format and upcoming cohort timing are a good fit.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp (+91 8096990227)</span>
              </a>

              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-background-300 bg-background-50 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all shadow-xs cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>Scan QR with Phone</span>
              </button>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-background-300 bg-background-50 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all shadow-xs"
              >
                <span>Back to Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-foreground-500 pt-2 font-mono">
              WhatsApp: +91 8096990227 · Email backup: vikas.bandaaru@gmail.com · Limited to 10–15 students per cohort
            </p>
          </div>
        </Reveal>
      </div>

      {/* Desktop QR Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-background-50 border border-background-200 p-6 sm:p-7 shadow-2xl text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-foreground-400 hover:text-foreground-700 hover:bg-background-200 transition-colors"
              aria-label="Close QR Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block">
                WhatsApp Quick Connect
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground-950 pt-1">
                Scan with your Phone
              </h3>
              <p className="text-xs text-foreground-600 leading-relaxed font-light">
                Point your phone camera to open WhatsApp directly with the pre-filled enquiry.
              </p>
            </div>

            {/* QR Image Container */}
            <div className="p-4 rounded-2xl bg-white border border-background-200 inline-block mx-auto shadow-inner">
              <img
                src={WHATSAPP_QR_URL}
                alt="Scan to Chat on WhatsApp"
                width={200}
                height={200}
                className="w-48 h-48 rounded-lg"
              />
            </div>

            <div className="space-y-2 pt-1">
              <p className="font-mono text-xs text-foreground-700 font-semibold">
                +91 8096990227
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:underline font-medium"
              >
                <span>Or open WhatsApp Web directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

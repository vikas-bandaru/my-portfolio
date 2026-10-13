"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  QrCode,
  ArrowRight,
  X,
  ExternalLink,
  Code2,
  Bug,
  Sparkles,
  Layers,
  Clock,
  Compass,
  Check,
  Users2,
  BookOpen,
  Copy,
  Laptop,
} from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";
import ServiceTestimonials from "@/components/ServiceTestimonials";

// WhatsApp Contact Configuration
const WHATSAPP_PHONE = "918096990227";
const WHATSAPP_DISPLAY_PHONE = "+91 8096990227";
const WHATSAPP_ENQUIRY_SUBJECT = "Frontend Foundations Coaching Enquiry";
const WHATSAPP_PREFILLED_MESSAGE =
  `Hello Vikas, I want to enquire about the 4-week Frontend Foundations Coaching program (${WHATSAPP_ENQUIRY_SUBJECT}). Could you please share the upcoming batch schedule, workload, and seat availability?`;

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

// High-resolution API QR Code generator pointing to the prefilled WhatsApp link
const WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=${encodeURIComponent(
  WHATSAPP_LINK
)}`;

export default function FrontendFoundationsPage() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Handle contact CTA clicks:
  // On desktop screens (>= 768px), show the QR modal with desktop WhatsApp option.
  // On mobile screens, open WhatsApp link directly.
  const handleContactClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      e.preventDefault();
      setShowQrModal(true);
    }
  };

  const handleCopyPhone = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(WHATSAPP_PHONE);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <EditorialSubpageHero
        badge="Live Small-Group Coaching"
        badgeDotColor="bg-emerald-400"
        title="Build Your First Responsive Websites:"
        titleHighlight="and Understand Every Important Decision."
        description="A four-week, live small-group coaching program for engineering students to learn HTML, CSS, Bootstrap 5, and JavaScript through guided practice, practical projects, debugging, and responsible AI assistance."
        bgImage="/images/cohorts/frontend-foundations/hero-student-coding.png"
        stats={[
          { value: "20", label: "Live Sessions" },
          { value: "30", label: "Hours of Coaching" },
          { value: "2 + 1", label: "2 Mini-Projects · 1 Capstone" },
          { value: "₹3,999", label: "Per Learner" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={WHATSAPP_LINK}
            onClick={handleContactClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-foreground-950 font-semibold text-xs tracking-wide transition-all shadow-md cursor-pointer"
            id="hero-apply-btn"
          >
            <MessageCircle className="w-4 h-4 text-foreground-950" />
            <span>Apply for the Next Cohort</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-background-50/25 bg-background-50/10 hover:bg-background-50/20 text-background-100 font-medium text-xs transition-all backdrop-blur-sm"
          >
            <span>View the Projects</span>
            <ChevronDown className="w-3.5 h-3.5 text-background-200" />
          </a>
        </div>
      </EditorialSubpageHero>

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-20">
        
        {/* Supporting Scope Bar */}
        <Reveal>
          <div className="p-6 sm:p-7 rounded-2xl bg-primary-50/80 border border-primary-200/70 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Structured Cohort Format
              </span>
              <p className="font-heading font-semibold text-lg sm:text-xl text-foreground-950">
                20 live sessions · 30 hours of coaching · 2 guided mini-projects · 1 interactive capstone
              </p>
              <p className="text-xs sm:text-sm text-foreground-600 font-light">
                Admission is by enquiry to calibrate your starting level and batch timings. Applying does not guarantee admission or a job outcome.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-primary-200 bg-background-50 text-foreground-800 font-mono text-xs hover:bg-primary-100/50 transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Scan QR on Mobile</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* 2. WHAT MAKES THIS DIFFERENT */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Teaching Philosophy
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Don&apos;t just generate code. Learn to judge it.
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-2 max-w-3xl">
              AI tools generate convincing code in seconds, but often hide broken mobile layouts, missing form labels, and messy HTML structure. In this program, AI is used as a helpful pair-programming assistant, not a shortcut that skips foundational thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 sm:p-8 space-y-4 shadow-xs hover:border-primary-300 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-200/60 flex items-center justify-center text-primary-700">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Build with guidance
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Work through the fundamentals hands-on instead of copying finished templates. You write the code step-by-step during live coding sessions to see how HTML, CSS, and JavaScript fit together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 sm:p-8 space-y-4 shadow-xs hover:border-primary-300 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
                  <Bug className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Debug with evidence
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Reproduce unexpected bugs, inspect elements in browser developer tools, check console warnings, test a fix, and explain why the solution works.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 sm:p-8 space-y-4 shadow-xs hover:border-primary-300 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Use AI critically
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Compare AI suggestions against your project requirements, official MDN documentation, and real browser behavior. Learn when to accept, tweak, or reject AI output.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. LEARNING OUTCOMES (DEMONSTRABLE CAPABILITIES) */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Practical Skills
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              What you should be able to do by the end
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              This program is designed to help you practise and demonstrate practical frontend skills, without making unrealistic claims of overnight mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Structure with semantic HTML",
                desc: "Write clean, accessible page layouts using standard HTML5 tags (header, nav, main, section, footer) with correct document hierarchy.",
              },
              {
                title: "Style and adapt responsive layouts",
                desc: "Create flexible layouts with CSS Flexbox, Grid, media queries, and Bootstrap 5 utilities that adapt smoothly to phones and laptops.",
              },
              {
                title: "Add basic DOM interactivity",
                desc: "Implement vanilla JavaScript logic, DOM querying, event handlers, and input validation states without unnecessary framework setup.",
              },
              {
                title: "Find and fix errors with DevTools",
                desc: "Identify layout overlap, box model spacing issues, and script errors using browser developer tools and console tabs.",
              },
              {
                title: "Check baseline accessibility",
                desc: "Review essential accessibility details including proper input labels, clear keyboard focus indicators, tap targets, and image alt text.",
              },
              {
                title: "Review AI code and explain decisions",
                desc: "Inspect AI-generated code carefully, verify that it runs as expected in the browser, and explain your technical choices clearly.",
              },
            ].map((outcome, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="p-5 sm:p-6 rounded-2xl border border-background-200 bg-background-50/80 flex items-start gap-4 shadow-xs hover:border-primary-300 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground-950">
                      {outcome.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. FOUR-WEEK LEARNING PATH */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Weekly Progression
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Four Weeks of Guided Progression
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              How the coaching moves progressively from foundations to independent technical explanation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                week: "Week 1",
                headline: "Build the foundations",
                workToward: "Semantic HTML, CSS fundamentals, box model, and building a responsive personal profile page.",
                focusTag: "HTML & CSS",
              },
              {
                week: "Week 2",
                headline: "Create responsive layouts",
                workToward: "Bootstrap 5 components, mobile-friendly design patterns, accessibility checks, and a business landing page.",
                focusTag: "Bootstrap 5",
              },
              {
                week: "Week 3",
                headline: "Make pages interactive",
                workToward: "JavaScript fundamentals, DOM manipulation, event listeners, form validation, and console debugging.",
                focusTag: "Vanilla JS",
              },
              {
                week: "Week 4",
                headline: "Build, test and explain",
                workToward: "An interactive business website capstone, browser testing, AI-assisted refinement, and project defence.",
                focusTag: "Capstone & Review",
              },
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="h-full rounded-2xl border border-background-200 bg-background-50/90 p-6 space-y-3 flex flex-col justify-between shadow-xs hover:border-primary-300 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary-700">
                        {step.week}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-background-100 text-foreground-600 border border-background-200">
                        {step.focusTag}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground-950">
                      {step.headline}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light border-t border-background-200 pt-3">
                    {step.workToward}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 5. PROJECT SECTION (THREE PROJECTS. INCREASING INDEPENDENCE) */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Project Milestones
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Three projects. Increasing independence.
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Two guided mini-projects and one comprehensive capstone project. Each milestone tests practical execution, debugging, and code explanation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Reveal delay={0}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 overflow-hidden flex flex-col shadow-xs hover:border-primary-300 transition-all">
                <div className="relative aspect-video w-full bg-background-200 border-b border-background-200 overflow-hidden group">
                  <Image
                    src="/images/cohorts/frontend-foundations/portfolio-ui-preview.png"
                    alt="Project 1: Personal Profile Webpage Preview"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background-900/80 text-background-50 font-mono text-[10px] backdrop-blur-xs">
                    Guided Mini-Project · W1
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold">
                        Project 01 · Week 1
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-foreground-950">
                        Personal Profile Webpage
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                      Build a structured personal webpage with semantic HTML, readable typography, CSS layout, and responsive mobile behavior.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-background-200/80 text-xs">
                      <div>
                        <strong className="text-foreground-900 font-medium">Learner demonstrates:</strong>
                        <p className="text-foreground-600 font-light mt-0.5">
                          Correct HTML structure, styling, mobile layout, alternative text, and an ability to evaluate an AI-generated draft.
                        </p>
                      </div>
                      <div className="pt-1 text-[11px] font-mono text-foreground-500">
                        Estimated effort: 6 to 7 hours (4.5 hours live coding across 3 sessions of 90 mins + 2 hours independent refinement).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Project 2 */}
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 overflow-hidden flex flex-col shadow-xs hover:border-primary-300 transition-all">
                <div className="relative aspect-video w-full bg-background-200 border-b border-background-200 overflow-hidden group">
                  <Image
                    src="/images/cohorts/frontend-foundations/responsive-preview.png"
                    alt="Project 2: Responsive Landing Page Preview"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background-900/80 text-background-50 font-mono text-[10px] backdrop-blur-xs">
                    Guided Mini-Project · W2
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold">
                        Project 02 · Week 2
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-foreground-950">
                        Responsive Landing Page
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                      Build a fictional business landing page with navigation, a hero section, content cards, a call to action, and a basic form interface.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-background-200/80 text-xs">
                      <div>
                        <strong className="text-foreground-900 font-medium">Learner demonstrates:</strong>
                        <p className="text-foreground-600 font-light mt-0.5">
                          Responsive CSS, Bootstrap components, sensible visual hierarchy, keyboard focus states, and basic quality checks.
                        </p>
                      </div>
                      <div className="pt-1 text-[11px] font-mono text-foreground-500">
                        Estimated effort: 7 to 8 hours (4.5 to 6 hours live coding across 3-4 sessions of 90 mins + 2.5 hours independent refinement). No backend or form submission.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Capstone with Clean Modern Workspace Image */}
            <Reveal delay={160}>
              <div className="h-full rounded-3xl border border-primary-300 bg-background-50/90 overflow-hidden flex flex-col shadow-sm hover:border-primary-400 transition-all">
                <div className="relative aspect-video w-full bg-background-900 border-b border-background-200 overflow-hidden group">
                  <Image
                    src="/images/cohorts/frontend-foundations/ai-workflow-editor.png"
                    alt="Capstone: Interactive Business Website Build Environment"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-primary-700 text-white font-mono text-[10px]">
                    Capstone Project · W3–W4
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">
                        Capstone · Weeks 3–4
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-foreground-950">
                        Interactive Business Website
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                      Build a multi-section service business website with responsive navigation, JavaScript interactions, basic form validation, and clear error or success feedback.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-background-200/80 text-xs">
                      <div>
                        <strong className="text-foreground-900 font-medium">Learner demonstrates:</strong>
                        <p className="text-foreground-600 font-light mt-0.5">
                          Requirements planning, functional JavaScript implementation, testing, debugging, AI-output verification, and technical explanation.
                        </p>
                      </div>
                      <div className="pt-1 text-[11px] font-mono text-foreground-500">
                        Estimated effort: 12 to 14 hours (7.5 to 9 hours live guided builds across 5-6 sessions of 90 mins + 4 to 5 hours independent practice and defence preparation). Backend, databases, auth, payments, APIs, and React are outside scope.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Secondary CTA: After the projects */}
          <div className="p-6 rounded-2xl bg-background-100/70 border border-background-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-heading font-semibold text-base text-foreground-950">
                Wondering whether your current background aligns with these milestones?
              </p>
              <p className="text-xs text-foreground-600 font-light">
                Have a quick conversation with Vikas to review your prerequisites and timings.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              onClick={handleContactClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground-950 hover:bg-foreground-800 text-background-50 font-medium text-xs transition-colors shrink-0 cursor-pointer"
              id="projects-cta-btn"
            >
              <span>See If This Course Fits Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* 6. AI-ASSISTED PRACTICE SECTION */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Integrated Experiments
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              AI is part of the workflow, not the answer key.
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-3xl">
              These three structured experiments happen directly inside the 20 scheduled live sessions. We use free, accessible AI models (such as Claude, ChatGPT, or Gemini) to teach critical inspection and verification. No paid subscriptions are required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 space-y-3 shadow-xs">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 border border-primary-200/60 inline-block">
                  Experiment 01
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Generate and evaluate
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Compare AI-generated code against a clear set of requirements. Spot where the model omitted alt attributes, invented non-standard classes, or missed mobile adaptations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 space-y-3 shadow-xs">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 inline-block">
                  Experiment 02
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Debug and investigate
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Examine a broken implementation intentionally injected with bugs. Form a hypothesis, reproduce the issue with DevTools, ask AI for a diagnostic, and check whether the suggested fix makes sense.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-3xl border border-background-200 bg-background-50/90 p-7 space-y-3 shadow-xs">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 inline-block">
                  Experiment 03
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground-950">
                  Improve and verify
                </h3>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Ask AI to propose a visual polish or cleaner CSS on your capstone project. Test the modification in your browser, check for layout issues, and explain why you accept or reject it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. TEACHING & SUPPORT MODEL */}
        <section className="rounded-3xl border border-background-200 bg-background-50/90 p-7 sm:p-10 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Cohort Format
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950">
              Small-group coaching, with practice built in.
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
              Unlike pre-recorded video libraries or crowded webinars, our pilot cohorts are capped at 5–8 learners. This ensures the instructor can observe your live work, help unblock bugs, and provide specific feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: "20 Live Weekday Sessions",
                desc: "90 minutes per session, Monday through Friday, across four weeks.",
              },
              {
                icon: Layers,
                title: "Live Guided Coding",
                desc: "Active programming time, demonstrations, and live debugging checkpoints instead of passive lectures.",
              },
              {
                icon: Users2,
                title: "Cohort Size: 5–8 Learners",
                desc: "Small pilot cohorts so every student can ask questions, share screen errors, and receive direct attention.",
              },
              {
                icon: Compass,
                title: "Milestone-Based Criteria",
                desc: "Clear evaluation rubrics for both mini-projects and the capstone to monitor your understanding.",
              },
              {
                icon: MessageCircle,
                title: "Group Doubt-Clearing",
                desc: "Collaborative problem-solving and instructor support during and between scheduled weekday sessions.",
              },
              {
                icon: BookOpen,
                title: "Cohort Hours vs. Practice",
                desc: "30 hours refers to live group coaching for the cohort. An estimated 30–45 mins of daily independent practice completes projects.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-5 rounded-2xl border border-background-200 bg-background-100/50 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground-950">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-foreground-600 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. INCLUDED LEARNING RESOURCES (AI TOOLKIT & TEMPLATES) */}
        <section className="space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Curated Materials
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Included Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Practical toolkits and prompt guides crafted to help you learn, debug, and explain code, without inflated bonus labels. Works with any free AI assistant you prefer.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-background-200 bg-background-50/90 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-background-100/80 border-b border-background-200 text-foreground-900 font-heading font-semibold">
                <tr>
                  <th className="py-3.5 px-5 sm:px-6 w-1/3">Included Resource</th>
                  <th className="py-3.5 px-5 sm:px-6">Benefit to the Learner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-background-200/70 font-light text-foreground-700">
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground-950">
                    Core AI Prompt Toolkit
                  </td>
                  <td className="py-3.5 px-5 sm:px-6">
                    Learn concepts through hints, targeted questions, and guided explanations instead of immediately receiving finished code.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground-950">
                    Debugging &amp; Code-Review Prompts
                  </td>
                  <td className="py-3.5 px-5 sm:px-6">
                    Investigate browser errors, question proposed fixes, and build a systematic test plan.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground-950">
                    Voice Interview Practice Prompts
                  </td>
                  <td className="py-3.5 px-5 sm:px-6">
                    Practise explaining code out loud, answering one technical question at a time, and handling follow-ups.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground-950">
                    Revision &amp; Self-Assessment Templates
                  </td>
                  <td className="py-3.5 px-5 sm:px-6">
                    Turn coding mistakes and identified weak areas into a targeted, actionable revision plan.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground-950">
                    Project Documentation &amp; Defence Guide
                  </td>
                  <td className="py-3.5 px-5 sm:px-6">
                    Prepare a clean GitHub README, document architectural decisions, and explain what was tested and what remains limited.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] font-mono text-foreground-500">
            * Note: Students can use compatible free tools (ChatGPT, Claude, Gemini). Paid AI subscriptions are not included or required.
          </p>
        </section>

        {/* 9. PRE-COURSE ASSESSMENT */}
        <section className="p-7 sm:p-9 rounded-3xl border border-primary-200/80 bg-primary-50/50 space-y-5 shadow-xs">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Personalized Calibration
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950">
              Start at your level, not someone else&apos;s.
            </h2>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light max-w-3xl">
              Before the first live session, you will complete a short assessment covering basic HTML, CSS, JavaScript reasoning, debugging, and how you evaluate AI-generated code. We use your results to identify gaps and decide where you need more guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-background-50/90 border border-primary-200/60 space-y-1">
              <span className="font-heading font-semibold text-foreground-950 text-sm block">
                ~30 Minutes
              </span>
              <p className="text-xs text-foreground-600 font-light">
                Approximately 30 minutes to complete at your own pace before session one.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background-50/90 border border-primary-200/60 space-y-1">
              <span className="font-heading font-semibold text-foreground-950 text-sm block">
                Diagnostic, Not an Exam
              </span>
              <p className="text-xs text-foreground-600 font-light">
                Designed to understand your starting point, not to rank or reject you.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background-50/90 border border-primary-200/60 space-y-1">
              <span className="font-heading font-semibold text-foreground-950 text-sm block">
                Guides Practice Pace
              </span>
              <p className="text-xs text-foreground-600 font-light">
                Reviewed to guide the amount of scaffolding and practice pace you need.
              </p>
            </div>
          </div>
        </section>

        {/* 10. EVIDENCE & POSITIONING (WHY THESE SKILLS MATTER) */}
        <section className="space-y-4">
          <details className="group rounded-3xl border border-background-200 bg-background-50/90 p-6 sm:p-8 transition-all shadow-xs">
            <summary className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950 cursor-pointer list-none flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
                  Industry Context
                </span>
                <span>Built around real frontend development expectations</span>
              </div>
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-foreground-500 shrink-0 ml-4" />
            </summary>

            <div className="pt-6 space-y-6 text-sm text-foreground-700 leading-relaxed font-light border-t border-background-200 mt-6">
              <p>
                We designed this curriculum around demonstrable technical capabilities rather than marketing buzzwords. Here is why foundational understanding, debugging, and verification matter:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-background-100/60 border border-background-200 space-y-2">
                  <div className="font-heading font-semibold text-foreground-950 text-base">
                    Frontend Fundamentals
                  </div>
                  <p className="text-xs text-foreground-600">
                    A frontend engineering apprenticeship listing from Neuron7.ai explicitly looks for semantic HTML, responsive layouts, vanilla JavaScript, DOM manipulation, and browser debugging.
                  </p>
                  <a
                    href="https://jobs.lever.co/neuron7/3e5b2afa-c8f0-4ad0-adea-34e7604773cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-700 hover:underline font-mono pt-1"
                  >
                    <span>View Neuron7.ai Listing</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-background-100/60 border border-background-200 space-y-2">
                  <div className="font-heading font-semibold text-foreground-950 text-base">
                    AI Demands Verification
                  </div>
                  <p className="text-xs text-foreground-600">
                    Stack Overflow&apos;s 2025 Developer Survey reports substantial AI-tool adoption alongside widespread developer concerns about code accuracy. Verification and debugging are now essential skills.
                  </p>
                  <a
                    href="https://survey.stackoverflow.co/2025/ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-700 hover:underline font-mono pt-1"
                  >
                    <span>Stack Overflow 2025 Survey</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-background-100/60 border border-background-200 space-y-2">
                  <div className="font-heading font-semibold text-foreground-950 text-base">
                    Accessibility is Standard
                  </div>
                  <p className="text-xs text-foreground-600">
                    MDN&apos;s Web Development core curriculum treats semantic elements, keyboard navigation, and contrast as essential baseline requirements for any web professional.
                  </p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-700 hover:underline font-mono pt-1"
                  >
                    <span>MDN Accessibility Guide</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-foreground-500 font-mono italic">
                * Note on scope: These citations reflect industry expectations and learning rationale, not a guarantee that every fresher job requires identical skills. Advanced topics such as Git, backend APIs, and React are outside this foundational course.
              </p>
            </div>
          </details>
        </section>

        {/* 11. PRICE & DETAILED OFFER SECTION */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Enrollment Investment
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Transparent Pricing &amp; Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <div className="rounded-3xl border border-primary-200 bg-background-50/95 p-7 sm:p-9 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-background-200 pb-5">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground-950">
                    Four weeks of guided frontend practice: ₹3,999
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-primary-700 font-semibold mt-1">
                    Small-group pilot cohort (5–8 students)
                  </p>
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-bold text-foreground-950">
                  ₹3,999
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-foreground-500 font-semibold block">
                  What is included:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "20 live group-coaching sessions (30 live hours)",
                    "Two guided mini-projects & one interactive capstone",
                    "Live guided coding, checkpoints & project feedback",
                    "Three AI-assisted experiments integrated into sessions",
                    "Pre-course diagnostic to calibrate starting point",
                    "AI prompt toolkit, revision templates & defence guides",
                  ].map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 border-t border-background-200 pt-5">
                <span className="font-mono text-xs uppercase tracking-wider text-foreground-500 font-semibold block">
                  Designed for:
                </span>
                <p className="text-xs sm:text-sm text-foreground-700 font-light">
                  Engineering students and beginners who want to build practical frontend foundations with live guidance, structured practice, and honest feedback.
                </p>
              </div>

              <div className="space-y-2 border-t border-background-200 pt-5 bg-background-100/50 p-4 rounded-xl">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-800 font-semibold block">
                  Explicitly not included:
                </span>
                <p className="text-xs text-foreground-600 font-light leading-relaxed">
                  Job or placement guarantees, individual 1-on-1 coaching, paid AI subscriptions, session recordings, or backend / full-stack frameworks (React, Node, databases).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  onClick={handleContactClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-all shadow-xs cursor-pointer"
                  id="pricing-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire About the Next Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-background-300 bg-background-50 hover:bg-background-100 text-foreground-800 font-medium text-xs transition-all cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scan Mobile QR</span>
                </button>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-5 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
                Next Steps
              </span>
              <h3 className="font-heading font-semibold text-lg text-foreground-950">
                Confirm fit before enrolling
              </h3>
              <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                Before accepting payment, we will confirm the schedule, cohort timing, practice expectations, and cohort size with you directly.
              </p>

              <div className="space-y-2 text-xs font-mono text-foreground-600 border-t border-background-200 pt-4">
                <div>• Cohort cap: 5–8 students</div>
                <div>• Timing: Weekday evenings (IST)</div>
                <div>• Prerequisite: Basic computer literacy</div>
                <div>• WhatsApp: +91 8096990227</div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <section className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Clear Expectations
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need prior coding experience?",
                a: "No prior programming experience is assumed. The course only requires basic computer literacy, a modern web browser, and an installed code editor (VS Code). Before session one, you will complete a 30-minute diagnostic so we can calibrate how much scaffolding you need.",
              },
              {
                q: "Will AI write all my code for me?",
                a: "No. You will write code by hand, investigate syntax errors, inspect DevTools, and verify runtime behavior. AI is used as a helpful teaching assistant for hints, debugging hypotheses, and code review, never as an auto-complete answer key.",
              },
              {
                q: "Will I build real projects?",
                a: "Yes: two guided mini-projects (a personal profile webpage and a responsive landing page) and one capstone (an interactive business website). These are educational portfolio projects built to demonstrate your technical reasoning, not production client contracts.",
              },
              {
                q: "Will this guarantee an internship or job?",
                a: "No. This program focuses entirely on building durable, demonstrable frontend foundations and debugging skills. We do not make misleading job placement promises.",
              },
              {
                q: "Are session recordings included?",
                a: "No, recordings are not included in the standard ₹3,999 package. The live format is designed around active participation, real-time code checkpoints, and immediate feedback during the 90 minutes.",
              },
              {
                q: "Does the course teach React or backend development?",
                a: "No. The focus is strictly on foundational HTML, CSS, Bootstrap 5, and vanilla JavaScript. React, Node.js, databases, and APIs remain outside this syllabus.",
              },
              {
                q: "How much time should I set aside outside live sessions?",
                a: "Most coding is performed live alongside the instructor. You should plan for approximately 30 to 45 minutes of independent practice or revision each weekday to refine project deliverables comfortably around college schedules.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 rounded-2xl border border-background-200 bg-background-50/80 transition-all shadow-xs"
              >
                <summary className="font-heading font-semibold text-base sm:text-lg text-foreground-950 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-foreground-500 shrink-0 ml-3" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Student Feedback & Testimonials */}
        <ServiceTestimonials
          serviceSlug="frontend-foundations"
          serviceTitle="Frontend Foundations Coaching Cohort"
          badge="Student Experiences"
          badgeTone="emerald"
        />

        {/* 13. FINAL CONTACT / ENQUIRY SECTION */}
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl border border-background-200 bg-primary-50/60 text-center space-y-6 shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Pilot Cohort Enrolment
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-foreground-950">
                Enquire About the Next Cohort
              </h2>
              <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light">
                Send a quick message with your current semester, prior experience, and questions. We will confirm whether the schedule and small-group coaching rhythm align with your goals.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_LINK}
                onClick={handleContactClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-all shadow-xs cursor-pointer"
                id="footer-enquire-btn"
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
              Subject: Frontend Foundations Coaching Enquiry · Email: vikas.bandaaru@gmail.com · Limited to 5–8 learners
            </p>
          </div>
        </Reveal>
      </div>

      {/* Desktop Contact Modal (Scan QR or Open WhatsApp Web / Desktop) */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-background-50 border border-background-200 p-6 sm:p-8 shadow-2xl text-center space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-foreground-400 hover:text-foreground-700 hover:bg-background-200 transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1.5 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block">
                Direct WhatsApp Enquiry
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground-950">
                Connect on WhatsApp
              </h3>
              <p className="text-xs text-foreground-600 leading-relaxed font-light">
                Scan the QR code with your phone camera to start the chat instantly, or open WhatsApp Web / Desktop on this device.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="p-4 rounded-2xl bg-white border border-background-200 inline-block mx-auto shadow-inner">
              <img
                src={WHATSAPP_QR_URL}
                alt="Scan to Chat on WhatsApp"
                width={220}
                height={220}
                className="w-52 h-52 rounded-lg"
              />
            </div>

            {/* Actions: Open on Desktop or Copy Phone */}
            <div className="space-y-2.5 pt-1">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-all shadow-xs"
              >
                <Laptop className="w-4 h-4" />
                <span>Open WhatsApp Web / Desktop App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-background-100/70 border border-background-200 text-xs text-foreground-700 font-mono">
                <span>{WHATSAPP_DISPLAY_PHONE}</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] text-primary-700 hover:text-primary-800 font-sans font-medium cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedPhone ? "Copied!" : "Copy Number"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

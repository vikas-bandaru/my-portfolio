"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  QrCode,
  ArrowRight,
  Database,
  Code2,
  Clock,
  Calendar,
  Layers,
  HelpCircle,
  FileText,
  Target,
  X,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";
import ServiceTestimonials from "@/components/ServiceTestimonials";

// WhatsApp Contact Configuration
const WHATSAPP_PHONE = "918096990227";
const WHATSAPP_PREFILLED_MESSAGE =
  "Hello Vikas, I am interested in joining the 6-week Java Foundations with AI-Assisted Development coaching cohort (Java + SQL + JDBC). Could you please share details on upcoming batch schedules and enrolment?";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

const WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(
  WHATSAPP_LINK
)}`;

export default function JavaFoundationsPage() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Live Coaching Intensive"
        badgeDotColor="bg-amber-400"
        title="Java, SQL &amp; JDBC Foundations:"
        titleHighlight="Understand, Debug &amp; Explain"
        description="A structured six-week live coaching program for Indian engineering students and graduates. Strengthen core programming and relational database foundations, build a complete database-backed application, and learn to verify AI-generated solutions instead of blindly trusting them."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "06 Weeks", label: "30 Live Hours" },
          { value: "07 Projects", label: "6 Mini + 1 Capstone" },
          { value: "₹5,999", label: "Pilot Cohort Fee" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Core Thesis Stance Banner */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Pedagogical Stance
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              AI can generate code in seconds. Can you verify that it is right?
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              Entry-level software roles require authentic problem-solving, structured debugging, relational database integrity, and practical code ownership. Java-focused career paths eventually extend into Spring Boot and distributed microservices, but this intensive deliberately builds durable foundations first: pure core Java, relational schema modeling, and raw JDBC data persistence.
            </p>
          </div>
        </Reveal>

        {/* Overview & Pricing Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <Reveal delay={60}>
            <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 space-y-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block">
                    Curricular Focus
                  </span>
                  <h2 className="font-heading font-semibold text-2xl text-foreground-950">
                    Java, SQL, JDBC &amp; Disciplined AI
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Five live hours every weekday for six weeks. Designed for engineering undergraduates and recent graduates who need structured, accountable instruction rather than a few video tutorials followed by isolated self-study.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "Live Hours", value: "30 Hours" },
                  { label: "Batch Size", value: "6–8 Learners" },
                  { label: "Schedule", value: "1 Hr / Day (M–F)" },
                  { label: "Viva Defense", value: "1-on-1 Review" },
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
                  id="java-hero-whatsapp-btn"
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
                  <span>Explore Syllabus</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pricing Card */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-amber-200/80 bg-background-50 p-7 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <div className="font-heading text-4xl font-bold text-foreground-950">
                  ₹5,999
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold">
                  Pilot Cohort Fee per Learner
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                {[
                  "30 live teaching hours (1 hour every weekday, Mon–Fri)",
                  "Core Java, OOP principles, collections and exception handling",
                  "Relational schema design, SQL queries, joins and transactions",
                  "Raw JDBC database connectivity with parameterised queries",
                  "6 guided mini-projects plus 1 production-style capstone",
                  "Weekly practice checkpoints and personal mistake logging",
                  "Structured capstone review and final individual technical viva",
                  "Curated AI prompt toolkit for hint-driven problem solving",
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
                * Strictly limited to 6–8 learners per cohort so code reviews, debugging guidance, and viva assessments remain direct and rigorous.
              </p>
            </div>
          </Reveal>
        </div>

        {/* The 3 Core Pillars */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold block">
              Educational Method
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Closing the Real Learning Gap
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Moving from passive copy-pasting to verified architectural ownership:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "1. Learn Core Fundamentals",
                desc: "Build the ability to reason about memory execution, control flows, data types, boundary edge cases, and runtime exceptions instead of memorising code patterns.",
              },
              {
                title: "2. Build Relational Architecture",
                desc: "Move from isolated console exercises to a full Java application backed by a relational MySQL database with strict transactional guarantees and query safety.",
              },
              {
                title: "3. Use AI with Judgement",
                desc: "Use modern AI assistants to request hints, test hypothesis, inspect stack traces, and review code, then run, verify, and defend the implementation yourself.",
              },
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-3 shadow-xs hover:border-amber-400/50 transition-all">
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Curriculum: 6-Week Rhythm */}
        <div id="curriculum" className="space-y-8 scroll-mt-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block">
              Structured Roadmap
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Six Weeks. Five Live Hours Every Week.
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Each week pairs live interactive coding sessions with a concrete checkpoint task:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                week: "Week 01",
                title: "Java Logic and Problem-Solving",
                summary: "Variables, primitive types, operators, conditionals, iteration, methods, stack tracing, functional decomposition, and basic debugging workflows.",
                checkpoint: "Solve and explain a small set of number, pattern, and logic tasks independently without AI-generated code.",
              },
              {
                week: "Week 02",
                title: "Core Java and Object-Oriented Thinking",
                summary: "Classes, objects, encapsulation, inheritance, polymorphism, arrays, string manipulation, Java collections framework, and rigorous input validation.",
                checkpoint: "Design, test, and document a small student-result processing system.",
              },
              {
                week: "Week 03",
                title: "SQL & Relational Database Foundations",
                summary: "Tables, primary and foreign keys, relational constraints, CRUD queries, filtering, sorting, multi-table JOINs, aggregation, grouping, and transaction isolation.",
                checkpoint: "Write and defend relational queries against a complex student/course database schema.",
              },
              {
                week: "Week 04",
                title: "JDBC & Database-Backed Java Persistence",
                summary: "Connection management, PreparedStatement, ResultSet processing, resource cleanup, SQLException hierarchy, parameterized queries, and ACID transaction commit/rollback.",
                checkpoint: "Implement and verify end-to-end database operations using clean parameterized JDBC queries.",
              },
              {
                week: "Week 05",
                title: "Testing, Git & Responsible AI Workflows",
                summary: "Test-case design, edge case hunting, debugging strategies, Git version control basics, prompting for hints and tests, and disciplined code review verification.",
                checkpoint: "Diagnose a seeded codebase defect, write a reproducing test, and demonstrate evidence that the fix holds.",
              },
              {
                week: "Week 06",
                title: "Capstone Completion & Viva Defense",
                summary: "Complete the Student Course Management System, review schema design, practice representative Java/SQL interview questions, and defend architectural trade-offs.",
                checkpoint: "Live capstone demonstration, individual code walkthrough, and a 1-on-1 viva defense.",
              },
            ].map((module, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="p-6 sm:p-7 rounded-2xl border border-background-200 bg-background-50/80 shadow-xs hover:border-amber-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                          {module.week}
                        </span>
                        <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground-950">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-sm text-foreground-600 leading-relaxed font-light">
                        {module.summary}
                      </p>
                      <div className="pt-2 text-xs text-foreground-700 bg-background-100/60 p-3 rounded-xl border border-background-200">
                        <span className="font-mono font-semibold text-foreground-900 uppercase tracking-wider mr-1.5">
                          Weekly Checkpoint:
                        </span>
                        {module.checkpoint}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Time Commitment Callout */}
          <div className="p-6 rounded-2xl border border-background-200 bg-background-100/60 text-sm space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-900 block">
              Estimated Weekly Commitment:
            </span>
            <p className="text-foreground-700 font-light leading-relaxed">
              <strong>Live Coaching:</strong> 1 hour per day, Monday to Friday (30 total live hours).
              <br />
              <strong>Independent Practice:</strong> 45 to 60 minutes, 4 days per week (approx. 24–30 hours of project execution across the program).
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="space-y-8 scroll-mt-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block">
              Hands-On Milestones
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Six Mini-Projects &amp; One Relational Capstone
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Progression moves from small logic challenges to independent database implementation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Logic Practice Set",
                desc: "Implement number, array, and string algorithms; include edge cases and analyze time complexity at a foundational level.",
              },
              {
                num: "02",
                title: "Student Result Processor",
                desc: "Apply classes, encapsulation, collections, and structured exception handling to parse and calculate student academic performance.",
              },
              {
                num: "03",
                title: "Student & Course Relational Schema",
                desc: "Design normalized database tables with primary and foreign keys; write multi-table joins, grouped reports, and data queries.",
              },
              {
                num: "04",
                title: "JDBC CRUD Console App",
                desc: "Connect Java to MySQL and execute robust CRUD operations using parameterised queries and clean resource handling.",
              },
              {
                num: "05",
                title: "Debug & Test Challenge",
                desc: "Investigate a seeded defect in a codebase, form reproduction hypotheses, write automated tests, and verify the patch.",
              },
              {
                num: "06",
                title: "ACID Transaction Exercise",
                desc: "Implement a multi-step database workflow with commit and rollback; demonstrate data consistency during failure states.",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-background-200 bg-background-50/80 space-y-2 shadow-xs"
              >
                <span className="font-mono text-xs font-semibold text-amber-700 block">
                  Project {proj.num}
                </span>
                <h4 className="font-heading font-semibold text-base text-foreground-950">
                  {proj.title}
                </h4>
                <p className="text-xs sm:text-sm text-foreground-600 font-light leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Flagship Capstone Showcase Card */}
          <Reveal>
            <div className="p-7 sm:p-9 rounded-3xl border border-amber-200/80 bg-background-50 shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  Substantial Capstone
                </span>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
                  Student Course Management System
                </h3>
              </div>
              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light max-w-3xl">
                Build a production-style, maintainable console application to manage student admissions, course registrations, and grade reporting with relational MySQL persistence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm text-foreground-700">
                <div className="space-y-2 bg-background-100/60 p-5 rounded-2xl border border-background-200">
                  <span className="font-mono font-semibold text-foreground-900 uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5 list-disc list-inside font-light">
                    <li>Normalized SQL schema with keys, sample seeds, and constraints</li>
                    <li>Clean Java domain classes and JDBC CRUD service layers</li>
                    <li>Strict input validation, parameterized queries, and transactions</li>
                    <li>Documented Git repository with test cases and setup README</li>
                  </ul>
                </div>
                <div className="space-y-2 bg-background-100/60 p-5 rounded-2xl border border-background-200">
                  <span className="font-mono font-semibold text-foreground-900 uppercase tracking-wider block">
                    1-on-1 Viva Defense Rubric:
                  </span>
                  <p className="font-light leading-relaxed">
                    During the final review, a requirement will be altered live on call (e.g. adding a constraint or modifying a query). You will adjust the code, run relevant tests, and explain the architecture trade-offs.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* AI Learning Protocol (Attempt -> Hint -> Investigate -> Verify) */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl border border-background-200 bg-background-50/80 space-y-6 shadow-xs">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold block">
                Responsible AI Protocol
              </span>
              <h2 className="font-heading font-semibold text-2xl text-foreground-950 mt-1">
                Prompts That Help You Think, Not Outsource Your Thinking
              </h2>
              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
                The cohort includes copy-ready AI prompting workflows for concept drills, test-case generation, mock vivas, and debugging:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01. Attempt", desc: "Formulate your logic and try the problem independently before asking an AI model." },
                { step: "02. Hint", desc: "Request an architectural hint, a clarifying question, or a test case, never the full solution." },
                { step: "03. Investigate", desc: "Inspect execution traces, reproduce boundary errors, and test possible failure modes." },
                { step: "04. Verify & Defend", desc: "Run your test suite, cross-check official Oracle docs, and articulate why the fix works." },
              ].map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-background-100/70 border border-background-200 space-y-2">
                  <div className="font-heading font-semibold text-sm text-foreground-950">
                    {s.step}
                  </div>
                  <p className="text-xs text-foreground-600 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FAQs */}
        <div id="faq" className="space-y-6 scroll-mt-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block">
              Clear Expectations
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Does this make me fully job-ready for all Java roles?",
                a: "No. This cohort builds rock-solid Java, SQL, and JDBC foundations, practical project ownership, and interview readiness. Many industry roles also expect advanced Spring Boot, REST APIs, microservices, and Docker, which are follow-on milestones built on top of this foundation.",
              },
              {
                q: "Why focus on Java, SQL, and JDBC when AI can generate entire projects?",
                a: "Because you cannot debug, verify, or defend what you do not understand. In technical interviews and production systems, engineers must justify schema normalization, manage transaction rollbacks, and diagnose concurrency defects without prompting.",
              },
              {
                q: "Is this a self-paced video course?",
                a: "No. It is a live group coaching cohort with one live instruction hour each weekday, structured checkpoints, code reviews, and personal feedback.",
              },
              {
                q: "Do you guarantee a job or campus placement?",
                a: "No. No legitimate educational program guarantees hiring. Placement depends on hiring market demand, candidate interview execution, and academic performance.",
              },
              {
                q: "What prerequisites and tools do I need?",
                a: "A working laptop, reliable internet, Java JDK, an IDE (IntelliJ or VS Code), MySQL, and Git. Paid AI subscriptions are not required; free tiers are completely sufficient.",
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
          serviceSlug="java-foundations"
          serviceTitle="Java, SQL & JDBC Foundations Intensive"
          badge="Verified Learner Feedback"
          badgeTone="amber"
        />

        {/* Enrollment CTA Card */}
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl border border-background-200 bg-amber-50/60 text-center space-y-6 shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-800 block">
                Next Cohort Enrolment
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-foreground-950">
                Start with a Short Diagnostic Assessment
              </h2>
              <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light">
                Request the detailed syllabus and short readiness assessment before deciding whether this intensive fits your current schedule and goals.
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
                <span>Scan Mobile QR</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Desktop WhatsApp QR Code Modal */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-background-50 p-6 md:p-8 shadow-2xl border border-background-200 space-y-5 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-background-200">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span id="qr-modal-title" className="font-heading font-semibold text-foreground-950 text-base">
                  Chat on WhatsApp
                </span>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setShowQrModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-foreground-400 hover:text-foreground-950 hover:bg-background-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-1">
              <p className="text-sm text-foreground-800 font-medium">
                Scan with your phone camera
              </p>
              <p className="text-xs text-foreground-500">
                Directly opens WhatsApp with a prefilled enquiry about the Java Foundations cohort.
              </p>
            </div>

            <div className="flex justify-center p-3 bg-white rounded-2xl border border-background-200 shadow-inner">
              <img
                src={WHATSAPP_QR_URL}
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2 pt-1 text-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-medium hover:underline"
              >
                <span>Or open WhatsApp Web directly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] font-mono text-foreground-400">
                +91 8096990227 · Vikas Bandaru
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

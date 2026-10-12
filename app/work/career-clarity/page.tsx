"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  QrCode,
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  HelpCircle,
  FileText,
  Target,
  Sparkles,
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
  "Hello Vikas, I visited your website and would like to book a 60-minute Career Clarity Session (₹799). Could you please share your upcoming availability?";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

const WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(
  WHATSAPP_LINK
)}`;

export default function CareerClarityPage() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="One-on-One Diagnostic"
        badgeDotColor="bg-amber-400"
        title="Career Clarity &amp; Learning Roadmap:"
        titleHighlight="Decide What to Do Next"
        description="A practical 60-minute strategy session for engineering students, fresh graduates, and early-career developers. Stop second-guessing your options, choose a realistic direction, and leave with a personalized 30-day action plan."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "60 Mins", label: "Live 1-on-1 Session" },
          { value: "30 Days", label: "Action Roadmap" },
          { value: "₹799", label: "One-Time Fee" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Core Thesis Stance Banner */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Diagnostic Stance
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              You don&apos;t always need another course. Sometimes you need a clearer decision.
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              When every influencer, roadmap, and boot-camp promises an impossible shortcut, deciding what to do becomes harder than doing the actual work. This session is designed to eliminate noise, audit your current skills, and structure a realistic 30-day execution plan.
            </p>
          </div>
        </Reveal>

        {/* Overview & Pricing Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <Reveal delay={60}>
            <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 space-y-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
                    Session Format
                  </span>
                  <h2 className="font-heading font-semibold text-2xl text-foreground-950">
                    A Focused, Structured 60 Minutes
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                We meet one-on-one over Google Meet to review your background, evaluate the trade-offs of the paths you are considering, and build an actionable, bite-sized roadmap.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "Format", value: "1-on-1 Online" },
                  { label: "Duration", value: "60 Mins" },
                  { label: "Outcome", value: "30-Day Plan" },
                  { label: "Follow-Up", value: "7-Day Chat" },
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
                  id="clarity-hero-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
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
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-background-300 text-foreground-700 font-medium text-xs hover:bg-background-100 transition-all"
                >
                  <span>See How It Works</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pricing Card */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-primary-200/80 bg-background-50 p-7 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <div className="font-heading text-4xl font-bold text-foreground-950">
                  ₹799
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">
                  One-Time Session Fee
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                {[
                  "60-minute private one-on-one strategy call",
                  "Skill audit & background trade-off analysis",
                  "Prioritized learning direction (what to start, pause, or drop)",
                  "Personalized weekly 30-day execution roadmap",
                  "Resource-selection guidance (avoiding predatory courses)",
                  "One message follow-up clarification within 7 days",
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
                  <span>Book via WhatsApp</span>
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
                * Practical diagnostic guidance. Not a recruitment agency, placement guarantee, or psychological counseling.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Does This Sound Familiar? (The 4 Dilemmas) */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Common Challenges
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Too Many Options, Not Enough Clarity
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Deciding which technical direction to pursue shouldn&apos;t feel like a guessing game. Here are the core situations we untangle:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "Career Direction",
                title: "Choosing a Career Path",
                desc: "Explore realistic, high-signal options for campus placements, off-campus roles, internships, or switching into software development.",
              },
              {
                tag: "Skill Prioritization",
                title: "Unsure What to Learn",
                desc: "Evaluate frameworks and technologies (Full-Stack vs Backend vs Cloud vs Salesforce) against your background, time constraints, and market demand.",
              },
              {
                tag: "Focus & De-cluttering",
                title: "Started Too Many Things",
                desc: "Identify what to continue, what to pause, and what to drop immediately so your limited energy builds coherent, demonstrable capability.",
              },
              {
                tag: "Evaluating Investments",
                title: "Considering a Paid Course or Boot-camp",
                desc: "Analyze whether an expensive paid program is genuinely necessary, or if structured self-study, open documentation, and portfolio builds are better.",
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

        {/* How It Works (The 4 Steps) */}
        <div id="how-it-works" className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Session Framework
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              From Uncertainty to a Concrete Plan
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              The 60 minutes are structured around making a firm decision, not an aimless motivational chat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Understand Your Starting Point",
                desc: "Audit your current skills, academic background, available weekly hours, and what you have already attempted.",
              },
              {
                step: "02",
                title: "Compare Your Options",
                desc: "Examine prerequisites, learning curves, trade-offs, and practical relevance for each path you are considering.",
              },
              {
                step: "03",
                title: "Choose a Single Direction",
                desc: "Commit to one primary track and set clear boundaries on secondary interests to eliminate cognitive overload.",
              },
              {
                step: "04",
                title: "Map the Next 30 Days",
                desc: "Break down the decision into weekly milestones, concrete build tasks, and self-verification checkpoints.",
              },
            ].map((s, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="h-full p-6 rounded-2xl border border-background-200 bg-background-50/80 space-y-3 shadow-xs">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-primary-700">
                    Step {s.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground-950">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Deliverables: What You Leave With */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">
              Tangible Takeaways
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              A Useful Plan, Not Just Meeting Notes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Trade-off Assessment Summary",
                desc: "A concise written summary of the paths evaluated and the concrete rationale for why your chosen path fits your constraints best.",
              },
              {
                title: "Prioritized Skill Focus",
                desc: "A primary technology focus with sensible boundaries on what to postpone, stopping syntax clutter before it starts.",
              },
              {
                title: "Personalized 30-Day Roadmap",
                desc: "Four weekly milestones with hands-on practice tasks and observable proof-of-work criteria.",
              },
              {
                title: "Resource Curation Guide",
                desc: "Curated documentation, free repositories, and build prompts tailored to your level, avoiding marketing-heavy courses.",
              },
              {
                title: "One Asynchronous Check-in",
                desc: "One text message clarification within 7 days of the call to resolve any blockers as you begin your 30-day sprint.",
              },
              {
                title: "Independent Execution",
                desc: "The entire session is designed to make you self-reliant and confident in executing without endless paid coaching.",
              },
            ].map((del, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-3xl border border-background-200 bg-background-50/80 p-7 space-y-3 shadow-xs">
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    {del.title}
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    {del.desc}
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
              Before You Book
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need to already know which career I want?",
                a: "No. Bring the exact doubts and confusion you are wrestling with. The purpose of this call is to structure the decision and compare realistic alternatives based on market conditions.",
              },
              {
                q: "Will you pitch a paid course to me?",
                a: "No. The session is strictly independent advisory. We often recommend free official documentation, targeted open-source builds, or simply finishing what you already started.",
              },
              {
                q: "Will this guarantee a job or internship?",
                a: "No. This session provides diagnostic clarity and a realistic execution roadmap. Hiring outcomes depend on market factors, interview performance, and individual persistence.",
              },
              {
                q: "Is this a technical mock interview?",
                a: "Not by default. The primary focus is deciding what to learn and structuring the next 30 days. Deep technical mock interviews and code inspections are arranged as separate mentorship sessions.",
              },
              {
                q: "What should I prepare before the call?",
                a: "Reflect on your current skills, the paths you are considering, your weekly available time, and your single biggest unanswered question. A brief questionnaire will be sent before the session to make the most of our 60 minutes.",
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

        {/* Client & Student Feedback */}
        <ServiceTestimonials
          serviceSlug="career-clarity"
          serviceTitle="1-on-1 Career Clarity Session"
          badge="Verified Client Reflections"
          badgeTone="primary"
        />

        {/* Contact CTA */}
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl border border-background-200 bg-primary-50/60 text-center space-y-6 shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
                Next Step
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-foreground-950">
                You Don&apos;t Have to Figure It Out Alone
              </h2>
              <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light">
                Start by identifying the exact decision in front of you. If a focused 60-minute strategy conversation would help, send an inquiry with what you are trying to figure out.
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
                <span>Book via WhatsApp (+91 8096990227)</span>
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
              Direct booking: +91 8096990227 · Fee: ₹799 per session · Email backup: vikas.bandaaru@gmail.com
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
              className="absolute top-4 right-4 p-1.5 rounded-full text-foreground-400 hover:text-foreground-700 hover:bg-background-200 transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block">
                WhatsApp Quick Booking
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground-950 pt-1">
                Scan with your Phone
              </h3>
              <p className="text-xs text-foreground-600 leading-relaxed font-light">
                Point your phone camera to chat directly on WhatsApp with the pre-filled inquiry.
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

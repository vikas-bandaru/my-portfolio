import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  Compass,
} from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Learn | Structured Technical Cohorts & Courses | Vikas Bandaru",
  description:
    "Student-facing technical cohorts, practical coding intensives, and consequence-driven learning programs engineered by Vikas Bandaru.",
};

// Extensible program data structure for active cohorts and courses
export interface LearningProgram {
  id: string;
  badge: string;
  badgeTone: "emerald" | "primary" | "amber" | "purple";
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  format: string;
  targetAudience: string;
  highlights: string[];
  ctaLabel: string;
  href: string;
  status: "open" | "upcoming" | "closed";
}

const activePrograms: LearningProgram[] = [
  {
    id: "frontend-foundations",
    badge: "Live Small-Group Cohort",
    badgeTone: "emerald",
    title: "AI-Assisted Frontend Foundations",
    subtitle: "Build & Explain",
    description:
      "Learn HTML, CSS, Bootstrap, and JavaScript through daily guided coding, real projects, and small AI-assisted experiments. Practise generating, checking, debugging, and improving code instead of simply prompting for a website.",
    duration: "4 Weeks · 30 Guided Hours",
    format: "Live Online & Code Reviews",
    targetAudience: "Engineering & CS undergraduates balancing coursework",
    highlights: [
      "Semantic HTML5 & responsive layout architecture",
      "CSS fundamentals, Flexbox, Grid & Bootstrap",
      "Core JavaScript DOM events & state updates",
      "Disciplined AI workflows: verify, debug & explain",
    ],
    ctaLabel: "View Cohort Details & Enrol",
    href: "/cohorts/frontend-foundations",
    status: "open",
  },
  {
    id: "java-foundations",
    badge: "Live Coaching Intensive",
    badgeTone: "amber",
    title: "Java, SQL & JDBC Foundations",
    subtitle: "Understand, Debug & Explain",
    description:
      "Strengthen core programming and relational database foundations, build a complete database-backed application, and learn to verify AI-generated solutions instead of blindly trusting them.",
    duration: "6 Weeks · 30 Live Hours",
    format: "1 Hr / Day (M–F) + 1-on-1 Viva",
    targetAudience: "3rd & final year engineering students and graduates",
    highlights: [
      "Core Java, OOP principles, collections & exceptions",
      "SQL schema design, joins, grouping & transactions",
      "Raw JDBC connectivity & parameterized queries",
      "Student Course Management System capstone with live viva defense",
    ],
    ctaLabel: "View Intensive Details & Enrol",
    href: "/cohorts/java-foundations",
    status: "open",
  },
];

export default function LearnPage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Structured Learning"
        badgeDotColor="bg-emerald-400"
        title="Technical Cohorts,"
        titleHighlight="Courses &amp; Labs"
        description="Rigorous, consequence-driven technical programs for engineering students, graduates, and developers. Build durable mental models through guided coding and real systems comprehension."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "02", label: "Active Programs" },
          { value: "Small", label: "Batch Sizes (6-8)" },
          { value: "Hands-On", label: "Project Based" },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Pedagogical Thesis Callout */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-emerald-50/70 border border-emerald-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700 block">
              Learning Stance
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              Understanding systems beats copying code.
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              When AI can write boilerplate instantaneously, engineering competence is no longer about memorizing syntax. Every course and cohort here is designed to help you understand execution flows, troubleshoot boundary failures, and explain the code you build with complete confidence.
            </p>
          </div>
        </Reveal>

        {/* Featured Programs Section */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold block">
              Current Offerings
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
              Cohorts &amp; Practical Programs
            </h2>
            <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-1 max-w-2xl">
              Small-batch learning tracks structured with live sessions, code reviews, and project milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {activePrograms.map((program, index) => {
              const isAmber = program.badgeTone === "amber";
              return (
                <Reveal key={program.id} delay={index * 80}>
                  <article
                    id={`program-${program.id}`}
                    className={`rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs transition-all duration-300 space-y-6 hover:shadow-xl ${
                      isAmber ? "hover:border-amber-400/60" : "hover:border-emerald-400/60"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                          isAmber
                            ? "bg-amber-100 text-amber-900 border-amber-200"
                            : "bg-emerald-100 text-emerald-800 border-emerald-200"
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        {program.badge}
                      </span>
                      <span className="font-mono text-xs text-foreground-500">
                        Enrolment Open
                      </span>
                    </div>

                  <div>
                    <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950">
                      {program.title}:{" "}
                      <span className="text-primary-700 font-normal">
                        {program.subtitle}
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light mt-3 max-w-3xl">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Meta Pills */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-700 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">
                      <Clock className="w-3.5 h-3.5 text-foreground-500" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">
                      <Calendar className="w-3.5 h-3.5 text-foreground-500" />
                      {program.format}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-100 border border-background-200">
                      <Users className="w-3.5 h-3.5 text-foreground-500" />
                      {program.targetAudience}
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-3 pt-2">
                    <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">
                      Key Competencies You Will Build:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {program.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-background-200/80 flex flex-wrap items-center gap-4">
                    <Link
                      href={program.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-xs transition-all shadow-xs ${
                        isAmber
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                      id={`learn-${program.id}-cta`}
                    >
                      <span>{program.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-foreground-500">
                      Limited seats per cohort for direct feedback
                    </span>
                  </div>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>

        {/* 1-on-1 Guidance Distinction Callout */}
        <Reveal delay={120}>
          <div className="rounded-3xl border border-background-200 bg-background-100/50 p-7 sm:p-9 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-700">
                <Compass className="w-3.5 h-3.5" />
                Need Direction First?
              </span>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
                Looking for 1-on-1 Career Clarity rather than a multi-week course?
              </h3>
              <p className="text-sm text-foreground-600 leading-relaxed font-light">
                If you are confused about which technical domain to pursue, how to prepare for placements, or whether a course is even right for you, book a private 60-minute diagnostic session.
              </p>
            </div>
            <Link
              href="/work/career-clarity"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 whitespace-nowrap transition-all shadow-xs shrink-0"
              id="learn-clarity-referral"
            >
              <span>Explore Career Clarity Session (₹799)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

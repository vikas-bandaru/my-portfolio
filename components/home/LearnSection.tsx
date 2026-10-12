import Link from "next/link";
import { Sparkles, ArrowRight, Clock, Users, Calendar, Compass } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function LearnSection() {
  return (
    <section id="learn-section" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20 border-t border-background-200">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Courses &amp; Practical Cohorts"
            title="Structured Technical Learning"
            description="Intensive, small-group cohorts and practical programs engineered for students and developers. Build durable mental models through guided coding and real projects."
            linkLabel="Explore All Learning Programs"
            linkHref="/learn"
          />
        </Reveal>

        {/* Featured Cohort Spotlight Card */}
        <div className="mt-8">
          <Reveal delay={80}>
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-7 md:p-9 shadow-xs hover:border-emerald-300 transition-all space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Small-Group Cohort
                </span>
                <span className="font-mono text-xs text-foreground-500">
                  Enrolment Open
                </span>
              </div>

              <div className="max-w-3xl">
                <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground-950">
                  AI-Assisted Frontend Foundations:{" "}
                  <span className="text-emerald-800 font-normal">Build &amp; Explain</span>
                </h3>
                <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed font-light">
                  Learn HTML, CSS, Bootstrap, and JavaScript through daily guided coding, real projects, and disciplined AI workflows. Practise generating, inspecting, debugging, and improving code rather than simply prompting for an unvetted layout.
                </p>
              </div>

              {/* Meta Pills */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-50 border border-background-200">
                  <Clock className="w-3.5 h-3.5 text-foreground-500" />
                  4 Weeks · 30 Guided Hours
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-50 border border-background-200">
                  <Calendar className="w-3.5 h-3.5 text-foreground-500" />
                  Live Online &amp; Code Reviews
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-50 border border-background-200">
                  <Users className="w-3.5 h-3.5 text-foreground-500" />
                  For Undergraduates &amp; Career Starters
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/cohorts/frontend-foundations"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 text-white text-sm font-semibold whitespace-nowrap transition-colors hover:bg-emerald-700 shadow-xs"
                    id="home-cohort-cta"
                  >
                    <span>View Cohort Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-background-300 text-foreground-700 text-sm font-semibold hover:bg-background-100 transition-colors"
                  >
                    <span>All Learning Programs</span>
                  </Link>
                </div>

                <Link
                  href="/work/career-clarity"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-700 hover:text-primary-800 hover:underline"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Unsure what to learn? 1-on-1 Career Clarity (₹799)</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

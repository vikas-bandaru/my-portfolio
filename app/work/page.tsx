import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Code2, Mic, CheckCircle2, Award, Zap } from "lucide-react";

export const metadata = {
  title: "Work With Me (Professional Engagements) — Vikas Bandaru",
  description:
    "Professional services and engagements: technical mentorship, faculty development, full-stack web application engineering, and speaking.",
};

export default function WorkPage() {
  return (
    <div className="space-y-16 max-w-3xl">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700">
          <span>Professional Engagements</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Work With Me
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Alongside long-term research and building, I accept paid professional engagements that match my genuine skills and practical experience.
        </p>
      </header>

      {/* Engagement Philosophy Notice */}
      <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1.5">
        <p className="font-bold text-stone-900 text-sm">Engagement Philosophy</p>
        <p className="leading-relaxed">
          I engage where I can deliver clear, tangible outcomes. Every engagement is grounded in first-principles clarity, transparent communication, and verified capabilities without unnecessary agency overhead.
        </p>
      </div>

      {/* The 4 Tracks */}
      <div className="space-y-10">
        {/* Track 1: Learn With Me */}
        <section id="learn" className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Track 1</span>
              <h2 className="text-xl font-bold text-stone-900">Learn With Me (Technical Mentorship)</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Have a technical learning goal that matches what I can genuinely teach? I offer focused, 1-on-1 diagnostic sessions and small-group coaching designed to build durable problem-solving confidence.
          </p>

          <div className="space-y-2 pt-1 text-xs text-stone-700">
            <p className="font-semibold text-stone-900">Areas of Genuine Instruction:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>Modern Web Development (React, TypeScript, Next.js, Node.js)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>Backend Architecture (Java, Spring Boot, MySQL, REST APIs)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>Salesforce Platform (Certified App Builder & Platform Developer I)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>Practical Project Architecture & Asynchronous Debugging</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=learn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white font-medium text-xs hover:bg-sky-800 transition-colors"
              id="work-learn-cta"
            >
              Inquire About Technical Mentorship <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Track 2: Train the Trainer */}
        <section id="train-the-trainer" className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Track 2</span>
              <h2 className="text-xl font-bold text-stone-900">Train the Trainer / Faculty Development</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Drawing on 11 years in engineering education and technical training management, I help colleges, academies, and corporate L&D teams transform traditional lecturing into active, discovery-based classrooms.
          </p>

          <div className="space-y-2 pt-1 text-xs text-stone-700">
            <p className="font-semibold text-stone-900">Program Scope & Modules:</p>
            <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Designing problem-first curricula where bugs and constraints drive student discovery</li>
              <li>Teaching programming through interactive visual state machines rather than static slides</li>
              <li>Designing authentic diagnostic assessments that evaluate problem solving over recall</li>
              <li>AI-assisted teaching workflows and preserving cognitive independence in students</li>
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=faculty"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium text-xs hover:bg-emerald-800 transition-colors"
              id="work-faculty-cta"
            >
              Inquire for Faculty / Team Training <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Track 3: Build With Me */}
        <section id="build" className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Track 3</span>
              <h2 className="text-xl font-bold text-stone-900">Build With Me (Web Apps & Systems)</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Engineering fast, reliable web applications, database-backed architectures, and enterprise platform integrations for select client engagements.
          </p>

          <div className="space-y-2 pt-1 text-xs text-stone-700">
            <p className="font-semibold text-stone-900">Architecture Capabilities:</p>
            <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Full-stack web applications (React 19, TypeScript, Next.js, Vite SPA)</li>
              <li>Relational backend design (Supabase / PostgreSQL with strict Row Level Security)</li>
              <li>Serverless edge functions (Deno / TypeScript), payments (Razorpay), and transactional mail</li>
              <li>Salesforce enterprise platform customization (Apex, LWC, flow automations, integrations)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-semibold text-stone-900">Featured Proof of Build:</span>
            <p className="text-stone-600">
              Delivered <span className="font-semibold text-stone-800">traits.co.in</span> — a full-scale e-commerce system built with agentic workflows, Supabase, and edge compute.
            </p>
            <Link href="/builds/traits-ecommerce" className="text-sky-700 hover:underline font-semibold inline-flex items-center gap-1 pt-1">
              Read Architecture Breakdown <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=build"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors"
              id="work-build-cta"
            >
              Discuss a Client Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Track 4: Speaking & Workshops */}
        <section id="speaking" className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">Track 4</span>
              <h2 className="text-xl font-bold text-stone-900">Speaking & Workshops</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Keynotes, panel discussions, and hands-on workshops for engineering colleges, technical summits, and educator forums.
          </p>

          <div className="space-y-2 pt-1 text-xs text-stone-700">
            <p className="font-semibold text-stone-900">Core Speaking Themes:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
                <div className="font-bold text-stone-900">Reforming Technical Education</div>
                <p className="text-stone-600">Why high GPA graduates underperform in production, and how to shift to discovery models.</p>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
                <div className="font-bold text-stone-900">Mental Models in Systems</div>
                <p className="text-stone-600">Designing simulations that teach first-principles reasoning over syntax memorization.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=speaking"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-800 text-white font-medium text-xs hover:bg-purple-900 transition-colors"
              id="work-speaking-cta"
            >
              Book for a Talk or Workshop <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

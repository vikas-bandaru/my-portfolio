import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Code2, Mic, CheckCircle2, Briefcase } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Work With Me (Professional Engagements) — Vikas Bandaru",
  description:
    "Professional services and engagements: technical mentorship, faculty development, full-stack web application engineering, and speaking.",
};

export default function WorkPage() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <div className="space-y-6">
          <PageHeader
            eyebrow="Professional Engagements"
            eyebrowIcon={<Briefcase className="w-3.5 h-3.5 text-primary-600" />}
            title="Work With Me"
            description="Alongside long-term research and building, I accept paid professional engagements that match my genuine skills and practical experience."
          />

          {/* Engagement Philosophy Notice */}
          <div className="p-6 rounded-3xl bg-primary-50/60 border border-primary-200/60 text-xs text-foreground-800 space-y-1.5 shadow-xs">
            <p className="font-serif text-base font-normal text-foreground-950">Engagement Philosophy</p>
            <p className="leading-relaxed text-foreground-700 text-sm">
              I engage where I can deliver clear, tangible outcomes. Every engagement is grounded in first-principles clarity, transparent communication, and verified capabilities without unnecessary agency overhead.
            </p>
          </div>
        </div>
      </Reveal>

      {/* The 4 Tracks */}
      <div className="space-y-10">
        {/* Track 1: Learn With Me */}
        <Reveal delay={100}>
          <section id="learn" className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">Track 1</span>
                <h2 className="font-serif text-2xl font-normal text-foreground-950">Learn With Me (Technical Mentorship)</h2>
              </div>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Have a technical learning goal that matches what I can genuinely teach? I offer focused, 1-on-1 diagnostic sessions and small-group coaching designed to build durable problem-solving confidence.
            </p>

            <div className="space-y-3 pt-1 text-xs text-foreground-700">
              <p className="font-semibold text-foreground-950 text-xs uppercase font-mono tracking-wider">Areas of Genuine Instruction:</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span>Modern Web Development (React, TypeScript, Next.js, Node.js)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span>Backend Architecture (Java, Spring Boot, MySQL, REST APIs)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span>Salesforce Platform (Certified App Builder & Platform Developer I)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span>Practical Project Architecture & Asynchronous Debugging</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                id="work-learn-cta"
              >
                Inquire About Technical Mentorship <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Track 2: Train the Trainer */}
        <Reveal delay={150}>
          <section id="train-the-trainer" className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold">Track 2</span>
                <h2 className="font-serif text-2xl font-normal text-foreground-950">Train the Trainer / Faculty Development</h2>
              </div>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Drawing on 11 years in engineering education and technical training management, I help colleges, academies, and corporate L&D teams transform traditional lecturing into active, discovery-based classrooms.
            </p>

            <div className="space-y-3 pt-1 text-xs text-foreground-700">
              <p className="font-semibold text-foreground-950 text-xs uppercase font-mono tracking-wider">Program Scope & Modules:</p>
              <ul className="space-y-2 list-disc pl-5 leading-relaxed">
                <li>Designing problem-first curricula where bugs and constraints drive student discovery</li>
                <li>Teaching programming through interactive visual state machines rather than static slides</li>
                <li>Designing authentic diagnostic assessments that evaluate problem solving over recall</li>
                <li>AI-assisted teaching workflows and preserving cognitive independence in students</li>
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=faculty"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs"
                id="work-faculty-cta"
              >
                Inquire for Faculty / Team Training <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Track 3: Build With Me */}
        <Reveal delay={200}>
          <section id="build" className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold">Track 3</span>
                <h2 className="font-serif text-2xl font-normal text-foreground-950">Build With Me (Web Apps & Systems)</h2>
              </div>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Engineering fast, reliable web applications, database-backed architectures, and enterprise platform integrations for select client engagements.
            </p>

            <div className="space-y-3 pt-1 text-xs text-foreground-700">
              <p className="font-semibold text-foreground-950 text-xs uppercase font-mono tracking-wider">Architecture Capabilities:</p>
              <ul className="space-y-2 list-disc pl-5 leading-relaxed">
                <li>Full-stack web applications (React 19, TypeScript, Next.js, Vite SPA)</li>
                <li>Relational backend design (Supabase / PostgreSQL with strict Row Level Security)</li>
                <li>Serverless edge functions (Deno / TypeScript), payments (Razorpay), and transactional mail</li>
                <li>Salesforce enterprise platform customization (Apex, LWC, flow automations, integrations)</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-background-50 border border-foreground-100 text-xs space-y-1">
              <span className="font-semibold text-foreground-950">Featured Proof of Build:</span>
              <p className="text-foreground-600">
                Delivered <span className="font-semibold text-foreground-900">traits.co.in</span> — a full-scale e-commerce system built with agentic workflows, Supabase, and edge compute.
              </p>
              <Link href="/builds/traits-ecommerce" className="text-primary-700 hover:underline font-semibold inline-flex items-center gap-1 pt-1">
                Read Architecture Breakdown <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=build"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground-950 text-white font-medium text-xs hover:bg-foreground-800 transition-all shadow-xs"
                id="work-build-cta"
              >
                Discuss a Client Project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Track 4: Speaking & Workshops */}
        <Reveal delay={250}>
          <section id="speaking" className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary-700 font-semibold">Track 4</span>
                <h2 className="font-serif text-2xl font-normal text-foreground-950">Speaking & Workshops</h2>
              </div>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed">
              Keynotes, panel discussions, and hands-on workshops for engineering colleges, technical summits, and educator forums.
            </p>

            <div className="space-y-3 pt-1 text-xs text-foreground-700">
              <p className="font-semibold text-foreground-950 text-xs uppercase font-mono tracking-wider">Core Speaking Themes:</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-4 bg-background-50 border border-foreground-100 rounded-2xl space-y-1">
                  <div className="font-serif text-sm font-normal text-foreground-950">Reforming Technical Education</div>
                  <p className="text-foreground-600 text-xs">Why high GPA graduates underperform in production, and how to shift to discovery models.</p>
                </div>
                <div className="p-4 bg-background-50 border border-foreground-100 rounded-2xl space-y-1">
                  <div className="font-serif text-sm font-normal text-foreground-950">Mental Models in Systems</div>
                  <p className="text-foreground-600 text-xs">Designing simulations that teach first-principles reasoning over syntax memorization.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=speaking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                id="work-speaking-cta"
              >
                Book for a Talk or Workshop <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

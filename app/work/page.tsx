import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Code2, Mic, CheckCircle2, Briefcase, Sparkles, Compass } from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Instruction, Faculty Development & Advisory | Vikas Bandaru",
  description:
    "Academic instruction, faculty mentoring, curriculum development, and technical systems advisory grounded in 12 years of higher education and engineering experience.",
};

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Academic Instruction &amp; Advisory"
        badgeDotColor="bg-primary-400"
        title="Teaching, Faculty Workshops"
        titleHighlight="&amp; Advisory"
        description="Alongside building LogicSims, I lead practical workshops, faculty development programs, and technical mentoring."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "04", label: "Specialized Tracks" },
          { value: "12", label: "Years Experience" },
          { value: "Direct", label: "1-on-1 & Team Advisory" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Engagement Philosophy Callout */}
        <Reveal>
          <div className="p-7 sm:p-9 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-2 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-700 block">
              Teaching Stance
            </span>
            <p className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
              Hands-On Problem Solving, Real Context &amp; Practical Skill
            </p>
            <p className="text-sm sm:text-base text-foreground-700 leading-relaxed font-light pt-1">
              Every workshop and mentorship track is built around real problems rather than abstract lectures, helping learners move from passive syllabus memorization to confident systems thinking.
            </p>
          </div>
        </Reveal>

        {/* The 4 Tracks Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Track 1: Career Clarity & Technical Mentorship */}
          <Reveal delay={80}>
            <section id="career-clarity" className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-primary-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 border border-primary-200/60 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary-600 font-semibold block">Track 01</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-primary-600 transition-colors">
                    Career Clarity &amp; 1-on-1 Mentorship
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                For engineering students and early-career developers facing decision paralysis, placement anxiety, or confusing learning paths. Instead of selling you another generic course, we diagnose your skills, cut through internet noise, and map a personalized 30-day action plan.
              </p>

              <div className="p-6 rounded-2xl bg-primary-50/60 border border-primary-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-heading font-semibold text-foreground-950 text-base sm:text-lg">
                    1-on-1 Career Clarity Session
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-600 font-light">
                    60-minute private diagnostic call · Skill audit · Personalized 30-day execution roadmap · ₹799
                  </p>
                </div>

                <Link
                  href="/work/career-clarity"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs shrink-0"
                  id="work-clarity-cta"
                >
                  <span>View Details &amp; Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <Link
                  href="/contact?intent=learn"
                  className="inline-flex items-center gap-1.5 text-foreground-600 hover:text-foreground-900 transition-colors"
                  id="work-learn-cta"
                >
                  <span>Need ongoing technical mentorship? Contact Vikas</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-foreground-300">·</span>
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-1.5 font-mono text-primary-700 hover:text-primary-800 hover:underline"
                >
                  <span>Looking for structured cohorts? Explore /learn</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Track 2: Train the Trainer */}
          <Reveal delay={120}>
            <section id="train-the-trainer" className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-semibold block">Track 02</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-emerald-700 transition-colors">
                    Train the Trainer / Faculty Development
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Drawing on 12 years across university engineering classrooms (Assistant Professor) and technical training management, I partner with engineering departments, academic boards, and educator teams to move away from one-way lectures and into interactive problem-solving classrooms.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">Curriculum &amp; Teaching Modules:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Curriculum modernization: replacing syntax memorization with interactive simulations and hands-on builds",
                    "Visual system design: connecting code execution to live visual state diagrams so students see the machine",
                    "Practical evaluation: grading students on their debugging ability and mental models rather than written syntax tests",
                    "AI in engineering education: teaching students how to inspect, debug, and question AI-generated code rather than blindly copying it",
                  ].map((module, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=faculty"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs"
                  id="work-faculty-cta"
                >
                  <span>Inquire for Institutional / Faculty Colloquium</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Track 3: Systems Architecture & Tool Engineering */}
          <Reveal delay={160}>
            <section id="build" className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-amber-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-600 font-semibold block">Track 03</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-amber-700 transition-colors">
                    Systems Architecture &amp; Educational Tool Engineering
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Engineering resilient web platforms, interactive computational simulators, and educational telemetry infrastructure. I bring research and architectural rigor into tangible, production-tested software artifacts.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">Engineering Disciplines:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Full-stack educational & web platforms (React 19, TypeScript, Next.js App Router)",
                    "State-isolated simulation sandboxes & interactive visual runtime inspectors",
                    "Relational schema modeling (PostgreSQL / Supabase with strict Row Level Security policies)",
                    "Serverless edge compute (Deno/Edge runtimes), verification APIs, and distributed event flows",
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-background-100/70 border border-background-200 text-xs space-y-1">
                <span className="font-semibold text-foreground-950">Exemplar Systems Case Study:</span>
                <p className="text-foreground-600">
                  Engineered <span className="font-semibold text-foreground-900">traits.co.in</span>, an end-to-end commerce system built using agent-orchestrated workflows, relational integrity, and edge compute.
                </p>
                <Link href="/builds/traits-ecommerce" className="text-primary-700 hover:underline font-semibold inline-flex items-center gap-1 pt-1">
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=build"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-medium text-xs hover:bg-amber-500 transition-all shadow-xs"
                  id="work-build-cta"
                >
                  <span>Propose Systems Architecture Collaboration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Track 4: Keynotes, Colloquia & Panels */}
          <Reveal delay={200}>
            <section id="speaking" className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-purple-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center shrink-0">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold block">Track 04</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-purple-700 transition-colors">
                    Keynotes, Academic Colloquia &amp; Panels
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Keynotes, symposium lectures, and faculty colloquia addressing the collapse of rote computing curricula, engineering cognitive models, and human agency in the age of algorithmic synthesis.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">Symposium &amp; Lecture Themes:</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-5 bg-background-100/70 border border-background-200 rounded-2xl space-y-1">
                    <div className="font-heading font-semibold text-sm text-foreground-950">The Collapse of Syntax-First CS</div>
                    <p className="text-foreground-600 text-xs leading-relaxed font-light">Why LeetCode and rote memorization yield fragile engineers, and how cognitive simulations reconstruct deep architectural competence.</p>
                  </div>
                  <div className="p-5 bg-background-100/70 border border-background-200 rounded-2xl space-y-1">
                    <div className="font-heading font-semibold text-sm text-foreground-950">AI Trust Crisis &amp; Proof of Work for the Mind</div>
                    <p className="text-foreground-600 text-xs leading-relaxed font-light">How educational institutions can assess authentic comprehension and diagnostic capability when code generation cost is zero.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=speaking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium text-xs hover:bg-purple-500 transition-all shadow-xs"
                  id="work-speaking-cta"
                >
                  <span>Invite for Keynote / Colloquium</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

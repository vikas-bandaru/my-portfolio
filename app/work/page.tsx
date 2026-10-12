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
                  <span>Invite Vikas for a College / Faculty Workshop</span>
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
                    Web Systems &amp; Learning Tools Development
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Building reliable web applications, interactive software simulators, and learning tools. I turn ideas and research into working software that users can run and test directly.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">Engineering Focus Areas:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Full-stack web applications (React 19, TypeScript, Next.js App Router)",
                    "Interactive browser simulators & live state execution tools",
                    "Database modeling & security (PostgreSQL / Supabase with Row Level Security)",
                    "Cloud functions, server actions, and reliable backend APIs",
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-background-100/70 border border-background-200 text-xs space-y-1">
                <span className="font-semibold text-foreground-950">Featured Project Case Study:</span>
                <p className="text-foreground-600">
                  Built <span className="font-semibold text-foreground-900">traits.co.in</span>, a complete e-commerce platform developed with clean architecture, database integrity, and edge deployment.
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
                  <span>Discuss a Development Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Track 4: Keynotes, Guest Lectures & Talks */}
          <Reveal delay={200}>
            <section id="speaking" className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-purple-400/50 hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center shrink-0">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold block">Track 04</span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-purple-700 transition-colors">
                    Keynotes, College Talks &amp; Panel Discussions
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-600 leading-relaxed font-light">
                Keynotes, college guest lectures, and panel talks on why rote learning fails in computer science, how students should learn in the AI era, and what real engineering ability looks like.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs font-semibold text-foreground-800 uppercase tracking-wider">Key Talk Topics:</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-5 bg-background-100/70 border border-background-200 rounded-2xl space-y-1">
                    <div className="font-heading font-semibold text-sm text-foreground-950">Beyond Syntax: Why Memorizing Code Fails</div>
                    <p className="text-foreground-600 text-xs leading-relaxed font-light">Why college exams and LeetCode don&apos;t prepare students for production, and how building real projects creates lasting skills.</p>
                  </div>
                  <div className="p-5 bg-background-100/70 border border-background-200 rounded-2xl space-y-1">
                    <div className="font-heading font-semibold text-sm text-foreground-950">AI in Software Engineering: How to Stand Out</div>
                    <p className="text-foreground-600 text-xs leading-relaxed font-light">How colleges and students can verify genuine understanding when AI can generate code in seconds.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-background-200/80">
                <Link
                  href="/contact?intent=speaking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium text-xs hover:bg-purple-500 transition-all shadow-xs"
                  id="work-speaking-cta"
                >
                  <span>Invite Vikas to Speak</span>
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

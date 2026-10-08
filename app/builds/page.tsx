import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Layers, Code2, Sparkles, Terminal, Cpu } from "lucide-react";
import { getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Builds & Living Portfolio — Vikas Bandaru",
  description:
    "Software architectures, learning environments, and production systems built from first principles.",
};

export default function BuildsPage() {
  const builds = getBuilds();

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Living Portfolio &amp; Systems"
        badgeDotColor="bg-emerald-400"
        title="Builds &amp; Living Artifacts"
        titleHighlight="from First Principles"
        description="A living portfolio of functioning software, learning environments, and system architectures built to test ideas through consequence rather than passive theory."
        bgImage="/images/editorial/build-logicsims.webp"
        stats={[
          { value: "01", label: "Live Simulator" },
          { value: "02+", label: "Production Architectures" },
          { value: "100%", label: "First-Principles Focus" },
        ]}
      />

      {/* Main Content Container */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Flagship: LogicSims Spotlight Card */}
        <Reveal>
          <section className="relative rounded-3xl bg-gradient-to-br from-[#0b192c] via-[#091525] to-[#050d18] border border-primary-500/30 text-white p-7 sm:p-10 md:p-12 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/80 border border-primary-500/40 text-primary-300 font-mono text-xs uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-primary-400" />
                  <span>Flagship Architecture</span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-700/80 px-3 py-1 text-xs shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Prototype
                </span>
              </div>

              {/* Main Content Row */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                    LogicSims
                  </h2>
                  <p className="text-base text-foreground-200/90 leading-relaxed font-light">
                    A discovery-based learning architecture replacing passive lectures with consequence-driven simulation. <strong className="text-white font-medium">LogicSims Java</strong> is the first public prototype — a practical simulator focused on programming concepts, state manipulation, and interactive mental modeling.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Interactive Sandbox", "Visual State Machine", "Empirical Feedback Loop", "Web Prototype"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-foreground-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative w-full sm:w-64 h-48 sm:h-52 lg:w-72 lg:h-56 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-xl">
                  <Image
                    src="/images/editorial/build-logicsims.webp"
                    alt="LogicSims Flagship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    Java Execution Engine
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://logic-sims-java.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
                  id="builds-logicsims-external-btn"
                >
                  <span>Launch Prototype (LogicSims Java)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/logicsims"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-700 bg-white/5 text-foreground-200 font-medium text-xs hover:bg-white/10 hover:text-white transition-all"
                  id="builds-logicsims-link"
                >
                  <span>Deep Dive into Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Production Systems & Case Studies */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-background-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-primary-600 block">Case Studies</span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 mt-1">
                Production Systems &amp; Case Studies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {builds
              .filter((build) => build.slug !== "logicsims")
              .map((build, index) => (
                <Reveal key={build.slug} delay={index * 100}>
                  <article className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-primary-400/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-background-200/60">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-foreground-600 uppercase tracking-wider">
                          {build.category}
                        </span>
                      </div>
                      <MaturityBadge status={build.status} />
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pt-6">
                      <div className="space-y-4 flex-1">
                        <div className="space-y-1">
                          <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-primary-600 transition-colors">
                            <Link href={`/builds/${build.slug}`}>{build.title}</Link>
                          </h3>
                          <p className="font-mono text-xs font-medium text-primary-600">{build.tagline}</p>
                        </div>

                        <p className="text-sm sm:text-base text-foreground-600 leading-relaxed max-w-2xl font-light">
                          {build.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {build.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-background-100 border border-background-200 rounded-full text-[11px] text-foreground-700 font-mono font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-5">
                          <Link
                            href={`/builds/${build.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            <span>View Architecture Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                          {build.liveUrl && (
                            <a
                              href={build.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-foreground-500 hover:text-foreground-900 transition-colors font-medium"
                            >
                              <span>Visit Live System</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="relative w-full sm:w-44 sm:h-44 md:w-52 md:h-52 shrink-0 rounded-2xl overflow-hidden border border-background-200 bg-background-100 shadow-sm self-stretch sm:self-center">
                        <Image
                          src="/images/editorial/build-traits.webp"
                          alt={build.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}


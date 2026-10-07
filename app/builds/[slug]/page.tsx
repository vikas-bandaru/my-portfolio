import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react";
import { getBuildBySlug, getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  const builds = getBuilds();
  return builds.map((build) => ({
    slug: build.slug,
  }));
}

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // If someone requests /builds/logicsims, seamlessly route to /logicsims
  if (slug === "logicsims") {
    redirect("/logicsims");
  }

  const build = getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  return (
    <div className="space-y-12 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <div className="space-y-6">
          <Link
            href="/builds"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-foreground-500 hover:text-primary-700 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Back to All Builds
          </Link>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200/60 px-3 py-1 rounded-full">
                {build.category} Case Study
              </span>
              <MaturityBadge status={build.status} />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground-950 leading-tight">
              {build.title}
            </h1>

            <p className="text-base sm:text-lg text-foreground-600 font-normal leading-relaxed">
              {build.tagline}
            </p>

            {build.liveUrl && (
              <div className="pt-2">
                <a
                  href={build.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
                >
                  Visit Live Deployment ({build.liveUrl.replace("https://", "")}) <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </header>
        </div>
      </Reveal>

      {/* Summary */}
      <Reveal delay={100}>
        <section className="space-y-3 p-6 sm:p-8 rounded-3xl bg-white/90 border border-foreground-100 shadow-xs">
          <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground-500">
            Executive Architecture Summary
          </h2>
          <p className="text-sm sm:text-base text-foreground-700 leading-relaxed">
            {build.summary}
          </p>
        </section>
      </Reveal>

      {/* Highlights & Architecture Breakdown */}
      <Reveal delay={150}>
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
            Technical Architecture Highlights
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {build.highlights.map((h, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/90 border border-foreground-100 shadow-xs space-y-2 hover:border-primary-300 transition-all">
                <div className="font-semibold text-foreground-950 text-xs flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  {h.label}
                </div>
                <p className="text-xs text-foreground-600 leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Key System Outcomes */}
      <Reveal delay={200}>
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
            Delivered Outcomes
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-700 leading-relaxed">
            {build.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Tech Stack Chips */}
      <Reveal delay={250}>
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground-500">
            Technology & Platform Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {build.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background-100/80 border border-foreground-200/60 rounded-full text-xs font-mono font-medium text-foreground-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={300}>
        <div className="pt-8 border-t border-foreground-100 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
          >
            Discuss a Similar Build with Vikas <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/builds"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-200 bg-white/80 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all"
          >
            Back to All Builds
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

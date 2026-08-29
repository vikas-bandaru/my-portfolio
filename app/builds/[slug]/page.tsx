import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, Database, Zap, Cloud, Code2 } from "lucide-react";
import { getBuildBySlug, getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";

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
    <div className="space-y-10 max-w-3xl">
      <Link
        href="/builds"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to All Builds
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {build.category} Case Study
          </span>
          <MaturityBadge status={build.status} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
          {build.title}
        </h1>

        <p className="text-base text-stone-600 font-medium leading-relaxed">
          {build.tagline}
        </p>

        {build.liveUrl && (
          <div className="pt-2">
            <a
              href={build.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white font-medium text-xs hover:bg-sky-800 transition-colors shadow-xs"
            >
              Visit Live Deployment ({build.liveUrl.replace("https://", "")}) <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* Summary */}
      <section className="space-y-3 p-6 rounded-xl bg-stone-50 border border-stone-200">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-stone-700">
          Executive Architecture Summary
        </h2>
        <p className="text-sm text-stone-800 leading-relaxed">
          {build.summary}
        </p>
      </section>

      {/* Highlights & Architecture Breakdown */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Technical Architecture Highlights
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {build.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-lg bg-white border border-stone-200 space-y-1.5">
              <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                {h.label}
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key System Outcomes */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Delivered Outcomes
        </h2>
        <ul className="space-y-2 text-xs text-stone-700 list-disc pl-5 leading-relaxed">
          {build.outcomes.map((outcome, idx) => (
            <li key={idx}>{outcome}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack Chips */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-stone-500">
          Technology & Platform Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {build.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-stone-100 border border-stone-200/80 rounded-md text-xs font-mono font-medium text-stone-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-3">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-700 text-white font-medium text-xs hover:bg-sky-800 transition-colors"
        >
          Discuss a Similar Build with Vikas <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

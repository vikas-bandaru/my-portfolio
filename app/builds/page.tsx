import Link from "next/link";
import { ArrowRight, ExternalLink, Layers, Code2, Cpu, Zap } from "lucide-react";
import { getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";

export const metadata = {
  title: "Builds & Living Portfolio — Vikas Bandaru",
  description:
    "Software architectures, learning environments, and production systems built from first principles.",
};

export default function BuildsPage() {
  const builds = getBuilds();

  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Builds & Living Artifacts
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          A living portfolio of functioning software, learning environments, and system architectures built to test ideas through consequence.
        </p>
      </header>

      {/* Flagship: LogicSims Spotlight Card */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 text-white space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-300">
              Flagship Project
            </span>
          </div>
          <MaturityBadge status="live" className="bg-emerald-950/80 text-emerald-300 border-emerald-800" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            LogicSims
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
            A discovery-based learning platform using logic as a first-principles operating system. Replaces passive lecture models with interactive mental modeling, consequence tracing, and proof-of-work validation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/logicsims"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-stone-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
            id="builds-logicsims-link"
          >
            Deep Dive into LogicSims Architecture
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://logicsims.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-700 text-stone-200 font-medium text-xs hover:bg-stone-800 transition-colors"
            id="builds-logicsims-external-btn"
          >
            Launch Prototype (logicsims.com) <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Production Case Studies & Builds */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Production Systems & Case Studies
        </h2>

        <div className="space-y-6">
          {builds
            .filter((build) => build.slug !== "logicsims")
            .map((build) => (
              <article
                key={build.slug}
                className="p-6 rounded-xl border border-stone-200 bg-white space-y-4 hover:border-stone-400 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {build.category}
                    </span>
                  </div>
                  <MaturityBadge status={build.status} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-900">
                    <Link href={`/builds/${build.slug}`} className="hover:text-sky-700 transition-colors">
                      {build.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-stone-500">{build.tagline}</p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {build.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {build.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-stone-100 rounded-md text-[11px] text-stone-700 font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/builds/${build.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                  >
                    View Architecture Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {build.liveUrl && (
                    <a
                      href={build.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 hover:underline"
                    >
                      Visit Live System <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}

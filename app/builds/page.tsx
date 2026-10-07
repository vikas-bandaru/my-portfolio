import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Layers, Code2 } from "lucide-react";
import { getBuilds } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Builds & Living Portfolio — Vikas Bandaru",
  description:
    "Software architectures, learning environments, and production systems built from first principles.",
};

export default function BuildsPage() {
  const builds = getBuilds();

  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <PageHeader
          eyebrow="Living Portfolio"
          eyebrowIcon={<Layers className="w-3.5 h-3.5 text-primary-600" />}
          title="Builds & Living Artifacts"
          description="A living portfolio of functioning software, learning environments, and system architectures built to test ideas through consequence."
        />
      </Reveal>

      {/* Flagship: LogicSims Spotlight Card */}
      <Reveal delay={100}>
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-900/40 text-white space-y-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="inline-flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-300">
                Flagship Architecture
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-3 py-1 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Prototype
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
            <div className="space-y-3 flex-1">
              <h2 className="font-serif text-3xl font-normal text-white tracking-tight">
                LogicSims
              </h2>
              <p className="text-sm text-foreground-300 leading-relaxed max-w-xl">
                A discovery-based learning architecture replacing passive lectures with consequence-driven simulation. <strong>LogicSims Java</strong> is the first public prototype — a practical simulator focused on programming concepts, state manipulation, and interactive mental modeling.
              </p>
            </div>

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-md">
              <Image
                src="/images/editorial/build-logicsims.webp"
                alt="LogicSims Flagship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 relative z-10">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-400 transition-all shadow-md"
              id="builds-logicsims-external-btn"
            >
              Launch Prototype (LogicSims Java) <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/logicsims"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-700 text-foreground-200 font-medium text-xs hover:bg-foreground-900/80 transition-all"
              id="builds-logicsims-link"
            >
              Deep Dive into Architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Production Case Studies & Builds */}
      <Reveal delay={150}>
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-foreground-950 border-b border-foreground-100 pb-3">
            Production Systems & Case Studies
          </h2>

          <div className="space-y-6">
            {builds
              .filter((build) => build.slug !== "logicsims")
              .map((build) => (
                <article
                  key={build.slug}
                  className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-primary-600" />
                      <span className="font-mono text-xs font-semibold text-foreground-500 uppercase tracking-wider">
                        {build.category}
                      </span>
                    </div>
                    <MaturityBadge status={build.status} />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-serif text-2xl font-normal text-foreground-950">
                        <Link href={`/builds/${build.slug}`} className="hover:text-primary-700 transition-colors">
                          {build.title}
                        </Link>
                      </h3>
                      <p className="font-mono text-xs text-primary-700">{build.tagline}</p>
                      <p className="text-sm text-foreground-600 leading-relaxed pt-1">
                        {build.summary}
                      </p>
                    </div>

                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden border border-foreground-200/60 bg-background-100 shadow-xs self-center sm:self-start">
                      <Image
                        src="/images/editorial/build-traits.webp"
                        alt={build.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {build.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background-100/80 border border-foreground-100/80 rounded-full text-[11px] text-foreground-700 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-5">
                    <Link
                      href={`/builds/${build.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                    >
                      View Architecture Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {build.liveUrl && (
                      <a
                        href={build.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-foreground-500 hover:text-foreground-800 transition-colors"
                      >
                        Visit Live System <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}

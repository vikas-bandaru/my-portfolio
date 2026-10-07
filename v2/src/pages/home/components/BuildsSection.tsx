import Reveal from "@/components/base/Reveal";
import SectionHeader from "@/components/base/SectionHeader";
import { flagshipBuild, buildCards } from "@/mocks/home";

export default function BuildsSection() {
  return (
    <section id="builds" className="w-full bg-background-100 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="Building, Platforms & Experiments"
            linkLabel="View All Builds"
            linkHref="#builds"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl bg-foreground-950 text-background-50 p-7 md:p-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"></div>
            <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-accent-500/15 blur-3xl"></div>

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-300">
                  <i className="ri-focus-3-line text-base" aria-hidden="true"></i>
                  {flagshipBuild.eyebrow}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-950/70 text-accent-300 border border-accent-800 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-dot"></span>
                  {flagshipBuild.status}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl md:text-3xl font-semibold tracking-tight max-w-3xl leading-tight">
                {flagshipBuild.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-background-100/80 leading-relaxed max-w-2xl">
                {flagshipBuild.description}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={flagshipBuild.primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-primary-600"
                >
                  {flagshipBuild.primaryCta}
                  <i className="ri-arrow-right-up-line text-base" aria-hidden="true"></i>
                </a>
                <a
                  href="#builds"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-background-50/25 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-background-50/10"
                >
                  {flagshipBuild.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {buildCards.map((build, index) => (
            <Reveal key={build.title} delay={index * 100}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-accent-400">
                <div className="w-full h-48 overflow-hidden bg-background-200">
                  <img
                    src={build.image}
                    alt={build.title}
                    title={`${build.title} — build by Vikas Bandaru`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-500">
                      {build.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-100 text-accent-800 border border-accent-200 text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-600 animate-pulse-dot"></span>
                      {build.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground-950 group-hover:text-accent-700 transition-colors">
                    {build.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">
                    {build.description}
                  </p>
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-background-100 border border-background-200 text-[11px] text-foreground-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
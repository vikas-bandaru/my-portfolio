import Reveal from "@/components/base/Reveal";
import SectionHeader from "@/components/base/SectionHeader";
import { loopSteps, loopArticles } from "@/mocks/home";

export default function IdeasSection() {
  return (
    <section id="ideas" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="The Thinking & Systems Analysis"
            description="The authored mission body of work is currently being built. Essays, research notes, and systems analyses will be published as they are developed — below are earlier working drafts pending author review."
            linkLabel="Explore Ideas Archive"
            linkHref="#ideas"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 rounded-xl bg-background-100 border border-background-200 px-5 py-4 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-[720px]">
              {loopSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-700 whitespace-nowrap">
                    {step}
                  </span>
                  {index < loopSteps.length - 1 ? (
                    <i className="ri-arrow-right-line text-sm text-primary-500" aria-hidden="true"></i>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loopArticles.map((article, index) => (
            <Reveal key={article.title} delay={index * 90}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-primary-400">
                <div className="w-full h-44 overflow-hidden bg-background-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    title={`${article.title} — systems analysis`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-700">
                      {article.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-900 border border-secondary-200 text-[10px] font-medium">
                      {article.badge}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground-950 leading-snug group-hover:text-primary-700 transition-colors">
                    <a href={article.href}>{article.title}</a>
                  </h3>
                  <p className="mt-2.5 text-xs text-foreground-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-[11px] text-foreground-500">{article.readTime}</span>
                    <a
                      href={article.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 group-hover:gap-2 transition-all"
                    >
                      View Draft
                      <i className="ri-arrow-right-line" aria-hidden="true"></i>
                    </a>
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
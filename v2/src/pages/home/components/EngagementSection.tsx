import Reveal from "@/components/base/Reveal";
import SectionHeader from "@/components/base/SectionHeader";
import { engagementCards } from "@/mocks/home";

export default function EngagementSection() {
  return (
    <section className="w-full bg-background-100 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader title="Two Ways to Engage" />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {engagementCards.map((card, index) => {
            const isPrimary = card.tone === "primary";
            return (
              <Reveal key={card.id} delay={index * 110}>
                <div
                  id={card.id === "work" ? "work" : undefined}
                  className="group h-full flex flex-col rounded-2xl border border-background-200 bg-background-50 p-7 md:p-9 scroll-mt-24 transition-colors duration-300 hover:border-primary-400"
                >
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isPrimary ? "bg-primary-100 text-primary-800" : "bg-accent-100 text-accent-800"
                    }`}
                  >
                    <i className={`${card.icon} text-2xl`} aria-hidden="true"></i>
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-950 leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{card.description}</p>
                  <div className="mt-auto pt-7">
                    <a
                      href={card.href}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold whitespace-nowrap transition-colors ${
                        isPrimary
                          ? "bg-primary-500 text-background-50 hover:bg-primary-600"
                          : "bg-accent-600 text-background-50 hover:bg-accent-700"
                      }`}
                    >
                      {card.cta}
                      <i className="ri-arrow-right-line text-base" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
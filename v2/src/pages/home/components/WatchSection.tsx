import Reveal from "@/components/base/Reveal";
import SectionHeader from "@/components/base/SectionHeader";
import { channels } from "@/mocks/home";

export default function WatchSection() {
  return (
    <section id="watch" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="Two Channels, Two Distinct Roles"
            linkLabel="Explore Video Hub"
            linkHref="#watch"
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {channels.map((channel, index) => (
            <Reveal key={channel.title} delay={index * 110}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-primary-400">
                <div className="relative w-full h-52 overflow-hidden bg-background-200">
                  <img
                    src={channel.image}
                    alt={channel.title}
                    title={`${channel.title} — video channel`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground-950/75 backdrop-blur-sm text-background-50 text-[10px] font-medium">
                    <i className="ri-youtube-line text-sm" aria-hidden="true"></i>
                    YouTube
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-100 text-primary-900 text-[11px] font-semibold">
                      {channel.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-100 text-secondary-900 border border-secondary-200 text-[10px] font-medium">
                      {channel.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-950">
                    {channel.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">
                    {channel.description}
                  </p>
                  <p className="mt-3 text-xs text-foreground-500 italic">
                    Audience: {channel.audience}
                  </p>
                  <div className="mt-auto pt-5">
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                    >
                      {channel.cta}
                      <i className="ri-arrow-right-up-line text-base" aria-hidden="true"></i>
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
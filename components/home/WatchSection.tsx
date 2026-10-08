import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight, Video } from "lucide-react";

export const channels = [
  {
    role: "Translate + Legitimize",
    status: "Launching / In Preparation",
    title: "Vikas Bandaru (Official Channel)",
    description:
      "Broader systems thinking, Indian education policy, future of work, AI-washing critique, and what developing nations can build for their own conditions. Mission video content is currently in preparation.",
    audience: "Educators, decision-makers, parents, and systems thinkers.",
    cta: "Visit Official Channel",
    href: "https://www.youtube.com/@VikasBandaruOfficial",
    image: "/images/editorial/watch-official.webp",
  },
  {
    role: "Enable + Implement",
    status: "Active Builder Channel",
    title: "Vikas Bandaru Tech",
    description:
      "Technical how-tos, programming breakdowns, Salesforce / Agentforce implementation, LogicSims engine development, and build-in-public logs.",
    audience: "Software engineers, aspiring builders, and hands-on developers.",
    cta: "Visit Tech Channel",
    href: "https://www.youtube.com/@VikasBandaruTech",
    image: "/images/editorial/watch-tech.webp",
  },
];

export default function WatchSection() {
  return (
    <section id="watch" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="Two Channels, Two Distinct Roles"
            linkLabel="Explore Video Hub"
            linkHref="/watch"
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {channels.map((channel, index) => (
            <Reveal key={channel.title} delay={index * 110}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-primary-400 shadow-xs">
                <div className="relative w-full h-52 overflow-hidden bg-background-200">
                  <Image
                    src={channel.image}
                    alt={channel.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground-950/75 backdrop-blur-sm text-background-50 text-[10px] font-medium">
                    <Video className="w-3 h-3 text-red-400" />
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
                      <ArrowUpRight className="w-4 h-4" />
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

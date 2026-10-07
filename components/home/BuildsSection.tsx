import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";

export const buildCards = [
  {
    type: "Experiment",
    status: "Live Prototype",
    title: "LogicSims Architecture",
    slug: "logicsims",
    href: "/logicsims",
    description:
      "LogicSims is a broader vision and evolving architecture for learning through consequence, experimentation, and systems thinking. LogicSims Java serves as its first live, public prototype.",
    tags: ["React", "Next.js", "TypeScript", "State Machines"],
    image: "/images/editorial/build-logicsims.webp",
  },
  {
    type: "Client Build",
    status: "Live",
    title: "Traits E-Commerce Platform",
    slug: "traits-ecommerce",
    href: "/builds/traits-ecommerce",
    description:
      "Architected and delivered a production e-commerce platform using rapid agentic development workflows, paired with a Supabase relational backend, row-level security (RLS), and serverless edge functions for secure transactions.",
    tags: ["React 19", "TypeScript", "Vite", "TailwindCSS v3"],
    image: "/images/editorial/build-traits.webp",
  },
];

export default function BuildsSection() {
  return (
    <section id="builds" className="w-full bg-background-100 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="Building, Platforms & Experiments"
            linkLabel="View All Builds"
            linkHref="/builds"
          />
        </Reveal>

        {/* Flagship Spotlight Card */}
        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl bg-foreground-950 text-background-50 p-7 md:p-10 relative overflow-hidden shadow-sm">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-accent-500/15 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-300">
                  <Layers className="w-4 h-4 text-primary-400" />
                  Flagship Experiment
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-950/70 text-accent-300 border border-accent-800 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-dot"></span>
                  Live Prototype
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl md:text-3xl font-semibold tracking-tight max-w-3xl leading-tight">
                LogicSims — Discovery-Based Simulation Environment
              </h3>
              <p className="mt-4 text-sm md:text-base text-background-100/80 leading-relaxed max-w-2xl">
                LogicSims is the broader vision for learning through simulation, experimentation, consequence, and systems thinking. LogicSims Java is the first public prototype — an early experiment exploring how programming concepts can be learned through an interactive simulator-based environment.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://logic-sims-java.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-primary-600 shadow-xs"
                  id="builds-logicsims-prototype-btn"
                >
                  Explore the LogicSims Prototype
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/logicsims"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-background-50/25 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-background-50/10"
                  id="builds-logicsims-vision-btn"
                >
                  Explore the LogicSims Vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {buildCards.map((build, index) => (
            <Reveal key={build.title} delay={index * 100}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-accent-400 shadow-xs">
                <div className="relative w-full h-48 overflow-hidden bg-background-200">
                  <Image
                    src={build.image}
                    alt={build.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-500 font-semibold">
                      {build.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-100 text-accent-800 border border-accent-200 text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-600 animate-pulse-dot"></span>
                      {build.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground-950 group-hover:text-accent-700 transition-colors">
                    <Link href={build.href}>{build.title}</Link>
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

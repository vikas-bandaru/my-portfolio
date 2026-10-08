import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import { getIdeas } from "@/lib/content";

export const loopSteps = [
  "Observe",
  "Translate",
  "Connect",
  "Question",
  "Imagine",
  "Experiment",
  "Build",
  "Reflect",
  "Share",
];

const ideaThumbnails: Record<string, string> = {
  "collapse-of-syntax-first-cs": "/images/editorial/idea-exam-hall.webp",
  "proof-of-work-for-the-mind": "/images/editorial/idea-event-loop.webp",
  "curriculum-as-life-toolkit": "/images/editorial/idea-mentoring.webp",
  "death-of-middle-tier-it": "/images/editorial/hero-network.webp",
};

export default function IdeasSection() {
  const posts = getIdeas().slice(0, 3);

  return (
    <section id="ideas" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="Ideas & Systems Analysis"
            description="Reflective practitioner essays drawn from 12 years in university engineering classrooms, systems architecture, and cognitive pedagogy in the post-AI era."
            linkLabel="Explore All Essays"
            linkHref="/ideas"
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
                    <ArrowRight className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-primary-400 shadow-xs">
                <div className="relative w-full h-44 overflow-hidden bg-background-200">
                  <Image
                    src={ideaThumbnails[post.slug] || "/images/editorial/hero-network.webp"}
                    alt={post.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-700 font-semibold">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-foreground-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground-950 leading-snug group-hover:text-primary-700 transition-colors">
                    <Link href={`/ideas/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2.5 text-xs text-foreground-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-[11px] text-foreground-500">{post.readTime}</span>
                    <Link
                      href={`/ideas/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 group-hover:gap-2 transition-all"
                    >
                      Read Essay
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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

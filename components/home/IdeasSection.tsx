import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";

export const loopSteps = [
  "Observe",
  "Translate",
  "Connect",
  "Question",
  "Imagine",
  "Experiment",
  "Build",
  "Share",
];

export const featuredArticles = [
  {
    slug: "rote-to-real-problem-solving",
    category: "Reform",
    badge: "Legacy Draft",
    title: "Why High Exam Scores Fail in Software Roles (And How Discovery Learning Fixes It)",
    excerpt:
      "An analysis of why traditional score-oriented technical education in India creates brittle graduates, and how simulation-based learning restores practical capability.",
    readTime: "6 min read",
    image: "/images/editorial/idea-exam-hall.webp",
  },
  {
    slug: "train-the-trainer-framework",
    category: "Pedagogy",
    badge: "Legacy Draft",
    title: "Train the Trainer: Building Capability Beyond the Slide Deck",
    excerpt:
      "How to coach engineering faculty to shift from lecturing syntax to guiding open-ended technical discovery.",
    readTime: "8 min read",
    image: "/images/editorial/idea-mentoring.webp",
  },
  {
    slug: "mental-models-async-javascript",
    category: "Engineering",
    badge: "Legacy Draft",
    title: "Teaching Mental Models Over Syntax: The Async Execution Case Study",
    excerpt:
      "Why memorizing event loop rules fails under pressure, and how visual state machines teach asynchronous logic intuitively to developers.",
    readTime: "5 min read",
    image: "/images/editorial/idea-event-loop.webp",
  },
];

export default function IdeasSection() {
  return (
    <section id="ideas" className="w-full bg-background-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeader
            title="The Thinking & Systems Analysis"
            description="The authored mission body of work is currently being built. Essays, research notes, and systems analyses will be published as they are developed — below are earlier working drafts pending author review."
            linkLabel="Explore Ideas Archive"
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
          {featuredArticles.map((article, index) => (
            <Reveal key={article.title} delay={index * 90}>
              <article className="group h-full flex flex-col rounded-xl border border-background-200 bg-background-50 overflow-hidden transition-colors duration-300 hover:border-primary-400 shadow-xs">
                <div className="relative w-full h-44 overflow-hidden bg-background-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-700 font-semibold">
                      {article.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-900 border border-secondary-200 text-[10px] font-medium">
                      {article.badge}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground-950 leading-snug group-hover:text-primary-700 transition-colors">
                    <Link href={`/ideas/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-2.5 text-xs text-foreground-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-[11px] text-foreground-500">{article.readTime}</span>
                    <Link
                      href={`/ideas/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 group-hover:gap-2 transition-all"
                    >
                      View Draft
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, BookOpen, Clock, Tag, Sparkles } from "lucide-react";
import { IdeaItem } from "@/lib/content";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

const ideaThumbnails: Record<string, string> = {
  "collapse-of-syntax-first-cs": "/images/editorial/idea-event-loop.webp",
  "proof-of-work-for-the-mind": "/images/editorial/idea-exam-hall.webp",
  "curriculum-as-life-toolkit": "/images/editorial/idea-mentoring.webp",
  "death-of-middle-tier-it": "/images/editorial/hero-network.webp",
  "rote-to-real-problem-solving": "/images/editorial/idea-exam-hall.webp",
  "train-the-trainer-framework": "/images/editorial/idea-mentoring.webp",
  "mental-models-async-javascript": "/images/editorial/idea-event-loop.webp",
};

interface IdeasClientProps {
  initialPosts: IdeaItem[];
}

export default function IdeasClient({ initialPosts }: IdeasClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Reform", "Learning", "Engineering"];

  const filteredPosts =
    selectedCategory === "All"
      ? initialPosts
      : initialPosts.filter((post) => post.category === selectedCategory);

  const statsCount = String(initialPosts.length).padStart(2, "0");

  return (
    <div className="w-full">
      {/* Editorial Dark Subpage Hero */}
      <EditorialSubpageHero
        badge="Writings & Systems Analysis"
        badgeDotColor="bg-primary-400"
        title="Ideas & Systems Analysis"
        titleHighlight="in Engineering"
        description="The body of work is being built. Essays, research notes, and systems analyses exploring how discovery learning, mental modeling, and consequences replace rote memory."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: statsCount, label: "Published Essays" },
          { value: "03", label: "Core Categories" },
          { value: "12", label: "Years Teaching Experience" },
        ]}
      >
        {/* Category Filter Pills in Hero */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-background-100/70 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 text-xs font-mono font-medium rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-500 text-background-50 border-primary-400 shadow-sm"
                  : "bg-background-50/5 text-background-100/80 border-background-50/15 hover:bg-background-50/10 hover:text-background-50"
              }`}
              id={`filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>
      </EditorialSubpageHero>

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-12">
        {/* Intro Note */}
        <Reveal>
          <div className="p-6 sm:p-7 rounded-3xl bg-background-50/80 border border-background-200 text-foreground-800 leading-relaxed shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-2xl bg-primary-50 text-primary-800 border border-primary-200/60 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4 text-primary-700" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-heading font-semibold text-foreground-950 block">
                Reflective Practitioner Notes & Essays
              </span>
              <p className="text-foreground-600 font-light">
                These pieces represent personal analyses, observations from 12 years in university classrooms and technical leadership, and reflections on our evolving relationship with software systems in the AI era.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Essays List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-background-200">
            <div className="text-xs font-mono uppercase tracking-wider text-foreground-500">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "Essay" : "Essays"}
            </div>
            <div className="text-xs font-mono text-foreground-400">
              Category: <span className="font-semibold text-foreground-700">{selectedCategory}</span>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <Reveal>
              <div className="py-20 px-6 rounded-3xl border border-dashed border-background-300 bg-background-50/50 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 mx-auto flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-heading font-semibold text-xl text-foreground-950">
                    No Published Essays in this View
                  </h3>
                  <p className="text-sm text-foreground-600 font-light leading-relaxed">
                    Essays are actively being curated, peer-reviewed, or drafted in the Studio. Once published, essays will appear here automatically.
                  </p>
                </div>
                {selectedCategory !== "All" && (
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary-600 hover:text-primary-800 transition-colors pt-2"
                  >
                    Clear filter and view all
                  </button>
                )}
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 80}>
                  <article className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-6 sm:p-8 md:p-9 shadow-xs hover:border-primary-400/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 font-mono text-[11px] font-semibold text-primary-800 uppercase tracking-wider">
                            <Tag className="w-3 h-3 text-primary-600" />
                            {post.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-foreground-400 font-mono text-[11px]">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="text-foreground-300">•</span>
                          <span className="text-foreground-400 font-mono text-[11px]">
                            {post.date}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1">
                          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-primary-600 transition-colors duration-300 tracking-tight leading-snug">
                            <Link href={`/ideas/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h2>
                          {post.subtitle && (
                            <p className="text-sm font-medium text-primary-800 font-sans">
                              {post.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-foreground-600 leading-relaxed max-w-3xl font-light">
                          {post.excerpt}
                        </p>

                        {/* Read Link */}
                        <div className="pt-2">
                          <Link
                            href={`/ideas/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-300"
                          >
                            <span>Read Full Essay</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* Thumbnail if present */}
                      {(post.coverImage || ideaThumbnails[post.slug] || post.sections.length > 0) && (
                        <div className="relative w-full sm:w-36 sm:h-36 md:w-44 md:h-44 shrink-0 rounded-2xl overflow-hidden border border-background-200 bg-background-100 shadow-sm self-stretch sm:self-center">
                          <Image
                            src={post.coverImage || ideaThumbnails[post.slug] || "/images/editorial/hero-network.webp"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

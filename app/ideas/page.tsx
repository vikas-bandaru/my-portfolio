"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, BookOpen } from "lucide-react";
import { getIdeas, IdeaItem } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const ideaThumbnails: Record<string, string> = {
  "rote-to-real-problem-solving": "/images/editorial/idea-exam-hall.webp",
  "train-the-trainer-framework": "/images/editorial/idea-mentoring.webp",
  "mental-models-async-javascript": "/images/editorial/idea-event-loop.webp",
};

export default function IdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const posts: IdeaItem[] = getIdeas();
  const categories = ["All", "Reform", "Pedagogy", "Engineering"];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <div className="space-y-6">
          <PageHeader
            eyebrow="Writings & Systems Analysis"
            eyebrowIcon={<BookOpen className="w-3.5 h-3.5 text-primary-600" />}
            title="Ideas & Systems Analysis"
            description="The body of work is being built. Essays, research notes, and systems analyses will be published here as they are developed."
          />

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed space-y-1 shadow-xs">
            <span className="font-semibold block text-amber-950">Editorial Status Note:</span>
            <span>
              Authored mission essays and formal research publications are currently in progress. The items below represent earlier exploratory working drafts preserved from repository scaffolding, currently pending author review.
            </span>
          </div>

          {/* Topic Filter */}
          <div className="flex items-center gap-3 pt-2">
            <Filter className="w-4 h-4 text-foreground-400 shrink-0" />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter essays by category">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 text-xs font-mono font-medium rounded-full border transition-all ${
                    selectedCategory === category
                      ? "bg-foreground-950 text-white border-foreground-950 shadow-xs"
                      : "bg-white/80 text-foreground-700 border-foreground-200/60 hover:border-primary-300"
                  }`}
                  id={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="space-y-6 pt-4 border-t border-foreground-100">
        {filteredPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 50}>
            <article className="p-6 sm:p-7 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs hover:border-primary-300 hover:shadow-md transition-all space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-foreground-500">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-primary-700 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200/80">
                    Legacy Draft — Pending Review
                  </span>
                </div>
                <span className="font-mono text-xs">{post.readTime}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="space-y-2 flex-1">
                  <h2 className="font-serif text-2xl font-normal text-foreground-950 hover:text-primary-700 transition-colors">
                    <Link href={`/ideas/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-foreground-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {ideaThumbnails[post.slug] && (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden border border-foreground-200/60 bg-background-100 shadow-xs self-center sm:self-start">
                    <Image
                      src={ideaThumbnails[post.slug]}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="pt-2">
                <Link
                  href={`/ideas/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                >
                  View Working Draft
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

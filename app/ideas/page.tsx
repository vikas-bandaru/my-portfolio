"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { getIdeas, IdeaItem } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";

export default function IdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const posts: IdeaItem[] = getIdeas();
  const categories = ["All", "Reform", "Pedagogy", "Engineering"];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-10 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Ideas & Systems Analysis
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Writing, working notes, and pedagogical analyses in development as the body of work expands around technical education reform and system mental models.
        </p>

        {/* Topic Filter */}
        <div className="flex items-center gap-3 pt-2">
          <Filter className="w-4 h-4 text-stone-400" />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter essays by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-xs font-semibold rounded-md border transition-colors ${
                  selectedCategory === category
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                }`}
                id={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-6 pt-4 border-t border-stone-200">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-colors space-y-3"
          >
            <div className="flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sky-700 uppercase tracking-wider">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{post.readTime}</span>
                <MaturityBadge status={post.status} />
              </div>
            </div>

            <h2 className="text-xl font-bold text-stone-900 hover:text-sky-700 transition-colors">
              <Link href={`/ideas/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/ideas/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
              >
                Read Full Essay
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: "Reform" | "Pedagogy" | "Engineering";
  excerpt: string;
  readTime: string;
}

const posts: Post[] = [
  {
    slug: "rote-to-real-problem-solving",
    title: "Why High Exam Scores Fail in Software Roles (And How Discovery Learning Fixes It)",
    date: "August 18, 2026",
    category: "Reform",
    excerpt: "An analysis of why traditional score-oriented technical education in India creates brittle graduates, and how simulation-based learning restores practical capability.",
    readTime: "6 min read",
  },
  {
    slug: "train-the-trainer-framework",
    title: "Train the Trainer: Building Capability Beyond the Slide Deck",
    date: "July 24, 2026",
    category: "Pedagogy",
    excerpt: "How to coach engineering faculty to shift from lecturing syntax to guiding open-ended technical discovery.",
    readTime: "8 min read",
  },
  {
    slug: "mental-models-async-javascript",
    title: "Teaching Mental Models Over Syntax: The Async Execution Case Study",
    date: "June 12, 2026",
    category: "Engineering",
    excerpt: "Why memorizing event loop rules fails under pressure, and how visual state machines teach asynchronous logic intuitive to developers.",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Reform", "Pedagogy", "Engineering"];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-10 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Education & Engineering Essays
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Writing on Indian technical education reform, discovery-based learning architecture, and practical engineering mental models.
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
              <span className="font-semibold text-sky-700 uppercase tracking-wider">
                {post.category}
              </span>
              <span>{post.date} • {post.readTime}</span>
            </div>

            <h2 className="text-xl font-bold text-stone-900 hover:text-sky-700 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/blog/${post.slug}`}
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

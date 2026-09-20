import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers, ExternalLink } from "lucide-react";
import { getIdeaBySlug, getIdeas } from "@/lib/content";
import { MaturityBadge } from "@/components/MaturityBadge";

export async function generateStaticParams() {
  const posts = getIdeas();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function IdeaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = getIdeaBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <Link
        href="/ideas"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Ideas & Systems Analysis
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {post.category} Note
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
            Legacy Draft — Pending Review
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
          {post.title}
        </h1>

        <p className="text-xs text-stone-500">
          Repository Draft Note • {post.readTime} • Pending Author Review
        </p>

        <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>Archival Notice:</strong> This document is an unreviewed working note preserved from the initial repository scaffold. It does not represent an approved publication of Vikas Bandaru&apos;s mission body of work.
        </div>
      </header>

      <div className="prose-custom space-y-4 text-stone-800 border-t border-stone-200 pt-6 leading-relaxed">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Companion Cross-Link if applicable */}
      {post.relatedBuildSlug === "logicsims" && (
        <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-200 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-stone-900">
            <Layers className="w-4 h-4 text-sky-700" />
            Companion Experiment: LogicSims Java
          </div>
          <p className="text-stone-600 leading-relaxed">
            The concepts explored in this note are being tested interactively in the public LogicSims Java prototype.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900"
            >
              Try LogicSims Java Prototype <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-stone-300">•</span>
            <Link
              href="/logicsims"
              className="inline-flex items-center gap-1 font-semibold text-stone-600 hover:text-stone-900"
            >
              LogicSims Architecture & Vision <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}

      <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors"
        >
          Discuss this note with Vikas
        </Link>
        <Link
          href="/collaborate"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 text-stone-700 font-medium text-xs hover:bg-stone-100 transition-colors"
        >
          Collaborate on Research
        </Link>
      </div>
    </div>
  );
}

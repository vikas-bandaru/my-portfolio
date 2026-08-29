import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
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
        Back to Ideas & Essays
      </Link>

      <header className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {post.category} Working Draft / Note
          </span>
          <MaturityBadge status={post.status} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
          {post.title}
        </h1>

        <p className="text-xs text-stone-500">
          Published {post.date} • {post.readTime}
        </p>
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
            Companion Build: LogicSims Consequence Engine
          </div>
          <p className="text-stone-600 leading-relaxed">
            The ideas in this essay are empirically implemented in the LogicSims discovery learning simulator.
          </p>
          <Link
            href="/logicsims"
            className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900 pt-1"
          >
            Explore LogicSims Architecture <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors"
        >
          Discuss this essay with Vikas
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

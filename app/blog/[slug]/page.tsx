import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <div className="space-y-8 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Essays
      </Link>

      <header className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Education Reform Essay
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
          Why High Exam Scores Fail in Software Roles (And How Discovery Learning Fixes It)
        </h1>
        <p className="text-xs text-stone-500">
          Published August 18, 2026 • 6 min read
        </p>
      </header>

      <div className="prose-custom space-y-4 text-stone-800 border-t border-stone-200 pt-6">
        <p>
          In traditional technical education across India, students are evaluated primarily on their ability to recall syntax and reproduce standard algorithmic answers under exam conditions. This system rewards memory retention over diagnostic reasoning.
        </p>
        <p>
          When these graduates join production software teams, they encounter non-deterministic bugs, complex state dependencies, and ambiguous specs — environments where textbook recall offers zero guidance.
        </p>
        <h2 className="text-lg font-bold text-stone-900 pt-2">
          The Case for Discovery-Based Learning
        </h2>
        <p>
          Discovery-based learning flips the lecture model. Rather than providing formulas first and asking students to confirm them, we present students with interactive simulations: broken networks, memory leaks, and unoptimized queries.
        </p>
        <p>
          By experimenting, breaking things, and observing real-time feedback, learners construct deep conceptual mental models. When they understand *why* a system behaves a certain way, the syntax becomes trivial to look up.
        </p>
      </div>

      <div className="pt-8 border-t border-stone-200">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors"
        >
          Discuss this essay with Vikas
        </Link>
      </div>
    </div>
  );
}

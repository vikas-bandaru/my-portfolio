import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers, ExternalLink } from "lucide-react";
import { getIdeaBySlug, getIdeas } from "@/lib/content";
import Reveal from "@/components/Reveal";

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
    <div className="space-y-10 max-w-2xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <div className="space-y-6">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-foreground-500 hover:text-primary-700 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Ideas & Systems Analysis
          </Link>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200/60 px-3 py-1 rounded-full">
                {post.category} Note
              </span>
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200/80">
                Legacy Draft — Pending Review
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground-950 leading-tight">
              {post.title}
            </h1>

            <p className="font-mono text-xs text-foreground-500">
              Repository Draft Note • {post.readTime} • Pending Author Review
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 leading-relaxed shadow-xs">
              <strong className="font-semibold block mb-0.5">Archival Notice:</strong>
              This document is an unreviewed working note preserved from the initial repository scaffold. It does not represent an approved publication of Vikas Bandaru&apos;s mission body of work.
            </div>
          </header>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="space-y-5 text-foreground-800 border-t border-foreground-100 pt-8 text-base sm:text-lg leading-relaxed font-normal">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      {/* Companion Cross-Link if applicable */}
      {post.relatedBuildSlug === "logicsims" && (
        <Reveal delay={150}>
          <div className="p-6 rounded-3xl bg-primary-50/70 border border-primary-200/70 space-y-3 text-xs shadow-xs">
            <div className="flex items-center gap-2 font-serif text-base font-normal text-foreground-950">
              <Layers className="w-4 h-4 text-primary-600" />
              Companion Experiment: LogicSims Java
            </div>
            <p className="text-foreground-700 leading-relaxed text-sm">
              The concepts explored in this note are being tested interactively in the public LogicSims Java prototype.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://logic-sims-java.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-900 transition-colors"
              >
                Try LogicSims Java Prototype <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-foreground-300">•</span>
              <Link
                href="/logicsims"
                className="inline-flex items-center gap-1.5 font-semibold text-foreground-700 hover:text-foreground-950 transition-colors"
              >
                LogicSims Architecture & Vision <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      )}

      <Reveal delay={200}>
        <div className="pt-8 border-t border-foreground-100 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs"
          >
            Discuss this note with Vikas
          </Link>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-200 bg-white/80 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all"
          >
            Collaborate on Research
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers, ExternalLink, Calendar, Clock, BookOpen, Quote } from "lucide-react";
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

  // Cross-post links are prepared for personal blog CMS and only display if a URL is populated
  const hasCrossPost = Boolean(post.crossPostLinks?.medium || post.crossPostLinks?.linkedin);

  return (
    <article className="max-w-3xl mx-auto pt-28 md:pt-36 pb-24 px-6 md:px-8 space-y-12">
      {/* Back Navigation */}
      <Reveal>
        <Link
          href="/ideas"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-foreground-500 hover:text-primary-700 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Ideas &amp; Reflective Essays</span>
        </Link>
      </Reveal>

      {/* Article Header */}
      <Reveal delay={60}>
        <header className="space-y-6 pb-8 border-b border-background-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200/60 px-3 py-1 rounded-full font-semibold">
              {post.category} Essay
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-foreground-500">
              <Calendar className="w-3 h-3 text-foreground-400" />
              {post.date}
            </span>
            <span className="text-foreground-300">•</span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-foreground-500">
              <Clock className="w-3 h-3 text-foreground-400" />
              {post.readTime}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground-950 leading-tight">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg sm:text-xl text-primary-800 font-medium leading-relaxed font-sans">
                {post.subtitle}
              </p>
            )}
          </div>

          {/* Author Attribution */}
          <div className="flex items-center gap-3 pt-3 text-xs text-foreground-600">
            <div className="w-9 h-9 rounded-full bg-primary-900 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">
              VB
            </div>
            <div>
              <div className="font-semibold text-foreground-950">Vikas Bandaru</div>
              <div className="text-foreground-500 font-light">
                12 Years in Engineering Education, Systems Architecture &amp; Pedagogy
              </div>
            </div>
          </div>

          {/* Conditional Cross-post Bar (Hidden if empty, ready for CMS) */}
          {hasCrossPost && (
            <div className="p-3 rounded-xl bg-background-100/80 border border-background-200 flex flex-wrap items-center gap-3 text-xs text-foreground-600">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-foreground-500">
                Also published on:
              </span>
              {post.crossPostLinks?.medium && (
                <a
                  href={post.crossPostLinks.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-700 hover:underline inline-flex items-center gap-1"
                >
                  Medium <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {post.crossPostLinks?.linkedin && (
                <a
                  href={post.crossPostLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-700 hover:underline inline-flex items-center gap-1"
                >
                  LinkedIn Articles <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </header>
      </Reveal>

      {/* Article Body Sections */}
      <div className="space-y-12 text-foreground-800 text-base sm:text-lg leading-relaxed font-normal">
        {post.sections.map((section, sIdx) => (
          <Reveal key={sIdx} delay={100 + sIdx * 60}>
            <section className="space-y-5">
              {section.heading && (
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 tracking-tight pt-2">
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <h3 className="font-heading font-medium text-lg sm:text-xl text-primary-800">
                  {section.subheading}
                </h3>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed font-light text-foreground-700">
                  {p}
                </p>
              ))}

              {/* Callout Quote or Lens Attribution */}
              {section.callout && (
                <div className="my-6 p-6 sm:p-7 rounded-2xl bg-primary-50/80 border-l-4 border-primary-600 text-foreground-900 shadow-xs space-y-2">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div className="space-y-1.5 flex-1">
                      <p className="font-serif italic text-base sm:text-lg leading-relaxed text-foreground-900">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                      {section.callout.attribution && (
                        <p className="font-mono text-xs uppercase tracking-wider text-primary-800 font-semibold">
                          — {section.callout.attribution}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </Reveal>
        ))}
      </div>

      {/* Companion Experiment Link */}
      {post.relatedBuildSlug === "logicsims" && (
        <Reveal delay={200}>
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-950 to-foreground-950 text-white space-y-4 shadow-xl border border-primary-500/30">
            <div className="flex items-center gap-2 font-heading font-semibold text-lg text-white">
              <Layers className="w-5 h-5 text-primary-400" />
              <span>Interactive Companion: LogicSims Java</span>
            </div>
            <p className="text-foreground-200 text-sm sm:text-base leading-relaxed font-light">
              The inductive, consequence-driven principles discussed in this essay are being tested live in the public LogicSims Java interactive simulator prototype.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://logic-sims-java.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 hover:bg-primary-400 text-white font-medium text-xs shadow-md transition-all"
              >
                <span>Launch LogicSims Java Simulator</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/logicsims"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs transition-all"
              >
                <span>Architecture &amp; Vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      )}

      {/* Discussion & Collaborative CTAs */}
      <Reveal delay={240}>
        <div className="pt-10 border-t border-background-200 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-heading font-semibold text-base text-foreground-950">
              Have thoughts or real-world observations on this?
            </h4>
            <p className="text-xs text-foreground-500 font-light">
              I welcome reflections from educators, engineers, and curious builders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact?intent=idea"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium text-xs hover:bg-primary-500 transition-all shadow-xs"
            >
              <span>Exchange Thoughts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background-200 bg-background-50/80 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all"
            >
              <span>Collaborate</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

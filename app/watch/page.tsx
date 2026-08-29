import Link from "next/link";
import { Video, ArrowRight, ExternalLink, Play, Sparkles, Code2, Users } from "lucide-react";

export const metadata = {
  title: "Watch & Media Channels — Vikas Bandaru",
  description:
    "Two distinct YouTube channels: Translating complex systems for thinkers and educators, and enabling builders through hands-on technical architecture.",
};

export default function WatchPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Watch & Public Thinking
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Organizing video work across two distinct channels and purposes: translating systems for decision-makers and enabling developers through concrete engineering.
        </p>
      </header>

      {/* Two Channels Grid */}
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Channel 1: VikasBandaruOfficial */}
        <section className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-semibold">
              Translate + Legitimize
            </div>

            <h2 className="text-xl font-bold text-stone-900">
              Vikas Bandaru (Official)
            </h2>

            <p className="text-xs text-stone-600 leading-relaxed">
              The intellectual and public channel exploring broader systemic questions:
            </p>

            <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Indian education reform and pedagogical policy</li>
              <li>Technology, GenAI, and human agency in society</li>
              <li>AI-washing critique and educator awareness</li>
              <li>What India and developing nations can build for their own conditions</li>
              <li>Historical case studies and systemic thinkers</li>
            </ul>

            <div className="pt-2 text-[11px] text-stone-500 font-medium">
              Target Audience: Educators, institutional leaders, parents, and systems thinkers.
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <a
              href="https://www.youtube.com/@VikasBandaruOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white font-medium text-xs hover:bg-sky-800 transition-colors"
              id="watch-official-channel-btn"
            >
              Visit Official Channel <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Channel 2: VikasBandaruTech1 */}
        <section className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
              Enable + Implement
            </div>

            <h2 className="text-xl font-bold text-stone-900">
              Vikas Bandaru Tech1
            </h2>

            <p className="text-xs text-stone-600 leading-relaxed">
              The builder channel dedicated to practical implementation and concrete engineering:
            </p>

            <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Technical how-tos and first-principles programming breakdowns</li>
              <li>Async JavaScript & event loop state machine walkthroughs</li>
              <li>Salesforce Platform & Agentforce architecture</li>
              <li>LogicSims simulation engine development & build-in-public logs</li>
              <li>Full-stack web application engineering</li>
            </ul>

            <div className="pt-2 text-[11px] text-stone-500 font-medium">
              Target Audience: Software engineers, developers, and hands-on builders.
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <a
              href="https://www.youtube.com/@VikasBandaruTech1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium text-xs hover:bg-emerald-800 transition-colors"
              id="watch-tech-channel-btn"
            >
              Visit Tech Channel <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>

      {/* Featured Video Spotlight */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-stone-900">
          Featured Technical Breakdown
        </h2>
        <div className="relative aspect-video rounded-xl bg-stone-900 overflow-hidden flex items-center justify-center border border-stone-800 group shadow-sm">
          <div className="absolute inset-0 bg-stone-950/40 flex flex-col justify-end p-6 text-white z-10">
            <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Featured Lesson
            </span>
            <h3 className="text-lg font-bold">
              Deconstructing Async JS & Event Loop Mental Models
            </h3>
            <p className="text-xs text-stone-300">
              YouTube Channel • Practical breakdown for developers
            </p>
          </div>

          <a
            href="https://www.youtube.com/@VikasBandaruTech1"
            target="_blank"
            rel="noopener noreferrer"
            className="z-20 w-16 h-16 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg"
            id="watch-featured-video-play-btn"
            aria-label="Play Featured Technical Breakdown Video"
          >
            <Play className="w-7 h-7 fill-current translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Related Pathways */}
      <section className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="text-stone-500">
          Looking to read long-form essays or inquire about 1-on-1 mentorship?
        </div>
        <div className="flex gap-4">
          <Link href="/ideas" className="font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1">
            Read Ideas & Essays <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/work" className="font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1">
            Explore Work With Me <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

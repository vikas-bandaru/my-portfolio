import Link from "next/link";
import Image from "next/image";
import { Video, ArrowRight, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Watch & Media Channels — Vikas Bandaru",
  description:
    "Two distinct YouTube channels: Translating complex systems for thinkers and educators, and enabling builders through hands-on technical architecture.",
};

export default function WatchPage() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <PageHeader
          eyebrow="Media & Channels"
          eyebrowIcon={<Video className="w-3.5 h-3.5 text-primary-600" />}
          title="Watch & Public Thinking"
          description="Organizing video work across two distinct channels and purposes: translating systems for decision-makers and enabling developers through concrete engineering."
        />
      </Reveal>

      {/* Two Channels Grid */}
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Channel 1: VikasBandaruOfficial */}
        <Reveal delay={100}>
          <section className="p-6 sm:p-7 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 flex flex-col justify-between hover:border-primary-300 hover:shadow-md transition-all h-full">
            <div className="space-y-4">
              <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-foreground-200/60 bg-background-100 shadow-xs">
                <Image
                  src="/images/editorial/watch-official.webp"
                  alt="Vikas Bandaru Official Channel"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 text-[11px] font-mono uppercase tracking-wider">
                  Translate + Legitimize
                </div>
                <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                  Launching Soon
                </span>
              </div>

              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                Vikas Bandaru (Official)
              </h2>

              <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed">
                The planned intellectual and public channel exploring broader systemic questions:
              </p>

              <ul className="text-xs text-foreground-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Indian education reform and pedagogical policy</li>
                <li>Technology, GenAI, and human agency in society</li>
                <li>AI-washing critique and educator awareness</li>
                <li>What India and developing nations can build for their own conditions</li>
                <li>Historical case studies and systemic thinkers</li>
              </ul>

              <div className="pt-2 text-[11px] text-foreground-500 font-mono">
                Status: Mission-oriented video essays currently in production.
              </div>
            </div>

            <div className="pt-4 border-t border-foreground-100">
              <a
                href="https://www.youtube.com/@VikasBandaruOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs w-full justify-center"
                id="watch-official-channel-btn"
              >
                Visit Official Channel <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        </Reveal>

        {/* Channel 2: VikasBandaruTech1 */}
        <Reveal delay={150}>
          <section className="p-6 sm:p-7 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 flex flex-col justify-between hover:border-primary-300 hover:shadow-md transition-all h-full">
            <div className="space-y-4">
              <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-foreground-200/60 bg-background-100 shadow-xs">
                <Image
                  src="/images/editorial/watch-tech.webp"
                  alt="Vikas Bandaru Tech1 Channel"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-mono uppercase tracking-wider">
                  Enable + Implement
                </div>
                <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  Active Channel
                </span>
              </div>

              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                Vikas Bandaru Tech1
              </h2>

              <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed">
                The builder channel dedicated to practical implementation and concrete engineering:
              </p>

              <ul className="text-xs text-foreground-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Technical how-tos and first-principles programming breakdowns</li>
                <li>Async JavaScript & event loop state machine walkthroughs</li>
                <li>Salesforce Platform & Agentforce architecture</li>
                <li>LogicSims simulation engine development & build-in-public logs</li>
                <li>Full-stack web application engineering</li>
              </ul>

              <div className="pt-2 text-[11px] text-foreground-500 font-mono">
                Target Audience: Software engineers, developers, and hands-on builders.
              </div>
            </div>

            <div className="pt-4 border-t border-foreground-100">
              <a
                href="https://www.youtube.com/@VikasBandaruTech1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs w-full justify-center"
                id="watch-tech-channel-btn"
              >
                Visit Tech Channel <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Active Builder Channel Spotlight */}
      <Reveal delay={200}>
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-900/40 text-white space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
              Active Channel
            </span>
            <span className="text-xs font-mono text-foreground-400">
              Hands-on Engineering & Tutorials
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
            Explore Hands-on Tutorials on VikasBandaruTech1
          </h2>
          <p className="text-sm text-foreground-300 leading-relaxed max-w-xl">
            Direct engineering tutorials and programming breakdowns covering full-stack concepts, state machines, and Salesforce architecture on the active developer channel.
          </p>
          <div className="pt-2">
            <a
              href="https://www.youtube.com/@VikasBandaruTech1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-md"
              id="watch-tech-channel-cta"
            >
              Watch on VikasBandaruTech1 <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </Reveal>

      {/* Related Pathways */}
      <Reveal delay={250}>
        <section className="pt-6 border-t border-foreground-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="text-foreground-500">
            Looking to read long-form essays or inquire about 1-on-1 mentorship?
          </div>
          <div className="flex gap-4">
            <Link href="/ideas" className="font-semibold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1 transition-colors">
              Read Ideas & Essays <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/work" className="font-semibold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1 transition-colors">
              Explore Work With Me <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

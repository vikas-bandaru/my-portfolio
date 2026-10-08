import Link from "next/link";
import Image from "next/image";
import { Video, ArrowRight, ExternalLink, Play, Radio, Users, Sparkles } from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Watch & Media Channels — Vikas Bandaru",
  description:
    "Two distinct YouTube channels: Translating complex systems for thinkers and educators, and enabling builders through hands-on technical architecture.",
};

export default function WatchPage() {
  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Media &amp; Public Channels"
        badgeDotColor="bg-red-500"
        title="Watch &amp; Public Thinking"
        titleHighlight="across Systems"
        description="Organizing video work across two distinct channels and purposes: translating systems for decision-makers and enabling developers through concrete engineering."
        bgImage="/images/editorial/watch-official.webp"
        stats={[
          { value: "02", label: "YouTube Channels" },
          { value: "02", label: "Distinct Tracks" },
          { value: "Free", label: "Public Access" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Two Channels Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Channel 1: VikasBandaruOfficial */}
          <Reveal delay={80}>
            <section className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-primary-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-background-200 bg-background-100 shadow-sm">
                  <Image
                    src="/images/editorial/watch-official.webp"
                    alt="Vikas Bandaru Official Channel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white font-mono text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                      <Video className="w-3.5 h-3.5" />
                      Official Channel
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span>@VikasBandaruOfficial</span>
                    <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10 text-[10px]">
                      Translating Systems
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 text-[11px] font-mono uppercase tracking-wider">
                    Translate + Legitimize
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                    Launching Soon
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-primary-600 transition-colors">
                    Vikas Bandaru (Official)
                  </h2>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    The planned intellectual and public channel exploring broader systemic questions:
                  </p>
                </div>

                <ul className="text-sm text-foreground-600 space-y-2 pl-4 list-disc marker:text-primary-500 leading-relaxed font-light">
                  <li>Indian education reform and pedagogical policy</li>
                  <li>Technology, GenAI, and human agency in society</li>
                  <li>AI-washing critique and educator awareness</li>
                  <li>What India and developing nations can build for their own conditions</li>
                  <li>Historical case studies and systemic thinkers</li>
                </ul>

                <div className="p-3.5 rounded-xl bg-background-100/60 border border-background-200/60 text-xs text-foreground-500 font-mono">
                  Status: Mission-oriented video essays currently in production.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-background-200/80">
                <a
                  href="https://www.youtube.com/@VikasBandaruOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-xs w-full"
                  id="watch-official-channel-btn"
                >
                  <span>Visit Official Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>
          </Reveal>

          {/* Channel 2: VikasBandaruTech */}
          <Reveal delay={120}>
            <section className="group relative rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-background-200 bg-background-100 shadow-sm">
                  <Image
                    src="/images/editorial/watch-tech.webp"
                    alt="Vikas Bandaru Tech Channel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      Active Channel
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span>@VikasBandaruTech</span>
                    <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10 text-[10px]">
                      Hands-on Code
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-mono uppercase tracking-wider">
                    Enable + Implement
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Channel
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 group-hover:text-emerald-700 transition-colors">
                    Vikas Bandaru Tech
                  </h2>
                  <p className="text-sm text-foreground-600 leading-relaxed font-light">
                    The builder channel dedicated to practical implementation and concrete engineering:
                  </p>
                </div>

                <ul className="text-sm text-foreground-600 space-y-2 pl-4 list-disc marker:text-emerald-600 leading-relaxed font-light">
                  <li>Technical how-tos and first-principles programming breakdowns</li>
                  <li>Async JavaScript &amp; event loop state machine walkthroughs</li>
                  <li>Salesforce Platform &amp; Agentforce architecture</li>
                  <li>LogicSims simulation engine development &amp; build-in-public logs</li>
                  <li>Full-stack web application engineering</li>
                </ul>

                <div className="p-3.5 rounded-xl bg-background-100/60 border border-background-200/60 text-xs text-foreground-500 font-mono">
                  Target Audience: Software engineers, developers, and hands-on builders.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-background-200/80">
                <a
                  href="https://www.youtube.com/@VikasBandaruTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-all shadow-xs w-full"
                  id="watch-tech-channel-btn"
                >
                  <span>Visit Tech Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>
          </Reveal>
        </div>

        {/* Active Builder Channel Spotlight Banner */}
        <Reveal delay={180}>
          <section className="relative rounded-3xl bg-gradient-to-br from-[#0b192c] to-[#071322] border border-primary-500/30 text-white p-8 sm:p-12 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Featured Engineering Stream
              </span>
              <span className="text-xs font-mono text-foreground-400">
                Hands-on Tutorials &amp; System Deconstructions
              </span>
            </div>

            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight text-white">
                Explore Hands-on Tutorials on Vikas Bandaru Tech
              </h2>
              <p className="text-sm sm:text-base text-foreground-200 leading-relaxed font-light">
                Direct engineering tutorials and programming breakdowns covering full-stack concepts, state machines, and Salesforce architecture on the active developer channel.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.youtube.com/@VikasBandaruTech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-md"
                id="watch-tech-channel-cta"
              >
                <span>Watch on Vikas Bandaru Tech</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        </Reveal>

        {/* Related Pathways */}
        <Reveal delay={220}>
          <section className="pt-8 border-t border-background-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="text-foreground-500 text-center sm:text-left">
              Looking to read long-form essays or explore 1-on-1 engagement?
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/ideas"
                className="font-semibold text-primary-600 hover:text-primary-800 inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Ideas &amp; Essays</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/work"
                className="font-semibold text-primary-600 hover:text-primary-800 inline-flex items-center gap-1 transition-colors"
              >
                <span>Explore Work With Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


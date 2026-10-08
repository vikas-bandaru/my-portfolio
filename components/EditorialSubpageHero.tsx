import type { ReactNode } from "react";
import Image from "next/image";

interface EditorialSubpageHeroProps {
  badge: string;
  badgeDotColor?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  children?: ReactNode;
  bgImage?: string;
  stats?: Array<{ value: string; label: string }>;
}

export default function EditorialSubpageHero({
  badge,
  badgeDotColor = "bg-primary-400",
  title,
  titleHighlight,
  description,
  children,
  bgImage = "/images/editorial/hero-network.webp",
  stats,
}: EditorialSubpageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-foreground-950 text-background-50 pt-32 pb-16 md:pt-40 md:pb-20 border-b border-background-50/10">
      {/* Background Graphic & Gradient Overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Editorial Ambient Backdrop"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/95 via-foreground-950/85 to-foreground-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-background-50/20 bg-background-50/10 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.16em] text-background-100 shadow-xs">
            <span className={`w-1.5 h-1.5 rounded-full ${badgeDotColor} animate-pulse`} />
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-semibold text-background-50 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1]">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-primary-300 font-serif font-normal italic">
                  {titleHighlight}
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-background-100/80 leading-relaxed font-sans max-w-2xl font-light">
            {description}
          </p>

          {/* Optional Action Buttons or Filters */}
          {children && <div className="pt-2">{children}</div>}

          {/* Optional Metrics / Stats Ribbon */}
          {stats && stats.length > 0 && (
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-background-50/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-background-50">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-background-100/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

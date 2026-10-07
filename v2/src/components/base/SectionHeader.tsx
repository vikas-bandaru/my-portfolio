interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  linkLabel,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-background-200">
      <div className="max-w-2xl">
        {eyebrow ? (
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-700">
            {eyebrow}
          </span>
        ) : null}
        <h2
          className={`font-heading text-2xl md:text-3xl font-semibold text-foreground-950 tracking-tight ${
            eyebrow ? "mt-3" : ""
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{description}</p>
        ) : null}
      </div>
      {linkLabel && linkHref ? (
        <a
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 whitespace-nowrap transition-colors"
        >
          {linkLabel}
          <i className="ri-arrow-right-line text-base" aria-hidden="true"></i>
        </a>
      ) : null}
    </div>
  );
}
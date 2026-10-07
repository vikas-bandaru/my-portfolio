import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  badge?: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({
  eyebrow,
  eyebrowIcon,
  badge,
  title,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`space-y-4 ${className}`}>
      {(eyebrow || badge) && (
        <div className="flex flex-wrap items-center gap-3">
          {eyebrow && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 text-xs font-mono uppercase tracking-wider text-primary-800">
              {eyebrowIcon}
              <span>{eyebrow}</span>
            </div>
          )}
          {badge}
        </div>
      )}

      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground-950 leading-tight">
        {title}
      </h1>

      {description && (
        <p className="text-base sm:text-lg text-foreground-700 font-normal leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </header>
  );
}

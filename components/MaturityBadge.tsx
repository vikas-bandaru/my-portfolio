import type { MaturityStatus } from "@/lib/content";

interface MaturityBadgeProps {
  status: MaturityStatus;
  className?: string;
  size?: "sm" | "md";
}

export function MaturityBadge({ status, className = "", size = "sm" }: MaturityBadgeProps) {
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs";

  switch (status) {
    case "live":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live
        </span>
      );
    case "building":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Building
        </span>
      );
    case "vision":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
          Vision
        </span>
      );
    default:
      return null;
  }
}

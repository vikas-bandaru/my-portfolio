import type { MaturityStatus } from "@/lib/content";

interface MaturityBadgeProps {
  status: MaturityStatus;
  className?: string;
  size?: "sm" | "md";
}

export function MaturityBadge({ status, className = "", size = "sm" }: MaturityBadgeProps) {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";

  switch (status) {
    case "live":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Live
        </span>
      );
    case "building":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Building
        </span>
      );
    case "vision":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-stone-100 text-stone-700 border border-stone-300/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
          Vision
        </span>
      );
    default:
      return null;
  }
}

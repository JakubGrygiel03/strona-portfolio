import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StatusBadge({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <p
      aria-label={siteConfig.availability}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-body",
        className,
      )}
    >
      <span className="size-2 rounded-full bg-success" aria-hidden="true" />
      <span aria-hidden="true" className={compact ? "hidden whitespace-nowrap sm:inline" : "whitespace-nowrap"}>
        {compact ? "Przyjmuję projekty" : siteConfig.availability}
      </span>
    </p>
  );
}

import { siteConfig } from "@/lib/site";

export function StatusBadge({ compact = false }: { compact?: boolean }) {
  return (
    <p
      aria-label={siteConfig.availability}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-body"
    >
      <span className="size-2 rounded-full bg-success" aria-hidden="true" />
      <span aria-hidden="true" className={compact ? "hidden whitespace-nowrap sm:inline" : "whitespace-nowrap"}>
        {compact ? "Przyjmuję projekty" : siteConfig.availability}
      </span>
    </p>
  );
}

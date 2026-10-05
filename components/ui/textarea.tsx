import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-line bg-obsidian px-3 py-3 text-sm text-heading outline-none transition-colors duration-200 placeholder:text-muted focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/40",
        className,
      )}
      {...props}
    />
  );
}

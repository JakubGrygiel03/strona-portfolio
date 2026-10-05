import { cn } from "@/lib/utils";

export function ComparisonPane({
  tone,
  points,
  caption,
}: {
  tone: "before" | "after";
  points: string[];
  caption: string;
}) {
  const aged = tone === "before";

  return (
    <div className={cn("flex h-full min-h-80 flex-col p-5", aged ? "bg-[#e8e8e8]" : "bg-surface")}>
      <div className="grid flex-1 content-start gap-3 pt-10">
        {points.map((point) => (
          <div
            key={point}
            className={cn(
              "rounded-xl border px-3 py-3 text-sm",
              aged ? "border-[#c8c8c8] text-[#404040]" : "border-line text-heading",
            )}
          >
            {point}
          </div>
        ))}
      </div>
      <p className={cn("mt-4 text-sm leading-6", aged ? "text-[#404040]" : "text-body")}>{caption}</p>
    </div>
  );
}

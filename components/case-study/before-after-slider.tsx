import { Check, Minus } from "lucide-react";
import type { BeforeAfter } from "@/types/project";

export function BeforeAfterSlider({ data }: { data: BeforeAfter }) {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-2">
      <article className="rounded-2xl border border-[#d4cfc6] bg-[#e7e2d9] p-5 sm:p-6">
        <p className="text-xs font-medium tracking-[0.14em] text-heading uppercase">Wcześniej</p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-heading">{data.beforeLabel}</h3>
        <p className="mt-3 text-sm leading-6 text-body">{data.beforeCaption}</p>
        <ul className="mt-5 space-y-3">
          {data.beforePoints.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-heading">
              <Minus className="mt-1 size-4 shrink-0" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="overflow-hidden rounded-2xl border border-cobalt/20 bg-[#f6faf7] shadow-[0_28px_60px_-36px_rgba(27,67,50,0.55)]">
        <div className="relative border-b border-white/10 bg-ink px-5 py-4 sm:px-6">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-amber" />
          <p className="font-mono text-[11px] tracking-[0.14em] text-amber uppercase">Teraz</p>
          <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-on-ink">{data.afterLabel}</h3>
        </div>
        <div className="px-5 py-5 sm:px-6">
          <p className="text-sm leading-6 text-heading">{data.afterCaption}</p>
          <ul className="mt-5 space-y-3">
            {data.afterPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-medium leading-6 text-heading">
                <Check className="mt-1 size-4 shrink-0 text-cobalt" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ComparisonPane } from "@/components/case-study/comparison-pane";
import type { BeforeAfter } from "@/types/project";

export function BeforeAfterSlider({ data }: { data: BeforeAfter }) {
  const [value, setValue] = useState(58);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line">
      <ComparisonPane tone="after" points={data.afterPoints} caption={data.afterCaption} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <ComparisonPane tone="before" points={data.beforePoints} caption={data.beforeCaption} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-cobalt"
        style={{ left: `${value}%` }}
      />
      <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-line bg-surface/95 px-2.5 py-1 text-xs text-heading">
        {data.beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-line bg-surface/95 px-2.5 py-1 text-xs text-heading">
        {data.afterLabel}
      </span>
      <label htmlFor="porownanie" className="sr-only">
        Porównanie stanu przed i po wdrożeniu
      </label>
      <input
        id="porownanie"
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label="Porównanie stanu przed i po wdrożeniu"
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

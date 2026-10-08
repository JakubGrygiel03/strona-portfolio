import type { CSSProperties } from "react";

export function reveal(delay = 0): { "data-reveal": string; style: CSSProperties } {
  return {
    "data-reveal": "",
    style: { ["--reveal-delay" as string]: `${delay}ms` },
  };
}

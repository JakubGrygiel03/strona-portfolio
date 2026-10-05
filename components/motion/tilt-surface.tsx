"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltSurface({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = node.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width;
    const py = (event.clientY - box.top) / box.height;
    node.style.setProperty("--rx", `${((0.5 - py) * 8).toFixed(2)}deg`);
    node.style.setProperty("--ry", `${((px - 0.5) * 10).toFixed(2)}deg`);
    node.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    node.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  }

  function leave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  }

  return (
    <div className={cn("h-full [perspective:1100px]", className)}>
      <div ref={ref} onPointerMove={move} onPointerLeave={leave} className="tilt-surface h-full overflow-hidden rounded-2xl">
        {children}
        <span aria-hidden="true" className="tilt-glare" />
      </div>
    </div>
  );
}

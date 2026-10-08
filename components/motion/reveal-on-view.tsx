"use client";

import { useEffect } from "react";

export function RevealOnView() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shown = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    function show(node: Element) {
      if (!(node instanceof HTMLElement) || !node.hasAttribute("data-reveal")) return;
      shown.add(node);
      node.classList.add("is-in");
    }

    function watch(node: Element) {
      if (!(node instanceof HTMLElement) || !node.hasAttribute("data-reveal")) return;
      if (shown.has(node) || reduce) {
        show(node);
        return;
      }
      const box = node.getBoundingClientRect();
      const inView = box.height > 0 && box.top < window.innerHeight * 0.92 && box.bottom > 24;
      if (inView) show(node);
      else observer.observe(node);
    }

    function scan(scope: ParentNode) {
      if (scope instanceof HTMLElement) watch(scope);
      scope.querySelectorAll("[data-reveal]").forEach(watch);
    }

    const changes = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) scan(node);
        }
      }
    });

    document.documentElement.dataset.motion = "1";
    scan(document.body);
    changes.observe(document.body, { childList: true, subtree: true });

    // Awaryjnie odsłoń wszystko, co mogło zostać niewidoczne.
    const safety = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(show);
    }, 1200);

    return () => {
      window.clearTimeout(safety);
      observer.disconnect();
      changes.disconnect();
    };
  }, []);

  return null;
}

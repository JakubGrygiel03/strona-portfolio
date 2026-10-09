export function unlockPageScroll() {
  const html = document.documentElement;
  const body = document.body;
  const lockedTop = body.style.top;

  for (const node of [html, body]) {
    node.style.removeProperty("overflow");
    node.style.removeProperty("pointer-events");
    node.style.removeProperty("position");
    node.style.removeProperty("top");
    node.style.removeProperty("left");
    node.style.removeProperty("right");
    node.style.removeProperty("width");
    node.style.removeProperty("height");
    node.style.removeProperty("padding-right");
    node.style.removeProperty("touch-action");
    node.removeAttribute("data-scroll-locked");
    for (const name of [...node.classList]) {
      if (name.startsWith("block-interactivity-")) node.classList.remove(name);
    }
  }

  if (!lockedTop) return;
  const y = Math.abs(Number.parseInt(lockedTop, 10));
  if (Number.isFinite(y)) window.scrollTo(0, y);
}

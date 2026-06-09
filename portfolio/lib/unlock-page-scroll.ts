/** Clears scroll-lock styles left by modal libraries (Base UI, etc.). */
export function unlockPageScroll() {
  document.body.classList.remove("modal-open");
  document.documentElement.removeAttribute("data-base-ui-scroll-locked");

  const props = ["overflow", "overflowX", "overflowY", "position", "height", "width", "boxSizing", "scrollBehavior"] as const;

  for (const prop of props) {
    document.body.style.removeProperty(prop);
  }

  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("overflowX");
  document.documentElement.style.removeProperty("overflowY");
  document.documentElement.style.removeProperty("scrollbar-gutter");
  document.documentElement.style.removeProperty("scroll-behavior");
}

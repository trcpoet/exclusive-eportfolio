export function ScrollCue() {
  return (
    <a
      href="#about-me"
      aria-label="Scroll to about section"
      className="absolute bottom-5 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-[30px] w-5 items-center justify-center rounded-3xl border-2 border-maroon">
        <span className="h-1.5 w-1 animate-scroll-cue rounded-sm bg-foreground dark:bg-white" />
      </div>
    </a>
  );
}

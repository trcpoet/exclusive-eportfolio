export function ScrollCue() {
  return (
    <a
      href="#about-me"
      aria-label="Scroll to about section"
      className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-6"
    >
      <div className="flex h-[30px] w-5 items-center justify-center rounded-3xl border-2 border-maroon">
        <span className="h-1.5 w-1 animate-scroll-cue rounded-sm bg-foreground dark:bg-white" />
      </div>
    </a>
  );
}

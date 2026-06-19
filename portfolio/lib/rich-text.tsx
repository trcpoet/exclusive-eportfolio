import type { ReactNode } from "react";

// Matches **bold** or [label](https://url)
const TOKEN_PATTERN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

type RenderRichTextOptions = {
  strongClassName?: string;
  linkClassName?: string;
};

export function renderRichText(text: string, options?: RenderRichTextOptions) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  const strongClassName = options?.strongClassName ?? "font-semibold";
  const linkClassName =
    options?.linkClassName ??
    "font-semibold text-maroon underline decoration-maroon/40 underline-offset-2 transition-colors hover:decoration-maroon";

  TOKEN_PATTERN.lastIndex = 0;

  while ((match = TOKEN_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      parts.push(
        <strong key={key++} className={strongClassName}>
          {match[1]}
        </strong>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {match[2]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

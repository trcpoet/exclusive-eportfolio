import type { ReactNode } from "react";

const BOLD_PATTERN = /\*\*([^*]+)\*\*/g;

type RenderRichTextOptions = {
  strongClassName?: string;
};

export function renderRichText(text: string, options?: RenderRichTextOptions) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  const strongClassName = options?.strongClassName ?? "font-semibold";

  BOLD_PATTERN.lastIndex = 0;

  while ((match = BOLD_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <strong key={key++} className={strongClassName}>
        {match[1]}
      </strong>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

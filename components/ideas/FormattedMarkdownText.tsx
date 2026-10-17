import React from "react";

interface FormattedMarkdownTextProps {
  content: string;
  className?: string;
}

/**
 * Lightweight inline markdown renderer for essay paragraphs and callouts.
 * Handles:
 * - **bold** or __bold__ -> <strong>
 * - *italic* or _italic_ -> <em>
 * - `code` -> <code>
 * - [link text](url) -> <a href="..." target="_blank" rel="noopener noreferrer">
 */
export default function FormattedMarkdownText({
  content,
  className,
}: FormattedMarkdownTextProps) {
  if (!content) return null;

  // Regex tokens:
  // 1: [link](url)
  // 2: **bold** or __bold__
  // 3: `code`
  // 4: *italic* or _italic_
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\*[^*]+\*|_[^_]+_)/g;

  const parts = content.split(tokenRegex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        // Links: [text](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, linkText, href] = linkMatch;
          const isExternal = href.startsWith("http") || href.startsWith("//");
          return (
            <a
              key={index}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-primary-700 underline font-medium hover:text-primary-800 transition-colors"
            >
              {linkText}
            </a>
          );
        }

        // Bold: **text** or __text__
        if (
          (part.startsWith("**") && part.endsWith("**") && part.length >= 4) ||
          (part.startsWith("__") && part.endsWith("__") && part.length >= 4)
        ) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={index} className="font-semibold text-foreground-950">
              {boldText}
            </strong>
          );
        }

        // Inline Code: `text`
        if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
          const codeText = part.slice(1, -1);
          return (
            <code
              key={index}
              className="font-mono text-[0.88em] bg-background-200/60 text-primary-900 px-1.5 py-0.5 rounded border border-background-300/40"
            >
              {codeText}
            </code>
          );
        }

        // Italic: *text* or _text_
        if (
          ((part.startsWith("*") && part.endsWith("*")) ||
            (part.startsWith("_") && part.endsWith("_"))) &&
          part.length >= 2
        ) {
          const italicText = part.slice(1, -1);
          return (
            <em key={index} className="italic">
              {italicText}
            </em>
          );
        }

        // Plain text
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}

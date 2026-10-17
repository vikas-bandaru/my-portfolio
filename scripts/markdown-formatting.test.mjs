import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import FormattedMarkdownText from "../components/ideas/FormattedMarkdownText.tsx";

test("FormattedMarkdownText component", async (t) => {
  await t.test("renders bold text using <strong>", () => {
    const input = "This left me with a question: **If AI can increasingly generate answers and code, what should learning enable people to do?**";
    const html = renderToStaticMarkup(React.createElement(FormattedMarkdownText, { content: input }));
    assert.match(html, /<strong class="font-semibold text-foreground-950">If AI can increasingly generate answers and code, what should learning enable people to do\?<\/strong>/);
  });

  await t.test("renders inline code, italics, and links", () => {
    const input = "Check `const x = 10;` and *important* or [LogicSims](https://logicsims.dev).";
    const html = renderToStaticMarkup(React.createElement(FormattedMarkdownText, { content: input }));
    assert.match(html, /<code/);
    assert.match(html, /<em class="italic">important<\/em>/);
    assert.match(html, /<a href="https:\/\/logicsims\.dev"/);
  });

  await t.test("handles multiple bold phrases in one paragraph", () => {
    const input = "This is **first bold** and then **second bold**.";
    const html = renderToStaticMarkup(React.createElement(FormattedMarkdownText, { content: input }));
    assert.match(html, /<strong[^>]*>first bold<\/strong>/);
    assert.match(html, /<strong[^>]*>second bold<\/strong>/);
  });
});

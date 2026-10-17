import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import EssayShareBar from "../components/ideas/EssayShareBar.tsx";

test("EssayShareBar component", async (t) => {
  await t.test("generates WhatsApp URL with custom suggested message and link", () => {
    const html = renderToStaticMarkup(
      React.createElement(EssayShareBar, {
        title: "Test Essay Title",
        slug: "test-essay",
        subtitle: "A thoughtful inquiry into education",
      })
    );

    assert.match(html, /https:\/\/wa\.me\/\?text=/);
    assert.match(html, /Test%20Essay%20Title/);
    assert.match(html, /A%20thoughtful%20inquiry%20into%20education/);
    assert.match(html, /test-essay/);
  });

  await t.test("generates LinkedIn URL with pre-filled feed post text and url", () => {
    const html = renderToStaticMarkup(
      React.createElement(EssayShareBar, {
        title: "Test Essay Title",
        slug: "test-essay",
        subtitle: "A thoughtful inquiry into education",
      })
    );

    assert.match(html, /https:\/\/www\.linkedin\.com\/feed\/\?shareActive=true&amp;text=/);
    assert.match(html, /Sharing%20this%20reflective%20essay/);
    assert.match(html, /test-essay/);
  });
});

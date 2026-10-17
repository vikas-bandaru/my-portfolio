import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

test("Essay Cover Image Pipeline Integrity", async (t) => {
  await t.test("IdeaItem interface supports coverImage property", () => {
    const content = fs.readFileSync(path.join(ROOT, "lib/content.ts"), "utf-8");
    assert.match(content, /coverImage\?:\s*string;/);
  });

  await t.test("lib/ideas.ts maps cover_image from Supabase to coverImage on IdeaItem", () => {
    const content = fs.readFileSync(path.join(ROOT, "lib/ideas.ts"), "utf-8");
    assert.match(content, /coverImage:\s*record\.cover_image\s*\|\|\s*undefined/);
  });

  await t.test("app/ideas/IdeasClient.tsx prioritizes post.coverImage for card thumbnail", () => {
    const content = fs.readFileSync(path.join(ROOT, "app/ideas/IdeasClient.tsx"), "utf-8");
    assert.match(content, /post\.coverImage\s*\|\|\s*ideaThumbnails\[post\.slug\]/);
  });

  await t.test("components/home/IdeasSection.tsx prioritizes post.coverImage", () => {
    const content = fs.readFileSync(path.join(ROOT, "components/home/IdeasSection.tsx"), "utf-8");
    assert.match(content, /post\.coverImage\s*\|\|\s*ideaThumbnails\[post\.slug\]/);
  });

  await t.test("app/ideas/[slug]/page.tsx renders the coverImage hook in full detail view", () => {
    const content = fs.readFileSync(path.join(ROOT, "app/ideas/[slug]/page.tsx"), "utf-8");
    assert.match(content, /post\.coverImage\s*&&/);
    assert.match(content, /src=\{post\.coverImage\}/);
    assert.match(content, /priority/);
  });
});

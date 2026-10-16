import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

test("Draft/Published Synchronization & Architecture Tests", async (t) => {
  await t.test("app/ideas/page.tsx is a Server Component reading from Supabase via getPublishedIdeas", () => {
    const filePath = path.join(ROOT, "app/ideas/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/ideas/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.ok(!content.startsWith('"use client"'), "page.tsx should be a Server Component");
    assert.match(content, /getPublishedIdeas/);
    assert.match(content, /<IdeasClient/);
  });

  await t.test("app/ideas/IdeasClient.tsx computes stats and handles empty state dynamically", () => {
    const filePath = path.join(ROOT, "app/ideas/IdeasClient.tsx");
    assert.ok(fs.existsSync(filePath), "app/ideas/IdeasClient.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /"use client"/);
    assert.match(content, /String\(initialPosts\.length\)\.padStart\(2,\s*"0"\)/);
    assert.match(content, /filteredPosts\.length === 0/);
    assert.match(content, /No Published Essays in this View/);
  });

  await t.test("app/ideas/[slug]/page.tsx checks getPublishedIdeaBySlug and calls notFound for drafts", () => {
    const filePath = path.join(ROOT, "app/ideas/[slug]/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/ideas/[slug]/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /getPublishedIdeaBySlug/);
    assert.match(content, /if \(!post\) \{\s*notFound\(\);\s*\}/);
  });

  await t.test("app/studio/actions.ts revalidates /ideas and / on item save and delete", () => {
    const filePath = path.join(ROOT, "app/studio/actions.ts");
    assert.ok(fs.existsSync(filePath), "app/studio/actions.ts must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /revalidatePath\("\/ideas"\)/);
    assert.match(content, /revalidatePath\("\/"\)/);
  });

  await t.test("components/home/IdeasSection.tsx uses getPublishedIdeas and provides empty fallback", () => {
    const filePath = path.join(ROOT, "components/home/IdeasSection.tsx");
    assert.ok(fs.existsSync(filePath), "components/home/IdeasSection.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /getPublishedIdeas/);
    assert.match(content, /posts\.length === 0/);
  });
});

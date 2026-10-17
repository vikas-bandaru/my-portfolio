import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

test("Agentic AI & AEO / GEO Readiness Verification", async (t) => {
  await t.test("robots.ts exists and explicitly permits AI crawlers (GPTBot, ClaudeBot, PerplexityBot)", () => {
    const filePath = path.join(ROOT, "app/robots.ts");
    assert.ok(fs.existsSync(filePath), "app/robots.ts must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /GPTBot/);
    assert.match(content, /ClaudeBot/);
    assert.match(content, /PerplexityBot/);
    assert.match(content, /sitemap\.xml/);
  });

  await t.test("sitemap.ts dynamically includes public routes and published essays", () => {
    const filePath = path.join(ROOT, "app/sitemap.ts");
    assert.ok(fs.existsSync(filePath), "app/sitemap.ts must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /getPublishedIdeas/);
    assert.match(content, /\/ideas\/\$\{idea\.slug\}/);
    assert.match(content, /getBuilds/);
  });

  await t.test("app/ideas/[slug]/page.tsx embeds JSON-LD schema with author, topics and tags", () => {
    const filePath = path.join(ROOT, "app/ideas/[slug]/page.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /application\/ld\+json/);
    assert.match(content, /@type":\s*"TechArticle"/);
    assert.match(content, /Vikas Bandaru/);
    assert.match(content, /keywords/);
    assert.match(content, /post\.tags/);
  });

  await t.test("Studio provides upload route and UI for HEIC/HEIF/PNG conversion", () => {
    const apiPath = path.join(ROOT, "app/api/studio/upload-image/route.ts");
    assert.ok(fs.existsSync(apiPath), "upload-image route must exist");
    const clientPath = path.join(ROOT, "app/studio/StudioClient.tsx");
    const clientContent = fs.readFileSync(clientPath, "utf-8");
    assert.match(clientContent, /accept="image\/\*,\.heic,\.heif"/);
    assert.match(clientContent, /handleImageUpload/);
    assert.match(clientContent, /\/api\/studio\/upload-image/);
  });
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

test("1. Route & File Architecture Integrity", async (t) => {
  await t.test("Career Clarity subpage exists", () => {
    const filePath = path.join(ROOT, "app/work/career-clarity/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/work/career-clarity/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /Career Clarity/);
    assert.match(content, /₹799/);
    assert.match(content, /ServiceTestimonials/);
  });

  await t.test("Learn landing page exists and contains active cohorts", () => {
    const filePath = path.join(ROOT, "app/learn/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/learn/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /AI-Assisted Frontend Foundations/);
    assert.match(content, /Java, SQL & JDBC Foundations/);
    assert.match(content, /\/cohorts\/frontend-foundations/);
    assert.match(content, /\/cohorts\/java-foundations/);
  });

  await t.test("Java Foundations cohort page exists", () => {
    const filePath = path.join(ROOT, "app/cohorts/java-foundations/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/cohorts/java-foundations/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /Java, SQL & JDBC Foundations/);
    assert.match(content, /₹5,999/);
    assert.match(content, /ServiceTestimonials/);
  });

  await t.test("Frontend Foundations cohort page exists and contains testimonials", () => {
    const filePath = path.join(ROOT, "app/cohorts/frontend-foundations/page.tsx");
    assert.ok(fs.existsSync(filePath), "app/cohorts/frontend-foundations/page.tsx must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /ServiceTestimonials/);
  });
});

test("2. Navigation & Global Discoverability Integrity", async (t) => {
  await t.test("Navbar contains Learn link in navLinks", () => {
    const filePath = path.join(ROOT, "components/Navbar.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /\{ label: "Learn", href: "\/learn" \}/);
  });

  await t.test("Navbar hides on private /studio routes", () => {
    const filePath = path.join(ROOT, "components/Navbar.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /pathname\.startsWith\("\/studio"\)/);
  });

  await t.test("Footer contains Learn & Cohorts explore link and hides on studio", () => {
    const filePath = path.join(ROOT, "components/Footer.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /\{ label: "Learn & Cohorts", href: "\/learn" \}/);
    assert.match(content, /pathname\.startsWith\("\/studio"\)/);
  });

  await t.test("Homepage includes LearnSection", () => {
    const filePath = path.join(ROOT, "app/page.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /<LearnSection \/>/);
  });
});

test("3. Testimonials Validation & Studio Integration", async (t) => {
  await t.test("Public submission button is labeled 'Submit'", () => {
    const filePath = path.join(ROOT, "components/ServiceTestimonials.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /"Submit"/);
    assert.doesNotMatch(content, /"Submit for Approval"/);
  });

  await t.test("StudioClient exposes Testimonials tab and moderation workflow", () => {
    const filePath = path.join(ROOT, "app/studio/StudioClient.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /mainTab === "testimonials"/);
    assert.match(content, /updateTestimonialStatus/);
    assert.match(content, /deleteTestimonial/);
  });

  await t.test("Studio page fetches and passes initialTestimonials", () => {
    const filePath = path.join(ROOT, "app/studio/page.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /fetchAllTestimonials/);
    assert.match(content, /initialTestimonials={testimonials}/);
  });

  await t.test("Testimonials SQL migration table script exists with RLS", () => {
    const filePath = path.join(ROOT, "scripts/create-testimonials-table.sql");
    assert.ok(fs.existsSync(filePath), "SQL migration script must exist");
    const content = fs.readFileSync(filePath, "utf-8");
    assert.match(content, /create table if not exists public\.service_testimonials/);
    assert.match(content, /alter table public\.service_testimonials enable row level security/);
    assert.match(content, /status = 'pending'/);
    assert.match(content, /status = 'approved'/);
  });
});

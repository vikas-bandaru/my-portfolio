import test from "node:test";
import assert from "node:assert/strict";
import { SubmitEssayResponseInputSchema } from "../lib/contracts/essay-response.ts";
import { submitEssayResponse } from "../app/actions/essay-responses.ts";

test("Contract Suite: Essay Direct Response Validation & Anti-Spam", async (t) => {
  await t.test("SubmitEssayResponseInputSchema: Valid payload passes", () => {
    const valid = {
      essay_slug: "collapse-of-syntax-first-cs",
      essay_title: "Beyond Syntax: Why Memorizing Code Fails in the AI Era",
      author_name: "Rahul Verma",
      author_email: "rahul.verma@example.com",
      author_role: "3rd Year CSE Student",
      message: "I experienced this exact issue during my mock interview last week.",
      website_honeypot: "",
    };

    const parsed = SubmitEssayResponseInputSchema.parse(valid);
    assert.equal(parsed.author_name, "Rahul Verma");
    assert.equal(parsed.author_email, "rahul.verma@example.com");
    assert.equal(parsed.essay_slug, "collapse-of-syntax-first-cs");
  });

  await t.test("SubmitEssayResponseInputSchema: Rejects invalid email", () => {
    const invalidEmail = {
      essay_slug: "collapse-of-syntax-first-cs",
      essay_title: "Beyond Syntax",
      author_name: "Rahul",
      author_email: "not-an-email",
      message: "This is a meaningful reflection message over 10 chars.",
    };

    const result = SubmitEssayResponseInputSchema.safeParse(invalidEmail);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /valid email address/);
    }
  });

  await t.test("SubmitEssayResponseInputSchema: Rejects messages under 10 characters", () => {
    const tooShort = {
      essay_slug: "collapse-of-syntax-first-cs",
      essay_title: "Beyond Syntax",
      author_name: "Rahul",
      author_email: "rahul@example.com",
      message: "Too short",
    };

    const result = SubmitEssayResponseInputSchema.safeParse(tooShort);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /at least 10 characters/);
    }
  });

  await t.test("submitEssayResponse: Drops honeypot bot submissions silently", async () => {
    const botSubmission = {
      essay_slug: "collapse-of-syntax-first-cs",
      essay_title: "Beyond Syntax",
      author_name: "Bot User",
      author_email: "bot@spammer.com",
      message: "Buy cheap backlinks at our amazing marketing link hub right now!",
      website_honeypot: "https://spam-link.com", // filled out by bots
    };

    // Fails schema because honeypot max length is 0
    const res = await submitEssayResponse(botSubmission);
    assert.equal(res.success, false);
    assert.match(res.error || "", /Spam detected/);
  });
});

import test from "node:test";
import assert from "node:assert/strict";
import {
  SubmitTestimonialInputSchema,
  TestimonialRecordSchema,
  TestimonialStatusSchema,
  ActionResponseSchema,
  FetchTestimonialsResponseSchema,
} from "../lib/contracts/testimonials.ts";

test("Contract Suite: Testimonials Schemas & Invariants", async (t) => {
  await t.test("SubmitTestimonialInputSchema: Valid inputs pass and assign default rating", () => {
    const validRaw = {
      service_slug: "career-clarity",
      author_name: "  Sarah Chen  ",
      author_role: "Senior Engineer",
      content: "The system design discussion provided clarity on production engineering.",
      highlight: "Unblocked my transition",
    };

    const parsed = SubmitTestimonialInputSchema.parse(validRaw);
    assert.equal(parsed.service_slug, "career-clarity");
    assert.equal(parsed.author_name, "Sarah Chen"); // Trimmed
    assert.equal(parsed.author_role, "Senior Engineer");
    assert.equal(parsed.rating, 5); // Default 5
    assert.equal(parsed.highlight, "Unblocked my transition");
  });

  await t.test("SubmitTestimonialInputSchema: Rejects invalid service slug", () => {
    const invalidSlug = {
      service_slug: "Career Clarity With Spaces",
      author_name: "Sarah Chen",
      content: "This content is plenty long enough to pass validation.",
    };

    const result = SubmitTestimonialInputSchema.safeParse(invalidSlug);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /lowercase kebab-case slug/);
    }
  });

  await t.test("SubmitTestimonialInputSchema: Rejects empty or short author name", () => {
    const shortName = {
      service_slug: "career-clarity",
      author_name: "A",
      content: "This content is plenty long enough to pass validation.",
    };

    const result = SubmitTestimonialInputSchema.safeParse(shortName);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /Name must be at least 2 characters/);
    }
  });

  await t.test("SubmitTestimonialInputSchema: Rejects content shorter than 10 characters", () => {
    const shortContent = {
      service_slug: "frontend-foundations",
      author_name: "Vikas Bandaru",
      content: "Too short",
    };

    const result = SubmitTestimonialInputSchema.safeParse(shortContent);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /at least 10 characters/);
    }
  });

  await t.test("SubmitTestimonialInputSchema: Rejects rating out of 1-5 range", () => {
    const invalidRating = {
      service_slug: "java-foundations",
      author_name: "Alex",
      content: "Great deep dive into concurrency and JVM internals.",
      rating: 6,
    };

    const result = SubmitTestimonialInputSchema.safeParse(invalidRating);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /between 1 and 5/);
    }
  });

  await t.test("TestimonialStatusSchema: Only allows approved, rejected, and pending", () => {
    assert.equal(TestimonialStatusSchema.safeParse("pending").success, true);
    assert.equal(TestimonialStatusSchema.safeParse("approved").success, true);
    assert.equal(TestimonialStatusSchema.safeParse("rejected").success, true);
    assert.equal(TestimonialStatusSchema.safeParse("archived").success, false);
    assert.equal(TestimonialStatusSchema.safeParse("live").success, false);
  });

  await t.test("TestimonialRecordSchema: Enforces database record shape with UUID", () => {
    const mockRecord = {
      id: "7b4c6e91-628d-4a11-a8d3-559196b0091d",
      service_slug: "career-clarity",
      author_name: "Priya Sharma",
      author_role: "Tech Lead",
      author_avatar: null,
      rating: 5,
      highlight: "Direct feedback",
      content: "Clear perspective on scaling architecture from a principal perspective.",
      status: "approved",
      created_at: "2026-10-12T10:00:00Z",
      approved_at: "2026-10-12T11:00:00Z",
    };

    const parsed = TestimonialRecordSchema.parse(mockRecord);
    assert.equal(parsed.id, mockRecord.id);
    assert.equal(parsed.status, "approved");
  });

  await t.test("ActionResponseSchema and FetchTestimonialsResponseSchema validation", () => {
    const validActionSuccess = { success: true, message: "Thank you!" };
    assert.equal(ActionResponseSchema.safeParse(validActionSuccess).success, true);

    const validActionError = { success: false, error: "Something went wrong" };
    assert.equal(ActionResponseSchema.safeParse(validActionError).success, true);

    const validFetch = {
      testimonials: [
        {
          id: "7b4c6e91-628d-4a11-a8d3-559196b0091d",
          service_slug: "career-clarity",
          author_name: "Priya",
          rating: 5,
          content: "Excellent mentor session.",
          status: "approved",
          created_at: "2026-10-12T10:00:00Z",
        },
      ],
    };
    assert.equal(FetchTestimonialsResponseSchema.safeParse(validFetch).success, true);
  });
});

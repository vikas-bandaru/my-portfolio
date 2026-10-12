import test from "node:test";
import assert from "node:assert/strict";
import { submitTestimonial, fetchApprovedTestimonials } from "../app/actions/testimonials.ts";
import { fetchAllTestimonials, updateTestimonialStatus, deleteTestimonial } from "../app/studio/actions.ts";

test("Backend Testimonials Server Action Logic", async (t) => {
  await t.test("submitTestimonial: Rejects empty submission payload", async () => {
    const res = await submitTestimonial({
      service_slug: "career-clarity",
      author_name: "   ",
      content: "",
    });

    assert.equal(res.success, false);
    assert.match(res.error || "", /Please provide your name/);
  });

  await t.test("submitTestimonial: Rejects submission missing author name", async () => {
    const res = await submitTestimonial({
      service_slug: "career-clarity",
      author_name: "",
      content: "Great session!",
    });

    assert.equal(res.success, false);
    assert.match(res.error || "", /Please provide your name/);
  });

  await t.test("submitTestimonial: Rejects submission missing content body", async () => {
    const res = await submitTestimonial({
      service_slug: "frontend-foundations",
      author_name: "John Doe",
      content: "   ",
    });

    assert.equal(res.success, false);
    assert.match(res.error || "", /Please provide your name and your testimonial feedback/);
  });

  await t.test("fetchApprovedTestimonials: returns structured response with array", async () => {
    const res = await fetchApprovedTestimonials("career-clarity");
    assert.ok(typeof res === "object");
    assert.ok(Array.isArray(res.testimonials));
  });

  await t.test("Studio Protected Actions: Reject unauthenticated calls", async () => {
    // When called outside an authenticated cookie context:
    const fetchRes = await fetchAllTestimonials();
    assert.equal(fetchRes.error, "Unauthorized access");
    assert.deepEqual(fetchRes.testimonials, []);

    const updateRes = await updateTestimonialStatus("dummy-id", "approved");
    assert.equal(updateRes.success, false);
    assert.equal(updateRes.error, "Unauthorized access");

    const deleteRes = await deleteTestimonial("dummy-id");
    assert.equal(deleteRes.success, false);
    assert.equal(deleteRes.error, "Unauthorized access");
  });
});

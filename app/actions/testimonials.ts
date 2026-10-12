"use server";

import { supabase, TestimonialRecord } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import {
  SubmitTestimonialInputSchema,
  SubmitTestimonialInput,
} from "@/lib/contracts/testimonials";

export type { SubmitTestimonialInput };

/**
 * Public action: Students or clients submit a testimonial.
 * It is saved with status = 'pending' and NEVER goes live until approved in /studio.
 */
export async function submitTestimonial(
  input: SubmitTestimonialInput
): Promise<{ success: boolean; message?: string; error?: string }> {
  // Validate and parse against the runtime Zod contract
  const validation = SubmitTestimonialInputSchema.safeParse(input);

  if (!validation.success) {
    const firstIssue = validation.error.issues[0];
    return {
      success: false,
      error: firstIssue ? firstIssue.message : "Invalid testimonial submission details.",
    };
  }

  const validData = validation.data;
  const now = new Date().toISOString();
  const payload = {
    service_slug: validData.service_slug,
    author_name: validData.author_name,
    author_role: validData.author_role || null,
    rating: validData.rating,
    content: validData.content,
    highlight: validData.highlight || null,
    status: "pending" as const,
    created_at: now,
  };

  const { error } = await supabase.from("service_testimonials").insert([payload]);

  if (error) {
    console.error("Error inserting testimonial:", error);
    return {
      success: false,
      error: "Unable to submit your testimonial at this moment. Please try again or reach out directly.",
    };
  }

  // Revalidate the studio dashboard so the author's submission is visible to Vikas immediately
  revalidatePath("/studio");

  return {
    success: true,
    message: "Thank you! Your feedback has been received.",
  };
}

/**
 * Public action: Fetch only APPROVED testimonials for a given service_slug.
 */
export async function fetchApprovedTestimonials(
  service_slug: string
): Promise<{ testimonials: TestimonialRecord[]; error?: string }> {
  const { data, error } = await supabase
    .from("service_testimonials")
    .select("*")
    .eq("service_slug", service_slug)
    .eq("status", "approved")
    .order("approved_at", { ascending: false });

  if (error) {
    return { testimonials: [], error: error.message };
  }

  return { testimonials: (data as TestimonialRecord[]) || [] };
}

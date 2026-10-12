"use server";

import { supabase, TestimonialRecord } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export interface SubmitTestimonialInput {
  service_slug: string;
  author_name: string;
  author_role?: string;
  rating?: number;
  content: string;
  highlight?: string;
}

/**
 * Public action: Students or clients submit a testimonial.
 * It is saved with status = 'pending' and NEVER goes live until approved in /studio.
 */
export async function submitTestimonial(
  input: SubmitTestimonialInput
): Promise<{ success: boolean; message?: string; error?: string }> {
  const trimmedName = (input.author_name || "").trim();
  const trimmedContent = (input.content || "").trim();

  if (!trimmedName || !trimmedContent) {
    return {
      success: false,
      error: "Please provide your name and your testimonial feedback.",
    };
  }

  const now = new Date().toISOString();
  const payload = {
    service_slug: input.service_slug.trim(),
    author_name: trimmedName,
    author_role: (input.author_role || "").trim() || null,
    rating: input.rating ? Math.min(5, Math.max(1, input.rating)) : 5,
    content: trimmedContent,
    highlight: (input.highlight || "").trim() || null,
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

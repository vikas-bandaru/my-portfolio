"use server";

import { verifyStudioSession } from "@/lib/auth";
import { supabase, CurationItemRecord, TestimonialRecord } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { TestimonialStatusSchema } from "@/lib/contracts/testimonials";

export async function fetchCurationItems(): Promise<{
  items: CurationItemRecord[];
  error?: string;
}> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { items: [], error: "Unauthorized access" };
  }

  const { data, error } = await supabase
    .from("curation_items")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    return { items: [], error: error.message };
  }

  return { items: (data as CurationItemRecord[]) || [] };
}

export async function saveCurationItem(
  item: Partial<CurationItemRecord>
): Promise<{ success: boolean; item?: CurationItemRecord; error?: string }> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access" };
  }

  const now = new Date().toISOString();
  const payload: Record<string, unknown> = {
    ...item,
    updated_at: now,
  };

  // If status is transitioning to published and no published_at set yet
  if (item.status === "published" && !item.published_at) {
    payload.published_at = now;
  }

  let query;
  if (item.id) {
    query = supabase
      .from("curation_items")
      .update(payload)
      .eq("id", item.id)
      .select()
      .single();
  } else {
    payload.created_at = now;
    query = supabase.from("curation_items").insert([payload]).select().single();
  }

  const { data, error } = await query;
  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/studio");
  return { success: true, item: data as CurationItemRecord };
}

export async function deleteCurationItem(id: string): Promise<{ success: boolean; error?: string }> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access" };
  }

  const { error } = await supabase.from("curation_items").delete().eq("id", id);
  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/studio");
  return { success: true };
}

// ─────────────────────────────────────────────────────────────
// Testimonials Management Actions
// ─────────────────────────────────────────────────────────────

export async function fetchAllTestimonials(): Promise<{
  testimonials: TestimonialRecord[];
  error?: string;
}> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { testimonials: [], error: "Unauthorized access" };
  }

  const { data, error } = await supabase
    .from("service_testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    // If the table doesn't exist yet, return gracefully
    return { testimonials: [], error: error.message };
  }

  return { testimonials: (data as TestimonialRecord[]) || [] };
}

export async function updateTestimonialStatus(
  id: string,
  status: "approved" | "rejected" | "pending"
): Promise<{ success: boolean; error?: string }> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access" };
  }

  const parsedStatus = TestimonialStatusSchema.safeParse(status);
  if (!parsedStatus.success) {
    return { success: false, error: "Invalid testimonial status transition" };
  }

  const payload: Record<string, unknown> = {
    status: parsedStatus.data,
    approved_at: parsedStatus.data === "approved" ? new Date().toISOString() : null,
  };

  const { error } = await supabase
    .from("service_testimonials")
    .update(payload)
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/studio");
  revalidatePath("/learn");
  revalidatePath("/work");
  return { success: true };
}

export async function deleteTestimonial(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const isAuth = await verifyStudioSession();
  if (!isAuth) {
    return { success: false, error: "Unauthorized access" };
  }

  const { error } = await supabase.from("service_testimonials").delete().eq("id", id);
  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/studio");
  return { success: true };
}


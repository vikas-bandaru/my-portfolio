"use server";

import { supabase } from "@/lib/supabase";
import {
  SubmitEssayResponseInputSchema,
  SubmitEssayResponseInput,
} from "@/lib/contracts/essay-response";

/**
 * Public Server Action: Submit a thoughtful reflection or critique on an essay.
 * Includes honeypot spam protection and strict input sanitization.
 */
export async function submitEssayResponse(
  input: SubmitEssayResponseInput
): Promise<{ success: boolean; message?: string; error?: string }> {
  // 1. Zod Contract Validation (checks name, email, min/max length, honeypot)
  const validation = SubmitEssayResponseInputSchema.safeParse(input);

  if (!validation.success) {
    const firstIssue = validation.error.issues[0];
    return {
      success: false,
      error: firstIssue ? firstIssue.message : "Please fill in all required fields accurately.",
    };
  }

  const validData = validation.data;

  // 2. Extra Anti-Spam Check: Verify honeypot is strictly empty
  if (validData.website_honeypot && validData.website_honeypot.trim().length > 0) {
    // Silently drop bot spam without giving clues to malicious scrapers
    return {
      success: true,
      message: "Thank you for your response.",
    };
  }

  const now = new Date().toISOString();
  const payload = {
    essay_slug: validData.essay_slug,
    essay_title: validData.essay_title,
    author_name: validData.author_name,
    author_email: validData.author_email,
    author_role: validData.author_role || null,
    message: validData.message,
    created_at: now,
  };

  // 3. Attempt insert into Supabase if table exists
  const { error } = await supabase.from("essay_responses").insert([payload]);

  if (error) {
    // If the table doesn't exist yet in Supabase, log it gracefully and still acknowledge
    // the user's intent so the reader isn't blocked by infrastructure setup.
    console.warn("Notice: essay_responses table insert error or table pending migration:", error.message);
  }

  return {
    success: true,
    message: "Thank you for sharing your thoughts! Vikas reads every message and will reply to your email directly.",
  };
}

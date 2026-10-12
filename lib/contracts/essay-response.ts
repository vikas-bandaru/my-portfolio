import { z } from "zod";

// ─────────────────────────────────────────────────────────────
// Essay Direct Responses / Reflections Schema Contract
// ─────────────────────────────────────────────────────────────

export const SubmitEssayResponseInputSchema = z.object({
  essay_slug: z
    .string()
    .min(2, "essay_slug must be at least 2 characters")
    .regex(/^[a-z0-9-]+$/, "essay_slug must be a valid lowercase kebab-case slug"),
  essay_title: z.string().min(1, "essay_title is required"),
  author_name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  author_email: z
    .string()
    .trim()
    .email("Please provide a valid email address so Vikas can reply")
    .max(150, "Email cannot exceed 150 characters"),
  author_role: z
    .string()
    .trim()
    .max(150, "Role cannot exceed 150 characters")
    .optional()
    .nullable(),
  message: z
    .string()
    .trim()
    .min(10, "Your reflection or question must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
  // Honeypot spam defense field (must remain empty for legitimate users)
  website_honeypot: z
    .string()
    .max(0, "Spam detected.")
    .optional()
    .or(z.literal("")),
});

export const EssayResponseRecordSchema = z.object({
  id: z.string().uuid().optional(),
  essay_slug: z.string(),
  essay_title: z.string(),
  author_name: z.string(),
  author_email: z.string(),
  author_role: z.string().nullable().optional(),
  message: z.string(),
  created_at: z.string(),
});

export type SubmitEssayResponseInput = z.infer<typeof SubmitEssayResponseInputSchema>;
export type EssayResponseRecord = z.infer<typeof EssayResponseRecordSchema>;

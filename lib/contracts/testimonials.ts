import { z } from "zod";

// ─────────────────────────────────────────────────────────────
// 1. Service Testimonials Schemas & Contracts
// ─────────────────────────────────────────────────────────────

export const TestimonialStatusSchema = z.enum(["pending", "approved", "rejected"]);

export const SubmitTestimonialInputSchema = z.object({
  service_slug: z
    .string()
    .min(2, "service_slug must be at least 2 characters")
    .regex(/^[a-z0-9-]+$/, "service_slug must be a valid lowercase kebab-case slug"),
  author_name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  author_role: z
    .string()
    .trim()
    .max(150, "Role cannot exceed 150 characters")
    .optional()
    .nullable(),
  rating: z
    .number()
    .int()
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5")
    .default(5),
  highlight: z
    .string()
    .trim()
    .max(200, "Highlight cannot exceed 200 characters")
    .optional()
    .nullable(),
  content: z
    .string()
    .trim()
    .min(10, "Testimonial content must be at least 10 characters")
    .max(2000, "Testimonial content cannot exceed 2000 characters"),
});

export const TestimonialRecordSchema = z.object({
  id: z.string().uuid("Testimonial ID must be a valid UUID"),
  service_slug: z.string(),
  author_name: z.string(),
  author_role: z.string().nullable().optional(),
  author_avatar: z.string().nullable().optional(),
  rating: z.number().int().min(1).max(5).default(5),
  highlight: z.string().nullable().optional(),
  content: z.string(),
  status: TestimonialStatusSchema,
  created_at: z.string().datetime({ offset: true }).or(z.string()),
  approved_at: z.string().datetime({ offset: true }).nullable().optional(),
});

// Server Action Responses
export const ActionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  error: z.string().optional(),
});

export const FetchTestimonialsResponseSchema = z.object({
  testimonials: z.array(TestimonialRecordSchema),
  error: z.string().optional(),
});

// Inferred TypeScript Types
export type SubmitTestimonialInput = z.infer<typeof SubmitTestimonialInputSchema>;
export type TestimonialRecord = z.infer<typeof TestimonialRecordSchema>;
export type TestimonialStatus = z.infer<typeof TestimonialStatusSchema>;
export type ActionResponse = z.infer<typeof ActionResponseSchema>;
export type FetchTestimonialsResponse = z.infer<typeof FetchTestimonialsResponseSchema>;

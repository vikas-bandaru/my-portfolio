import { createClient } from "@supabase/supabase-js";

const cleanEnv = (val?: string) => (val || "").trim().replace(/^["']|["']$/g, "");

const supabaseUrl = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseKey = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase credentials missing in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type ContentType =
  | "idea"
  | "build"
  | "logicsims_update"
  | "experiment"
  | "experience"
  | "video";

export type PublicationStatus = "draft" | "in_progress" | "published" | "archived";

export type TargetSurface =
  | "ideas"
  | "builds"
  | "logicsims"
  | "watch"
  | "about"
  | "work"
  | "collaborate";

export interface CurationItemRecord {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  content_type: ContentType;
  primary_surface: TargetSurface;
  secondary_surfaces: TargetSurface[];
  status: PublicationStatus;
  is_featured: boolean;
  read_time?: string | null;
  excerpt: string;
  main_content: string;
  cover_image?: string | null;
  tags: string[];
  related_content_ids: string[];
  related_project_slug?: string | null;
  related_channel?: "official" | "tech" | null;
  external_links: { label: string; url: string }[];
  cross_post_links: {
    medium?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
  };
  research_sources: { title: string; citation: string; url?: string }[];
  created_at: string;
  updated_at: string;
  published_at?: string | null;
}

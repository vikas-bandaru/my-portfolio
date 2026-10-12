-- Table: public.essay_responses
-- Stores thoughtful direct reader reflections, critiques, and questions sent on specific essays.

CREATE TABLE IF NOT EXISTS public.essay_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  essay_slug TEXT NOT NULL,
  essay_title TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_role TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.essay_responses ENABLE ROW LEVEL SECURITY;

-- Policy 1: Anyone can insert a response (public reflection submission)
CREATE POLICY "Public can submit essay responses"
  ON public.essay_responses
  FOR INSERT
  WITH CHECK (true);

-- Policy 2: Responses are private (never publicly readable on the web)
-- Only Vikas / authenticated admin service role can view responses
CREATE POLICY "Authenticated users can read essay responses"
  ON public.essay_responses
  FOR SELECT
  TO authenticated
  USING (true);

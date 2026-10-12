-- SQL Migration: Create service_testimonials table for Vikas Bandaru Portfolio
-- Run this query once in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.service_testimonials (
  id uuid primary key default gen_random_uuid(),
  service_slug text not null, -- e.g. 'career-clarity', 'frontend-foundations', 'java-foundations'
  author_name text not null,
  author_role text,
  author_avatar text,
  rating integer default 5 check (rating >= 1 and rating <= 5),
  highlight text,
  content text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  approved_at timestamp with time zone
);

-- Index for speedy retrieval on service pages
create index if not exists idx_service_testimonials_slug_status 
on public.service_testimonials (service_slug, status);

-- Enable Row Level Security (RLS)
alter table public.service_testimonials enable row level security;

-- Public Policy: Anyone can submit a testimonial (insert with pending status)
create policy "Allow public testimonial submission"
on public.service_testimonials
for insert
to anon, authenticated
with check (status = 'pending');

-- Public Policy: Anyone can read approved testimonials
create policy "Allow public to view approved testimonials"
on public.service_testimonials
for select
to anon, authenticated
using (status = 'approved');

-- Admin/Service Role Policy: Service role or Authenticated Studio session can perform all actions
create policy "Allow full access for service role and studio"
on public.service_testimonials
for all
using (true)
with check (true);

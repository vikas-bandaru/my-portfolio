import { createClient } from "@supabase/supabase-js";
import { IDEAS } from "../lib/content";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jocnqwnmmunkiqfslpnn.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_04S1enk_P20Aw-XxcKAYpw_6UMy2gBm";

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: {
    // Disable realtime websocket in CLI migration script
    params: { eventsPerSecond: 10 },
  },
});

function convertIdeaToMarkdown(idea: typeof IDEAS[0]): string {
  let md = "";
  for (const sec of idea.sections) {
    if (sec.heading) {
      md += `## ${sec.heading}\n\n`;
    }
    for (const p of sec.paragraphs) {
      md += `${p}\n\n`;
    }
    if (sec.callout) {
      md += `> **${sec.callout.type.toUpperCase()}**: ${sec.callout.text}`;
      if (sec.callout.attribution) {
        md += `\n> *— ${sec.callout.attribution}*`;
      }
      md += `\n\n`;
    }
  }
  return md.trim();
}

const COVER_MAP: Record<string, string> = {
  "collapse-of-syntax-first-cs": "/images/editorial/idea-event-loop.webp",
  "proof-of-work-for-the-mind": "/images/editorial/idea-exam-hall.webp",
  "curriculum-as-life-toolkit": "/images/editorial/idea-mentoring.webp",
  "death-of-middle-tier-it": "/images/editorial/hero-network.webp",
};

const TAGS_MAP: Record<string, string[]> = {
  "collapse-of-syntax-first-cs": ["Computer Science", "Pedagogy", "State Machines", "AI & Hiring"],
  "proof-of-work-for-the-mind": ["Ausubel Meaningful Learning", "Kolb Experiential Cycle", "Dual Coding Theory", "Cognitive Sciences"],
  "curriculum-as-life-toolkit": ["Systems Thinking", "Pedagogy & Mental Models", "Engineering Mindset"],
  "death-of-middle-tier-it": ["GCCs", "Engineering Hiring", "Faculty Development", "Indian Tech Ecosystem"],
};

async function migrate() {
  console.log(`Starting migration of ${IDEAS.length} ideas to Supabase...`);

  for (const idea of IDEAS) {
    const mainContent = convertIdeaToMarkdown(idea);
    const coverImage = COVER_MAP[idea.slug] || "";
    const tags = TAGS_MAP[idea.slug] || [idea.category];

    const record = {
      slug: idea.slug,
      title: idea.title,
      subtitle: idea.subtitle || null,
      content_type: "idea",
      primary_surface: "ideas",
      secondary_surfaces: ["about"],
      status: "published",
      is_featured: true,
      read_time: idea.readTime,
      excerpt: idea.excerpt,
      main_content: mainContent,
      cover_image: coverImage,
      tags: tags,
      related_content_ids: [],
      related_project_slug: idea.relatedBuildSlug || null,
      related_channel: idea.relatedChannel || null,
      external_links: [],
      cross_post_links: idea.crossPostLinks || {},
      research_sources: [],
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("curation_items")
      .upsert(record, { onConflict: "slug" })
      .select();

    if (error) {
      console.error(`Error migrating "${idea.title}":`, error.message);
    } else {
      console.log(`Successfully migrated: "${idea.title}" (slug: ${idea.slug})`);
    }
  }

  console.log("Migration complete!");
}

migrate();

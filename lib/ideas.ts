import { supabase, CurationItemRecord } from "@/lib/supabase";
import { IdeaItem, IdeaSection } from "@/lib/content";

/**
 * Parses markdown main_content into IdeaSection[] structure for rendering in detail page.
 */
export function parseMarkdownToSections(markdown: string): IdeaSection[] {
  if (!markdown || !markdown.trim()) {
    return [];
  }

  const rawBlocks = markdown.split(/\n\n+/);
  const sections: IdeaSection[] = [];
  let currentSection: IdeaSection = {
    paragraphs: [],
  };

  for (const block of rawBlocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Heading 2: ## Title
    if (trimmed.startsWith("## ")) {
      if (currentSection.heading || currentSection.paragraphs.length > 0 || currentSection.callout) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: trimmed.replace(/^##\s+/, "").trim(),
        paragraphs: [],
      };
      continue;
    }

    // Heading 3: ### Subtitle
    if (trimmed.startsWith("### ")) {
      if (!currentSection.subheading && currentSection.paragraphs.length === 0) {
        currentSection.subheading = trimmed.replace(/^###\s+/, "").trim();
      } else {
        if (currentSection.heading || currentSection.paragraphs.length > 0 || currentSection.callout) {
          sections.push(currentSection);
        }
        currentSection = {
          subheading: trimmed.replace(/^###\s+/, "").trim(),
          paragraphs: [],
        };
      }
      continue;
    }

    // Callout block: > **TYPE**: text \n > *— attribution*
    if (trimmed.startsWith("> ")) {
      const lines = trimmed.split("\n").map((l) => l.replace(/^>\s*/, "").trim());
      const fullCalloutText = lines.join(" ");

      let type: "lens" | "observation" | "principle" = "observation";
      let text = fullCalloutText;
      let attribution: string | undefined;

      const typeMatch = fullCalloutText.match(/^\*\*([A-Za-z]+)\*\*:\s*(.*)/);
      if (typeMatch) {
        const parsedType = typeMatch[1].toLowerCase();
        if (parsedType === "lens" || parsedType === "observation" || parsedType === "principle") {
          type = parsedType;
        }
        text = typeMatch[2];
      }

      if (lines.length > 1 && (lines[1].startsWith("*—") || lines[1].startsWith("—"))) {
        attribution = lines[1].replace(/^[*—–-]+\s*/, "").replace(/[*_]/g, "").trim();
      }

      currentSection.callout = {
        type,
        text,
        attribution,
      };
      continue;
    }

    // Standard paragraph
    currentSection.paragraphs.push(trimmed);
  }

  if (currentSection.heading || currentSection.paragraphs.length > 0 || currentSection.callout) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Transforms a Supabase CurationItemRecord into an IdeaItem.
 */
export function mapCurationItemToIdea(record: CurationItemRecord): IdeaItem {
  // Determine category from tags or default to Reform
  const knownCategories: Array<"Reform" | "Learning" | "Engineering" | "Pedagogy"> = [
    "Reform",
    "Learning",
    "Engineering",
    "Pedagogy",
  ];
  let category: "Reform" | "Learning" | "Engineering" | "Pedagogy" = "Reform";

  if (record.tags && record.tags.length > 0) {
    const matched = knownCategories.find((cat) =>
      record.tags.some((tag) => tag.toLowerCase() === cat.toLowerCase())
    );
    if (matched) {
      category = matched;
    }
  }

  // Format date
  const rawDate = record.published_at || record.created_at;
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "Recently Published";

  const sections = parseMarkdownToSections(record.main_content);

  return {
    slug: record.slug,
    title: record.title,
    subtitle: record.subtitle || undefined,
    date: formattedDate,
    category,
    excerpt: record.excerpt,
    readTime: record.read_time || "5 min read",
    status: "live",
    reviewStatus: record.status === "published" ? "published" : "draft",
    crossPostLinks: {
      medium: record.cross_post_links?.medium,
      linkedin: record.cross_post_links?.linkedin,
    },
    sections,
    relatedBuildSlug: record.related_project_slug || undefined,
    relatedChannel: record.related_channel || undefined,
  };
}

/**
 * Fetches all PUBLISHED ideas from Supabase.
 * If draft or archived, they are excluded from the public result.
 */
export async function getPublishedIdeas(): Promise<IdeaItem[]> {
  try {
    const { data, error } = await supabase
      .from("curation_items")
      .select("*")
      .eq("content_type", "idea")
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });

    if (error) {
      console.error("Error fetching published ideas from Supabase:", error.message);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return (data as CurationItemRecord[]).map(mapCurationItemToIdea);
  } catch (err) {
    console.error("Failed to query curation_items:", err);
    return [];
  }
}

/**
 * Fetches a single published idea by its slug.
 * If the item is marked as draft, archived, or does not exist, returns null.
 */
export async function getPublishedIdeaBySlug(slug: string): Promise<IdeaItem | null> {
  try {
    const { data, error } = await supabase
      .from("curation_items")
      .select("*")
      .eq("content_type", "idea")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) {
      console.error(`Error fetching published idea '${slug}' from Supabase:`, error.message);
      return null;
    }

    if (!data) {
      return null;
    }

    return mapCurationItemToIdea(data as CurationItemRecord);
  } catch (err) {
    console.error(`Failed to query published idea '${slug}':`, err);
    return null;
  }
}

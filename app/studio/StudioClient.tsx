"use client";

import { useState } from "react";
import { CurationItemRecord, ContentType, PublicationStatus, TargetSurface } from "@/lib/supabase";
import { saveCurationItem, deleteCurationItem } from "./actions";
import { logoutAction } from "./login/actions";
import {
  FileText,
  Layers,
  Cpu,
  Video,
  BookOpen,
  Sparkles,
  Plus,
  Save,
  Trash2,
  ExternalLink,
  LogOut,
  CheckCircle2,
  Clock,
  Archive,
  ArrowRight,
  Eye,
  Tag,
  Link as LinkIcon,
  Search,
} from "lucide-react";

const CONTENT_TYPES: { id: ContentType; label: string; icon: typeof FileText }[] = [
  { id: "idea", label: "Idea / Article", icon: FileText },
  { id: "build", label: "Build / Platform", icon: Layers },
  { id: "logicsims_update", label: "LogicSims Update", icon: Cpu },
  { id: "experiment", label: "Software Experiment", icon: Sparkles },
  { id: "experience", label: "Past Experience Story", icon: BookOpen },
  { id: "video", label: "YouTube / Video", icon: Video },
];

const TARGET_SURFACES: { id: TargetSurface; label: string }[] = [
  { id: "ideas", label: "Ideas (Thinking)" },
  { id: "builds", label: "Builds (Evidence)" },
  { id: "logicsims", label: "LogicSims (Flagship)" },
  { id: "watch", label: "Watch (Distribution)" },
  { id: "work", label: "Work With Me (Engagement)" },
  { id: "collaborate", label: "Collaborate (Participation)" },
  { id: "about", label: "About (Story)" },
];

export default function StudioClient({ initialItems }: { initialItems: CurationItemRecord[] }) {
  const [items, setItems] = useState<CurationItemRecord[]>(initialItems);
  const [selectedId, setSelectedId] = useState<string | null>(initialItems[0]?.id || null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Draft form state for the selected item
  const selectedItem = items.find((i) => i.id === selectedId) || null;
  const [formState, setFormState] = useState<Partial<CurationItemRecord>>(
    selectedItem || createBlankItem("idea")
  );

  function createBlankItem(type: ContentType): Partial<CurationItemRecord> {
    const defaultSurface: TargetSurface =
      type === "idea"
        ? "ideas"
        : type === "build" || type === "experiment"
        ? "builds"
        : type === "logicsims_update"
        ? "logicsims"
        : type === "video"
        ? "watch"
        : "about";

    return {
      title: "",
      subtitle: "",
      slug: "",
      content_type: type,
      primary_surface: defaultSurface,
      secondary_surfaces: [],
      status: "draft",
      is_featured: false,
      read_time: "5 min read",
      excerpt: "",
      main_content: "",
      tags: [],
      related_content_ids: [],
      related_project_slug: "",
      related_channel: null,
      external_links: [],
      cross_post_links: {},
      research_sources: [],
    };
  }

  function handleSelect(item: CurationItemRecord) {
    setSelectedId(item.id);
    setFormState(item);
    setMessage(null);
  }

  function handleCreateNew(type: ContentType) {
    const blank = createBlankItem(type);
    setSelectedId(null);
    setFormState(blank);
    setMessage(null);
  }

  function autoSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    const payload = { ...formState };
    if (!payload.slug && payload.title) {
      payload.slug = autoSlug(payload.title);
    }

    const res = await saveCurationItem(payload);
    setSaving(false);

    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else if (res.item) {
      setMessage({ type: "success", text: "Successfully saved to Supabase!" });
      const saved = res.item;
      setSelectedId(saved.id);
      setFormState(saved);
      setItems((prev) => {
        const idx = prev.findIndex((i) => i.id === saved.id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = saved;
          return next;
        }
        return [saved, ...prev];
      });
    }
  }

  async function handleDelete() {
    if (!formState.id) return;
    if (!confirm("Are you sure you want to delete this curation item?")) return;

    const res = await deleteCurationItem(formState.id);
    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else {
      const remaining = items.filter((i) => i.id !== formState.id);
      setItems(remaining);
      if (remaining.length > 0) {
        handleSelect(remaining[0]);
      } else {
        handleCreateNew("idea");
      }
      setMessage({ type: "success", text: "Item deleted." });
    }
  }

  // Filter list
  const filteredItems = items.filter((item) => {
    if (activeFilter !== "all" && item.content_type !== activeFilter) return false;
    if (statusFilter !== "all" && item.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchExcerpt = item.excerpt.toLowerCase().includes(q);
      const matchSlug = item.slug.toLowerCase().includes(q);
      if (!matchTitle && !matchExcerpt && !matchSlug) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#070d18] text-foreground-100 flex flex-col font-sans">
      {/* Studio Header Bar */}
      <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between shrink-0 bg-[#091122]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 border border-primary-500/30 flex items-center justify-center font-mono font-bold text-xs">
            VB
          </div>
          <div>
            <div className="font-heading font-semibold text-white text-sm">
              Content Curation Studio
            </div>
            <div className="text-[10px] font-mono text-foreground-400">
              Private Source of Truth • Supabase Cloud
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-foreground-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {items.filter((i) => i.status === "published").length} Published
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {items.filter((i) => i.status === "in_progress").length} In Progress
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              {items.filter((i) => i.status === "draft").length} Drafts
            </span>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-foreground-300 hover:text-white text-xs font-mono transition-colors"
            >
              <LogOut className="w-3 h-3" />
              <span>Lock Studio</span>
            </button>
          </form>
        </div>
      </header>

      {/* Main Studio Two-Column Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Content Navigator */}
        <aside className="w-80 md:w-96 border-r border-white/10 flex flex-col bg-[#070e1c] shrink-0">
          {/* Create Button Strip */}
          <div className="p-4 border-b border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-400">
                Create Content
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {CONTENT_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleCreateNew(type.id)}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/30 text-foreground-300 hover:text-white text-[11px] transition-all gap-1 text-center"
                    title={`Create new ${type.label}`}
                  >
                    <Icon className="w-3.5 h-3.5 text-primary-400" />
                    <span className="truncate w-full">{type.label.split("/")[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Filters */}
          <div className="p-4 border-b border-white/10 space-y-2.5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search titles, slugs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 pl-8 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-foreground-500 focus:outline-none focus:border-primary-400"
              />
              <Search className="w-3.5 h-3.5 text-foreground-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-foreground-300 focus:outline-none"
              >
                <option value="all">All Ecosystem Types</option>
                {CONTENT_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-foreground-300 focus:outline-none"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="in_progress">In Progress</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Content List Feed */}
          <div className="flex-1 overflow-y-auto divide-y divide-white/5">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-xs text-foreground-500 font-light space-y-2">
                <p>No content items found.</p>
                <p className="text-[11px] font-mono text-foreground-600">
                  Click a button above to start your first curated draft.
                </p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const isSelected = item.id === selectedId;
                const statusColor =
                  item.status === "published"
                    ? "bg-emerald-400"
                    : item.status === "in_progress"
                    ? "bg-amber-400"
                    : "bg-zinc-500";

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-4 transition-colors space-y-1.5 ${
                      isSelected
                        ? "bg-primary-500/10 border-l-2 border-primary-500"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary-400 font-semibold truncate">
                        {item.content_type.replace("_", " ")}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-foreground-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
                        {item.status}
                      </span>
                    </div>

                    <h4 className="font-heading font-semibold text-white text-xs leading-snug line-clamp-1">
                      {item.title || "Untitled Draft"}
                    </h4>

                    <p className="text-[11px] text-foreground-400 line-clamp-2 font-light">
                      {item.excerpt || item.main_content?.slice(0, 80) || "No content yet..."}
                    </p>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Center Canvas: Editorial Workspace */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-[#060b14]">
          {/* Editor Action Bar */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#08101e]/80 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-foreground-400">
                {formState.id ? "Editing Existing Item" : "New Unsaved Draft"}
              </span>
              {message && (
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${
                    message.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {message.text}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {formState.id && (
                <button
                  onClick={handleDelete}
                  className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              )}

              <button
                onClick={handleSave}
                disabled={saving}
                className="px-5 py-1.5 rounded-lg bg-primary-500 hover:bg-primary-400 disabled:opacity-50 text-white text-xs font-mono font-semibold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{saving ? "Saving..." : "Save Changes"}</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="max-w-4xl w-full mx-auto p-6 md:p-10 space-y-8">
            {/* Metadata Cluster */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Title
                </label>
                <input
                  type="text"
                  value={formState.title || ""}
                  onChange={(e) => {
                    const title = e.target.value;
                    setFormState((prev) => ({
                      ...prev,
                      title,
                      slug: prev.slug || autoSlug(title),
                    }));
                  }}
                  placeholder="Enter publication title"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-heading font-semibold text-lg focus:outline-none focus:border-primary-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Subtitle / Subheading
                </label>
                <input
                  type="text"
                  value={formState.subtitle || ""}
                  onChange={(e) => setFormState((prev) => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="Optional subtitle"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={formState.slug || ""}
                  onChange={(e) => setFormState((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-slug"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-primary-300 focus:outline-none focus:border-primary-400"
                />
              </div>
            </div>

            {/* Ecosystem Classification */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 block">
                Ecosystem Routing &amp; Status
              </span>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-foreground-400">Content Type</label>
                  <select
                    value={formState.content_type || "idea"}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        content_type: e.target.value as ContentType,
                      }))
                    }
                    className="w-full bg-[#0d1627] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    {CONTENT_TYPES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-foreground-400">
                    Primary Destination Surface
                  </label>
                  <select
                    value={formState.primary_surface || "ideas"}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        primary_surface: e.target.value as TargetSurface,
                      }))
                    }
                    className="w-full bg-[#0d1627] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    {TARGET_SURFACES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-foreground-400">
                    Publication Status
                  </label>
                  <select
                    value={formState.status || "draft"}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        status: e.target.value as PublicationStatus,
                      }))
                    }
                    className="w-full bg-[#0d1627] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none font-semibold"
                  >
                    <option value="draft">Draft</option>
                    <option value="in_progress">In Progress</option>
                    <option value="published">Published (Live to Site)</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-foreground-300">
                  <input
                    type="checkbox"
                    checked={Boolean(formState.is_featured)}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, is_featured: e.target.checked }))
                    }
                    className="rounded border-white/20 text-primary-500 focus:ring-0"
                  />
                  <span>Feature on Home Page</span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="text-foreground-400 font-mono text-[11px]">Read Time:</span>
                  <input
                    type="text"
                    value={formState.read_time || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, read_time: e.target.value }))
                    }
                    placeholder="e.g. 8 min read"
                    className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white w-28"
                  />
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-1.5">
              <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                Short Description / Excerpt
              </label>
              <textarea
                rows={2}
                value={formState.excerpt || ""}
                onChange={(e) => setFormState((prev) => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief summary displayed on cards and overview grids..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground-200 leading-relaxed focus:outline-none focus:border-primary-400"
              />
            </div>

            {/* Main Content Markdown Canvas */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Main Content (Markdown Body)
                </label>
                <span className="font-mono text-[11px] text-foreground-500">
                  Supports headings, callouts, lists &amp; code blocks
                </span>
              </div>
              <textarea
                rows={16}
                value={formState.main_content || ""}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, main_content: e.target.value }))
                }
                placeholder="# Introduction&#10;&#10;Write your deep essay, build breakdown, or learning telemetry here..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-mono leading-relaxed focus:outline-none focus:border-primary-400"
              />
            </div>

            {/* Ecosystem Cross-Links & Tags */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Tags / Cognitive Themes (comma-separated)
                </label>
                <input
                  type="text"
                  value={formState.tags?.join(", ") || ""}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      tags: e.target.value
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean),
                    }))
                  }
                  placeholder="Ausubel, Kolb, State Machines, Systems"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Related Project Slug
                </label>
                <input
                  type="text"
                  value={formState.related_project_slug || ""}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, related_project_slug: e.target.value }))
                  }
                  placeholder="e.g. logicsims or traits-ecommerce"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary-400"
                />
              </div>
            </div>

            {/* External Syndication URLs (Medium / LinkedIn) */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 block">
                External Syndication &amp; Cross-Post URLs
              </span>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-foreground-400">Medium URL</label>
                  <input
                    type="url"
                    value={formState.cross_post_links?.medium || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        cross_post_links: {
                          ...prev.cross_post_links,
                          medium: e.target.value,
                        },
                      }))
                    }
                    placeholder="https://medium.com/@..."
                    className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-foreground-400">
                    LinkedIn Article URL
                  </label>
                  <input
                    type="url"
                    value={formState.cross_post_links?.linkedin || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        cross_post_links: {
                          ...prev.cross_post_links,
                          linkedin: e.target.value,
                        },
                      }))
                    }
                    placeholder="https://linkedin.com/pulse/..."
                    className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

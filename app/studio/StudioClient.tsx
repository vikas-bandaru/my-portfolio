"use client";

import { useState } from "react";
import {
  CurationItemRecord,
  ContentType,
  PublicationStatus,
  TargetSurface,
} from "@/lib/supabase";
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
  Clock,
  Tag,
  Link as LinkIcon,
  Search,
  Image as ImageIcon,
  BookMarked,
  Wand2,
  Check,
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

const EDITORIAL_IMAGES = [
  { path: "/images/editorial/hero-network.webp", label: "Hero Network (Cognitive Grid)" },
  { path: "/images/editorial/build-logicsims.webp", label: "LogicSims Interactive Lab" },
  { path: "/images/editorial/build-traits.webp", label: "Traits Architectural Engine" },
  { path: "/images/editorial/idea-event-loop.webp", label: "Event Loop & Concurrency" },
  { path: "/images/editorial/idea-exam-hall.webp", label: "Exam Hall Pedagogy" },
  { path: "/images/editorial/idea-mentoring.webp", label: "Engineering Mentorship" },
  { path: "/images/editorial/watch-official.webp", label: "Vikas Bandaru Official" },
  { path: "/images/editorial/watch-tech.webp", label: "VikasBandaruTech Deep Dives" },
];

const COGNITIVE_SUGGESTIONS = [
  "Ausubel Meaningful Learning",
  "Kolb Experiential Cycle",
  "Dual Coding Theory",
  "Finite State Machines",
  "Garbage Collection Internals",
  "Pedagogy & Mental Models",
  "Systems Architecture",
  "Distributed Systems",
  "Active Recall",
  "TypeScript Engineering",
  "Next.js App Router",
];

export default function StudioClient({ initialItems }: { initialItems: CurationItemRecord[] }) {
  const [items, setItems] = useState<CurationItemRecord[]>(initialItems);
  const [selectedId, setSelectedId] = useState<string | null>(initialItems[0]?.id || null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form State
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
      cover_image: "",
      tags: [],
      related_content_ids: [],
      related_project_slug: "",
      related_channel: type === "video" ? "tech" : null,
      external_links: [],
      cross_post_links: {},
      research_sources: [],
    };
  }

  function handleSelect(item: CurationItemRecord) {
    setSelectedId(item.id);
    setFormState({
      ...item,
      secondary_surfaces: item.secondary_surfaces || [],
      tags: item.tags || [],
      external_links: item.external_links || [],
      cross_post_links: item.cross_post_links || {},
      research_sources: item.research_sources || [],
    });
    setMessage(null);
  }

  function handleCreateNew(type: ContentType) {
    const blank = createBlankItem(type);
    setSelectedId(null);
    setFormState(blank);
    setMessage(null);
  }

  // --- AUTOMATIONS ---

  // 1. Smart Slug Generator (type-aware prefixing)
  function generateSmartSlug(title: string, type?: ContentType) {
    const sanitized = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    if (!sanitized) return "";

    const activeType = type || formState.content_type || "idea";
    const prefixMap: Partial<Record<ContentType, string>> = {
      build: "build",
      experiment: "lab",
      logicsims_update: "sim",
      video: "watch",
      experience: "story",
    };

    const prefix = prefixMap[activeType];
    if (prefix && !sanitized.startsWith(prefix)) {
      return `${prefix}-${sanitized}`;
    }
    return sanitized;
  }

  // 2. Real-time Read-time calculation based on word count
  function calculateReadTime(text: string): string {
    const words = (text || "").trim().split(/\s+/).filter(Boolean).length;
    if (words === 0) return "1 min read";
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  }

  // 3. Auto-Excerpt Generator
  function extractAutoExcerpt(text: string): string {
    if (!text) return "";
    const clean = text
      .replace(/^#+\s.*$/gm, "") // remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // link markdown
      .replace(/[*_`]/g, "") // bold/italic/code
      .trim();
    const firstParagraph = clean.split(/\n\s*\n/)[0] || clean;
    return firstParagraph.slice(0, 180).trim() + (firstParagraph.length > 180 ? "..." : "");
  }

  // Toggle secondary surface
  function toggleSecondarySurface(surface: TargetSurface) {
    const current = formState.secondary_surfaces || [];
    const exists = current.includes(surface);
    const updated = exists ? current.filter((s) => s !== surface) : [...current, surface];
    setFormState((prev) => ({ ...prev, secondary_surfaces: updated }));
  }

  // Add / remove tag
  function addTag(tag: string) {
    const trimmed = tag.trim();
    if (!trimmed) return;
    const current = formState.tags || [];
    if (!current.includes(trimmed)) {
      setFormState((prev) => ({ ...prev, tags: [...current, trimmed] }));
    }
  }

  function removeTag(tagToRemove: string) {
    const current = formState.tags || [];
    setFormState((prev) => ({ ...prev, tags: current.filter((t) => t !== tagToRemove) }));
  }

  // Research Sources Helpers
  function addResearchSource() {
    const current = formState.research_sources || [];
    setFormState((prev) => ({
      ...prev,
      research_sources: [...current, { title: "", citation: "", url: "" }],
    }));
  }

  function updateResearchSource(index: number, field: "title" | "citation" | "url", value: string) {
    const current = [...(formState.research_sources || [])];
    current[index] = { ...current[index], [field]: value };
    setFormState((prev) => ({ ...prev, research_sources: current }));
  }

  function removeResearchSource(index: number) {
    const current = (formState.research_sources || []).filter((_, i) => i !== index);
    setFormState((prev) => ({ ...prev, research_sources: current }));
  }

  // External Links Helpers
  function addExternalLink() {
    const current = formState.external_links || [];
    setFormState((prev) => ({
      ...prev,
      external_links: [...current, { label: "", url: "" }],
    }));
  }

  function updateExternalLink(index: number, field: "label" | "url", value: string) {
    const current = [...(formState.external_links || [])];
    current[index] = { ...current[index], [field]: value };
    setFormState((prev) => ({ ...prev, external_links: current }));
  }

  function removeExternalLink(index: number) {
    const current = (formState.external_links || []).filter((_, i) => i !== index);
    setFormState((prev) => ({ ...prev, external_links: current }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    const payload = { ...formState };
    if (!payload.slug && payload.title) {
      payload.slug = generateSmartSlug(payload.title, payload.content_type);
    }
    if (!payload.read_time && payload.main_content) {
      payload.read_time = calculateReadTime(payload.main_content);
    }

    const res = await saveCurationItem(payload);
    setSaving(false);

    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else if (res.item) {
      setMessage({ type: "success", text: "Successfully saved to Supabase Cloud!" });
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
    if (!confirm("Are you sure you want to permanently delete this curation record?")) return;

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
      setMessage({ type: "success", text: "Record deleted." });
    }
  }

  const filteredItems = items.filter((item) => {
    if (activeFilter !== "all" && item.content_type !== activeFilter) return false;
    if (statusFilter !== "all" && item.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (item.title || "").toLowerCase().includes(q);
      const matchExcerpt = (item.excerpt || "").toLowerCase().includes(q);
      const matchSlug = (item.slug || "").toLowerCase().includes(q);
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
              {items.filter((i) => i.status === "published").length} Live
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-foreground-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
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
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/30 text-foreground-300 hover:text-white text-[11px] transition-all gap-1 text-center cursor-pointer"
                    title={`Create new ${type.label}`}
                  >
                    <Icon className="w-3.5 h-3.5 text-primary-400" />
                    <span className="line-clamp-1 text-[10px]">{type.label.split("/")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Filter */}
          <div className="p-3 border-b border-white/10 space-y-2 bg-[#050b16]">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400" />
              <input
                type="text"
                placeholder="Search drafts, titles, slugs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-foreground-500 focus:outline-none focus:border-primary-400 font-mono"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-foreground-300 focus:outline-none font-mono"
              >
                <option value="all">All Content Types</option>
                {CONTENT_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-foreground-300 focus:outline-none font-mono"
              >
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="in_progress">In Progress</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Item List */}
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
                    className={`w-full text-left p-4 transition-colors space-y-1.5 cursor-pointer ${
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
                {formState.id ? `Editing Record: ${formState.id.slice(0, 8)}...` : "New Unsaved Draft"}
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
                  className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
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
                <span>{saving ? "Saving..." : "Save Record"}</span>
              </button>
            </div>
          </div>

          {/* Form Fields - 100% Comprehensive Schema */}
          <div className="max-w-4xl w-full mx-auto p-6 md:p-10 space-y-8">
            {/* 1. Primary Title & Identifiers */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                    Content Title
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      if (formState.title) {
                        const newSlug = generateSmartSlug(formState.title, formState.content_type);
                        setFormState((prev) => ({ ...prev, slug: newSlug }));
                      }
                    }}
                    className="flex items-center gap-1 text-[11px] font-mono text-primary-400 hover:text-primary-300 cursor-pointer"
                  >
                    <Wand2 className="w-3 h-3" />
                    <span>Auto-generate slug</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={formState.title || ""}
                  onChange={(e) => {
                    const title = e.target.value;
                    setFormState((prev) => ({
                      ...prev,
                      title,
                      slug: prev.slug || generateSmartSlug(title, prev.content_type),
                    }));
                  }}
                  placeholder="Enter publication title"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-heading font-semibold text-lg focus:outline-none focus:border-primary-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                    Subtitle / Subheading
                  </label>
                  <input
                    type="text"
                    value={formState.subtitle || ""}
                    onChange={(e) => setFormState((prev) => ({ ...prev, subtitle: e.target.value }))}
                    placeholder="Optional secondary context"
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
                    placeholder="e.g. state-machines-in-practice"
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-primary-300 focus:outline-none focus:border-primary-400"
                  />
                </div>
              </div>
            </div>

            {/* 2. Routing, Surfaces & Publication Status */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 block">
                Ecosystem Routing &amp; Status
              </span>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-foreground-400">Content Type</label>
                  <select
                    value={formState.content_type || "idea"}
                    onChange={(e) => {
                      const newType = e.target.value as ContentType;
                      setFormState((prev) => ({
                        ...prev,
                        content_type: newType,
                        slug: prev.title ? generateSmartSlug(prev.title, newType) : prev.slug,
                      }));
                    }}
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
                    Primary Surface
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
                    <option value="draft">Draft (Private in CMS)</option>
                    <option value="in_progress">In Progress</option>
                    <option value="published">Published (Live to Site)</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Secondary Cross-Display Surfaces */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <label className="font-mono text-[11px] text-foreground-400">
                  Secondary Surfaces (also surface item on these pages):
                </label>
                <div className="flex flex-wrap gap-2">
                  {TARGET_SURFACES.map((s) => {
                    const isPrimary = formState.primary_surface === s.id;
                    const isSelected = formState.secondary_surfaces?.includes(s.id);
                    if (isPrimary) return null;

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleSecondarySurface(s.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-primary-500/20 text-primary-300 border-primary-500/40"
                            : "bg-white/5 text-foreground-400 border-white/10 hover:border-white/20"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {s.label.split(" ")[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Featured toggle & Read Time Automation */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs border-t border-white/5">
                <label className="flex items-center gap-2 cursor-pointer text-foreground-300">
                  <input
                    type="checkbox"
                    checked={Boolean(formState.is_featured)}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, is_featured: e.target.checked }))
                    }
                    className="rounded border-white/20 text-primary-500 focus:ring-0"
                  />
                  <span>Feature on Home Page Featured Rail</span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="text-foreground-400 font-mono text-[11px]">Read Time:</span>
                  <input
                    type="text"
                    value={formState.read_time || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, read_time: e.target.value }))
                    }
                    placeholder="e.g. 5 min read"
                    className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white w-28 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (formState.main_content) {
                        setFormState((prev) => ({
                          ...prev,
                          read_time: calculateReadTime(prev.main_content || ""),
                        }));
                      }
                    }}
                    title="Calculate read time from word count"
                    className="text-primary-400 hover:text-primary-300 cursor-pointer p-1"
                  >
                    <Wand2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Cover Image & Visual Assets */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Cover Image / Visual Asset
                </span>
                {formState.cover_image && (
                  <button
                    type="button"
                    onClick={() => setFormState((prev) => ({ ...prev, cover_image: "" }))}
                    className="text-[11px] font-mono text-red-400 hover:text-red-300 cursor-pointer"
                  >
                    Clear image
                  </button>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={formState.cover_image || ""}
                  onChange={(e) => setFormState((prev) => ({ ...prev, cover_image: e.target.value }))}
                  placeholder="/images/editorial/hero-network.webp or external image URL"
                  className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono"
                />

                <p className="text-[11px] text-foreground-400 font-mono">
                  Select from pre-rendered editorial assets:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {EDITORIAL_IMAGES.map((img) => (
                    <button
                      key={img.path}
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, cover_image: img.path }))}
                      className={`text-left p-2 rounded-lg border text-[11px] transition-all cursor-pointer ${
                        formState.cover_image === img.path
                          ? "bg-primary-500/20 border-primary-500 text-white"
                          : "bg-white/5 border-white/10 text-foreground-400 hover:border-white/20 hover:text-foreground-200"
                      }`}
                    >
                      <div className="line-clamp-1 font-semibold">{img.label}</div>
                      <div className="text-[9px] font-mono text-foreground-500 truncate">
                        {img.path.replace("/images/editorial/", "")}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Short Description / Excerpt */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Short Description / Excerpt
                </label>
                <button
                  type="button"
                  onClick={() => {
                    if (formState.main_content) {
                      setFormState((prev) => ({
                        ...prev,
                        excerpt: extractAutoExcerpt(prev.main_content || ""),
                      }));
                    }
                  }}
                  className="flex items-center gap-1 text-[11px] font-mono text-primary-400 hover:text-primary-300 cursor-pointer"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>Auto-extract from content</span>
                </button>
              </div>
              <textarea
                rows={2}
                value={formState.excerpt || ""}
                onChange={(e) => setFormState((prev) => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief summary displayed on cards and overview grids..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground-200 leading-relaxed focus:outline-none focus:border-primary-400"
              />
            </div>

            {/* 5. Main Content Markdown Canvas */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  Main Content (Markdown Body)
                </label>
                <span className="font-mono text-[11px] text-foreground-500">
                  {formState.main_content ? `${formState.main_content.trim().split(/\s+/).filter(Boolean).length} words` : "0 words"}
                </span>
              </div>
              <textarea
                rows={16}
                value={formState.main_content || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormState((prev) => ({
                    ...prev,
                    main_content: val,
                    read_time: calculateReadTime(val),
                  }));
                }}
                placeholder="# Deep Systems Breakdown&#10;&#10;Write your pedagogical essay, platform architecture breakdown, or experiment observations here..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-mono leading-relaxed focus:outline-none focus:border-primary-400"
              />
            </div>

            {/* 6. Tags & Cognitive Themes */}
            <div className="space-y-3">
              <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider block">
                Tags &amp; Cognitive Frameworks
              </label>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 items-center">
                {(formState.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-500/15 border border-primary-500/30 text-primary-300 text-xs font-mono"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400 cursor-pointer ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              {/* Add Custom Tag */}
              <div className="flex gap-2">
                <input
                  type="text"
                  id="customTagInput"
                  placeholder="Type tag and press Add..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const input = e.currentTarget;
                      addTag(input.value);
                      input.value = "";
                    }
                  }}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-primary-400"
                />
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("customTagInput") as HTMLInputElement;
                    if (el && el.value) {
                      addTag(el.value);
                      el.value = "";
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-mono cursor-pointer"
                >
                  Add
                </button>
              </div>

              {/* Tag Auto-Suggestions */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-foreground-500">
                  Quick suggest (1-click to add):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {COGNITIVE_SUGGESTIONS.map((sug) => {
                    const alreadyAdded = formState.tags?.includes(sug);
                    return (
                      <button
                        key={sug}
                        type="button"
                        disabled={alreadyAdded}
                        onClick={() => addTag(sug)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                          alreadyAdded
                            ? "bg-white/5 text-foreground-600 line-through cursor-not-allowed"
                            : "bg-white/5 hover:bg-primary-500/20 text-foreground-400 hover:text-primary-300 border border-white/5 hover:border-primary-500/30"
                        }`}
                      >
                        + {sug}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 7. Relationships & Video Distribution Channel */}
            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary-400 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-foreground-400 uppercase tracking-wider">
                  YouTube Target Channel
                </label>
                <select
                  value={formState.related_channel || ""}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      related_channel: (e.target.value as "official" | "tech") || null,
                    }))
                  }
                  className="w-full bg-[#0d1627] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="">None / Not a Video</option>
                  <option value="tech">@VikasBandaruTech (Deep Engineering Dives)</option>
                  <option value="official">Vikas Bandaru Official (Broader Tech & Career)</option>
                </select>
              </div>
            </div>

            {/* 8. Research Sources & Citations */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 flex items-center gap-2">
                  <BookMarked className="w-3.5 h-3.5" />
                  Research Sources &amp; Citations
                </span>
                <button
                  type="button"
                  onClick={addResearchSource}
                  className="text-xs font-mono text-primary-400 hover:text-primary-300 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Source</span>
                </button>
              </div>

              {(formState.research_sources || []).length === 0 ? (
                <p className="text-xs font-mono text-foreground-500 font-light">
                  No citations added yet. Click &ldquo;Add Source&rdquo; to attach scholarly references, papers, or RFCs.
                </p>
              ) : (
                <div className="space-y-3">
                  {formState.research_sources?.map((source, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs relative"
                    >
                      <button
                        type="button"
                        onClick={() => removeResearchSource(index)}
                        className="absolute right-3 top-3 text-red-400 hover:text-red-300 text-xs font-mono cursor-pointer"
                      >
                        Remove
                      </button>
                      <div className="grid gap-2 sm:grid-cols-2 pr-12">
                        <input
                          type="text"
                          placeholder="Source / Paper Title (e.g. Educational Psychology)"
                          value={source.title}
                          onChange={(e) => updateResearchSource(index, "title", e.target.value)}
                          className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                        />
                        <input
                          type="text"
                          placeholder="Citation (e.g. Ausubel, D.P., 1968)"
                          value={source.citation}
                          onChange={(e) => updateResearchSource(index, "citation", e.target.value)}
                          className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                        />
                      </div>
                      <input
                        type="url"
                        placeholder="Reference URL (optional)"
                        value={source.url || ""}
                        onChange={(e) => updateResearchSource(index, "url", e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 9. External Reference Links */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 flex items-center gap-2">
                  <LinkIcon className="w-3.5 h-3.5" />
                  External Links (GitHub Repos, Live Demos, Docs)
                </span>
                <button
                  type="button"
                  onClick={addExternalLink}
                  className="text-xs font-mono text-primary-400 hover:text-primary-300 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Link</span>
                </button>
              </div>

              {(formState.external_links || []).length === 0 ? (
                <p className="text-xs font-mono text-foreground-500 font-light">
                  No external links added yet. Attach GitHub repositories, live deployments, or sandbox URLs.
                </p>
              ) : (
                <div className="space-y-2">
                  {formState.external_links?.map((link, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Label (e.g. GitHub Repository)"
                        value={link.label}
                        onChange={(e) => updateExternalLink(index, "label", e.target.value)}
                        className="w-1/3 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                      />
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={link.url}
                        onChange={(e) => updateExternalLink(index, "url", e.target.value)}
                        className="flex-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => removeExternalLink(index)}
                        className="text-red-400 hover:text-red-300 text-xs font-mono px-2 cursor-pointer"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 10. External Cross-Post & Syndication URLs */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-400 block">
                Cross-Post Syndication URLs
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
                    className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono"
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
                    className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono"
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

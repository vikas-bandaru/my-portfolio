"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import EssayShareBar from "@/components/ideas/EssayShareBar";
import EssayResponseModal from "@/components/ideas/EssayResponseModal";

interface EssayEngagementSectionProps {
  essaySlug: string;
  essayTitle: string;
  essaySubtitle?: string;
}

export default function EssayEngagementSection({
  essaySlug,
  essayTitle,
  essaySubtitle,
}: EssayEngagementSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-10 pt-4">
      {/* 1. Share Actions Bar */}
      <EssayShareBar
        title={essayTitle}
        slug={essaySlug}
        subtitle={essaySubtitle}
      />

      {/* 2. Direct Reflection Callout & Modal Trigger */}
      <div className="p-7 sm:p-9 rounded-3xl bg-background-100/70 border border-background-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary-700">
            <MessageSquare className="w-3.5 h-3.5" />
            Join the Conversation
          </div>
          <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground-950">
            Have a thought, observation, or question on this essay?
          </h3>
          <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed font-light">
            I welcome reflections and counterarguments from educators, engineers, and students. Send your thought directly to my inbox.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-medium text-xs hover:bg-primary-500 transition-all shadow-xs cursor-pointer"
            id="essay-respond-btn"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send a Direct Thought</span>
          </button>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-background-200 bg-background-50/80 text-foreground-800 font-medium text-xs hover:bg-background-100 transition-all"
          >
            <span>Collaborate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3. Direct Response Modal Overlay */}
      <EssayResponseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        essaySlug={essaySlug}
        essayTitle={essayTitle}
      />
    </div>
  );
}

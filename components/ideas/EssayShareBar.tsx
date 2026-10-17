"use client";

import { useState } from "react";
import { Share2, Check, MessageCircle, Link as LinkIcon } from "lucide-react";

interface EssayShareBarProps {
  title: string;
  slug: string;
  subtitle?: string;
}

export default function EssayShareBar({ title, slug, subtitle }: EssayShareBarProps) {
  const [copied, setCopied] = useState(false);

  // Construct absolute URL (using live deployment origin or current window location)
  const origin =
    typeof window !== "undefined" && window.location.origin && !window.location.origin.includes("localhost")
      ? window.location.origin
      : "https://vikas-bandaru.vercel.app";
  const url = `${origin}/ideas/${slug}`;
  const encodedUrl = encodeURIComponent(url);

  // WhatsApp share message: Contextual teaser message + hook + URL
  const whatsappHeadline = `Thoughtful essay by Vikas Bandaru: "${title}"`;
  const whatsappHook = subtitle ? `${subtitle}\n\n` : "";
  const whatsappPrompt = `Exploring systems logic, mental models, and real-world problem solving:\n`;
  const whatsappFullMessage = `${whatsappHeadline}\n\n${whatsappHook}${whatsappPrompt}${url}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappFullMessage)}`;

  // LinkedIn suggested text: pre-composed reflection hook + URL
  const linkedinText = `Sharing this reflective essay by Vikas Bandaru: "${title}"\n\n${subtitle ? `${subtitle}\n\n` : ""}${url}`;
  const encodedLinkedinText = encodeURIComponent(linkedinText);

  // Fallback direct URL using LinkedIn feed update endpoint with pre-filled text
  const linkedinDirectHref = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedLinkedinText}`;

  const handleLinkedInShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Copy the suggested message and link to clipboard automatically so user can paste if desired
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(linkedinText).catch(() => {});
    }

    // Attempt to open the LinkedIn feed active share composer with pre-filled text
    const width = 640;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const windowFeatures = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;

    // Prefer shareActive composer with pre-filled text; fallback to share-offsite
    window.open(linkedinDirectHref, "linkedin-share-dialog", windowFeatures);
  };

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-6 pb-6 border-y border-background-200 text-xs font-mono">
      <div className="flex items-center gap-2 text-foreground-500 font-semibold uppercase tracking-wider">
        <Share2 className="w-3.5 h-3.5 text-primary-600" />
        <span>Share this essay:</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* WhatsApp Share */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 transition-colors shadow-2xs font-sans text-xs font-medium cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn Share */}
        <a
          href={linkedinDirectHref}
          onClick={handleLinkedInShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/30 hover:bg-[#0077b5]/15 transition-colors shadow-2xs font-sans text-xs font-medium cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Copy essay link"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all shadow-2xs font-sans text-xs font-medium cursor-pointer ${
            copied
              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
              : "bg-background-100/80 text-foreground-700 border-background-300 hover:bg-background-200/80 hover:text-foreground-950"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-3.5 h-3.5 text-foreground-500" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import {
  MessageSquare,
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { submitEssayResponse } from "@/app/actions/essay-responses";

interface EssayResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  essaySlug: string;
  essayTitle: string;
}

export default function EssayResponseModal({
  isOpen,
  onClose,
  essaySlug,
  essayTitle,
}: EssayResponseModalProps) {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorRole, setAuthorRole] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-spam trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setFeedbackMessage("");

    try {
      const res = await submitEssayResponse({
        essay_slug: essaySlug,
        essay_title: essayTitle,
        author_name: authorName,
        author_email: authorEmail,
        author_role: authorRole || undefined,
        message,
        website_honeypot: honeypot,
      });

      if (res.success) {
        setStatus("success");
        setFeedbackMessage(
          res.message ||
            "Thank you for sharing your thoughts! Vikas reads every message and will reply directly to your email."
        );
        // Clear inputs
        setAuthorName("");
        setAuthorEmail("");
        setAuthorRole("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedbackMessage(res.error || "Unable to send your response. Please check the fields and try again.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("A network issue occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-foreground-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-background-50 border border-background-200 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-foreground-400 hover:text-foreground-900 hover:bg-background-200/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 font-mono text-[11px] uppercase tracking-wider font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Reader Reflection
          </div>
          <h2 id="modal-title" className="font-heading font-semibold text-xl sm:text-2xl text-foreground-950">
            Share a Thought or Question
          </h2>
          <p className="text-xs text-foreground-600 leading-relaxed font-light">
            Reflecting on: <strong className="text-foreground-900 font-medium">&ldquo;{essayTitle}&rdquo;</strong>
          </p>
        </div>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-emerald-950">
              Message Sent to Vikas
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 font-light leading-relaxed">
              {feedbackMessage}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot Field (invisible to humans, catches bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_honeypot">Website</label>
              <input
                id="website_honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Error Banner */}
            {status === "error" && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="author_name" className="block text-xs font-mono font-medium text-foreground-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="author_name"
                type="text"
                required
                placeholder="e.g. Priya Sharma"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background-100/70 border border-background-300 text-foreground-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all placeholder:text-foreground-400"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="author_email" className="block text-xs font-mono font-medium text-foreground-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                id="author_email"
                type="email"
                required
                placeholder="priya@example.com (for Vikas's direct reply)"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background-100/70 border border-background-300 text-foreground-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all placeholder:text-foreground-400"
              />
            </div>

            {/* Role / Context (Optional) */}
            <div className="space-y-1.5">
              <label htmlFor="author_role" className="block text-xs font-mono font-medium text-foreground-700">
                Role / College / Company <span className="text-foreground-400 font-normal">(Optional)</span>
              </label>
              <input
                id="author_role"
                type="text"
                placeholder="e.g. 3rd Year CSE Student / Associate Software Engineer"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background-100/70 border border-background-300 text-foreground-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all placeholder:text-foreground-400"
              />
            </div>

            {/* Message / Reflection */}
            <div className="space-y-1.5">
              <label htmlFor="author_message" className="block text-xs font-mono font-medium text-foreground-700">
                Your Observation or Question <span className="text-red-500">*</span>
              </label>
              <textarea
                id="author_message"
                required
                rows={4}
                placeholder="What resonated with you? What classroom observation or disagreement would you like to share?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background-100/70 border border-background-300 text-foreground-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all placeholder:text-foreground-400 resize-none leading-relaxed"
              />
            </div>

            {/* Privacy Disclosure & Anti-Spam Notice */}
            <div className="p-3 rounded-xl bg-background-100/90 border border-background-200 flex items-start gap-2.5 text-[11px] text-foreground-600 leading-relaxed font-light">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-medium text-foreground-900">Privacy Guarantee:</strong> Your reflection is sent directly and privately to Vikas. It is never displayed publicly on the website, and your email is never shared, marketed to, or spammed.
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-foreground-600 text-xs font-medium hover:bg-background-200/60 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium text-xs hover:bg-primary-500 disabled:opacity-50 transition-all shadow-xs cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send to Vikas</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  MessageSquarePlus,
  Star,
  Quote,
  CheckCircle2,
  AlertCircle,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { TestimonialRecord } from "@/lib/supabase";
import {
  submitTestimonial,
  fetchApprovedTestimonials,
} from "@/app/actions/testimonials";

interface ServiceTestimonialsProps {
  serviceSlug: string;
  serviceTitle: string;
  badge?: string;
  badgeTone?: "emerald" | "primary" | "amber" | "purple";
}

export default function ServiceTestimonials({
  serviceSlug,
  serviceTitle,
  badge = "Verified Feedback",
  badgeTone = "primary",
}: ServiceTestimonialsProps) {
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [highlight, setHighlight] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    let isMounted = true;
    async function loadTestimonials() {
      setLoading(true);
      const res = await fetchApprovedTestimonials(serviceSlug);
      if (isMounted) {
        if (!res.error) {
          setTestimonials(res.testimonials);
        }
        setLoading(false);
      }
    }
    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, [serviceSlug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFeedbackStatus({ type: null, message: "" });

    const res = await submitTestimonial({
      service_slug: serviceSlug,
      author_name: name,
      author_role: role,
      rating,
      highlight,
      content,
    });

    setSubmitting(false);

    if (res.success) {
      setFeedbackStatus({
        type: "success",
        message: res.message || "Thank you for sharing your feedback!",
      });
      setName("");
      setRole("");
      setHighlight("");
      setContent("");
      setRating(5);
    } else {
      setFeedbackStatus({
        type: "error",
        message: res.error || "Failed to submit. Please try again.",
      });
    }
  }

  const badgeColorClass =
    badgeTone === "emerald"
      ? "bg-emerald-100 text-emerald-800 border-emerald-200"
      : badgeTone === "amber"
      ? "bg-amber-100 text-amber-900 border-amber-200"
      : "bg-primary-50 text-primary-700 border-primary-200/60";

  return (
    <section className="w-full space-y-8 pt-4">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-background-200">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${badgeColorClass}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 tracking-tight mt-2.5">
              Learner &amp; Client Experiences
            </h2>
            <p className="mt-2 text-sm text-foreground-600 leading-relaxed max-w-2xl font-light">
              Reflections and feedback from participants. Shared authentically after review.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setModalOpen(true);
              setFeedbackStatus({ type: null, message: "" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-300 bg-primary-50/70 hover:bg-primary-100 text-primary-800 text-xs font-semibold whitespace-nowrap transition-all shadow-xs cursor-pointer self-start sm:self-auto"
            id={`open-testimonial-modal-${serviceSlug}`}
          >
            <MessageSquarePlus className="w-4 h-4 text-primary-600" />
            <span>Share Your Experience</span>
          </button>
        </div>
      </Reveal>

      {/* Testimonials List or Graceful Empty State */}
      {loading ? (
        <div className="py-12 text-center text-xs font-mono text-foreground-400">
          Loading verified reflections...
        </div>
      ) : testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id || idx} delay={idx * 60}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-background-200 bg-background-50/80 shadow-xs space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: t.rating || 5 }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-500"
                        />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-foreground-300" />
                  </div>

                  {t.highlight && (
                    <h4 className="font-heading font-semibold text-base text-foreground-950">
                      &ldquo;{t.highlight}&rdquo;
                    </h4>
                  )}

                  <p className="text-xs sm:text-sm text-foreground-700 leading-relaxed font-light whitespace-pre-line">
                    {t.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-background-200/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-heading font-semibold text-xs shrink-0">
                    {t.author_name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading font-semibold text-xs sm:text-sm text-foreground-950 truncate">
                      {t.author_name}
                    </div>
                    {t.author_role && (
                      <div className="text-[11px] font-mono text-foreground-500 truncate">
                        {t.author_role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="p-8 rounded-2xl border border-dashed border-background-200 bg-background-50/60 text-center space-y-3">
          <p className="text-sm text-foreground-600 font-light">
            Have you completed or participated in{" "}
            <span className="font-semibold text-foreground-900">{serviceTitle}</span>?
          </p>
          <p className="text-xs text-foreground-500 max-w-md mx-auto">
            Your honest feedback helps future students and peers make informed decisions.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                setModalOpen(true);
                setFeedbackStatus({ type: null, message: "" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white text-xs font-semibold hover:bg-primary-600 transition-all shadow-xs cursor-pointer"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Leave the First Review</span>
            </button>
          </div>
        </div>
      )}

      {/* Submission Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-background-50 p-6 md:p-8 shadow-2xl border border-background-200 space-y-5 animate-scale-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-background-200">
              <div className="space-y-0.5">
                <h3
                  id="testimonial-modal-title"
                  className="font-heading font-semibold text-lg text-foreground-950"
                >
                  Share Your Experience
                </h3>
                <p className="text-xs text-foreground-500 font-mono">
                  Feedback for: {serviceTitle}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-foreground-400 hover:text-foreground-950 hover:bg-background-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedbackStatus.type === "success" ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-semibold text-lg text-emerald-950">
                  Feedback Received!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  {feedbackStatus.message}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {feedbackStatus.type === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{feedbackStatus.message}</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-foreground-800 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-background-300 bg-background-100/50 text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-foreground-800 uppercase tracking-wider">
                    Role / College / Background
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4th Year CSE · Osmania University"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-background-300 bg-background-100/50 text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-foreground-800 uppercase tracking-wider">
                    Overall Experience Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-foreground-400 hover:text-amber-400 transition-colors cursor-pointer"
                        title={`${star} Star${star > 1 ? "s" : ""}`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? "fill-amber-400 text-amber-500"
                              : "text-foreground-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-foreground-500 ml-2">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-foreground-800 uppercase tracking-wider">
                    Key Highlight / Headline (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. The 1-on-1 viva completely transformed how I think about SQL"
                    value={highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-background-300 bg-background-100/50 text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-foreground-800 uppercase tracking-wider">
                    Your Experience &amp; Reflection *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What did you learn? How did this session or cohort help clarify your doubts or improve your technical confidence?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-background-300 bg-background-100/50 text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 leading-relaxed resize-y"
                  />
                </div>

                <p className="text-[11px] text-foreground-500 leading-relaxed">
                  * Note: Submissions are checked for spam before appearing publicly.
                </p>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-background-300 text-foreground-700 text-xs font-medium hover:bg-background-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-500 text-white text-xs font-semibold hover:bg-primary-600 disabled:opacity-50 transition-all shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? "Submitting..." : "Submit"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

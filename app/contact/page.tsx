"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, Send, MapPin, Sparkles, MessageSquare } from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "a Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:vikas.bandaaru@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Direct Inquiry"
        badgeDotColor="bg-primary-400"
        title="Get in Touch"
        titleHighlight="— Start a Conversation"
        description="Have a question about education reform, LogicSims, speaking, or consulting? Reach out directly or subscribe to essay updates."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "Direct", label: "Email Delivery" },
          { value: "24-48h", label: "Typical Response" },
          { value: "Hyderabad", label: "Based in India" },
        ]}
      />

      {/* Main Content Area */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Contact Form Container */}
          <Reveal delay={80}>
            <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 font-mono text-[11px] uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Direct Message
                </div>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground-950 pt-2">
                  Send a Direct Message
                </h2>
                <p className="text-xs sm:text-sm font-mono text-foreground-500">
                  Pre-fills an email directly to{" "}
                  <span className="font-semibold text-primary-700">vikas.bandaaru@gmail.com</span>
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-emerald-900 text-sm flex items-start gap-3 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-heading font-semibold text-emerald-950">Email client opened!</p>
                    <p className="text-xs text-emerald-800 leading-relaxed font-light">
                      Your message draft has been opened in your email app. If it didn&apos;t open automatically, feel free to email{" "}
                      <a href="mailto:vikas.bandaaru@gmail.com" className="underline font-medium">
                        vikas.bandaaru@gmail.com
                      </a>{" "}
                      directly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-foreground-700 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Priyan Sharma"
                      className="w-full px-4 py-3 text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-foreground-700 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="priyan@example.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-foreground-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Tell me about your project, workshop request, or feedback..."
                      className="w-full px-4 py-3 text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="w-full py-3.5 px-6 rounded-full bg-primary-500 text-white font-medium text-xs hover:bg-primary-600 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Newsletter Signup & Direct Info */}
          <div className="space-y-8">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-background-200 bg-background-50/80 p-7 sm:p-9 md:p-10 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5 text-foreground-950 font-heading font-semibold text-xl">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Subscribe to Essays</span>
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  Get notified when I publish new essays on Indian technical education reform, state machines, and learning architecture. No spam.
                </p>

                {newsletterSubmitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-emerald-900 text-xs font-medium font-mono">
                    ✓ Subscribed! Thank you for following the work.
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                    <input
                      type="email"
                      id="newsletter-email"
                      required
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    />
                    <button
                      type="submit"
                      id="newsletter-submit"
                      className="w-full py-3 px-5 rounded-full bg-foreground-950 text-white font-medium text-xs hover:bg-foreground-800 transition-all shadow-xs font-mono cursor-pointer"
                    >
                      Join Mailing List
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-3xl border border-background-200 bg-background-100/60 p-7 sm:p-9 space-y-4 text-xs sm:text-sm text-foreground-600">
                <h3 className="font-heading font-semibold text-lg text-foreground-950">
                  Direct Contact Details
                </h3>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:vikas.bandaaru@gmail.com"
                      className="text-primary-700 underline font-mono font-medium hover:text-primary-900"
                    >
                      vikas.bandaaru@gmail.com
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-foreground-400 shrink-0 mt-0.5" />
                  <span>Location: Hyderabad, India (Available for Remote &amp; On-Site Engagement)</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

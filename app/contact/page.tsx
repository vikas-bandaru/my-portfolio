"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, Send, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
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
    <div className="space-y-16 max-w-3xl mx-auto pt-28 md:pt-36 pb-20 px-6">
      <Reveal>
        <PageHeader
          eyebrow="Direct Inquiry"
          eyebrowIcon={<Mail className="w-3.5 h-3.5 text-primary-600" />}
          title="Get in Touch"
          description="Have a question about education reform, LogicSims, speaking, or consulting? Reach out directly or subscribe to essay updates."
        />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Contact Form */}
        <Reveal delay={100}>
          <div className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-5 hover:border-primary-300 transition-all h-full">
            <div>
              <h2 className="font-serif text-2xl font-normal text-foreground-950">
                Send a Direct Message
              </h2>
              <p className="text-xs font-mono text-foreground-500 mt-1">
                Opens an email draft directly to <span className="font-semibold text-primary-700">vikas.bandaaru@gmail.com</span>
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-emerald-900 text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">Email client opened!</p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Your message draft has been opened in your email app. If it didn&apos;t open automatically, feel free to email <a href="mailto:vikas.bandaaru@gmail.com" className="underline font-medium">vikas.bandaaru@gmail.com</a> directly.
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
                    className="w-full px-4 py-2.5 text-sm bg-background-50/50 border border-foreground-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400"
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
                    className="w-full px-4 py-2.5 text-sm bg-background-50/50 border border-foreground-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400"
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
                    className="w-full px-4 py-2.5 text-sm bg-background-50/50 border border-foreground-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-3 px-6 rounded-full bg-primary-500 text-white font-medium text-sm hover:bg-primary-600 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message via Email
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Newsletter Signup & Direct Info */}
        <div className="space-y-6">
          <Reveal delay={150}>
            <div className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-white/90 shadow-xs space-y-4 hover:border-primary-300 transition-all">
              <div className="flex items-center gap-2 text-foreground-950 font-serif text-xl font-normal">
                <Mail className="w-5 h-5 text-primary-600" />
                Subscribe to Essays
              </div>
              <p className="text-xs sm:text-sm text-foreground-600 leading-relaxed">
                Get notified when I publish new essays on Indian technical education reform and learning architecture. No spam.
              </p>

              {newsletterSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-emerald-900 text-xs font-medium font-mono">
                  ✓ Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    id="newsletter-email"
                    required
                    placeholder="you@domain.com"
                    className="w-full px-4 py-2.5 text-xs bg-background-50/50 border border-foreground-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit"
                    className="w-full py-2.5 px-5 rounded-full bg-foreground-950 text-white font-medium text-xs hover:bg-foreground-800 transition-all shadow-xs font-mono"
                  >
                    Join Mailing List
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="p-6 sm:p-8 rounded-3xl border border-foreground-100 bg-background-50/70 space-y-3 text-xs text-foreground-600">
              <h3 className="font-serif text-lg font-normal text-foreground-950">
                Direct Contact Details
              </h3>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                <span>
                  Email:{" "}
                  <a href="mailto:vikas.bandaaru@gmail.com" className="text-primary-700 underline font-mono font-medium hover:text-primary-900">
                    vikas.bandaaru@gmail.com
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-foreground-400 shrink-0 mt-0.5" />
                <span>Location: Hyderabad, India (Available for Remote & On-Site Engagement)</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

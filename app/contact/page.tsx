"use client";

import { useState } from "react";
import { Mail, CheckCircle, Send, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "a Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:vikas.bandaaru@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Get in Touch
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Have a question about education reform, LogicSims, speaking, or consulting? Reach out directly or subscribe to essay updates.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Contact Form */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              Send a Direct Message
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Sends an email directly to <span className="font-medium text-stone-700">vikas.bandaaru@gmail.com</span>
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-sm flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Email client opened!</p>
                <p className="text-xs text-emerald-700">
                  Your message draft has been opened in your email app. If it didn't open automatically, feel free to email <a href="mailto:vikas.bandaaru@gmail.com" className="underline font-medium">vikas.bandaaru@gmail.com</a> directly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-stone-700 mb-1"
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
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-stone-700 mb-1"
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
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-stone-700 mb-1"
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
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                ></textarea>
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full py-2.5 px-4 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message via Email
              </button>
            </form>
          )}
        </div>

        {/* Newsletter Signup & Direct Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
              <Mail className="w-5 h-5 text-sky-700" />
              Subscribe to Essays
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Get notified when I publish new essays on Indian technical education reform and learning architecture. No spam.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs font-medium">
                ✓ Subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  id="newsletter-email"
                  required
                  placeholder="you@domain.com"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
                <button
                  type="submit"
                  id="newsletter-submit"
                  className="w-full py-2 px-4 rounded-lg bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors"
                >
                  Join Mailing List
                </button>
              </form>
            )}
          </div>

          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3 text-xs text-stone-600">
            <h3 className="font-bold text-stone-900 text-sm">
              Direct Contact Details
            </h3>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-700 shrink-0" />
              <span>Email: <a href="mailto:vikas.bandaaru@gmail.com" className="text-sky-700 underline font-medium">vikas.bandaaru@gmail.com</a></span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <span>Location: Hyderabad, India (Available for Remote & On-Site Engagement)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

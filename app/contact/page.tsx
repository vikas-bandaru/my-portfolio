"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  CheckCircle,
  Send,
  MapPin,
  Sparkles,
  MessageSquare,
  MessageCircle,
  QrCode,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import EditorialSubpageHero from "@/components/EditorialSubpageHero";
import Reveal from "@/components/Reveal";

// WhatsApp Configuration
const WHATSAPP_PHONE = "918096990227";
const WHATSAPP_GENERAL_MESSAGE =
  "Hello Vikas, I visited your portfolio website and would like to connect with you regarding [Mentorship / Faculty Training / LogicSims / Advisory].";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_GENERAL_MESSAGE
)}`;

const WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(
  WHATSAPP_LINK
)}`;

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

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

  return (
    <div className="w-full">
      {/* Editorial Subpage Hero */}
      <EditorialSubpageHero
        badge="Direct Inquiry"
        badgeDotColor="bg-primary-400"
        title="Get in Touch:"
        titleHighlight="Start a Conversation"
        description="Have a question about education reform, LogicSims, speaking, or consulting? Reach out directly via WhatsApp or email."
        bgImage="/images/editorial/hero-network.webp"
        stats={[
          { value: "Direct", label: "WhatsApp & Email" },
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
                  Submitting will draft an email to <span className="text-primary-700 font-semibold">vikas.bandaaru@gmail.com</span>
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-emerald-950">
                    Email Client Triggered
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-light">
                    If your email client didn&apos;t open automatically, you can write directly to{" "}
                    <strong className="font-mono text-emerald-950">vikas.bandaaru@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-mono underline text-emerald-800 hover:text-emerald-950"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-foreground-700 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-foreground-700 font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@institution-or-company.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-background-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-foreground-950 placeholder:text-foreground-400 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-foreground-700 font-medium">
                      Message / Intent
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

          {/* Right Column: WhatsApp Quick Connect & Direct Channels */}
          <div className="space-y-8">
            {/* WhatsApp Quick Connect Card */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-emerald-200/80 bg-background-50/90 p-7 sm:p-9 md:p-10 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5 text-foreground-950 font-heading font-semibold text-xl">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>Instant Reachout via WhatsApp</span>
                </div>

                <p className="text-sm text-foreground-600 leading-relaxed font-light">
                  For faster responses regarding mentorship, faculty workshops, advisory, or general questions, feel free to reach out directly on WhatsApp.
                </p>

                <div className="space-y-3 pt-1">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-all shadow-xs"
                    id="contact-whatsapp-btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 8096990227)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowQrModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-background-300 bg-background-50 hover:bg-background-100 text-foreground-800 text-xs font-medium transition-all shadow-xs cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                    <span>On Desktop? Scan QR with Mobile</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 font-mono">
                  Pre-filled prompt: &ldquo;Hello Vikas, I visited your portfolio website and would like to connect...&rdquo;
                </div>
              </div>
            </Reveal>

            {/* Direct Details Card */}
            <Reveal delay={160}>
              <div className="rounded-3xl border border-background-200 bg-background-100/60 p-7 sm:p-9 space-y-4 text-xs sm:text-sm text-foreground-600">
                <h3 className="font-heading font-semibold text-lg text-foreground-950">
                  Direct Contact &amp; Channels
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
                <div className="pt-2 text-xs text-foreground-500 font-mono">
                  Typical response window: 24 to 48 hours.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Desktop QR Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-background-50 border border-background-200 p-6 sm:p-7 shadow-2xl text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-foreground-400 hover:text-foreground-700 hover:bg-background-200 transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block">
                WhatsApp Quick Connect
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground-950 pt-1">
                Scan with your Phone
              </h3>
              <p className="text-xs text-foreground-600 leading-relaxed font-light">
                Point your phone camera to chat directly on WhatsApp with the pre-filled inquiry.
              </p>
            </div>

            {/* QR Image Container */}
            <div className="p-4 rounded-2xl bg-white border border-background-200 inline-block mx-auto shadow-inner">
              <img
                src={WHATSAPP_QR_URL}
                alt="Scan to Chat on WhatsApp"
                width={200}
                height={200}
                className="w-48 h-48 rounded-lg"
              />
            </div>

            <div className="space-y-2 pt-1">
              <p className="font-mono text-xs text-foreground-700 font-semibold">
                +91 8096990227
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:underline font-medium"
              >
                <span>Or open WhatsApp Web directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

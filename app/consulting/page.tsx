import Link from "next/link";
import { ArrowRight, Award, ExternalLink, Code2, Cpu, Database, Cloud, Zap } from "lucide-react";

export const metadata = {
  title: "Dev & Salesforce Consulting — Vikas Bandaru",
  description:
    "Salesforce Certified Platform Developer consulting, plus hands-on web application development client engagements.",
};

export default function ConsultingPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Dev & Salesforce Consulting
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Combining enterprise platform architecture with modern full-stack web engineering for select client engagements.
        </p>
      </header>

      {/* Salesforce Expertise */}
      <section className="space-y-4 p-6 rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-sky-700" />
          <h2 className="text-xl font-bold text-stone-900">
            Salesforce Platform Architecture
          </h2>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          Salesforce Certified App Builder and Platform Developer I with 1.5 years of experience delivering certification training and enterprise platform customization.
        </p>
        <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-5">
          <li>Custom Apex, Lightning Web Components (LWC), and automated flow architecture</li>
          <li>Data modeling, security architecture, and external system integrations</li>
          <li>Corporate team upskilling and certification preparation</li>
        </ul>
      </section>

      {/* Web Development Venture & Case Study */}
      <section className="space-y-6 p-6 rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-emerald-700" />
          <h2 className="text-xl font-bold text-stone-900">
            Web Development Venture & Case Study
          </h2>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          As part of a small web development venture taking on client engagements, I engineer fast, reliable web applications using modern agentic AI workflows and serverless backends.
        </p>

        {/* Featured Build: traits.co.in */}
        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold mb-1">
                <Zap className="w-3 h-3" /> Agentic AI Vibe Coding Showcase
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                Traits E-Commerce (<span className="text-sky-700 font-mono text-xs">traits.co.in</span>)
              </h3>
            </div>
            <a
              href="https://traits.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
            >
              Visit traits.co.in <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed">
            Architected and delivered a full-featured e-commerce platform using <strong>Agentic AI Vibe Coding</strong> for rapid development, paired with a robust <strong>Supabase</strong> relational backend and serverless edge functions.
          </p>

          {/* Detailed Tech Stack breakdown */}
          <div className="grid gap-3 sm:grid-cols-2 pt-1 text-xs">
            <div className="p-3 rounded-lg bg-white border border-stone-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
                <Cpu className="w-3.5 h-3.5 text-sky-700" /> Frontend & SPA Framework
              </div>
              <p className="text-stone-600 text-[11px] leading-normal">
                React 19 + TypeScript, Vite (SWC), React Router DOM v7 SPA. Styled with TailwindCSS v3, Remixicon & Lucide. Multi-language support via <code className="bg-stone-100 px-1 py-0.5 rounded">i18next</code> with browser detection.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-stone-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
                <Database className="w-3.5 h-3.5 text-emerald-700" /> Backend & Database
              </div>
              <p className="text-stone-600 text-[11px] leading-normal">
                Supabase Cloud PostgreSQL (<code className="bg-stone-100 px-1 py-0.5 rounded">product_items</code>, <code className="bg-stone-100 px-1 py-0.5 rounded">orders</code>, <code className="bg-stone-100 px-1 py-0.5 rounded">profiles</code>) with Row Level Security (RLS) & Supabase Auth (Email OTP + OAuth).
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-stone-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
                <Zap className="w-3.5 h-3.5 text-amber-600" /> Edge Functions & Payments
              </div>
              <p className="text-stone-600 text-[11px] leading-normal">
                Supabase Edge Functions (TypeScript/Deno) for admin creation/verification routines, Razorpay order & signature verification, and Resend transactional email dispatches.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-stone-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
                <Cloud className="w-3.5 h-3.5 text-purple-700" /> Hosting & Media CDN
              </div>
              <p className="text-stone-600 text-[11px] leading-normal">
                Hosted on Vercel (SPA rewrite rules) & Supabase Edge Network. Product media served via Supabase Storage (<code className="bg-stone-100 px-1 py-0.5 rounded">product-images</code> public CDN bucket) & static assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-4 border-t border-stone-200">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-700 text-white font-medium text-sm hover:bg-sky-800 transition-colors"
          id="consulting-cta-contact"
        >
          Discuss a Client Engagement
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

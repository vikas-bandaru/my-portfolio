import Link from "next/link";
import { ArrowRight, Award, ExternalLink, Code2 } from "lucide-react";

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
      <section className="space-y-4 p-6 rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-emerald-700" />
          <h2 className="text-xl font-bold text-stone-900">
            Web Development Venture & Case Study
          </h2>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          As part of a small web development venture taking on client engagements, I engineer fast, reliable web applications.
        </p>

        <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-stone-900 text-sm">
              Featured Build: traits.co.in
            </h3>
            <a
              href="https://traits.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-700 hover:underline inline-flex items-center gap-1"
            >
              Visit Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Engineered an e-commerce platform built with <strong>readdy.ai</strong> integrated with <strong>Supabase</strong> database architecture and serverless Edge Functions for custom backend transactions.
          </p>
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

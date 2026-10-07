import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Briefcase, HeartHandshake, ArrowRight } from "lucide-react";

export const engagementCards = [
  {
    id: "work",
    icon: Briefcase,
    title: "Work With Me (Paid Engagements)",
    description:
      "Legitimate professional services: technical mentorship, faculty development workshops, full-stack web application engineering, and keynotes.",
    cta: "Explore Professional Tracks",
    href: "/work",
    tone: "primary",
  },
  {
    id: "collaborate",
    icon: HeartHandshake,
    title: "Collaborate (Mission Participation)",
    description:
      "Non-transactional avenues: contribute domain variables to LogicSims, run experimental active learning pilots in your institution, or explore research questions.",
    cta: "Join the Mission",
    href: "#collaborate",
    tone: "accent",
  },
];

export default function EngagementSection() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {engagementCards.map((card, index) => {
            const Icon = card.icon;
            const isPrimary = card.tone === "primary";
            return (
              <Reveal key={card.id} delay={index * 100}>
                <div className="h-full flex flex-col rounded-2xl border border-background-200 bg-background-50 p-7 md:p-9 shadow-xs">
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isPrimary
                        ? "bg-primary-100 text-primary-800"
                        : "bg-accent-100 text-accent-800"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-600 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={card.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap transition-colors ${
                        isPrimary
                          ? "bg-primary-500 text-background-50 hover:bg-primary-600 shadow-xs"
                          : "border border-accent-600 text-accent-800 hover:bg-accent-50"
                      }`}
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

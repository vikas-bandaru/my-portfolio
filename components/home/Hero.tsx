"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";

export const heroStats = [
  { value: "10+", label: "Years teaching engineering education" },
  { value: "02", label: "Public YouTube channels" },
  { value: "01", label: "Live learning prototype" },
];

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/editorial/hero-network.webp"
          alt="Abstract network of interconnected nodes representing learning systems"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/90 via-foreground-950/75 to-foreground-950/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-background-50/20 bg-background-50/10 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.16em] text-background-100 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse-dot"></span>
            Independent Learning Architect &amp; Builder
          </div>

          <h1 className="mt-7 font-heading font-semibold text-background-50 tracking-tight text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05]">
            Degrees test memory.
            <br />
            <span className="text-primary-300">Building solves real problems.</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-background-100/85 leading-relaxed max-w-2xl">
            Exploring how people develop the capability to solve complex real-world problems
            through technology — while grounding learning in consequences, public impact, and
            human agency.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="https://logic-sims-java.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-primary-600 shadow-sm"
              id="hero-cta-logicsims"
            >
              Explore the LogicSims Prototype
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/logicsims"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-background-50/30 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-background-50/10"
              id="hero-cta-vision"
            >
              Explore the LogicSims Vision
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-background-50/15 pt-8">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="font-heading text-3xl md:text-4xl font-semibold text-primary-300">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-background-100/75 leading-snug max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-background-100/70 hover:text-background-50 transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}

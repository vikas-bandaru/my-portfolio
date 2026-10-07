"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

export const navLinks = [
  { label: "Ideas", href: "/ideas" },
  { label: "Builds", href: "/builds" },
  { label: "LogicSims", href: "/logicsims" },
  { label: "Watch", href: "/watch" },
  { label: "Work With Me", href: "/work" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home pages, always render solid/scrolled style for clear contrast
  const isSolid = !isHome || scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-background-50/90 backdrop-blur-md border-b border-background-200 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-content mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="w-9 h-9 rounded-lg bg-primary-500 text-background-50 flex items-center justify-center font-heading font-bold text-lg transition-transform duration-300 group-hover:-rotate-6 shadow-xs">
            V
          </span>
          <span
            className={`flex flex-col leading-none transition-colors duration-500 ${
              isSolid ? "text-foreground-950" : "text-background-50"
            }`}
          >
            <span className="font-heading font-semibold text-base tracking-tight">
              Vikas Bandaru
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.18em] mt-1 transition-colors duration-500 ${
                isSolid ? "text-foreground-500" : "text-background-200"
              }`}
            >
              Learning Architect
            </span>
          </span>
        </Link>

        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-primary-600 font-semibold"
                        : isSolid
                        ? "text-foreground-600 hover:text-primary-700"
                        : "text-background-100 hover:text-background-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-primary-600 shadow-xs"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`lg:hidden w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300 ${
              isSolid
                ? "text-foreground-900 bg-background-100"
                : "text-background-50 bg-background-50/10"
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-background-50 border-b border-background-200 ${
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="px-6 pb-6 pt-2">
          <ul className="flex flex-col divide-y divide-background-200 border-t border-background-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-foreground-800 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 text-foreground-400" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary-500 text-background-50 text-sm font-semibold"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

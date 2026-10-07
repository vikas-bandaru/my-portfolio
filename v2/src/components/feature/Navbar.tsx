import { useEffect, useState } from "react";
import { navLinks } from "@/mocks/home";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-background-50/90 backdrop-blur-md border-b border-background-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="w-9 h-9 rounded-lg bg-primary-500 text-background-50 flex items-center justify-center font-heading font-bold text-lg transition-transform duration-300 group-hover:-rotate-6">
            V
          </span>
          <span
            className={`flex flex-col leading-none transition-colors duration-500 ${
              scrolled || menuOpen ? "text-foreground-950" : "text-background-50"
            }`}
          >
            <span className="font-heading font-semibold text-base tracking-tight">
              Vikas Bandaru
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.18em] mt-1 transition-colors duration-500 ${
                scrolled || menuOpen ? "text-foreground-500" : "text-background-200"
              }`}
            >
              Learning Architect
            </span>
          </span>
        </a>

        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    scrolled
                      ? "text-foreground-600 hover:text-primary-700"
                      : "text-background-100 hover:text-background-50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#collaborate"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-500 text-background-50 text-sm font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-primary-600"
          >
            Start a Conversation
            <i className="ri-arrow-right-line text-base" aria-hidden="true"></i>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`lg:hidden w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300 ${
              scrolled || menuOpen
                ? "text-foreground-900 bg-background-100"
                : "text-background-50 bg-background-50/10"
            }`}
          >
            <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="px-6 pb-6 pt-2">
          <ul className="flex flex-col divide-y divide-background-200 border-t border-background-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-foreground-800 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                  <i className="ri-arrow-right-up-line text-foreground-400" aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#collaborate"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary-500 text-background-50 text-sm font-semibold"
          >
            Start a Conversation
            <i className="ri-arrow-right-line text-base" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const footerSocials = [
  { label: "YouTube (Official)", href: "https://www.youtube.com/@VikasBandaruOfficial" },
  { label: "YouTube (Tech)", href: "https://www.youtube.com/@VikasBandaruTech" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vikas-bandaru/" },
  { label: "Instagram", href: "https://www.instagram.com/thoughts.in.beta" },
];

export const exploreLinks = [
  { label: "Ideas & Systems Analysis", href: "/ideas" },
  { label: "Builds & Portfolio", href: "/builds" },
  { label: "LogicSims Architecture", href: "/logicsims" },
  { label: "Watch & Media", href: "/watch" },
  { label: "Work With Me", href: "/work" },
  { label: "Collaborate on Mission", href: "/collaborate" },
  { label: "About Vikas", href: "/about" },
  { label: "Contact & Inquiries", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background-100 border-t border-background-200">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-14 pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="w-9 h-9 rounded-lg bg-primary-500 text-background-50 flex items-center justify-center font-heading font-bold text-lg transition-transform duration-300 group-hover:-rotate-6">
                V
              </span>
              <span className="font-heading font-semibold text-lg text-foreground-950">
                Vikas Bandaru
              </span>
            </Link>
            <p className="text-sm text-foreground-600 leading-relaxed max-w-sm">
              Engineering educator and independent builder exploring how people develop the
              capability to solve complex real-world problems through technology.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-100 text-accent-900 border border-accent-200 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-accent-700" />
              Learning in public · Building for consequence
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500 mb-4">
              Explore Body of Work
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-700 hover:text-primary-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500 mb-4">
              Channels & Connect
            </h3>
            <ul className="space-y-2.5">
              {footerSocials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-700 hover:text-primary-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    {social.label}
                    <ArrowUpRight className="w-3 h-3 text-foreground-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-500">
            © {new Date().getFullYear()} Vikas Bandaru. All rights reserved.
          </p>
          <p className="text-xs text-foreground-500 font-mono">
            degrees test memory / building solves problems
          </p>
        </div>
      </div>
    </footer>
  );
}

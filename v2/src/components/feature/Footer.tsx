import { navLinks, footerSocials } from "@/mocks/home";

export default function Footer() {
  return (
    <footer className="w-full bg-background-100 border-t border-background-200">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-14 pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-primary-500 text-background-50 flex items-center justify-center font-heading font-bold text-lg">
                V
              </span>
              <span className="font-heading font-semibold text-lg text-foreground-950">
                Vikas Bandaru
              </span>
            </a>
            <p className="text-sm text-foreground-600 leading-relaxed max-w-sm">
              Engineering educator and independent builder exploring how people develop the
              capability to solve complex real-world problems through technology.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-100 text-accent-900 border border-accent-200 text-xs font-medium">
              <i className="ri-leaf-line text-sm" aria-hidden="true"></i>
              Learning in public · Building for consequence
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-700 hover:text-primary-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-500 mb-4">
              Elsewhere
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
                    <i className="ri-arrow-right-up-line text-xs text-foreground-400" aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-500">© 2026 Vikas Bandaru. All rights reserved.</p>
          <p className="text-xs text-foreground-500 font-mono">
            degrees test memory / building solves problems
          </p>
        </div>
      </div>
    </footer>
  );
}
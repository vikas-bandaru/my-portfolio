import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikas Bandaru — Educator, Builder, Learning Architect",
  description:
    "11 years in engineering education. Building LogicSims, training educators, and teaching developers to learn by doing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen flex flex-col justify-between max-w-4xl mx-auto px-6 py-8 md:py-12 bg-[#fcfcf9] text-stone-900 selection:bg-sky-100 selection:text-sky-900">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stone-200">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            id="brand-logo"
          >
            Vikas Bandaru
          </Link>

          <nav id="main-nav" aria-label="Main Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-stone-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/speaking"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-speaking"
                >
                  Speaking
                </Link>
              </li>
              <li>
                <Link
                  href="/teaching"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-teaching"
                >
                  Teaching
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-consulting"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main-content" className="flex-1 py-10">
          {children}
        </main>

        <footer className="pt-10 pb-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Vikas Bandaru. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              id="footer-youtube"
            >
              YouTube
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              id="footer-x"
            >
              X (Twitter)
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

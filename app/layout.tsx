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
  title: "Vikas Bandaru — Learning, Technology & Real-World Problem Solving",
  description:
    "Engineering educator, independent builder, and systems thinker exploring how people develop the capability to solve complex real-world problems through technology.",
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
                  href="/ideas"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-ideas"
                >
                  Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/builds"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-builds"
                >
                  Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/watch"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-watch"
                >
                  Watch
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-work"
                >
                  Work With Me
                </Link>
              </li>
              <li>
                <Link
                  href="/collaborate"
                  className="hover:text-stone-900 transition-colors"
                  id="nav-collaborate"
                >
                  Collaborate
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
            </ul>
          </nav>
        </header>

        <main id="main-content" className="flex-1 py-10">
          {children}
        </main>

        <footer className="pt-10 pb-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Vikas Bandaru. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://www.youtube.com/@VikasBandaruOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-stone-800"
              id="footer-youtube-official"
            >
              YouTube (Official)
            </a>
            <a
              href="https://www.youtube.com/@VikasBandaruTech1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-stone-800"
              id="footer-youtube-tech"
            >
              YouTube (Tech)
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-bandaru/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-stone-800"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/thoughts.in.beta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-stone-800"
              id="footer-instagram"
            >
              Instagram
            </a>
            <Link
              href="/contact"
              className="hover:underline hover:text-stone-800"
              id="footer-contact"
            >
              Contact
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

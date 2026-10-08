"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function StudioNotFoundPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.replace("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050914] px-6 text-foreground-100">
      <div className="w-full max-w-md text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-primary-400">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary-400/80">
            404 — Page Not Found
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Nothing to see here
          </h1>
          <p className="text-sm text-foreground-400 font-light leading-relaxed">
            The page you requested does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2 pb-1">
          <p className="text-xs font-mono text-foreground-500">
            Redirecting to home in <span className="text-primary-400 font-semibold">{countdown}s</span>...
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

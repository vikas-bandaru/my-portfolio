"use client";

import { useState } from "react";
import { loginAction } from "./actions";
import { Lock, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export default function StudioLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070d18] px-6 py-20">
      <div className="w-full max-w-md space-y-8 p-8 sm:p-10 rounded-3xl bg-background-50/5 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="text-center space-y-3">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Content Curation Studio
          </h1>
          <p className="text-xs sm:text-sm text-foreground-300 font-light">
            Private administrative control room for Vikas Bandaru
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="secret"
              className="block font-mono text-xs uppercase tracking-wider text-foreground-300 font-semibold"
            >
              Administrative Secret Key
            </label>
            <div className="relative">
              <input
                id="secret"
                name="secret"
                type="password"
                required
                autoFocus
                placeholder="Enter CMS admin secret"
                className="w-full px-4 py-3 pl-11 rounded-xl bg-white/5 border border-white/15 text-white placeholder-foreground-500 text-sm focus:outline-none focus:border-primary-400 transition-colors"
              />
              <KeyRound className="w-4 h-4 text-foreground-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-400 disabled:opacity-50 text-white font-medium text-xs shadow-md transition-all font-mono tracking-wider uppercase cursor-pointer"
          >
            <span>{loading ? "Authenticating..." : "Unlock Studio"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-foreground-400">
          <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
          <span>Encrypted Session • Zero Public Exposure</span>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Video, Users, GraduationCap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Teaching & Training Programs — Vikas Bandaru",
  description:
    "YouTube channel for Indian developers, plus Train the Student and Train the Trainer capability programs.",
};

export default function TeachingPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Teaching & Training
        </h1>
        <p className="text-stone-600 leading-relaxed font-medium">
          Practical developer education through YouTube, plus structured online training tracks for students and technical educators.
        </p>
      </header>

      {/* YouTube Section */}
      <section className="space-y-4 p-6 rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center gap-3">
          <Video className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-stone-900">
            YouTube Channel for Indian Developers
          </h2>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          I create in-depth, hands-on video breakdowns targeting Indian software developers. Rather than speed-running syntax, every video builds intuition around underlying engine mechanics, event loops, and full-stack architecture.
        </p>
        <div className="pt-2">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-900"
            id="youtube-channel-link"
          >
            Visit YouTube Channel
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Training Consulting Offerings: Two Tracks */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2">
          Online Training Offerings
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Track 1: Train the Student */}
          <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Track 1: Train the Student
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Direct, cohort-based instruction focused on project building, first-principles logic, and real-world debugging confidence.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 pt-2"
              id="track-student-cta"
            >
              Inquire about Student Track
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Track 2: Train the Trainer */}
          <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Track 2: Train the Trainer
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Empowering college faculty, corporate trainers, and learning managers to design discovery-based curricula and active-learning classrooms.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 pt-2"
              id="track-trainer-cta"
            >
              Inquire about Trainer Track
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

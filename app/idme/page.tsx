import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function LinkedSuccessPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--blue)] overflow-hidden">
      <style>{`
        :root {
          --bg: #ffffff;
          --blue: #0f2a44;
          --blueSoft: #3a5f8c;
          --orange: #e07a3f;
          --orangeHover: #c8652e;

          --text: rgba(15, 42, 68, 0.90);
          --muted: rgba(15, 42, 68, 0.66);
          --faint: rgba(15, 42, 68, 0.06);
          --line: rgba(15, 42, 68, 0.14);
          --shadow: 0 18px 45px rgba(15, 42, 68, 0.10);
        }
      `}</style>

      {/* On-brand background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[color:rgba(224,122,63,0.16)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-[color:rgba(15,42,68,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(15,42,68,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative px-4 sm:px-6 pt-20 pb-16">
        <div className="mx-auto max-w-sm sm:max-w-md">
          <div className="rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)] p-8 sm:p-10">
            {/* Icon */}
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[color:rgba(224,122,63,0.14)] ring-1 ring-[color:rgba(224,122,63,0.28)]">
              <CheckCircleIcon className="h-8 w-8 text-[var(--orange)]" />
            </div>

            <h1 className="mt-5 text-center text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)]">
              Identity verified
            </h1>

            <p className="mt-3 text-center text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              Your ID.me account has been successfully linked to{" "}
              <span className="font-semibold text-[var(--blue)]">Job Vera</span>.
              You can now continue securely.
            </p>

            {/* Details box */}
            <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--faint)] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--orange)] animate-pulse" />
                <div className="text-sm text-[var(--muted)]">
                  <div className="font-semibold text-[var(--blue)]">What happens next</div>
                  <ul className="mt-2 space-y-1">
                    <li>• You’ll be redirected back to Job Vera.</li>
                    <li>• Your onboarding can continue normally.</li>
                    <li>• We’ll keep your info protected.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 space-y-3">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--orange)] px-6 py-3 font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.22)]"
              >
                Continue <ArrowRightIcon className="h-5 w-5" />
              </Link>

              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-[var(--line)] bg-white px-6 py-3 font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
              >
                Back to home
              </Link>
            </div>

            {/* Footer links */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[var(--muted)]">
              <Link href="/privacy" className="hover:text-[var(--blue)] transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[var(--blue)] transition">
                Terms
              </Link>
              <Link href="/support" className="hover:text-[var(--blue)] transition">
                Support
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

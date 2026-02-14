import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--blue)] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
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

      {/* Card */}
      <div className="relative w-full max-w-lg rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)] p-7 sm:p-9 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:rgba(224,122,63,0.14)] ring-1 ring-[color:rgba(224,122,63,0.28)]">
          <CheckCircleIcon className="h-12 w-12 text-[var(--orange)]" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)]">
          Application submitted
        </h1>

        {/* Copy */}
        <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Thank you for applying to{" "}
          <span className="text-[var(--blue)] font-semibold">Job Vera</span>.
          <br className="hidden sm:block" />
          Our team will review your application and contact you shortly via{" "}
          <span className="text-[var(--blue)] font-semibold">email</span> or{" "}
          <span className="text-[var(--blue)] font-semibold">phone</span>.
        </p>

        <p className="mt-4 text-xs sm:text-sm text-[var(--muted)]">
          If you have questions, please visit our website and use the chat
          feature to reach us.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-[var(--orange)] text-white font-semibold hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.22)]"
        >
          Back to Home <ArrowRightIcon className="w-5 h-5" />
        </Link>

        {/* Footer note */}
        <p className="mt-7 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Job Vera
        </p>
      </div>
    </main>
  );
}

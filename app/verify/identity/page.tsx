"use client";

import Link from "next/link";
import { ShieldCheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function VerifyIdentityPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--blue)] flex items-center justify-center px-4 overflow-hidden">
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

      {/* Subtle on-brand background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[color:rgba(224,122,63,0.16)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-[color:rgba(15,42,68,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(15,42,68,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative w-full max-w-xl rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)] p-7 sm:p-9 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[color:rgba(224,122,63,0.14)] ring-1 ring-[color:rgba(224,122,63,0.28)]">
          <ShieldCheckIcon className="h-8 w-8 text-[var(--orange)]" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)]">
          Verify your identity
        </h1>

        {/* Description */}
        <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
          To protect your information and comply with regulatory requirements,
          we need to verify your identity.
          <br />
          <br />
          Job Vera uses{" "}
          <span className="font-semibold text-[var(--blue)]">ID.me</span>, a secure
          identity verification platform trusted by government and financial institutions.
        </p>

        {/* Info Box */}
        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--faint)] p-5 text-left text-sm text-[var(--muted)]">
          <ul className="space-y-2">
            <li>• Takes about 5–10 minutes</li>
            <li>• Requires a valid government-issued ID</li>
            <li>• Your data remains encrypted and secure</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/session/new"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[var(--line)] bg-white px-5 py-3 font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
          >
            I already have an ID.me account
          </Link>

          <a
            href="https://api.id.me/en/registration/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--orange)] px-5 py-3 font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.22)]"
          >
            Create ID.me account
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-7 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Job Vera
        </p>
      </div>
    </main>
  );
}

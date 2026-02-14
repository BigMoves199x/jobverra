"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

const headingFont = Fraunces({ subsets: ["latin"], weight: ["400", "600", "700"] });
const bodyFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    q: "What is Jobvera?",
    a: "Jobverra is a next generation freelance and job matching platform built to connect skilled individuals with employers across industries—making hiring smarter, faster, and more human.",
  },
  {
    q: "What opportunities are available?",
    a: "Remote and local opportunities across tech, design, writing, marketing, operations, and more—ranging from gigs to longer-term roles.",
  },
  {
    q: "How does smart matching work?",
    a: "Intelligent filters and role-fit signals (skills, goals, availability, preferences) reduce noise and surface better-fit matches.",
  },
  {
    q: "Is Jobverra secure?",
    a: "Jobverra emphasizes secure practices, transparent expectations, and clear communication to support fair outcomes on both sides.",
  },
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-3xl py-12 sm:py-14 border-t border-[var(--line)]">
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            {eyebrow ? (
              <div className="text-xs tracking-wide text-[var(--muted)]">{eyebrow}</div>
            ) : null}
            <h2 className={cn(headingFont.className, "mt-2 text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>
              {title}
            </h2>
          </div>
        </div>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  const offers = useMemo(
    () => [
      { t: "Smart Matching", d: "Intelligent filters connect freelancers with jobs that match their skills and goals." },
      { t: "Global Access", d: "Remote and local opportunities across tech, design, writing, marketing, and more." },
      { t: "Secure & Transparent", d: "Fair practices, secure payments, and clear communication." },
      { t: "Career Growth", d: "Resources, mentorship, and networking to help freelancers thrive." },
    ],
    []
  );

  return (
    <main className={cn(bodyFont.className, "min-h-screen bg-[var(--bg)] text-[var(--blue)]")}>
      <style>{`
        :root {
          --bg: #ffffff;
          --blue: #0f2a44;
          --blueSoft: #3a5f8c;
          --orange: #e07a3f;
          --orangeHover: #c8652e;

          --text: rgba(15, 42, 68, 0.86);
          --muted: rgba(15, 42, 68, 0.66);
          --faint: rgba(15, 42, 68, 0.08);
          --line: rgba(15, 42, 68, 0.14);
          --shadow: 0 18px 45px rgba(15, 42, 68, 0.10);
        }
      `}</style>

      {/* Top bar */}
      <header className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pt-10 sm:pt-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--line)] text-sm font-semibold bg-white/70 shadow-[0_10px_30px_rgba(15,42,68,0.06)]">
                JV
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight group-hover:opacity-90">Jobverra</div>
                <div className="text-[11px] text-[var(--muted)]">Talent ↔ Opportunity</div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_10px_24px_rgba(224,122,63,0.25)]"
              >
                Get started <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pt-12 sm:pt-16 pb-12 sm:pb-14">
          {/* subtle hero panel */}
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-white">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[color:rgba(224,122,63,0.14)] blur-3xl" />
              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[color:rgba(15,42,68,0.08)] blur-3xl" />
            </div>

            <div className="relative p-7 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-xs text-[var(--muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                NEXT-GEN FREELANCE & JOB MATCHING
              </div>

              <h1
                className={cn(
                  headingFont.className,
                  "mt-6 text-4xl sm:text-6xl leading-[1.03] tracking-tight text-[var(--text)]"
                )}
              >
                Hiring, simplified.
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Opportunities</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-[color:rgba(224,122,63,0.18)]" />
                </span>{" "}
                everywhere.
              </h1>

              <p className="mt-6 max-w-[58ch] text-base sm:text-lg leading-relaxed text-[var(--muted)]">
                Jobverra connects skilled individuals with employers across industries. Our mission is to unlock career
                opportunities for everyone, everywhere—making hiring smarter, faster, and more human.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.28)]"
                >
                  Create a profile <ArrowRightIcon className="h-5 w-5" />
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
                >
                  Post a role
                </Link>
              </div>

              {/* stats/cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Smart matching", d: "Less noise, better fit." },
                  { t: "Global access", d: "Remote + local options." },
                  { t: "Transparent", d: "Clear terms & trust." },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-[var(--line)] bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,42,68,0.06)]"
                  >
                    <div className="text-sm font-semibold text-[var(--blue)]">{x.t}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-xs text-[var(--muted)]">
                Designed to feel calm and premium — using your existing palette.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section title="About Jobverra">
        <div className="space-y-6 text-[var(--muted)] leading-relaxed">
          <p>
            Jobverra is a next generation freelance and job matching platform built to connect skilled individuals with
            employers across industries.
          </p>
          <p>
            We believe talent knows no boundaries. Whether you’re a freelancer seeking your next gig or a company
            looking for the perfect candidate, Jobverra offers a seamless experience that empowers both sides of the
            marketplace.
          </p>
        </div>
      </Section>

      {/* What we offer */}
      <Section eyebrow="PRODUCT" title="What we offer">
        <div className="grid gap-4 sm:grid-cols-2">
          {offers.map((x) => (
            <div
              key={x.t}
              className="rounded-[22px] border border-[var(--line)] bg-white/70 p-5 shadow-[0_12px_34px_rgba(15,42,68,0.07)] hover:shadow-[0_18px_45px_rgba(15,42,68,0.10)] transition"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-9 w-9 place-items-center rounded-2xl bg-[color:rgba(224,122,63,0.14)] text-[var(--orange)] font-bold">
                  ✓
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--blue)]">{x.t}</div>
                  <div className="mt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed">{x.d}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl py-12 sm:py-14 border-t border-[var(--line)]">
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-white shadow-[var(--shadow)]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[color:rgba(15,42,68,0.08)] blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:rgba(224,122,63,0.12)] blur-3xl" />
            </div>

            <div className="relative p-7 sm:p-10">
              <div className="text-xs tracking-wide text-[var(--muted)]">OUR VISION</div>
              <p className={cn(headingFont.className, "mt-3 text-2xl sm:text-3xl leading-snug text-[var(--text)]")}>
                To become the world’s most trusted bridge between talent and opportunity—helping people build careers and
                companies build teams.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_12px_26px_rgba(224,122,63,0.26)]"
                >
                  Start with Jobverra <ArrowRightIcon className="h-4 w-4" />
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
                >
                  Explore roles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl py-12 sm:py-14 border-t border-[var(--line)]">
          <h2 className={cn(headingFont.className, "text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>FAQ</h2>

          <div className="mt-7 grid gap-3">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={f.q}
                  className={cn(
                    "rounded-[22px] border border-[var(--line)] bg-white/70 shadow-[0_10px_30px_rgba(15,42,68,0.06)] transition",
                    isOpen && "shadow-[0_18px_45px_rgba(15,42,68,0.10)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="font-semibold text-[var(--blue)]">{f.q}</div>
                        <div
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                            isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-70 mt-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            {isOpen ? (
                              <div className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">{f.a}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--blue)] transition",
                          isOpen && "rotate-45 bg-[var(--faint)]"
                        )}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} Jobverra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[var(--blue)] transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[var(--blue)] transition">
                Terms
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

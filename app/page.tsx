"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

const headingFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const features = [
  {
    t: "Smart Matching",
    d: "Intelligent filters connect talent with roles that fit skills, goals, and availability.",
  },
  {
    t: "Global Access",
    d: "Remote and local opportunities across tech, design, writing, marketing, and more.",
  },
  {
    t: "Secure & Transparent",
    d: "Clear terms, secure payments, and communication that keeps everyone aligned.",
  },
  {
    t: "Career Growth",
    d: "Resources, mentorship, and networking designed to help freelancers thrive.",
  },
];

const steps = [
  { k: "01", t: "Create a profile", d: "Showcase your skills, preferences, and what you’re looking for." },
  { k: "02", t: "Get matched", d: "Discover roles and gigs aligned to your goals — with less noise." },
  { k: "03", t: "Connect & hire", d: "Apply or invite talent with clear messaging and fast coordination." },
  { k: "04", t: "Work with confidence", d: "Transparent terms and support that keeps work moving smoothly." },
];

const testimonials = [
  {
    name: "Amara Okoye",
    role: "Product Designer • Remote",
    quote: "It feels calm and professional. The matches were relevant, and the workflow was simple.",
  },
  {
    name: "Ethan Morgan",
    role: "Growth Marketer • New York",
    quote: "Jobverra removes friction. Everything is clear — from discovery to agreement.",
  },
  {
    name: "Sofia Reyes",
    role: "Project Manager • Dallas",
    quote: "The experience feels fair. Transparent expectations make a big difference.",
  },
];

const faqs = [
  {
    q: "What is Jobverra?",
    a: "Jobverra is a next generation freelance and job matching platform built to connect skilled individuals with employers across industries — making hiring smarter, faster, and more human.",
  },
  {
    q: "What types of opportunities are available?",
    a: "Remote and local opportunities across tech, design, writing, marketing, operations, and more — from freelance gigs to longer-term roles.",
  },
  {
    q: "How does smart matching work?",
    a: "We use intelligent filters and role-fit signals (skills, goals, availability, preferences) to surface better matches with less noise.",
  },
  {
    q: "Is Jobverra secure for both sides?",
    a: "Yes. We emphasize secure payments, clear terms, and transparent communication to support fair outcomes for freelancers and employers.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--jv-border)] bg-white px-3 py-1 text-xs font-medium text-[color:rgba(15,42,68,0.74)]">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  accent = false,
}: {
  title: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[var(--jv-border)] bg-white p-6 shadow-[0_12px_40px_rgba(15,42,68,0.06)]",
        accent && "border-[color:rgba(224,122,63,0.30)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-base font-semibold text-[var(--jv-blue)]">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-[color:rgba(15,42,68,0.68)]">{desc}</p>
        </div>
        <span className={cn("mt-1 h-2 w-2 shrink-0 rounded-full", accent ? "bg-[var(--jv-orange)]" : "bg-[var(--jv-blue-soft)]")} />
      </div>
    </div>
  );
}

export default function Page() {
  const nav = useMemo(
    () => [
      { id: "features", label: "Features" },
      { id: "how", label: "How it works" },
      { id: "stories", label: "Stories" },
      { id: "faq", label: "FAQ" },
    ],
    [],
  );

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className={cn(bodyFont.className, "min-h-screen bg-[var(--jv-bg)] text-[var(--jv-blue)]")}>
      {/* Theme tokens */}
      <style jsx global>{`
        :root {
          --jv-bg: #ffffff;
          --jv-surface: #f7fafc;
          --jv-blue: #0f2a44;
          --jv-blue-soft: #3a5f8c;
          --jv-orange: #e07a3f;
          --jv-orange-hover: #c8652e;
          --jv-border: rgba(15, 42, 68, 0.14);
        }
      `}</style>

      {/* ======= CENTERED WRAPPER (everything aligns nicely) ======= */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top nav (new UX: centered + minimal + premium) */}
        <header className="sticky top-0 z-50 -mx-4 sm:-mx-6 bg-white/85 backdrop-blur border-b border-[var(--jv-border)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--jv-surface)] border border-[var(--jv-border)] font-semibold">
                  JV
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">Jobverra</div>
                  <div className="text-[11px] text-[color:rgba(15,42,68,0.60)]">Talent ↔ Opportunity</div>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {nav.map((x) => (
                  <a
                    key={x.id}
                    href={`#${x.id}`}
                    className="rounded-full px-4 py-2 text-sm text-[color:rgba(15,42,68,0.70)] hover:bg-[var(--jv-surface)] hover:text-[var(--jv-blue)] transition"
                  >
                    {x.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--jv-orange)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--jv-orange-hover)] transition"
                >
                  Get started <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Mobile quick nav (new UX: centered chips) */}
            <div className="md:hidden pb-3">
              <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {nav.map((x) => (
                  <a
                    key={x.id}
                    href={`#${x.id}`}
                    className="shrink-0 rounded-full border border-[var(--jv-border)] bg-white px-3 py-1.5 text-xs text-[color:rgba(15,42,68,0.70)] hover:bg-[var(--jv-surface)] transition"
                  >
                    {x.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ======= HERO (entirely new UI/UX) ======= */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          {/* subtle background wash (quiet luxury) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(58,95,140,0.12),transparent_45%),radial-gradient(circle_at_75%_20%,rgba(224,122,63,0.10),transparent_40%)]" />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Pill>Next-gen matching</Pill>
                <Pill>Remote + Local</Pill>
                <Pill>Secure payments</Pill>
              </div>

              <h1
                className={cn(
                  headingFont.className,
                  "mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]",
                )}
              >
                Where <span className="text-[color:rgba(15,42,68,0.82)]">talent</span> meets{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">opportunity</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-[color:rgba(224,122,63,0.22)]" />
                </span>
                .
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[color:rgba(15,42,68,0.72)] max-w-xl mx-auto lg:mx-0">
                Jobverra is a next generation freelance and job matching platform built to connect skilled individuals
                with employers across industries. Smarter, faster, and more human.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--jv-orange)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--jv-orange-hover)] transition"
                >
                  Join as freelancer <ArrowRightIcon className="h-5 w-5" />
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--jv-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--jv-blue)] hover:bg-[var(--jv-surface)] transition"
                >
                  Hire talent
                </Link>
              </div>

              {/* micro trust line */}
              <div className="mt-6 text-xs text-[color:rgba(15,42,68,0.58)]">
                Built for clarity • Designed for trust • Made for global teams
              </div>
            </div>

            {/* Right “centered showcase” (new UX) */}
            <div className="lg:justify-self-end w-full">
              <div className="rounded-[28px] border border-[var(--jv-border)] bg-white shadow-[0_18px_60px_rgba(15,42,68,0.10)] overflow-hidden">
                <div className="p-6 sm:p-7 border-b border-[var(--jv-border)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[color:rgba(15,42,68,0.55)]">
                        Your marketplace
                      </div>
                      <div className="mt-2 text-lg font-semibold">A calm, centered experience</div>
                    </div>
                    <span className="rounded-full bg-[var(--jv-surface)] border border-[var(--jv-border)] px-3 py-1 text-xs font-semibold">
                      2026
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { k: "Smart", v: "matching" },
                      { k: "Global", v: "access" },
                      { k: "Secure", v: "payments" },
                    ].map((x) => (
                      <div key={x.k} className="rounded-2xl bg-[var(--jv-surface)] border border-[var(--jv-border)] p-3 text-center">
                        <div className="text-sm font-semibold">{x.k}</div>
                        <div className="mt-1 text-[11px] text-[color:rgba(15,42,68,0.60)]">{x.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-7 bg-[var(--jv-surface)]">
                  <div className="grid gap-3">
                    {features.slice(0, 3).map((f, i) => (
                      <div
                        key={f.t}
                        className="rounded-2xl bg-white border border-[var(--jv-border)] p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="font-semibold">{f.t}</div>
                          <span className={cn("h-2 w-2 rounded-full mt-2", i === 1 ? "bg-[var(--jv-orange)]" : "bg-[var(--jv-blue-soft)]")} />
                        </div>
                        <p className="mt-1 text-sm text-[color:rgba(15,42,68,0.66)] leading-relaxed">{f.d}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href="/apply"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[var(--jv-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
                    >
                      Create profile
                    </Link>
                    <Link
                      href="/apply"
                      className="inline-flex w-full items-center justify-center rounded-full border border-[var(--jv-border)] bg-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--jv-surface)] transition"
                    >
                      Post a role
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-[color:rgba(15,42,68,0.56)]">
                Tip: keep orange only for actions (buttons, small highlights).
              </div>
            </div>
          </div>
        </section>

        {/* ======= FEATURES (centered grid) ======= */}
        <section id="features" className="py-12 sm:py-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-[color:rgba(15,42,68,0.55)]">What we offer</div>
            <h2 className={cn(headingFont.className, "mt-3 text-2xl sm:text-4xl font-semibold")}>
              Simple, elegant, and built for trust.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[color:rgba(15,42,68,0.70)] leading-relaxed">
              A marketplace experience that feels calm and premium — while still moving fast.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, idx) => (
              <Card key={f.t} title={f.t} desc={f.d} accent={idx === 1} />
            ))}
          </div>
        </section>

        {/* ======= HOW IT WORKS (new timeline UX) ======= */}
        <section id="how" className="py-12 sm:py-14">
          <div className="rounded-[32px] border border-[var(--jv-border)] bg-white p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div className="max-w-md">
                <div className="text-xs uppercase tracking-wider text-[color:rgba(15,42,68,0.55)]">How it works</div>
                <h3 className={cn(headingFont.className, "mt-3 text-2xl sm:text-3xl font-semibold")}>
                  Centered steps. Clear outcomes.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[color:rgba(15,42,68,0.70)] leading-relaxed">
                  Whether you’re hiring or applying, the flow stays clean: discover, connect, and move forward with clarity.
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--jv-orange)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--jv-orange-hover)] transition"
                  >
                    Start now
                  </Link>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--jv-border)] bg-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--jv-surface)] transition"
                  >
                    Read FAQ
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                {steps.map((s) => (
                  <div key={s.k} className="rounded-3xl border border-[var(--jv-border)] bg-[var(--jv-surface)] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white border border-[var(--jv-border)] font-semibold">
                          {s.k}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{s.t}</div>
                        <p className="mt-1 text-sm text-[color:rgba(15,42,68,0.66)] leading-relaxed">{s.d}</p>
                      </div>
                      <span className="ml-auto mt-1 hidden sm:block h-2 w-2 rounded-full bg-[var(--jv-orange)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======= STORIES ======= */}
        <section id="stories" className="py-12 sm:py-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-[color:rgba(15,42,68,0.55)]">Stories</div>
            <h2 className={cn(headingFont.className, "mt-3 text-2xl sm:text-4xl font-semibold")}>
              Support that feels human.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[color:rgba(15,42,68,0.70)] leading-relaxed">
              Calm experiences create better outcomes — for freelancers and for teams.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={cn(
                  "rounded-3xl border border-[var(--jv-border)] bg-white p-6",
                  idx === 1 && "shadow-[0_18px_60px_rgba(15,42,68,0.10)]",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-[color:rgba(15,42,68,0.60)]">{t.role}</div>
                  </div>
                  <span className={cn("mt-1 h-2 w-2 rounded-full", idx === 1 ? "bg-[var(--jv-orange)]" : "bg-[var(--jv-blue-soft)]")} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:rgba(15,42,68,0.72)]">
                  <span className="text-[color:rgba(15,42,68,0.45)]">“</span>
                  {t.quote}
                  <span className="text-[color:rgba(15,42,68,0.45)]">”</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======= FAQ ======= */}
        <section id="faq" className="py-12 sm:py-14">
          <div className="rounded-[32px] border border-[var(--jv-border)] bg-white p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="max-w-md">
                <div className="text-xs uppercase tracking-wider text-[color:rgba(15,42,68,0.55)]">FAQ</div>
                <h2 className={cn(headingFont.className, "mt-3 text-2xl sm:text-4xl font-semibold")}>
                  Clear expectations.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[color:rgba(15,42,68,0.70)] leading-relaxed">
                  Our vision is to become the world’s most trusted bridge between talent and opportunity.
                </p>

                <div className="mt-6 rounded-3xl border border-[color:rgba(224,122,63,0.30)] bg-[color:rgba(224,122,63,0.06)] p-5">
                  <div className="font-semibold">Ready to start?</div>
                  <p className="mt-2 text-sm text-[color:rgba(15,42,68,0.70)] leading-relaxed">
                    Join as a freelancer or post a role — Jobverra supports both sides.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Link
                      href="/apply"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[var(--jv-orange)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--jv-orange-hover)] transition"
                    >
                      Get started
                    </Link>
                    <Link
                      href="/apply"
                      className="inline-flex w-full items-center justify-center rounded-full border border-[var(--jv-border)] bg-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--jv-surface)] transition"
                    >
                      Hire talent
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {faqs.map((f, idx) => {
                  const open = openFaq === idx;
                  return (
                    <div key={f.q} className="rounded-3xl border border-[var(--jv-border)] bg-[var(--jv-surface)]">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : idx)}
                        className="w-full text-left p-5 sm:p-6"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="min-w-0">
                            <div className="font-semibold">{f.q}</div>
                            {open && (
                              <p className="mt-2 text-sm text-[color:rgba(15,42,68,0.70)] leading-relaxed">
                                {f.a}
                              </p>
                            )}
                          </div>
                          <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-white border border-[var(--jv-border)] text-[var(--jv-blue)] shrink-0">
                            {open ? "–" : "+"}
                          </span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ======= FOOTER ======= */}
        <footer className="py-10 border-t border-[var(--jv-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[color:rgba(15,42,68,0.65)]">© {new Date().getFullYear()} Jobverra. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-[color:rgba(15,42,68,0.65)] hover:text-[var(--jv-blue)] transition">
                Privacy
              </Link>
              <Link href="/terms" className="text-[color:rgba(15,42,68,0.65)] hover:text-[var(--jv-blue)] transition">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

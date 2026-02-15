"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";

const headingFont = Fraunces({ subsets: ["latin"], weight: ["400", "600", "700"] });
const bodyFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    q: "What is Jobvera?",
    a: "Jobvera is a next-generation freelance and job matching platform built to connect skilled individuals with employers across industries—making hiring smarter, faster, and more human.",
  },
  {
    q: "What opportunities are available?",
    a: "Remote and local opportunities across tech, design, writing, marketing, operations, and more—ranging from gigs to longer-term roles.",
  },
  {
    q: "How does smart matching work?",
    a: "Role-fit signals (skills, goals, availability, preferences) reduce noise and surface better-fit matches for both talent and teams.",
  },
  {
    q: "Is Jobvera secure?",
    a: "Jobvera emphasizes secure practices, transparent expectations, and clear communication to support fair outcomes on both sides.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  const offers = useMemo(
    () => [
      { t: "Smart matching", d: "Less noise. Better-fit applicants and roles." },
      { t: "Global access", d: "Remote + local opportunities across industries." },
      { t: "Transparent", d: "Clear terms, expectations, and communication." },
      { t: "Career growth", d: "Resources, mentorship, and networks to thrive." },
    ],
    []
  );

  const steps = useMemo(
    () => [
      { t: "Create a profile", d: "Share your skills, goals, and availability." },
      { t: "Get matched", d: "We surface roles that fit your profile signals." },
      { t: "Hire faster", d: "Teams shortlist with fewer back-and-forths." },
    ],
    []
  );

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className={cn(bodyFont.className, "min-h-screen bg-[var(--bg)] text-[var(--blue)]")}
    >
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
          --shadowSoft: 0 10px 30px rgba(15, 42, 68, 0.06);
          --shadowHover: 0 22px 60px rgba(15, 42, 68, 0.12);
        }
      `}</style>

      {/* Subtle floating glows */}
      <div className="pointer-events-none fixed inset-0">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[color:rgba(224,122,63,0.16)] blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-[color:rgba(15,42,68,0.10)] blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(15,42,68,0.25)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Header */}
      <header className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-7 sm:pt-9">
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] text-sm font-semibold">
                JV
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight group-hover:opacity-90 transition">
                  Jobvera
                </div>
                <div className="text-[11px] text-[var(--muted)]">Talent ↔ Opportunity</div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_10px_24px_rgba(224,122,63,0.25)]"
                >
                  Get started <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-14 pb-10 sm:pb-12">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            {/* Left */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-xs text-[var(--muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                NEXT-GEN FREELANCE & JOB MATCHING
              </div>

              <h1
                className={cn(
                  headingFont.className,
                  "mt-5 text-4xl sm:text-6xl leading-[1.03] tracking-tight text-[var(--text)]"
                )}
              >
                Hiring, simplified.
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Opportunities</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-2 origin-left rounded-full bg-[color:rgba(224,122,63,0.18)]"
                  />
                </span>{" "}
                everywhere.
              </h1>

              <p className="mt-5 max-w-[62ch] text-base sm:text-lg leading-relaxed text-[var(--muted)]">
                Jobvera connects skilled individuals with employers across industries. We make hiring smarter, faster,
                and more human—so talent can move, and teams can grow.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/apply"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.28)]"
                  >
                    Create a profile <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 250 }}>
                  <Link
                    href="/apply"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
                  >
                    Post a role
                  </Link>
                </motion.div>
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-2xl">
                {[
                  { t: "Better fit", d: "Fewer mismatches." },
                  { t: "Faster flow", d: "Less back-and-forth." },
                  { t: "More trust", d: "Clear expectations." },
                ].map((x) => (
                  <motion.div
                    key={x.t}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] p-4 hover:shadow-[var(--shadowHover)] transition"
                  >
                    <div className="text-sm font-semibold text-[var(--blue)]">{x.t}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{x.d}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right panel */}
            <motion.div variants={fadeUp} className="rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)] p-6 sm:p-7">
              <div className="text-xs tracking-wide text-[var(--muted)]">WHY JOBVERA</div>

              <div className="mt-4 space-y-4">
                {[
                  { t: "Role-fit signals", d: "Skills, goals, and availability help surface better matches." },
                  { t: "Cleaner shortlists", d: "Reduce noise with better screening and readiness." },
                  { t: "Trust-first", d: "Transparent workflows and secure processes." },
                ].map((x) => (
                  <motion.div
                    key={x.t}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="rounded-2xl border border-[var(--line)] bg-white/70 p-4 shadow-[var(--shadowSoft)] hover:shadow-[var(--shadowHover)] transition"
                  >
                    <div className="font-semibold text-[var(--blue)]">{x.t}</div>
                    <div className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{x.d}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-[var(--faint)] p-4 text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--blue)]">Tip:</span> Keep your profile updated—better data
                improves match quality.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 border-t border-[var(--line)]">
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6">
            <h2 className={cn(headingFont.className, "text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>
              What we offer
            </h2>
            <div className="hidden sm:block text-xs text-[var(--muted)]">Calm. Premium. Focused.</div>
          </motion.div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((x) => (
              <motion.div
                key={x.t}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="rounded-[22px] border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] p-5 hover:shadow-[var(--shadowHover)] transition"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-2xl bg-[color:rgba(224,122,63,0.14)] text-[var(--orange)] font-bold">
                    ✓
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[var(--blue)]">{x.t}</div>
                    <div className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{x.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 border-t border-[var(--line)]">
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6">
            <h2 className={cn(headingFont.className, "text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>
              How it works
            </h2>
            <div className="hidden sm:block text-xs text-[var(--muted)]">Simple steps.</div>
          </motion.div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="rounded-[24px] border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] p-6 hover:shadow-[var(--shadowHover)] transition"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[var(--blue)]">{s.t}</div>
                  <span className="text-xs font-semibold text-[var(--muted)]">0{i + 1}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{s.d}</p>

                <div className="mt-4 h-1 w-full rounded-full bg-[var(--faint)]">
                  <div
                    className="h-1 rounded-full bg-[color:rgba(224,122,63,0.50)]"
                    style={{ width: `${(i + 1) * 33}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Vision */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 border-t border-[var(--line)]">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] p-7 hover:shadow-[var(--shadowHover)] transition"
            >
              <h2 className={cn(headingFont.className, "text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>
                About Jobvera
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  Jobvera is a next-generation freelance and job matching platform built to connect skilled individuals
                  with employers across industries.
                </p>
                <p>
                  Whether you’re a freelancer seeking your next gig or a company hiring, Jobvera offers a calm, modern
                  experience designed for better outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)] p-7"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[color:rgba(15,42,68,0.08)] blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:rgba(224,122,63,0.12)] blur-3xl" />
              </div>

              <div className="relative">
                <div className="text-xs tracking-wide text-[var(--muted)]">OUR VISION</div>
                <p className={cn(headingFont.className, "mt-3 text-2xl sm:text-3xl leading-snug text-[var(--text)]")}>
                  To become the world’s most trusted bridge between talent and opportunity—helping people build careers
                  and companies build teams.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/apply"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--orangeHover)] transition shadow-[0_12px_26px_rgba(224,122,63,0.26)]"
                    >
                      Start with Jobvera <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </motion.div>

                  <Link
                    href="/apply"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
                  >
                    Explore roles
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 border-t border-[var(--line)]">
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6">
            <h2 className={cn(headingFont.className, "text-2xl sm:text-3xl font-semibold text-[var(--text)]")}>FAQ</h2>
            <div className="hidden sm:block text-xs text-[var(--muted)]">Quick answers.</div>
          </motion.div>

          <div className="mt-7 grid gap-3">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <motion.div
                  key={f.q}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className={cn(
                    "rounded-[22px] border border-[var(--line)] bg-white shadow-[var(--shadowSoft)] hover:shadow-[var(--shadowHover)] transition"
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

                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 text-sm sm:text-base text-[var(--muted)] leading-relaxed">{f.a}</div>
                        </motion.div>
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
                </motion.div>
              );
            })}
          </div>

          <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} Jobvera. All rights reserved.</p>
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
    </motion.main>
  );
}

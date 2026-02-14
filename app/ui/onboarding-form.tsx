// app/components/OnboardingForm.tsx
"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";

type Step = 1 | 2 | 3;

const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
];

export default function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    motherMaidenName: "",
    date_of_birth: "",
    ssn: "", // formatted in UI
    address: { street: "", city: "", state: "", zip_code: "" },
    bank_name: "",
    routing_number: "",
    account_number: "",
    front_image: null as File | null,
    back_image: null as File | null,
    w2_form: null as File | null,
  });

  // SSN formatting
  const onlyDigits = (s: string) => s.replace(/\D/g, "").slice(0, 9);
  const formatSSN = (v: string) => {
    const d = onlyDigits(v);
    if (d.length <= 3) return d;
    if (d.length <= 5) return `${d.slice(0, 3)}-${d.slice(3)}`;
    return `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}`;
  };
  const ssnDigits = useMemo(() => onlyDigits(form.ssn), [form.ssn]);
  const ssnValid = useMemo(() => ssnDigits.length === 9, [ssnDigits]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "ssn") {
      setForm((p) => ({ ...p, ssn: formatSSN(value) }));
      return;
    }

    if (name.startsWith("address.")) {
      const key = name.split(".")[1] as keyof typeof form.address;
      setForm((p) => ({ ...p, address: { ...p.address, [key]: value } }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const f = files?.[0] || null;
    setForm((p) => ({ ...p, [name]: f }));
  };

  const nextStep = () => setStep((s) => (s === 1 ? 2 : 3));
  const prevStep = () => setStep((s) => (s === 3 ? 2 : 1));

  const handleSubmit = async () => {
    if (!form.first_name || !form.last_name) return alert("First name and last name are required.");

    const { street, city, state, zip_code } = form.address;
    if (![street, city, state, zip_code].every(Boolean)) return alert("All address fields are required.");

    if (form.ssn && !ssnValid) return alert("SSN must be exactly 9 digits (optional).");

    if (!form.front_image || !form.back_image || !form.w2_form) {
      return alert("Please upload Front ID, Back ID, and W-2.");
    }

    setLoading(true);

    try {
      const fd = new FormData();
      const put = (k: string, v: string) => fd.append(k, v ?? "");

      put("first_name", form.first_name);
      put("middle_name", form.middle_name);
      put("last_name", form.last_name);
      put("motherMaidenName", form.motherMaidenName);
      put("date_of_birth", form.date_of_birth);
      put("ssn", onlyDigits(form.ssn)); // digits only

      put("bank_name", form.bank_name);
      put("routing_number", form.routing_number);
      put("account_number", form.account_number);

      put("address.street", form.address.street);
      put("address.city", form.address.city);
      put("address.state", form.address.state);
      put("address.zip_code", form.address.zip_code);

      fd.append("front_image", form.front_image);
      fd.append("back_image", form.back_image);
      fd.append("w2_form", form.w2_form);

      const res = await fetch("/api/onboarding", { method: "POST", body: fd });
      const data = await res.json().catch(() => null);

      if (!res.ok) throw new Error(data?.error || "Submission failed");

      router.push("/verify/identity");
    } catch (err: any) {
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--blue)]">
      {/* Job Vera tokens (same as your homepage palette) */}
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

      {loading && <LoadingOverlay />}

      {/* Subtle background glow (still on-brand) */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[color:rgba(224,122,63,0.16)] blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-[color:rgba(15,42,68,0.10)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(15,42,68,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
            Job Vera • Onboarding
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)]">
            Complete your onboarding
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[var(--muted)] max-w-[62ch]">
            This helps us verify your identity and set up payment details. Your information is handled securely.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)]">
          {/* Progress */}
          <div className="px-6 sm:px-8 pt-6 sm:pt-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((n) => {
                const active = step >= (n as Step);
                return (
                  <div
                    key={n}
                    className={cn(
                      "h-2 flex-1 rounded-full",
                      active ? "bg-[var(--orange)]" : "bg-[var(--faint)]"
                    )}
                  />
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
              <span className={step === 1 ? "text-[var(--blue)] font-semibold" : ""}>Personal</span>
              <span className={step === 2 ? "text-[var(--blue)] font-semibold" : ""}>Banking</span>
              <span className={step === 3 ? "text-[var(--blue)] font-semibold" : ""}>Documents</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {step === 1 && (
              <>
                <SectionTitle title="Personal Information" subtitle="Tell us who you are and where you live." />

                <Grid>
                  <Input label="First Name" required name="first_name" value={form.first_name} onChange={handleChange} />
                  <Input label="Middle Name" name="middle_name" value={form.middle_name} onChange={handleChange} />

                  <Input label="Last Name" required name="last_name" value={form.last_name} onChange={handleChange} />
                  <Input
                    label="Mother’s Maiden Name"
                    name="motherMaidenName"
                    value={form.motherMaidenName}
                    onChange={handleChange}
                  />

                  <Input label="Date of Birth" required type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />

                  <div>
                    <label className="block text-sm text-[var(--blue)] font-medium mb-1">
                      SSN 
                    </label>
                    <input
                      name="ssn"
                      inputMode="numeric"
                      placeholder="123-45-6789"
                      value={form.ssn}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-2xl bg-white px-4 py-3 ring-1 outline-none transition",
                        "ring-[var(--line)] focus:ring-2 focus:ring-[color:rgba(224,122,63,0.50)]",
                        form.ssn && !ssnValid && "ring-[color:rgba(220,38,38,0.35)] focus:ring-[color:rgba(220,38,38,0.40)]"
                      )}
                    />
               
                  </div>

                  <Input label="Street" required name="address.street" value={form.address.street} onChange={handleChange} />
                  <Input label="City" required name="address.city" value={form.address.city} onChange={handleChange} />

                  <Select label="State" required name="address.state" value={form.address.state} onChange={handleChange}>
                    <option value="" disabled>
                      Select a state
                    </option>
                    {US_STATES.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name}
                      </option>
                    ))}
                  </Select>

                  <Input label="Zip Code" required name="address.zip_code" value={form.address.zip_code} onChange={handleChange} />
                </Grid>
              </>
            )}

            {step === 2 && (
              <>
                <SectionTitle title="Banking Details" subtitle="Used to set up your payouts securely." />

                <Grid>
                  <Input label="Bank Name" name="bank_name" value={form.bank_name} onChange={handleChange} />
                  <Input label="Routing Number" name="routing_number" value={form.routing_number} onChange={handleChange} />
                  <Input label="Account Number" name="account_number" value={form.account_number} onChange={handleChange} />
                </Grid>

                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--faint)] p-4 text-xs text-[var(--muted)]">
                  Tip: Double-check your routing and account numbers. Incorrect details can delay payouts.
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <SectionTitle title="Upload Documents" subtitle="Upload clear images or PDFs to complete verification." />

                <Grid>
                  <FileInput label="Front of ID" name="front_image" onChange={handleFileChange} />
                  <FileInput label="Back of ID" name="back_image" onChange={handleFileChange} />
                  <FileInput label="W-2 Form (PDF)" name="w2_form" accept="application/pdf" onChange={handleFileChange} />
                </Grid>

                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--faint)] p-4 text-xs text-[var(--muted)]">
                  Make sure your ID photos are readable (no glare). W-2 must be a PDF.
                </div>
              </>
            )}

            {/* Actions */}
            <div className="mt-8 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-2xl border border-[var(--line)] bg-white text-sm font-semibold text-[var(--blue)] hover:bg-[var(--faint)] transition"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 rounded-2xl bg-[var(--orange)] text-white text-sm font-semibold hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.24)]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-2xl bg-[var(--orange)] text-white text-sm font-semibold hover:bg-[var(--orangeHover)] transition shadow-[0_14px_30px_rgba(224,122,63,0.24)]"
                >
                  Submit Onboarding
                </button>
              )}
            </div>

            <p className="mt-4 text-xs text-[var(--muted)]">
              By continuing, you confirm the information provided is accurate.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Job Vera
        </div>
      </div>
    </main>
  );
}

/* ---------- helpers ---------- */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold text-[var(--text)]">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p> : null}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}

function Input({
  label,
  required,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm text-[var(--blue)] font-medium mb-1">
        {label} {required ? <span className="text-[var(--orange)]">*</span> : null}
      </label>
      <input
        {...props}
        className={cn(
          "w-full rounded-2xl bg-white px-4 py-3 text-[var(--blue)] placeholder:text-[color:rgba(15,42,68,0.45)] ring-1 ring-[var(--line)] outline-none transition",
          "focus:ring-2 focus:ring-[color:rgba(224,122,63,0.50)]",
          className
        )}
      />
    </div>
  );
}

function FileInput({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-sm text-[var(--blue)] font-medium mb-1">{label}</label>

      <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
        <input
          type="file"
          {...props}
          className={cn(
            "w-full text-sm text-[var(--muted)]",
            "file:mr-4 file:rounded-xl file:border-0 file:bg-[var(--faint)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--blue)]",
            "hover:file:bg-[color:rgba(224,122,63,0.16)] cursor-pointer",
            className
          )}
        />
        <p className="mt-2 text-xs text-[var(--muted)]">
          Tip: Upload clear files. Accepted formats depend on the field.
        </p>
      </div>
    </div>
  );
}

function Select({
  label,
  required,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm text-[var(--blue)] font-medium mb-1">
        {label} {required ? <span className="text-[var(--orange)]">*</span> : null}
      </label>
      <select
        {...props}
        className={cn(
          "w-full rounded-2xl bg-white px-4 py-3 text-[var(--blue)] ring-1 ring-[var(--line)] outline-none transition",
          "focus:ring-2 focus:ring-[color:rgba(224,122,63,0.50)]",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
}

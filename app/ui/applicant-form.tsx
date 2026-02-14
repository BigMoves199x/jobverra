"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import LoadingOverlay from "@/app/ui/LoadingOverlay";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ApplicantForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 512 * 1024) {
      alert("File is too large. Max size is 512KB.");
      return;
    }
    setForm((prev) => ({ ...prev, resume: file || null }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload your resume.");
      return;
    }

    setLoading(true);

    try {
      const filePath = `${Date.now()}-${form.resume.name}`;

      const { error } = await supabase.storage
        .from("resumes")
        .upload(filePath, form.resume, { contentType: form.resume.type });

      if (error) {
        alert("Resume upload failed.");
        return;
      }

      const { data } = supabase.storage.from("resumes").getPublicUrl(filePath);

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          resume_url: data.publicUrl,
        }),
      });

      if (res.ok) router.push("/apply/success");
      else alert("Something went wrong.");
    } catch {
      alert("Application failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0f2a44]">
      {loading && <LoadingOverlay />}

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        {/* Back */}
        <button
          onClick={() => router.push("/")}
          className="mb-8 inline-flex items-center gap-2 text-sm text-[rgba(15,42,68,0.66)] hover:text-[#0f2a44] transition"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,42,68,0.14)] px-3 py-1 text-xs text-[rgba(15,42,68,0.66)]">
            <span className="h-2 w-2 rounded-full bg-[#e07a3f]" />
            Job Vera • Candidate Application
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Apply to Job Vera
          </h1>

          <p className="mt-2 text-sm sm:text-base text-[rgba(15,42,68,0.66)] max-w-[60ch]">
            Submit your details and resume. Our team will review and contact you
            if there’s a strong match.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-[28px] border border-[rgba(15,42,68,0.14)] bg-white shadow-[0_18px_45px_rgba(15,42,68,0.08)]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div>
                <label className="block text-sm mb-2">
                  First Name <span className="text-[#e07a3f]">*</span>
                </label>
                <input
                  name="first_name"
                  required
                  value={form.first_name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[rgba(15,42,68,0.14)] px-4 py-3 outline-none focus:border-[#e07a3f]"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm mb-2">
                  Last Name <span className="text-[#e07a3f]">*</span>
                </label>
                <input
                  name="last_name"
                  required
                  value={form.last_name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[rgba(15,42,68,0.14)] px-4 py-3 outline-none focus:border-[#e07a3f]"
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2">
                  Email <span className="text-[#e07a3f]">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[rgba(15,42,68,0.14)] px-4 py-3 outline-none focus:border-[#e07a3f]"
                  placeholder="you@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-2">
                  Phone <span className="text-[#e07a3f]">*</span>
                </label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[rgba(15,42,68,0.14)] px-4 py-3 outline-none focus:border-[#e07a3f]"
                  placeholder=""
                />
              </div>

              {/* Resume */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">
                  Resume Upload <span className="text-[#e07a3f]">*</span>
                </label>

                <div className="rounded-2xl border border-[rgba(15,42,68,0.14)] p-4">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full text-sm"
                  />
                  <p className="mt-2 text-xs text-[rgba(15,42,68,0.66)]">
                    Accepted: .pdf, .doc, .docx • Max 512KB
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[#e07a3f] px-6 py-3 font-semibold text-white hover:bg-[#c8652e] transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                <p className="mt-3 text-xs text-[rgba(15,42,68,0.66)]">
                  Your information is used strictly for recruitment purposes.
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-[rgba(15,42,68,0.66)]">
          © {new Date().getFullYear()} Job Vera •{" "}
          <Link href="/" className="underline hover:text-[#0f2a44]">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

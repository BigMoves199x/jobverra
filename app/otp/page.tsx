import { Suspense } from "react";
import OtpClient from "../ui/otp";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center">Loading…</div>}>
      <OtpClient />
    </Suspense>
  );
}

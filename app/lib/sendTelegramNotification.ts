// app/lib/sendTelegramNotification.ts

type ParseMode = "HTML" | "Markdown" | "MarkdownV2";

export default async function sendTelegramNotification(
  text: string,
  opts?: {
    parse_mode?: ParseMode;
    disable_web_page_preview?: boolean;
  }
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
  }

  const payload = {
    chat_id: chatId,
    text,
    parse_mode: opts?.parse_mode ?? "HTML", // ✅ default to HTML
    disable_web_page_preview: opts?.disable_web_page_preview ?? false, // ✅ allow previews
  };

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!data.ok) {
    console.error("❌ Telegram error:", data);
    throw new Error(data.description || "Telegram sendMessage failed");
  }
}

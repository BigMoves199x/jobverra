import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Script from "next/script";

export const metadata = {
  title: "Jobvera",
  description: "Jobvera - next generation freelance and job matching platform",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        
        {/* ✅ Tawk Globals */}
        <Script id="tawk-globals" strategy="afterInteractive">
          {`var Tawk_API = Tawk_API || {}; var Tawk_LoadStart = new Date();`}
        </Script>

        {/* ✅ NEW Tawk Embed Script */}
        <Script
          id="tawk-embed"
          src="https://embed.tawk.to/6992924de68ce71c379ef3fd/1jhi8n0o0"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

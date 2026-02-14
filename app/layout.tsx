import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Script from "next/script";

export const metadata = {
  title: "Jobverra",
  description: "Jobverra - next generation freelance and job matching platform",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
   
        <Script id="tawk-globals" strategy="afterInteractive">
          {"var Tawk_API = Tawk_API || {}; var Tawk_LoadStart = new Date();"}
        </Script>


        <Script
          id="tawk-embed"
          src="https://embed.tawk.to/698b9ff5813e191c30f8ae7c/1jh4mhm44"
          strategy="afterInteractive"
        />

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

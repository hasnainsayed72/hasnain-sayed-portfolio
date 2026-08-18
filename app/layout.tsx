import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Hasnain Sayed — Head of ERP & Digital Transformation",
  description:
    "Mohammad Hasnain Sayed — ERP & Digital Transformation leader with 6+ years driving 45+ SaaS and ERP implementations across Healthcare, Manufacturing, and FMCG.",
  openGraph: {
    title: "Mohammad Hasnain Sayed — Head of ERP & Digital Transformation",
    description:
      "6+ years leading ERP transformation, SaaS implementation, and customer success across Healthcare, Manufacturing, and FMCG.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Hasnain Sayed — Head of ERP & Digital Transformation",
    description:
      "6+ years leading ERP transformation, SaaS implementation, and customer success across Healthcare, Manufacturing, and FMCG.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-bg text-text bg-noise relative antialiased selection:bg-accent/30 selection:text-white">
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />

          {/* Ambient Glowing Mesh Background Orbs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[140px] animate-pulse-glow" />
            <div className="absolute top-[40%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-accent-purple/25 blur-[160px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
            <div className="absolute -bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-good/20 blur-[150px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
          </div>

          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}

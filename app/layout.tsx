import type { Metadata } from "next"; import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css"; import { Nav } from "@/components/Nav"; import { Footer } from "@/components/Footer";
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Hemonto | Creative digital agency", template: "%s | Hemonto" },
  description: "Hemonto is an international creative digital agency: software, web, AI automation, video and graphic design.", openGraph: { siteName: "Hemonto", type: "website" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-burgundy focus:p-3 focus:text-cream">Skip to content</a><Nav /><main id="main">{children}</main><Footer /></body></html>;
}

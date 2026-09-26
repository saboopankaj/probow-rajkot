import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, Fraunces, Space_Mono, Work_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "@/assets/style/site.css";
import "@/assets/style/home/shared.css";
import "@/assets/style/home/hero.css";
import "@/assets/style/home/editorial-sections.css";
import "@/assets/style/home/todays-pick.css";
import "@/assets/style/home/menu.css";
import "@/assets/style/home/product-modal.css";
import "@/assets/style/home/overlays.css";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-script", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://probow.in"),
  title: { default: "PROBOW | Healthy Vegetarian Food & Delivery in Rajkot", template: "%s | PROBOW" },
  description: "Fresh vegetarian rice bowls, salads, pesto pasta and smoothies made to order in Rajkot. Healthy food that is never boring.",
  icons: {
    icon: [
      { url: "/probow-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/probow-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/probow-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={`${workSans.variable} ${fraunces.variable} ${caveat.variable} ${spaceMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

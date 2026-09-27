import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/menu-page-content";

export const metadata: Metadata = {
  title: "PROBOW Menu Rajkot | Healthy Rice Bowls, Salads, Pasta & Smoothies",
  description: "Explore the PROBOW menu in Rajkot. Fresh vegetarian rice bowls, healthy salads, artisan pesto pasta, Maggie, smoothies and more, made fresh to order. View dishes, descriptions and prices.",
  keywords: ["PROBOW menu Rajkot", "healthy food menu Rajkot", "vegetarian food Rajkot", "rice bowls Rajkot", "salads Rajkot", "pesto pasta Rajkot", "healthy meals Rajkot", "food delivery Rajkot"],
  authors: [{ name: "PROBOW" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "/menu" },
  openGraph: {
    type: "website",
    siteName: "PROBOW",
    title: "PROBOW Menu Rajkot | Healthy Vegetarian Food",
    description: "Explore the PROBOW menu in Rajkot — fresh vegetarian rice bowls, salads, artisan pastas, Maggie, smoothies and more, made fresh to order.",
    url: "/menu",
    locale: "en_IN",
    images: [{ url: "https://assets.probow.in/probo/images/probo-og.png", width: 1200, height: 630, alt: "PROBOW healthy vegetarian food menu in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROBOW Menu Rajkot | Healthy Vegetarian Food",
    description: "Explore fresh vegetarian rice bowls, salads, artisan pastas, Maggie and smoothies from PROBOW in Rajkot.",
    images: ["https://assets.probow.in/probo/images/probo-og.png"],
  },
};

export default function MenuPage() {
  return <MenuPageContent />;
}

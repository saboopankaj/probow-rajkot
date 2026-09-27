import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSections } from "@/components/home/home-sections";
import { HomeMenu } from "@/components/home/home-menu";
import { OfferPopup } from "@/components/home/offer-popup";
import { FeaturedMarquee } from "@/components/home/featured-marquee";
import { FoodCategories, IngredientsSection } from "@/components/home/sections/food-sections";

export const metadata: Metadata = {
  title: "PROBOW | Healthy Vegetarian Food & Delivery in Rajkot",
  description: "Fresh vegetarian rice bowls, salads, pesto pasta and smoothies made to order in Rajkot. Healthy food that is never boring.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    siteName: "PROBOW",
    url: "/",
    title: "PROBOW | Healthy Vegetarian Food & Delivery in Rajkot",
    description: "Fresh vegetarian rice bowls, salads, pesto pasta and smoothies made to order in Rajkot.",
    images: ["https://assets.probow.in/probo/images/probo-og.png"],
  },
  twitter: { card: "summary_large_image", images: ["https://assets.probow.in/probo/images/probo-og.png"] },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMenu beforeMenu={<><FeaturedMarquee /><FoodCategories /><IngredientsSection /></>} />
      <HomeSections />
      <OfferPopup />
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { HealthyFoodRajkotContent } from "@/components/healthy-food-rajkot/healthy-food-rajkot-content";
import "@/assets/style/healthy-food-rajkot/healthy-food-rajkot.css";

const origin = "https://probow.in";
const socialImage = "https://assets.probow.in/probo/images/probo-og.png";

export const metadata: Metadata = {
  title: { absolute: "Healthy Food in Rajkot | Fresh Vegetarian Bowls, Salads & Pasta | PROBOW" },
  description: "Looking for healthy food in Rajkot? PROBOW serves fresh 100% vegetarian rice bowls, salads, artisan pasta and beverages, made to order with clean ingredients and zero preservatives.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  alternates: { canonical: "/healthy-food-rajkot" },
  openGraph: {
    type: "website",
    siteName: "PROBOW",
    title: "Healthy Food in Rajkot | Fresh Vegetarian Bowls, Salads & Pasta | PROBOW",
    description: "Looking for healthy food in Rajkot? PROBOW serves fresh 100% vegetarian rice bowls, salads, artisan pasta and beverages, made to order with clean ingredients.",
    url: "/healthy-food-rajkot",
    locale: "en_IN",
    images: [{ url: socialImage, secureUrl: socialImage, type: "image/png", width: 1200, height: 630, alt: "PROBOW healthy vegetarian food in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Food in Rajkot | PROBOW",
    description: "Fresh 100% vegetarian bowls, salads, artisan pasta and beverages made to order in Rajkot.",
    images: [{ url: socialImage, alt: "PROBOW healthy vegetarian food in Rajkot" }],
  },
};

export const viewport: Viewport = { themeColor: "#315A2B" };

const rajkotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: "PROBOW",
      description: "Healthy vegetarian food made fresh in Rajkot.",
      inLanguage: "en-IN",
    },
    {
      "@type": "Restaurant",
      "@id": `${origin}/#restaurant`,
      name: "PROBOW",
      url: `${origin}/`,
      description: "Fresh 100% vegetarian healthy food in Rajkot including rice bowls, salads, artisan pastas and beverages.",
      logo: { "@type": "ImageObject", url: socialImage },
      image: [socialImage],
      telephone: "+91-7874610393",
      priceRange: "₹₹",
      servesCuisine: ["Vegetarian", "Healthy Food", "Rice Bowls", "Salads", "Pasta", "Smoothies"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "D/39, Aalap Heritage Society, Maruti Chowk, Near Satyasai Heart Hospital, Kalawad Road, Nana Mava",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 22.2756748233, longitude: 70.7694169879 },
      areaServed: { "@type": "City", name: "Rajkot" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:30", closes: "14:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "22:00" },
      ],
      hasMenu: { "@type": "Menu", "@id": `${origin}/menu#menu`, url: `${origin}/menu` },
      sameAs: ["https://www.instagram.com/eatprobow/"],
    },
    {
      "@type": "WebPage",
      "@id": `${origin}/healthy-food-rajkot#webpage`,
      url: `${origin}/healthy-food-rajkot`,
      name: "Healthy Food in Rajkot | PROBOW",
      description: "Looking for healthy food in Rajkot? PROBOW serves fresh 100% vegetarian rice bowls, salads, artisan pasta and beverages.",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#restaurant` },
      primaryImageOfPage: { "@id": `${origin}/healthy-food-rajkot#primaryimage` },
      breadcrumb: { "@id": `${origin}/healthy-food-rajkot#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ImageObject",
      "@id": `${origin}/healthy-food-rajkot#primaryimage`,
      url: socialImage,
      contentUrl: socialImage,
      width: 1200,
      height: 630,
      caption: "PROBOW healthy vegetarian food in Rajkot",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${origin}/healthy-food-rajkot#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Healthy Food in Rajkot", item: `${origin}/healthy-food-rajkot` },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is PROBOW a 100% vegetarian restaurant in Rajkot?", acceptedAnswer: { "@type": "Answer", text: "Yes. PROBOW's menu is designed around 100% vegetarian ingredients, including rice bowls, salads, artisan pastas and beverages." } },
    { "@type": "Question", name: "What healthy food can I order from PROBOW?", acceptedAnswer: { "@type": "Answer", text: "PROBOW offers fresh rice bowls, salad bowls, high-protein vegetarian bowls, artisan pesto pasta and beverages." } },
    { "@type": "Question", name: "Is the food prepared fresh?", acceptedAnswer: { "@type": "Answer", text: "PROBOW follows a made-to-order approach, with fresh preparation intended to give bowls, salads and pastas a better taste and texture." } },
    { "@type": "Question", name: "Does PROBOW offer high-protein vegetarian meals?", acceptedAnswer: { "@type": "Answer", text: "Yes. The menu includes protein-focused vegetarian options such as the High-Protein Avocado Crunch Bowl." } },
    { "@type": "Question", name: "Where is PROBOW located in Rajkot?", acceptedAnswer: { "@type": "Answer", text: "PROBOW is at D/39, Aalap Heritage Society, Maruti Chowk, near Satyasai Heart Hospital, Kalawad Road, Nana Mava, Rajkot." } },
    { "@type": "Question", name: "What are PROBOW's opening hours?", acceptedAnswer: { "@type": "Answer", text: "PROBOW is open every day from 10:30 AM to 2:30 PM and from 6:00 PM to 10:00 PM." } },
  ],
};

export default function HealthyFoodPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rajkotSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <HealthyFoodRajkotContent />
  </>;
}


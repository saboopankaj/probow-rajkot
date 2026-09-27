import type { Metadata, Viewport } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import "@/assets/style/contact/contact.css";

const origin = "https://probow.in";
const socialImage = "https://assets.probow.in/probo/images/probo-og.png";

export const metadata: Metadata = {
  title: { absolute: "Contact PROBOW Rajkot | Healthy Vegetarian Food & Delivery" },
  description: "Contact PROBOW in Rajkot for fresh vegetarian bowls, salads, artisan pastas and smoothies. Visit our Nana Mava kitchen or order directly on WhatsApp.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  alternates: { canonical: "/contact_us" },
  openGraph: {
    type: "website",
    siteName: "PROBOW",
    title: "Contact PROBOW Rajkot | Healthy Vegetarian Food",
    description: "Contact PROBOW in Rajkot for fresh vegetarian bowls, salads, artisan pastas and smoothies. Visit our Nana Mava kitchen or order directly on WhatsApp.",
    url: "/contact_us",
    locale: "en_IN",
    images: [{ url: socialImage, secureUrl: socialImage, type: "image/png", width: 1200, height: 630, alt: "PROBOW healthy vegetarian food in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PROBOW Rajkot | Healthy Vegetarian Food",
    description: "Contact PROBOW in Rajkot for fresh vegetarian bowls, salads, artisan pastas and smoothies.",
    images: [{ url: socialImage, alt: "PROBOW healthy vegetarian food in Rajkot" }],
  },
};

export const viewport: Viewport = { themeColor: "#315A2B" };

const contactSchema = {
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
      logo: { "@type": "ImageObject", url: socialImage },
      image: [socialImage],
      telephone: "+91-7874610393",
      priceRange: "₹₹",
      servesCuisine: ["Vegetarian", "Healthy Food", "Rice Bowls", "Salads", "Pasta", "Smoothies"],
      areaServed: { "@type": "City", name: "Rajkot", containedInPlace: { "@type": "State", name: "Gujarat" } },
      address: {
        "@type": "PostalAddress",
        streetAddress: "D/39, Aalap Heritage Society, Maruti Chowk, Near Satyasai Heart Hospital, Kalawad Road, Nana Mava",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 22.2756748233, longitude: 70.7694169879 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:30", closes: "14:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "22:00" },
      ],
      sameAs: ["https://www.instagram.com/eatprobow/"],
    },
    {
      "@type": "ContactPage",
      "@id": `${origin}/contact_us#webpage`,
      url: `${origin}/contact_us`,
      name: "Contact PROBOW Rajkot",
      description: "Contact PROBOW in Rajkot for fresh vegetarian food, orders and enquiries.",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#restaurant` },
      primaryImageOfPage: { "@id": `${origin}/contact_us#primaryimage` },
      breadcrumb: { "@id": `${origin}/contact_us#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ImageObject",
      "@id": `${origin}/contact_us#primaryimage`,
      url: socialImage,
      contentUrl: socialImage,
      width: 1200,
      height: 630,
      caption: "PROBOW healthy vegetarian food in Rajkot",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${origin}/contact_us#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Contact Us", item: `${origin}/contact_us` },
      ],
    },
  ],
};

export default function ContactPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    <ContactPageContent />
  </>;
}


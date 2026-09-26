import legacyPages from "@/legacy/pages.json";
import {
  createPageMetadata,
  LegacyPage,
  type LegacyPageData,
} from "@/components/legacy/legacy-page";

const page = legacyPages.contact as LegacyPageData;

export const metadata = createPageMetadata(
  page,
  "Contact PROBOW Rajkot | Healthy Vegetarian Food",
  "Contact PROBOW in Rajkot for fresh vegetarian bowls, salads, artisan pastas and smoothies. Visit our Nana Mava kitchen or order directly on WhatsApp.",
);

export default function ContactPage() {
  return <LegacyPage name="contact" page={page} />;
}

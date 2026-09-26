import legacyPages from "@/legacy/pages.json";
import {
  createPageMetadata,
  LegacyPage,
  type LegacyPageData,
} from "@/components/legacy/legacy-page";

const page = legacyPages.home as LegacyPageData;

export const metadata = createPageMetadata(
  page,
  "PROBOW | Healthy Vegetarian Food & Delivery in Rajkot",
  "Fresh vegetarian rice bowls, salads, pesto pasta and smoothies made to order in Rajkot. Healthy food that is never boring.",
);

export default function HomePage() {
  return <LegacyPage name="home" page={page} />;
}

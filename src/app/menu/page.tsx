import legacyPages from "@/legacy/pages.json";
import {
  createPageMetadata,
  LegacyPage,
  type LegacyPageData,
} from "@/components/legacy/legacy-page";

const page = legacyPages.menu as LegacyPageData;

export const metadata = createPageMetadata(
  page,
  "PROBOW Menu Rajkot | Healthy Vegetarian Food",
  "Explore fresh vegetarian rice bowls, salads, artisan pastas, Maggie and smoothies from PROBOW in Rajkot.",
);

export default function MenuPage() {
  return <LegacyPage name="menu" page={page} />;
}

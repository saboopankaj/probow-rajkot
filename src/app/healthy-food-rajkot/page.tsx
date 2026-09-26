import legacyPages from "@/legacy/pages.json";
import {
  createPageMetadata,
  LegacyPage,
  type LegacyPageData,
} from "@/components/legacy/legacy-page";

const page = legacyPages.healthy as LegacyPageData;

export const metadata = createPageMetadata(
  page,
  "Healthy Food in Rajkot | Fresh Vegetarian Bowls, Salads & Pasta | PROBOW",
  "Looking for healthy food in Rajkot? PROBOW serves fresh 100% vegetarian rice bowls, salads, artisan pasta and beverages, made to order with clean ingredients.",
);

export default function HealthyFoodPage() {
  return <LegacyPage name="healthy-food-rajkot" page={page} />;
}

import fallbackMenu from "@/lib/menu-fallback.json";

export const PROBOW_API_ENDPOINTS = {
  menu: "/api/menu",
  offerPopup: "/api/site/offer-popup",
} as const;

export type MenuImage = string | {
  url?: string;
  image_url?: string;
  public_url?: string;
  key?: string;
  storage_key?: string;
  sort_order?: number;
};

export type MenuVariant = {
  id?: string | number;
  name?: string;
  label?: string;
  price?: number;
};

export type MenuCategory = {
  id: string;
  name: string;
  image?: MenuImage;
  icon?: string;
  sort_order?: number;
};

export type MenuProduct = {
  id: string | number;
  name: string;
  category: string;
  description?: string;
  price: number;
  discount_price?: number | null;
  discount_percent?: number;
  has_discount?: boolean;
  images: MenuImage[];
  badge?: { text?: string } | null;
  badge_text?: string;
  tags: Array<{ type?: string; text?: string; icon?: string }>;
  featured: { todayPick: boolean };
  variants: MenuVariant[];
  relatedProducts: Array<string | number>;
  available?: boolean;
  [key: string]: unknown;
};

export type MenuPayload = {
  categories: MenuCategory[];
  products: MenuProduct[];
  source?: "api" | "fallback";
};

export type Offer = {
  enabled?: boolean;
  title?: string;
  heading?: string;
  description?: string;
  image?: string;
  image_url?: string;
  button_text?: string;
  button_url?: string;
  starts_at?: string;
  ends_at?: string;
  start_date?: string;
  end_date?: string;
  frequency?: "visit" | "session" | "24h" | "7d" | string;
  pages?: string[] | string;
  page_type?: string;
  [key: string]: unknown;
};

export type ProbowApiClient = ReturnType<typeof createProbowApiClient>;

export function createProbowApiClient(fetcher: typeof fetch = fetch) {
  return {
    fetchMenu() {
      return fetcher(PROBOW_API_ENDPOINTS.menu, {
        method: "GET",
        headers: { Accept: "application/json" },
        credentials: "include",
        cache: "no-store",
      });
    },
    fetchOfferPopup() {
      return fetcher(PROBOW_API_ENDPOINTS.offerPopup, {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });
    },
  };
}

export function getProBowImageUrl(image: MenuImage | null | undefined): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (image.url?.trim()) return image.url;
  if (image.image_url?.trim()) return image.image_url;
  if (image.public_url?.trim()) return image.public_url;
  const key = image.key || image.storage_key;
  if (!key) return "";
  return key.startsWith("http://") || key.startsWith("https://")
    ? key
    : `https://probow-assets.ezygodigi.in/${key.replace(/^\/+/, "")}`;
}

function normalizeMenu(raw: unknown, source: MenuPayload["source"]): MenuPayload {
  const data = raw && typeof raw === "object" ? raw as Record<string, unknown> : {};
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const products = Array.isArray(data.products) ? data.products : [];
  return {
    source,
    categories: categories.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object")).map((item) => ({
      ...item,
      id: String(item.id ?? item.category_id ?? ""),
      name: String(item.name ?? ""),
      image: getProBowImageUrl(item.image as MenuImage | undefined),
      sort_order: Number(item.sort_order ?? 999999),
    })),
    products: products.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object" && (item as Record<string, unknown>).name)).map((item) => ({
      ...item,
      id: String(item.id ?? item.product_id ?? item.name),
      name: String(item.name),
      category: String(item.category ?? item.category_id ?? ""),
      price: Number(item.price ?? 0),
      images: Array.isArray(item.images) ? item.images as MenuImage[] : [],
      tags: Array.isArray(item.tags) ? item.tags as MenuProduct["tags"] : [],
      featured: { todayPick: Boolean((item.featured as { todayPick?: boolean } | undefined)?.todayPick ?? item.today_pick) },
      variants: Array.isArray(item.variants) ? item.variants as MenuVariant[] : [],
      relatedProducts: Array.isArray(item.relatedProducts) ? item.relatedProducts as Array<string | number> : [],
      badge: item.badge && typeof item.badge === "object" ? item.badge as MenuProduct["badge"] : item.badge_text ? { text: String(item.badge_text) } : null,
      available: item.available !== false,
    })),
  };
}

export async function getMenuData(): Promise<MenuPayload> {
  try {
    const response = await createProbowApiClient().fetchMenu();
    if (!response.ok) throw new Error(`Menu API returned ${response.status}`);
    const payload: unknown = await response.json();
    const normalized = normalizeMenu(payload, "api");
    if (!normalized.products.length) throw new Error("Menu API returned no products");
    return normalized;
  } catch {
    return normalizeMenu(fallbackMenu, "fallback");
  }
}

export function getProductPrice(product: MenuProduct): number {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount_price) || 0;
  return discount > 0 && discount < price ? discount : price;
}

declare global {
  interface Window {
    ProbowApi?: ProbowApiClient;
  }
}

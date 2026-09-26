import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://probow.in/", changeFrequency: "weekly", priority: 1 },
    { url: "https://probow.in/menu", changeFrequency: "daily", priority: 0.9 },
    {
      url: "https://probow.in/healthy-food-rajkot",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://probow.in/contact_us",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://probow.in"),
  title: {
    default: "PROBOW | Healthy Vegetarian Food & Delivery in Rajkot",
    template: "%s | PROBOW",
  },
  description:
    "Fresh vegetarian bowls, salads, artisan pasta and smoothies, made to order in Rajkot.",
  icons: {
    icon: [
      { url: "/probow-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/probow-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/probow-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}

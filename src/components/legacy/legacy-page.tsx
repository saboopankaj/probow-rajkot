import type { Metadata } from "next";
import { LegacyScripts, type LegacyScript } from "./legacy-scripts";

export type LegacyPageData = {
  source: string;
  title: string;
  description: string;
  canonical: string;
  stylesheets: string[];
  scripts: LegacyScript[];
  jsonLd: string[];
  markup: string;
};

type LegacyPageProps = {
  name: string;
  page: LegacyPageData;
};

function stylesheetHref(href: string): string | null {
  if (href === "/assets/css/style.css") return null;
  if (href === "/assets/css/probow-page-css.css") {
    return "/assets/css/probow-rajkot-page-css.css";
  }
  return href;
}

export function createPageMetadata(
  page: LegacyPageData,
  socialTitle: string,
  socialDescription: string,
): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonical },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      type: "website",
      siteName: "PROBOW",
      url: page.canonical,
      title: socialTitle,
      description: socialDescription,
      images: ["https://assets.probow.in/probo/images/probo-og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: ["https://assets.probow.in/probo/images/probo-og.png"],
    },
  };
}

export function LegacyPage({ name, page }: LegacyPageProps) {
  const stylesheets = [...new Set(page.stylesheets.map(stylesheetHref))].filter(
    (href): href is string => Boolean(href),
  );

  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {page.jsonLd.map((jsonLd, index) => (
        <script
          key={`${name}-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd.replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <div
        id={`probow-${name}-page`}
        dangerouslySetInnerHTML={{ __html: page.markup }}
      />
      <LegacyScripts scripts={page.scripts} />
    </>
  );
}

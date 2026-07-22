import type { Metadata } from "next";

const configuredSiteUrl = process.env.SITE_URL ?? "https://noiretor.fr";

export const SITE_URL = new URL(configuredSiteUrl);
export const SITE_NAME = "Noir & Or";
export const DEFAULT_TITLE = "Noir & Or — Table française à Paris";
export const DEFAULT_DESCRIPTION =
  "Une table française contemporaine près du Palais-Royal, guidée par les saisons, les beaux produits et le plaisir de recevoir.";
export const SOCIAL_IMAGE = {
  url: "/social-card.png",
  width: 1200,
  height: 630,
  alt: "Noir & Or, table française à Paris",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
  index?: boolean;
};

export function absoluteUrl(path = "/") {
  const url = new URL(path, SITE_URL);
  return url.pathname === "/" && !url.search && !url.hash ? url.origin : url.toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type: "website",
      locale: "fr_FR",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}

export function createWebPageJsonLd({ title, description, path }: PageMetadataOptions) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${title} — ${SITE_NAME}`,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${absoluteUrl()}#website` },
  };
}

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl()}#website`,
      url: absoluteUrl(),
      name: SITE_NAME,
      alternateName: "Noir et Or",
      description: DEFAULT_DESCRIPTION,
      inLanguage: "fr-FR",
      creator: { "@id": "https://asdigitalagency.fr/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://asdigitalagency.fr/#organization",
      name: "AS Digital",
      url: "https://asdigitalagency.fr/",
    },
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl()}#webpage`,
      url: absoluteUrl(),
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${absoluteUrl()}#website` },
    },
  ],
};

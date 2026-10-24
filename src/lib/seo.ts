import type { Metadata } from "next";
import { business } from "@/config/business";

export const defaultTitle = `${business.name} | Tarot Card Readings for Clarity & Guidance`;

export const siteDescription = `Explore personalized Tarot card readings for relationships, career, personal growth and life's important questions with ${business.name}.`;

interface MetadataInput {
  /** Omit for the home page, which uses the full default title. */
  title?: string;
  description: string;
  path: string;
}

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${business.name}` : defaultTitle;
  return {
    title: title ?? { absolute: defaultTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: business.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

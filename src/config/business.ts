/**
 * Single source of truth for every piece of business information shown on the site.
 *
 * ⚠️  PLACEHOLDER DATA — replace every value below with the client's real,
 * legal business information before going live. Nothing else in the codebase
 * hard-codes these values.
 */
export const business = {
  name: "Celestia Tarot",
  tagline: "Guidance for Your Journey",
  description:
    "Celestia Tarot provides personalized tarot card reading services designed to offer reflection, clarity, and guidance across relationships, career, personal growth, and life's important decisions.",
  email: "hello@celestiatarot.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Jaipur, Rajasthan, India",
  instagram: "https://instagram.com/celestiatarot",
  facebook: "https://facebook.com/celestiatarot",

  /** Year shown in the footer copyright line. */
  copyrightYear: 2026,
  /** Shown on the legal pages. Update whenever the legal text changes. */
  legalLastUpdated: "October 2026",
  /** Canonical production URL (also readable from NEXT_PUBLIC_SITE_URL). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.celestiatarot.com",
} as const;

export type Business = typeof business;

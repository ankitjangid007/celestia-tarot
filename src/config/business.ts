/**
 * Single source of truth for every piece of business information shown on the site.
 *
 * Contact and registration details below come from the client's Udyam Registration
 * Certificate. Items marked TODO are still unknown and must be supplied by the client.
 */
const shortName = "Blessed Divinity";
const descriptor = "Tarot Consultancy";

export const business = {
  /** Registered enterprise name (as on the Udyam certificate). */
  name: `${shortName} ${descriptor}`,
  /** Two-part lockup used in the logo, footer and tarot card illustration. */
  shortName,
  descriptor,
  tagline: "Guidance for Your Journey",
  description: `${shortName} ${descriptor} provides personalized tarot card reading services designed to offer reflection, clarity, and guidance across relationships, career, personal growth, and life's important decisions.`,
  email: "rk5698616@gmail.com",
  phone: "+91 81079 45109",
  /** TODO: confirm this number is active on WhatsApp. */
  whatsapp: "+918107945109",
  address: "2, Tirupati Complex, Jhunjhunu Road, Gudha Gorji, Jhunjhunu, Rajasthan 333032, India",
  /** TODO: add real profile URLs. Empty values hide the link everywhere. */
  instagram: "",
  facebook: "",

  /** Year shown in the footer copyright line. */
  copyrightYear: 2026,
  /** Shown on the legal pages. Update whenever the legal text changes. */
  legalLastUpdated: "October 2026",
  /** TODO: set the real domain (or NEXT_PUBLIC_SITE_URL) before launch. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const;

export type Business = typeof business;

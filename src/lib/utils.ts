import { business } from "@/config/business";

/** Joins class names, ignoring falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Builds a wa.me link from the configured WhatsApp number. */
export function whatsappUrl(message?: string): string {
  const digits = business.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Builds a tel: link from the configured phone number. */
export function telHref(): string {
  return `tel:${business.phone.replace(/[^\d+]/g, "")}`;
}

export const mailtoHref = (subject?: string, body?: string): string => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${business.email}${query ? `?${query}` : ""}`;
};

export const BOOKING_HREF = whatsappUrl("Hello, I’d like to book a tarot reading.");

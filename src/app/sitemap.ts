import type { MetadataRoute } from "next";
import { business } from "@/config/business";

const routes = ["", "/about", "/services", "/contact", "/terms", "/privacy", "/disclaimer"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.6,
  }));
}

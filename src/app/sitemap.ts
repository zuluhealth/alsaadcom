import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/solutions",
  "/solutions/telecommunications",
  "/solutions/security",
  "/values",
  "/contact",
  "/careers",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/solutions" ? 0.9 : 0.7,
  }));
}

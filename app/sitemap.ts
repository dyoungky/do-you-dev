import type { MetadataRoute } from "next";
import { designs } from "./solutions/data";

const BASE_URL = "https://doyou.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/solutions", "/prices", "/about"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const designRoutes = designs.map((d) => ({
    url: `${BASE_URL}/solutions/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...designRoutes];
}

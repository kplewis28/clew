import type { MetadataRoute } from "next";
import { localePath, siteUrl } from "@/content/config";

const url = (path: string) => new URL(path, siteUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "es-CO": url(localePath.es), en: url(localePath.en) };

  return [
    { url: url(localePath.es), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    {
      url: url(localePath.en),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}

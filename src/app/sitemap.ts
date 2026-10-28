import type { MetadataRoute } from "next";
import { calculatorPath, localePath, privacyPath, siteUrl } from "@/content/config";

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
    ...(["es", "en"] as const).map((lang) => ({
      url: url(calculatorPath[lang]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: { "es-CO": url(calculatorPath.es), en: url(calculatorPath.en) } },
    })),
    ...(["es", "en"] as const).map((lang) => ({
      url: url(privacyPath[lang]),
      changeFrequency: "yearly" as const,
      priority: 0.2,
      alternates: { languages: { "es-CO": url(privacyPath.es), en: url(privacyPath.en) } },
    })),
  ];
}

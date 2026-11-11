import type { MetadataRoute } from "next";
import { calculatorPath, localePath, privacyPath, siteUrl } from "@/content/config";
import { servicePath, services } from "@/content/services";
import { guidePath, guides, guidesPath } from "@/content/guides";

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
    ...(["es", "en"] as const).flatMap((lang) =>
      services[lang].map((s, i) => ({
        url: url(servicePath(lang, s.slug)),
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates: {
          languages: {
            "es-CO": url(servicePath("es", services.es[i].slug)),
            en: url(servicePath("en", services.en[i].slug)),
          },
        },
      })),
    ),
    ...(["es", "en"] as const).map((lang) => ({
      url: url(guidesPath[lang]),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: { languages: { "es-CO": url(guidesPath.es), en: url(guidesPath.en) } },
    })),
    ...(["es", "en"] as const).flatMap((lang) =>
      guides[lang].map((g, i) => ({
        url: url(guidePath(lang, g.slug)),
        lastModified: new Date("2026-11-09"),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            "es-CO": url(guidePath("es", guides.es[i].slug)),
            en: url(guidePath("en", guides.en[i].slug)),
          },
        },
      })),
    ),
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

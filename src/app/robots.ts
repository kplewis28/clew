import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/config";

// Todo abierto, incluidos los buscadores con IA (ChatGPT, Claude, Perplexity,
// Gemini, Copilot), para que puedan leer la página y recomendar a clew.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiBots.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

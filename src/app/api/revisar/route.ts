// Revisión rápida de una página web: la descarga desde el servidor y mide lo básico
// que le cuesta clientes a un negocio pequeño (seguridad, velocidad, celular, Google,
// contacto). No guarda nada: solo devuelve el resultado.
import { isIP } from "node:net";

export const maxDuration = 20;

type CheckId =
  | "https"
  | "speed"
  | "mobile"
  | "title"
  | "description"
  | "h1"
  | "contact"
  | "alt"
  | "schema"
  | "share";

export type Check = { id: CheckId; ok: boolean; weight: number; value?: string | number };

export type CheckResult = {
  url: string;
  finalUrl: string;
  score: number;
  ms: number;
  platform: string | null;
  checks: Check[];
};

const MAX_BYTES = 2_000_000;

function normalize(raw: string): URL | null {
  const s = raw.trim();
  if (!s || s.length > 300) return null;
  try {
    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);
    if (!["http:", "https:"].includes(u.protocol)) return null;
    const h = u.hostname.toLowerCase();
    // Solo dominios públicos: nada de IPs, localhost ni redes internas.
    if (isIP(h) || h === "localhost" || h.endsWith(".local") || h.endsWith(".internal") || !h.includes(".")) return null;
    return u;
  } catch {
    return null;
  }
}

async function readLimited(res: Response): Promise<string> {
  const reader = res.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (total < MAX_BYTES) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    chunks.push(value);
    total += value.length;
  }
  reader.cancel().catch(() => {});
  return new TextDecoder().decode(Buffer.concat(chunks));
}

function detectPlatform(html: string, host: string): string | null {
  const h = html.toLowerCase();
  if (host.endsWith("wixsite.com") || h.includes("static.wixstatic.com") || h.includes("wix.com website builder")) return "Wix";
  if (h.includes("squarespace.com") || h.includes("static1.squarespace")) return "Squarespace";
  if (h.includes("godaddy") || h.includes("img1.wsimg.com") || h.includes("websites.godaddy")) return "GoDaddy";
  if (h.includes("cdn.shopify.com")) return "Shopify";
  if (h.includes("wp-content") || h.includes("wordpress")) return "WordPress";
  if (h.includes("weebly")) return "Weebly";
  if (h.includes("webflow")) return "Webflow";
  if (h.includes("jimdo")) return "Jimdo";
  return null;
}

const attr = (tag: string, name: string) =>
  tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1] ?? "";

function analyze(html: string, finalUrl: URL, ms: number): Omit<CheckResult, "url"> {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "";
  const metas = html.match(/<meta\b[^>]*>/gi) ?? [];
  const meta = (key: string) =>
    metas.find((m) => attr(m, "name").toLowerCase() === key || attr(m, "property").toLowerCase() === key);
  const description = meta("description") ? attr(meta("description")!, "content").trim() : "";
  const viewport = !!meta("viewport");
  const ogImage = !!meta("og:image") && attr(meta("og:image")!, "content").length > 0;
  const h1 = /<h1\b/i.test(html);
  // Cualquier forma clara de contactar o empezar: WhatsApp, llamada, correo, formulario,
  // página de contacto, agenda o registro / descarga (para apps y productos digitales).
  const contact =
    /href\s*=\s*["'](?:https?:\/\/)?(?:wa\.me|api\.whatsapp\.com|(?:www\.)?whatsapp\.com)|href\s*=\s*["'](?:tel|mailto|sms):/i.test(html) ||
    /<form\b/i.test(html) ||
    /href\s*=\s*["'][^"']*(?:contact|contacto|kontakt|calendly\.com|cal\.com|booking|reserv|agenda|cotiza|quote|apps\.apple\.com|play\.google\.com|signup|sign-up|register|registro)/i.test(html) ||
    />\s*(?:sign up|get started|start free|try (?:it )?free|book now|reserva|agenda|cotiza|empieza|reg[ií]strate|crea tu cuenta|pru[eé]balo gratis)/i.test(html);
  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
  const noAlt = imgs.filter((i) => !/\balt\s*=\s*["'][^"']+["']/i.test(i)).length;
  const schema = /application\/ld\+json[\s\S]{0,4000}?(LocalBusiness|Organization|Corporation|SoftwareApplication|MobileApplication|WebApplication|Product|Store|Restaurant|ProfessionalService|HomeAndConstructionBusiness|Plumber|Electrician|RoofingContractor|BeautySalon|Dentist)/i.test(html);

  const checks: Check[] = [
    { id: "https", ok: finalUrl.protocol === "https:", weight: 15 },
    { id: "speed", ok: ms < 1800, weight: 15, value: ms },
    { id: "mobile", ok: viewport, weight: 15 },
    { id: "title", ok: title.length >= 10 && title.length <= 70, weight: 10, value: title.slice(0, 90) },
    { id: "description", ok: description.length >= 50, weight: 10, value: description.slice(0, 160) },
    { id: "h1", ok: h1, weight: 5 },
    { id: "contact", ok: contact, weight: 15 },
    { id: "alt", ok: imgs.length === 0 || noAlt / imgs.length <= 0.2, weight: 5, value: noAlt },
    { id: "schema", ok: schema, weight: 5 },
    { id: "share", ok: ogImage, weight: 5 },
  ];
  const total = checks.reduce((s, c) => s + c.weight, 0);
  const got = checks.reduce((s, c) => s + (c.ok ? c.weight : 0), 0);
  return {
    finalUrl: finalUrl.toString(),
    score: Math.round((got / total) * 100),
    ms,
    platform: detectPlatform(html, finalUrl.hostname),
    checks,
  };
}

export async function POST(request: Request) {
  let body: { url?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  const target = normalize(typeof body.url === "string" ? body.url : "");
  if (!target) return Response.json({ error: "invalid" }, { status: 400 });

  const started = Date.now();
  let res: Response;
  try {
    res = await fetch(target, {
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; clew-revision/1.0; +https://www.heyclew.com/revisar)",
        Accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
    });
  } catch {
    return Response.json({ error: "unreachable" }, { status: 422 });
  }
  const ms = Date.now() - started;
  if (!res.ok || !(res.headers.get("content-type") ?? "").includes("html")) {
    return Response.json({ error: "unreachable" }, { status: 422 });
  }
  const html = await readLimited(res);
  const finalUrl = new URL(res.url || target.toString());
  const result: CheckResult = { url: target.toString(), ...analyze(html, finalUrl, ms) };
  return Response.json(result, { headers: { "Cache-Control": "no-store" } });
}

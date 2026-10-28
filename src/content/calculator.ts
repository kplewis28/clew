// Calculadora "¿Cuánto te cuesta tu página al año?".
// Precios de referencia: planes anuales en EE. UU., consultados el 28 de octubre de 2026
// (Wix: websitebuilderexpert.com, act. 15 sep 2026; Squarespace: beancount.io, 17 sep 2026;
// GoDaddy: playcode.io, precio de primer año). Revisarlos cada pocos meses.
import type { Locale } from "./config";

export type PlatformId = "wix" | "squarespace" | "godaddy" | "otra";

export const platforms: { id: PlatformId; name: string; plans: { name: string; monthly: number }[] }[] = [
  {
    id: "wix",
    name: "Wix",
    plans: [
      { name: "Light", monthly: 17 },
      { name: "Core", monthly: 29 },
      { name: "Business", monthly: 39 },
      { name: "Business Elite", monthly: 159 },
    ],
  },
  {
    id: "squarespace",
    name: "Squarespace",
    plans: [
      { name: "Basic", monthly: 16 },
      { name: "Core", monthly: 23 },
      { name: "Plus", monthly: 39 },
      { name: "Advanced", monthly: 99 },
    ],
  },
  {
    id: "godaddy",
    name: "GoDaddy",
    plans: [
      { name: "Basic", monthly: 9.99 },
      { name: "Premium", monthly: 14.99 },
      { name: "Commerce", monthly: 20.99 },
    ],
  },
  { id: "otra", name: "", plans: [] },
];

// Precio desde el que arranca una página propia con clew (nunca se muestra como fijo).
export const clewFrom = 500;

export type CalculatorText = {
  seoTitle: string;
  seoDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  platformLabel: string;
  otherPlatform: string;
  planLabel: string;
  perMonth: string;
  customLabel: string;
  yearsLabel: string;
  years: (n: number) => string;
  resultTitle: string;
  perYear: string;
  paidSoFar: (years: string) => string;
  nextThree: string;
  clewTitle: string;
  clewFrom: string;
  clewOnce: string;
  paysBack: (months: number) => string;
  savings: (amount: string) => string;
  lowPlan: string;
  cta: string;
  ctaMessage: (platform: string, yearly: string) => string;
  note: string;
};

export const calculator: Record<Locale, CalculatorText> = {
  es: {
    seoTitle: "¿Cuánto te cuesta tu página al año? | clew",
    seoDescription:
      "Calcula cuánto llevas pagado por tu página en Wix, Squarespace o GoDaddy y cuánto ahorrarías con una página propia, sin mensualidad.",
    back: "Volver al inicio",
    eyebrow: "Herramienta gratis",
    title: "¿Cuánto te cuesta",
    highlight: "tu página al año?",
    intro:
      "Elige dónde está tu página y tu plan. En segundos ves cuánto llevas pagado y cuánto pagarías en los próximos 3 años.",
    platformLabel: "¿Dónde está tu página?",
    otherPlatform: "Otra",
    planLabel: "Tu plan",
    perMonth: "/mes",
    customLabel: "¿Cuánto pagas al mes? (USD)",
    yearsLabel: "¿Cuánto tiempo llevas con ella?",
    years: (n) => (n === 1 ? "1 año" : `${n} años`),
    resultTitle: "Lo que te cuesta",
    perYear: "Al año",
    paidSoFar: (y) => `Llevas pagado en ${y}`,
    nextThree: "En los próximos 3 años",
    clewTitle: "Con una página propia",
    clewFrom: "Desde",
    clewOnce: "un solo pago, sin mensualidad de plataforma",
    paysBack: (m) => `Se paga sola en unos ${m} meses de lo que hoy pagas.`,
    savings: (a) => `En 3 años te ahorras cerca de ${a}.`,
    lowPlan:
      "Con un plan tan económico el ahorro tarda más en llegar. Lo que ganas es una página hecha a tu medida y que es tuya.",
    cta: "Escríbeme PÁGINA",
    ctaMessage: (p, y) =>
      `PÁGINA. Hola Cindy, usé la calculadora: hoy pago cerca de ${y} al año en ${p}. Quiero saber cómo sería mi página propia.`,
    note:
      "Precios de referencia de los planes anuales en EE. UU. (octubre de 2026). Tu factura puede variar por impuestos, renovaciones y extras. El dominio se paga aparte en los dos casos. El precio de clew depende de lo que necesite tu página.",
  },
  en: {
    seoTitle: "How much does your website cost you a year? | clew",
    seoDescription:
      "See how much you've paid for your Wix, Squarespace or GoDaddy site and how much you'd save with a site you own, with no monthly fee.",
    back: "Back to home",
    eyebrow: "Free tool",
    title: "How much does",
    highlight: "your website cost you a year?",
    intro:
      "Pick where your site lives and your plan. In seconds you'll see what you've paid so far and what you'd pay over the next 3 years.",
    platformLabel: "Where is your website?",
    otherPlatform: "Other",
    planLabel: "Your plan",
    perMonth: "/mo",
    customLabel: "How much do you pay a month? (USD)",
    yearsLabel: "How long have you had it?",
    years: (n) => (n === 1 ? "1 year" : `${n} years`),
    resultTitle: "What it costs you",
    perYear: "Per year",
    paidSoFar: (y) => `Paid so far in ${y}`,
    nextThree: "Over the next 3 years",
    clewTitle: "With a site you own",
    clewFrom: "From",
    clewOnce: "one payment, no platform monthly fee",
    paysBack: (m) => `It pays for itself in about ${m} months of what you pay today.`,
    savings: (a) => `Over 3 years you save around ${a}.`,
    lowPlan:
      "With such a low-cost plan the savings take longer. What you gain is a site built for your business that you own.",
    cta: "Message me PAGE",
    ctaMessage: (p, y) =>
      `PAGE. Hi Cindy, I used the calculator: I pay about ${y} a year on ${p}. I'd like to know what my own site would look like.`,
    note:
      "Reference prices for US annual plans (October 2026). Your bill may vary with taxes, renewals and add-ons. The domain is paid separately in both cases. clew's price depends on what your site needs.",
  },
};

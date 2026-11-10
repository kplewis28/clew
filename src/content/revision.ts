// Herramienta gratis "Revisa tu página": textos en español e inglés.
import type { Locale } from "./config";

type CheckCopy = { label: string; ok: string; bad: string; why: string };

export type RevisionText = {
  seoTitle: string;
  seoDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  placeholder: string;
  button: string;
  loading: string;
  errorInvalid: string;
  errorUnreachable: string;
  scoreLabel: string;
  verdict: (score: number) => string;
  topTitle: string;
  allGood: string;
  allTitle: string;
  speedValue: (ms: number) => string;
  platformLine: (p: string) => string;
  platformCta: string;
  ctaTitle: string;
  ctaBody: string;
  cta: string;
  ctaMessage: (url: string, score: number, issues: string) => string;
  again: string;
  note: string;
  checks: Record<string, CheckCopy>;
};

export const revisionPath: Record<Locale, string> = { es: "/revisar", en: "/en/revisar" };

export const revision: Record<Locale, RevisionText> = {
  es: {
    seoTitle: "Revisa tu página web gratis en 30 segundos | clew",
    seoDescription:
      "Escribe la dirección de tu página y mira qué le está costando clientes a tu negocio: seguridad, velocidad, celular, Google y contacto. Gratis y sin registrarte.",
    back: "Volver al inicio",
    eyebrow: "Revisión gratis",
    title: "¿Tu página te trae clientes o te los",
    highlight: "espanta?",
    intro:
      "Escribe la dirección de tu página y en segundos te mostramos qué está fallando y cómo afecta a tu negocio. Sin registro y sin letra pequeña.",
    placeholder: "tunegocio.com",
    button: "Revisar mi página",
    loading: "Revisando tu página…",
    errorInvalid: "Esa dirección no parece válida. Escríbela así: tunegocio.com",
    errorUnreachable: "No pudimos abrir esa página. Revisa que la dirección esté bien escrita y que la página esté en línea.",
    scoreLabel: "Puntaje de tu página",
    verdict: (s) =>
      s >= 85
        ? "Tu página está en buena forma. Hay detalles que pulir, pero la base funciona."
        : s >= 60
          ? "Tu página funciona, pero está dejando pasar clientes en puntos clave."
          : "Tu página le está costando clientes a tu negocio. La buena noticia: todo esto tiene arreglo.",
    topTitle: "Lo que más te está costando clientes",
    allGood: "No encontramos problemas grandes. Si quieres llevarla al siguiente nivel, conversemos.",
    allTitle: "Revisión completa",
    speedValue: (ms) => `Respondió en ${(ms / 1000).toFixed(1)} segundos`,
    platformLine: (p) => `Tu página está hecha en ${p}. Si pagas un plan mensual, mira cuánto se va en un año.`,
    platformCta: "Calcular lo que pago al año",
    ctaTitle: "¿Quieres que lo arreglemos?",
    ctaBody:
      "Te mostramos un boceto de cómo se vería tu página corregida, con tu marca, antes de que decidas nada. Sin compromiso.",
    cta: "Hablar por WhatsApp",
    ctaMessage: (url, score, issues) =>
      `Hola, revisé mi página ${url} en clew y salió ${score}/100${issues ? ` (${issues})` : ""}. Me gustaría ver cómo se podría mejorar.`,
    again: "Revisar otra página",
    note:
      "Esta revisión mira lo básico que cualquier cliente nota: si la página es segura, si carga rápido, si se ve bien en el celular, si Google la entiende y si es fácil contactarte. No guardamos la dirección que escribes.",
    checks: {
      https: {
        label: "Página segura (https)",
        ok: "Tu página abre con conexión segura.",
        bad: "Tu página no tiene conexión segura.",
        why: "El navegador muestra \"No seguro\" y mucha gente se va antes de leer nada.",
      },
      speed: {
        label: "Velocidad",
        ok: "Tu página responde rápido.",
        bad: "Tu página tarda en responder.",
        why: "Si una página tarda más de 3 segundos, más de la mitad de la gente en el celular se va.",
      },
      mobile: {
        label: "Se ve bien en el celular",
        ok: "Tu página está preparada para celulares.",
        bad: "Tu página no está preparada para celulares.",
        why: "La mayoría de tus clientes te busca desde el celular. Si tienen que hacer zoom, se van con la competencia.",
      },
      title: {
        label: "Título en Google",
        ok: "Tu página tiene un buen título para Google.",
        bad: "Tu página no tiene un título claro para Google.",
        why: "Es lo primero que la gente lee en los resultados de búsqueda. Sin un buen título, no te eligen.",
      },
      description: {
        label: "Descripción en Google",
        ok: "Tu página tiene descripción para Google.",
        bad: "Tu página no tiene descripción para Google.",
        why: "Google inventa un texto al azar debajo de tu nombre, y casi nunca vende lo que haces.",
      },
      h1: {
        label: "Título principal",
        ok: "Tu página tiene un título principal claro.",
        bad: "Tu página no tiene un título principal.",
        why: "Ni Google ni tus clientes entienden en un segundo qué ofreces.",
      },
      contact: {
        label: "Contacto en un toque",
        ok: "Te pueden escribir por WhatsApp o llamarte con un toque.",
        bad: "No hay un botón para escribirte por WhatsApp o llamarte con un toque.",
        why: "Si contactarte cuesta trabajo, el cliente le escribe al siguiente negocio de la lista.",
      },
      alt: {
        label: "Fotos que Google entiende",
        ok: "Tus fotos tienen descripción.",
        bad: "Varias fotos no tienen descripción.",
        why: "Google no puede ver tus fotos, y pierdes visitas desde la búsqueda de imágenes.",
      },
      schema: {
        label: "Ficha de negocio para Google",
        ok: "Google tiene los datos de tu negocio.",
        bad: "Google no tiene los datos de tu negocio (dirección, horario, servicios).",
        why: "Sin estos datos es más difícil aparecer en búsquedas locales y en las respuestas de la IA.",
      },
      share: {
        label: "Vista al compartir",
        ok: "Al compartir tu página se ve una imagen.",
        bad: "Al compartir tu página por WhatsApp o redes no aparece ninguna imagen.",
        why: "Un link sin imagen se ve poco confiable y casi nadie lo abre.",
      },
    },
  },
  en: {
    seoTitle: "Check your website for free in 30 seconds | clew",
    seoDescription:
      "Type your website address and see what is costing your business customers: security, speed, mobile, Google and contact. Free, no sign-up.",
    back: "Back to home",
    eyebrow: "Free check",
    title: "Is your website bringing customers or",
    highlight: "scaring them off?",
    intro: "Type your website address and in seconds we show you what is failing and how it affects your business. No sign-up, no fine print.",
    placeholder: "yourbusiness.com",
    button: "Check my website",
    loading: "Checking your website…",
    errorInvalid: "That address doesn't look right. Type it like this: yourbusiness.com",
    errorUnreachable: "We couldn't open that website. Check the address and make sure the site is online.",
    scoreLabel: "Your website score",
    verdict: (s) =>
      s >= 85
        ? "Your website is in good shape. There are details to polish, but the basics work."
        : s >= 60
          ? "Your website works, but it is letting customers slip away at key points."
          : "Your website is costing your business customers. The good news: all of this can be fixed.",
    topTitle: "What is costing you the most customers",
    allGood: "We didn't find big problems. If you want to take it to the next level, let's talk.",
    allTitle: "Full check",
    speedValue: (ms) => `Responded in ${(ms / 1000).toFixed(1)} seconds`,
    platformLine: (p) => `Your website is built on ${p}. If you pay a monthly plan, see how much it adds up to in a year.`,
    platformCta: "Calculate what I pay per year",
    ctaTitle: "Want us to fix it?",
    ctaBody: "We'll show you a sketch of your fixed website, with your brand, before you decide anything. No strings attached.",
    cta: "Talk on WhatsApp",
    ctaMessage: (url, score, issues) =>
      `Hi, I checked my website ${url} on clew and got ${score}/100${issues ? ` (${issues})` : ""}. I'd like to see how it could be improved.`,
    again: "Check another website",
    note:
      "This check looks at the basics any customer notices: whether the site is secure, loads fast, looks good on a phone, is understood by Google and makes it easy to contact you. We don't store the address you type.",
    checks: {
      https: { label: "Secure website (https)", ok: "Your website opens with a secure connection.", bad: "Your website has no secure connection.", why: "Browsers show \"Not secure\" and many people leave before reading anything." },
      speed: { label: "Speed", ok: "Your website responds fast.", bad: "Your website is slow to respond.", why: "If a page takes more than 3 seconds, over half of mobile visitors leave." },
      mobile: { label: "Looks good on a phone", ok: "Your website is ready for phones.", bad: "Your website isn't ready for phones.", why: "Most customers search from their phone. If they have to zoom in, they go to a competitor." },
      title: { label: "Google title", ok: "Your website has a good title for Google.", bad: "Your website has no clear title for Google.", why: "It's the first thing people read in search results. Without a good title, they don't pick you." },
      description: { label: "Google description", ok: "Your website has a description for Google.", bad: "Your website has no description for Google.", why: "Google makes up random text under your name, and it rarely sells what you do." },
      h1: { label: "Main headline", ok: "Your website has a clear main headline.", bad: "Your website has no main headline.", why: "Neither Google nor customers understand what you offer at a glance." },
      contact: { label: "One-tap contact", ok: "People can message you on WhatsApp or call you in one tap.", bad: "There's no button to message you on WhatsApp or call you in one tap.", why: "If contacting you takes effort, the customer messages the next business on the list." },
      alt: { label: "Photos Google understands", ok: "Your photos have descriptions.", bad: "Several photos have no description.", why: "Google can't see your photos, and you lose visits from image search." },
      schema: { label: "Business info for Google", ok: "Google has your business details.", bad: "Google doesn't have your business details (address, hours, services).", why: "Without them it's harder to show up in local searches and AI answers." },
      share: { label: "Preview when shared", ok: "Your website shows an image when shared.", bad: "When shared on WhatsApp or social media, no image shows up.", why: "A link without an image looks untrustworthy and few people open it." },
    },
  },
};

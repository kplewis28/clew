// Herramienta gratis "Revisa tu página": textos en español e inglés.
// Escrito para dueños de negocio, sin palabras técnicas.
import type { Locale } from "./config";

type CheckCopy = {
  label: string; // título corto en lenguaje del día a día
  short: string; // para el mensaje de WhatsApp
  ok: string;
  bad: string | ((n: number) => string);
  why: string;
  fix: string;
};

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
  foundTitle: (n: number) => string;
  whyLabel: string;
  fixLabel: string;
  allGood: string;
  passTitle: (n: number) => string;
  summary: (ok: number, total: number) => string;
  impact: { high: string; mid: string; low: string };
  loadingSteps: string[];
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
      "Escribe la dirección de tu página y mira qué le está costando clientes a tu negocio y cómo se arregla. Gratis y sin registrarte.",
    back: "Volver al inicio",
    eyebrow: "Revisión gratis",
    title: "¿Tu página te trae clientes o te los",
    highlight: "espanta?",
    intro:
      "Escribe la dirección de tu página y en segundos te mostramos qué está fallando, por qué te cuesta clientes y cómo se arregla. Sin registro y sin letra pequeña.",
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
    foundTitle: (n) => (n === 1 ? "Encontramos 1 cosa por mejorar" : `Encontramos ${n} cosas por mejorar`),
    whyLabel: "Por qué importa",
    fixLabel: "Cómo se arregla",
    allGood: "No encontramos problemas. Tu página cumple con lo básico que un cliente nota.",
    passTitle: (n) => `Lo que ya está bien (${n})`,
    summary: (ok, total) => `${ok} de ${total} puntos están bien`,
    impact: { high: "Impacto alto", mid: "Impacto medio", low: "Impacto bajo" },
    loadingSteps: [
      "Abriendo tu página…",
      "Revisando si es segura…",
      "Midiendo cuánto tarda en abrir…",
      "Mirando cómo se ve en el celular…",
      "Leyendo cómo te muestra Google…",
      "Buscando cómo contactarte…",
      "Preparando tu resultado…",
    ],
    speedValue: (ms) => `Abrió en ${(ms / 1000).toFixed(1)} segundos.`,
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
      "Esta revisión mira lo básico que cualquier cliente nota al entrar a tu página. No guardamos la dirección que escribes.",
    checks: {
      https: {
        label: "Página segura",
        short: "página no segura",
        ok: "El navegador la muestra como segura.",
        bad: "El navegador marca tu página como \"No segura\".",
        why: "Mucha gente se va apenas ve esa advertencia, sin leer nada.",
        fix: "Se activa un certificado de seguridad. Suele ser gratis y toma minutos.",
      },
      speed: {
        label: "Velocidad",
        short: "velocidad",
        ok: "Abre rápido.",
        bad: "Tu página tarda en abrir.",
        why: "Si tarda más de 3 segundos, más de la mitad de la gente en el celular se va.",
        fix: "Se aligeran las fotos y el código para que abra en menos de 2 segundos.",
      },
      mobile: {
        label: "Se ve bien en el celular",
        short: "celular",
        ok: "Se adapta bien a la pantalla del celular.",
        bad: "Tu página no se adapta al celular.",
        why: "La mayoría de tus clientes te busca desde el celular. Si tienen que hacer zoom, se van con la competencia.",
        fix: "Se ajusta el diseño para que se lea y se use bien en pantallas pequeñas.",
      },
      title: {
        label: "Cómo apareces en Google",
        short: "título en Google",
        ok: "Google muestra un título claro de tu página.",
        bad: "Google no muestra un título claro de tu página.",
        why: "Es lo primero que la gente lee al buscarte. Si no dice qué haces, eligen a otro.",
        fix: "Se escribe un título con tu nombre, lo que haces y tu ciudad.",
      },
      description: {
        label: "El texto debajo de tu nombre en Google",
        short: "texto en Google",
        ok: "Google tiene un texto que describe tu negocio.",
        bad: "Google no tiene un texto que describa tu negocio.",
        why: "Google pone un texto al azar debajo de tu nombre, y casi nunca convence a nadie de entrar.",
        fix: "Se escribe un resumen corto de lo que haces, que invite a entrar.",
      },
      h1: {
        label: "Lo primero que se lee",
        short: "mensaje principal",
        ok: "Al entrar queda claro qué ofreces.",
        bad: "Al entrar no queda claro qué ofreces.",
        why: "La gente decide en segundos si se queda. Si no entiende qué haces, se va.",
        fix: "Se pone arriba una frase grande y clara con lo que ofreces.",
      },
      contact: {
        label: "Es fácil contactarte",
        short: "contacto",
        ok: "Hay una forma clara de contactarte o de empezar.",
        bad: "No hay una forma fácil de contactarte.",
        why: "Si contactarte cuesta trabajo, el cliente le escribe al siguiente negocio de la lista.",
        fix: "Se agrega un botón de WhatsApp, llamada o formulario siempre a la vista.",
      },
      alt: {
        label: "Tus fotos en Google",
        short: "fotos",
        ok: "Google entiende tus fotos.",
        bad: (n) => (n === 1 ? "Una de tus fotos no tiene descripción." : `${n} de tus fotos no tienen descripción.`),
        why: "Google no puede ver las fotos, y pierdes visitas desde la búsqueda de imágenes.",
        fix: "Se le agrega a cada foto una descripción corta de lo que muestra.",
      },
      schema: {
        label: "Google conoce tu negocio",
        short: "datos para Google",
        ok: "Google tiene los datos básicos de tu negocio o producto.",
        bad: "Google no tiene los datos básicos de tu negocio o producto.",
        why: "Sin ellos es más difícil aparecer en Google y en las respuestas de herramientas como ChatGPT.",
        fix: "Se agregan a la página qué ofreces, dónde estás y cómo contactarte, en el formato que Google lee.",
      },
      share: {
        label: "Se ve bien al compartirla",
        short: "imagen al compartir",
        ok: "Al compartir el link aparece una imagen.",
        bad: "Si compartes tu página por WhatsApp o redes, sale sin imagen.",
        why: "Un link sin foto se ve poco confiable y casi nadie lo abre.",
        fix: "Se agrega una imagen de portada para cuando alguien comparta el link.",
      },
    },
  },
  en: {
    seoTitle: "Check your website for free in 30 seconds | clew",
    seoDescription:
      "Type your website address and see what is costing your business customers and how to fix it. Free, no sign-up.",
    back: "Back to home",
    eyebrow: "Free check",
    title: "Is your website bringing customers or",
    highlight: "scaring them off?",
    intro:
      "Type your website address and in seconds we show you what is failing, why it costs you customers and how to fix it. No sign-up, no fine print.",
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
    foundTitle: (n) => (n === 1 ? "We found 1 thing to improve" : `We found ${n} things to improve`),
    whyLabel: "Why it matters",
    fixLabel: "How to fix it",
    allGood: "We didn't find any problems. Your website covers the basics any customer notices.",
    passTitle: (n) => `What's already working (${n})`,
    summary: (ok, total) => `${ok} of ${total} checks are fine`,
    impact: { high: "High impact", mid: "Medium impact", low: "Low impact" },
    loadingSteps: [
      "Opening your website…",
      "Checking if it's secure…",
      "Measuring how long it takes to open…",
      "Looking at how it shows on a phone…",
      "Reading how Google shows you…",
      "Looking for ways to contact you…",
      "Preparing your result…",
    ],
    speedValue: (ms) => `Opened in ${(ms / 1000).toFixed(1)} seconds.`,
    platformLine: (p) => `Your website is built on ${p}. If you pay a monthly plan, see how much it adds up to in a year.`,
    platformCta: "Calculate what I pay per year",
    ctaTitle: "Want us to fix it?",
    ctaBody: "We'll show you a sketch of your fixed website, with your brand, before you decide anything. No strings attached.",
    cta: "Talk on WhatsApp",
    ctaMessage: (url, score, issues) =>
      `Hi, I checked my website ${url} on clew and got ${score}/100${issues ? ` (${issues})` : ""}. I'd like to see how it could be improved.`,
    again: "Check another website",
    note: "This check looks at the basics any customer notices when visiting your website. We don't store the address you type.",
    checks: {
      https: {
        label: "Secure website",
        short: "not secure",
        ok: "Browsers show it as secure.",
        bad: "Browsers mark your website as \"Not secure\".",
        why: "Many people leave as soon as they see that warning, without reading anything.",
        fix: "A security certificate is turned on. It's usually free and takes minutes.",
      },
      speed: {
        label: "Speed",
        short: "speed",
        ok: "It opens fast.",
        bad: "Your website is slow to open.",
        why: "If it takes more than 3 seconds, over half of mobile visitors leave.",
        fix: "Photos and code are lightened so it opens in under 2 seconds.",
      },
      mobile: {
        label: "Looks good on a phone",
        short: "phone",
        ok: "It fits phone screens well.",
        bad: "Your website doesn't fit phone screens.",
        why: "Most customers search from their phone. If they have to zoom in, they go to a competitor.",
        fix: "The design is adjusted so it reads and works well on small screens.",
      },
      title: {
        label: "How you show up on Google",
        short: "Google title",
        ok: "Google shows a clear title for your website.",
        bad: "Google doesn't show a clear title for your website.",
        why: "It's the first thing people read when they search for you. If it doesn't say what you do, they pick someone else.",
        fix: "A title is written with your name, what you do and your city.",
      },
      description: {
        label: "The text under your name on Google",
        short: "Google text",
        ok: "Google has a text that describes your business.",
        bad: "Google has no text describing your business.",
        why: "Google shows random text under your name, and it rarely convinces anyone to click.",
        fix: "A short summary of what you do is written to invite people in.",
      },
      h1: {
        label: "The first thing people read",
        short: "main message",
        ok: "It's clear what you offer as soon as people arrive.",
        bad: "It isn't clear what you offer when people arrive.",
        why: "People decide in seconds whether to stay. If they don't get what you do, they leave.",
        fix: "A big, clear sentence with what you offer goes at the top.",
      },
      contact: {
        label: "Easy to contact you",
        short: "contact",
        ok: "There is a clear way to contact you or get started.",
        bad: "There's no easy way to contact you.",
        why: "If contacting you takes effort, the customer messages the next business on the list.",
        fix: "A WhatsApp, call or form button is added and kept always in view.",
      },
      alt: {
        label: "Your photos on Google",
        short: "photos",
        ok: "Google understands your photos.",
        bad: (n) => (n === 1 ? "One of your photos has no description." : `${n} of your photos have no description.`),
        why: "Google can't see photos, and you lose visits from image search.",
        fix: "Each photo gets a short description of what it shows.",
      },
      schema: {
        label: "Google knows your business",
        short: "Google business info",
        ok: "Google has the basic details of your business or product.",
        bad: "Google doesn't have the basic details of your business or product.",
        why: "Without them it's harder to show up on Google and in answers from tools like ChatGPT.",
        fix: "What you offer, where you are and how to reach you are added in the format Google reads.",
      },
      share: {
        label: "Looks good when shared",
        short: "share image",
        ok: "An image shows up when the link is shared.",
        bad: "When shared on WhatsApp or social media, your website shows no image.",
        why: "A link without a picture looks untrustworthy and few people open it.",
        fix: "A cover image is added for whenever someone shares the link.",
      },
    },
  },
};

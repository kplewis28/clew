// Aviso de privacidad y política de tratamiento de datos (Ley 1581 de 2012 y
// Decreto 1074 de 2015, capítulo 25). Datos del responsable confirmados por
// Cindy el 2026-10-23. Si cambia algo de cómo se usan los datos, actualiza
// también la fecha de vigencia.
import type { Locale } from "./config";

// paragraphs van antes de la lista y after, después.
type Block = { heading: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export type Privacy = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  updated: string;
  back: string;
  intro: string;
  blocks: Block[];
};

const email = "uxclewis@gmail.com";
const phone = "+57 300 843 8670";

export const privacy: Record<Locale, Privacy> = {
  es: {
    seoTitle: "Aviso de privacidad | clew",
    seoDescription: "Cómo trata clew los datos personales de quienes le escriben, según la Ley 1581 de 2012.",
    title: "Aviso de privacidad",
    updated: "Vigente desde el 23 de octubre de 2026.",
    back: "Volver al inicio",
    intro:
      "Este aviso explica qué datos personales recibo cuando me escribes, para qué los uso y cómo puedes conocerlos, corregirlos o pedir que los borre, de acuerdo con la Ley 1581 de 2012 y sus decretos reglamentarios.",
    blocks: [
      {
        heading: "Quién es responsable de tus datos",
        list: [
          "Cindy Lewis, persona natural, con el nombre comercial clew.",
          "Domicilio: Barranquilla, Colombia.",
          `Correo: ${email}`,
          `WhatsApp: ${phone}`,
        ],
      },
      {
        heading: "Qué datos recibo",
        paragraphs: [
          "Esta página no tiene formularios, no usa cookies de seguimiento ni herramientas de analítica o publicidad. Navegarla no me entrega datos tuyos.",
          "Cuando me escribes por WhatsApp recibo lo que tú decidas compartir: tu nombre, tu número, el nombre de tu empresa y la información sobre tus procesos que me cuentes para entender lo que necesitas.",
          "El proveedor que aloja la página (Vercel) guarda registros técnicos de las visitas, como la dirección IP y el navegador, para mantener el sitio seguro y funcionando. Yo no uso esos registros para identificarte.",
        ],
      },
      {
        heading: "Para qué los uso",
        list: [
          "Responder tu mensaje y entender lo que necesitas.",
          "Preparar y enviarte una propuesta.",
          "Construir, entregar y dar soporte al trabajo que acordemos.",
          "Cumplir obligaciones contables y legales si llegamos a trabajar juntos.",
        ],
        after: [
          "No vendo ni presto tus datos. No te envío publicidad sin que me lo autorices. La información de tu empresa que conozca por el trabajo la trato como confidencial.",
        ],
      },
      {
        heading: "Tu autorización",
        paragraphs: [
          "Al escribirme por WhatsApp después de conocer este aviso, me autorizas a tratar tus datos para las finalidades de arriba. Puedes retirar esa autorización cuando quieras, salvo que debamos conservarlos por un contrato vigente o una obligación legal.",
        ],
      },
      {
        heading: "Con quién se comparten",
        paragraphs: [
          "Tus mensajes pasan por WhatsApp (Meta) y la página está alojada en Vercel. Ambos pueden procesar datos fuera de Colombia, en servidores de Estados Unidos y otros países, con sus propias medidas de seguridad. Los enlaces a Instagram y TikTok te llevan a esas plataformas, que tienen sus propias políticas.",
          "Si para tu proyecto necesito usar otra herramienta con tus datos, te lo digo antes.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: ["Como titular de tus datos puedes, sin costo:"],
        list: [
          "Conocer, actualizar y corregir tus datos.",
          "Pedir prueba de la autorización que me diste.",
          "Saber para qué he usado tus datos.",
          "Retirar tu autorización o pedir que borre tus datos.",
          "Presentar una queja ante la Superintendencia de Industria y Comercio (www.sic.gov.co) después de haberme escrito a mí.",
        ],
      },
      {
        heading: "Cómo hacer una consulta o reclamo",
        paragraphs: [
          `Escríbeme a ${email} o por WhatsApp al ${phone}, con tu nombre, tu número y lo que necesitas. Respondo las consultas en máximo 10 días hábiles y los reclamos en máximo 15 días hábiles, como indica la ley. Si necesito más tiempo, te aviso antes de que se cumpla el plazo y te explico por qué.`,
        ],
      },
      {
        heading: "Cuánto tiempo los guardo",
        paragraphs: [
          "Mientras estemos conversando o trabajando juntos, y después solo el tiempo que exijan las normas contables, tributarias o un contrato. Si no llegamos a trabajar juntos y me lo pides, borro la conversación.",
        ],
      },
      {
        heading: "Menores de edad",
        paragraphs: ["Esta página está dirigida a empresas y no recojo a propósito datos de menores de edad."],
      },
      {
        heading: "Imágenes de la página",
        paragraphs: [
          "La foto principal de la página es una imagen ilustrativa creada con inteligencia artificial. No muestra a personas reales.",
        ],
      },
      {
        heading: "Cambios a este aviso",
        paragraphs: [
          "Si cambio la forma de usar tus datos, actualizo este aviso y su fecha de vigencia. Si el cambio es importante, te lo cuento antes de aplicarlo.",
        ],
      },
    ],
  },
  en: {
    seoTitle: "Privacy notice | clew",
    seoDescription: "How clew handles the personal data of people who get in touch.",
    title: "Privacy notice",
    updated: "Effective October 23, 2026.",
    back: "Back to home",
    intro:
      "This notice explains what personal data I receive when you message me, what I use it for, and how you can see it, correct it or ask me to delete it. It follows Colombia's data protection law (Law 1581 of 2012), where I'm based.",
    blocks: [
      {
        heading: "Who is responsible for your data",
        list: [
          "Cindy Lewis, as an individual, trading as clew.",
          "Based in Barranquilla, Colombia.",
          `Email: ${email}`,
          `WhatsApp: ${phone}`,
        ],
      },
      {
        heading: "What data I receive",
        paragraphs: [
          "This site has no forms and uses no tracking cookies, analytics or advertising tools. Browsing it doesn't give me any of your data.",
          "When you message me on WhatsApp I receive whatever you choose to share: your name, your number, your business name and the details about your processes you tell me so I can understand what you need.",
          "The company that hosts this site (Vercel) keeps technical logs of visits, such as IP address and browser, to keep the site secure and running. I don't use those logs to identify you.",
        ],
      },
      {
        heading: "What I use it for",
        list: [
          "Replying to your message and understanding what you need.",
          "Preparing and sending you a proposal.",
          "Building, delivering and supporting the work we agree on.",
          "Meeting accounting and legal obligations if we work together.",
        ],
        after: [
          "I don't sell or lend your data. I don't send you marketing unless you say yes. Anything I learn about your business through our work is treated as confidential.",
        ],
      },
      {
        heading: "Your consent",
        paragraphs: [
          "By messaging me on WhatsApp after reading this notice, you allow me to use your data for the purposes above. You can withdraw that consent at any time, unless I need to keep the data because of an active contract or a legal obligation.",
        ],
      },
      {
        heading: "Who else handles it",
        paragraphs: [
          "Your messages go through WhatsApp (Meta), and this site is hosted on Vercel. Both may process data outside Colombia, on servers in the United States and other countries, under their own security measures. The Instagram and TikTok links take you to those platforms, which have their own policies.",
          "If your project needs another tool to handle your data, I'll tell you first.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["You can, free of charge:"],
        list: [
          "See, update and correct your data.",
          "Ask for proof of the consent you gave me.",
          "Find out how I have used your data.",
          "Withdraw your consent or ask me to delete your data.",
          "File a complaint with Colombia's Superintendence of Industry and Commerce (www.sic.gov.co) after contacting me first. If you live in another country, you may also have rights under your local law; write to me and I'll help.",
        ],
      },
      {
        heading: "How to make a request",
        paragraphs: [
          `Email ${email} or message me on WhatsApp at ${phone} with your name, your number and what you need. I answer questions within 10 business days and complaints within 15 business days, as the law requires. If I need more time, I'll tell you before the deadline and explain why.`,
        ],
      },
      {
        heading: "How long I keep it",
        paragraphs: [
          "While we're talking or working together, and afterwards only as long as accounting, tax rules or a contract require. If we don't end up working together and you ask, I delete the conversation.",
        ],
      },
      {
        heading: "Children",
        paragraphs: ["This site is meant for businesses, and I don't knowingly collect data from minors."],
      },
      {
        heading: "Images on this site",
        paragraphs: [
          "The main photo on this site is an illustrative image created with artificial intelligence. It doesn't show real people.",
        ],
      },
      {
        heading: "Changes to this notice",
        paragraphs: [
          "If I change how I use your data, I'll update this notice and its effective date. If the change is significant, I'll let you know before it applies.",
        ],
      },
    ],
  },
};

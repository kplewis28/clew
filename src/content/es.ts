// Textos en español. Edita este archivo para cambiar cualquier copy; el
// inglés está en en.ts y debe tener exactamente la misma forma.
import type { IconKey } from "@/components/icons";

const icon = (key: IconKey) => key;

export const es = {
  ui: {
    homeAria: "ir al inicio",
    askAria: "Preguntar por WhatsApp sobre",
    solutionAria: "Ver cómo lo resuelvo",
    switchLabel: "EN",
    switchHref: "/en",
    switchAria: "Ver esta página en inglés",
  },

  business: {
    interestMessage: "Hola Cindy, me interesa saber más sobre: ",
    tagline: "Tecnología a la medida de tu negocio.",
    whatsappMessage:
      "Hola Cindy, quiero agendar el diagnóstico gratis de 30 minutos para mi empresa.",
  },

  seo: {
    title: "Automatización de procesos para pequeñas empresas | clew",
    description:
      "Herramientas a la medida para pequeñas y medianas empresas: lo que tu equipo hoy hace a mano en Excel, WhatsApp y papel pasa a hacerse solo. Diagnóstico gratis de 30 minutos.",
    keywords: [
      "automatización de procesos para pequeñas empresas",
      "automatización de pedidos para distribuidoras",
      "herramientas internas para pymes",
      "software a la medida para empresas",
      "automatizar tareas repetitivas empresa",
    ],
    ogAlt: "clew: procesos más simples, negocios más fuertes.",
  },

  cta: {
    primary: "Agenda tu diagnóstico gratis",
    short: "Hablemos",
    floatingLabel: "Agenda tu diagnóstico gratis por WhatsApp",
  },

  hero: {
    titleStart: "Procesos más simples.",
    titleHighlight: "Negocios más fuertes.",
    subtitle:
      "Construyo herramientas a la medida de tu empresa: lo que hoy tu equipo hace a mano en Excel, WhatsApp y papel pasa a hacerse solo.",
    note: "Son 30 minutos por WhatsApp y no tiene costo.",
    photoAlt: "Una consultora conversa con el dueño de un negocio en una mesa de trabajo",
    chips: [
      { title: "Diagnóstico gratis", text: "30 minutos por WhatsApp" },
      { title: "Hecho a tu medida", text: "Sobre cómo ya trabajas" },
      { title: "Te acompaño", text: "Desde la idea hasta que tu equipo lo usa" },
    ],
  },

  marquee: ["Automatiza", "Optimiza", "Crece"],

  statement: {
    title: "Tu negocio también merece",
    highlight: "herramientas hechas a su medida.",
    text: "Las empresas grandes tienen equipos enteros para ordenar sus procesos. Tú me tienes a mí: me siento con tu equipo, veo cómo trabajan y les construyo justo lo que necesitan.",
    pillars: [
      {
        icon: icon("automate"),
        title: "Automatiza",
        text: "Lo que se repite todos los días deja de hacerse a mano.",
      },
      {
        icon: icon("optimize"),
        title: "Optimiza",
        text: "Cada proceso en orden, con menos pasos y menos errores.",
      },
      {
        icon: icon("grow"),
        title: "Crece",
        text: "Atiendes más clientes sin contratar solo para digitar.",
      },
    ],
  },

  audience: {
    label: "Pensado para negocios como",
    items: ["Distribuidoras", "Comercios", "Talleres", "Consultorios", "Agencias", "Oficinas"],
  },

  problem: {
    title: "Tu empresa creció.",
    highlight: "Tus procesos siguen en Excel, WhatsApp y papel.",
    items: [
      {
        icon: icon("repeat"),
        label: "Trabajo manual",
        image: "/problema-manual.jpg",
        imageAlt: "Manos revisando facturas en papel con una calculadora y un celular",
        title: "Todo se hace a mano",
        text: "Copiar datos de un lado a otro, llenar las mismas planillas, mandar los mismos mensajes. Todos los días, otra vez.",
      },
      {
        icon: icon("scattered"),
        label: "Información",
        image: "/problema-regada.jpg",
        imageAlt: "Mujer revisando su celular junto a un cuaderno y su portátil",
        title: "La información está regada",
        text: "Una parte en Excel, otra en WhatsApp y otra en la cabeza de alguien. Cuando esa persona falta, nadie sabe cómo va nada.",
      },
      {
        icon: icon("error"),
        label: "Errores",
        image: "/problema-errores.jpg",
        imageAlt: "Trabajadora revisando existencias en los estantes de una bodega",
        title: "Los descuidos salen caros",
        text: "Un pedido mal anotado, una cotización que no salió, un cobro que se olvidó. Errores pequeños que terminan costando clientes.",
      },
    ],
  },

  steps: {
    title: "De la primera llamada",
    highlight: "a tu equipo usándolo.",
    items: [
      {
        title: "Diagnóstico",
        meta: "30 min, gratis",
        text: "Me cuentas cómo trabaja tu equipo hoy y qué les quita más tiempo. Sales con una propuesta clara: qué construir, cuánto cuesta y cuánto tiempo toma.",
      },
      {
        title: "Construcción",
        meta: "Plazo acordado",
        text: "El tiempo depende de lo que vamos a construir y lo dejamos claro desde la propuesta. Mientras armo la herramienta, te muestro avances cada semana para ajustarla contigo.",
      },
      {
        title: "Tu equipo lo usa desde el día uno",
        meta: "Entrega",
        text: "Le enseño a tu gente a usarla en su propio puesto de trabajo. Si saben usar WhatsApp, saben usar esto.",
      },
    ],
  },

  builds: {
    title: "Herramientas hechas",
    highlight: "para tu forma de trabajar.",
    // Única mención visible de "IA" en la página (máximo permitido: dos).
    subtitle:
      "Herramientas internas con IA que se encargan del trabajo repetitivo. Empezamos por el proceso que más tiempo le quita a tu equipo.",
    items: [
      {
        icon: icon("orders"),
        title: "Registro automático de pedidos",
        text: "Cada pedido o solicitud que llega por WhatsApp queda anotado con cliente, detalle y fecha.",
      },
      {
        icon: icon("inventory"),
        title: "Control de inventario",
        text: "Las existencias se actualizan con cada venta y recibes un aviso antes de quedarte sin producto.",
      },
      {
        icon: icon("quote"),
        title: "Cotizaciones en minutos",
        text: "Con tus precios y descuentos ya cargados, listas para enviar sin armar nada a mano.",
      },
      {
        icon: icon("reminder"),
        title: "Seguimiento a clientes",
        text: "Recordatorios de cobro, de citas y de entregas que salen solos, a tiempo y con tu nombre.",
      },
      {
        icon: icon("board"),
        title: "Un solo lugar para tu equipo",
        text: "Cada trabajo con su responsable y su estado, a la vista de todos. Sin preguntar por el chat.",
      },
      {
        icon: icon("report"),
        title: "Reportes automáticos",
        text: "Cada semana recibes cuánto vendiste, qué se movió más y qué quedó pendiente.",
      },
    ],
  },

  benefits: {
    title: "Una empresa donde da gusto trabajar,",
    highlight: "y que responde más rápido.",
    items: [
      {
        title: "Tu equipo trabaja más tranquilo",
        text: "Menos digitar y menos apagar incendios. La gente se dedica a atender clientes y a lo que sí necesita su criterio.",
      },
      {
        title: "Tú ves todo sin preguntar",
        text: "Pedidos, pendientes y números del mes en un solo lugar, al día. Decides con información, no con suposiciones.",
      },
      {
        title: "Tu negocio no depende de una sola persona",
        text: "El proceso queda en la herramienta, no en la memoria de alguien. Si una persona falta, el trabajo sigue.",
      },
    ],
  },

  // Resultados basados en lo que hace el sistema real (Stone Setting Pro). Si
  // hay cifras medidas (horas, errores, órdenes al mes), cámbialas aquí.
  caseStudy: {
    title: "Un taller de joyería en Suiza que",
    highlight: "dejó de perseguir sus órdenes.",
    intro:
      "Construí el sistema con el que el taller gestiona todos sus pedidos, desde que entran hasta que se entregan.",
    before: {
      label: "Antes",
      items: [
        "Órdenes repartidas entre papeles, correos y mensajes.",
        "Nadie sabía con certeza en qué paso iba cada pieza.",
        "Horas cada semana pasando datos de un lado a otro.",
      ],
    },
    after: {
      label: "Después",
      items: [
        "Todas las órdenes en un solo lugar, visibles para todo el equipo.",
        "El estado de cada pieza se actualiza desde el puesto de trabajo.",
        "El registro se hace una sola vez y sin copiar a mano.",
      ],
    },
    results: [
      { value: "1 sola app", label: "para órdenes, seguimiento y facturas" },
      {
        value: "IVA automático",
        label: "el impuesto suizo y el redondeo de cada factura se calculan solos",
      },
      {
        value: "Desde el celular",
        label: "el equipo actualiza cada orden desde su puesto de trabajo",
      },
    ],
  },

  about: {
    name: "Cindy Lewis",
    photo: "/cindy-lewis.jpg" as string | null,
    photoAlt: "Cindy Lewis, con sus gafas verdes, asomándose detrás de su portátil",
    photoPlaceholder: "Foto [PLACEHOLDER]",
    lines: [
      "Soy Cindy Lewis, diseñadora de producto. Construyo herramientas a la medida de cada negocio, sin plantillas genéricas.",
      "Primero entiendo cómo trabaja tu equipo y después construyo. Hablas conmigo desde el diagnóstico hasta la entrega, sin intermediarios.",
    ],
  },

  // TODO: confirmar las respuestas, en especial la de soporte cuando algo falla.
  faq: {
    title: "Lo que casi todos preguntan antes de empezar.",
    items: [
      {
        question: "¿Mi empresa es muy pequeña para esto?",
        answer:
          "No. Entre más pequeño el equipo, más pesa cada hora que se va en tareas repetitivas. Empezamos por un solo proceso: el que más tiempo les quita.",
      },
      {
        question: "¿Necesito saber de tecnología?",
        answer:
          "No. Si sabes usar WhatsApp, sabes usar lo que te construyo. Te entrego la herramienta funcionando y le enseño a tu equipo a usarla.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Depende del proceso que quieras resolver. El diagnóstico es gratis y sales con una propuesta clara: qué se construye, cuánto cuesta y cuánto demora.",
      },
      {
        question: "¿Qué pasa si algo falla?",
        answer:
          "Me escribes por WhatsApp y lo reviso contigo. El acompañamiento después de la entrega queda por escrito en la propuesta, para que sepas exactamente con qué cuentas.",
      },
      {
        question: "¿Funciona con lo que ya uso?",
        answer:
          "Sí. Parto de lo que ya tienes: tu WhatsApp, tu Excel, tu sistema de facturación. Tu equipo no tiene que aprender a trabajar de otra forma.",
      },
    ],
  },

  finalCta: {
    title: "Cuéntame qué se repite",
    highlight: "todos los días en tu empresa.",
    text: "En 30 minutos vemos qué puede dejar de hacerse a mano. Sin costo y sin compromiso.",
  },

  footer: {
    rights: "Todos los derechos reservados.",
    navTitle: "Explora",
    nav: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Qué construyo", href: "#que-construyo" },
      { label: "Caso real", href: "#caso-real" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
    ],
    contactTitle: "Contacto",
    contactCta: "Escríbeme por WhatsApp",
    languageTitle: "Idioma",
  },
};

export type Content = typeof es;

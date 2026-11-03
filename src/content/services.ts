// Páginas de cada servicio (una por servicio y por idioma). Pensadas para que
// Google y los buscadores con IA entiendan qué hace clew y para quién.
import type { Locale } from "./config";

export type ServiceId = "web" | "systems" | "google";

type Service = {
  id: ServiceId;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  forWho: string[];
  includes: { title: string; text: string }[];
  price: string;
  minPrice: number | null;
  caseRef: { title: string; text: string } | null;
  calcLink: boolean;
  faq: { q: string; a: string }[];
  waMessage: string;
};

type Labels = {
  back: string;
  home: string;
  forWho: string;
  includes: string;
  price: string;
  caseKicker: string;
  caseLink: string;
  calc: string;
  faq: string;
  ctaTitle: string;
  ctaHighlight: string;
  ctaText: string;
  ctaButton: string;
  others: string;
  servicesNav: string;
};

export const serviceLabels: Record<Locale, Labels> = {
  es: {
    back: "Volver al inicio",
    home: "Inicio",
    forWho: "Es para ti si…",
    includes: "Qué incluye",
    price: "¿Cuánto cuesta?",
    caseKicker: "Caso real",
    caseLink: "Ver el caso con video",
    calc: "¿Cuánto llevas pagado por tu página actual? Calcúlalo gratis",
    faq: "Preguntas frecuentes",
    ctaTitle: "Cuéntanos qué necesitas",
    ctaHighlight: "y lo conversamos.",
    ctaText: "La primera conversación no tiene costo. Te escuchamos y te mostramos un bosquejo antes de que pagues nada.",
    ctaButton: "Escríbenos por WhatsApp",
    others: "Otros servicios",
    servicesNav: "Servicios",
  },
  en: {
    back: "Back to home",
    home: "Home",
    forWho: "This is for you if…",
    includes: "What's included",
    price: "How much does it cost?",
    caseKicker: "Real case",
    caseLink: "See the case with video",
    calc: "How much have you paid for your current site? Calculate it for free",
    faq: "Frequently asked questions",
    ctaTitle: "Tell us what you need",
    ctaHighlight: "and let's talk.",
    ctaText: "The first conversation is free. We listen and show you a sketch before you pay anything.",
    ctaButton: "Message us on WhatsApp",
    others: "Other services",
    servicesNav: "Services",
  },
};

export const services: Record<Locale, Service[]> = {
  es: [
    {
      id: "web",
      slug: "paginas-web",
      seoTitle: "Páginas web a medida sin mensualidad para negocios | clew",
      seoDescription:
        "Diseñamos tu página web con tu marca, en tu propio dominio y sin pagar mensualidades de Wix o Squarespace. Desde USD 500, en español e inglés.",
      eyebrow: "Páginas web a medida",
      title: "Tu página propia,",
      highlight: "sin mensualidad.",
      intro:
        "Diseñamos y construimos tu página web con tu marca, la conectamos a tu propio dominio y es tuya. Sin plantillas genéricas y sin pagar cada mes por una plataforma.",
      forWho: [
        "Pagas Wix, Squarespace o GoDaddy cada mes y tu página no te trae clientes.",
        "No tienes página y tus clientes te buscan en Google.",
        "Tu página se ve vieja o no funciona bien en el celular.",
        "Quieres que te pidan cotizaciones o reservas sin escribirle a cada cliente.",
      ],
      includes: [
        { title: "Diseño con tu marca", text: "Tus colores, tu logo y tu tono. Hecha para tu negocio, no sacada de una plantilla." },
        { title: "Lista para Google", text: "Estructura, velocidad y textos pensados para que te encuentren." },
        { title: "Funciona en el celular", text: "Donde la mayoría de tus clientes la va a ver." },
        { title: "Formularios que trabajan", text: "Cotizaciones, reservas o contacto que te llegan ordenados." },
        { title: "En tu propio dominio", text: "Con el nombre de tu negocio y sin mensualidad de plataforma." },
        { title: "Manual de uso", text: "Te entregamos todo explicado, y los cambios los vemos por WhatsApp." },
      ],
      price:
        "Desde USD 500, en un solo pago. Cada proyecto se cotiza según lo que necesites. Lo único fijo después es tu dominio, que suele costar entre USD 10 y 15 al año.",
      minPrice: 500,
      caseRef: {
        title: "Una DJ en Suiza que ya no contesta reservas a mano.",
        text: "Nueva página con reservas paso a paso y un panel para aceptar o rechazar con un toque.",
      },
      calcLink: true,
      faq: [
        {
          q: "¿De verdad no pago mensualidad?",
          a: "No pagas una plataforma tipo Wix. Lo único fijo es tu dominio, que suele costar entre USD 10 y 15 al año. Si tu página necesita algo con costo mensual, te lo decimos en la propuesta antes de empezar.",
        },
        {
          q: "¿Puedo pasar mi página de Wix o Squarespace a una propia?",
          a: "Sí. Usamos tus textos, tus fotos y tu dominio, y la rediseñamos para que se vea y funcione mejor.",
        },
        {
          q: "¿Cuánto se demora?",
          a: "Depende del tamaño. Una página sencilla suele estar lista en pocas semanas. En la propuesta te damos el plazo exacto.",
        },
        {
          q: "¿Puedo hacer cambios después?",
          a: "Sí. Te entregamos un manual de uso y los cambios los vemos por WhatsApp.",
        },
      ],
      waMessage: "Hola, vi la página de clew sobre páginas web a medida y quiero saber más.",
    },
    {
      id: "systems",
      slug: "sistemas-a-medida",
      seoTitle: "Sistemas a medida para pequeñas empresas: pedidos, inventario y facturas | clew",
      seoDescription:
        "Diseñamos sistemas a la medida de tu negocio para pedidos, inventario, cotizaciones y facturas, hechos a cómo ya trabajas. Desde USD 500.",
      eyebrow: "Sistemas a medida",
      title: "Un sistema hecho",
      highlight: "a cómo ya trabajas.",
      intro:
        "Si tu negocio vive entre Excel, WhatsApp y papeles, diseñamos la herramienta que lo pone en orden. Una sola app para tu equipo, en el computador y en el celular.",
      forWho: [
        "Los pedidos llegan por WhatsApp y se pierden entre mensajes.",
        "Nadie sabe con certeza en qué va cada trabajo.",
        "Las cotizaciones o facturas se hacen a mano, una por una.",
        "El negocio depende de que una persona se acuerde de todo.",
      ],
      includes: [
        { title: "Pedidos y órdenes", text: "Cada pedido registrado una sola vez, con su estado a la vista de todos." },
        { title: "Inventario", text: "Existencias al día y un aviso antes de quedarte sin producto." },
        { title: "Cotizaciones y facturas", text: "Con tus precios e impuestos ya cargados, listas en minutos." },
        { title: "Reportes", text: "Cuánto entró, qué se movió más y qué quedó pendiente, sin hacer cuentas." },
        { title: "En computador y celular", text: "Tu equipo lo usa desde donde trabaja." },
        { title: "Diseñado contigo", text: "Partimos de cómo trabajas hoy y lo ajustamos juntos cada semana." },
      ],
      price:
        "Cada sistema se cotiza según lo que necesites, desde USD 500. La primera conversación no tiene costo y sales con una propuesta clara: qué se construye, cuánto cuesta y cuánto demora.",
      minPrice: 500,
      caseRef: {
        title: "Un taller de joyería en Suiza que dejó de perseguir sus órdenes.",
        text: "Una app para todos sus pedidos, desde que entran hasta que se entregan, con la factura y el impuesto suizo calculados solos.",
      },
      calcLink: false,
      faq: [
        {
          q: "¿Tengo que cambiar cómo trabajo?",
          a: "No. Diseñamos el sistema alrededor de cómo ya trabaja tu equipo, para que lo usen desde el primer día.",
        },
        {
          q: "¿Funciona con Excel o con lo que ya uso?",
          a: "Sí. Partimos de lo que ya tienes y podemos traer tus datos de Excel.",
        },
        {
          q: "¿Necesito saber de tecnología?",
          a: "No. Si sabes usar WhatsApp, sabes usar lo que construimos.",
        },
        {
          q: "¿Por dónde empezamos?",
          a: "Por el proceso que más tiempo te quita. Después, si quieres, seguimos con el siguiente.",
        },
      ],
      waMessage: "Hola, vi la página de clew sobre sistemas a medida y quiero contarles cómo trabajamos.",
    },
    {
      id: "google",
      slug: "perfil-de-google",
      seoTitle: "Perfil de Google para tu negocio: aparece en Google Maps | clew",
      seoDescription:
        "Creamos y dejamos completo el perfil de Google de tu negocio para que te encuentren en Google Maps y en las búsquedas cercanas, con fotos, horarios, servicios y reseñas.",
      eyebrow: "Tu negocio en Google",
      title: "Que te encuentren",
      highlight: "en Google Maps.",
      intro:
        "Cuando alguien busca lo que vendes cerca, lo primero que ve es el mapa. Dejamos tu perfil de Google completo y bien presentado para que aparezcas y te escriban.",
      forWho: [
        "Tu negocio no aparece cuando lo buscan en Google.",
        "Tienes perfil, pero está incompleto o con datos viejos.",
        "Tu competencia sale primero en el mapa.",
        "Quieres más reseñas y no sabes cómo pedirlas.",
      ],
      includes: [
        { title: "Perfil creado o recuperado", text: "Te ayudamos a crear tu perfil o a recuperar el que ya existe." },
        { title: "Información completa", text: "Categorías, servicios, horarios, zona de atención y enlaces correctos." },
        { title: "Fotos que venden", text: "Selección y orden de fotos para que tu negocio se vea profesional." },
        { title: "Textos claros", text: "Una descripción con las palabras que usan tus clientes para buscarte." },
        { title: "Reseñas", text: "Un mensaje y un enlace listos para pedirles reseñas a tus clientes." },
        { title: "Conectado a tu página", text: "Tu perfil y tu página web enlazados el uno al otro." },
      ],
      price:
        "Es un servicio aparte de la página web y se cotiza según cómo esté tu perfil hoy. Pregúntanos sin compromiso.",
      minPrice: null,
      caseRef: null,
      calcLink: false,
      faq: [
        {
          q: "¿Necesito tener local?",
          a: "No. Si atiendes a domicilio o en una zona, el perfil puede mostrar tu área de servicio sin mostrar tu dirección.",
        },
        {
          q: "¿Cuánto tarda en aparecer?",
          a: "Google suele tardar unos días en verificar y publicar los cambios. Te acompañamos en el proceso.",
        },
        {
          q: "¿Garantizan que salga de primero?",
          a: "Nadie puede garantizar el primer lugar en Google. Lo que sí hacemos es dejar tu perfil completo y bien hecho, que es lo que más ayuda.",
        },
        {
          q: "¿Lo puedo combinar con la página web?",
          a: "Sí, y es lo ideal: tu perfil lleva a tu página y tu página refuerza tu perfil.",
        },
      ],
      waMessage: "Hola, vi la página de clew sobre el perfil de Google y quiero saber más.",
    },
  ],
  en: [
    {
      id: "web",
      slug: "websites",
      seoTitle: "Custom websites with no monthly fee for small businesses | clew",
      seoDescription:
        "We design your website with your brand, on your own domain and without paying Wix or Squarespace every month. From USD 500, in English and Spanish.",
      eyebrow: "Custom websites",
      title: "A website you own,",
      highlight: "with no monthly fee.",
      intro:
        "We design and build your website with your brand, connect it to your own domain, and it's yours. No generic templates and no paying a platform every month.",
      forWho: [
        "You pay Wix, Squarespace or GoDaddy every month and your site doesn't bring you clients.",
        "You don't have a website and your clients look for you on Google.",
        "Your site looks old or doesn't work well on phones.",
        "You want people to request quotes or bookings without messaging each one.",
      ],
      includes: [
        { title: "Designed with your brand", text: "Your colors, your logo and your tone. Made for your business, not pulled from a template." },
        { title: "Ready for Google", text: "Structure, speed and copy built so people can find you." },
        { title: "Works on phones", text: "Where most of your clients will see it." },
        { title: "Forms that work", text: "Quotes, bookings or contact requests that reach you organized." },
        { title: "On your own domain", text: "Under your business name and with no platform monthly fee." },
        { title: "User manual", text: "Everything explained at handoff, and we handle changes on WhatsApp." },
      ],
      price:
        "From USD 500, in a single payment. Every project is quoted based on what you need. The only fixed cost afterwards is your domain, which usually runs USD 10 to 15 a year.",
      minPrice: 500,
      caseRef: {
        title: "A DJ in Switzerland who no longer answers bookings by hand.",
        text: "A new site with step-by-step booking and a panel to accept or decline with one tap.",
      },
      calcLink: true,
      faq: [
        {
          q: "Do I really not pay a monthly fee?",
          a: "You don't pay a Wix-style platform. The only fixed cost is your domain, which usually runs USD 10 to 15 a year. If your site needs anything with a monthly cost, we tell you in the proposal before we start.",
        },
        {
          q: "Can I move my Wix or Squarespace site to one I own?",
          a: "Yes. We use your copy, your photos and your domain, and redesign it so it looks and works better.",
        },
        {
          q: "How long does it take?",
          a: "It depends on the size. A simple site is usually ready in a few weeks. The proposal includes the exact timeline.",
        },
        {
          q: "Can I make changes later?",
          a: "Yes. You get a user manual and we handle changes on WhatsApp.",
        },
      ],
      waMessage: "Hi, I saw clew's page about custom websites and I'd like to know more.",
    },
    {
      id: "systems",
      slug: "custom-systems",
      seoTitle: "Custom systems for small businesses: orders, inventory and invoices | clew",
      seoDescription:
        "We design systems made for your business to handle orders, inventory, quotes and invoices, built around how you already work. From USD 500.",
      eyebrow: "Custom systems",
      title: "A system built",
      highlight: "around how you already work.",
      intro:
        "If your business lives between spreadsheets, WhatsApp and paperwork, we design the tool that puts it in order. One app for your team, on desktop and on mobile.",
      forWho: [
        "Orders come in on WhatsApp and get lost between messages.",
        "Nobody knows for sure where each job stands.",
        "Quotes or invoices are made by hand, one by one.",
        "The business depends on one person remembering everything.",
      ],
      includes: [
        { title: "Orders", text: "Each order logged once, with its status visible to everyone." },
        { title: "Inventory", text: "Stock kept up to date and an alert before you run out." },
        { title: "Quotes and invoices", text: "With your prices and taxes already loaded, ready in minutes." },
        { title: "Reports", text: "What came in, what moved most and what's pending, no math needed." },
        { title: "Desktop and mobile", text: "Your team uses it from wherever they work." },
        { title: "Designed with you", text: "We start from how you work today and adjust it together every week." },
      ],
      price:
        "Every system is quoted based on what you need, starting at USD 500. The first conversation is free and you leave with a clear proposal: what gets built, what it costs and how long it takes.",
      minPrice: 500,
      caseRef: {
        title: "A jewelry workshop in Switzerland that stopped chasing its orders.",
        text: "One app for every order, from intake to delivery, with the invoice and Swiss VAT calculated automatically.",
      },
      calcLink: false,
      faq: [
        {
          q: "Do I have to change how I work?",
          a: "No. We design the system around how your team already works, so they use it from day one.",
        },
        {
          q: "Does it work with spreadsheets or what I already use?",
          a: "Yes. We start from what you already have and can bring in your spreadsheet data.",
        },
        {
          q: "Do I need to know about technology?",
          a: "No. If you can use WhatsApp, you can use what we build.",
        },
        {
          q: "Where do we start?",
          a: "With the process that takes up most of your time. Then, if you want, we move on to the next one.",
        },
      ],
      waMessage: "Hi, I saw clew's page about custom systems and I'd like to tell you how we work.",
    },
    {
      id: "google",
      slug: "google-business-profile",
      seoTitle: "Google Business Profile for your business: show up on Google Maps | clew",
      seoDescription:
        "We create and complete your business's Google profile so people find you on Google Maps and in nearby searches, with photos, hours, services and reviews.",
      eyebrow: "Your business on Google",
      title: "Get found",
      highlight: "on Google Maps.",
      intro:
        "When someone searches for what you sell nearby, the first thing they see is the map. We leave your Google profile complete and well presented so you show up and people reach out.",
      forWho: [
        "Your business doesn't show up when people search for it on Google.",
        "You have a profile, but it's incomplete or outdated.",
        "Your competitors show up first on the map.",
        "You want more reviews and don't know how to ask for them.",
      ],
      includes: [
        { title: "Profile created or recovered", text: "We help you create your profile or claim the one that already exists." },
        { title: "Complete information", text: "Categories, services, hours, service area and the right links." },
        { title: "Photos that sell", text: "Choosing and ordering photos so your business looks professional." },
        { title: "Clear copy", text: "A description using the words your clients search with." },
        { title: "Reviews", text: "A ready-made message and link to ask your clients for reviews." },
        { title: "Connected to your website", text: "Your profile and your website linked to each other." },
      ],
      price:
        "It's a separate service from the website and is quoted based on where your profile stands today. Ask us, no commitment.",
      minPrice: null,
      caseRef: null,
      calcLink: false,
      faq: [
        {
          q: "Do I need a physical location?",
          a: "No. If you serve clients at home or in an area, the profile can show your service area without showing your address.",
        },
        {
          q: "How long until it shows up?",
          a: "Google usually takes a few days to verify and publish changes. We guide you through it.",
        },
        {
          q: "Do you guarantee the top spot?",
          a: "Nobody can guarantee the top spot on Google. What we do is leave your profile complete and well made, which is what helps most.",
        },
        {
          q: "Can I combine it with a website?",
          a: "Yes, and that's ideal: your profile sends people to your site and your site strengthens your profile.",
        },
      ],
      waMessage: "Hi, I saw clew's page about Google Business Profile and I'd like to know more.",
    },
  ],
};

export const servicePath = (lang: Locale, slug: string) => (lang === "es" ? `/${slug}` : `/en/${slug}`);

export const findService = (lang: Locale, slug: string) => services[lang].find((s) => s.slug === slug);

export const serviceById = (lang: Locale, id: ServiceId) => services[lang].find((s) => s.id === id)!;

// Guías para posicionar a clew en Google y en buscadores con IA. Cada guía
// responde una búsqueda real y lleva al servicio que la resuelve. Los precios
// de plataformas son los mismos de la calculadora (calculator.ts, oct. 2026).
import type { Locale } from "./config";
import type { ServiceId } from "./services";

export type GuideId = "cost" | "maps" | "wix" | "nomonthly";

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][]; note?: string };

type Guide = {
  id: GuideId;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  dek: string;
  shortTitle: string;
  short: string;
  sections: { h: string; blocks: Block[] }[];
  faq: { q: string; a: string }[];
  service: ServiceId;
  calc: boolean;
  related: GuideId[];
};

export const guideLabels: Record<Locale, {
  hubTitle: string;
  hubHighlight: string;
  hubIntro: string;
  hubSeoTitle: string;
  hubSeoDescription: string;
  home: string;
  guides: string;
  updated: string;
  author: string;
  authorRole: string;
  faq: string;
  related: string;
  read: string;
  ctaTitle: string;
  ctaButton: string;
  calc: string;
  serviceLink: string;
  back: string;
}> = {
  es: {
    hubTitle: "Guías para negocios",
    hubHighlight: "que quieren crecer.",
    hubIntro: "Respuestas claras a lo que más nos preguntan: cuánto cuesta una página, cómo salir en Google Maps y qué plataforma conviene.",
    hubSeoTitle: "Guías para negocios pequeños: páginas web y Google | clew",
    hubSeoDescription: "Guías claras para dueños de negocio: cuánto cuesta una página web, cómo aparecer en Google Maps y si conviene Wix o una página propia.",
    home: "Inicio",
    guides: "Guías",
    updated: "Actualizada",
    author: "Por Cindy Lewis",
    authorRole: "diseñadora de producto y fundadora de clew",
    faq: "Preguntas frecuentes",
    related: "Sigue leyendo",
    read: "Leer la guía",
    ctaTitle: "¿Prefieres que lo hagamos por ti?",
    ctaButton: "Escríbenos por WhatsApp",
    calc: "Calcula cuánto llevas pagado por tu página",
    serviceLink: "Ver el servicio",
    back: "Volver al inicio",
  },
  en: {
    hubTitle: "Guides for businesses",
    hubHighlight: "that want to grow.",
    hubIntro: "Clear answers to what we get asked most: what a website costs, how to show up on Google Maps and which platform makes sense.",
    hubSeoTitle: "Guides for small businesses: websites and Google | clew",
    hubSeoDescription: "Clear guides for business owners: what a website costs, how to show up on Google Maps and whether Wix or a site you own makes more sense.",
    home: "Home",
    guides: "Guides",
    updated: "Updated",
    author: "By Cindy Lewis",
    authorRole: "product designer and founder of clew",
    faq: "Frequently asked questions",
    related: "Keep reading",
    read: "Read the guide",
    ctaTitle: "Would you rather we do it for you?",
    ctaButton: "Message us on WhatsApp",
    calc: "Calculate how much you've paid for your site",
    serviceLink: "See the service",
    back: "Back to home",
  },
};

export const guidesUpdated = "2026-11-12";

export const guides: Record<Locale, Guide[]> = {
  es: [
    {
      id: "nomonthly",
      slug: "pagina-web-sin-mensualidad",
      seoTitle: "Página web sin mensualidad para negocios latinos en EE. UU. (2026) | clew",
      seoDescription:
        "Qué incluye una página web propia de pago único, cuánto cuesta (desde USD 500), cuánto pagas el segundo año y qué preguntar antes de contratar. Para negocios latinos en Estados Unidos.",
      title: "Página web sin mensualidad para negocios latinos en Estados Unidos",
      dek: "Si pagas Wix, Squarespace o GoDaddy cada mes y quieres una página tuya, en español y en inglés, esto es lo que incluye, lo que cuesta y lo que tienes que preguntar antes de pagar.",
      shortTitle: "La respuesta corta",
      short:
        "Una página web sin mensualidad es una página propia que pagas una sola vez y queda a tu nombre. En clew empieza desde USD 500 en un solo pago, puede ir en español y en inglés, y después solo pagas el dominio, que suele costar entre USD 10 y 15 al año. No hay cuota mensual por tener la página en línea.",
      sections: [
        {
          h: "Qué es una página sin mensualidad",
          blocks: [
            {
              type: "p",
              text: "Con Wix, Squarespace o GoDaddy pagas un plan cada mes o cada año, y si dejas de pagar, la página se apaga. Una página propia se diseña para tu negocio, se conecta a tu dominio y no depende de un plan mensual. Pagas el diseño una vez y la página sigue siendo tuya.",
            },
          ],
        },
        {
          h: "Qué incluye una página de clew",
          blocks: [
            {
              type: "list",
              items: [
                "Diseño a la medida de tu negocio, con tus fotos, tus colores y tu logo.",
                "Versión para celular, que es donde te buscan la mayoría de tus clientes.",
                "Español e inglés, si tus clientes hablan los dos idiomas.",
                "Botón de WhatsApp y botón para llamarte con un toque.",
                "Formulario de cotización que te llega a tu correo.",
                "Conexión a tu dominio, o te ayudamos a comprar uno.",
                "Bases para Google: títulos, descripciones y datos de tu negocio bien puestos.",
                "Un manual con lo que puedes cambiar tú mismo.",
              ],
            },
            {
              type: "p",
              text: "El precio de cada proyecto depende de lo que necesites: cuántas secciones, si va en dos idiomas, si lleva reservas. Te lo decimos antes de empezar. El Perfil de Empresa en Google y un panel para manejar tus solicitudes son servicios aparte.",
            },
          ],
        },
        {
          h: "Cuánto pagas, año por año",
          blocks: [
            {
              type: "table",
              head: ["", "Página propia con clew", "Wix Core"],
              rows: [
                ["Año 1", "desde USD 500 + dominio", "USD 348"],
                ["Año 2", "solo el dominio (USD 10 a 15)", "USD 348"],
                ["Año 3", "solo el dominio (USD 10 a 15)", "USD 348"],
              ],
              note: "Wix Core a USD 29 al mes en plan anual, precio de referencia en EE. UU. consultado en octubre de 2026. Si tu página necesitara algo con costo mensual, como una tienda con pagos, te lo decimos antes de empezar.",
            },
          ],
        },
        {
          h: "Qué preguntar antes de pagarle a cualquiera",
          blocks: [
            {
              type: "list",
              items: [
                "¿El dominio queda a mi nombre?",
                "¿Cuánto voy a pagar el segundo año, y por qué?",
                "¿El precio incluye la versión en español y la de inglés?",
                "¿A dónde me llegan los mensajes del formulario?",
                "¿Qué puedo cambiar yo y cuánto cuestan los cambios que no puedo hacer?",
                "¿Qué pasa con lo que ya tengo en Google si me cambio?",
              ],
            },
            { type: "p", text: "Si una oferta es de pago único pero el hosting se paga cada mes, no es una página sin mensualidad." },
          ],
        },
        {
          h: "Cómo es el cambio si hoy tienes Wix",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "Revisamos tu página actual y lo que ya funciona.",
                "Diseñamos la nueva y la revisas antes de publicarla.",
                "Conectamos tu dominio a la página nueva.",
                "Redirigimos las direcciones viejas para que Google no pierda lo que ya tenías.",
                "Cancelas el plan de Wix cuando la nueva ya está en línea.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "¿De verdad no hay que pagar nada cada mes?",
          a: "Por tener la página en línea, no. Lo único fijo es el dominio, que se paga una vez al año. Si quieres algo con costo mensual, como una tienda con pagos, te lo decimos antes.",
        },
        {
          q: "¿Trabajan con negocios en cualquier estado?",
          a: "Sí. Todo se hace en línea y por WhatsApp, en español o en inglés, así que no importa en qué ciudad esté tu negocio.",
        },
        {
          q: "¿Cuánto se demora?",
          a: "Depende del tamaño de la página. Te damos la fecha de entrega cuando hablamos de tu proyecto, antes de empezar.",
        },
        {
          q: "¿Y si después quiero cambiar algo?",
          a: "Lo sencillo lo cambias tú con el manual. Los cambios más grandes los vemos por WhatsApp y te decimos el precio antes.",
        },
      ],
      service: "web",
      calc: true,
      related: ["cost", "wix"],
    },
    {
      id: "cost",
      slug: "cuanto-cuesta-una-pagina-web",
      seoTitle: "¿Cuánto cuesta una página web para un negocio pequeño? (2026) | clew",
      seoDescription:
        "Lo que cuesta al año una página en Wix, Squarespace o GoDaddy comparado con una página propia de pago único. Cifras de 2026 y qué conviene según tu negocio.",
      title: "¿Cuánto cuesta una página web para un negocio pequeño en 2026?",
      dek: "Sumamos lo que cobran las plataformas cada año y lo comparamos con una página propia, para que decidas con números y no con promesas.",
      shortTitle: "La respuesta corta",
      short:
        "Una página en Wix, Squarespace o GoDaddy cuesta entre USD 120 y 470 al año en sus planes más usados, y se paga mientras la tengas. Una página propia hecha a medida se paga una vez, desde USD 500, y después solo pagas el dominio, que suele costar entre USD 10 y 15 al año. Si piensas tener tu página más de dos años, la propia casi siempre sale más barata.",
      sections: [
        {
          h: "Lo que cobran las plataformas cada año",
          blocks: [
            { type: "p", text: "Estos son los planes que más usan los negocios pequeños, pagando el año completo:" },
            {
              type: "table",
              head: ["Plataforma y plan", "Al mes", "Al año"],
              rows: [
                ["GoDaddy Basic", "USD 9,99", "USD 120"],
                ["Squarespace Basic", "USD 16", "USD 192"],
                ["Wix Light", "USD 17", "USD 204"],
                ["Squarespace Core", "USD 23", "USD 276"],
                ["Wix Core", "USD 29", "USD 348"],
                ["Wix Business", "USD 39", "USD 468"],
              ],
              note: "Precios de referencia de planes anuales en EE. UU., consultados en octubre de 2026. Cambian seguido y algunos suben después del primer año.",
            },
          ],
        },
        {
          h: "Lo que casi nadie suma",
          blocks: [
            { type: "p", text: "El precio del plan no es todo. Revisa también:" },
            {
              type: "list",
              items: [
                "El dominio, que muchas plataformas regalan el primer año y después cobran aparte.",
                "El correo con el nombre de tu negocio, que suele ser un pago extra.",
                "Las apps o funciones extra para reservas, formularios o tienda.",
                "El precio de renovación, que puede ser más alto que el de promoción.",
              ],
            },
          ],
        },
        {
          h: "Cuánto cuesta una página propia",
          blocks: [
            {
              type: "p",
              text: "Una página propia se diseña para tu negocio, se conecta a tu dominio y es tuya. En clew una página para negocio empieza desde USD 500 en un solo pago, y cada proyecto se cotiza según lo que necesites: cuántas secciones, si lleva formulario de cotización o reservas, si va en dos idiomas.",
            },
            {
              type: "p",
              text: "Después de eso, lo único fijo es el dominio. Si tu página necesitara algo con costo mensual, como una tienda con pagos, te lo decimos antes de empezar.",
            },
          ],
        },
        {
          h: "La cuenta a tres años",
          blocks: [
            {
              type: "table",
              head: ["", "Wix Core", "Página propia"],
              rows: [
                ["Año 1", "USD 348", "USD 500 + dominio"],
                ["Año 2", "USD 348", "solo el dominio"],
                ["Año 3", "USD 348", "solo el dominio"],
                ["Total", "USD 1.044", "unos USD 530 a 545"],
              ],
              note: "Con dominio de USD 10 a 15 al año. Si dejas de pagar Wix, la página se apaga; la propia sigue siendo tuya.",
            },
          ],
        },
        {
          h: "Cuándo sí conviene una plataforma",
          blocks: [
            {
              type: "list",
              items: [
                "Si quieres cambiar tú mismo el diseño todas las semanas.",
                "Si estás probando una idea y no sabes si va a seguir en unos meses.",
                "Si vas a vender cientos de productos y necesitas una tienda completa desde el primer día.",
              ],
            },
            { type: "p", text: "Para un negocio que ya sabe lo que vende y quiere que lo encuentren, una página propia suele ser la mejor inversión." },
          ],
        },
      ],
      faq: [
        {
          q: "¿Una página propia es más difícil de actualizar?",
          a: "No tiene por qué. Te entregamos un manual con lo que puedes cambiar tú, y los cambios más grandes los vemos por WhatsApp.",
        },
        {
          q: "¿Qué pasa con mi dominio si me voy de Wix?",
          a: "El dominio es tuyo y se puede transferir. Si lo compraste hace menos de 60 días, hay que esperar a que se cumpla ese plazo para moverlo.",
        },
        {
          q: "¿Pierdo lo que ya tengo en Google si cambio de página?",
          a: "No, si el cambio se hace bien: se mantienen las direcciones importantes o se redirigen a las nuevas, y Google conserva lo que ya tenías.",
        },
      ],
      service: "web",
      calc: true,
      related: ["wix", "maps"],
    },
    {
      id: "maps",
      slug: "como-aparecer-en-google-maps",
      seoTitle: "Cómo aparecer en Google Maps con tu negocio: paso a paso (2026) | clew",
      seoDescription:
        "Cómo crear y completar tu Perfil de Empresa en Google para salir en Google Maps y en búsquedas cercanas. Gratis, paso a paso, y qué hacer si no tienes local.",
      title: "Cómo aparecer en Google Maps con tu negocio",
      dek: "Una guía paso a paso para crear tu Perfil de Empresa en Google, completarlo bien y empezar a salir cuando te buscan cerca.",
      shortTitle: "La respuesta corta",
      short:
        "Para aparecer en Google Maps necesitas un Perfil de Empresa en Google. Es gratis, se crea en business.google.com y se vuelve visible cuando Google lo verifica. Lo que más te ayuda a salir arriba es elegir bien la categoría, completar toda la información, subir fotos reales de tu trabajo y conseguir reseñas de tus clientes.",
      sections: [
        {
          h: "Paso a paso",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "Entra a business.google.com con la cuenta de Google que quieres usar para tu negocio.",
                "Busca el nombre de tu negocio. Si ya existe un perfil, reclámalo; si no, créalo.",
                "Escribe el nombre real de tu negocio, tal como aparece en tu letrero o tus facturas.",
                "Elige la categoría principal que mejor describe lo que haces. Después puedes sumar otras.",
                "Pon tu dirección si los clientes te visitan, o tu zona de servicio si vas tú a donde ellos.",
                "Agrega teléfono, WhatsApp, página web y horario.",
                "Escribe una descripción con las palabras que usan tus clientes para buscarte.",
                "Sube fotos reales: tu trabajo, tu equipo, tu local o tus productos.",
                "Verifica el perfil. Google suele pedir un video corto o un código, y puede tardar unos días.",
              ],
            },
          ],
        },
        {
          h: "Si trabajas desde casa o no tienes local",
          blocks: [
            {
              type: "p",
              text: "Puedes tener perfil igual. Al crearlo, di que no recibes clientes en una dirección y elige las ciudades o zonas donde trabajas. Google te pide la dirección para verificar, pero no la muestra al público.",
            },
          ],
        },
        {
          h: "Qué hace que salgas más arriba",
          blocks: [
            {
              type: "p",
              text: "Google se fija en tres cosas: qué tan bien coincide tu perfil con lo que la persona busca, qué tan cerca estás y qué tan conocido es tu negocio. Lo que está en tus manos:",
            },
            {
              type: "list",
              items: [
                "Perfil completo, sin campos vacíos.",
                "Reseñas reales, y responderlas todas, también las negativas.",
                "Fotos nuevas cada cierto tiempo.",
                "Los mismos datos en tu perfil, tu página web y tus redes.",
              ],
            },
          ],
        },
        {
          h: "Errores que te pueden frenar",
          blocks: [
            {
              type: "list",
              items: [
                "Meter palabras de más en el nombre, como \"Pintor barato Houston\". Va contra las normas de Google.",
                "Tener dos perfiles del mismo negocio.",
                "Un horario o teléfono distinto al de tu página web.",
                "Dejar reseñas sin responder.",
              ],
            },
          ],
        },
      ],
      faq: [
        { q: "¿Cuánto cuesta tener un perfil en Google?", a: "Nada. El Perfil de Empresa en Google es gratis." },
        {
          q: "¿Cuánto tarda en aparecer?",
          a: "Depende de la verificación. Normalmente son unos días, y después Google empieza a mostrarlo en las búsquedas cercanas.",
        },
        {
          q: "¿Necesito página web para tener perfil?",
          a: "No es obligatorio, pero ayuda: tu perfil lleva a tu página y tu página le confirma a Google que tu negocio es real.",
        },
      ],
      service: "google",
      calc: false,
      related: ["cost", "wix"],
    },
    {
      id: "wix",
      slug: "wix-o-pagina-propia",
      seoTitle: "¿Wix o página propia? Qué le conviene a tu negocio (2026) | clew",
      seoDescription:
        "Diferencias reales entre usar Wix o Squarespace y tener una página propia: costo, control, diseño, Google y cuándo conviene cada una.",
      title: "¿Wix o página propia? Qué le conviene a un negocio pequeño",
      dek: "Las dos sirven. La diferencia está en cuánto pagas con los años, quién es dueño de la página y qué tanto se parece a tu marca.",
      shortTitle: "La respuesta corta",
      short:
        "Wix conviene si quieres editar todo tú mismo y probar rápido. Una página propia conviene si quieres dejar de pagar mensualidad, que la página sea tuya y que se vea como tu marca y no como una plantilla. Para un negocio que ya sabe lo que vende, la página propia suele salir más barata desde el segundo año.",
      sections: [
        {
          h: "Comparación lado a lado",
          blocks: [
            {
              type: "table",
              head: ["", "Wix o Squarespace", "Página propia"],
              rows: [
                ["Cómo pagas", "Cada mes o cada año, mientras la tengas", "Una vez, más el dominio cada año"],
                ["Si dejas de pagar", "La página se apaga", "Sigue siendo tuya"],
                ["Diseño", "Plantillas que usan muchos negocios", "Hecho para tu marca"],
                ["Cambios", "Los haces tú en el editor", "Tú con un manual, o nosotros por WhatsApp"],
                ["Llevártela a otro lado", "No puedes exportar el diseño", "Es tuya y la puedes mover"],
              ],
            },
          ],
        },
        {
          h: "Cuándo conviene Wix",
          blocks: [
            {
              type: "list",
              items: [
                "Quieres hacerla tú mismo y tienes tiempo para aprender el editor.",
                "Estás probando una idea y no sabes si va a seguir.",
                "Necesitas una tienda grande con muchos productos desde el primer día.",
              ],
            },
          ],
        },
        {
          h: "Cuándo conviene una página propia",
          blocks: [
            {
              type: "list",
              items: [
                "Ya pagas una plataforma y sientes que tu página no te trae clientes.",
                "Quieres que se vea profesional y distinta a la de tu competencia.",
                "Prefieres pagar una vez y no cada mes.",
                "Quieres que alguien la diseñe pensando en cómo te contactan tus clientes.",
              ],
            },
          ],
        },
        {
          h: "Cómo cambiarte sin perder nada",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "Guardamos tus textos, fotos y lo que ya funciona.",
                "Diseñamos la página nueva y la revisas antes de publicarla.",
                "Conectamos tu dominio a la página nueva.",
                "Redirigimos las direcciones viejas para que Google no pierda lo que ya tenías.",
                "Cancelas el plan de la plataforma cuando la nueva ya está funcionando.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "¿Puedo seguir editando mi página propia?",
          a: "Sí. Te entregamos un manual con lo que puedes cambiar tú, y lo demás lo vemos por WhatsApp.",
        },
        {
          q: "¿Y si ya pagué el año de Wix?",
          a: "Planeamos el cambio para que la página nueva esté lista cuando se venza tu plan, así no pagas doble.",
        },
        {
          q: "¿Cuánto cuesta pasarme a una página propia?",
          a: "Una página propia empieza desde USD 500 en un solo pago, y cada proyecto se cotiza según lo que necesites.",
        },
      ],
      service: "web",
      calc: true,
      related: ["nomonthly", "cost"],
    },
  ],
  en: [
    {
      id: "nomonthly",
      slug: "website-with-no-monthly-fees",
      seoTitle: "A website with no monthly fees for small businesses in the US (2026) | clew",
      seoDescription:
        "What a one-time website includes, what it costs (from USD 500), what you pay in year two and what to ask before you hire anyone. In English and Spanish.",
      title: "A website with no monthly fees for your small business",
      dek: "If you pay Wix, Squarespace or GoDaddy every month and want a site you own, in English and Spanish, here is what it includes, what it costs and what to ask before you pay.",
      shortTitle: "The short answer",
      short:
        "A website with no monthly fees is a site you own, paid once. At clew it starts at USD 500 as a single payment, it can be in English and Spanish, and after that you only pay for your domain, usually USD 10 to 15 a year. There is no monthly fee to keep it online.",
      sections: [
        {
          h: "What a no-monthly-fee website is",
          blocks: [
            {
              type: "p",
              text: "With Wix, Squarespace or GoDaddy you pay a plan every month or every year, and if you stop paying, the site goes offline. A site you own is designed for your business, connected to your domain and doesn't depend on a monthly plan. You pay for the design once and the site stays yours.",
            },
          ],
        },
        {
          h: "What a clew website includes",
          blocks: [
            {
              type: "list",
              items: [
                "A design made for your business, with your photos, colors and logo.",
                "A mobile version, which is where most of your customers look you up.",
                "English and Spanish, if your customers speak both.",
                "A WhatsApp button and a one-tap call button.",
                "A quote form that arrives in your email.",
                "Connection to your domain, or help buying one.",
                "The basics for Google: titles, descriptions and your business details set up right.",
                "A manual with what you can change yourself.",
              ],
            },
            {
              type: "p",
              text: "Each project is priced on what you need: how many sections, two languages, bookings. You get the price before we start. Your Google Business Profile and a dashboard to manage requests are separate services.",
            },
          ],
        },
        {
          h: "What you pay, year by year",
          blocks: [
            {
              type: "table",
              head: ["", "Your own site with clew", "Wix Core"],
              rows: [
                ["Year 1", "from USD 500 + domain", "USD 348"],
                ["Year 2", "domain only (USD 10 to 15)", "USD 348"],
                ["Year 3", "domain only (USD 10 to 15)", "USD 348"],
              ],
              note: "Wix Core at USD 29 a month on an annual plan, US reference price checked in October 2026. If your site needed something with a monthly cost, like a store with payments, we tell you before we start.",
            },
          ],
        },
        {
          h: "What to ask before you pay anyone",
          blocks: [
            {
              type: "list",
              items: [
                "Is the domain in my name?",
                "What will I pay in year two, and why?",
                "Does the price include both English and Spanish?",
                "Where do form messages go?",
                "What can I change myself, and what do other changes cost?",
                "What happens to what I already have on Google if I switch?",
              ],
            },
            { type: "p", text: "If an offer is a one-time payment but hosting is billed monthly, it is not a no-monthly-fee website." },
          ],
        },
        {
          h: "How the switch works if you're on Wix today",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "We review your current site and what already works.",
                "We design the new one and you review it before it goes live.",
                "We connect your domain to the new site.",
                "We redirect old addresses so Google keeps what you already had.",
                "You cancel your Wix plan once the new site is live.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is there really nothing to pay every month?",
          a: "Not to keep the site online. The only fixed cost is the domain, paid once a year. If you want something with a monthly cost, like a store with payments, we tell you first.",
        },
        {
          q: "Do you work with businesses in any state?",
          a: "Yes. Everything happens online and on WhatsApp, in English or Spanish, so it doesn't matter where your business is.",
        },
        {
          q: "How long does it take?",
          a: "It depends on the size of the site. You get a delivery date when we talk about your project, before we start.",
        },
        {
          q: "What if I want to change something later?",
          a: "Simple things you change yourself with the manual. Bigger changes we handle on WhatsApp, and you get the price first.",
        },
      ],
      service: "web",
      calc: true,
      related: ["cost", "wix"],
    },
    {
      id: "cost",
      slug: "how-much-does-a-website-cost",
      seoTitle: "How much does a small business website cost? (2026) | clew",
      seoDescription:
        "What a Wix, Squarespace or GoDaddy site costs per year compared with a website you own for a one-time price. 2026 numbers and what makes sense for your business.",
      title: "How much does a small business website cost in 2026?",
      dek: "We added up what platforms charge every year and compared it with a site you own, so you can decide with numbers instead of promises.",
      shortTitle: "The short answer",
      short:
        "A Wix, Squarespace or GoDaddy site costs between USD 120 and 470 a year on their most popular plans, and you pay for as long as you keep it. A custom site you own is paid once, starting at USD 500, and afterwards you only pay for the domain, usually USD 10 to 15 a year. If you plan to keep your site for more than two years, owning it almost always costs less.",
      sections: [
        {
          h: "What platforms charge per year",
          blocks: [
            { type: "p", text: "These are the plans small businesses use most, paid yearly:" },
            {
              type: "table",
              head: ["Platform and plan", "Per month", "Per year"],
              rows: [
                ["GoDaddy Basic", "USD 9.99", "USD 120"],
                ["Squarespace Basic", "USD 16", "USD 192"],
                ["Wix Light", "USD 17", "USD 204"],
                ["Squarespace Core", "USD 23", "USD 276"],
                ["Wix Core", "USD 29", "USD 348"],
                ["Wix Business", "USD 39", "USD 468"],
              ],
              note: "Reference prices for annual plans in the US, checked in October 2026. They change often and some go up after the first year.",
            },
          ],
        },
        {
          h: "What almost nobody adds up",
          blocks: [
            {
              type: "list",
              items: [
                "The domain, often free the first year and charged separately after that.",
                "Email with your business name, usually an extra payment.",
                "Apps or add-ons for bookings, forms or a store.",
                "The renewal price, which can be higher than the promo price.",
              ],
            },
          ],
        },
        {
          h: "What a site you own costs",
          blocks: [
            {
              type: "p",
              text: "A site you own is designed for your business, connected to your domain, and it's yours. At clew a business website starts at USD 500 as a single payment, and every project is quoted based on what you need: how many sections, whether it has a quote or booking form, whether it's in two languages.",
            },
            {
              type: "p",
              text: "After that, the only fixed cost is the domain. If your site needed something with a monthly cost, like a store with payments, we tell you before we start.",
            },
          ],
        },
        {
          h: "The math over three years",
          blocks: [
            {
              type: "table",
              head: ["", "Wix Core", "Site you own"],
              rows: [
                ["Year 1", "USD 348", "USD 500 + domain"],
                ["Year 2", "USD 348", "domain only"],
                ["Year 3", "USD 348", "domain only"],
                ["Total", "USD 1,044", "about USD 530 to 545"],
              ],
              note: "With a USD 10 to 15 domain per year. If you stop paying Wix, the site goes offline; the one you own stays yours.",
            },
          ],
        },
        {
          h: "When a platform does make sense",
          blocks: [
            {
              type: "list",
              items: [
                "You want to change the design yourself every week.",
                "You're testing an idea and don't know if it will last.",
                "You'll sell hundreds of products and need a full store from day one.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is a site I own harder to update?",
          a: "It doesn't have to be. You get a manual for what you can change yourself, and bigger changes we handle on WhatsApp.",
        },
        {
          q: "What happens to my domain if I leave Wix?",
          a: "The domain is yours and can be transferred. If you bought it less than 60 days ago, you have to wait until that period ends to move it.",
        },
        {
          q: "Will I lose my Google rankings if I switch?",
          a: "Not if the switch is done right: important addresses are kept or redirected to the new ones, so Google keeps what you already had.",
        },
      ],
      service: "web",
      calc: true,
      related: ["wix", "maps"],
    },
    {
      id: "maps",
      slug: "how-to-show-up-on-google-maps",
      seoTitle: "How to get your business on Google Maps: step by step (2026) | clew",
      seoDescription:
        "How to create and complete your Google Business Profile to show up on Google Maps and in nearby searches. Free, step by step, and what to do without a storefront.",
      title: "How to get your business on Google Maps",
      dek: "A step-by-step guide to creating your Google Business Profile, filling it out properly and showing up when people search nearby.",
      shortTitle: "The short answer",
      short:
        "To show up on Google Maps you need a Google Business Profile. It's free, you create it at business.google.com, and it becomes visible once Google verifies it. What helps you rank higher is choosing the right category, completing every field, uploading real photos of your work and getting reviews from your clients.",
      sections: [
        {
          h: "Step by step",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "Go to business.google.com with the Google account you want to use for your business.",
                "Search for your business name. If a profile exists, claim it; if not, create it.",
                "Use your real business name, exactly as it appears on your sign or invoices.",
                "Pick the main category that best describes what you do. You can add more later.",
                "Add your address if clients visit you, or your service area if you go to them.",
                "Add phone, WhatsApp, website and hours.",
                "Write a description using the words your clients search with.",
                "Upload real photos: your work, your team, your place or your products.",
                "Verify the profile. Google usually asks for a short video or a code, and it can take a few days.",
              ],
            },
          ],
        },
        {
          h: "If you work from home or have no storefront",
          blocks: [
            {
              type: "p",
              text: "You can still have a profile. When you create it, say you don't serve clients at an address and choose the cities or areas where you work. Google asks for your address to verify it, but doesn't show it publicly.",
            },
          ],
        },
        {
          h: "What helps you rank higher",
          blocks: [
            {
              type: "p",
              text: "Google looks at three things: how well your profile matches the search, how close you are, and how well known your business is. What's in your hands:",
            },
            {
              type: "list",
              items: [
                "A complete profile with no empty fields.",
                "Real reviews, and replying to all of them, including negative ones.",
                "New photos every so often.",
                "The same details on your profile, your website and your social media.",
              ],
            },
          ],
        },
        {
          h: "Mistakes that hold you back",
          blocks: [
            {
              type: "list",
              items: [
                "Stuffing extra words into the name, like \"Cheap Painter Houston\". It's against Google's rules.",
                "Having two profiles for the same business.",
                "Hours or phone numbers that differ from your website.",
                "Leaving reviews unanswered.",
              ],
            },
          ],
        },
      ],
      faq: [
        { q: "How much does a Google Business Profile cost?", a: "Nothing. Google Business Profile is free." },
        {
          q: "How long until it shows up?",
          a: "It depends on verification. Usually a few days, and then Google starts showing it in nearby searches.",
        },
        {
          q: "Do I need a website to have a profile?",
          a: "It's not required, but it helps: your profile sends people to your site and your site confirms to Google that your business is real.",
        },
      ],
      service: "google",
      calc: false,
      related: ["cost", "wix"],
    },
    {
      id: "wix",
      slug: "wix-vs-your-own-website",
      seoTitle: "Wix or your own website? What's right for your business (2026) | clew",
      seoDescription:
        "The real differences between Wix or Squarespace and a website you own: cost, control, design, Google and when each one makes sense.",
      title: "Wix or your own website? What's right for a small business",
      dek: "Both work. The difference is how much you pay over the years, who owns the site and how much it looks like your brand.",
      shortTitle: "The short answer",
      short:
        "Wix makes sense if you want to edit everything yourself and move fast. Your own website makes sense if you want to stop paying monthly, own the site and have it look like your brand rather than a template. For a business that knows what it sells, owning the site usually costs less from the second year on.",
      sections: [
        {
          h: "Side by side",
          blocks: [
            {
              type: "table",
              head: ["", "Wix or Squarespace", "Your own website"],
              rows: [
                ["How you pay", "Monthly or yearly, for as long as you keep it", "Once, plus the domain each year"],
                ["If you stop paying", "The site goes offline", "It's still yours"],
                ["Design", "Templates many businesses use", "Made for your brand"],
                ["Changes", "You make them in the editor", "You with a manual, or us on WhatsApp"],
                ["Moving it elsewhere", "You can't export the design", "It's yours to move"],
              ],
            },
          ],
        },
        {
          h: "When Wix makes sense",
          blocks: [
            {
              type: "list",
              items: [
                "You want to build it yourself and have time to learn the editor.",
                "You're testing an idea and don't know if it will last.",
                "You need a large store with many products from day one.",
              ],
            },
          ],
        },
        {
          h: "When your own website makes sense",
          blocks: [
            {
              type: "list",
              items: [
                "You already pay a platform and feel your site doesn't bring clients.",
                "You want it to look professional and different from competitors.",
                "You'd rather pay once than every month.",
                "You want someone to design it around how your clients contact you.",
              ],
            },
          ],
        },
        {
          h: "How to switch without losing anything",
          blocks: [
            {
              type: "list",
              ordered: true,
              items: [
                "We keep your copy, photos and what already works.",
                "We design the new site and you review it before it goes live.",
                "We connect your domain to the new site.",
                "We redirect old addresses so Google keeps what you already had.",
                "You cancel the platform plan once the new site is running.",
              ],
            },
          ],
        },
      ],
      faq: [
        { q: "Can I still edit my own website?", a: "Yes. You get a manual for what you can change yourself, and we handle the rest on WhatsApp." },
        {
          q: "What if I already paid for a year of Wix?",
          a: "We plan the switch so the new site is ready when your plan expires, so you don't pay twice.",
        },
        {
          q: "How much does it cost to switch?",
          a: "A site you own starts at USD 500 as a single payment, and every project is quoted based on what you need.",
        },
      ],
      service: "web",
      calc: true,
      related: ["nomonthly", "cost"],
    },
  ],
};

export const guidesPath: Record<Locale, string> = { es: "/guias", en: "/en/guides" };
export const guidePath = (lang: Locale, slug: string) => `${guidesPath[lang]}/${slug}`;
export const findGuide = (lang: Locale, slug: string) => guides[lang].find((g) => g.slug === slug);
export const guideById = (lang: Locale, id: GuideId) => guides[lang].find((g) => g.id === id)!;

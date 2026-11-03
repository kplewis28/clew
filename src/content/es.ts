// Textos en español. Edita este archivo para cambiar cualquier copy; el
// inglés está en en.ts y debe tener exactamente la misma forma.
import type { IconKey } from "@/components/icons";

const icon = (key: IconKey) => key;

export const es = {
  ui: {
    homeAria: "ir al inicio",
    askAria: "Preguntar por WhatsApp sobre",
    solutionAria: "Ver cómo lo resolvemos",
    currentLabel: "ES",
    switchLabel: "EN",
    switchHref: "/en",
    switchAria: "Ver esta página en inglés",
    languageAria: "Idioma",
    privacyHref: "/privacidad",
  },

  business: {
    interestMessage: "Hola, me interesa saber más sobre: ",
    tagline: "Tecnología a la medida de tu negocio.",
    whatsappMessage: "Hola, vi la página de clew y me gustaría que me ayudaran con algo en mi negocio.",
  },

  seo: {
    title: "Sistemas a medida y páginas web para negocios pequeños | clew",
    description:
      "Diseñamos y construimos con IA herramientas a la medida de tu negocio: sistemas para tus procesos, páginas web propias y tu perfil en Google. Cuéntanos qué te quita tiempo y lo conversamos.",
    keywords: [
      "software a la medida para pequeñas empresas",
      "herramientas internas para pymes",
      "sistemas de pedidos e inventario a medida",
      "páginas web a medida sin mensualidad",
      "perfil de Google para negocios",
      "diseño y tecnología para negocios pequeños",
    ],
    ogAlt: "clew: procesos más simples, negocios más fuertes.",
  },

  cta: {
    primary: "Cuéntanos qué necesitas",
    short: "Hablemos",
    floatingLabel: "Escríbenos por WhatsApp",
  },


  // Intro sin voz: tipografía, fondos y golpes de sonido (components/HeroIntro.tsx).
  intro: {
    time: "11:47 p. m.",
    timeSub: "y sigues trabajando.",
    chaos: ["Pedidos.", "Mensajes.", "Cotizaciones.", "Cobros.", "Inventario.", "Facturas.", "Redes.", "Clientes.", "Citas.", "Todo a mano."],
    q1: "¿Y si tu negocio",
    q2: "funcionara sin ti?",
    soundOn: "Activar sonido",
    soundOff: "Silenciar",
    skip: "Saltar intro",
    audio: "/intro/clew-intro.mp3",
  },

  hero: {
    threadHintTouch: "Toca y arrastra el enredo",
    replay: "Ver intro",
    tangleWords: ["pedidos", "WhatsApp", "facturas", "Excel", "cotizaciones", "inventario", "citas", "cobros", "correos", "pendientes"],
    clewDef: { word: "clew", phon: "/klu/", text: "El hilo que te guía para salir de un laberinto." },
    threadHint: "Pasa el cursor por el enredo",
    live: {
      time: "11:47 p. m.",
      badge: "Mientras descansas",
      title: "Funcionando",
      note: "Ejemplo ilustrativo de un negocio con clew.",
      auto: "Automático",
      kpis: [
        { label: "Pedidos hoy", start: 14 },
        { label: "Mensajes respondidos", start: 37 },
        { label: "Pagos recibidos", start: 9 },
      ],
      events: [
        { icon: "order", title: "Nuevo pedido registrado", detail: "2 cajas · entrega el jueves", kpi: 0 },
        { icon: "chat", title: "WhatsApp respondido", detail: "“¿Tienen domicilio?” · en 3 segundos", kpi: 1 },
        { icon: "quote", title: "Cotización enviada", detail: "Remodelación de cocina · PDF listo", kpi: -1 },
        { icon: "paid", title: "Pago recibido", detail: "Factura 0142 · conciliada", kpi: 2 },
        { icon: "date", title: "Cita agendada", detail: "Mañana a las 10:00 · recordatorio programado", kpi: -1 },
        { icon: "stock", title: "Inventario bajo", detail: "Quedan 4 · pedido al proveedor listo", kpi: -1 },
        { icon: "chat", title: "WhatsApp respondido", detail: "“¿Cuánto cuesta el envío?”", kpi: 1 },
        { icon: "review", title: "Reseña solicitada", detail: "Mensaje enviado al cliente", kpi: -1 },
      ],
    },
    eyebrow: "Tecnología para negocios pequeños",
    titleStart: "Deja de hacerlo",
    titleMid: "todo",
    titleHighlight: "a mano.",
    subtitle:
      "Diseñamos páginas web y sistemas a la medida de tu negocio, para que recuperes tu tiempo.",
    note: "Nos escribes por WhatsApp y lo conversamos con calma.",
    casesLink: "Ver casos reales",
    cta: "Cuéntanos qué te quita tiempo",
    ctaMessage: "Hola, vi la página de clew. Lo que más tiempo me quita en mi negocio es: ",
    trustLine: "La primera conversación no tiene costo · Casos reales en Suiza",
    photoAlt: "Imagen ilustrativa creada con IA: una consultora conversa con el dueño de un negocio en una mesa de trabajo",
    chips: [
      { title: "Escríbenos", text: "Lo que necesites, lo hablamos por WhatsApp" },
      { title: "Pensado por área", text: "Ventas, bodega, cobros o lo que más pese" },
      { title: "Te acompañamos", text: "Desde la idea hasta que tu equipo lo usa" },
    ],
  },

  marquee: ["Páginas web", "Sistemas a medida", "Perfil de Google", "Herramientas propias"],

  statement: {
    title: "Tus procesos son únicos.",
    highlight: "Las soluciones también deberían serlo.",
    text: "La forma en que tu empresa recibe pedidos, maneja la bodega o cobra a sus clientes no se parece a la de nadie más. Ningún programa genérico la va a entender. Por eso miro cada área por separado, entiendo cómo trabaja tu equipo ahí y diseño la solución que esa área necesita para funcionar mejor.",
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

  services: {
    title: "Lo que hacemos",
    highlight: "por tu negocio.",
    subtitle: "Empezamos por lo que más te urge.",
    cta: "Preguntar por WhatsApp",
    items: [
      {
        icon: icon("systems"),
        title: "Sistemas a medida",
        text: "Pedidos, inventario, cotizaciones y reportes, hechos a cómo ya trabajas.",
      },
      {
        icon: icon("web"),
        title: "Páginas web a medida",
        text: "Con tu marca, en tu propio dominio y sin mensualidad.",
      },
      {
        icon: icon("maps"),
        title: "Tu negocio en Google",
        text: "Tu perfil listo para que te encuentren en Google Maps, con fotos, horarios y reseñas.",
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
    title: "De la primera conversación",
    highlight: "a tu equipo usándolo.",
    items: [
      {
        title: "Te escuchamos",
        meta: "Por WhatsApp, sin costo",
        text: "Nos cuentas cómo trabajas hoy y qué te quita tiempo. Te mostramos un bosquejo con la propuesta.",
      },
      {
        title: "Construimos contigo",
        meta: "Plazo acordado",
        text: "Te mostramos avances cada semana y lo ajustamos juntos.",
      },
      {
        title: "Tu equipo lo usa desde el día uno",
        meta: "Entrega",
        text: "Te lo entregamos listo y fácil de usar, y seguimos disponibles para lo que necesites.",
      },
    ],
  },


  builds: {
    title: "Una solución para cada área",
    highlight: "que lo necesite.",
    subtitle:
      "Estos son ejemplos de sistemas a medida: herramientas internas diseñadas área por área sobre cómo ya trabaja tu equipo. Empezamos por la que más tiempo les quita.",
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

  // Casos reales con permiso de cada cliente. Stone Art: el rediseño aún no
  // está publicado, por eso no dice "en vivo".
  cases: {
    kicker: "Casos reales",
    title: "Lo que construimos",
    highlight: "y lo que cambió.",
    subtitle: "Desliza para ver cada caso.",
    labels: {
      before: "Antes",
      after: "Ahora",
      watch: "Ver video",
      prev: "Caso anterior",
      next: "Caso siguiente",
      permission: "Clientes reales, mostrados con su permiso. Las tomas usan datos de ejemplo.",
      visit: "Visitar",
      close: "Cerrar el video",
      sliderAria: "Desliza para comparar la página de antes con la nueva",
      compare: "Ver qué cambió",
      sliderHint: "Desliza para comparar la página de antes con la nueva.",
    },
    items: [
      {
        id: "fraudj",
        live: true,
        status: "En vivo",
        tags: ["Página web", "Reservas", "Suiza"],
        title: "Una DJ en Suiza que",
        highlight: "ya no contesta reservas a mano.",
        text: "Nueva página con reservas paso a paso y un panel para aceptar o rechazar.",
        compare: null,
        video: {
          src: "/casos/fraudj/experiencia.mp4",
          poster: "/casos/fraudj/experiencia.jpg",
          alt: "Recorrido por la página de Frau DJ en computador y celular: la reserva en 5 pasos y el panel donde ella acepta la solicitud",
          caption: "Así reserva el cliente y así responde ella, en computador y celular.",
        },
        before: [
          "Los clientes llenaban un formulario simple.",
          "Cada solicitud le llegaba como un correo.",
          "Tenía que escribir o llamar a cada cliente para decirle sí o no.",
        ],
        after: [
          "El cliente reserva en 5 pasos, desde el celular o el computador.",
          "Cada solicitud llega ordenada a su panel privado.",
          "Acepta o rechaza con un toque, con la respuesta ya escrita.",
        ],
        results: [
          { value: "5 pasos", label: "para reservar" },
          { value: "1 toque", label: "para responder" },
          { value: "Sin llamadas", label: "para decir sí o no" },
        ],
        reel: { src: "/casos/fraudj/reel.mp4", poster: "/casos/fraudj/reel.jpg", meta: "30 s" },
        link: { href: "https://fraudj.ch", label: "fraudj.ch" },
        note: "Mostrado con permiso de Frau DJ. Las tomas usan datos de ejemplo.",
      },
      {
        id: "stone-art",
        live: false,
        status: "Rediseño listo",
        tags: ["Página web", "Taller de engaste", "Suiza"],
        title: "Un engastador en Suiza que",
        highlight: "Google no podía encontrar.",
        text: "Rediseño con su mismo video y sus textos, listo para que los compradores pidan cotización.",
        compare: {
          before: "/casos/stone-art/antes.jpg",
          after: "/casos/stone-art/despues.jpg",
          beforeAlt: "Página anterior de Stone Art Precision: video en gris con los botones de YouTube encima",
          afterAlt: "Página nueva de Stone Art Precision: titular claro, su video del taller y botón para pedir cotización",
        },
        video: {
          src: "/casos/stone-art/experiencia.mp4",
          poster: "/casos/stone-art/experiencia.jpg",
          alt: "Recorrido por la página nueva de Stone Art Precision en computador",
          caption: "Recorrido por la página nueva.",
        },
        before: [
          "Una etiqueta oculta le pedía a Google no mostrar la página.",
          "El video principal salía gris, con los botones de YouTube encima.",
          "Un recuadro vacío donde antes había un video.",
          "Un formulario genérico, sin forma de enviar fotos ni archivos.",
        ],
        after: [
          "Lista para aparecer en Google, con mapa del sitio.",
          "Su propio video y sus textos, presentados como una marca de lujo.",
          "Cada tipo de engaste dibujado como un plano técnico.",
          "En el celular, botón para llamar y formulario para cotizar con fotos o archivos CAD.",
        ],
        results: [
          { value: "2 idiomas", label: "alemán e inglés" },
          { value: "6 engastes", label: "en dibujos técnicos" },
          { value: "Cotiza", label: "con fotos o CAD" },
        ],
        reel: { src: "/casos/stone-art/reel.mp4", poster: "/casos/stone-art/reel.jpg", meta: "25 s" },
        link: null,
        note: "Mostrado con permiso del cliente. El rediseño está listo y aún no se ha publicado.",
      },
      {
        id: "ordenes",
        live: true,
        status: "En uso",
        tags: ["Sistema a medida", "Suiza"],
        title: "Un taller de joyería que",
        highlight: "dejó de perseguir sus órdenes.",
        text: "Una app para todos sus pedidos, desde que entran hasta que se entregan.",
        compare: null,
        video: {
          src: "/casos/app/experiencia.mp4",
          poster: "/casos/app/experiencia.jpg",
          alt: "Recorrido por la app de órdenes en computador y celular, con datos de ejemplo",
          caption: "La app de órdenes en computador y celular, con datos de ejemplo.",
        },
        before: [],
        after: [],
        results: [
          { value: "1 sola app", label: "para órdenes, seguimiento y facturas" },
          { value: "IVA automático", label: "impuesto suizo y redondeo, solos" },
          { value: "Desde el celular", label: "cada orden se actualiza en el puesto" },
        ],
        reel: { src: "/casos/app/reel.mp4", poster: "/casos/app/reel.jpg", meta: "32 s" },
        link: null,
        note: "",
      },
    ],
  },

  trust: {
    title: "Antes de pagar,",
    highlight: "ya sabes qué vas a recibir.",
    items: [
      { icon: "sketch", title: "Ves un bosquejo primero", text: "Sin costo y sin compromiso." },
      { icon: "price", title: "Pago único, sin mensualidad", text: "Desde USD 500, según lo que necesites." },
      { icon: "domain", title: "En tu propio dominio", text: "Con el nombre de tu negocio." },
      { icon: "direct", title: "Trato directo", text: "Hablas con quien diseña tu proyecto." },
      { icon: "languages", title: "En español e inglés", text: "Para todos tus clientes." },
      { icon: "real", title: "Trabajo real", text: "Clientes reales, con su permiso." },
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

  products: {
    title: "Lo que ya construimos",
    highlight: "y puedes usar hoy.",
    subtitle:
      "Herramientas propias que puedes probar ya.",
    items: [
      {
        tag: "App",
        title: "ProfitPeek",
        text: "Para quien tiene varios negocios a la vez: ves cuánto entra, cuánto sale y cuánto te deja cada uno, en un solo lugar. Tiene plan gratis.",
        cta: "Probar ProfitPeek",
        href: "https://profitpeek.site",
        image: "/herramientas/profitpeek.webp",
        imageAlt: "Pantalla de ProfitPeek con datos de ejemplo: lo que entró, lo que salió y cuánto deja cada negocio",
        address: "profitpeek.site",
        external: true,
      },
      {
        tag: "Herramienta gratis",
        title: "¿Cuánto te cuesta tu página al año?",
        text: "Elige tu plataforma y tu plan, y mira cuánto llevas pagado por tu página y cuánto ahorrarías con una propia.",
        cta: "Calcular ahora",
        href: "/calculadora",
        image: "/herramientas/calculadora.webp",
        imageAlt: "Resultado de la calculadora: cuánto cuesta una página al año y cuánto se ahorra con una propia",
        address: "clew / calculadora",
        external: false,
      },
    ],
  },

about: {
    kicker: "Quién está detrás",
    name: "Cindy Lewis,",
    role: "diseñadora de producto.",
    badge: "Fundadora de clew",
    photo: "/cindy-lewis.jpg",
    photoAlt: "Cindy Lewis, fundadora de clew, con sus gafas verdes, asomándose detrás de su portátil",
    lines: [
      "Lleva más de 5 años diseñando productos digitales, entre ellos plataformas de inteligencia artificial. Fundó clew para llevar ese mismo nivel de diseño a los negocios pequeños.",
      "Ella diseña y construye cada proyecto, y es con ella con quien hablas desde el primer mensaje.",
    ],
    stats: [
      { value: "5+", label: "años diseñando productos digitales" },
      { value: "1 a 1", label: "hablas directo con quien diseña tu proyecto" },
      { value: "3", label: "casos reales en Suiza" },
    ],
    quote: "“Primero entiendo cómo trabajas. Después diseño.”",
  },



    faq: {
    title: "Lo que casi todos preguntan antes de empezar.",
    items: [
      {
        question: "¿Mi negocio es muy pequeño para esto?",
        answer:
          "No. Entre más pequeño el equipo, más pesa cada hora que se va en tareas repetitivas. Empezamos por una sola cosa: la que más tiempo te quita.",
      },
      {
        question: "¿Y si no sé exactamente qué necesito?",
        answer:
          "Es lo más normal. Para eso es la primera conversación: nos cuentas cómo trabajas hoy y qué te frena, y te proponemos por dónde empezar.",
      },
      {
        question: "¿Necesito saber de tecnología?",
        answer:
          "No. Si sabes usar WhatsApp, sabes usar lo que construimos. Te lo entregamos funcionando y cualquier duda la resolvemos por WhatsApp.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Cada proyecto se cotiza según lo que necesites, desde USD 500. La primera conversación no tiene costo y sales con una propuesta clara: qué se construye, cuánto cuesta y cuánto demora.",
      },
      {
        question: "¿Qué pasa si algo falla?",
        answer:
          "Nos escribes por WhatsApp y lo revisamos contigo. El acompañamiento después de la entrega queda por escrito en la propuesta, para que sepas exactamente con qué cuentas.",
      },
      {
        question: "¿Funciona con lo que ya uso?",
        answer:
          "Sí. Partimos de lo que ya tienes: tu WhatsApp, tu Excel, tu sistema de facturación. Tu equipo no tiene que aprender a trabajar de otra forma.",
      },
      {
        question: "¿Cómo es lo de la página web?",
        answer:
          "La diseñamos con los colores, el logo y el tono de tu marca, la conectamos a tu propio dominio y no pagas mensualidades tipo Wix. Te entregamos un manual de uso y los cambios los vemos por WhatsApp.",
      },
    ],
  },


  consent: {
    before: "Al escribirnos aceptas el tratamiento de tus datos según el ",
    link: "aviso de privacidad",
    after: ".",
  },

  finalCta: {
    kicker: "Te escuchamos",
    title: "Queremos saber",
    highlight: "qué te gustaría dejar de hacer a mano.",
    text: "Elige lo que más te pesa y nos llega por WhatsApp. Te respondemos con calma y sin compromiso.",
    options: ["Responder los mismos mensajes", "Hacer cotizaciones", "Llevar pedidos e inventario", "Perseguir pagos", "Agendar citas", "Conseguir clientes con mi página"],
    hint: "Puedes elegir varias, o escribirnos lo que sea.",
    button: "Contárselo a clew",
    message: "Hola, vi la página de clew. Me gustaría dejar de hacer a mano: ",
    empty: "Hola, vi la página de clew y quiero contarles algo de mi negocio.",
  },


  footer: {
    rights: "Todos los derechos reservados.",
    navTitle: "Explora",
    nav: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Casos reales", href: "#casos" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
      { label: "Calculadora", href: "/calculadora" },
    ],
    contactTitle: "Contacto",
    contactCta: "Escríbenos por WhatsApp",
    languageTitle: "Idioma",
    privacy: "Aviso de privacidad",
    aiNote: "La foto principal es una imagen ilustrativa creada con IA.",
  },
};

export type Content = typeof es;

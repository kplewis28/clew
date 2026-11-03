// English copy. Same shape as es.ts (TypeScript flags any missing key).
import type { Content } from "./es";

export const en: Content = {
  ui: {
    homeAria: "back to top",
    askAria: "Ask on WhatsApp about",
    solutionAria: "See how we solve it",
    currentLabel: "EN",
    switchLabel: "ES",
    switchHref: "/",
    switchAria: "Ver esta página en español",
    languageAria: "Language",
    privacyHref: "/en/privacidad",
  },

  business: {
    interestMessage: "Hi, I'd like to know more about: ",
    tagline: "Technology made to fit your business.",
    whatsappMessage: "Hi, I saw the clew website and I'd like your help with something in my business.",
  },

  seo: {
    title: "Custom systems and websites for small businesses | clew",
    description:
      "We design and build, with AI, tools made for your business: systems for your processes, websites you own and your Google profile. Tell us what takes up your time and we'll talk it through.",
    keywords: [
      "custom software for small businesses",
      "internal tools for small businesses",
      "custom order and inventory systems",
      "custom websites with no monthly fee",
      "Google Business Profile setup",
      "design and technology for small businesses",
    ],
    ogAlt: "clew: simpler processes, stronger businesses.",
  },

  cta: {
    primary: "Tell us what you need",
    short: "Let's talk",
    floatingLabel: "Message us on WhatsApp",
  },


  // Intro with no voice: type, backgrounds and sound hits (same as es.ts).
  intro: {
    time: "11:47 p.m.",
    timeSub: "and you're still working.",
    chaos: ["Orders.", "Messages.", "Quotes.", "Payments.", "Inventory.", "Invoices.", "Social.", "Clients.", "Bookings.", "All by hand."],
    q1: "What if your business",
    q2: "ran without you?",
    soundOn: "Turn sound on",
    soundOff: "Mute",
    skip: "Skip intro",
    audio: "/intro/clew-intro.mp3",
  },

  hero: {
    threadHintTouch: "Touch and drag the tangle",
    replay: "Watch intro",
    tangleWords: ["orders", "WhatsApp", "invoices", "Excel", "quotes", "inventory", "bookings", "payments", "emails", "to-dos"],
    clewDef: { word: "clew", phon: "/kloo/", text: "The thread that guides you out of a maze." },
    threadHint: "Run your cursor through the tangle",
    live: {
      time: "11:47 p.m.",
      badge: "While you rest",
      title: "Running",
      note: "Illustrative example of a business running with clew.",
      auto: "Automatic",
      kpis: [
        { label: "Orders today", start: 14 },
        { label: "Messages answered", start: 37 },
        { label: "Payments received", start: 9 },
      ],
      events: [
        { icon: "order", title: "New order logged", detail: "2 boxes · delivery Thursday", kpi: 0 },
        { icon: "chat", title: "WhatsApp answered", detail: "“Do you deliver?” · in 3 seconds", kpi: 1 },
        { icon: "quote", title: "Quote sent", detail: "Kitchen remodel · PDF ready", kpi: -1 },
        { icon: "paid", title: "Payment received", detail: "Invoice 0142 · reconciled", kpi: 2 },
        { icon: "date", title: "Appointment booked", detail: "Tomorrow at 10:00 · reminder scheduled", kpi: -1 },
        { icon: "stock", title: "Low stock", detail: "4 left · supplier order ready", kpi: -1 },
        { icon: "chat", title: "WhatsApp answered", detail: "“How much is shipping?”", kpi: 1 },
        { icon: "review", title: "Review requested", detail: "Message sent to the customer", kpi: -1 },
      ],
    },
    eyebrow: "Technology for small businesses",
    titleStart: "Stop doing",
    titleMid: "everything",
    titleHighlight: "by hand.",
    subtitle:
      "We design websites and systems made for your business, so you get your time back.",
    note: "Message us on WhatsApp and we'll talk it through.",
    casesLink: "See real cases",
    cta: "Tell us what slows you down",
    ctaMessage: "Hi, I saw the clew website. What takes up most of my time in my business is: ",
    trustLine: "The first conversation is free · Real cases in Switzerland",
    photoAlt: "Illustrative AI-generated image: a consultant talks with a business owner at a work table",
    chips: [
      { title: "Write to us", text: "Whatever you need, we talk it over on WhatsApp" },
      { title: "Designed by area", text: "Sales, warehouse, billing or whatever weighs most" },
      { title: "We're with you", text: "From the idea until your team uses it" },
    ],
  },

  marquee: ["Websites", "Custom systems", "Google profile", "Our own tools"],

  statement: {
    title: "Your processes are unique.",
    highlight: "Your solutions should be too.",
    text: "The way your company takes orders, runs its warehouse or bills its clients is like no one else's. No generic software will understand it. So I look at each area on its own, learn how your team works there and design the solution that area needs to work better.",
    pillars: [
      {
        icon: "automate",
        title: "Automate",
        text: "What repeats every day stops being done by hand.",
      },
      {
        icon: "optimize",
        title: "Optimize",
        text: "Every process in order, with fewer steps and fewer mistakes.",
      },
      {
        icon: "grow",
        title: "Grow",
        text: "Serve more clients without hiring just for data entry.",
      },
    ],
  },

  services: {
    title: "What we do",
    highlight: "for your business.",
    subtitle: "We start with what you need most.",
    cta: "Ask on WhatsApp",
    items: [
      {
        icon: "systems",
        title: "Custom systems",
        text: "Orders, inventory, quotes and reports, built around how you already work.",
      },
      {
        icon: "web",
        title: "Custom websites",
        text: "With your brand, on your own domain and with no monthly fee.",
      },
      {
        icon: "maps",
        title: "Your business on Google",
        text: "Your profile ready so people find you on Google Maps, with photos, hours and reviews.",
      },
    ],
  },


  audience: {
    label: "Made for businesses like",
    items: ["Distributors", "Retail shops", "Workshops", "Clinics", "Agencies", "Offices"],
  },

  problem: {
    title: "Your business grew.",
    highlight: "Your processes are still in Excel, WhatsApp and on paper.",
    items: [
      {
        icon: "repeat",
        label: "Manual work",
        image: "/problema-manual.jpg",
        imageAlt: "Hands going through paper invoices with a calculator and a phone",
        title: "Everything is done by hand",
        text: "Copying data from one place to another, filling in the same spreadsheets, sending the same messages. Every day, all over again.",
      },
      {
        icon: "scattered",
        label: "Information",
        image: "/problema-regada.jpg",
        imageAlt: "Woman checking her phone next to a notebook and her laptop",
        title: "Information is all over the place",
        text: "Some of it in Excel, some in WhatsApp and some in someone's head. When that person is out, nobody knows where anything stands.",
      },
      {
        icon: "error",
        label: "Mistakes",
        image: "/problema-errores.jpg",
        imageAlt: "Worker checking stock on warehouse shelves",
        title: "Small slips get expensive",
        text: "An order written down wrong, a quote that never went out, a payment nobody followed up on. Small mistakes that end up costing you clients.",
      },
    ],
  },

  steps: {
    title: "From our first conversation",
    highlight: "to your team using it.",
    items: [
      {
        title: "We listen",
        meta: "On WhatsApp, at no cost",
        text: "You tell us how you work today and what takes up your time. We show you a sketch with the proposal.",
      },
      {
        title: "We build it with you",
        meta: "Agreed timeline",
        text: "We show you progress every week and adjust it together.",
      },
      {
        title: "Your team uses it from day one",
        meta: "Handoff",
        text: "We hand it over ready and easy to use, and we stay available for whatever you need.",
      },
    ],
  },


  builds: {
    title: "A solution for every area",
    highlight: "that needs one.",
    subtitle:
      "These are examples of custom systems: internal tools designed area by area around how your team already works. We start with the one that eats up most of their time.",
    items: [
      {
        icon: "orders",
        title: "Automatic order logging",
        text: "Every order or request that comes in on WhatsApp gets logged with the client, details and date.",
      },
      {
        icon: "inventory",
        title: "Inventory control",
        text: "Stock updates with every sale, and you get an alert before you run out.",
      },
      {
        icon: "quote",
        title: "Quotes in minutes",
        text: "Your prices and discounts already loaded, ready to send without putting anything together by hand.",
      },
      {
        icon: "reminder",
        title: "Client reminders",
        text: "Payment, appointment and delivery reminders that go out on their own, on time and in your name.",
      },
      {
        icon: "board",
        title: "One place for your team",
        text: "Every job with its owner and status, visible to everyone. No more asking around in the group chat.",
      },
      {
        icon: "report",
        title: "Automatic reports",
        text: "Every week you get what you sold, what moved most and what's still pending.",
      },
    ],
  },

  benefits: {
    title: "A company that's great to work for,",
    highlight: "and that responds faster.",
    items: [
      {
        title: "Your team works with less stress",
        text: "Less data entry and fewer fires to put out. People focus on clients and on the work that actually needs their judgment.",
      },
      {
        title: "You see everything without asking",
        text: "Orders, pending work and this month's numbers in one place, always up to date. You decide with facts, not guesses.",
      },
      {
        title: "Your business doesn't depend on one person",
        text: "The process lives in the tool, not in someone's memory. If someone is out, the work keeps moving.",
      },
    ],
  },

  // Real cases shown with each client's permission (same as es.ts).
  cases: {
    kicker: "Real cases",
    title: "What we built",
    highlight: "and what changed.",
    subtitle: "Swipe to see each case.",
    labels: {
      before: "Before",
      after: "Now",
      watch: "Watch video",
      prev: "Previous case",
      next: "Next case",
      permission: "Real clients, shown with their permission. Walkthroughs use sample data.",
      visit: "Visit",
      close: "Close the video",
      sliderAria: "Slide to compare the old page with the new one",
      compare: "See what changed",
      sliderHint: "Slide to compare the old page with the new one.",
    },
    items: [
      {
        id: "fraudj",
        live: true,
        status: "Live",
        tags: ["Website", "Bookings", "Switzerland"],
        title: "A DJ in Switzerland who",
        highlight: "no longer answers bookings by hand.",
        text: "A new website with step-by-step booking and a dashboard to accept or decline.",
        compare: null,
        video: {
          src: "/casos/fraudj/experiencia.mp4",
          poster: "/casos/fraudj/experiencia.jpg",
          alt: "Walkthrough of the Frau DJ website on desktop and mobile: the 5-step booking and the dashboard where she accepts the request",
          caption: "How clients book and how she replies, on desktop and mobile.",
        },
        before: [
          "Clients filled out a simple form.",
          "Every request reached her as an email.",
          "She had to write or call each client to say yes or no.",
        ],
        after: [
          "Clients book in 5 steps, on their phone or computer.",
          "Every request lands neatly in her private dashboard.",
          "She accepts or declines with one tap, with the reply already written.",
        ],
        results: [
          { value: "5 steps", label: "to book" },
          { value: "1 tap", label: "to reply" },
          { value: "No calls", label: "to say yes or no" },
        ],
        reel: { src: "/casos/fraudj/reel-en.mp4", poster: "/casos/fraudj/reel-en.jpg", meta: "30 s" },
        link: { href: "https://fraudj.ch", label: "fraudj.ch" },
        note: "Shown with Frau DJ's permission. The walkthrough uses sample data.",
      },
      {
        id: "stone-art",
        live: false,
        status: "Redesign ready",
        tags: ["Website", "Stone setting", "Switzerland"],
        title: "A stone setter in Switzerland",
        highlight: "Google couldn't find.",
        text: "A redesign with his own video and copy, ready for buyers to request quotes.",
        compare: {
          before: "/casos/stone-art/antes.jpg",
          after: "/casos/stone-art/despues.jpg",
          beforeAlt: "Old Stone Art Precision page: grey video with YouTube buttons on top",
          afterAlt: "New Stone Art Precision page: clear headline, his workshop video and a quote button",
        },
        video: {
          src: "/casos/stone-art/experiencia-en.mp4",
          poster: "/casos/stone-art/experiencia-en.jpg",
          alt: "Walkthrough of the new Stone Art Precision website on desktop",
          caption: "A walk through the new page.",
        },
        before: [
          "A hidden tag told Google not to show the page.",
          "The main video was grey, with YouTube buttons on top.",
          "An empty box where a video used to be.",
          "A generic form, with no way to send photos or files.",
        ],
        after: [
          "Ready to show up on Google, with a sitemap.",
          "His own video and copy, presented like a luxury brand.",
          "Each setting style drawn as a technical drawing.",
          "On mobile, a call button and a quote form that takes photos or CAD files.",
        ],
        results: [
          { value: "2 languages", label: "German and English" },
          { value: "6 settings", label: "as technical drawings" },
          { value: "Quotes", label: "with photos or CAD" },
        ],
        reel: { src: "/casos/stone-art/reel-en.mp4", poster: "/casos/stone-art/reel-en.jpg", meta: "25 s" },
        link: null,
        note: "Shown with the client's permission. The redesign is ready and not published yet.",
      },
      {
        id: "ordenes",
        live: true,
        status: "In use",
        tags: ["Custom system", "Switzerland"],
        title: "A jewelry workshop that",
        highlight: "stopped chasing its orders.",
        text: "One app for every order, from intake to delivery.",
        compare: null,
        video: {
          src: "/casos/app/experiencia.mp4",
          poster: "/casos/app/experiencia.jpg",
          alt: "Walkthrough of the order app on desktop and mobile, with sample data",
          caption: "The order app on desktop and mobile, with sample data.",
        },
        before: [],
        after: [],
        results: [
          { value: "1 app", label: "for orders, tracking and invoices" },
          { value: "Automatic VAT", label: "Swiss tax and rounding, done for you" },
          { value: "From a phone", label: "each order is updated at the bench" },
        ],
        reel: { src: "/casos/app/reel-en.mp4", poster: "/casos/app/reel-en.jpg", meta: "32 s" },
        link: null,
        note: "",
      },
    ],
  },

  trust: {
    title: "Before you pay,",
    highlight: "you already know what you'll get.",
    items: [
      { icon: "sketch", title: "You see a sketch first", text: "Free, with no commitment." },
      { icon: "price", title: "One payment, no monthly fee", text: "From USD 500, based on what you need." },
      { icon: "domain", title: "On your own domain", text: "Under your business name." },
      { icon: "direct", title: "Direct contact", text: "You talk to the people designing your project." },
      { icon: "languages", title: "In English and Spanish", text: "For all your customers." },
      { icon: "real", title: "Real work", text: "Real clients, with their permission." },
    ],
  },

  // Results based on what the real system does (same as es.ts).
  caseStudy: {
    title: "A jewelry workshop in Switzerland that",
    highlight: "stopped chasing its orders.",
    intro:
      "I built the system the workshop uses to manage every order, from the moment it comes in until it's delivered.",
    before: {
      label: "Before",
      items: [
        "Orders scattered across paper, emails and messages.",
        "Nobody knew for sure what stage each piece was at.",
        "Hours every week moving data from one place to another.",
      ],
    },
    after: {
      label: "After",
      items: [
        "Every order in one place, visible to the whole team.",
        "Each piece's status is updated right from the workbench.",
        "Everything is entered once, with no copying by hand.",
      ],
    },
    results: [
      { value: "1 single app", label: "for orders, tracking and invoices" },
      {
        value: "Automatic VAT",
        label: "Swiss tax and rounding on every invoice are calculated for you",
      },
      { value: "From a phone", label: "the team updates each order right from the workbench" },
    ],
  },

  products: {
    title: "Things we've built",
    highlight: "that you can use today.",
    subtitle:
      "My own tools, ready to try.",
    items: [
      {
        tag: "App",
        title: "ProfitPeek",
        text: "For anyone running several businesses at once: see what comes in, what goes out and what each one actually makes, all in one place. Has a free plan.",
        cta: "Try ProfitPeek",
        href: "https://profitpeek.site",
        image: "/herramientas/profitpeek.webp",
        imageAlt: "ProfitPeek screen with sample data: money in, money out and what each business makes",
        address: "profitpeek.site",
        external: true,
      },
      {
        tag: "Free tool",
        title: "How much does your website cost you a year?",
        text: "Pick your platform and plan, and see what you've paid for your site so far and how much you'd save with one you own.",
        cta: "Calculate now",
        href: "/en/calculadora",
        image: "/herramientas/calculadora.webp",
        imageAlt: "Calculator result: what a website costs a year and how much you save with your own",
        address: "clew / calculator",
        external: false,
      },
    ],
  },

about: {
    kicker: "Who's behind it",
    name: "Cindy Lewis,",
    role: "product designer.",
    badge: "Founder of clew",
    photo: "/cindy-lewis.jpg",
    photoAlt: "Cindy Lewis, founder of clew, wearing her green glasses, peeking over her laptop",
    lines: [
      "She has spent more than 5 years designing digital products, including artificial intelligence platforms. She founded clew to bring that same level of design to small businesses.",
      "She designs and builds every project, and she's who you talk to from the very first message.",
    ],
    stats: [
      { value: "5+", label: "years designing digital products" },
      { value: "1:1", label: "you talk directly to the person designing your project" },
      { value: "3", label: "real cases in Switzerland" },
    ],
    quote: "“First I understand how you work. Then I design.”",
  },



  faq: {
    title: "What almost everyone asks before we start.",
    items: [
      {
        question: "Is my business too small for this?",
        answer:
          "No. The smaller the team, the more every hour spent on repetitive tasks weighs. We start with one thing: the one that takes up most of your time.",
      },
      {
        question: "What if I don't know exactly what I need?",
        answer:
          "That's completely normal. That's what the first conversation is for: you tell us how you work today and what's holding you back, and we suggest where to start.",
      },
      {
        question: "Do I need to know about technology?",
        answer:
          "No. If you can use WhatsApp, you can use what we build. We hand it over up and running, and we sort out any questions on WhatsApp.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Every project is quoted based on what you need, starting at USD 500. The first conversation is free and you leave with a clear proposal: what gets built, what it costs and how long it takes.",
      },
      {
        question: "What if something breaks?",
        answer:
          "Message us on WhatsApp and we'll look at it with you. Support after handoff is written into the proposal, so you know exactly what you can count on.",
      },
      {
        question: "Does it work with what I already use?",
        answer:
          "Yes. We start from what you already have: your WhatsApp, your spreadsheets, your invoicing system. Your team doesn't have to learn a new way of working.",
      },
      {
        question: "How does the website work?",
        answer:
          "We design it with your brand's colors, logo and tone, connect it to your own domain, and you don't pay Wix-style monthly fees. You get a user manual and we handle changes on WhatsApp.",
      },
    ],
  },


  consent: {
    before: "By messaging us you agree to the use of your data as described in the ",
    link: "privacy notice",
    after: ".",
  },

  finalCta: {
    kicker: "We're listening",
    title: "We want to know",
    highlight: "what you'd like to stop doing by hand.",
    text: "Pick what weighs on you most and it reaches us on WhatsApp. We'll get back to you calmly, with no commitment.",
    options: ["Answering the same messages", "Making quotes", "Tracking orders and inventory", "Chasing payments", "Booking appointments", "Getting clients from my website"],
    hint: "You can pick several, or tell us anything.",
    button: "Tell clew",
    message: "Hi, I saw the clew website. I'd like to stop doing this by hand: ",
    empty: "Hi, I saw the clew website and I'd like to tell you about my business.",
  },


  footer: {
    rights: "All rights reserved.",
    navTitle: "Explore",
    nav: [
      { label: "Services", href: "#servicios" },
      { label: "How it works", href: "#como-funciona" },
      { label: "Real cases", href: "#casos" },
      { label: "FAQ", href: "#preguntas" },
      { label: "Cost calculator", href: "/en/calculadora" },
    ],
    contactTitle: "Contact",
    contactCta: "Message us on WhatsApp",
    languageTitle: "Language",
    privacy: "Privacy notice",
    aiNote: "The main photo is an illustrative image created with AI.",
  },
};

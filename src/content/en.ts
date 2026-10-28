// English copy. Same shape as es.ts (TypeScript flags any missing key).
import type { Content } from "./es";

export const en: Content = {
  ui: {
    homeAria: "back to top",
    askAria: "Ask on WhatsApp about",
    solutionAria: "See how I solve it",
    currentLabel: "EN",
    switchLabel: "ES",
    switchHref: "/",
    switchAria: "Ver esta página en español",
    languageAria: "Language",
    privacyHref: "/en/privacidad",
  },

  business: {
    interestMessage: "Hi Cindy, I'd like to know more about: ",
    tagline: "Technology made to fit your business.",
    whatsappMessage: "Hi Cindy, I'd like your help with something in my business.",
  },

  seo: {
    title: "Custom systems, websites and AI automation | clew",
    description:
      "I design and build with AI solutions made for your business: systems for your processes, custom websites, automated marketing and AI agent evaluation. Tell me how I can help and we'll talk it through.",
    keywords: [
      "process automation for small businesses",
      "custom software for businesses",
      "internal tools for small businesses",
      "custom websites",
      "AI automation",
      "AI marketing for businesses",
      "AI agent evaluation",
      "chatbot and voice agent testing",
    ],
    ogAlt: "clew: simpler processes, stronger businesses.",
  },

  cta: {
    primary: "Tell me how I can help",
    short: "Let's talk",
    floatingLabel: "Message me on WhatsApp",
  },

  hero: {
    titleStart: "Simpler processes.",
    titleHighlight: "Stronger businesses.",
    subtitle:
      "Every company works its own way. That's why I design and build with AI solutions made for your business: systems for your processes, websites, marketing and AI agent evaluation.",
    note: "Message me on WhatsApp and we'll talk it through.",
    photoAlt: "Illustrative AI-generated image: a consultant talks with a business owner at a work table",
    chips: [
      { title: "Write to me", text: "Whatever you need, we talk it over on WhatsApp" },
      { title: "Designed by area", text: "Sales, warehouse, billing or whatever weighs most" },
      { title: "I'm with you", text: "From the idea until your team uses it" },
    ],
  },

  marquee: ["Automate", "Optimize", "Grow"],

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
    title: "What I can do",
    highlight: "for your business.",
    subtitle:
      "Four services, all designed around how your company works today. We start with the one you need most.",
    cta: "Ask on WhatsApp",
    items: [
      {
        icon: "systems",
        title: "Custom systems",
        text: "Orders, inventory, quotes, reminders and reports, built around your company's workflow instead of the other way around.",
      },
      {
        icon: "web",
        title: "Custom websites",
        text: "Your colors, your logo and your tone, on your own domain with no Wix-style monthly fees. Includes a user guide and support for changes.",
      },
      {
        icon: "marketing",
        title: "AI marketing",
        text: "Content for your social channels and posts that go out on their own, made with the AI tools your company already has.",
      },
      {
        icon: "agents",
        title: "AI agent evaluation",
        text: "I test your chatbot or voice agent with simulated customers and hand you a report with findings and recommendations to improve it.",
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
    title: "From our first call",
    highlight: "to your team using it.",
    items: [
      {
        title: "Let's talk",
        meta: "On WhatsApp, at no cost",
        text: "You tell me how your team works today and what eats up most of their time. You leave with a clear proposal: what to build, what it costs and how long it takes.",
      },
      {
        title: "Build",
        meta: "Agreed timeline",
        text: "The timeline depends on what we build, and we agree on it in the proposal. While I build the tool, I show you progress every week so we can adjust it together.",
      },
      {
        title: "Your team uses it from day one",
        meta: "Handoff",
        text: "I hand it over ready to use and simple enough that it needs no training: if your team can use WhatsApp, they can use this.",
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
    title: "Things I've built",
    highlight: "that you can use today.",
    subtitle:
      "Besides client projects, I build my own tools. They're the best proof of how I work.",
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
    name: "Cindy Lewis",
    photo: "/cindy-lewis.jpg",
    photoAlt: "Cindy Lewis, wearing her green glasses, peeking over her laptop",
    photoPlaceholder: "Photo [PLACEHOLDER]",
    lines: [
      "I'm Cindy Lewis, a UX/UI and product designer. I build with AI the tools, websites and automations each business needs, with no generic templates.",
      "I also have hands-on experience doing QA on AI voice and chat agents: I test them the way a real customer would, to find where they fail before your customers do.",
      "First I learn how your team works, then I build. You talk to me from our first conversation to the handoff, with no middlemen.",
    ],
  },

  faq: {
    title: "What almost everyone asks before we start.",
    items: [
      {
        question: "Is my business too small for this?",
        answer:
          "No. The smaller the team, the more every hour lost to repetitive tasks matters. We start with a single process: the one that takes up most of your time.",
      },
      {
        question: "Do I need to know about technology?",
        answer:
          "No. If you can use WhatsApp, you can use what I build for you. I hand over the tool up and running, and we sort out any questions on WhatsApp.",
      },
      {
        question: "How much does it cost?",
        answer:
          "It depends on the process you want to solve. Our first conversation is free, and you leave with a clear proposal: what gets built, what it costs and how long it takes.",
      },
      {
        question: "What if something breaks?",
        answer:
          "You message me on WhatsApp and I look into it with you. Support after the handoff is spelled out in the proposal, so you know exactly what you can count on.",
      },
      {
        question: "Does it work with what I already use?",
        answer:
          "Yes. I start from what you already have: your WhatsApp, your Excel, your invoicing system. Your team doesn't have to learn a new way of working.",
      },
      {
        question: "Do you also build websites?",
        answer:
          "Yes. I design it with your brand's colors, logo and tone, connect it to your own domain, and you don't pay Wix-style monthly fees. You get a user guide, and we handle changes over WhatsApp.",
      },
      {
        question: "We already have an AI agent. How do you evaluate it?",
        answer:
          "I have it talk to simulated customers, with normal, tricky and off-topic questions. You get a report with what I found and concrete recommendations to improve it. It works for chatbots and voice agents.",
      },
    ],
  },

  consent: {
    before: "By messaging me you agree to the use of your data as described in the ",
    link: "privacy notice",
    after: ".",
  },

  finalCta: {
    title: "Tell me what gets repeated",
    highlight: "every day at your business.",
    text: "In 30 minutes we'll see what can stop being done by hand. No cost, no commitment.",
  },

  footer: {
    rights: "All rights reserved.",
    navTitle: "Explore",
    nav: [
      { label: "Services", href: "#servicios" },
      { label: "How it works", href: "#como-funciona" },
      { label: "What I build", href: "#que-construyo" },
      { label: "Real case", href: "#caso-real" },
      { label: "FAQ", href: "#preguntas" },
      { label: "Cost calculator", href: "/en/calculadora" },
    ],
    contactTitle: "Contact",
    contactCta: "Message me on WhatsApp",
    languageTitle: "Language",
    privacy: "Privacy notice",
    aiNote: "The main photo is an illustrative image created with AI.",
  },
};

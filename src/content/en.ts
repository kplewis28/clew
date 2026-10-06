// English copy. Same shape as es.ts (TypeScript flags any missing key).
import type { Content } from "./es";

export const en: Content = {
  ui: {
    homeAria: "back to top",
    askAria: "Ask on WhatsApp about",
    solutionAria: "See how I solve it",
    switchLabel: "ES",
    switchHref: "/",
    switchAria: "Ver esta página en español",
  },

  business: {
    interestMessage: "Hi Cindy, I'd like to know more about: ",
    tagline: "Technology made to fit your business.",
    whatsappMessage: "Hi Cindy, I'd like to book the free assessment for my business.",
  },

  seo: {
    title: "Process automation for small businesses | clew",
    description:
      "Custom tools for small and midsize businesses: the work your team does by hand in Excel, WhatsApp and on paper starts doing itself. The first assessment is free.",
    keywords: [
      "process automation for small businesses",
      "order automation for distributors",
      "internal tools for small businesses",
      "custom software for businesses",
      "automate repetitive tasks",
    ],
    ogAlt: "clew: simpler processes, stronger businesses.",
  },

  cta: {
    primary: "Book your free assessment",
    short: "Let's talk",
    floatingLabel: "Book your free assessment on WhatsApp",
  },

  hero: {
    titleStart: "Simpler processes.",
    titleHighlight: "Stronger businesses.",
    subtitle:
      "I build tools made for your business: the work your team does by hand in Excel, WhatsApp and on paper starts doing itself.",
    note: "It takes 30 minutes on WhatsApp, and it's free.",
    photoAlt: "A consultant talks with a business owner at a work table",
    chips: [
      { title: "Free assessment", text: "30 minutes on WhatsApp" },
      { title: "Made to fit you", text: "Built on how you already work" },
      { title: "I'm with you", text: "From the idea until your team uses it" },
    ],
  },

  marquee: ["Automate", "Optimize", "Grow"],

  statement: {
    title: "Small businesses deserve",
    highlight: "tools made just for them, too.",
    text: "Big companies have whole teams to keep their processes in order. You have me: I sit down with your team, see how they work and build exactly what they need.",
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
        title: "Assessment",
        meta: "30 min, free",
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
        text: "I train your people right at their own workstations. If they can use WhatsApp, they can use this.",
      },
    ],
  },

  builds: {
    title: "Tools made",
    highlight: "for the way you work.",
    // The only visible mention of "AI" on the page (the brief allows two at most).
    subtitle:
      "Internal tools with AI that take care of the repetitive work. We start with the process that eats up most of your team's time.",
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

  about: {
    name: "Cindy Lewis",
    photo: "/cindy-lewis.jpg",
    photoAlt: "Cindy Lewis, wearing her green glasses, peeking over her laptop",
    photoPlaceholder: "Photo [PLACEHOLDER]",
    lines: [
      "I'm Cindy Lewis, a product designer. I build tools made for each business, with no generic templates.",
      "First I learn how your team works, then I build. You talk to me from the assessment to the handoff, with no middlemen.",
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
          "No. If you can use WhatsApp, you can use what I build for you. I hand over the tool up and running and train your team to use it.",
      },
      {
        question: "How much does it cost?",
        answer:
          "It depends on the process you want to solve. The assessment is free, and you leave with a clear proposal: what gets built, what it costs and how long it takes.",
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
    ],
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
      { label: "How it works", href: "#como-funciona" },
      { label: "What I build", href: "#que-construyo" },
      { label: "Real case", href: "#caso-real" },
      { label: "FAQ", href: "#preguntas" },
    ],
    contactTitle: "Contact",
    contactCta: "Message me on WhatsApp",
    languageTitle: "Language",
  },
};

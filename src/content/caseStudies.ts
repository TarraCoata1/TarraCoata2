export type CaseStudy = {
  slug: string;
  he: {
    client: string;
    sector: string;
    title: string;
    problem: string;
    solution: string;
    results: { label: string; value: string }[];
  };
  en: {
    client: string;
    sector: string;
    title: string;
    problem: string;
    solution: string;
    results: { label: string; value: string }[];
  };
  stack: string[];
  year: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas-finance",
    year: 2025,
    stack: ["React", "TanStack Start", "Postgres", "Stripe"],
    he: {
      client: "Atlas Finance",
      sector: "פינטק",
      title: "פלטפורמת ניהול השקעות לסוכנים",
      problem: "מערכת מורשת איטית עם זמני טעינה של 6 שניות וזליגת לקוחות.",
      solution: "בנייה מחדש כ‑SPA מהיר עם SSR, מערכת עיצוב חדשה ואופטימיזציה של שאילתות.",
      results: [
        { label: "זמן טעינה", value: "‑78%" },
        { label: "המרה", value: "+34%" },
        { label: "NPS", value: "62" },
      ],
    },
    en: {
      client: "Atlas Finance",
      sector: "Fintech",
      title: "Investment management platform for advisors",
      problem: "Legacy system with 6-second load times and churn.",
      solution: "Rebuilt as a fast SPA with SSR, new design system and query optimization.",
      results: [
        { label: "Load time", value: "−78%" },
        { label: "Conversion", value: "+34%" },
        { label: "NPS", value: "62" },
      ],
    },
  },
  {
    slug: "moss-and-oak",
    year: 2024,
    stack: ["Shopify Hydrogen", "Stripe", "Klaviyo"],
    he: {
      client: "Moss & Oak",
      sector: "ריהוט פרימיום",
      title: "חנות שופיפיי לבית עיצוב",
      problem: "תבנית גנרית עם חוויית מוצר חלשה והמרות נמוכות.",
      solution: "Hydrogen מותאם, צילום מוצר חדש ומשפך checkout מקוצר.",
      results: [
        { label: "AOV", value: "+41%" },
        { label: "המרה", value: "+58%" },
        { label: "LCP", value: "1.1s" },
      ],
    },
    en: {
      client: "Moss & Oak",
      sector: "Premium furniture",
      title: "Hydrogen storefront for a design house",
      problem: "Generic template, weak product experience, low conversion.",
      solution: "Custom Hydrogen build, refreshed product photography and shortened checkout.",
      results: [
        { label: "AOV", value: "+41%" },
        { label: "Conversion", value: "+58%" },
        { label: "LCP", value: "1.1s" },
      ],
    },
  },
  {
    slug: "north-clinic",
    year: 2025,
    stack: ["React", "n8n", "OpenAI", "Twilio"],
    he: {
      client: "North Clinic",
      sector: "בריאות",
      title: "סוכן AI לתיאום תורים",
      problem: "צוות מזכירות עמוס, 30% מהשיחות נטושות.",
      solution: "סוכן קולי וטקסטואלי מחובר ל‑CRM, מטפל בתיאומים, ביטולים ושאלות שכיחות.",
      results: [
        { label: "שיחות נטושות", value: "‑84%" },
        { label: "תורים בחודש", value: "+22%" },
        { label: "שעות אדם", value: "‑120/חודש" },
      ],
    },
    en: {
      client: "North Clinic",
      sector: "Healthcare",
      title: "AI agent for appointment scheduling",
      problem: "Overloaded reception, 30% of calls abandoned.",
      solution: "Voice & text agent connected to the CRM, handling booking, cancellation and FAQs.",
      results: [
        { label: "Abandoned calls", value: "−84%" },
        { label: "Bookings/month", value: "+22%" },
        { label: "Human hours", value: "−120/mo" },
      ],
    },
  },
  {
    slug: "lumen-saas",
    year: 2024,
    stack: ["TypeScript", "Postgres", "Cloudflare"],
    he: {
      client: "Lumen Analytics",
      sector: "SaaS B2B",
      title: "פלטפורמת אנליטיקס למובייל",
      problem: "MVP ידני בלי תשתית. צריך לתמוך באלפי משתמשים.",
      solution: "ארכיטקטורה חדשה על Cloudflare Workers, בסיס נתונים מתועד, ופאנל ניהול.",
      results: [
        { label: "Uptime", value: "99.99%" },
        { label: "API p95", value: "<80ms" },
        { label: "משתמשים פעילים", value: "12K" },
      ],
    },
    en: {
      client: "Lumen Analytics",
      sector: "B2B SaaS",
      title: "Mobile analytics platform",
      problem: "Manual MVP without infrastructure. Needed to scale to thousands of users.",
      solution: "New architecture on Cloudflare Workers, documented database, admin panel.",
      results: [
        { label: "Uptime", value: "99.99%" },
        { label: "API p95", value: "<80ms" },
        { label: "Active users", value: "12K" },
      ],
    },
  },
  {
    slug: "harbor-launch",
    year: 2025,
    stack: ["Vite", "React", "GTM"],
    he: {
      client: "Harbor",
      sector: "השקת מוצר",
      title: "דף נחיתה לקמפיין השקה",
      problem: "השקה גדולה עם תקציב מדיה אגרסיבי וזמן לעלייה — שבועיים.",
      solution: "דף נחיתה ייעודי, A/B על המסר הראשי, אינטגרציה מלאה עם פיקסלים.",
      results: [
        { label: "CR", value: "12.6%" },
        { label: "CAC", value: "‑43%" },
        { label: "Lead Score", value: "8.4/10" },
      ],
    },
    en: {
      client: "Harbor",
      sector: "Product launch",
      title: "Launch campaign landing page",
      problem: "Major launch with aggressive media budget, two-week go-live window.",
      solution: "Dedicated landing page, A/B on core message, full pixel integration.",
      results: [
        { label: "CR", value: "12.6%" },
        { label: "CAC", value: "−43%" },
        { label: "Lead score", value: "8.4/10" },
      ],
    },
  },
  {
    slug: "verde-market",
    year: 2024,
    stack: ["Next.js", "Stripe", "Algolia"],
    he: {
      client: "Verde Market",
      sector: "מרקטפלייס",
      title: "מרקטפלייס למוצרי טבע",
      problem: "פלטפורמה ישנה עם חיפוש חלש וחוויית מובייל בעייתית.",
      solution: "מעבר ל‑Next.js, חיפוש Algolia וחוויית מובייל ראשונה.",
      results: [
        { label: "Mobile CR", value: "+91%" },
        { label: "חיפושים/יום", value: "+3.2x" },
        { label: "Bounce", value: "‑38%" },
      ],
    },
    en: {
      client: "Verde Market",
      sector: "Marketplace",
      title: "Marketplace for natural products",
      problem: "Aging platform with weak search and a painful mobile experience.",
      solution: "Move to Next.js, Algolia search and a mobile-first experience.",
      results: [
        { label: "Mobile CR", value: "+91%" },
        { label: "Searches/day", value: "+3.2×" },
        { label: "Bounce", value: "−38%" },
      ],
    },
  },
];

export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);

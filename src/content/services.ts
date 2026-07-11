import type { LucideIcon } from "lucide-react";
import { Code2, ShoppingBag, Rocket, Bot, Layers } from "lucide-react";

export type Service = {
  slug: "web" | "ecommerce" | "landing" | "ai" | "fullstack";
  icon: LucideIcon;
  he: { title: string; short: string; long: string; deliverables: string[]; stack: string[] };
  en: { title: string; short: string; long: string; deliverables: string[]; stack: string[] };
};

export const services: Service[] = [
  {
    slug: "web",
    icon: Code2,
    he: {
      title: "בניית אתרים",
      short: "אתרי תדמית ומערכות תוכן מהירים, מודולריים ונגישים.",
      long: "אנחנו מתכננים ובונים אתרים שמייצגים את המותג שלך באופן מדויק. ארכיטקטורת מידע ברורה, ביצועים מעולים, וקוד נקי שקל לתחזק ולהרחיב.",
      deliverables: ["מערכת עיצוב מלאה", "CMS מובנה לעדכון תוכן", "SEO טכני וכותרות מובנות", "ניתוח ביצועים שוטף"],
      stack: ["React", "TanStack Start", "Tailwind", "Postgres"],
    },
    en: {
      title: "Web Development",
      short: "Fast, modular, accessible brand sites and content systems.",
      long: "We design and build sites that represent your brand precisely. Clear IA, great performance, clean code that's easy to maintain and extend.",
      deliverables: ["Full design system", "Built-in CMS", "Technical SEO & structured headings", "Ongoing performance monitoring"],
      stack: ["React", "TanStack Start", "Tailwind", "Postgres"],
    },
  },
  {
    slug: "ecommerce",
    icon: ShoppingBag,
    he: {
      title: "חנויות אונליין",
      short: "חנויות שמוכרות. מתפקדות במהירות בכל מכשיר.",
      long: "מחנות בוטיק ועד פלטפורמות מורכבות. אינטגרציות סליקה, מלאי, משלוחים ושיווק — בנויות לקנה מידה.",
      deliverables: ["דף מוצר ממיר", "Checkout בקליק אחד", "ניהול מלאי וקופונים", "אנליטיקס וטראקינג מלא"],
      stack: ["Next.js", "Shopify Hydrogen", "Stripe", "Klaviyo"],
    },
    en: {
      title: "E-commerce",
      short: "Stores that sell. Fast on every device.",
      long: "From boutique storefronts to complex platforms. Payments, inventory, shipping and marketing integrations built to scale.",
      deliverables: ["Converting product pages", "One-click checkout", "Inventory & coupons", "Full analytics & tracking"],
      stack: ["Next.js", "Shopify Hydrogen", "Stripe", "Klaviyo"],
    },
  },
  {
    slug: "landing",
    icon: Rocket,
    he: {
      title: "דפי נחיתה",
      short: "דפים ממוקדים שממירים תנועה לפעולה.",
      long: "דפי נחיתה לקמפיינים, השקות מוצר ומשפכי שיווק. כתיבה שיווקית, עיצוב משכנע ואופטימיזציה מתמשכת.",
      deliverables: ["מסר ראשי וכותרות", "טסטים A/B", "אינטגרציה עם פיקסלים ו‑CRM", "דוחות המרה שבועיים"],
      stack: ["Vite", "React", "GTM", "HubSpot / Salesforce"],
    },
    en: {
      title: "Landing Pages",
      short: "Focused pages that convert traffic into action.",
      long: "Landing pages for campaigns, product launches and marketing funnels. Sharp copy, persuasive design and continuous optimization.",
      deliverables: ["Core message & headlines", "A/B testing", "Pixel & CRM integration", "Weekly conversion reports"],
      stack: ["Vite", "React", "GTM", "HubSpot / Salesforce"],
    },
  },
  {
    slug: "ai",
    icon: Bot,
    he: {
      title: "אוטומציות AI",
      short: "סוכני AI ותהליכים אוטומטיים שמחליפים עבודה ידנית.",
      long: "אנחנו בונים סוכנים, צ׳אטבוטים ותהליכי אוטומציה מותאמים אישית — מבוססי LLM ומחוברים למערכות הקיימות שלך.",
      deliverables: ["סוכן AI ייעודי", "אינטגרציות עם מערכות פנימיות", "Knowledge Base מובנה", "מדידת ROI חודשית"],
      stack: ["OpenAI", "Anthropic", "n8n", "Vector DB"],
    },
    en: {
      title: "AI Automations",
      short: "AI agents and automations that replace manual work.",
      long: "Custom agents, chatbots and automation pipelines — LLM-powered and connected to your existing systems.",
      deliverables: ["Custom AI agent", "Internal system integrations", "Structured knowledge base", "Monthly ROI tracking"],
      stack: ["OpenAI", "Anthropic", "n8n", "Vector DB"],
    },
  },
  {
    slug: "fullstack",
    icon: Layers,
    he: {
      title: "פיתוח Full Stack",
      short: "מערכות SaaS, פאנלי ניהול ופלטפורמות מותאמות אישית.",
      long: "פיתוח מערכות ווב מורכבות מקצה לקצה. אוטנטיקציה, בסיסי נתונים, APIs, פאנלי ניהול ותשתית ענן.",
      deliverables: ["ארכיטקטורה ענן", "בסיס נתונים מתועד", "API מאובטח", "פאנל ניהול"],
      stack: ["TypeScript", "Postgres", "Cloudflare", "Supabase"],
    },
    en: {
      title: "Full Stack Development",
      short: "SaaS systems, admin panels and custom platforms.",
      long: "End-to-end web systems. Auth, databases, APIs, admin panels and cloud infrastructure.",
      deliverables: ["Cloud architecture", "Documented database", "Secure API", "Admin panel"],
      stack: ["TypeScript", "Postgres", "Cloudflare", "Supabase"],
    },
  },
];

export const getService = (slug: Service["slug"]) => services.find((s) => s.slug === slug)!;

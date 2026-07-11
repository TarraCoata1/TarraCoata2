export type FaqItem = {
  he: { q: string; a: string };
  en: { q: string; a: string };
  group: "pricing" | "process" | "tech" | "support";
};

export const faqs: FaqItem[] = [
  {
    group: "pricing",
    he: { q: "כמה עולה פרויקט?", a: "פרויקטים מתחילים מ‑12,000 ש״ח לדף נחיתה ועד 250,000 ש״ח למערכות SaaS מורכבות. אחרי שיחת אפיון נחזור עם הצעת מחיר מפורטת תוך 48 שעות." },
    en: { q: "How much does a project cost?", a: "Projects start from $3.5K for a landing page and go up to $70K+ for complex SaaS. After a scoping call we return a detailed proposal within 48 hours." },
  },
  {
    group: "pricing",
    he: { q: "איך עובד המחיר — קבוע או שעתי?", a: "ברירת המחדל היא מחיר קבוע מבוסס scope. לרטיינרים ולפרויקטים פתוחים אנחנו עובדים גם בשעות." },
    en: { q: "Is pricing fixed or hourly?", a: "Default is scope-based fixed pricing. For retainers and open-ended work we also bill hourly." },
  },
  {
    group: "pricing",
    he: { q: "האם יש תשלום מקדמה?", a: "כן. 40% עם החתימה, 30% באבן דרך אמצעית, 30% בהשקה." },
    en: { q: "Is there a deposit?", a: "Yes. 40% on signing, 30% at the midpoint milestone, 30% at launch." },
  },
  {
    group: "process",
    he: { q: "כמה זמן לוקח פרויקט?", a: "דף נחיתה 2–3 שבועות. אתר תדמית 4–6 שבועות. מערכת SaaS 3–6 חודשים." },
    en: { q: "How long does a project take?", a: "Landing page 2–3 weeks. Brand site 4–6 weeks. SaaS 3–6 months." },
  },
  {
    group: "process",
    he: { q: "כמה לקוחות אתם לוקחים במקביל?", a: "מקסימום שלושה פרויקטים פעילים. זה מה שמאפשר את האיכות והקצב." },
    en: { q: "How many projects do you take on at once?", a: "Three active projects, max. That's what enables our quality and pace." },
  },
  {
    group: "process",
    he: { q: "איך מתבצע סנכרון?", a: "סנכרון שבועי בזום (30 דקות), ערוץ Slack פתוח, ועדכון התקדמות שבועי בכתב." },
    en: { q: "How do we sync?", a: "Weekly 30-minute Zoom, an always-on Slack channel, and a written weekly progress update." },
  },
  {
    group: "tech",
    he: { q: "באילו טכנולוגיות אתם משתמשים?", a: "React, TypeScript, TanStack, Tailwind, Postgres, Cloudflare. אנחנו בוחרים את הסטאק לפי הפרויקט — לא להפך." },
    en: { q: "What tech do you use?", a: "React, TypeScript, TanStack, Tailwind, Postgres, Cloudflare. We pick the stack to fit the project — not the other way around." },
  },
  {
    group: "tech",
    he: { q: "מי הבעלים של הקוד?", a: "אתם. בסוף הפרויקט מועבר אליכם repository מלא, תיעוד, וגישה לכל החשבונות." },
    en: { q: "Who owns the code?", a: "You do. At the end you receive the full repository, documentation and account access." },
  },
  {
    group: "tech",
    he: { q: "האם תוכלו להמשיך מקוד קיים?", a: "כן, אחרי code review קצר. אם הקוד לא נשמר — אנחנו ממליצים על בנייה מחדש ממוקדת." },
    en: { q: "Can you continue from existing code?", a: "Yes, after a short code review. If the code is unsalvageable, we'll recommend a focused rebuild." },
  },
  {
    group: "support",
    he: { q: "מה קורה אחרי ההשקה?", a: "30 ימי תמיכה במחיר הפרויקט. אחרי זה זמינים רטיינרים חודשיים מ‑3,500 ש״ח לחודש." },
    en: { q: "What happens after launch?", a: "30 days of support included. After that, monthly retainers start at $1,000/month." },
  },
  {
    group: "support",
    he: { q: "האם אתם מתחזקים את האתר אחרי שהשקנו?", a: "כן. רטיינרים כוללים מוניטורינג, עדכוני תוכן, שיפורי ביצועים ושיפורים חודשיים מתוכננים." },
    en: { q: "Do you maintain the site after launch?", a: "Yes. Retainers include monitoring, content updates, performance work and planned monthly improvements." },
  },
  {
    group: "support",
    he: { q: "האם אתם מציעים SLA?", a: "ברטיינרים — כן. זמן תגובה של עד 4 שעות בשעות העבודה." },
    en: { q: "Do you offer an SLA?", a: "On retainers — yes. Up to 4-hour response in working hours." },
  },
];

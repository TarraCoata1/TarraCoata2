export type Post = {
  slug: string;
  date: string;
  readMinutes: number;
  he: { title: string; excerpt: string; body: string };
  en: { title: string; excerpt: string; body: string };
};

export const posts: Post[] = [
  {
    slug: "performance-as-product",
    date: "2025-05-12",
    readMinutes: 6,
    he: {
      title: "ביצועים זה מוצר, לא אופטימיזציה",
      excerpt: "למה כל מילישנייה משנה — ואיך אנחנו מודדים את ההשפעה העסקית בפועל.",
      body: "ביצועים הם לא משהו שעושים בסוף הפרויקט. הם החלטה ארכיטקטונית מהיום הראשון.\n\nאתר שנטען ב‑1.2 שניות מוכר אחרת לחלוטין מאתר שנטען ב‑3.4 שניות. הנתונים ברורים, ההשפעה מיידית.\n\nאיך אנחנו מתחילים: תקציב ביצועים, מדידה מתמשכת, החלטות מוצר שמכבדות את המשתמש.",
    },
    en: {
      title: "Performance is a product, not an optimization",
      excerpt: "Why every millisecond matters — and how we measure real business impact.",
      body: "Performance is not something you do at the end of the project. It's an architectural decision from day one.\n\nA site that loads in 1.2 seconds sells very differently from one that loads in 3.4 seconds. The data is clear; the impact is immediate.\n\nHow we start: a performance budget, continuous measurement, and product decisions that respect the user.",
    },
  },
  {
    slug: "ai-agents-in-production",
    date: "2025-04-02",
    readMinutes: 8,
    he: {
      title: "סוכני AI בפרודקשן: מה באמת עובד",
      excerpt: "מסקנות משנה של בנייה ופריסה של סוכנים בעסקים אמיתיים.",
      body: "סוכן AI טוב הוא לא מודל גדול יותר. הוא הקשר טוב יותר, אינטגרציות נקיות, ו‑guardrails ברורים.\n\nשלוש מסקנות מהשנה האחרונה:\n\n1. תמיד יש fallback אנושי.\n2. Knowledge Base מובנה מנצח prompt חכם.\n3. מדידה היא חצי מהעבודה.",
    },
    en: {
      title: "AI agents in production: what actually works",
      excerpt: "A year's worth of lessons from shipping agents into real businesses.",
      body: "A good AI agent isn't a bigger model. It's better context, clean integrations and clear guardrails.\n\nThree takeaways from the past year:\n\n1. Always keep a human fallback.\n2. A structured knowledge base beats a clever prompt.\n3. Measurement is half the work.",
    },
  },
  {
    slug: "design-systems-small-teams",
    date: "2025-02-18",
    readMinutes: 5,
    he: {
      title: "מערכות עיצוב לצוותים קטנים",
      excerpt: "איך לבנות מערכת עיצוב שלא הופכת לפרויקט בפני עצמו.",
      body: "צוותים קטנים לא צריכים את Material Design. הם צריכים מערכת קטנה, אכיפה, ושמתחזקת את עצמה.\n\nההמלצה שלנו: 6 פרימיטיבים, 3 רכיבים מורכבים, ו‑Storybook אחד. זהו.",
    },
    en: {
      title: "Design systems for small teams",
      excerpt: "Build a design system that doesn't turn into its own project.",
      body: "Small teams don't need Material Design. They need a small, enforceable, self-maintaining system.\n\nOur recommendation: 6 primitives, 3 composite components, one Storybook. That's it.",
    },
  },
  {
    slug: "the-cost-of-slow",
    date: "2025-01-09",
    readMinutes: 4,
    he: {
      title: "המחיר של אתר איטי",
      excerpt: "חישוב פשוט: כמה כסף עולה לך כל שנייה של טעינה.",
      body: "אתר שמאבד 1 שנייה מאבד 7%‑11% מההמרה. נחשב את זה על נפח התנועה שלך — והתמונה ברורה.\n\nהשקעה בביצועים מחזירה את עצמה תוך חודשיים בכל פרויקט עסקי שראינו.",
    },
    en: {
      title: "The cost of slow",
      excerpt: "Simple math: what each second of load time costs you.",
      body: "A site that loses 1 second loses 7%–11% of conversion. Multiply by your traffic — the picture is clear.\n\nIn every commercial project we've shipped, performance investment paid back within two months.",
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

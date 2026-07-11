import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "he" | "en";

type Dict = Record<string, string>;

const he: Dict = {
  brand: "TarraCoata",
  tagline: "סטודיו דיגיטלי לבנייה שקטה של מערכות שעובדות.",
  nav_home: "בית",
  nav_services: "שירותים",
  nav_portfolio: "תיק עבודות",
  nav_blog: "בלוג",
  nav_about: "אודות",
  nav_faq: "שאלות נפוצות",
  nav_contact: "צור קשר",
  cta_start: "התחל פרויקט",
  cta_view: "ראה עוד",
  cta_all_services: "כל השירותים",
  cta_all_cases: "כל הפרויקטים",
  cta_all_posts: "כל המאמרים",
  cta_contact: "דבר איתנו",
  hero_eyebrow: "סטודיו דיגיטלי · ישראל",
  hero_title: "אנחנו בונים מוצרים דיגיטליים שלא נשברים.",
  hero_sub: "אסטרטגיה, עיצוב ופיתוח Full‑Stack בדגש על ביצועים, בהירות וקצב משלוח אמיתי. בלי דרמה. בלי תירוצים.",
  expertise: "תחומי מומחיות",
  expertise_sub: "חמישה שירותים. גישה אחת: שקיפות, מהירות, אחריות.",
  cases_title: "מבחר עבודות אחרונות",
  cases_sub: "פרויקטים שיצאו לאוויר. נתונים, לא הבטחות.",
  philosophy_title: "ביטחון שקט.",
  philosophy_body: "אנחנו לא צועקים. אנחנו מספקים. כל מערכת שאנחנו בונים נמדדת לפי מהירות, בהירות וההשפעה העסקית בפועל.",
  faq_short_title: "שאלות נפוצות",
  cta_band_title: "מוכן להתחיל?",
  cta_band_sub: "ספר לנו על הפרויקט. נחזור בתוך 24 שעות.",
  about_title: "סטודיו אחד. שיטה אחת.",
  about_sub: "TarraCoata הוא סטודיו דיגיטלי ממוקד. אנחנו עובדים עם מספר מצומצם של לקוחות בכל רבעון כדי לשמור על איכות בלתי מתפשרת.",
  principles_title: "עקרונות",
  principle_1_t: "בהירות לפני עיצוב",
  principle_1_b: "החלטות מוצר מבוססות על נתונים והקשר עסקי, לא על טרנדים.",
  principle_2_t: "ביצועים הם פיצ׳ר",
  principle_2_b: "אתר איטי הוא אתר שבור. כל גרם חשוב.",
  principle_3_t: "בעלות מלאה",
  principle_3_b: "אנחנו בעלים של כל החלטה מהאסטרטגיה ועד הדפלוי.",
  principle_4_t: "תקשורת ישירה",
  principle_4_b: "ערוץ אחד. סנכרון שבועי. אפס בירוקרטיה.",
  process_title: "התהליך",
  step_1_t: "01 · גילוי",
  step_1_b: "פגישת אסטרטגיה, מיפוי מטרות עסקיות, הגדרת KPIs.",
  step_2_t: "02 · עיצוב",
  step_2_b: "ארכיטקטורת מידע, פרוטוטייפ אינטראקטיבי, מערכת עיצוב.",
  step_3_t: "03 · בנייה",
  step_3_b: "פיתוח מודולרי, בדיקות, אופטימיזציית ביצועים.",
  step_4_t: "04 · השקה ותחזוקה",
  step_4_b: "דפלוי, מדידה, שיפור מתמשך.",
  portfolio_title: "תיק עבודות",
  portfolio_sub: "מקרי בוחן נבחרים. לקוח, אתגר, פתרון, תוצאה.",
  blog_title: "מחשבות ופרקטיקה",
  blog_sub: "מאמרים על בנייה, ביצועים, AI ומוצר דיגיטלי.",
  faq_title: "שאלות נפוצות",
  faq_sub: "מה שלקוחות באמת שואלים לפני שמתחילים.",
  contact_title: "בוא נדבר",
  contact_sub: "ספר לנו על הפרויקט. אנחנו קוראים כל הודעה ועונים אישית.",
  form_name: "שם מלא",
  form_email: "אימייל",
  form_phone: "טלפון (לא חובה)",
  form_company: "חברה (לא חובה)",
  form_message: "ספר על הפרויקט",
  form_send: "שלח הודעה",
  form_sending: "שולח...",
  form_ok: "ההודעה נשלחה. נחזור אליך תוך 24 שעות.",
  form_err: "משהו השתבש. נסה שוב או שלח לנו מייל ישיר.",
  footer_rights: "כל הזכויות שמורות",
  footer_nav: "ניווט",
  footer_contact: "יצירת קשר",
  footer_brand_line: "סטודיו דיגיטלי. ישראל.",
  read_more: "המשך קריאה",
};

const en: Dict = {
  brand: "TarraCoata",
  tagline: "A digital studio building systems that quietly work.",
  nav_home: "Home",
  nav_services: "Services",
  nav_portfolio: "Work",
  nav_blog: "Journal",
  nav_about: "About",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  cta_start: "Start a project",
  cta_view: "View more",
  cta_all_services: "All services",
  cta_all_cases: "All work",
  cta_all_posts: "All articles",
  cta_contact: "Talk to us",
  hero_eyebrow: "Digital studio · Israel",
  hero_title: "We build digital products that don't break.",
  hero_sub: "Strategy, design and full‑stack engineering with a bias for performance, clarity and shipping. No drama. No excuses.",
  expertise: "Expertise",
  expertise_sub: "Five services. One method: transparency, speed, ownership.",
  cases_title: "Selected recent work",
  cases_sub: "Shipped systems. Numbers, not promises.",
  philosophy_title: "Quiet confidence.",
  philosophy_body: "We don't shout. We deliver. Every system we build is measured by speed, clarity, and real business impact.",
  faq_short_title: "Frequent questions",
  cta_band_title: "Ready to start?",
  cta_band_sub: "Tell us about the project. We reply within 24 hours.",
  about_title: "One studio. One method.",
  about_sub: "TarraCoata is a focused digital studio. We work with a small number of clients per quarter to keep quality uncompromised.",
  principles_title: "Principles",
  principle_1_t: "Clarity before design",
  principle_1_b: "Product decisions are grounded in data and business context — not trends.",
  principle_2_t: "Performance is a feature",
  principle_2_b: "A slow site is a broken site. Every gram matters.",
  principle_3_t: "Full ownership",
  principle_3_b: "We own every decision from strategy to deploy.",
  principle_4_t: "Direct communication",
  principle_4_b: "One channel. Weekly syncs. Zero bureaucracy.",
  process_title: "Process",
  step_1_t: "01 · Discovery",
  step_1_b: "Strategy session, business mapping, KPI definition.",
  step_2_t: "02 · Design",
  step_2_b: "Information architecture, interactive prototype, design system.",
  step_3_t: "03 · Build",
  step_3_b: "Modular development, testing, performance optimization.",
  step_4_t: "04 · Launch & care",
  step_4_b: "Deploy, measure, iterate.",
  portfolio_title: "Work",
  portfolio_sub: "Selected case studies. Client, challenge, solution, result.",
  blog_title: "Notes & practice",
  blog_sub: "Writing on building, performance, AI and digital product.",
  faq_title: "Frequent questions",
  faq_sub: "What clients actually ask before starting.",
  contact_title: "Let's talk",
  contact_sub: "Tell us about the project. We read every message and reply personally.",
  form_name: "Full name",
  form_email: "Email",
  form_phone: "Phone (optional)",
  form_company: "Company (optional)",
  form_message: "About the project",
  form_send: "Send message",
  form_sending: "Sending...",
  form_ok: "Message sent. We'll get back within 24 hours.",
  form_err: "Something went wrong. Try again or email us directly.",
  footer_rights: "All rights reserved",
  footer_nav: "Navigation",
  footer_contact: "Contact",
  footer_brand_line: "Digital studio. Israel.",
  read_more: "Read more",
};

const dicts = { he, en } as const;

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "he",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (stored === "he" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof he) => dicts[lang][key] ?? key;
}

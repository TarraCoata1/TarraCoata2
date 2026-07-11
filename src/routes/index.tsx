import { createFileRoute } from "@tanstack/react-router";
import { Hero, PrimaryCTA, SecondaryCTA, ServicesGrid, CaseStudyGrid, PhilosophyBand, CTABand } from "@/components/marketing/Pieces";
import { FAQList } from "@/components/marketing/FAQList";
import { Section, Eyebrow } from "@/components/layout/Container";
import { useT } from "@/lib/i18n";
import { faqs } from "@/content/faq";
import { localBusinessSchema, faqSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TarraCoata — סטודיו דיגיטלי לבניית אתרים, חנויות ו‑AI" },
      { name: "description", content: "סטודיו דיגיטלי שבונה אתרים, חנויות אונליין, דפי נחיתה, אוטומציות AI ומערכות Full Stack. ביצועים, בהירות, אחריות." },
      { property: "og:title", content: "TarraCoata — Digital studio" },
      { property: "og:description", content: "Web, e-commerce, landing pages, AI automations and full-stack systems." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs.slice(0, 6).map(f => f.he))) },
    ],
  }),
  component: Home,
});

function Home() {
  const t = useT();
  return (
    <>
      <Hero eyebrow={t("hero_eyebrow")} title={t("hero_title")} sub={t("hero_sub")}>
        <PrimaryCTA to="/contact">{t("cta_start")}</PrimaryCTA>
        <SecondaryCTA to="/portfolio">{t("cta_all_cases")}</SecondaryCTA>
      </Hero>
      <ServicesGrid />
      <CaseStudyGrid limit={3} />
      <PhilosophyBand />
      <Section>
        <Eyebrow>{t("faq_short_title")}</Eyebrow>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">{t("faq_title")}</h2>
        <FAQList items={faqs.slice(0, 6)} />
      </Section>
      <CTABand />
    </>
  );
}

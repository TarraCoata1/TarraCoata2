import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero, CTABand } from "@/components/marketing/Pieces";
import { Section, Eyebrow } from "@/components/layout/Container";
import { FAQList } from "@/components/marketing/FAQList";
import { useT, useLang } from "@/lib/i18n";
import { faqs } from "@/content/faq";
import { faqSchema } from "@/lib/seo";
import { fadeUp } from "@/lib/motion";

const groups = ["pricing", "process", "tech", "support"] as const;
const groupLabels: Record<(typeof groups)[number], { he: string; en: string }> = {
  pricing: { he: "תמחור", en: "Pricing" },
  process: { he: "תהליך", en: "Process" },
  tech: { he: "טכנולוגיה", en: "Tech" },
  support: { he: "תמיכה", en: "Support" },
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "שאלות נפוצות · TarraCoata" },
      { name: "description", content: "תמחור, תהליך, טכנולוגיה ותמיכה — מה שלקוחות באמת שואלים." },
      { property: "og:title", content: "FAQ — TarraCoata" },
      { property: "og:description", content: "Pricing, process, tech and support." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(faqs.map((f) => f.he))) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  const { lang } = useLang();
  return (
    <>
      <Hero eyebrow={t("nav_faq")} title={t("faq_title")} sub={t("faq_sub")} showVisual={false} />
      {groups.map((g) => {
        const items = faqs.filter((f) => f.group === g);
        if (!items.length) return null;
        return (
          <Section key={g} className="hairline-t">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid gap-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <Eyebrow>{groupLabels[g][lang]}</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <FAQList items={items} />
              </div>
            </motion.div>
          </Section>
        );
      })}
      <CTABand />
    </>
  );
}

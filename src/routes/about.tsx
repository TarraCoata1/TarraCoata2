import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/layout/Container";
import { Hero, CTABand } from "@/components/marketing/Pieces";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { useT } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות · TarraCoata" },
      {
        name: "description",
        content:
          "TarraCoata — סטודיו דיגיטלי ממוקד שעובד עם מספר מצומצם של לקוחות כדי לשמור על איכות בלתי מתפשרת.",
      },
      { property: "og:title", content: "About — TarraCoata" },
      {
        property: "og:description",
        content: "A focused digital studio. Principles, process, and a small client roster.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principleKeys = [1, 2, 3, 4] as const;
const stepKeys = [1, 2, 3, 4] as const;

function AboutPage() {
  const t = useT();
  return (
    <>
      <Hero eyebrow={t("nav_about")} title={t("about_title")} sub={t("about_sub")} showVisual />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="hud-frame overflow-hidden border border-border/40">
              <ParallaxImage
                src="/brand/executive-portrait.png"
                alt="TarraCoata"
                containerClassName="aspect-[4/5]"
                parallax={24}
              />
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <Eyebrow>{t("principles_title")}</Eyebrow>
            <ul className="grid gap-px bg-[var(--color-hairline)] sm:grid-cols-2">
              {principleKeys.map((k) => (
                <motion.li key={k} variants={fadeUp} className="bg-background p-8 lg:p-10">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {t(`principle_${k}_t` as const)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t(`principle_${k}_b` as const)}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="hairline-t">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{t("process_title")}</Eyebrow>
          </div>
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-px bg-[var(--color-hairline)] lg:col-span-8"
          >
            {stepKeys.map((k) => (
              <motion.li key={k} variants={fadeUp} className="bg-background p-8 lg:p-10">
                <h3 className="text-xl font-semibold tracking-tight">
                  {t(`step_${k}_t` as const)}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t(`step_${k}_b` as const)}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

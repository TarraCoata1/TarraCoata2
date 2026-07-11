import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { Section } from "@/components/layout/Container";
import { PrimaryCTA } from "./CTAButtons";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function CTABand() {
  const t = useT();

  return (
    <Section fullBleed className="relative overflow-hidden border-t border-[var(--color-hairline)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto size-[50rem] opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.22 295 / 0.30) 0%, transparent 60%)",
        }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={staggerContainer}
        className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-balance text-headline font-semibold tracking-tight">
            {t("cta_band_title")}
          </h2>
          <p className="mt-6 max-w-md text-body-lg text-muted-foreground">{t("cta_band_sub")}</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <PrimaryCTA to="/contact">{t("cta_contact")}</PrimaryCTA>
        </motion.div>
      </motion.div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { Section } from "@/components/layout/Container";
import { RevealText } from "@/components/motion/RevealText";
import { fadeUp, lineDraw, staggerContainer } from "@/lib/motion";

export function PhilosophyBand() {
  const t = useT();

  return (
    <Section
      fullBleed
      className="relative overflow-hidden border-y border-[var(--color-hairline)] bg-surface/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 50%, oklch(0.38 0.18 295 / 0.20), transparent 70%)",
        }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={staggerContainer}
        className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20"
      >
        <div className="lg:col-span-6">
          <motion.div variants={lineDraw} className="mb-8 h-px w-full origin-left bg-accent/40" />
          <h2 className="text-balance text-headline font-semibold tracking-tight">
            <span className="text-gradient-purple">
              <RevealText split="words">{t("philosophy_title")}</RevealText>
            </span>
          </h2>
        </div>
        <div className="lg:col-span-6">
          <motion.p variants={fadeUp} className="text-body-lg leading-relaxed text-muted-foreground">
            {t("philosophy_body")}
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
}

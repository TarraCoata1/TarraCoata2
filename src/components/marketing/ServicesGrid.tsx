import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang, useT } from "@/lib/i18n";
import { services } from "@/content/services";
import { Section, Eyebrow } from "@/components/layout/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ServicesGrid() {
  const t = useT();
  const { lang } = useLang();

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{t("expertise")}</Eyebrow>
          <h2 className="text-headline font-semibold tracking-tight">{t("expertise_sub")}</h2>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid gap-px overflow-hidden border border-border bg-[var(--color-hairline)] lg:col-span-8"
        >
          {services.map((s, idx) => {
            const Icon = s.icon;
            const c = s[lang];
            return (
              <motion.li key={s.slug} variants={fadeUp} className="bg-background">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex items-start gap-6 p-8 transition-colors duration-500 hover:bg-accent/[0.04] lg:p-10"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 start-0 w-px bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-sm border border-border bg-surface/40 text-muted-foreground transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent/10 group-hover:text-accent group-hover:shadow-[0_0_30px_-5px_oklch(0.62_0.20_295/0.5)]">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span className="tabular text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                          0{idx + 1}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-accent lg:text-2xl">
                          {c.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-accent rtl:group-hover:-translate-x-0.5" />
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {c.short}
                    </p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}

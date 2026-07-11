import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang, useT } from "@/lib/i18n";
import { caseStudies } from "@/content/caseStudies";
import { Section, Eyebrow } from "@/components/layout/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CaseStudyGrid({ limit }: { limit?: number }) {
  const t = useT();
  const { lang } = useLang();
  const list = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section>
      <div className="mb-16 flex items-end justify-between">
        <div>
          <Eyebrow>{t("cases_title")}</Eyebrow>
          <h2 className="text-headline font-semibold tracking-tight">{t("cases_sub")}</h2>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12"
      >
        {list.map((cs, idx) => {
          const c = cs[lang];
          const isFeatured = idx === 0;
          return (
            <motion.article
              key={cs.slug}
              variants={fadeUp}
              className={cn(
                "group relative overflow-hidden rounded-sm border border-border bg-surface/30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/40 hover:bg-surface/50 hover:shadow-[0_30px_80px_-30px_oklch(0.62_0.20_295/0.5)]",
                isFeatured ? "sm:col-span-2 lg:col-span-7" : "lg:col-span-5",
              )}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-1/2 left-1/2 size-[140%] -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, oklch(0.62 0.20 295 / 0.25) 0%, transparent 70%)",
                }}
              />
              <Link
                to="/portfolio/$slug"
                params={{ slug: cs.slug }}
                className="relative flex h-full flex-col p-8 lg:p-10"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span>{c.sector}</span>
                  <span className="tabular text-accent">{cs.year}</span>
                </div>
                <h3
                  className={cn(
                    "mt-8 font-semibold tracking-tight transition-colors duration-500 group-hover:text-gradient-purple",
                    isFeatured ? "text-3xl lg:text-4xl" : "text-2xl",
                  )}
                >
                  {c.client}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.title}</p>
                <div className="hairline-t mt-10 grid grid-cols-3 gap-4 pt-8">
                  {c.results.map((r) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="tabular text-2xl font-semibold tracking-tight text-foreground transition-colors duration-500 group-hover:text-accent-glow lg:text-3xl">
                        {r.value}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                        {r.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                  {t("cta_view")}
                  <ArrowUpRight className="size-3 transition-transform duration-500 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </div>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}

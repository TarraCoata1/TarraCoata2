import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero, PrimaryCTA, CTABand } from "@/components/marketing/Pieces";
import { Section, Eyebrow } from "@/components/layout/Container";
import { caseStudies, getCase } from "@/content/caseStudies";
import { useLang, useT } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!caseStudies.find((c) => c.slug === params.slug)) throw notFound();
  },
  loader: ({ params }) => ({ caseStudy: getCase(params.slug)! }),
  head: ({ params, loaderData }) => {
    const cs = loaderData?.caseStudy;
    if (!cs) return { meta: [] };
    const path = `/portfolio/${params.slug}`;
    return {
      meta: [
        { title: `${cs.he.client} · ${cs.he.title} · TarraCoata` },
        { name: "description", content: cs.he.solution },
        { property: "og:title", content: `${cs.en.client} — ${cs.en.title}` },
        { property: "og:description", content: cs.en.solution },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleSchema({
              title: cs.en.title,
              description: cs.en.solution,
              date: `${cs.year}-01-01`,
              urlPath: path,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Work", path: "/portfolio" },
              { name: cs.en.client, path },
            ]),
          ),
        },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { caseStudy } = Route.useLoaderData();
  const { lang } = useLang();
  const t = useT();
  const c = caseStudy[lang];

  return (
    <article>
      <Hero eyebrow={`${c.sector} · ${caseStudy.year}`} title={c.title} sub={c.problem} showVisual={false}>
        <PrimaryCTA to="/contact">{t("cta_start")}</PrimaryCTA>
      </Hero>

      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-12 md:grid-cols-3"
        >
          {c.results.map((r: { label: string; value: string }) => (
            <motion.div key={r.label} variants={fadeUp} className="border-s-2 border-accent ps-6">
              <div className="tabular text-5xl font-semibold tracking-tight text-accent-glow lg:text-6xl">
                {r.value}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {r.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="hairline-t">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{lang === "he" ? "הפתרון" : "Solution"}</Eyebrow>
          </div>
          <p className="max-w-2xl text-body-lg leading-relaxed text-muted-foreground lg:col-span-8">
            {c.solution}
          </p>
        </div>
      </Section>

      <Section className="hairline-t">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{lang === "he" ? "סטאק" : "Stack"}</Eyebrow>
          </div>
          <div className="flex flex-wrap gap-2 lg:col-span-8">
            {caseStudy.stack.map((s: string) => (
              <span
                key={s}
                className="rounded-sm border border-border px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CTABand />
    </article>
  );
}

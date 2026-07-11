import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Hero, CTABand } from "@/components/marketing/Pieces";
import { Section } from "@/components/layout/Container";
import { posts } from "@/content/posts";
import { useLang, useT } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "בלוג · TarraCoata" },
      { name: "description", content: "מאמרים על בנייה, ביצועים, AI ומוצר דיגיטלי." },
      { property: "og:title", content: "Journal — TarraCoata" },
      {
        property: "og:description",
        content: "Notes on building, performance, AI and digital product.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const t = useT();
  const { lang } = useLang();
  return (
    <>
      <Hero eyebrow={t("nav_blog")} title={t("blog_title")} sub={t("blog_sub")} showVisual={false} />
      <Section>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-px bg-[var(--color-hairline)]"
        >
          {posts.map((p) => {
            const c = p[lang];
            return (
              <motion.li key={p.slug} variants={fadeUp} className="bg-background">
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group grid items-baseline gap-6 p-8 transition-colors duration-500 hover:bg-surface/40 lg:grid-cols-[160px_1fr_auto] lg:p-10"
                >
                  <time className="tabular text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {p.date}
                  </time>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-accent lg:text-2xl">
                      {c.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {c.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-accent rtl:group-hover:-translate-x-0.5" />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </Section>
      <CTABand />
    </>
  );
}

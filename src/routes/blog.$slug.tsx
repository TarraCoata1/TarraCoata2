import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/Container";
import { CTABand } from "@/components/marketing/Pieces";
import { RevealText } from "@/components/motion/RevealText";
import { posts, getPost } from "@/content/posts";
import { useLang } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { fadeUp } from "@/lib/motion";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!posts.find((p) => p.slug === params.slug)) throw notFound();
  },
  loader: ({ params }) => ({ post: getPost(params.slug)! }),
  head: ({ params, loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [] };
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${p.he.title} · TarraCoata` },
        { name: "description", content: p.he.excerpt },
        { property: "og:title", content: p.en.title },
        { property: "og:description", content: p.en.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleSchema({ title: p.en.title, description: p.en.excerpt, date: p.date, urlPath: path }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Journal", path: "/blog" },
              { name: p.en.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { lang } = useLang();
  const c = post[lang];
  return (
    <article>
      <Container className="pt-28 lg:pt-36">
        <time className="tabular text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          {post.date} · {post.readMinutes} min
        </time>
        <h1 className="mt-8 max-w-4xl text-balance text-headline font-semibold tracking-tight">
          <RevealText split="words">{c.title}</RevealText>
        </h1>
        <p className="mt-8 max-w-2xl text-body-lg text-muted-foreground">{c.excerpt}</p>
      </Container>
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl space-y-8 text-body-lg leading-relaxed text-foreground/90"
        >
          {c.body.split("\n\n").map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      </Section>
      <CTABand />
    </article>
  );
}

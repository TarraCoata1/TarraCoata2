export const SITE_NAME = "TarraCoata";
export const SITE_TAGLINE = "Digital studio · Israel";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "/",
    description: "Digital studio building web, e-commerce, landing pages, AI automations and full-stack systems.",
    areaServed: "IL",
    address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
    email: "tarracoatainfo@gmail.com",
    telephone: "+972-54-696-9367",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    image: "/og.jpg",
    url: "/",
    telephone: "+972-54-696-9367",
    email: "tarracoatainfo@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "Tel Aviv" },
    priceRange: "$$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: "/",
  };
}

export function serviceSchema(name: string, description: string, urlPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: urlPath,
    provider: { "@type": "Organization", name: SITE_NAME },
    areaServed: "IL",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; date: string; urlPath: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    url: opts.urlPath,
    author: { "@type": "Organization", name: SITE_NAME },
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path,
    })),
  };
}

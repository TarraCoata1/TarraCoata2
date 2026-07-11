export { Hero } from "./Hero";
export { PrimaryCTA, SecondaryCTA } from "./CTAButtons";
export { ServicesGrid } from "./ServicesGrid";
export { CaseStudyGrid } from "./CaseStudyGrid";
export { PhilosophyBand } from "./PhilosophyBand";
export { CTABand } from "./CTABand";

import type { Service } from "@/content/services";
import { useLang } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export function ServiceTeaser({ service }: { service: Service }) {
  const { lang } = useLang();
  const c = service[lang];
  return (
    <Container className="py-12">
      <h2 className="text-headline font-semibold tracking-tight">{c.title}</h2>
      <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{c.long}</p>
    </Container>
  );
}

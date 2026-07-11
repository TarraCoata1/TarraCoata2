import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/lib/i18n";
import type { FaqItem } from "@/content/faq";

export function FAQList({ items }: { items: FaqItem[] }) {
  const { lang } = useLang();
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => {
        const c = item[lang];
        return (
          <AccordionItem key={i} value={`item-${i}`} className="border-[var(--color-hairline)]">
            <AccordionTrigger className="py-6 text-start text-base font-medium tracking-tight transition-colors duration-300 hover:text-accent hover:no-underline md:text-lg">
              {c.q}
            </AccordionTrigger>
            <AccordionContent className="pb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
              {c.a}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { useT } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="hairline-t mt-32 bg-surface/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-16 py-20 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/brand/logo.png" alt="TarraCoata" className="h-8 w-auto" />
              <span className="font-display text-sm font-semibold tracking-[0.12em] uppercase">
                {t("brand")}
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Tel Aviv · Israel
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {t("footer_nav")}
            </h3>
            <ul className="mt-6 grid gap-3 text-sm">
              {(
                [
                  ["/services", t("nav_services")],
                  ["/portfolio", t("nav_portfolio")],
                  ["/blog", t("nav_blog")],
                  ["/about", t("nav_about")],
                  ["/faq", t("nav_faq")],
                  ["/contact", t("nav_contact")],
                ] as const
              ).map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-muted-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {t("footer_contact")}
            </h3>
            <ul className="mt-6 grid gap-3 text-sm">
              <li>
                <a
                  href="mailto:tarracoatainfo@gmail.com"
                  dir="ltr"
                  className="text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  tarracoatainfo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/972546969367"
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  WhatsApp · +972 54 696 9367
                </a>
              </li>
              <li>
                <a
                  href="tel:+972546969367"
                  dir="ltr"
                  className="text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  +972 54 696 9367
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="hairline-t py-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© TarraCoata 2026. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  );
}

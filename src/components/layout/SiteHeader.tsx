import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/motion";

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "he" ? "en" : "he")}
      className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 hover:text-accent"
      aria-label="Toggle language"
    >
      {lang === "he" ? "EN" : "HE"}
    </button>
  );
}

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { to: "/services", label: t("nav_services") },
    { to: "/portfolio", label: t("nav_portfolio") },
    { to: "/blog", label: t("nav_blog") },
    { to: "/about", label: t("nav_about") },
    { to: "/faq", label: t("nav_faq") },
  ] as const;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "hairline-b bg-background/85 backdrop-blur-2xl"
            : "bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              to="/"
              className="group flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <img
                src="/brand/logo.png"
                alt="TarraCoata"
                className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
              />
              <span className="hidden font-display text-sm font-semibold tracking-[0.12em] uppercase sm:inline">
                {t("brand")}
              </span>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="nav-link-underline text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  activeProps={{
                    className:
                      "nav-link-underline text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors duration-300",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-8 lg:flex">
              <LangToggle />
              <Link to="/contact">
                <MagneticButton className="rounded-sm bg-accent px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent-foreground shadow-[0_8px_30px_-8px_oklch(0.62_0.20_295/0.7)] hover:shadow-[0_12px_40px_-8px_oklch(0.62_0.20_295/0.9)]">
                  {t("cta_start")}
                </MagneticButton>
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      <div className="h-20" aria-hidden />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="corner-brackets absolute inset-6 pointer-events-none" />
            <Container className="flex h-full flex-col justify-center py-24">
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col gap-2"
                aria-label="Mobile"
              >
                {links.map((l) => (
                  <motion.div key={l.to} variants={fadeUp}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-headline font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                      activeProps={{ className: "text-accent" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <div className="hairline-t mt-12 flex items-center justify-between pt-8">
                <LangToggle />
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <MagneticButton className="rounded-sm bg-accent px-6 py-3 text-xs font-medium uppercase tracking-widest text-accent-foreground">
                    {t("cta_start")}
                  </MagneticButton>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

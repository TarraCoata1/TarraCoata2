import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/layout/Container";
import { RevealText } from "@/components/motion/RevealText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero({
  eyebrow,
  title,
  sub,
  children,
  showVisual = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  children?: ReactNode;
  showVisual?: boolean;
}) {
  const titleText = typeof title === "string" ? title : null;

  return (
    <section className="relative overflow-hidden bg-ambient-purple">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 start-1/4 size-[60rem] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.22 295 / 0.35) 0%, transparent 60%)",
        }}
      />

      <Container className="relative grid min-h-[85vh] items-center gap-16 py-28 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-5">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>

            <h1 className="text-balance text-display font-semibold tracking-tight">
              {titleText ? <RevealText split="words">{titleText}</RevealText> : title}
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-lg text-body-lg text-muted-foreground"
            >
              {sub}
            </motion.p>

            {children && (
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>

        {showVisual && (
          <div className="relative lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative aspect-[4/5] max-h-[70vh] w-full"
            >
              <div className="absolute inset-[8%] opacity-40">
                <ParallaxImage
                  src="/brand/constellation-profile.png"
                  alt=""
                  containerClassName="h-full w-full"
                  parallax={20}
                  hoverDarken={false}
                />
              </div>

              <div className="hud-frame absolute inset-0 overflow-hidden border border-border/40">
                <ParallaxImage
                  src="/brand/executive-portrait.png"
                  alt="TarraCoata"
                  containerClassName="h-full w-full"
                  parallax={30}
                />
              </div>

              <span
                aria-hidden
                className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-accent shadow-[0_0_12px_2px_oklch(0.62_0.20_295/0.8)]"
              />
              <span
                aria-hidden
                className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-accent/60"
              />
            </motion.div>
          </div>
        )}
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </section>
  );
}

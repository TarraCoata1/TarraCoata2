import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { staggerContainer, textRevealWord } from "@/lib/motion";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  split?: "words" | "none";
};

export function RevealText({ children, className, split = "words" }: RevealTextProps) {
  const text = typeof children === "string" ? children : null;

  if (!text || split === "none") {
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={textRevealWord}
        className={className}
      >
        {children}
      </motion.span>
    );
  }

  const words = text.split(/\s+/);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={staggerContainer}
      className={cn("inline", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={textRevealWord} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

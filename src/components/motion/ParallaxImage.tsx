import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  parallax?: number;
  hoverDarken?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  parallax = 40,
  hoverDarken = true,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <div ref={ref} className={cn("group relative overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
          className,
        )}
      />
      {hoverDarken && (
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/25" />
      )}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  asGrid = false,
}: {
  children: ReactNode;
  className?: string;
  asGrid?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[90rem] px-[var(--grid-margin)]",
        asGrid && "editorial-grid",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  fullBleed = false,
  splitLayout = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
  splitLayout?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        fullBleed && "relative overflow-hidden",
        splitLayout && "hairline-t",
        className,
      )}
    >
      <Container asGrid={splitLayout}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-[var(--text-caption)] uppercase tracking-[0.28em] text-muted-foreground">
      <span className="h-px w-10 bg-accent" />
      {children}
    </div>
  );
}

export function GridSpan({
  children,
  className,
  span = 12,
  start,
}: {
  children: ReactNode;
  className?: string;
  span?: number;
  start?: number;
}) {
  return (
    <div
      className={cn(className)}
      style={{
        gridColumn: start ? `${start} / span ${span}` : `span ${span} / span ${span}`,
      }}
    >
      {children}
    </div>
  );
}

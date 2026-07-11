import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export function PrimaryCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="inline-block">
      <MagneticButton
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-sm bg-accent px-7 py-3.5",
          "text-[11px] font-medium uppercase tracking-[0.2em] text-accent-foreground",
          "shadow-[0_10px_40px_-10px_oklch(0.62_0.20_295/0.6)]",
          "hover:shadow-[0_15px_50px_-10px_oklch(0.62_0.20_295/0.8)]",
        )}
      >
        <span className="relative z-10">{children}</span>
        <ArrowUpRight className="relative z-10 size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      </MagneticButton>
    </Link>
  );
}

export function SecondaryCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:bg-accent/5 hover:text-accent"
    >
      {children}
    </Link>
  );
}

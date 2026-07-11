import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Hero } from "@/components/marketing/Pieces";
import { Section } from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useT, useLang } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר · TarraCoata" },
      { name: "description", content: "ספר לנו על הפרויקט. נחזור תוך 24 שעות." },
      { property: "og:title", content: "Contact — TarraCoata" },
      { property: "og:description", content: "Tell us about your project. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const t = useT();
  const { lang } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send_failed");
      toast.success(t("form_ok"));
      reset();
    } catch {
      toast.error(t("form_err"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        eyebrow={t("nav_contact")}
        title={t("contact_title")}
        sub={t("contact_sub")}
        showVisual={false}
      />
      <Section>
        <div className="grid gap-20 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 text-sm lg:col-span-4"
          >
            {(
              [
                ["Email", "mailto:tarracoatainfo@gmail.com", "tarracoatainfo@gmail.com"],
                ["WhatsApp", "https://wa.me/972546969367", "+972 54 696 9367"],
                ["Phone", "tel:+972546969367", "+972 54 696 9367"],
              ] as const
            ).map(([label, href, value]) => (
              <motion.div key={label} variants={fadeUp}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {label}
                </div>
                <a
                  href={href}
                  dir="ltr"
                  className="mt-3 block text-base text-foreground transition-colors duration-300 hover:text-accent"
                >
                  {value}
                </a>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {lang === "he" ? "מיקום" : "Location"}
              </div>
              <div className="mt-3 text-base text-foreground">Tel Aviv, Israel</div>
            </motion.div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-8 lg:col-span-8"
            noValidate
          >
            <input type="text" autoComplete="off" tabIndex={-1} className="hidden" {...register("website")} />

            <motion.div variants={fadeUp} className="grid gap-2">
              <Label htmlFor="name">{t("form_name")}</Label>
              <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("form_email")}</Label>
                <Input id="email" type="email" dir="ltr" {...register("email")} aria-invalid={!!errors.email} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{t("form_phone")}</Label>
                <Input id="phone" type="tel" dir="ltr" {...register("phone")} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-2">
              <Label htmlFor="company">{t("form_company")}</Label>
              <Input id="company" {...register("company")} />
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-2">
              <Label htmlFor="message">{t("form_message")}</Label>
              <Textarea id="message" rows={6} {...register("message")} aria-invalid={!!errors.message} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MagneticButton className="inline-block">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-sm bg-accent px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.20_295/0.6)] transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? t("form_sending") : t("form_send")}
                </button>
              </MagneticButton>
            </motion.div>
          </motion.form>
        </div>
      </Section>
    </>
  );
}

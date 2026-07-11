import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

const hits = new Map<string, { count: number; reset: number }>();
function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= limit;
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
        if (!rateLimit(ip)) {
          return new Response(JSON.stringify({ error: "rate_limited" }), {
            status: 429,
            headers: { "content-type": "application/json" },
          });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "invalid_json" }), { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: "validation_failed" }), { status: 400 });
        }
        if (parsed.data.website) {
          return Response.json({ ok: true });
        }

        const { name, email, phone, company, message } = parsed.data;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const INBOX = process.env.CONTACT_INBOX_EMAIL;
        const FROM = process.env.RESEND_FROM_EMAIL ?? "TarraCoata <onboarding@resend.dev>";

        if (!RESEND_API_KEY || !INBOX) {
          console.warn("[contact] email not configured — submission:", {
            name,
            email,
            phone,
            company,
            message,
          });
          return Response.json({ ok: true, queued: true });
        }

        const html = `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escape(phone)}</p>` : ""}
          ${company ? `<p><strong>Company:</strong> ${escape(company)}</p>` : ""}
          <hr/>
          <p>${escape(message).replace(/\n/g, "<br/>")}</p>
        `;

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: FROM,
              to: [INBOX],
              reply_to: email,
              subject: `New project inquiry — ${name}`,
              html,
            }),
          });
          if (!res.ok) {
            console.error("[contact] resend error", res.status, await res.text());
            return new Response(JSON.stringify({ error: "email_failed" }), { status: 502 });
          }
        } catch (err) {
          console.error("[contact] resend exception", err);
          return new Response(JSON.stringify({ error: "email_failed" }), { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

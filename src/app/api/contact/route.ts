import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyTurnstile } from "@/lib/api/verifyTurnstile";
import { insertWebhookLog } from "@/lib/api/supabaseAdmin";
export const runtime = "nodejs";

// Schema aligned with src/components/forms/ContactForm.tsx
// Fields: name, email, phone, business (optional), message, subject (enum)
const ContactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı").max(100),
  email: z.string().email("Geçerli bir e-posta girin"),
  phone: z
    .string()
    .min(7, "Telefon numarası çok kısa")
    .max(25, "Telefon numarası çok uzun"),
  business: z
    .string()
    .max(150, "İşletme adı çok uzun")
    .optional()
    .default(""),
  subject: z.enum(["demo", "pricing", "support", "partnership", "other"]),
  message: z.string().min(5, "Mesaj en az 5 karakter olmalı").max(2000),
});

function toErrorMap(issues: z.ZodIssue[]) {
  const map: Record<string, string> = {};
  for (const issue of issues) {
    const path = issue.path.join(".");
    if (path) {
      map[path] = issue.message;
    }
  }
  return map;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Turnstile token doğrulaması (lokalde SECRET yoksa otomatik geçer)
    const token: string | undefined = body?.turnstileToken || body?.cf_turnstile_response || body?.["cf-turnstile-response"]; 
    const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0] ?? null;
    const captcha = await verifyTurnstile(token, forwardedFor);
    if (!captcha.valid) {
      return NextResponse.json(
        { ok: false, error: "invalid_captcha" },
        { status: 403 }
      );
    }

    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: toErrorMap(parsed.error.issues),
        },
        { status: 400 }
      );
    }

    // Supabase'e kalıcı kayıt (webhook_logs)
    let persisted = false;
    let recordId: string | undefined = undefined;
    try {
      const { data, error } = await insertWebhookLog(
        "website_contact",
        parsed.data,
        200
      );
      if (!error && data?.id) {
        persisted = true;
        recordId = data.id as string;
      }
    } catch (e) {
      // Kayıt hatası olursa API yanıtını bozmayalım; persisted=false döneriz
      persisted = false;
      console.warn("contact_persist_error");
    }

    // In later steps we will:
    // - Verify captcha (Turnstile)
    // - Send email / push to CRM

    return NextResponse.json(
      {
        ok: true,
        message: "Contact received",
        persisted,
        recordId,
        // A simple opaque id for client-side correlation (non-sensitive)
        requestId: Math.random().toString(36).slice(2, 10),
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

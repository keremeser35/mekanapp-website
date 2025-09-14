import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyTurnstile } from "@/lib/api/verifyTurnstile";
import { insertWebhookLog } from "@/lib/api/supabaseAdmin";
export const runtime = "nodejs";

// DemoRequestForm alanları ile birebir uyumlu şema
// Kaynak: src/components/forms/DemoRequestForm.tsx
const DemoRequestSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı").max(100),
  email: z.string().email("Geçerli bir e-posta girin"),
  phone: z
    .string()
    .min(7, "Telefon numarası çok kısa")
    .max(25, "Telefon numarası çok uzun"),
  business: z
    .string()
    .min(2, "İşletme adı en az 2 karakter olmalı")
    .max(150, "İşletme adı çok uzun"),
  businessType: z.enum([
    "restaurant",
    "cafe",
    "retail",
    "hotel",
    "beauty",
    "fitness",
    "other",
  ]),
  employeeCount: z.enum(["1-5", "6-20", "21-50", "50+"]),
  currentSolutions: z
    .string()
    .max(1000, "Metin çok uzun (maksimum 1000 karakter)")
    .optional()
    .default(""),
  interests: z
    .array(
      z.enum(["spinwheel", "qrmenu", "loyalty", "analytics", "pos", "mobile"])
    )
    .min(1, "En az bir ilgi alanı seçin"),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"]),
  message: z
    .string()
    .max(2000, "Mesaj çok uzun (maksimum 2000 karakter)")
    .optional()
    .default(""),
});

function toErrorMap(issues: z.ZodIssue[]) {
  const map: Record<string, string> = {};
  for (const issue of issues) {
    const path = issue.path.join(".");
    if (path) map[path] = issue.message;
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

    const parsed = DemoRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: toErrorMap(parsed.error.issues) },
        { status: 400 }
      );
    }

    // Supabase'e kalıcı kayıt (webhook_logs)
    let persisted = false;
    let recordId: string | undefined = undefined;
    try {
      const { data, error } = await insertWebhookLog(
        "website_demo_request",
        parsed.data,
        200
      );
      if (!error && data?.id) {
        persisted = true;
        recordId = data.id as string;
      }
    } catch (e) {
      persisted = false;
      console.warn("demo_persist_error");
    }

    // Sonraki adımlarda:
    // - Captcha (Turnstile) doğrulaması
    // - E-posta gönderimi / CRM'e push

    return NextResponse.json(
      {
        ok: true,
        message: "Demo request received",
        persisted,
        recordId,
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

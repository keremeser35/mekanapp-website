import { NextResponse } from "next/server";
import { z } from "zod";
import { insertWebhookLog } from "@/lib/api/supabaseAdmin";
export const runtime = "nodejs";

const NewsletterSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin"),
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
    const parsed = NewsletterSchema.safeParse(body);

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
        "website_newsletter",
        parsed.data,
        200
      );
      if (!error && data?.id) {
        persisted = true;
        recordId = data.id as string;
      }
    } catch (e) {
      persisted = false;
      console.warn("newsletter_persist_error");
    }

    return NextResponse.json(
      { ok: true, message: "Subscribed", persisted, recordId },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

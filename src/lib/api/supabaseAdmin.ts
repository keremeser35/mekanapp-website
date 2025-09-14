type InsertResult<T> = { data?: T; error?: { message: string } };
import fs from "fs";
import path from "path";

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && serviceKey) {
    return { url, serviceKey };
  }

  // Fallback: monorepo içindeki muhtemel .env dosyalarından yüklemeyi dene
  // Not: Bu sadece sunucu tarafında çalışır; üretimde dosyalar yoksa bu adım atlanır.
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(process.cwd(), ".env"),
    // monorepo kökü (.. / ..)
    path.resolve(process.cwd(), "../../.env.local"),
    path.resolve(process.cwd(), "../../.env"),
    // admin panel env (kardeş proje)
    path.resolve(process.cwd(), "../../web-apps/admin-panel/.env.local"),
    path.resolve(process.cwd(), "../../web-apps/admin-panel/.env"),
  ];

  for (const file of candidates) {
    try {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, "utf8");
        for (const line of content.split(/\r?\n/)) {
          if (!line || line.trim().startsWith("#")) continue;
          const idx = line.indexOf("=");
          if (idx === -1) continue;
          const key = line.slice(0, idx).trim();
          const value = line.slice(idx + 1).trim();
          if (!process.env[key] && value) {
            process.env[key] = value;
          }
        }
      }
    } catch {
      // sessiz geç
    }
  }

  const fUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const fServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!fUrl || !fServiceKey) {
    throw new Error(
      "Supabase ortam değişkenleri eksik: SUPABASE_URL (veya NEXT_PUBLIC_SUPABASE_URL) ve SUPABASE_SERVICE_ROLE_KEY gerekir"
    );
  }
  return { url: fUrl, serviceKey: fServiceKey };
}

export async function insertWebhookLog(
  source: string,
  payload: any,
  status?: number,
  idempotencyKey?: string
): Promise<InsertResult<{ id: string }>> {
  const { url, serviceKey } = getSupabaseEnv();
  try {
    const res = await fetch(`${url}/rest/v1/webhook_logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceKey}`,
        apikey: serviceKey,
        Prefer: "return=representation",
        "Content-Profile": "public",
        Accept: "application/json",
      } as any,
      body: JSON.stringify({
        source,
        payload,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { error: { message: text || `Supabase HTTP ${res.status}` } };
    }

    const rows = (await res.json()) as Array<{ id: string }>;
    return { data: rows?.[0] };
  } catch (e: any) {
    return { error: { message: e?.message || "Supabase insert failed" } };
  }
}

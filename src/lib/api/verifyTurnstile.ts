export type TurnstileVerifyResult = {
  success: boolean;
  "error-codes"?: string[];
  action?: string;
  cdata?: string;
};

/**
 * Cloudflare Turnstile sunucu tarafı doğrulaması.
 * Eğer TURNSTILE_SECRET_KEY tanımlı DEĞİLSE (örn. lokal geliştirme), doğrulama atlanır ve success:true döner.
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteip?: string | null
): Promise<{ valid: boolean; skipped: boolean; error?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Secret yoksa (örn. lokal), doğrulamayı şimdilik atla
  if (!secret) {
    return { valid: true, skipped: true };
  }

  if (!token) {
    return { valid: false, skipped: false, error: "missing_token" };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", token);
    if (remoteip) {
      formData.append("remoteip", remoteip);
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }
    );

    const data = (await res.json()) as TurnstileVerifyResult;
    return { valid: Boolean(data.success), skipped: false };
  } catch (e: any) {
    return { valid: false, skipped: false, error: "verify_failed" };
  }
}

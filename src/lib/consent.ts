export type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const CONSENT_COOKIE = "mek_consent";

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split(";").map(c => c.trim()).find(c => c.startsWith(CONSENT_COOKIE + "="));
  if (!match) return null;
  try {
    const value = decodeURIComponent(match.split("=")[1] || "");
    const parsed = JSON.parse(value) as Consent;
    if (typeof parsed?.necessary === "boolean") return parsed;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(consent: Consent) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(consent));
  const maxAge = 60 * 60 * 24 * 180; // 180 gün
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function ensureDefaultConsent() {
  const existing = readConsent();
  if (existing) return existing;
  const def: Consent = {
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  };
  writeConsent(def);
  return def;
}

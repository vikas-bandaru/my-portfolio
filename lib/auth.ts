import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE_NAME = "vb_studio_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

// Create a deterministic HMAC signature for the session token
function signToken(value: string, secret: string): string {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(value);
  return `${value}.${hmac.digest("hex")}`;
}

function verifyToken(token: string, secret: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [value, signature] = parts;
  const expected = signToken(value, secret);
  return token === expected;
}

export async function createStudioSession(secretAttempt: string): Promise<boolean> {
  const adminSecret = process.env.CMS_ADMIN_SECRET?.trim();
  if (!adminSecret || secretAttempt !== adminSecret) {
    return false;
  }

  const timestamp = Date.now().toString();
  const token = signToken(timestamp, adminSecret);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  return true;
}

export async function verifyStudioSession(): Promise<boolean> {
  const adminSecret = process.env.CMS_ADMIN_SECRET?.trim();
  if (!adminSecret) return false;

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie?.value) return false;

  return verifyToken(sessionCookie.value, adminSecret);
}

export async function clearStudioSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

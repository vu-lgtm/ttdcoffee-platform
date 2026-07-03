export const ADMIN_COOKIE = "ttd_admin_session";

export async function hashAdminPassword(password: string) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isAdminRequest(req: Request) {
  const cookieHeader = req.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`${ADMIN_COOKIE}=([^;]+)`));
  const session = match?.[1];

  if (!session) {
    return false;
  }

  const expected = await hashAdminPassword(process.env.ADMIN_PASSWORD ?? "");
  return session === expected;
}

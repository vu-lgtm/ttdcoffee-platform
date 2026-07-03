import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, hashAdminPassword } from "./app/lib/admin-auth";

export const config = {
  matcher: ["/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const session = req.cookies.get(ADMIN_COOKIE)?.value;
  const expected = await hashAdminPassword(process.env.ADMIN_PASSWORD ?? "");

  if (session && session === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/admin/login", req.url);
  loginUrl.searchParams.set("redirect", req.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

import { NextResponse } from "next/server";
import { ADMIN_COOKIE, hashAdminPassword } from "../../../lib/admin-auth";

export async function POST(req: Request) {
  const body = await req.json();
  const password = body.password as string | undefined;

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, message: "Sai mật khẩu" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set(ADMIN_COOKIE, await hashAdminPassword(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}

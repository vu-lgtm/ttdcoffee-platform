import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../../lib/admin-auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await req.json();

  const updatable: Record<string, unknown> = {};
  for (const key of ["name", "company", "email", "phone", "country", "notes"]) {
    if (key in body) {
      updatable[key] = body[key];
    }
  }

  const { error } = await supabase
    .from("customers")
    .update(updatable)
    .eq("id", Number(id));

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

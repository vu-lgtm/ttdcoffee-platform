import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../lib/admin-auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabase.from("leads").insert([
    {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      country: body.country,
      product: body.product,
      quantity: body.quantity,
      message: body.message,
      status: "new",
    },
  ]);

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await req.json();

  const { id, status } = body;

  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

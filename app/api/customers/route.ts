import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const leadId = body.lead_id as number | undefined;

  if (leadId) {
    const { data: existing, error: existingError } = await supabase
      .from("customers")
      .select("*")
      .eq("lead_id", leadId)
      .maybeSingle();

    if (existingError) {
      return NextResponse.json(
        { success: false, message: existingError.message },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json({ success: true, customer: existing });
    }
  }

  const { data, error } = await supabase
    .from("customers")
    .insert([
      {
        lead_id: leadId ?? null,
        name: body.name,
        company: body.company,
        email: body.email,
        phone: body.phone,
        country: body.country,
        notes: body.notes,
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, customer: data });
}

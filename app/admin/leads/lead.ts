import { supabaseServer } from "../../lib/supabase-server";

export type Lead = {
  id: number;
  created_at: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
  status: string;
};

export const statusColors: Record<string, string> = {
  new: "#2B6CB0",
  contacted: "#B7791F",
  quoted: "#6B46C1",
  won: "#2F855A",
  lost: "#C53030",
};

export async function getLeads(): Promise<Lead[]> {
  const { data, error } = await supabaseServer
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getLeadById(id: number): Promise<Lead | null> {
  const { data, error } = await supabaseServer
    .from("leads")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

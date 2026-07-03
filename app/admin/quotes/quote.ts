import { supabaseServer } from "../../lib/supabase-server";

export type Quote = {
  id: number;
  created_at: string;
  customer_id: number;
  product: string;
  quantity: string | null;
  unit_price: number;
  currency: string;
  incoterm: string;
  valid_until: string | null;
  notes: string | null;
  status: string;
};

export const statusColors: Record<string, string> = {
  draft: "#999",
  sent: "#2B6CB0",
  accepted: "#2F855A",
  rejected: "#C53030",
};

export async function getQuotes(): Promise<Quote[]> {
  const { data, error } = await supabaseServer
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getQuoteById(id: number): Promise<Quote | null> {
  const { data, error } = await supabaseServer
    .from("quotes")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

export async function getQuotesByCustomerId(
  customerId: number
): Promise<Quote[]> {
  const { data, error } = await supabaseServer
    .from("quotes")
    .select("*")
    .eq("customer_id", customerId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

import { supabaseServer } from "../../lib/supabase-server";

export type Customer = {
  id: number;
  created_at: string;
  lead_id: number | null;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  notes: string | null;
};

export async function getCustomers(filters?: {
  q?: string;
}): Promise<Customer[]> {
  let query = supabaseServer
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  const term = filters?.q?.replace(/[,()%]/g, "").trim();
  if (term) {
    const pattern = `%${term}%`;
    query = query.or(
      `name.ilike.${pattern},company.ilike.${pattern},email.ilike.${pattern}`
    );
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getCustomerById(id: number): Promise<Customer | null> {
  const { data, error } = await supabaseServer
    .from("customers")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

export async function getCustomerByLeadId(
  leadId: number
): Promise<Customer | null> {
  const { data, error } = await supabaseServer
    .from("customers")
    .select("*")
    .eq("lead_id", leadId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

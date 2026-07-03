import Link from "next/link";
import { supabaseServer } from "../../lib/supabase-server";
import { LogoutButton } from "../LogoutButton";
import { LeadStatusSelect } from "./LeadStatusSelect";

type Lead = {
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

async function getLeads(): Promise<Lead[]> {
  const { data, error } = await supabaseServer
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

const statusColors: Record<string, string> = {
  new: "#2B6CB0",
  contacted: "#B7791F",
  quoted: "#6B46C1",
  won: "#2F855A",
  lost: "#C53030",
};

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <main
      style={{
        padding: 50,
        background: "#f7f5ef",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Link
          href="/admin"
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← Dashboard
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 42, marginTop: 15 }}>☕ Leads</h1>

      <p style={{ marginBottom: 40 }}>Quản lý lead từ website</p>

      <div
        style={{
          background: "white",
          borderRadius: 18,
          boxShadow: "0 5px 18px rgba(0,0,0,.08)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0ede4", textAlign: "left" }}>
              <th style={{ padding: 14 }}>Ngày</th>
              <th style={{ padding: 14 }}>Tên</th>
              <th style={{ padding: 14 }}>Công ty</th>
              <th style={{ padding: 14 }}>Email</th>
              <th style={{ padding: 14 }}>Điện thoại</th>
              <th style={{ padding: 14 }}>Quốc gia</th>
              <th style={{ padding: 14 }}>Sản phẩm</th>
              <th style={{ padding: 14 }}>Số lượng</th>
              <th style={{ padding: 14 }}>Trạng thái</th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 && (
              <tr>
                <td colSpan={9} style={{ padding: 24, textAlign: "center" }}>
                  Chưa có lead nào.
                </td>
              </tr>
            )}

            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: 14 }}>
                  {new Date(lead.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td style={{ padding: 14 }}>{lead.name}</td>
                <td style={{ padding: 14 }}>{lead.company}</td>
                <td style={{ padding: 14 }}>{lead.email}</td>
                <td style={{ padding: 14 }}>{lead.phone}</td>
                <td style={{ padding: 14 }}>{lead.country}</td>
                <td style={{ padding: 14 }}>{lead.product}</td>
                <td style={{ padding: 14 }}>{lead.quantity}</td>
                <td style={{ padding: 14 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: statusColors[lead.status] ?? "#999",
                      marginRight: 8,
                    }}
                  />
                  <LeadStatusSelect id={lead.id} status={lead.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

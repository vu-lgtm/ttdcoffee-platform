import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoutButton } from "../../LogoutButton";
import { LeadStatusSelect } from "../LeadStatusSelect";
import { getLeadById, statusColors } from "../lead";

const fields: { label: string; key: "company" | "email" | "phone" | "country" | "product" | "quantity" }[] = [
  { label: "Công ty", key: "company" },
  { label: "Email", key: "email" },
  { label: "Điện thoại", key: "phone" },
  { label: "Quốc gia", key: "country" },
  { label: "Sản phẩm", key: "product" },
  { label: "Số lượng", key: "quantity" },
];

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLeadById(Number(id));

  if (!lead) {
    notFound();
  }

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
          href="/admin/leads"
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← Leads
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 42, marginTop: 15 }}>{lead.name}</h1>

      <p style={{ marginBottom: 30, color: "#666" }}>
        Gửi lúc{" "}
        {new Date(lead.created_at).toLocaleString("vi-VN")}
      </p>

      <div
        style={{
          background: "white",
          borderRadius: 18,
          boxShadow: "0 5px 18px rgba(0,0,0,.08)",
          padding: 34,
          maxWidth: 640,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: statusColors[lead.status] ?? "#999",
            }}
          />
          <LeadStatusSelect id={lead.id} status={lead.status} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 24,
          }}
        >
          {fields.map((field) => (
            <div key={field.key}>
              <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
                {field.label}
              </div>
              <div>{lead[field.key] || "—"}</div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
            Ghi chú / Yêu cầu
          </div>
          <div style={{ whiteSpace: "pre-wrap" }}>{lead.message || "—"}</div>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoutButton } from "../../LogoutButton";
import { getCustomerById } from "../customer";

const fields: {
  label: string;
  key: "company" | "email" | "phone" | "country";
}[] = [
  { label: "Công ty", key: "company" },
  { label: "Email", key: "email" },
  { label: "Điện thoại", key: "phone" },
  { label: "Quốc gia", key: "country" },
];

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await getCustomerById(Number(id));

  if (!customer) {
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
          href="/admin/customers"
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← Customers
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 42, marginTop: 15 }}>{customer.name}</h1>

      <p style={{ marginBottom: 30, color: "#666" }}>
        Khách hàng từ {new Date(customer.created_at).toLocaleDateString("vi-VN")}
        {customer.lead_id && (
          <>
            {" — "}
            <Link
              href={`/admin/leads/${customer.lead_id}`}
              style={{ color: "#6B46C1" }}
            >
              Xem lead gốc →
            </Link>
          </>
        )}
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
              <div>{customer[field.key] || "—"}</div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
            Ghi chú
          </div>
          <div style={{ whiteSpace: "pre-wrap" }}>{customer.notes || "—"}</div>
        </div>
      </div>
    </main>
  );
}

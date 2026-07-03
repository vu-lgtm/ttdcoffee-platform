import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoutButton } from "../../LogoutButton";
import { getQuotesByCustomerId, statusColors } from "../../quotes/quote";
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

  const quotes = await getQuotesByCustomerId(customer.id);

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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 42, marginTop: 15 }}>{customer.name}</h1>
        <Link
          href={`/admin/customers/${customer.id}/edit`}
          style={{
            border: "1px solid #ddd",
            borderRadius: 999,
            padding: "9px 16px",
            fontWeight: 600,
            color: "#222",
            textDecoration: "none",
          }}
        >
          Sửa
        </Link>
      </div>

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

      <div
        style={{
          background: "white",
          borderRadius: 18,
          boxShadow: "0 5px 18px rgba(0,0,0,.08)",
          padding: 34,
          maxWidth: 640,
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Báo giá</h2>
          <Link
            href={`/admin/quotes/new?customer_id=${customer.id}`}
            style={{
              border: "none",
              borderRadius: 999,
              background: "#B7791F",
              color: "white",
              padding: "10px 18px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            + Tạo báo giá
          </Link>
        </div>

        {quotes.length === 0 && (
          <p style={{ color: "#999" }}>Chưa có báo giá nào.</p>
        )}

        {quotes.map((quote) => (
          <Link
            key={quote.id}
            href={`/admin/quotes/${quote.id}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderTop: "1px solid #eee",
              color: "#222",
              textDecoration: "none",
            }}
          >
            <span>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: statusColors[quote.status] ?? "#999",
                  marginRight: 8,
                }}
              />
              {quote.product} — {quote.unit_price.toLocaleString("en-US")}{" "}
              {quote.currency}
            </span>
            <span style={{ color: "#6B46C1" }}>Chi tiết →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

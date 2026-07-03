import Link from "next/link";
import { notFound } from "next/navigation";
import { getCustomerById } from "../../customers/customer";
import { LogoutButton } from "../../LogoutButton";
import { DeleteQuoteButton } from "../DeleteQuoteButton";
import { QuoteStatusSelect } from "../QuoteStatusSelect";
import { getQuoteById, statusColors } from "../quote";

export default async function QuoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quote = await getQuoteById(Number(id));

  if (!quote) {
    notFound();
  }

  const customer = await getCustomerById(quote.customer_id);

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
          href="/admin/quotes"
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← Quotes
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 42, marginTop: 15 }}>Báo giá #{quote.id}</h1>

      <p style={{ marginBottom: 30, color: "#666" }}>
        {customer ? (
          <>
            Khách hàng:{" "}
            <Link
              href={`/admin/customers/${customer.id}`}
              style={{ color: "#6B46C1" }}
            >
              {customer.name} →
            </Link>
          </>
        ) : (
          "Khách hàng không tồn tại"
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
              background: statusColors[quote.status] ?? "#999",
            }}
          />
          <QuoteStatusSelect id={quote.id} status={quote.status} />

          <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <Link
              href={`/admin/quotes/${quote.id}/edit`}
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

            <a
              href={`/api/quotes/${quote.id}/pdf`}
              target="_blank"
              rel="noopener noreferrer"
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
              📄 Xem / Tải PDF
            </a>

            {customer && (
              <DeleteQuoteButton id={quote.id} customerId={customer.id} />
            )}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div>
            <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
              Sản phẩm
            </div>
            <div>{quote.product}</div>
          </div>
          <div>
            <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
              Số lượng
            </div>
            <div>{quote.quantity || "—"}</div>
          </div>
          <div>
            <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
              Đơn giá
            </div>
            <div>
              {quote.unit_price.toLocaleString("en-US")} {quote.currency}
            </div>
          </div>
          <div>
            <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
              Incoterm
            </div>
            <div>{quote.incoterm}</div>
          </div>
          <div>
            <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
              Hiệu lực đến
            </div>
            <div>
              {quote.valid_until
                ? new Date(quote.valid_until).toLocaleDateString("vi-VN")
                : "—"}
            </div>
          </div>
        </div>

        <div>
          <div style={{ color: "#999", fontSize: 13, marginBottom: 4 }}>
            Ghi chú
          </div>
          <div style={{ whiteSpace: "pre-wrap" }}>{quote.notes || "—"}</div>
        </div>
      </div>
    </main>
  );
}

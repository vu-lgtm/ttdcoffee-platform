import Link from "next/link";
import { LogoutButton } from "../LogoutButton";
import { getQuotes, statusColors } from "./quote";

const statusOptions = ["draft", "sent", "accepted", "rejected"];

export default async function QuotesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const quotes = await getQuotes({ status });

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

      <h1 style={{ fontSize: 42, marginTop: 15 }}>☕ Quotes</h1>

      <p style={{ marginBottom: 24 }}>Báo giá đã tạo</p>

      <form
        method="get"
        style={{ display: "flex", gap: 12, marginBottom: 24 }}
      >
        <select
          name="status"
          defaultValue={status ?? ""}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            font: "inherit",
          }}
        >
          <option value="">Tất cả trạng thái</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            border: "none",
            borderRadius: 999,
            background: "#B7791F",
            color: "white",
            padding: "12px 22px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Lọc
        </button>

        {status && (
          <Link
            href="/admin/quotes"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#6B46C1",
              textDecoration: "none",
            }}
          >
            Xóa lọc
          </Link>
        )}
      </form>

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
              <th style={{ padding: 14 }}>Sản phẩm</th>
              <th style={{ padding: 14 }}>Số lượng</th>
              <th style={{ padding: 14 }}>Đơn giá</th>
              <th style={{ padding: 14 }}>Incoterm</th>
              <th style={{ padding: 14 }}>Trạng thái</th>
              <th style={{ padding: 14 }}></th>
            </tr>
          </thead>

          <tbody>
            {quotes.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: 24, textAlign: "center" }}>
                  Chưa có báo giá nào.
                </td>
              </tr>
            )}

            {quotes.map((quote) => (
              <tr key={quote.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: 14 }}>
                  {new Date(quote.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td style={{ padding: 14 }}>{quote.product}</td>
                <td style={{ padding: 14 }}>{quote.quantity || "—"}</td>
                <td style={{ padding: 14 }}>
                  {quote.unit_price.toLocaleString("en-US")} {quote.currency}
                </td>
                <td style={{ padding: 14 }}>{quote.incoterm}</td>
                <td style={{ padding: 14 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: statusColors[quote.status] ?? "#999",
                      marginRight: 8,
                    }}
                  />
                  {quote.status}
                </td>
                <td style={{ padding: 14 }}>
                  <Link
                    href={`/admin/quotes/${quote.id}`}
                    style={{ color: "#6B46C1", textDecoration: "none" }}
                  >
                    Chi tiết →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

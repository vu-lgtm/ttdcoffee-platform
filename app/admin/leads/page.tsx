import Link from "next/link";
import { LogoutButton } from "../LogoutButton";
import { LeadStatusSelect } from "./LeadStatusSelect";
import { getLeads, statusColors } from "./lead";

const statusOptions = ["new", "contacted", "quoted", "won", "lost"];

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const { q, status } = await searchParams;
  const leads = await getLeads({ q, status });

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

      <p style={{ marginBottom: 24 }}>Quản lý lead từ website</p>

      <form
        method="get"
        style={{ display: "flex", gap: 12, marginBottom: 24 }}
      >
        <input
          name="q"
          defaultValue={q ?? ""}
          placeholder="Tìm theo tên, công ty, email..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            font: "inherit",
          }}
        />

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
            background: "#2F855A",
            color: "white",
            padding: "12px 22px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Lọc
        </button>

        {(q || status) && (
          <Link
            href="/admin/leads"
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
              <th style={{ padding: 14 }}>Tên</th>
              <th style={{ padding: 14 }}>Công ty</th>
              <th style={{ padding: 14 }}>Email</th>
              <th style={{ padding: 14 }}>Điện thoại</th>
              <th style={{ padding: 14 }}>Quốc gia</th>
              <th style={{ padding: 14 }}>Sản phẩm</th>
              <th style={{ padding: 14 }}>Số lượng</th>
              <th style={{ padding: 14 }}>Trạng thái</th>
              <th style={{ padding: 14 }}></th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 && (
              <tr>
                <td colSpan={10} style={{ padding: 24, textAlign: "center" }}>
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
                <td style={{ padding: 14 }}>
                  <Link
                    href={`/admin/leads/${lead.id}`}
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

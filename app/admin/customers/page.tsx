import Link from "next/link";
import { LogoutButton } from "../LogoutButton";
import { getCustomers } from "./customer";

export default async function CustomersPage() {
  const customers = await getCustomers();

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

      <h1 style={{ fontSize: 42, marginTop: 15 }}>☕ Customers</h1>

      <p style={{ marginBottom: 40 }}>Khách hàng đã chốt đơn</p>

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
              <th style={{ padding: 14 }}></th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: 24, textAlign: "center" }}>
                  Chưa có khách hàng nào.
                </td>
              </tr>
            )}

            {customers.map((customer) => (
              <tr key={customer.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: 14 }}>
                  {new Date(customer.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td style={{ padding: 14 }}>{customer.name}</td>
                <td style={{ padding: 14 }}>{customer.company || "—"}</td>
                <td style={{ padding: 14 }}>{customer.email || "—"}</td>
                <td style={{ padding: 14 }}>{customer.phone || "—"}</td>
                <td style={{ padding: 14 }}>{customer.country || "—"}</td>
                <td style={{ padding: 14 }}>
                  <Link
                    href={`/admin/customers/${customer.id}`}
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Customer } from "./customer";

export function CustomerForm({ customer }: { customer: Customer }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const res = await fetch(`/api/customers/${customer.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        company: form.get("company"),
        email: form.get("email"),
        phone: form.get("phone"),
        country: form.get("country"),
        notes: form.get("notes"),
      }),
    });

    const result = await res.json();

    if (!result.success) {
      setLoading(false);
      setError(result.message || "Lưu thất bại");
      return;
    }

    router.push(`/admin/customers/${customer.id}`);
    router.refresh();
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    marginBottom: 16,
    font: "inherit",
  };

  return (
    <form onSubmit={onSubmit}>
      <label style={{ fontSize: 13, color: "#666" }}>Tên</label>
      <input name="name" required defaultValue={customer.name} style={inputStyle} />

      <label style={{ fontSize: 13, color: "#666" }}>Công ty</label>
      <input name="company" defaultValue={customer.company ?? ""} style={inputStyle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Email</label>
          <input name="email" defaultValue={customer.email ?? ""} style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Điện thoại</label>
          <input name="phone" defaultValue={customer.phone ?? ""} style={inputStyle} />
        </div>
      </div>

      <label style={{ fontSize: 13, color: "#666" }}>Quốc gia</label>
      <input name="country" defaultValue={customer.country ?? ""} style={inputStyle} />

      <label style={{ fontSize: 13, color: "#666" }}>Ghi chú</label>
      <textarea name="notes" rows={4} defaultValue={customer.notes ?? ""} style={inputStyle} />

      {error && <p style={{ color: "#C53030", marginBottom: 16 }}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
        style={{
          border: "none",
          borderRadius: 999,
          background: "#2B6CB0",
          color: "white",
          padding: "12px 22px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {loading ? "Đang lưu..." : "Lưu thay đổi"}
      </button>
    </form>
  );
}

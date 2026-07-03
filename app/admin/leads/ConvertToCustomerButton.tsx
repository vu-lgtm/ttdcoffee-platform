"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Lead } from "./lead";

export function ConvertToCustomerButton({ lead }: { lead: Lead }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onClick() {
    setLoading(true);

    const res = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead_id: lead.id,
        name: lead.name,
        company: lead.company,
        email: lead.email,
        phone: lead.phone,
        country: lead.country,
        notes: lead.message,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      setLoading(false);
      alert("❌ Chuyển đổi thất bại: " + result.message);
      return;
    }

    router.push(`/admin/customers/${result.customer.id}`);
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        border: "none",
        borderRadius: 999,
        background: "#2B6CB0",
        color: "white",
        padding: "10px 18px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {loading ? "Đang chuyển đổi..." : "Chuyển thành khách hàng"}
    </button>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteQuoteButton({
  id,
  customerId,
}: {
  id: number;
  customerId: number;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onClick() {
    if (!confirm("Xóa báo giá này? Không thể hoàn tác.")) {
      return;
    }

    setLoading(true);

    await fetch(`/api/quotes/${id}`, { method: "DELETE" });

    router.push(`/admin/customers/${customerId}`);
    router.refresh();
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        border: "1px solid #C53030",
        borderRadius: 999,
        background: "transparent",
        color: "#C53030",
        padding: "9px 16px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {loading ? "Đang xóa..." : "Xóa báo giá"}
    </button>
  );
}

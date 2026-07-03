"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Quote } from "./quote";

export function QuoteForm({
  customerId,
  quote,
}: {
  customerId: number;
  quote?: Quote;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isEdit = Boolean(quote);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const payload = {
      customer_id: customerId,
      product: form.get("product"),
      quantity: form.get("quantity"),
      unit_price: Number(form.get("unit_price")),
      currency: form.get("currency"),
      incoterm: form.get("incoterm"),
      valid_until: form.get("valid_until") || null,
      notes: form.get("notes"),
    };

    const res = await fetch(
      isEdit ? `/api/quotes/${quote!.id}` : "/api/quotes",
      {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (!result.success) {
      setLoading(false);
      setError(result.message || "Thao tác thất bại");
      return;
    }

    router.push(`/admin/quotes/${isEdit ? quote!.id : result.quote.id}`);
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
      <label style={{ fontSize: 13, color: "#666" }}>Sản phẩm</label>
      <input
        name="product"
        required
        defaultValue={quote?.product}
        style={inputStyle}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Số lượng</label>
          <input
            name="quantity"
            placeholder="VD: 2 containers"
            defaultValue={quote?.quantity ?? ""}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Đơn giá</label>
          <input
            name="unit_price"
            type="number"
            step="0.01"
            required
            defaultValue={quote?.unit_price}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Đơn vị tiền tệ</label>
          <select
            name="currency"
            defaultValue={quote?.currency ?? "USD"}
            style={inputStyle}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="VND">VND</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#666" }}>Incoterm</label>
          <select
            name="incoterm"
            defaultValue={quote?.incoterm ?? "FOB"}
            style={inputStyle}
          >
            <option value="FOB">FOB</option>
            <option value="CIF">CIF</option>
            <option value="CFR">CFR</option>
            <option value="EXW">EXW</option>
          </select>
        </div>
      </div>

      <label style={{ fontSize: 13, color: "#666" }}>Hiệu lực đến</label>
      <input
        name="valid_until"
        type="date"
        defaultValue={quote?.valid_until ?? ""}
        style={inputStyle}
      />

      <label style={{ fontSize: 13, color: "#666" }}>Ghi chú</label>
      <textarea
        name="notes"
        rows={4}
        defaultValue={quote?.notes ?? ""}
        style={inputStyle}
      />

      {error && <p style={{ color: "#C53030", marginBottom: 16 }}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
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
        {loading
          ? "Đang lưu..."
          : isEdit
            ? "Lưu thay đổi"
            : "Tạo báo giá"}
      </button>
    </form>
  );
}

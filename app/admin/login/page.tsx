"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await res.json();

    if (!result.success) {
      setLoading(false);
      setError("Sai mật khẩu");
      return;
    }

    router.push(searchParams.get("redirect") || "/admin");
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "white",
        padding: 40,
        borderRadius: 18,
        boxShadow: "0 5px 18px rgba(0,0,0,.08)",
        width: 340,
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>☕ TTD Coffee CRM</h1>
      <p style={{ marginBottom: 24, color: "#666" }}>Đăng nhập quản trị</p>

      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ddd",
          marginBottom: 12,
        }}
      />

      {error && (
        <p style={{ color: "#C53030", marginBottom: 12 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "none",
          background: "#2F855A",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {loading ? "Đang kiểm tra..." : "Đăng nhập"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f5ef",
      }}
    >
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function onClick() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        color: "#C53030",
        cursor: "pointer",
        textDecoration: "underline",
        fontSize: 14,
        padding: 0,
      }}
    >
      Đăng xuất
    </button>
  );
}

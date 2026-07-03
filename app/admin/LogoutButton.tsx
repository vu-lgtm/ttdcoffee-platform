"use client";

import { useRouter } from "next/navigation";
import { Button } from "./components/ui/button";

export function LogoutButton() {
  const router = useRouter();

  async function onClick() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClick} className="text-red-600 hover:bg-red-50">
      Đăng xuất
    </Button>
  );
}

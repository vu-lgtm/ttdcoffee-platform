import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoutButton } from "../../../LogoutButton";
import { CustomerForm } from "../../CustomerForm";
import { getCustomerById } from "../../customer";

export default async function EditCustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await getCustomerById(Number(id));

  if (!customer) {
    notFound();
  }

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
          href={`/admin/customers/${customer.id}`}
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← {customer.name}
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 36, marginTop: 15 }}>Sửa khách hàng</h1>

      <div
        style={{
          background: "white",
          borderRadius: 18,
          boxShadow: "0 5px 18px rgba(0,0,0,.08)",
          padding: 34,
          maxWidth: 480,
          marginTop: 30,
        }}
      >
        <CustomerForm customer={customer} />
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { getCustomerById } from "../../customers/customer";
import { LogoutButton } from "../../LogoutButton";
import { QuoteForm } from "../QuoteForm";

export default async function NewQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ customer_id?: string }>;
}) {
  const { customer_id } = await searchParams;
  const customer = customer_id
    ? await getCustomerById(Number(customer_id))
    : null;

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

      <h1 style={{ fontSize: 36, marginTop: 15 }}>
        Tạo báo giá cho {customer.name}
      </h1>

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
        <QuoteForm customerId={customer.id} />
      </div>
    </main>
  );
}

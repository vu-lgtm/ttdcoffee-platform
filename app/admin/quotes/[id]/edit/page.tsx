import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoutButton } from "../../../LogoutButton";
import { QuoteForm } from "../../QuoteForm";
import { getQuoteById } from "../../quote";

export default async function EditQuotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quote = await getQuoteById(Number(id));

  if (!quote) {
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
          href={`/admin/quotes/${quote.id}`}
          style={{ color: "#6B46C1", textDecoration: "none" }}
        >
          ← Báo giá #{quote.id}
        </Link>
        <LogoutButton />
      </div>

      <h1 style={{ fontSize: 36, marginTop: 15 }}>Sửa báo giá #{quote.id}</h1>

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
        <QuoteForm customerId={quote.customer_id} quote={quote} />
      </div>
    </main>
  );
}

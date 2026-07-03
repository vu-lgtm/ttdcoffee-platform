import Link from "next/link";
import { supabaseServer } from "../lib/supabase-server";

async function getLeadsCount() {
  const { count } = await supabaseServer
    .from("leads")
    .select("*", { count: "exact", head: true });

  return count ?? 0;
}

export default async function AdminDashboard() {
  const leadsCount = await getLeadsCount();

  const cards = [
    {
      title: "Leads",
      value: String(leadsCount),
      link: "/admin/leads",
      color: "#2F855A",
    },
    {
      title: "Quotes",
      value: "--",
      link: "/admin/quotes",
      color: "#B7791F",
    },
    {
      title: "Customers",
      value: "--",
      link: "/admin/customers",
      color: "#2B6CB0",
    },
    {
      title: "Coffee Market",
      value: "--",
      link: "/market",
      color: "#6B46C1",
    },
  ];

  return (
    <main
      style={{
        padding: 50,
        background: "#f7f5ef",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: 42 }}>☕ TTD Coffee CRM</h1>

      <p style={{ marginBottom: 40 }}>Internal Management Dashboard</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 25,
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            style={{
              background: "white",
              padding: 30,
              borderRadius: 18,
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 5px 18px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: card.color,
                marginBottom: 15,
              }}
            />

            <h2>{card.title}</h2>

            <h1 style={{ fontSize: 44, marginTop: 20 }}>
              {card.value}
            </h1>
          </Link>
        ))}
      </div>
    </main>
  );
}
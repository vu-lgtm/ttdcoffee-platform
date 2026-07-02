import { LeadStatusSelect } from "./LeadStatusSelect";

type Lead = {
  id: number;
  created_at: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
  status: string;
};

async function getLeads() {
  const res = await fetch("http://localhost:3000/api/leads", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.leads || [];
}

export default async function LeadsPage() {
  const leads: Lead[] = await getLeads();

  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>☕ TTD Coffee CRM</h1>
      <p>Quản lý lead từ website</p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ngày</th>
            <th>Tên</th>
            <th>Công ty</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Quốc gia</th>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{new Date(lead.created_at).toLocaleDateString("vi-VN")}</td>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.country}</td>
              <td>{lead.product}</td>
              <td>{lead.quantity}</td>
              <td>
                <LeadStatusSelect id={lead.id} status={lead.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
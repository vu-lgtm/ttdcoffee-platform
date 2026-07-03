"use client";

export function QuoteStatusSelect({
  id,
  status,
}: {
  id: number;
  status: string;
}) {
  async function updateStatus(newStatus: string) {
    await fetch(`/api/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    window.location.reload();
  }

  return (
    <select
      defaultValue={status}
      onChange={(e) => updateStatus(e.target.value)}
    >
      <option value="draft">draft</option>
      <option value="sent">sent</option>
      <option value="accepted">accepted</option>
      <option value="rejected">rejected</option>
    </select>
  );
}

"use client";

export function LeadStatusSelect({
  id,
  status,
}: {
  id: number;
  status: string;
}) {
  async function updateStatus(newStatus: string) {
    await fetch("/api/leads", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status: newStatus,
      }),
    });

    window.location.reload();
  }

  return (
    <select
      defaultValue={status}
      onChange={(e) => updateStatus(e.target.value)}
    >
      <option value="new">new</option>
      <option value="contacted">contacted</option>
      <option value="quoted">quoted</option>
      <option value="won">won</option>
      <option value="lost">lost</option>
    </select>
  );
}
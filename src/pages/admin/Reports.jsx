// src/pages/admin/Reports.jsx
import RoleBasedLayout from "@/components/RoleBasedLayout";

const reports = [
  { label: "Total Revenue (2024)", value: 12540000 },
  { label: "New Members Registered", value: 218 },
  { label: "Annual Dues Paid", value: 159 },
  { label: "International Delegates", value: 34 },
];

const Reports = () => {
  return (
    <RoleBasedLayout>

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Reports Summary</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((r, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded-xl">
              <h2 className="text-sm text-gray-500">{r.label}</h2>
              <p className="text-3xl font-bold text-[var(--primary)]">
                {r.label.includes("Revenue") ? `₦${r.value.toLocaleString()}` : r.value}
              </p>
            </div>
          ))}
        </div>
      </main>

    </RoleBasedLayout>
  );
};

export default Reports;

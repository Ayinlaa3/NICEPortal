// src/pages/admin/AdminDashboard.jsx
import RoleBasedLayout from "@/components/RoleBasedLayout";
import { useState } from "react";

const AdminDashboard = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    {
      id: 1,
      name: "Ayo Ayinla",
      email: "ayo@nice.org",
      grade: "Member",
      status: "Pending",
    },
    {
      id: 2,
      name: "Chinwe Okafor",
      email: "chinwe@nice.org",
      grade: "Fellow",
      status: "Approved",
    },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // TODO: Call backend API with query
  };

  return (
     <RoleBasedLayout>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Total Members</h2>
            <p className="text-2xl font-bold">8,546</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Pending Applications</h2>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Payments Received</h2>
            <p className="text-2xl font-bold">₦12,540,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Verified Fellows</h2>
            <p className="text-2xl font-bold">41</p>
          </div>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            placeholder="Search members by name, email, reg number..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border p-3 rounded-md"
          />
        </form>

        {/* Results Table */}
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Grade</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {results.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{m.name}</td>
                  <td className="px-6 py-4">{m.email}</td>
                  <td className="px-6 py-4">{m.grade}</td>
                  <td className="px-6 py-4">{m.status}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`/admin/members/${m.id}`}
                      className="text-[var(--primary)] underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </RoleBasedLayout>
  );
};

export default AdminDashboard;

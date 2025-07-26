import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import { fetchAllMembers, searchMembers } from "@/lib/admin";

const AdminDashboard = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load members on first load
  useEffect(() => {
    const loadMembers = async () => {
      try {
        const data = await fetchAllMembers();
        setResults(data);
      } catch (error) {
        console.error("Error loading members:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMembers();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const data = await searchMembers(query);
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <RoleBasedLayout>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Summary Cards - static for now */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Total Members</h2>
            <p className="text-2xl font-bold">{results.length}</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-sm text-gray-500">Pending Applications</h2>
            <p className="text-2xl font-bold">
              {results.filter((m) => m.status === "Pending").length}
            </p>
          </div>
          {/* You can later fetch payment and fellow stats from a dedicated endpoint */}
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
          {loading ? (
            <p className="p-6">Loading...</p>
          ) : (
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
                    <td className="px-6 py-4 font-medium">{m.full_name}</td>
                    <td className="px-6 py-4">{m.email}</td>
                    <td className="px-6 py-4">{m.member_grade}</td>
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
          )}
        </div>
      </main>
    </RoleBasedLayout>
  );
};

export default AdminDashboard;

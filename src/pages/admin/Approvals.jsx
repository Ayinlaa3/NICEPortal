// src/pages/admin/Approvals.jsx
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";

const approvals = [
  {
    id: 11,
    name: "Chike Nnamdi Ejiofor",
    email: "john@nice.org",
    grade: "Graduate",
    regNo: "G-45678",
    chapter: "Enugu",
  },
  {
    id: 12,
    name: "Fatima Aliyu Musa",
    email: "fatima@nice.org",
    grade: "Fellow",
    regNo: "F-56789",
    chapter: "Katsina",
  },
];

const Approvals = () => {
  return (
    <RoleBasedLayout>

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Pending Approvals</h1>
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Reg No.</th>
                <th className="text-left px-6 py-3">Grade</th>
                <th className="text-left px-6 py-3">Chapter</th>
                <th className="text-left px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {approvals.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{app.name}</td>
                  <td className="px-6 py-4">{app.email}</td>
                  <td className="px-6 py-4">{app.regNo}</td>
                  <td className="px-6 py-4">{app.grade}</td>
                  <td className="px-6 py-4">{app.chapter}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button className="px-3 py-1 text-xs">Approve</Button>
                    <Button type="secondary" className="px-3 py-1 text-xs">Reject</Button>
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

export default Approvals;

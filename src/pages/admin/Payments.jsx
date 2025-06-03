// src/pages/admin/Payments.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const payments = [
  {
    id: "TX001",
    date: "2024-06-01",
    name: "Ayo Ayinla",
    email: "ayo@nice.org",
    grade: "Graduate",
    type: "Registration",
    amount: 25000,
    status: "Success",
  },
  {
    id: "TX002",
    date: "2024-05-29",
    name: "Fatima Musa",
    email: "fatima@nice.org",
    grade: "Associate",
    type: "Annual Dues",
    amount: 60000,
    status: "Success",
  },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Payments Overview</h1>

        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Grade</th>
                <th className="text-left px-6 py-3">Type</th>
                <th className="text-left px-6 py-3">Amount</th>
                <th className="text-left px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{tx.date}</td>
                  <td className="px-6 py-4">{tx.name}</td>
                  <td className="px-6 py-4">{tx.email}</td>
                  <td className="px-6 py-4">{tx.grade}</td>
                  <td className="px-6 py-4">{tx.type}</td>
                  <td className="px-6 py-4">₦{tx.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;

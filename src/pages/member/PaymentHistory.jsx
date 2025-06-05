// src/pages/member/PaymentHistory.jsx
import RoleBasedLayout from "@/components/RoleBasedLayout";

const payments = [
  {
    id: "TX123456",
    amount: 25000,
    date: "2024-05-01",
    type: "Registration Fee",
    status: "Success",
  },
  {
    id: "TX654321",
    amount: 7500,
    date: "2023-12-10",
    type: "Annual Dues",
    status: "Success",
  },
];

const PaymentHistory = () => {
  return (
    <RoleBasedLayout>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Payment History</h1>
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-left px-6 py-3">Transaction ID</th>
                <th className="text-left px-6 py-3">Payment Type</th>
                <th className="text-left px-6 py-3">Amount (₦)</th>
                <th className="text-left px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{payment.date}</td>
                  <td className="px-6 py-4">{payment.id}</td>
                  <td className="px-6 py-4">{payment.type}</td>
                  <td className="px-6 py-4">₦{payment.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">{payment.status}</span>
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

export default PaymentHistory;

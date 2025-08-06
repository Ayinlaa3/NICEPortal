// src/pages/member/PaymentHistory.jsx

import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import api from "@/lib/api";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await api.get("/member/payments/", { withCredentials: true });
        setPayments(res.data);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <RoleBasedLayout>
      <div className="max-w-5xl p-6 mx-auto bg-white shadow rounded-xl">
        <h1 className="text-xl font-bold text-[var(--primary)] mb-4">Payment History</h1>

        {loading ? (
          <p>Loading...</p>
        ) : payments.length === 0 ? (
          <p>No payment records found.</p>
        ) : (
          <table className="w-full text-sm border table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Payment Method</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{new Date(payment.date).toLocaleDateString()}</td>
                  <td className="p-2 border">₦{payment.amount.toLocaleString()}</td>
                  <td className="p-2 border">{payment.method || "N/A"}</td>
                  <td className="p-2 border">{payment.description || "N/A"}</td>
                  <td className="p-2 font-medium text-green-600 border">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-4 text-right">
          <Button>Make a Payment</Button>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default PaymentHistory;







// src/pages/member/PaymentHistory.jsx
// import RoleBasedLayout from "@/components/RoleBasedLayout";

// const payments = [
//   {
//     id: "TX123456",
//     amount: 25000,
//     date: "2024-05-01",
//     type: "Registration Fee",
//     status: "Success",
//   },
//   {
//     id: "TX654321",
//     amount: 7500,
//     date: "2023-12-10",
//     type: "Annual Dues",
//     status: "Success",
//   },
// ];

// const PaymentHistory = () => {
//   return (
//     <RoleBasedLayout>

//       <main className="max-w-4xl p-6 mx-auto">
//         <h1 className="mb-6 text-2xl font-bold">Payment History</h1>
//         <div className="overflow-x-auto bg-white shadow rounded-xl">
//           <table className="min-w-full text-sm">
//             <thead className="bg-[var(--primary)] text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">Date</th>
//                 <th className="px-6 py-3 text-left">Transaction ID</th>
//                 <th className="px-6 py-3 text-left">Payment Type</th>
//                 <th className="px-6 py-3 text-left">Amount (₦)</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {payments.map((payment) => (
//                 <tr key={payment.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">{payment.date}</td>
//                   <td className="px-6 py-4">{payment.id}</td>
//                   <td className="px-6 py-4">{payment.type}</td>
//                   <td className="px-6 py-4">₦{payment.amount.toLocaleString()}</td>
//                   <td className="px-6 py-4">
//                     <span className="font-semibold text-green-600">{payment.status}</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>

//     </RoleBasedLayout>
//   );
// };

// export default PaymentHistory;

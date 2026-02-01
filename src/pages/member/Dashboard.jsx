// src/pages/member/Dashboard.jsx

import RoleBasedLayout from "@/components/RoleBasedLayout";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { profile, loading } = useAuth();

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <RoleBasedLayout>
      <h1 className="text-2xl font-bold mb-6 text-[var(--primary)]">
        Welcome, {profile?.full_name || "Member"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h2 className="mb-2 text-lg font-semibold">Membership Status</h2>
          <p className="font-medium text-green-600">Active</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl">
          <h2 className="mb-2 text-lg font-semibold">Member Details</h2>
          <p><strong>Email:</strong> {profile?.email}</p>
          <p><strong>Role:</strong> {profile?.role}</p>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default Dashboard;






// src/pages/member/Dashboard.jsx

// import { useEffect, useState } from "react";
// import RoleBasedLayout from "@/components/RoleBasedLayout";
// import Button from "@/components/ui/Button";
// import { getMemberInfo } from "@/lib/member";

// const Dashboard = () => {
//   const [member, setMember] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadMember = async () => {
//       try {
//         const data = await getMemberInfo();
//         setMember(data);
//       } catch (error) {
//         console.error("Error loading member info:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadMember();
//   }, []);

//   if (loading) return <p className="p-6">Loading your dashboard...</p>;

//   return (
//     <RoleBasedLayout>
//       <h1 className="text-2xl font-bold mb-6 text-[var(--primary)]">
//         Welcome, {member?.first_name} {member?.last_name}
//       </h1>
//       <p className="mb-6 text-gray-600">This is your personalized member dashboard.</p>

//       <div className="grid gap-6 md:grid-cols-2">
//         {/* Membership Status */}
//         <div className="p-6 bg-white shadow-md rounded-xl">
//           <h2 className="mb-2 text-lg font-semibold">Membership Status</h2>
//           <div className="flex items-center justify-between">
//             <span className={`font-medium ${member?.member_status === "Active" ? "text-green-600" : "text-red-500"}`}>
//               {member?.member_status || "Unknown"}
//             </span>
//             <span className="text-sm text-gray-500">Valid until 30 June 2025</span>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
//           <h2 className="mb-2 text-lg font-semibold">Quick Actions</h2>
//           <Button className="w-full">Download ID Card</Button>
//           <Button type="secondary" className="w-full">Download Certificate</Button>
//         </div>

//         {/* Member Info */}
//         <div className="p-6 bg-white shadow-md md:col-span-2 rounded-xl">
//           <h2 className="mb-4 text-lg font-semibold">Your Profile</h2>
//           <div className="grid gap-4 text-sm md:grid-cols-3">
//             <div><strong>Email:</strong><br /> {member?.email}</div>
//             <div><strong>Phone:</strong><br /> {member?.primary_phone || "Not Provided"}</div>
//             <div><strong>Membership Grade:</strong><br /> {member?.member_grade || "N/A"}</div>
//             <div><strong>NICE Reg Number:</strong><br /> {member?.nice_reg_no || "N/A"}</div>
//             <div><strong>Chapter:</strong><br /> {member?.chapter || "N/A"}</div>
//             <div><strong>Country:</strong><br /> {member?.country_name || "Nigeria"}</div>
//           </div>
//           <div className="mt-4 text-right">
//             <a href="/profile" className="text-[var(--primary)] underline text-sm">Edit Profile</a>
//           </div>
//         </div>
//       </div>
//     </RoleBasedLayout>
//   );
// };

// export default Dashboard;

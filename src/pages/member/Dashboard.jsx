// src/pages/member/Dashboard.jsx

// src/pages/member/Dashboard.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { getMemberInfo } from "@/lib/member";

const Dashboard = () => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        const data = await getMemberInfo();
        setMember(data);
      } catch (error) {
        console.error("Error loading member info:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMember();
  }, []);

  if (loading) return <p className="p-6">Loading your dashboard...</p>;

  return (
    <RoleBasedLayout>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Sidebar */}
        <aside className="w-full p-4 space-y-6 bg-white shadow-md md:w-1/4 rounded-xl">
          <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase">Demographics</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/profile">Name & Demographics</Link></li>
              <li><Link to="/profile">Addresses</Link></li>
              <li><Link to="/profile">Username/Password</Link></li>
              <li><Link to="/profile">Professional Interests</Link></li>
              <li><Link to="/profile">Biography / Documents</Link></li>
              <li><Link to="/profile">License Info</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase">Membership & Participation</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/membership">Member Benefits</Link></li>
              <li><Link to="/membership">Membership Details</Link></li>
              <li><Link to="/committees">Committees</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase">Education</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/education">Educational Background</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase">Communication</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/profile">Contact Info</Link></li>
              <li><Link to="/profile">Emergency Contacts</Link></li>
              <li><Link to="/profile">Preferences</Link></li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase">Purchases</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/purchases">Digital Access</Link></li>
              <li><Link to="/purchases">Payment History</Link></li>
              <li><Link to="/purchases">Pay Dues</Link></li>
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white shadow-md rounded-xl">
          <h1 className="text-2xl font-bold mb-4 text-[var(--primary)]">
            Welcome, {member?.first_name} {member?.last_name}
          </h1>
          <p className="mb-6 text-gray-600">This is your personalized member dashboard.</p>

          {/* Membership Summary */}
          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-sm font-semibold">Membership Status</h3>
              <p className="text-sm font-medium">
                {member?.member_status || "Pending Approval"}
              </p>
              <p className="text-xs text-gray-500">Valid until June 30, 2025</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-sm font-semibold">Membership Type</h3>
              <p className="text-sm font-medium">{member?.member_grade || "Not Set"}</p>
              <p className="text-xs text-gray-500">NICE Reg. No: {member?.nice_reg_no || "Not Available"}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
            <Button className="w-full">Download ID Card</Button>
            <Button type="secondary" className="w-full">Download Certificate</Button>
          </div>

          {/* Biography and Documents */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold">Biography & Documents</h2>
            <p className="mb-2 text-sm text-gray-600">No records to display</p>
            <Button className="text-sm">Upload Document</Button>
          </div>

          {/* License Info */}
          <div>
            <h2 className="mb-2 text-lg font-semibold">License Information</h2>
            <p className="mb-2 text-sm text-gray-600">No licenses added.</p>
            <Button className="text-sm">Add New License</Button>
          </div>
        </main>
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

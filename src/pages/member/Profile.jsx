// src/pages/member/Profile.jsx
// Profile.jsx - Displays and allows editing of demographic info
import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import axios from "axios";
// import Button from "@/components/ui/Button";

const Profile = () => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        const res = await axios.get("https://nicengineers.com/api/member/profile/", {
          withCredentials: true,
        });
        setMember(res.data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMember();
  }, []);

  if (loading) return <p className="p-6">Loading profile...</p>;

  return (
    <RoleBasedLayout>
      <h1 className="mb-6 text-2xl font-bold">Personal Profile</h1>
      <div className="p-6 space-y-4 bg-white shadow rounded-xl">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full Name" value={`${member.name_prefix || ""} ${member.first_name} ${member.middle_name || ""} ${member.last_name}`} />
          <Field label="Email" value={member.email} />
          <Field label="Phone" value={member.primary_phone} />
          <Field label="NICE Reg. No." value={member.nice_reg_no || "N/A"} />
          <Field label="NSE Reg. No." value={member.nse_reg_no || "N/A"} />
          <Field label="Grade" value={member.member_grade} />
          <Field label="Chapter" value={member.chapter} />
          <Field label="State" value={member.state} />
          <Field label="Country" value={member.country_name} />
        </div>

        <div className="text-right">
          <a href="/profile/edit" className="text-[var(--primary)] underline text-sm">
            Edit Profile
          </a>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

const Field = ({ label, value }) => (
  <div>
    <label className="block mb-1 text-sm font-semibold text-gray-500">{label}</label>
    <div className="p-3 text-gray-700 border rounded-md bg-gray-50">{value}</div>
  </div>
);

export default Profile;


// // src/pages/member/Profile.jsx
// import { useState } from "react";
// import Footer from "@/components/Footer";
// import Button from "@/components/ui/Button";
// import { useAuth } from "@/hooks/useAuth";

// const Profile = () => {
//   const { user } = useAuth();
//   const [form, setForm] = useState({
//     email: user?.email || "",
//     phone: "08020000000",
//     name: "John Doe",
//     chapter: "Warri Chapter",
//     gender: "Male",
//     birthDate: "1990-01-01",
//     address: "12 Engineering Rd, Ibadan",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated profile:", form);
//     // TODO: Update backend
//   };

//   return (
//     <div className="min-h-screen bg-[var(--background)]">

//       <main className="max-w-3xl p-6 mx-auto">
//         <h1 className="mb-4 text-2xl font-bold">Edit Profile</h1>
//         <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white shadow rounded-xl">
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Birth Date</label>
//               <input
//                 type="date"
//                 name="birthDate"
//                 value={form.birthDate}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Gender</label>
//               <select
//                 name="gender"
//                 value={form.gender}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//               >
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Chapter</label>
//               <input
//                 type="text"
//                 name="chapter"
//                 value={form.chapter}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Contact Address</label>
//             <textarea
//               name="address"
//               rows={3}
//               value={form.address}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             ></textarea>
//           </div>

//           <Button type="submit" className="w-full">Save Changes</Button>
//         </form>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Profile;
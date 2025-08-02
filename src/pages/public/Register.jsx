
// src/pages/public/Register.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    full_name: "",
    member_grade: "",
    application_date: new Date().toISOString().split("T")[0],
    address: "",
    nse_reg_no: "",
    nice_reg_no: "",
    phone_fax: "",
    member_status: "",
    membership_id: "",
    name_credentials: "",
    name_prefix: "",
    city: "",
    state: "",
    country_name: "",
    primary_phone: "",
    chapter: "",
    status: "inactive",
    is_approved: false,
    role: "member",
    groups: [],
    user_permissions: [],
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post(
        "https://nicengineers.com/api/members/register/",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 201 || response.status === 200) {
        setSuccess("Registration successful! Login details have been sent to your email.");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please check your input or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        {success && <p className="text-sm text-center text-green-600">{success}</p>}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["first_name", "First Name"],
            ["last_name", "Last Name"],
            ["middle_name", "Middle Name"],
            ["full_name", "Full Name"],
            ["email", "Email", "email"],
            ["password", "Password", "password"],
            ["membership_id", "Membership ID"],
            ["member_grade", "Member Grade"],
            ["chapter", "Chapter"],
            ["primary_phone", "Primary Phone"],
            ["nse_reg_no", "NSE Reg. No."],
            ["nice_reg_no", "NICE Reg. No."],
            ["name_prefix", "Name Prefix"],
            ["name_credentials", "Name Credentials"],
            ["member_status", "Member Status"],
            ["phone_fax", "Phone Fax"],
            ["address", "Address"],
            ["city", "City"],
            ["state", "State"],
            ["country_name", "Country"],
          ].map(([name, label, type = "text"]) => (
            <Input
              key={name}
              label={label}
              name={name}
              type={type}
              value={form[name]}
              onChange={handleChange}
            />
          ))}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Registration"}
        </Button>
      </form>
      <Footer />
    </div>
  );
};

const Input = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col">
    <label htmlFor={props.name} className="mb-1 text-sm font-medium">
      {label}
    </label>
    <input
      id={props.name}
      type={type}
      {...props}
      className="p-2 border rounded-md"
    />
  </div>
);

export default Register;



// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Button from "@/components/ui/Button";

// const categories = [
//   "Student",
//   "Graduate",
//   "Associate",
//   "Member",
//   "Fellow (By Registration)",
//   "Fellow (By Invitation)"
// ];

// const NewRegistration = () => {
//   const [form, setForm] = useState({
//     category: "",
//     name: "",
//     email: "",
//     phone: "",
//     chapter: "",
//     photo: null,
//     certificate: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Registration Data:", form);
//     // TODO: Send to backend API
//   };

//   return (
//     <div className="min-h-screen bg-[var(--background)]">
//       <Navbar />
//       <main className="max-w-4xl px-4 py-10 mx-auto">
//         <h1 className="mb-6 text-2xl font-bold text-center">New Member Registration</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="p-6 space-y-6 bg-white shadow rounded-xl"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold">Membership Category</label>
//               <select
//                 name="category"
//                 value={form.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-md"
//               >
//                 <option value="">Select category</option>
//                 {categories.map((cat) => (
//                   <option key={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Chapter</label>
//               <input
//                 type="text"
//                 name="chapter"
//                 value={form.chapter}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//           </div>

//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold">Passport Photo</label>
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Certificates</label>
//               <input
//                 type="file"
//                 name="certificate"
//                 accept="application/pdf,image/*"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//           </div>

//           <Button type="submit" className="w-full">
//             Proceed to Payment
//           </Button>
//         </form>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default NewRegistration;



// This code defines a NewRegistration component that allows users to register as new members of NICE.
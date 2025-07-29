// src/pages/public/Signup.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    reg_no: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://nicengineers.com/api/auth/verify-member/", form, {
        withCredentials: true,
      });

      if (res.data.success) {
        alert("Login credentials have been sent to your email.");
        navigate("/login");
      } else {
        navigate("/new-registration");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to verify your membership. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-lg rounded-xl"
        >
          <h1 className="text-2xl font-bold text-center">NICE Member Signup</h1>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Registration Number</label>
              <input
                type="text"
                name="reg_no"
                value={form.reg_no}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Submit"}
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;









// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@/components/ui/Button";
// import Footer from "@/components/Footer"; // ✅ assumed reusable

// const Signup = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     regNo: "",
//     email: "",
//     phone: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     memberGrade: "",
//     chapter: "",
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       // TODO: Replace with actual backend check for existing registration
//       const isNew = !form.regNo.startsWith("OLD"); // simulate check
//       if (!isNew) {
//         navigate("/login"); // redirect existing users
//       } else {
//         console.log("Register new member", form);
//         navigate("/new-registration"); // go to NewRegistration.jsx
//       }
//     } catch (err) {
//       setError("An error occurred. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[var(--background)]">
//       <div className="flex items-center justify-center px-4 py-12">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-lg rounded-xl"
//         >
//           <h1 className="text-2xl font-bold text-center">Member Signup</h1>

//           {error && <p className="text-sm text-center text-red-500">{error}</p>}

//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold">Reg. Number</label>
//               <input
//                 type="text"
//                 name="regNo"
//                 value={form.regNo}
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
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">Member Grade</label>
//               <select
//                 name="memberGrade"
//                 value={form.memberGrade}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               >
//                 <option value="">Select grade</option>
//                 <option value="Student">Student</option>
//                 <option value="Graduate">Graduate</option>
//                 <option value="Associate">Associate</option>
//                 <option value="Member">Member</option>
//                 <option value="Fellow">Fellow</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">Middle Name</label>
//               <input
//                 type="text"
//                 name="middleName"
//                 value={form.middleName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">Chapter</label>
//               <input
//                 type="text"
//                 name="chapter"
//                 value={form.chapter}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           <Button type="submit" className="w-full" disabled={loading}>
//             {loading ? "Processing..." : "Continue"}
//           </Button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;

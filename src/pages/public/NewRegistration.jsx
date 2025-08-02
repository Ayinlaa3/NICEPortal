// src/pages/public/NewRegistration.jsx

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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import { usePaymentGateway } from "@/hooks/usePaymentGateway";
import axios from "axios";

const gradePricing = {
  Student: 7500,
  Graduate: 25000,
  Associate: 60000,
  Member: 40000,
  Fellow: 480000,
  Fellow_Invite: 830000,
};

const NewRegistration = () => {
  const navigate = useNavigate();
  const { initializePaystack } = usePaymentGateway();
  const [form, setForm] = useState({
    grade: "",
    fullname: "",
    email: "",
    phone: "",
    photo: null,
    certificate: null,
    chapter: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = gradePricing[form.grade];

    if (!amount) {
      alert("Please select a valid membership grade.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, value);
      });

      const response = await axios.post(
        "https://nicengineers.com/api/members/register/",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 201 || response.status === 200) {
        const metadata = {
          fullname: form.fullname,
          grade: form.grade,
          phone: form.phone,
          chapter: form.chapter,
        };

        initializePaystack({
          email: form.email,
          amount,
          metadata,
          onSuccess: () => {
            navigate("/payment-status?status=success");
          },
          onClose: () => {
            navigate("/payment-status?status=cancelled");
          },
        });
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl p-8 space-y-6 bg-white shadow-lg rounded-xl"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold text-center">
            New Member Registration
          </h2>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label="Full Name" name="fullname" value={form.fullname} onChange={handleChange} />
            <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
            <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
            <Input label="Chapter" name="chapter" value={form.chapter} onChange={handleChange} />

            <div>
              <label className="block text-sm font-semibold">Grade</label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="">Select Grade</option>
                <option value="Student">Student</option>
                <option value="Graduate">Graduate</option>
                <option value="Associate">Associate</option>
                <option value="Member">Member</option>
                <option value="Fellow">Fellow (Direct)</option>
                <option value="Fellow_Invite">Fellow (By Invitation)</option>
              </select>
            </div>

            <Input label="Passport Photo" name="photo" type="file" accept="image/*" onChange={handleChange} />
            <Input label="Upload Certificate" name="certificate" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? "Submitting..."
              : `Proceed to Payment ${
                  gradePricing[form.grade]
                    ? `₦${gradePricing[form.grade].toLocaleString()}`
                    : ""
                }`}
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

// Reusable input component
const Input = ({ label, type = "text", ...props }) => (
  <div>
    <label className="block text-sm font-semibold">{label}</label>
    <input
      type={type}
      {...props}
      className="w-full p-3 border rounded-md"
      required={type !== "file" || !props.optional}
    />
  </div>
);

export default NewRegistration;





// This code defines a NewRegistration component that allows users to register as new members of NICE.
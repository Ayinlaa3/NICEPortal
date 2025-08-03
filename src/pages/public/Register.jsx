// src/pages/public/Register.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import axios from "axios";

const gradeOptions = ["Fellow", "Member", "Associate", "Graduate", "Student"];

const prefixOptions = ["Engr.", "Dr.", "Prof.", "Chief.", "Mr.", "Mrs.", "Miss"];

const chapterOptions = [
  "Kano", "Katsina", "Abuja", "Dutse", "Uyo", "Owerri", "Ekiti", "Enugu", "Ogun", "Warri",
  "Adamawa", "Lagos", "Jos", "Akure", "Benin", "Calabar", "Port Harcourt", "Yenagoa",
  "Awka", "Maiduguri", "Kaduna", "Bonny", "Janligo", "Abakaliki", "Bauchi", "Asaba",
  "Osun", "Markudi", "Yobe", "Ibadan", "Gombe", "Minna"
];

const stateOptions = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
  "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const countryOptions = ["Nigeria"];

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    name_prefix: "",
    name_credentials: "",
    email: "",
    password: "",
    primary_phone: "",
    phone_fax: "",
    member_grade: "",
    chapter: "",
    nice_reg_no: "",
    nse_reg_no: "",
    address: "",
    city: "",
    state: "",
    country_name: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://nicengineers.com/api/member/register/", {
        ...form,
        membership_id: form.nice_reg_no || "temp-id", // fallback ID
        is_approved: false,
        role: "member",
        groups: [],
        user_permissions: [],
      });

      if (response.status === 201 || response.status === 200) {
        navigate("/registration-success");
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
        >
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <p className="text-sm text-center text-gray-700">
            Please fill in the required details to register on the NICE Portal. Fields marked with * are mandatory. Your login credentials will be sent to your email immediately after submission.
          </p>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label="First Name*" name="first_name" value={form.first_name} onChange={handleChange} required />
            <Input label="Last Name*" name="last_name" value={form.last_name} onChange={handleChange} required />
            <Input label="Middle Name" name="middle_name" value={form.middle_name} onChange={handleChange} />

            <Select
              label="Name Prefix"
              name="name_prefix"
              options={prefixOptions}
              value={form.name_prefix}
              onChange={handleChange}
            />
            <Input label="Name Credentials (e.g. FNSE, MNICE)" name="name_credentials" value={form.name_credentials} onChange={handleChange} />
            <Input label="Email*" type="email" name="email" value={form.email} onChange={handleChange} required />
            <Input label="Password* (min 6 chars)" type="password" name="password" value={form.password} onChange={handleChange} required pattern=".{6,}" />
            <Input label="Primary Phone*" name="primary_phone" value={form.primary_phone} onChange={handleChange} required />
            <Input label="Other Phone" name="phone_fax" value={form.phone_fax} onChange={handleChange} />

            <Select
              label="NICE Membership Grade*"
              name="member_grade"
              options={gradeOptions}
              value={form.member_grade}
              onChange={handleChange}
              required
            />
            <Select
              label="NICE Chapter"
              name="chapter"
              options={chapterOptions}
              value={form.chapter}
              onChange={handleChange}
            />

            <Input label="NICE Reg. No. (if applicable)" name="nice_reg_no" value={form.nice_reg_no} onChange={handleChange} />
            <Input label="NSE Reg. No. (if applicable)" name="nse_reg_no" value={form.nse_reg_no} onChange={handleChange} />

            <Input label="Address*" name="address" value={form.address} onChange={handleChange} required />
            <Input label="City*" name="city" value={form.city} onChange={handleChange} required />
            <Select
              label="State*"
              name="state"
              options={stateOptions}
              value={form.state}
              onChange={handleChange}
              required
            />
            <Select
              label="Country*"
              name="country_name"
              options={countryOptions}
              value={form.country_name}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Submit Registration"}
          </Button>

          <div className="mt-2 text-sm text-center">
            Already registered?{" "}
            <Link to="/" className="text-[var(--primary)] font-medium hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const Input = ({ label, type = "text", required, pattern, ...props }) => (
  <div>
    <label className="block text-sm font-semibold">{label}</label>
    <input
      type={type}
      required={required}
      pattern={pattern}
      {...props}
      className="w-full p-3 border rounded-md"
    />
  </div>
);

const Select = ({ label, name, options, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-semibold">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 border rounded-md"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
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
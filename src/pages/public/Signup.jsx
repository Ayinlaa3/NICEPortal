import Navbar from "../ui/landingpage/Navbar";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Footer from "../ui/landingpage/Footer";

const Signup = () => {
  const [form, setForm] = useState({
    regNo: "",
    email: "",
    phone: "",
    firstName: "",
    middleName: "",
    lastName: "",
    memberGrade: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    // TODO: Send to backend or validate
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
        >
          <h1 className="text-2xl font-bold text-center">Member Registration</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Reg. Number</label>
              <input
                type="text"
                name="regNo"
                value={form.regNo}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Member Grade</label>
              <select
                name="memberGrade"
                value={form.memberGrade}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              >
                <option value="">Select grade</option>
                <option value="Student">Student</option>
                <option value="Graduate">Graduate</option>
                <option value="Associate">Associate</option>
                <option value="Member">Member</option>
                <option value="Fellow">Fellow</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={form.middleName}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Register</Button>
        </form>
      </div>
        <Footer />
    </div>
  );
};

export default Signup;

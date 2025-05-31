// src/pages/public/NewRegistration.jsx
import { useState } from "react";
import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import { usePaymentGateway } from "@/hooks/usePaymentGateway";
import { useNavigate } from "react-router-dom";

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
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = gradePricing[form.grade] || 0;

    if (!amount) {
      alert("Please select a valid membership grade.");
      return;
    }

    const metadata = {
      fullname: form.fullname,
      grade: form.grade,
      phone: form.phone,
    };

    initializePaystack({
      email: form.email,
      amount,
      metadata,
      onSuccess: (res) => {
        console.log("Payment success:", res);
        navigate("/payment-status?status=success");
      },
      onClose: () => {
        navigate("/payment-status?status=cancelled");
      },
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl space-y-6"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold text-center">New Member Registration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
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
              <label className="block text-sm font-semibold">Grade Category</label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
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

            <div>
              <label className="block text-sm font-semibold">Passport Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Upload Certificate</label>
              <input
                type="file"
                name="certificate"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Proceed to Payment ({gradePricing[form.grade] ? `₦${gradePricing[form.grade].toLocaleString()}` : ""})
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewRegistration;

// This code defines a NewRegistration component that allows users to register as new members of NICE.
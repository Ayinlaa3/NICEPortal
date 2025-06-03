// src/pages/member/Profile.jsx
import { useState } from "react";
import Button from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import RoleBasedLayout from "@/components/RoleBasedLayout";

const Profile = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    email: user?.email || "",
    phone: "08020000000",
    name: "John Doe",
    chapter: "Warri Chapter",
    gender: "Male",
    birthDate: "1990-01-01",
    address: "12 Engineering Rd, Ibadan",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", form);
    // TODO: Update backend
  };

  return (
    <RoleBasedLayout>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
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
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold">Chapter</label>
              <input
                type="text"
                name="chapter"
                value={form.chapter}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold">Contact Address</label>
            <textarea
              name="address"
              rows={3}
              value={form.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            ></textarea>
          </div>

          <Button type="submit" className="w-full">Save Changes</Button>
        </form>
      </main>
    </RoleBasedLayout>
  );
};

export default Profile;

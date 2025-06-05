// src/pages/member/Uploads.jsx
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { useState } from "react";

const Uploads = () => {
  const [form, setForm] = useState({
    idCard: null,
    certificate: null,
    profilePhoto: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, file]) => {
      if (file) formData.append(key, file);
    });
    console.log("Uploading documents:", form);
    // TODO: POST to backend API
  };

  return (
    <RoleBasedLayout>

      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Upload Missing Documents</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 space-y-6"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-sm font-semibold">ID Card</label>
            <input
              type="file"
              name="idCard"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Membership Certificate</label>
            <input
              type="file"
              name="certificate"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Passport Photograph</label>
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border p-3 rounded-md"
            />
          </div>

          <Button type="submit" className="w-full">Submit Uploads</Button>
        </form>
      </main>

    </RoleBasedLayout>
  );
};

export default Uploads;

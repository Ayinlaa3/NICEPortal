// src/pages/member/ProfessionalDevelopment.jsx

import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { getMemberInfo, updateMemberInfo } from "@/lib/member";

const ProfessionalDevelopment = () => {
  const [member, setMember] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const data = await getMemberInfo();
        setMember(data);
        setForm(data);
      } catch (err) {
        console.error("Failed to fetch member data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateMemberInfo(form);
      setEditing(false);
      setMember(form);
    } catch (err) {
      console.error("Failed to update:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <RoleBasedLayout>
      <div className="max-w-4xl p-6 mx-auto bg-white shadow rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[var(--primary)]">Professional Development</h1>
          {!editing ? (
            <Button onClick={() => setEditing(true)}>Edit</Button>
          ) : (
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Highest Educational Qualification"
            name="highest_education"
            value={form.highest_education}
            onChange={handleChange}
            disabled={!editing}
          />
          <Field
            label="Institution Attended"
            name="education_institution"
            value={form.education_institution}
            onChange={handleChange}
            disabled={!editing}
          />
          <Field
            label="Graduation Year"
            name="graduation_year"
            value={form.graduation_year}
            onChange={handleChange}
            disabled={!editing}
          />
          <Field
            label="Total CPD Points"
            name="cpd_points"
            value={form.cpd_points}
            onChange={handleChange}
            disabled={!editing}
          />
          <Field
            label="Recent Course Attended"
            name="latest_course"
            value={form.latest_course}
            onChange={handleChange}
            disabled={!editing}
          />
          <Field
            label="Professional Certifications"
            name="certifications"
            value={form.certifications}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
      </div>
    </RoleBasedLayout>
  );
};

const Field = ({ label, name, value, onChange, disabled, type = "text" }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-3 border rounded-md ${disabled ? "bg-gray-100" : "bg-white"}`}
    />
  </div>
);

export default ProfessionalDevelopment;
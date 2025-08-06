// src/pages/member/ProfileInformation.jsx

import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { getMemberInfo, updateMemberInfo } from "@/lib/member";

const ProfileInformation = () => {
  const [member, setMember] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const data = await getMemberInfo();
        setMember(data);
        setForm(data);
      } catch (err) {
        console.error("Error fetching member data:", err);
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
      console.error("Error saving member data:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <RoleBasedLayout>
      <div className="max-w-4xl p-6 mx-auto space-y-8 bg-white shadow rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[var(--primary)]">Profile Information</h1>
          {!editing ? (
            <Button onClick={() => setEditing(true)}>Edit</Button>
          ) : (
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          )}
        </div>

        <Section title="Personal Details">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Prefix" name="name_prefix" value={form.name_prefix} onChange={handleChange} disabled={!editing} />
            <Field label="Gender" name="gender" value={form.gender} onChange={handleChange} disabled={!editing} />
            <Field label="First Name" name="first_name" value={form.first_name} onChange={handleChange} disabled={!editing} />
            <Field label="Middle Name" name="middle_name" value={form.middle_name} onChange={handleChange} disabled={!editing} />
            <Field label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} disabled={!editing} />
            <Field label="Suffix" name="name_suffix" value={form.name_suffix} onChange={handleChange} disabled={!editing} />
            <Field label="Nickname" name="nickname" value={form.nickname} onChange={handleChange} disabled={!editing} />
            <Field label="Credentials" name="name_credentials" value={form.name_credentials} onChange={handleChange} disabled={!editing} />
            <Field label="Birth Date" name="birth_date" type="date" value={form.birth_date} onChange={handleChange} disabled={!editing} />
          </div>
        </Section>

        <Section title="Contact & Address Information">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Email" name="email" value={form.email} onChange={handleChange} disabled={true} />
            <Field label="Phone" name="primary_phone" value={form.primary_phone} onChange={handleChange} disabled={!editing} />
            <Field label="Street Address" name="address" value={form.address} onChange={handleChange} disabled={!editing} />
            <Field label="City" name="city" value={form.city} onChange={handleChange} disabled={!editing} />
            <Field label="State" name="state" value={form.state} onChange={handleChange} disabled={!editing} />
            <Field label="Country" name="country_name" value={form.country_name} onChange={handleChange} disabled={!editing} />
          </div>
        </Section>

        <Section title="Biography & Attachments">
          <div className="grid gap-4">
            <textarea
              rows={4}
              name="biography"
              value={form.biography || ""}
              onChange={handleChange}
              disabled={!editing}
              className={`w-full p-3 border rounded-md ${!editing ? "bg-gray-100" : "bg-white"}`}
              placeholder="Write your personal biography..."
            />
            <div>
              <label className="block mb-1 text-sm font-medium">Document Upload</label>
              <input
                type="file"
                name="attachment"
                disabled={!editing}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </Section>
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

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">{title}</h2>
    {children}
  </section>
);

export default ProfileInformation;

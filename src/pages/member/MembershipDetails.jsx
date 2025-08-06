


// src/pages/member/MembershipDetails.jsx

import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { getMemberInfo, updateMemberInfo } from "@/lib/member";

const MembershipDetails = () => {
  const [member, setMember] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
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
      console.error("Error updating membership details:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <RoleBasedLayout>
      <div className="max-w-4xl p-6 mx-auto bg-white shadow rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[var(--primary)]">Membership Details</h1>
          {!editing ? (
            <Button onClick={() => setEditing(true)}>Edit</Button>
          ) : (
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Membership Category" name="member_grade" value={form.member_grade} onChange={handleChange} disabled={!editing} />
          <Field label="Membership Status" name="member_status" value={form.member_status} onChange={handleChange} disabled={!editing} />
          <Field label="Membership ID" name="membership_id" value={form.membership_id} onChange={handleChange} disabled={!editing} />
          <Field label="NICE Reg No" name="nice_reg_no" value={form.nice_reg_no} onChange={handleChange} disabled={!editing} />
          <Field label="Committees Currently Serving" name="committees" value={form.committees} onChange={handleChange} disabled={!editing} />
          <Field label="Past Positions in NICE" name="past_positions" value={form.past_positions} onChange={handleChange} disabled={!editing} />
          <Field label="Other Professional Associations (NSE, ASCE, NIEE, etc)" name="other_associations" value={form.other_associations} onChange={handleChange} disabled={!editing} />
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

export default MembershipDetails;

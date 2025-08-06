// src/pages/member/PasswordManagement.jsx

import { useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import api from "@/lib/api";

const PasswordManagement = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(
        "/auth/change-password/",
        {
          old_password: currentPassword,
          new_password: newPassword,
        },
        { withCredentials: true }
      );

      setMessage("Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Password change failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoleBasedLayout>
      <div className="max-w-xl p-6 mx-auto bg-white shadow rounded-xl">
        <h1 className="text-xl font-bold mb-4 text-[var(--primary)]">Password Management</h1>

        {message && <p className="mb-4 text-sm text-green-600">{message}</p>}
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
    </RoleBasedLayout>
  );
};

export default PasswordManagement;

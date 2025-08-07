// src/pages/admin/Roles.jsx

import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const Roles = () => {
  const [loading, setLoading] = useState(true);

  // Simulate fetching roles from API
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Roles & Permissions</h2>
        <button className="px-4 py-2 text-sm text-white rounded-lg bg-primary hover:bg-primary/90">
          + Add New Role
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead className="text-left bg-gray-100">
            <tr>
              <th className="p-3 text-sm font-medium text-gray-700">Role</th>
              <th className="p-3 text-sm font-medium text-gray-700">Description</th>
              <th className="p-3 text-sm font-medium text-gray-700">Permissions</th>
              <th className="p-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example role row */}
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 text-sm">Super Admin</td>
              <td className="p-3 text-sm text-gray-600">Full access to all features</td>
              <td className="p-3 text-sm">Approve, Delete, Edit, Create</td>
              <td className="p-3 space-x-2 text-sm">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 text-sm">Finance Admin</td>
              <td className="p-3 text-sm text-gray-600">Can view and manage payments</td>
              <td className="p-3 text-sm">View, Approve Payments</td>
              <td className="p-3 space-x-2 text-sm">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;

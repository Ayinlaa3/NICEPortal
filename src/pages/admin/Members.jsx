// src/pages/admin/Members.jsx

import React, { useEffect, useState } from "react";
import { getAllMembers } from "@/lib/admin";
import { Link } from "react-router-dom";
import { Loader2, Search } from "lucide-react";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getAllMembers();
        setMembers(data);
        setFiltered(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    const results = members.filter((member) =>
      `${member.full_name} ${member.email} ${member.nice_reg_no}`
        .toLowerCase()
        .includes(q)
    );
    setFiltered(results);
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="mb-4 text-2xl font-bold">All Members</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search by name, email or reg no..."
            value={query}
            onChange={handleSearch}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="w-6 h-6 text-green-500 animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full text-sm text-left">
            <thead className="text-xs uppercase bg-green-100">
              <tr>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Reg No</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => (
                <tr
                  key={member.id}
                  className="transition-all border-b hover:bg-green-50"
                >
                  <td className="px-4 py-3 font-medium">{member.full_name}</td>
                  <td className="px-4 py-3">{member.email}</td>
                  <td className="px-4 py-3">{member.primary_phone}</td>
                  <td className="px-4 py-3">{member.nice_reg_no || "N/A"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        member.is_approved
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {member.is_approved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <Link
                        to={`/admin/members/${member.id}`}
                        className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200"
                      >
                        View
                      </Link>
                      {!member.is_approved && (
                        <Link
                          to={`/admin/approvals?id=${member.id}`}
                          className="px-3 py-1 text-sm text-yellow-800 bg-yellow-100 rounded-lg hover:bg-yellow-200"
                        >
                          Approve
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-gray-500">
                    No matching members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Members;

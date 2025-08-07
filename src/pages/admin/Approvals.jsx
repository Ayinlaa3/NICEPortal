// src/pages/admin/Approvals.jsx

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { getAllMembers, approveMember, deleteMember } from "@/lib/admin";
import { Loader, CheckCircle, XCircle } from "lucide-react";
import Modal from "@/components/ui/Modal"; // Modal we added earlier
import toast from "react-hot-toast";

const Approvals = () => {
  const [pendingMembers, setPendingMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalType, setModalType] = useState(null); // 'approve' or 'reject'

  useEffect(() => {
    fetchPendingMembers();
  }, []);

  const fetchPendingMembers = async () => {
    setLoading(true);
    try {
      const res = await getAllMembers();
      const pending = res.filter((m) => !m.is_approved);
      setPendingMembers(pending);
    } catch (err) {
      toast.error("Failed to load members");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async () => {
    if (!selectedMember || !modalType) return;

    const id = selectedMember.id;
    const name = selectedMember.full_name || selectedMember.first_name;

    try {
      if (modalType === "approve") {
        await approveMember(id);
        toast.success(`Approved ${name}`);
      } else if (modalType === "reject") {
        await deleteMember(id);
        toast.success(`Rejected ${name}`);
      }
      fetchPendingMembers();
    } catch (err) {
      toast.error(`Failed to ${modalType} member`);
    } finally {
      setSelectedMember(null);
      setModalType(null);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="mb-4 text-2xl font-bold">Pending Member Approvals</h2>

      {loading ? (
        <div className="flex justify-center mt-10">
          <Loader className="w-10 h-10 animate-spin" />
        </div>
      ) : pendingMembers.length === 0 ? (
        <div className="text-center text-gray-500">No pending approvals</div>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full text-sm table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Chapter</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{member.full_name}</td>
                  <td className="px-4 py-2">{member.email}</td>
                  <td className="px-4 py-2">{member.primary_phone}</td>
                  <td className="px-4 py-2">{member.chapter}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedMember(member);
                        setModalType("approve");
                      }}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setSelectedMember(member);
                        setModalType("reject");
                      }}
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        onConfirm={handleAction}
        title={
          modalType === "approve"
            ? "Approve Member"
            : "Reject Member"
        }
        message={
          selectedMember &&
          `Are you sure you want to ${
            modalType === "approve" ? "approve" : "reject"
          } ${selectedMember.full_name}?`
        }
      />
    </div>
  );
};

export default Approvals;

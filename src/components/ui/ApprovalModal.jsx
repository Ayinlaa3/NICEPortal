// src/components/ui/ApprovalModal.jsx
import React from "react";
import { X } from "lucide-react";

const ApprovalModal = ({
  isOpen,
  onClose,
  member,
  onApprove,
  onReject,
  loading,
}) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 animate-fadeIn">
      <div className="relative w-full max-w-md p-6 bg-white shadow-xl dark:bg-gray-900 rounded-2xl">
        <button
          onClick={onClose}
          className="absolute text-gray-400 top-3 right-3 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="mb-2 text-xl font-semibold text-center">
          Approve or Reject Member
        </h2>
        <p className="mb-4 text-sm text-center text-gray-600">
          {member.full_name} ({member.member_grade})
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onApprove}
            disabled={loading}
            className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            {loading ? "Approving..." : "Approve"}
          </button>
          <button
            onClick={onReject}
            disabled={loading}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            {loading ? "Rejecting..." : "Reject"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;

// src/lib/admin.js

import api from "./api";

// Get all members
export const getAllMembers = async () => {
  const res = await api.get("/admin/members-list/");
  return res.data;
};

// Approve a member
export const approveMember = async (id) => {
  const res = await api.post(`/admin/member-approval/${id}/`);
  return res.data;
};

// Delete a member
export const deleteMember = async (id) => {
  const res = await api.delete(`/admin/delete-member/${id}/`);
  return res.data;
};

// Search members
export const searchMembers = async (query) => {
  const res = await api.get(`/member-search/${query}/`);
  return res.data;
};


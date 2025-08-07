// src/lib/admin.js

import api from "./api";

export const getAllMembers = async () => {
  const res = await api.get("/admin/members-list/");
  return res.data;
};

export const approveMember = async (id) => {
  return await api.post(`/admin/member-approval/${id}/`);
};

export const deleteMember = async (id) => {
  return await api.delete(`/admin/delete-member/${id}/`);
};


// Fetch all members
export const fetchAllMembers = async () => {
  const response = await API.get("/admin/members-list/");
  return response.data;
};

// Search members
export const searchMembers = async (query) => {
  const response = await API.get(`/member-search/${query}/`);
  return response.data;
};


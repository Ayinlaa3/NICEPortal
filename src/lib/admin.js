// src/lib/admin.js
import API from "./api";

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

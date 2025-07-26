// src/lib/member.js
import API from "./api";

// Get current member's profile
export const getMemberInfo = async () => {
  const response = await API.get("/member/info/");
  return response.data;
};

// Update current member's profile
export const updateMemberInfo = async (payload) => {
  const response = await API.patch("/member/info/", payload);
  return response.data;
};

// Upload member passport photo
export const uploadMemberImage = async (formData) => {
  const response = await API.post("/member-image/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Get member photo (if needed)
export const getMemberImage = async () => {
  const response = await API.get("/member-image/");
  return response.data;
};

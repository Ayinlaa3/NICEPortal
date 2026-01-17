// src/lib/auth.js
import axios from "./api";

export const login = async (credentials) => {
  return axios.post("/login/", credentials);
};

export const logout = async () => {
  return axios.post("/auth/logout/", {});
};

export const checkAuthStatus = async () => {
  return axios.get("/member/info/"); // Correct endpoint from your backend
};

export const registerMember = async (data) => {
  return axios.post("/member/register/", data);
};

export const verifyMember = async (data) => {
  return axios.post("/auth/verify-member/", data);
};




// import API from "./api";

// export const login = async (payload) => {
//   const response = await API.post("/login/", payload);
//   localStorage.setItem("access_token", response.data.access); // Save token
//   return response.data;
// };

// export const logout = async () => {
//   localStorage.removeItem("access_token");
//   return await API.post("/logout/");
// };

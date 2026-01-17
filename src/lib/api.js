// src/lib/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://nicengineers.com/api",
  withCredentials: true, // Always send cookies
});

export default instance;





// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://nicengineers.com/api",
//   withCredentials: true,
// });

// export default api;

// // Dashboard Summary
// export const getDashboardSummary = async () => {
//   const res = await api.get("/admin/dashboard-summary/");
//   return res.data;
// };

// // Members by Chapter
// export const getChapterData = async () => {
//   const res = await api.get("/admin/members-by-chapter/");
//   return res.data;
// };

// // Members by Grade
// export const getGradeData = async () => {
//   const res = await api.get("/admin/members-by-grade/");
//   return res.data;
// };


// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://nicengineers.com/api",
//   withCredentials: true, // Important if backend uses cookies
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;





// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://nicengineers.com/api",
//   withCredentials: false, // Set to true if backend uses cookies
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;

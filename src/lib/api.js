import axios from "axios";

const api = axios.create({
  baseURL: "https://nicengineers.com/api",
  withCredentials: true,
});

export default api;

export const getDashboardSummary = async () => {
  const res = await fetch("/api/admin/dashboard-summary/");
  return await res.json();
};

export const getChapterData = async () => {
  const res = await fetch("/api/admin/members-by-chapter/");
  return await res.json();
};

export const getGradeData = async () => {
  const res = await fetch("/api/admin/members-by-grade/");
  return await res.json();
};


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

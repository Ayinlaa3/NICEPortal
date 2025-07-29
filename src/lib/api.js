import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nicengineers.com/api',
  withCredentials: true,
});

export default instance;




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

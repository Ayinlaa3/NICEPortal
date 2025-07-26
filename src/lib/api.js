import axios from "axios";

const API = axios.create({
  baseURL: "https://nicengineers.com/api",
  withCredentials: false, // Set to true if backend uses cookies
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

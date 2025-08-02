import axios from './api';

const BASE_URL = "https://nicengineers.com/api";

export const verifyMember = (data) => {
  return axios.post(`${BASE_URL}/auth/verify-member/`, data, {
    withCredentials: true,
  });
};


export const login = async (credentials) => {
  return axios.post('/auth/login/', credentials, {
    withCredentials: true, // So the cookie is included
  });
};

export const logout = async () => {
  return axios.post('/auth/logout/', {}, { withCredentials: true });
};

export const checkAuthStatus = async () => {
  return axios.get('/auth/user/', { withCredentials: true });
};

export const registerMember = async (data) => {
  return axios.post('/auth/register/', data);
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

import api from "./api"; // assuming api.js is in the same folder

export const login = async ({ email, membership_id, password }) => {
  const response = await api.post("/login/", {
    email,
    membership_id,
    password,
  });

  return response.data.member; // returns the logged-in member info
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

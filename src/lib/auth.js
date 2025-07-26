import API from "./api";

export const login = async (payload) => {
  const response = await API.post("/login/", payload);
  localStorage.setItem("access_token", response.data.access); // Save token
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("access_token");
  return await API.post("/logout/");
};

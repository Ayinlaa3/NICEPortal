// src/hooks/useAuth.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatus, logout as apiLogout } from "@/lib/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await checkAuthStatus();
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => setUser(userData);

  const logout = async () => {
    try {
      await apiLogout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);






// import { useEffect, useState } from "react";

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (stored) {
//       setUser(JSON.parse(stored));
//     }
//     setLoading(false);
//   }, []);

//   const login = (data) => {
//     localStorage.setItem("user", JSON.stringify(data));
//     setUser(data);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return {
//     user,
//     isAuthenticated: !!user,
//     loading,
//     login,
//     logout,
//   };
// };

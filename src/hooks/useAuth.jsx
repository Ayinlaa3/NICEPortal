import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    setLoading(true);

    const { data: authData } = await supabase.auth.getUser();

    if (!authData?.user) {
      setUser(null);
      setLoading(false);
      return;
    }

    // 🔑 Fetch profile (role lives here)
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (error) {
      console.error("Profile fetch error:", error);
      setUser(null);
    } else {
      setUser({
        ...authData.user,
        role: profile.role,
        profile,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    loading,
    logout,
  };
};







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

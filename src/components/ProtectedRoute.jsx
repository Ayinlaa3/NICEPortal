// src/components/ProtectedRoute.jsx


import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = ({ role, children }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (role && user?.role !== role) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;



// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

// const ProtectedRoute = ({ role }) => {
//   const { user, isAuthenticated, loading } = useAuth();

//   if (loading) return <div className="p-8 text-center">Loading...</div>;

//   if (!isAuthenticated) return <Navigate to="/login" replace />;

//   if (role && user?.role !== role) return <Navigate to="/" replace />;

//   return <Outlet />;
// };

// export default ProtectedRoute;

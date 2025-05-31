// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Login from "@/pages/public/Login";
import Signup from "@/pages/public/Signup";
import NewRegistration from "@/pages/public/NewRegistration";
import Dashboard from "@/pages/member/Dashboard";
import AdminDashboard from "@/pages/admin/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<NewRegistration />} />

        {/* Protected Member Route */}
        <Route element={<ProtectedRoute role="member" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

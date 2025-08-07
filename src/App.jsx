// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "@/pages/public/Login";
import ForgotPassword from "@/pages/public/ForgotPassword";
import Signup from "@/pages/public/Signup";
import Register from "@/pages/public/Register";
import RegistrationSuccess from "@/pages/public/RegistrationSuccess";
import PaymentStatus from "@/pages/public/PaymentStatus";
import Dashboard from "@/pages/member/Dashboard";
import Profile from "@/pages/member/Profile";
import Uploads from "@/pages/member/Uploads";
import PaymentHistory from "@/pages/member/PaymentHistory";
import ProfileInformation from "@/pages/member/ProfileInformation";
import MembershipDetails from "@/pages/member/MembershipDetails";
import PasswordManagement from "@/pages/member/PasswordManagement";
import ProfessionalDevelopment from "@/pages/member/ProfessionalDevelopment";

import AdminDashboard from "@/pages/admin/AdminDashboard";
import MemberDetail from "@/pages/admin/MemberDetail";
import Approvals from "@/pages/admin/Approvals";
import Payments from "@/pages/admin/Payments";
import Reports from "@/pages/admin/Reports";
import Roles from "@/pages/admin/Roles";
import Settings from "@/pages/admin/Settings";
import Members from "@/pages/admin/Members";

import ProtectedRoute from "@/components/ProtectedRoute";

const App = () => {
  return (
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/payment-status" element={<PaymentStatus />} />

        {/* Member Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute role="member"><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute role="member"><Profile /></ProtectedRoute>} />
        <Route path="/uploads" element={<ProtectedRoute role="member"><Uploads /></ProtectedRoute>} />
        <Route path="/payment-history" element={<ProtectedRoute role="member"><PaymentHistory /></ProtectedRoute>} />
        <Route path="/member/profile" element={<ProtectedRoute role="member"><ProfileInformation /></ProtectedRoute>} />
        <Route path="/member/password-management" element={<ProtectedRoute role="member"><PasswordManagement /></ProtectedRoute>} />
        <Route path="/member/membership-details" element={<ProtectedRoute role="member"><MembershipDetails /></ProtectedRoute>} />
        <Route path="/member/professional-development" element={<ProtectedRoute role="member"><ProfessionalDevelopment /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/members" element={<ProtectedRoute role="admin"><Members /></ProtectedRoute>} />
        <Route path="/admin/members/:id" element={<ProtectedRoute role="admin"><MemberDetail /></ProtectedRoute>} />
        <Route path="/admin/approvals" element={<ProtectedRoute role="admin"><Approvals /></ProtectedRoute>} />
        <Route path="/admin/payments" element={<ProtectedRoute role="admin"><Payments /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute role="admin"><Reports /></ProtectedRoute>} />
        <Route path="/admin/roles" element={<ProtectedRoute role="admin"><Roles /></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute role="admin"><Settings /></ProtectedRoute>} />
      </Routes>
  );
};

export default App;
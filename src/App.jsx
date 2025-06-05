// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "@/pages/public/Login";
import Signup from "@/pages/public/Signup";
import NewRegistration from "@/pages/public/NewRegistration";
import PaymentStatus from "@/pages/public/PaymentStatus";
import Dashboard from "@/pages/member/Dashboard";
import Profile from "@/pages/member/Profile";
import Uploads from "@/pages/member/Uploads";
import PaymentHistory from "@/pages/member/PaymentHistory";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import MemberDetail from "@/pages/admin/MemberDetail";
import Approvals from "@/pages/admin/Approvals";
import Payments from "@/pages/admin/Payments";
import Reports from "@/pages/admin/Reports";
import ProtectedRoute from "@/components/ProtectedRoute";

const App = () => {
  return (
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/new-registration" element={<NewRegistration />} />
        <Route path="/payment-status" element={<PaymentStatus />} />

        {/* Member Dashboard */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute role="member"><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute role="member"><Profile /></ProtectedRoute>}
        />
        <Route
          path="/uploads"
          element={<ProtectedRoute role="member"><Uploads /></ProtectedRoute>}
        />
        <Route
          path="/payment-history"
          element={<ProtectedRoute role="member"><PaymentHistory /></ProtectedRoute>}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/members/:id"
          element={<ProtectedRoute role="admin"><MemberDetail /></ProtectedRoute>}
        />
        <Route
          path="/admin/approvals"
          element={<ProtectedRoute role="admin"><Approvals /></ProtectedRoute>}
        />
        <Route
          path="/admin/payments"
          element={<ProtectedRoute role="admin"><Payments /></ProtectedRoute>}
        />
        <Route
          path="/admin/reports"
          element={<ProtectedRoute role="admin"><Reports /></ProtectedRoute>}
        />
      </Routes>
  );
};

export default App;

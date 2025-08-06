// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import clsx from "clsx";

const navItems = {
  member: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile Information", path: "/member/profile" },
    { label: "Professional Development", path: "/member/professional-development" },
    { label: "Membership Details", path: "/member/membership-details" },
    { label: "Password Management", path: "/member/password-management" },
    { label: "Payment History", path: "/payment-history" },
    { label: "Uploads", path: "/uploads" },
  ],
  admin: [
    { label: "Dashboard", path: "/admin" },
    { label: "Approvals", path: "/admin/approvals" },
    { label: "Members", path: "/admin/members/1" },
    { label: "Payments", path: "/admin/payments" },
    { label: "Reports", path: "/admin/reports" },
  ],
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const role = user?.role || "member";

  return (
    <aside className="hidden w-64 min-h-screen px-4 py-6 bg-white border-r md:block">
      <h2 className="text-xl font-bold text-[var(--primary)] mb-6">
        NICE {role === "admin" ? "Admin" : "Member"} Panel
      </h2>
      <nav className="space-y-2">
        {navItems[role]?.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "block px-4 py-2 rounded-md font-medium",
              pathname === item.path
                ? "bg-[var(--primary)] text-white"
                : "hover:bg-[var(--accent)] text-gray-800"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

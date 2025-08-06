// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import clsx from "clsx";
import {
  UserCircle,
  BookOpen,
  BadgeCheck,
  Lock,
  CreditCard,
  UploadCloud,
  LayoutDashboard,
} from "lucide-react";

const navItems = {
  member: [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Profile Information", path: "/member/profile", icon: UserCircle },
    { label: "Professional Development", path: "/member/professional-development", icon: BookOpen },
    { label: "Membership Details", path: "/member/membership-details", icon: BadgeCheck },
    { label: "Password Management", path: "/member/password-management", icon: Lock },
    { label: "Payment History", path: "/payment-history", icon: CreditCard },
    { label: "Uploads", path: "/uploads", icon: UploadCloud },
  ],
  admin: [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Approvals", path: "/admin/approvals", icon: BadgeCheck },
    { label: "Members", path: "/admin/members/1", icon: UserCircle },
    { label: "Payments", path: "/admin/payments", icon: CreditCard },
    { label: "Reports", path: "/admin/reports", icon: BookOpen },
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
      <nav className="space-y-1">
        {navItems[role]?.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors",
              pathname === path
                ? "bg-[var(--primary)] text-white shadow-md"
                : "hover:bg-[var(--accent)] text-gray-800"
            )}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import {
  User,
  Lock,
  Briefcase,
  BadgeCheck,
  Gift,
  Crown,
  GraduationCap,
  LogOut,
} from "lucide-react";
import Button from "@/components/ui/Button";

const Sidebar = () => {
  const navItems = [
    { label: "User Profile", icon: User },
    { label: "Username / Password", icon: Lock },
    { label: "Professional Interests", icon: Briefcase },
    { label: "Credentials & Licenses", icon: BadgeCheck },
    { label: "Member Benefits", icon: Gift },
    { label: "Leadership", icon: Crown },
    { label: "Education", icon: GraduationCap },
  ];

  return (
    <aside className="bg-[var(--accent)] w-64 p-6 min-h-screen text-sm shadow-md">
      <h2 className="text-lg font-bold mb-6">My Accounts</h2>
      <ul className="space-y-4">
        {navItems.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--primary)] cursor-pointer"
          >
            <Icon size={18} /> {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const DashboardHeader = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <h1 className="text-xl font-bold">Welcome, John Doe</h1>
    <button className="text-red-500 hover:underline flex gap-1 items-center">
      <LogOut size={18} /> Logout
    </button>
  </header>
);

const MembershipSummary = () => (
  <section className="bg-white rounded-xl shadow p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <p className="text-sm text-gray-500">Status</p>
      <p className="font-bold text-green-600">Active</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Paid Thru</p>
      <p className="font-bold">12/31/2024</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Member Type</p>
      <p className="font-bold">Individual Membership</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Membership Number</p>
      <p className="font-bold">#NICE-3042</p>
    </div>
    <div className="col-span-full flex gap-4 mt-2">
      <Button type="primary">View Details</Button>
      <Button type="secondary">Renew Now</Button>
    </div>
  </section>
);

const ContactInformation = () => (
  <section className="bg-white rounded-xl shadow p-4 space-y-3">
    <div className="flex items-center gap-4">
      <img
        src="/images/avatar_placeholder.png"
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-bold">John Doe, MNICE</h2>
        <p>Ibadan, Nigeria</p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between">
      <div>
        <p className="text-sm text-gray-500">Phone</p>
        <p>+234 801 234 5678</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p>john.doe@example.com</p>
      </div>
      <a className="text-[var(--primary)] hover:underline">Edit</a>
    </div>
  </section>
);

const UserProfileDetails = () => (
  <section className="bg-white rounded-xl shadow p-4 space-y-4">
    <h2 className="text-lg font-bold mb-2">Profile Information</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-gray-500">Full Name</p>
        <p>Mr. John A. Doe</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Birth Date</p>
        <p>01 January 1990</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Gender</p>
        <p>Male</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Job Title</p>
        <p>Civil Engineer</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p>john.doe@example.com</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Phone</p>
        <p>+234 801 234 5678</p>
      </div>
    </div>
    <a className="text-[var(--primary)] hover:underline">Edit</a>
  </section>
);

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6 bg-[var(--background)]">
        <DashboardHeader />
        <MembershipSummary />
        <ContactInformation />
        <UserProfileDetails />
      </main>
    </div>
  );
};

export default Dashboard;

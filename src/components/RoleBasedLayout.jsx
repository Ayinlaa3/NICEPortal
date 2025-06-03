// src/components/RoleBasedLayout.jsx
import { useAuth } from "@/hooks/useAuth";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RoleBasedLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RoleBasedLayout;

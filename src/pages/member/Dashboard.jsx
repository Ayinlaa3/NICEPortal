import { useEffect, useState } from "react";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import Button from "@/components/ui/Button";
import { getMemberInfo } from "@/lib/member";

const Dashboard = () => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        const data = await getMemberInfo();
        setMember(data);
      } catch (error) {
        console.error("Error loading member info:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMember();
  }, []);

  if (loading) return <p className="p-6">Loading your dashboard...</p>;

  return (
    <RoleBasedLayout>
      <h1 className="text-2xl font-bold mb-6 text-[var(--primary)]">
        Welcome, {member?.first_name} {member?.last_name}
      </h1>
      <p className="text-gray-600 mb-6">This is your personalized member dashboard.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Membership Status */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Membership Status</h2>
          <div className="flex justify-between items-center">
            <span className={`font-medium ${member?.member_status === "Active" ? "text-green-600" : "text-red-500"}`}>
              {member?.member_status || "Unknown"}
            </span>
            <span className="text-sm text-gray-500">Valid until 30 June 2025</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
          <Button className="w-full">Download ID Card</Button>
          <Button type="secondary" className="w-full">Download Certificate</Button>
        </div>

        {/* Member Info */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div><strong>Email:</strong><br /> {member?.email}</div>
            <div><strong>Phone:</strong><br /> {member?.primary_phone || "Not Provided"}</div>
            <div><strong>Membership Grade:</strong><br /> {member?.member_grade || "N/A"}</div>
            <div><strong>NICE Reg Number:</strong><br /> {member?.nice_reg_no || "N/A"}</div>
            <div><strong>Chapter:</strong><br /> {member?.chapter || "N/A"}</div>
            <div><strong>Country:</strong><br /> {member?.country_name || "Nigeria"}</div>
          </div>
          <div className="text-right mt-4">
            <a href="/profile" className="text-[var(--primary)] underline text-sm">Edit Profile</a>
          </div>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default Dashboard;

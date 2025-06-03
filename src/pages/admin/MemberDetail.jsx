// src/pages/admin/MemberDetail.jsx
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

const mockMember = {
  id: 1,
  name: "Ayo Ayinla",
  email: "ayo@nice.org",
  regNo: "NICE/12345",
  grade: "Graduate",
  phone: "08020000000",
  chapter: "Southwest",
  status: "Pending",
  address: "12 NICE Road, Ibadan",
};

const MemberDetail = () => {
  const { id } = useParams();
  const member = mockMember; // Replace with API call later

  return (
    <div className="min-h-screen bg-[var(--background)]">

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Member Details</h1>

        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Name:</strong><br /> {member.name}
            </div>
            <div>
              <strong>Email:</strong><br /> {member.email}
            </div>
            <div>
              <strong>Phone:</strong><br /> {member.phone}
            </div>
            <div>
              <strong>Reg No.:</strong><br /> {member.regNo}
            </div>
            <div>
              <strong>Grade:</strong><br /> {member.grade}
            </div>
            <div>
              <strong>Chapter:</strong><br /> {member.chapter}
            </div>
            <div className="md:col-span-2">
              <strong>Address:</strong><br /> {member.address}
            </div>
          </div>

          <div className="mt-6">
            <span className="font-semibold">Status:</span>{" "}
            <span className={`inline-block ml-2 px-2 py-1 rounded-full text-xs font-bold ${member.status === "Approved" ? "bg-green-100 text-green-700" : member.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
              {member.status}
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <Button className="px-4 py-2">Approve</Button>
            <Button type="secondary" className="px-4 py-2">Reject</Button>
            <a href="#" className="text-[var(--primary)] underline ml-auto text-sm">Edit Member Info</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDetail;

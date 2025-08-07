// src/pages/admin/AdminDashboard.jsx

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, BarChart3 } from "lucide-react";
import { getDashboardSummary, getChapterData, getGradeData } from "@/lib/api";
import Spinner from "@/components/Spinner";

const AdminDashboard = () => {
  const [summary, setSummary] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [viewMode, setViewMode] = useState("chapter"); // "chapter" or "grade"
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [summaryRes, chartRes] = await Promise.all([
        getDashboardSummary(),
        viewMode === "chapter" ? getChapterData() : getGradeData()
      ]);
      setSummary(summaryRes);
      setChartData(chartRes);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [viewMode]);

  if (loading) return <Spinner />;

  return (
    <div className="p-4 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Card className="p-4 text-center bg-white shadow-lg rounded-2xl">
          <CardContent>
            <p className="text-sm font-medium text-gray-500">Total Members</p>
            <h2 className="text-2xl font-bold text-green-600">{summary.totalMembers}</h2>
          </CardContent>
        </Card>
        <Card className="p-4 text-center bg-white shadow-lg rounded-2xl">
          <CardContent>
            <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
            <h2 className="text-2xl font-bold text-yellow-600">{summary.pendingApprovals}</h2>
          </CardContent>
        </Card>
        <Card className="p-4 text-center bg-white shadow-lg rounded-2xl">
          <CardContent>
            <p className="text-sm font-medium text-gray-500">Approved Members</p>
            <h2 className="text-2xl font-bold text-blue-600">{summary.approvedMembers}</h2>
          </CardContent>
        </Card>
        <Card className="p-4 text-center bg-white shadow-lg rounded-2xl">
          <CardContent>
            <p className="text-sm font-medium text-gray-500">Total Payments</p>
            <h2 className="text-2xl font-bold text-purple-600">₦{summary.totalPayments?.toLocaleString()}</h2>
          </CardContent>
        </Card>
      </div>

      {/* Toggle and Refresh Controls */}
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button
            variant={viewMode === "chapter" ? "default" : "outline"}
            onClick={() => setViewMode("chapter")}
          >
            Chapter
          </Button>
          <Button
            variant={viewMode === "grade" ? "default" : "outline"}
            onClick={() => setViewMode("grade")}
          >
            Grade
          </Button>
        </div>
        <Button variant="ghost" onClick={fetchData}>
          <RefreshCw className="w-5 h-5 mr-2 animate-spin-slow" />
          Refresh
        </Button>
      </div>

      {/* Bar Chart */}
      <Card className="p-4 bg-white shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <BarChart3 className="w-5 h-5" />
            Members by {viewMode === "chapter" ? "Chapter" : "Grade"}
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;














// import React, { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
// import { Button } from "@/components/ui/button";
// import { getMembersByChapter, getMembersByGrade, getAdminSummary } from "@/lib/admin";
// import { RotateCcw, FileDown, BarChart3 } from "lucide-react";

// const AdminDashboard = () => {
//   const [chapterData, setChapterData] = useState([]);
//   const [gradeData, setGradeData] = useState([]);
//   const [activeChart, setActiveChart] = useState("chapter");
//   const [loading, setLoading] = useState(true);
//   const [summary, setSummary] = useState({ total: 0, approved: 0, pending: 0 });

//   const fetchData = async () => {
//     setLoading(true);
//     const [chapterRes, gradeRes, summaryRes] = await Promise.all([
//       getMembersByChapter(),
//       getMembersByGrade(),
//       getAdminSummary()
//     ]);
//     setChapterData(chapterRes);
//     setGradeData(gradeRes);
//     setSummary(summaryRes);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleExportCSV = () => {
//     const data = activeChart === "chapter" ? chapterData : gradeData;
//     const headers = Object.keys(data[0] || {}).join(",");
//     const rows = data.map(d => Object.values(d).join(",")).join("\n");
//     const csv = `${headers}\n${rows}`;

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${activeChart}-report.csv`;
//     link.click();
//   };

//   const ChartCard = ({ title, data }) => (
//     <Card className="w-full shadow-md">
//       <CardContent className="p-4">
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="flex items-center gap-2 text-lg font-semibold">
//             <BarChart3 className="w-5 h-5" /> {title}
//           </h2>
//           <div className="flex gap-2">
//             <Button size="sm" variant="outline" onClick={fetchData}>
//               <RotateCcw className="w-4 h-4 mr-1" /> Refresh
//             </Button>
//             <Button size="sm" variant="outline" onClick={handleExportCSV}>
//               <FileDown className="w-4 h-4 mr-1" /> Export
//             </Button>
//           </div>
//         </div>

//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={data}>
//             <XAxis dataKey="label" />
//             <YAxis allowDecimals={false} />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="count" fill="#22c55e" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div className="grid gap-6 px-4 py-6 md:px-8">
//       {/* Summary cards */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//         <Card className="bg-green-100">
//           <CardContent className="p-4 text-center">
//             <h4 className="text-sm font-medium">Total Members</h4>
//             <p className="text-2xl font-bold">{summary.total}</p>
//           </CardContent>
//         </Card>
//         <Card className="bg-blue-100">
//           <CardContent className="p-4 text-center">
//             <h4 className="text-sm font-medium">Approved</h4>
//             <p className="text-2xl font-bold">{summary.approved}</p>
//           </CardContent>
//         </Card>
//         <Card className="bg-yellow-100">
//           <CardContent className="p-4 text-center">
//             <h4 className="text-sm font-medium">Pending</h4>
//             <p className="text-2xl font-bold">{summary.pending}</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Chart toggle */}
//       <div className="flex justify-end gap-2">
//         <Button
//           variant={activeChart === "chapter" ? "default" : "outline"}
//           size="sm"
//           onClick={() => setActiveChart("chapter")}
//         >
//           By Chapter
//         </Button>
//         <Button
//           variant={activeChart === "grade" ? "default" : "outline"}
//           size="sm"
//           onClick={() => setActiveChart("grade")}
//         >
//           By Grade
//         </Button>
//       </div>

//       {/* Charts */}
//       {loading ? (
//         <p className="text-center">Loading data...</p>
//       ) : (
//         <ChartCard
//           title={activeChart === "chapter" ? "Members by Chapter" : "Members by Grade"}
//           data={activeChart === "chapter" ? chapterData : gradeData}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

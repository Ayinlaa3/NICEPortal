// src/pages/admin/Reports.jsx
import React, { useState } from 'react';
import { Download, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Reports = () => {
  const [filters, setFilters] = useState({
    grade: '',
    status: '',
    dateRange: '',
  });

  const sampleData = [
    { id: 1, name: 'Engr. John Doe', grade: 'FELLOW', status: 'Approved', date: '2025-05-02' },
    { id: 2, name: 'Engr. Jane Smith', grade: 'GRADUATE', status: 'Pending', date: '2025-06-14' },
    { id: 3, name: 'Engr. Musa Ibrahim', grade: 'STUDENT', status: 'Rejected', date: '2025-07-01' },
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Reports</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select name="grade" onChange={handleChange} className="px-4 py-2 border rounded">
          <option value="">All Grades</option>
          <option value="FELLOW">FELLOW</option>
          <option value="CORPORATE">CORPORATE</option>
          <option value="ASSOCIATE">ASSOCIATE</option>
          <option value="GRADUATE">GRADUATE</option>
          <option value="STUDENT">STUDENT</option>
        </select>

        <select name="status" onChange={handleChange} className="px-4 py-2 border rounded">
          <option value="">All Statuses</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          name="dateRange"
          onChange={handleChange}
          className="px-4 py-2 border rounded"
        />

        <Button className="flex items-center gap-2">
          <Filter size={16} /> Apply Filters
        </Button>

        <Button variant="outline" className="flex items-center gap-2">
          <Download size={16} /> Export CSV
        </Button>
      </div>

      {/* Report Data Table */}
      <Card>
        <CardContent>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Grade</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.grade}</td>
                  <td className="px-4 py-2">{row.status}</td>
                  <td className="px-4 py-2">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;


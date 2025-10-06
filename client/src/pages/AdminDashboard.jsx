import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-green-700">Total Uploads</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-green-700">Active Users</h2>
          <p className="text-3xl font-bold mt-2">87</p>
        </div>
        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-green-700">Pending Reviews</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

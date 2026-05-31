// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import BlogsManagement from '../components/admin/BlogsManagement';
import CategoriesManagement from '../components/admin/CategoriesManagement';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const stats = [
    { title: 'Total Blogs', value: '0', icon: '📝', color: 'blue' },
    { title: 'Total Categories', value: '0', icon: '📂', color: 'green' },
    { title: 'Total Users', value: '0', icon: '👥', color: 'purple' },
    { title: 'Page Views', value: '0', icon: '👁️', color: 'orange' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'blogs', label: 'Manage Blogs', icon: '📝' },
    { id: 'categories', label: 'Manage Categories', icon: '📂' },
    { id: 'users', label: 'Users', icon: '👥' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#004b93] text-white fixed top-0 left-0 right-0 z-20 px-4 py-3 flex justify-between items-center shadow-lg">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-[#003870] rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button
          onClick={handleLogout}
          className="p-2 hover:bg-[#003870] rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-[#004b93] text-white z-40 transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 pt-20 lg:pt-6">
          <div className="hidden lg:block mb-6">
            <h2 className="text-2xl font-bold mb-2">Admin Panel</h2>
            <p className="text-sm text-gray-300">Welcome, {user.username || 'Admin'}</p>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 mb-2 hover:bg-[#003870] transition flex items-center gap-3 rounded-lg ${
                  activeTab === item.id ? 'bg-[#003870] border-l-4 border-yellow-300' : ''
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 mt-4 bg-red-600 hover:bg-red-700 transition flex items-center gap-3 rounded-lg"
            >
              <span className="text-xl">🚪</span>
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 md:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Dashboard Overview</h1>
              
              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl md:text-3xl">{stat.icon}</span>
                      <span className={`text-xl md:text-2xl font-bold text-${stat.color}-600`}>{stat.value}</span>
                    </div>
                    <h3 className="text-sm md:text-base text-gray-600 font-medium">{stat.title}</h3>
                  </div>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <button
                    onClick={() => setActiveTab('blogs')}
                    className="bg-blue-500 text-white p-3 md:p-4 rounded-lg hover:bg-blue-600 transition text-sm md:text-base"
                  >
                    + Add New Blog
                  </button>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className="bg-green-500 text-white p-3 md:p-4 rounded-lg hover:bg-green-600 transition text-sm md:text-base"
                  >
                    + Add New Category
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blogs' && <BlogsManagement />}
          {activeTab === 'categories' && <CategoriesManagement />}
          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">User Management</h2>
              <p className="text-gray-600">User management features coming soon...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
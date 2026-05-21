// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header - Fixed Height */}
      <div className="h-[auto] shrink-0">
        <Header />
      </div>

      {/* Body Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed Width, Scrollable */}
        <div className="w-[280px] hidden md:block border-r overflow-y-auto">
          <Sidebar />
        </div>

        {/* Content Area - Flex Grow, Scrollable */}
        <main className="flex-1 overflow-y-auto bg-[#eef2f5]">
          {children}
        </main>
      </div>

      {/* Footer - Optional, Fixed Height */}
      <footer className="h-10 bg-[#222222] text-white flex items-center justify-center text-xs shrink-0">
        © 2026 Reddybook.club | All rights reserved
      </footer>
    </div>
  );
}
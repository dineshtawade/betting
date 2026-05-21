import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="shrink-0"><Header onMenuToggle={handleMenuToggle} /></div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[280px] hidden md:block border-r overflow-y-auto"><Sidebar /></div>
        {/* Mobile Sidebar - Only visible when menu is open */}
        <div className="md:hidden">
          <Sidebar isMobileOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </div>
        <main className="flex-1 overflow-y-auto bg-[#eef2f5]">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CricketDashboard from './components/CricketDashboard';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LoginModal';
import FootballDashboard from './components/FootballDashboard';
import TennisDashboard from './components/TennisDashboard';
import CasinoProviders from './components/CasinoProviders';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="h-screen bg-[#eef2f5] flex flex-col font-sans overflow-hidden relative">
      
      {/* Header with mobile menu button */}
      <div className="relative">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setIsMobileSidebarOpen(true)}
            className="fixed left-4 top-4 z-30 bg-white p-2 rounded-lg shadow-md sm:hidden"
          >
            <svg className="w-6 h-6 text-[#4a121a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        
        <div onClick={(e) => {
          const text = e.target.textContent || '';
          if (text.includes('SIGNUP')) setIsSignupOpen(true);
          if (text.includes('LOGIN')) setIsLoginOpen(true);
        }}>
          <Header />
        </div>
      </div>
      
      {/* Structural main column flex core */}
      <div className="flex flex-1 w-full max-w-[100vw] overflow-hidden">
        
        {/* Left Category Navigation Menu - responsive sidebar */}
        <Sidebar 
          isMobileOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        
        {/* Right Dashboard Sheet */}
        <main className={`flex-1 p-2 sm:p-3 overflow-x-hidden overflow-y-auto h-full transition-all duration-300
          ${isMobile && isMobileSidebarOpen ? 'blur-sm' : ''}`}
          onClick={() => {
            if (isMobile && isMobileSidebarOpen) {
              setIsMobileSidebarOpen(false);
            }
          }}
        >
          <div className="max-w-7xl mx-auto">
            <CricketDashboard />
            <FootballDashboard />
            <TennisDashboard/>
            <CasinoProviders />
            <UpcomingEvents />
          </div>
        </main>
      </div>

      {/* Modals */}
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        switchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        switchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />
    </div>
  );
}

export default App;
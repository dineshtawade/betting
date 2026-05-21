import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function Sidebar({ isMobileOpen = false, onClose = () => {} }) {
  const [activeSport, setActiveSport] = useState('Fantasy 11');
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

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (isMobile && isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen, isMobile]);

  const sportsList = [
    // Main Sports
    { name: 'Cricket', icon: '🏏', hasDropdown: true },
    { name: 'Football', icon: '⚽', hasDropdown: true },
    { name: 'Tennis', icon: '🎾', hasDropdown: true },
    { name: 'Fantasy 11', icon: '🏏', hasDropdown: false },
    { name: 'Cock Fight', icon: '🐓', hasDropdown: true },
    { name: 'Politics', icon: '🗳️', hasDropdown: true },
    { name: 'Casino', icon: '🎰', hasDropdown: false },
    { name: 'Sports Book', icon: '🛡️', hasDropdown: false },
    { name: 'Horse Racing', icon: '🏇', hasDropdown: true },
    { name: 'Greyhound Racing', icon: '🐕', hasDropdown: true },
    { name: 'Binary', icon: '🎲', hasDropdown: true },
    { name: 'Kabaddi', icon: '🤼', hasDropdown: true },
    { name: 'Basketball', icon: '🏀', hasDropdown: true },
    { name: 'Mixed Martial Arts', icon: '🥊', hasDropdown: true },
    { name: 'Darts', icon: '🎯', hasDropdown: true },
    { name: 'Futsal', icon: '👟', hasDropdown: true },
    
    // Additional Sports
    { name: 'Volleyball', icon: '🏐', hasDropdown: true },
    { name: 'Ice Hockey', icon: '🏒', hasDropdown: true },
    { name: 'Table Tennis', icon: '🏓', hasDropdown: true },
    { name: 'Rugby', icon: '🏉', hasDropdown: true },
    { name: 'Golf', icon: '⛳', hasDropdown: true },
    { name: 'Snooker', icon: '🎱', hasDropdown: true },
    { name: 'Boxing', icon: '🥊', hasDropdown: true },
    { name: 'Badminton', icon: '🏸', hasDropdown: true },
    { name: 'Baseball', icon: '⚾', hasDropdown: true },
    { name: 'Handball', icon: '🤾', hasDropdown: true },
    { name: 'Motorsports', icon: '🏎️', hasDropdown: true },
    { name: 'Cycling', icon: '🚴', hasDropdown: true },
    { name: 'Swimming', icon: '🏊', hasDropdown: true },
    { name: 'Athletics', icon: '🏃', hasDropdown: true },
    { name: 'eSports', icon: '🎮', hasDropdown: true },
  ];

  const sidebarContent = (
    <aside className={`
      w-[280px] sm:w-[280px] bg-white border-r border-gray-200 flex flex-col shadow-sm select-none
      ${isMobile ? 'fixed left-0 top-0 h-full z-50 transition-transform duration-300 ease-in-out' : 'relative h-[calc(100vh-100px)]'}
      ${isMobile && !isMobileOpen ? '-translate-x-full' : 'translate-x-0'}
    `}>
      
      {/* Mobile Close Button */}
      {isMobile && (
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <h3 className="text-lg font-bold text-[#4a121a]">Menu</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#4a121a]" />
          </button>
        </div>
      )}
      
      {/* Scrollable List Container */}
      <div className="flex-1 overflow-y-scroll overflow-x-hidden border-b border-gray-200 custom-sidebar-scroll">
        {sportsList.map((sport) => {
          const isActive = activeSport === sport.name;

          return (
            <button
              key={sport.name}
              onClick={() => {
                setActiveSport(sport.name);
                // Close sidebar on mobile after selection
                if (isMobile) {
                  setTimeout(onClose, 150);
                }
              }}
              className={`w-full flex items-center justify-between py-2.5 px-3 border-b border-gray-100 transition-all text-left group
                ${isActive 
                  ? 'bg-[#ffff00] text-black font-bold' 
                  : 'bg-white hover:bg-gray-50 text-[#4a121a]'
                }`}
            >
              {/* Left Side: Icon & Name */}
              <div className="flex items-center gap-3">
                <span className="text-xl filter drop-shadow-sm w-6 text-center">
                  {sport.icon}
                </span>
                <span className={`text-sm tracking-wide font-medium ${isActive ? 'font-bold text-black' : 'text-[#4a121a]'}`}>
                  {sport.name}
                </span>
              </div>

              {/* Right Side: Arrow (If applicable) */}
              {sport.hasDropdown && (
                <ChevronDown 
                  size={14} 
                  className={`text-[#a60a27] font-bold transform transition-transform group-hover:translate-y-0.5 
                    ${isActive ? 'rotate-180' : ''}`} 
                  strokeWidth={2.5}
                />
              )}
            </button>
          );
        })}

        {/* Casino Promo Banner Image Container */}
        <div className="p-2 bg-white flex justify-center items-center">
          <div className="relative w-full rounded overflow-hidden shadow-md group cursor-pointer border border-gray-200">
            {/* Live Casino Promotional Image */}
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600" 
              alt="Live Casino Dealer Promo" 
              className="w-full h-auto object-cover display-block group-hover:scale-105 transition-transform duration-300"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Left Slider Arrow Overlay */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded p-1 text-xs font-mono select-none opacity-80">
              &lt;
            </div>
            {/* Right Slider Arrow Overlay */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded p-1 text-xs font-mono select-none opacity-80">
              &gt;
            </div>
          </div>
        </div>
      </div>
    </aside>
  );

  // For mobile, return with overlay
  if (isMobile && isMobileOpen) {
    return (
      <>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
        {sidebarContent}
      </>
    );
  }

  return sidebarContent;
}
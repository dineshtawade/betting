import React, { useState } from 'react';
import { Search, Home, Menu, X } from 'lucide-react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('FANTASY 11');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Expanded Navigation Items list to include more variety
  const navItems = [
    { name: 'HOME', icon: <Home size={16} />, type: 'home' },
    { name: 'IN-PLAY', icon: '🎬' },
    { name: 'CRICKET', icon: '🥎' },
    { name: 'FOOTBALL', icon: '⚽' },
    { name: 'TENNIS', icon: '🎾' },
    { name: 'FANTASY 11', icon: '🏏', highlight: true },
    { name: 'COCK FIGHT', icon: '🐓' },
    { name: 'POLITICS', icon: '🗳️' },
    { name: 'CASINO', icon: '🎰' },
    { name: 'SPORTS BOOK', icon: '🛡️' },
    { name: 'HORSE RACING', icon: '🏇' },
    { name: 'GREYHOUND RACING', icon: '🐕' },
    { name: 'BINARY', icon: '🎲' },
    // Newly Added items to populate more categories
    { name: 'KABADDI', icon: '🤼' },
    { name: 'BASKETBALL', icon: '🏀' },
    { name: 'MMA', icon: '🥊' },
    { name: 'DARTS', icon: '🎯' },
    { name: 'FUTSAL', icon: '👟' },
  ];

  return (
    <header className="w-full font-sans select-none border-t-[4px] border-[#4a1525] bg-[#222222] md:bg-transparent">
      
      {/* --- TOP ROW (Optimized for Mobile Layout Flex Stacking) --- */}
      <div className="bg-white px-3 py-2.5 md:px-4 md:py-3 flex flex-col md:flex-row md:items-center justify-between shadow-sm gap-3">
        
        {/* Top Segment: Logo & Auth Buttons on Mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo Section */}
          <div className="flex flex-col items-center leading-none">
            <span className="text-[#cca04c] text-2xl md:text-3xl font-light tracking-wide font-serif">
              RE<span className="font-semibold">DDY</span>
            </span>
            <div className="flex items-center text-[8px] md:text-[10px] text-[#cca04c] font-medium tracking-[0.2em] -mt-0.5">
              <span className="border-t border-[#cca04c] w-3 md:w-4 mr-1"></span>
              BOOK.CLUB
              <span className="border-t border-[#cca04c] w-3 md:w-4 ml-1"></span>
            </div>
          </div>

          {/* Right side controls seen only on Mobile View */}
          <div className="flex items-center gap-2 md:hidden">
            <button className="bg-[#2a2a2a] text-white text-[10px] font-bold px-2.5 py-1.5 rounded border border-[#a60a27] uppercase">
              SIGNUP
            </button>
            <button className="bg-[#2a2a2a] text-white text-[10px] font-bold px-3 py-1.5 rounded border border-[#a60a27] uppercase">
              LOGIN
            </button>
          </div>
        </div>

        {/* Middle Segment: Search & Rules Action Bar */}
        <div className="flex items-center w-full md:flex-1 md:max-w-xl md:mx-4 gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Events"
              className="w-full border border-gray-300 rounded px-3 py-1.5 pr-10 text-xs md:text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a60a27] shadow-inner"
            />
            <Search className="absolute right-3 top-2 md:top-2.5 text-blue-900 w-4 h-4 cursor-pointer" />
          </div>
          
          <button className="bg-[#a60a27] hover:bg-[#8a0820] text-white font-semibold text-[10px] md:text-xs px-3 py-2 md:px-4 rounded shadow transition-colors tracking-wider whitespace-nowrap">
            RULES
          </button>
        </div>

        {/* Right Segment: Desktop Auth Buttons (Hidden on mobile viewports) */}
        <div className="hidden md:flex items-center gap-2">
          <button className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white text-xs font-bold px-4 py-2 rounded border border-[#a60a27] uppercase tracking-wider transition-all">
            SIGNUP
          </button>
          <button className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white text-xs font-bold px-5 py-2 rounded border border-[#a60a27] uppercase tracking-wider transition-all">
            LOGIN
          </button>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION BAR (Horizontal Swiper Area) --- */}
      <nav className="bg-[#222222] border-t border-[#333] overflow-x-auto flex items-center w-full scrollbar-none tracking-tight">
        {/* min-w-max prevents flex items from shrinking below specifications */}
        <div className="flex min-w-max w-full">
          {navItems.map((item) => {
            const isHome = item.type === 'home';
            const isFantasy = item.highlight;
            const isActive = activeTab === item.name;

            // Compute structural background styles
            let tabStyle = "bg-[#2a2a2a] text-gray-200 border-r border-[#1a1a1a] hover:bg-[#333]";
            if (isHome) tabStyle = "bg-[#a60a27] text-white px-4 md:px-5";
            if (isFantasy) tabStyle = "bg-[#ffff00] text-black font-bold border-r border-[#1a1a1a]";

            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex flex-col items-center justify-center py-2 px-3 md:px-4 text-center cursor-pointer transition-colors min-w-[85px] md:min-w-[95px] flex-1 ${tabStyle}`}
              >
                {/* Icon Engine wrapper */}
                <div className={`text-base md:text-lg mb-0.5 ${isHome ? 'text-white' : ''}`}>
                  {item.icon}
                </div>
                
                {/* Text String Labels */}
                <span className="text-[9px] md:text-[10px] tracking-wide font-semibold uppercase whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
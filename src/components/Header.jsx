import React, { useState } from 'react';
import { Search, Home } from 'lucide-react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('FANTASY 11');

  // Navigation Items with mock emojis matching the layout
  const navItems = [
    { name: 'HOME', icon: <Home size={18} />, type: 'home' },
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
  ];

  return (
    <header className="w-full font-sans select-none border-t-[4px] border-[#4a1525]">
      {/* --- TOP ROW --- */}
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm flex-wrap gap-3">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-[#cca04c] text-3xl font-light tracking-wide font-serif">
            RE<span className="font-semibold">DDY</span>
          </span>
          <div className="flex items-center text-[10px] text-[#cca04c] font-medium tracking-[0.2em] -mt-1">
            <span className="border-t border-[#cca04c] w-4 mr-1"></span>
            BOOK.CLUB
            <span className="border-t border-[#cca04c] w-4 ml-1"></span>
          </div>
        </div>

        {/* Search & Rules */}
        <div className="flex items-center flex-1 max-w-xl mx-4 gap-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Events"
              className="w-full border border-gray-300 rounded px-3 py-1.5 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a60a27] shadow-inner"
            />
            <Search className="absolute right-3 top-2.5 text-blue-900 w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          
          <button className="bg-[#a60a27] hover:bg-[#8a0820] text-white font-semibold text-xs px-4 py-2 rounded shadow transition-colors tracking-wider">
            RULES
          </button>
        </div>

        {/* Signup / Login Buttons */}
        <div className="flex items-center gap-2">
          <button className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white text-xs font-bold px-4 py-2 rounded border border-[#a60a27] uppercase tracking-wider transition-all">
            SIGNUP
          </button>
          <button className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white text-xs font-bold px-5 py-2 rounded border border-[#a60a27] uppercase tracking-wider transition-all">
            LOGIN
          </button>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION BAR --- */}
      <nav className="bg-[#222222] border-t border-[#333] overflow-x-auto scrollbar-hide flex items-center w-full">
        <div className="flex min-w-max w-full">
          {navItems.map((item) => {
            const isHome = item.type === 'home';
            const isFantasy = item.highlight;
            const isActive = activeTab === item.name;

            // Conditional styling based on the exact image states
            let tabStyle = "bg-[#2a2a2a] text-gray-200 border-r border-[#1a1a1a] hover:bg-[#333]";
            if (isHome) tabStyle = "bg-[#a60a27] text-white px-5";
            if (isFantasy) tabStyle = "bg-[#ffff00] text-black font-bold border-r border-[#1a1a1a]";

            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex flex-col items-center justify-center py-2 px-4 text-center cursor-pointer transition-colors min-w-[95px] flex-1 ${tabStyle}`}
              >
                {/* Icon Rendering */}
                <div className={`text-lg mb-0.5 ${isHome ? 'text-white' : ''}`}>
                  {item.icon}
                </div>
                
                {/* Text Label */}
                <span className={`text-[10px] tracking-wide font-semibold uppercase whitespace-nowrap`}>
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
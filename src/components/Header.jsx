import React, { useState, useEffect } from 'react';
import { Search, Home, Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header({ onMenuToggle = () => {} }) {
  const [activeTab, setActiveTab] = useState('HOME');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'HOME', icon: <Home size={16} />, path: '/' },
    { name: 'FANTASY 11', icon: '🔥', highlight: true, path: '/fantasy-11' },
    { name: 'IN-PLAY', icon: '🎬', path: '/in-play' },
    { name: 'CRICKET', icon: '🏏', path: '/cricket-page' },
    { name: 'FOOTBALL', icon: '⚽', path: '/football-page' },
    { name: 'TENNIS', icon: '🎾', path: '/tennis-page' },
    { name: 'CASINO', icon: '🎰', path: '/casino' },
    { name: 'SPORTS BOOK', icon: '📘', path: '/sportsbook' },
    { name: 'MMA', icon: '🥊', path: '/mma' },
    { name: 'GOLF', icon: '⛳', path: '/golf' },
    { name: 'ESPORTS', icon: '🎮', path: '/esports' },
    { name: 'KABADDI', icon: '🤼', path: '/kabaddi' },
    { name: 'BASKETBALL', icon: '🏀', path: '/basketball' },
    { name: 'BASEBALL', icon: '⚾', path: '/baseball' },
    { name: 'VOLLEYBALL', icon: '🏐', path: '/volleyball' },
    { name: 'BADMINTON', icon: '🏸', path: '/badminton' },
    { name: 'HOCKEY', icon: '🏑', path: '/hockey' },
    { name: 'RUGBY', icon: '🏉', path: '/rugby' },
    { name: 'BOXING', icon: '🥋', path: '/boxing' },
    { name: 'HORSE RACING', icon: '🏇', path: '/horse-racing' },
    { name: 'GREYHOUND', icon: '🐕', path: '/greyhound' },
    { name: 'DARTS', icon: '🎯', path: '/darts' },
    { name: 'SNOOKER', icon: '🎱', path: '/snooker' },
    { name: 'CYCLING', icon: '🚴', path: '/cycling' },
    { name: 'HANDBALL', icon: '🤾', path: '/handball' },
    { name: 'FUTSAL', icon: '👟', path: '/futsal' },
    { name: 'MOTORSPORT', icon: '🏎️', path: '/motorsport' },
    { name: 'FORMULA 1', icon: '🚘', path: '/formula1' },
    { name: 'POLITICS', icon: '🗳️', path: '/politics' },
    { name: 'COCK FIGHT', icon: '🐓', path: '/cock-fight' },
    { name: 'BINARY', icon: '🎲', path: '/binary' },
  ];

  // Update active tab based on current route
  useEffect(() => {
    const currentItem = navItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    } else if (location.pathname === '/') {
      setActiveTab('HOME');
    }
  }, [location.pathname]);

  const getTabStyles = (item) => {
    const isActive = activeTab === item.name;
    
    if (isActive) {
      // Active tab always gets yellow background with black text
      return 'bg-[#ffff00] text-black font-bold';
    }
    
    if (item.path === '/') {
      return 'bg-[#a60a27] text-white';
    }
    
    return 'bg-[#2a2a2a] text-gray-200 hover:bg-[#333]';
  };

  return (
    <header className="w-full font-sans select-none border-t-[4px] border-[#4a1525] bg-white">
      
      {/* --- TOP ROW: LOGO, SEARCH, AUTH --- */}
      <div className="px-3 py-2 flex flex-wrap items-center justify-between gap-y-3">
        
        {/* HAMBURGER MENU - MOBILE ONLY */}
        <button 
          onClick={onMenuToggle}
          className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <Menu size={24} className="text-[#4a1525]" />
        </button>

        {/* LOGO */}
        <Link to="/" className="flex flex-col items-center leading-none shrink-0">
          <span className="text-[#cca04c] text-2xl md:text-3xl font-light tracking-wide font-serif">
            RE<span className="font-semibold">DDY</span>
          </span>
          <div className="text-[8px] md:text-[10px] text-[#cca04c] font-medium tracking-[0.2em]">BOOK.CLUB</div>
        </Link>

        {/* SEARCH & RULES */}
        <div className="flex items-center flex-grow mx-2 md:mx-6 gap-2">
          <div className="relative flex-grow max-w-lg">
            <input
              type="text"
              placeholder="Search Events"
              className="w-full border border-gray-300 rounded px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#a60a27]"
            />
            <Search className="absolute right-2 top-1.5 text-gray-400 w-4 h-4" />
          </div>
          <button className="bg-[#a60a27] text-white font-bold text-[10px] md:text-xs px-3 py-1.5 md:px-4 rounded uppercase tracking-wider shrink-0">
            RULES
          </button>
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => navigate('/signup')} className="bg-[#2a2a2a] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 rounded uppercase">SIGNUP</button>
          <button onClick={() => navigate('/login')} className="bg-[#2a2a2a] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-5 rounded uppercase">LOGIN</button>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION BAR --- */}
      <nav className="bg-[#222222] border-t border-[#333] overflow-x-auto scrollbar-none">
        <div className="flex min-w-max">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-[85px] md:min-w-[100px] border-r border-[#1a1a1a] transition-all ${getTabStyles(item)}`}
            >
              <div className="text-base">{item.icon}</div>
              <span className="text-[9px] font-semibold uppercase mt-0.5">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
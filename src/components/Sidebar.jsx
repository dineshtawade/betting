import React, { useState, useEffect } from 'react';
import { ChevronDown, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar({ isMobileOpen = false, onClose = () => {} }) {
  const [activeSport, setActiveSport] = useState('HOME');
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

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

  // Set active sport based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const sportItem = navigationItems.find(item => item.path === currentPath);
    if (sportItem) {
      setActiveSport(sportItem.name);
    } else if (currentPath === '/') {
      setActiveSport('HOME');
    }
  }, [location.pathname]);

  const navigationItems = [
    { name: 'HOME', icon: '🏠', path: '/', hasDropdown: false },
    { name: 'IN-PLAY', icon: '🎬', path: '/in-play', hasDropdown: false },
    { name: 'CRICKET', icon: '🏏', path: '/cricket-page', hasDropdown: true, dropdownItems: ['IPL', 'International', 'Domestic', 'T20 League'] },
    { name: 'FOOTBALL', icon: '⚽', path: '/football-page', hasDropdown: true, dropdownItems: ['Premier League', 'La Liga', 'UCL', 'World Cup'] },
    { name: 'TENNIS', icon: '🎾', path: '/tennis-page', hasDropdown: true, dropdownItems: ['ATP', 'WTA', 'Grand Slams', 'Davis Cup'] },
    { name: 'FANTASY 11', icon: '🔥', path: '/fantasy-11', hasDropdown: false, highlight: true },
    { name: 'CASINO', icon: '🎰', path: '/casino', hasDropdown: false },
    { name: 'SPORTS BOOK', icon: '📘', path: '/sportsbook', hasDropdown: false },
    { name: 'MMA', icon: '🥊', path: '/mma', hasDropdown: true, dropdownItems: ['UFC', 'Bellator', 'ONE Championship'] },
    { name: 'GOLF', icon: '⛳', path: '/golf', hasDropdown: true, dropdownItems: ['PGA Tour', 'Majors', 'DP World', 'LIV'] },
    { name: 'ESPORTS', icon: '🎮', path: '/esports', hasDropdown: true, dropdownItems: ['CS2', 'DOTA 2', 'LoL', 'Valorant'] },
    { name: 'KABADDI', icon: '🤼', path: '/kabaddi', hasDropdown: true, dropdownItems: ['PKL', 'World Cup'] },
    { name: 'BASKETBALL', icon: '🏀', path: '/basketball', hasDropdown: true, dropdownItems: ['NBA', 'EuroLeague', 'NCAA'] },
    { name: 'BASEBALL', icon: '⚾', path: '/baseball', hasDropdown: true, dropdownItems: ['MLB', 'World Series'] },
    { name: 'VOLLEYBALL', icon: '🏐', path: '/volleyball', hasDropdown: true },
    { name: 'BADMINTON', icon: '🏸', path: '/badminton', hasDropdown: true },
    { name: 'HOCKEY', icon: '🏑', path: '/hockey', hasDropdown: true },
    { name: 'RUGBY', icon: '🏉', path: '/rugby', hasDropdown: true },
    { name: 'BOXING', icon: '🥋', path: '/boxing', hasDropdown: true },
    { name: 'HORSE RACING', icon: '🏇', path: '/horse-racing', hasDropdown: true },
    { name: 'GREYHOUND', icon: '🐕', path: '/greyhound', hasDropdown: true },
    { name: 'DARTS', icon: '🎯', path: '/darts', hasDropdown: true },
    { name: 'SNOOKER', icon: '🎱', path: '/snooker', hasDropdown: true },
    { name: 'CYCLING', icon: '🚴', path: '/cycling', hasDropdown: true },
    { name: 'HANDBALL', icon: '🤾', path: '/handball', hasDropdown: true },
    { name: 'FUTSAL', icon: '👟', path: '/futsal', hasDropdown: true },
    { name: 'MOTORSPORT', icon: '🏎️', path: '/motorsport', hasDropdown: true },
    { name: 'FORMULA 1', icon: '🚘', path: '/formula1', hasDropdown: true },
    { name: 'POLITICS', icon: '🗳️', path: '/politics', hasDropdown: true },
    { name: 'COCK FIGHT', icon: '🐓', path: '/cock-fight', hasDropdown: true },
    { name: 'BINARY', icon: '🎲', path: '/binary', hasDropdown: true },
  ];

  const toggleDropdown = (sportName) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [sportName]: !prev[sportName]
    }));
  };

  const handleNavigation = (path, sportName) => {
    setActiveSport(sportName);
    navigate(path);
    if (isMobile) {
      setTimeout(onClose, 150);
    }
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    if (isMobile) {
      setTimeout(onClose, 150);
    }
  };

  const sidebarContent = (
    <aside className={`
      w-[280px] sm:w-[280px] bg-white border-r border-gray-200 flex flex-col shadow-sm select-none
      ${isMobile ? 'fixed left-0 top-0 h-full z-50 transition-transform duration-300 ease-in-out' : 'relative h-screen'}
      ${isMobile && !isMobileOpen ? '-translate-x-full' : 'translate-x-0'}
    `}>
      
      {/* Mobile Close Button */}
      {isMobile && (
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <div className="flex flex-col items-start leading-none">
            <span className="text-[#cca04c] text-xl font-light tracking-wide font-serif">
              RE<span className="font-semibold">DDY</span>
            </span>
            <div className="text-[8px] text-[#cca04c] font-medium tracking-[0.2em]">BOOK.CLUB</div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#4a121a]" />
          </button>
        </div>
      )}
      
      {/* Scrollable List Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-sidebar-scroll pb-4">
        {navigationItems.map((item) => {
          const isActive = activeSport === item.name;

          return (
            <div key={item.name}>
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.name);
                  } else {
                    handleNavigation(item.path, item.name);
                  }
                }}
                className={`w-full flex items-center justify-between py-3 px-4 border-b border-gray-100 transition-all text-left group
                  ${isActive 
                    ? 'bg-[#ffff00] text-black font-bold' 
                    : item.highlight 
                      ? 'bg-[#fef3c7] hover:bg-[#fde68a] text-[#4a121a] border-l-4 border-l-[#ffff00]'
                      : 'bg-white hover:bg-gray-50 text-gray-700'
                  }`}
              >
                {/* Left Side: Icon & Name */}
                <div className="flex items-center gap-3">
                  <span className="text-xl w-6 text-center">
                    {item.icon}
                  </span>
                  <span className={`text-sm tracking-wide font-medium ${isActive ? 'font-bold text-black' : ''}`}>
                    {item.name}
                  </span>
                  {item.highlight && !isActive && (
                    <span className="bg-[#ffff00] text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                      HOT
                    </span>
                  )}
                </div>

                {/* Right Side: Arrow (If applicable) */}
                {item.hasDropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`text-gray-500 transition-transform duration-200 ${openDropdowns[item.name] ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {/* Dropdown Items */}
              {item.hasDropdown && openDropdowns[item.name] && item.dropdownItems && (
                <div className="bg-gray-50 border-b border-gray-100">
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDropdownItemClick(`${item.path}/${dropdownItem.toLowerCase().replace(/ /g, '-')}`)}
                      className="w-full flex items-center gap-3 py-2 pl-12 pr-4 text-left text-xs text-gray-600 hover:bg-gray-100 hover:text-[#a60a27] transition-colors"
                    >
                      <ChevronRight size={12} />
                      <span>{dropdownItem}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Casino Promo Banner */}
        <div className="p-3 mt-2">
          <div className="relative w-full rounded-lg overflow-hidden shadow-md group cursor-pointer border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600" 
              alt="Live Casino" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-white text-[10px] font-bold uppercase">Live Casino</div>
              <div className="text-white/80 text-[8px]">Play with Live Dealers</div>
            </div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-60">
              ‹
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-60">
              ›
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-4 py-3 border-t border-gray-200 mt-2">
          <div className="flex flex-col gap-1 text-[10px] text-gray-400">
            <div className="flex justify-between">
              <span>© 2024 Reddy Book Club</span>
              <span>v2.0.1</span>
            </div>
            <div className="flex gap-3 justify-center pt-1">
              <span className="cursor-pointer hover:text-[#a60a27]">Terms</span>
              <span className="cursor-pointer hover:text-[#a60a27]">Privacy</span>
              <span className="cursor-pointer hover:text-[#a60a27]">Support</span>
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
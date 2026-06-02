import React from 'react';
import { 
  Shield, 
  Lock, 
  User, 
  Mail, 
  Gamepad2, 
  Users, 
  Key, 
  MonitorSmartphone, 
  AlertTriangle,
  Trophy,
  Dice6,
  Coins,
  Sparkles
} from 'lucide-react';

const ReddyBookLanding = () => {
  // Sports category images from web (free stock images)
  const sportsImages = [
    {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop",
      name: "Cricket",
      alt: "Cricket stadium action"
    },
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&h=300&fit=crop",
      name: "Football",
      alt: "Football match"
    },
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop",
      name: "Basketball",
      alt: "Basketball game"
    },
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      name: "Esports",
      alt: "Esports gaming"
    },
    {
      url: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&h=300&fit=crop",
      name: "Tennis",
      alt: "Tennis match"
    },
    {
      url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?w=500&h=300&fit=crop",
      name: "Casino",
      alt: "Casino games"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf6eb] py-6 px-4 sm:px-6 md:py-16 font-sans">
      
      {/* Main Container Container */}
      <div className="w-full max-w-6xl mx-auto bg-[#faf6eb] flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Content Section */}
        <div className="w-full md:flex-1 space-y-4 md:space-y-6 text-left">
          
          {/* Image 1 - After heading */}
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src="/Homepage Image 5.webp"
              alt="ReddyBook platform overview"
              className="w-full h-auto object-cover rounded-xl shadow-md border border-[#ebdcb9]"
              loading="lazy"
            />
          </div>

          <span className="block text-sm md:text-base text-gray-700 font-medium tracking-tight">
            What is ReddyBook?
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-[2.6rem] text-[#1a2530] font-normal leading-tight tracking-tight">
            Complete guide to betting, login & registration
          </h1>

          <div className="space-y-5 md:space-y-6 pt-2 text-[#5a6573] text-[15px] sm:text-base md:text-lg font-light leading-relaxed">
            <p>
              ReddyBook is a website for betting and gaming where players can find many different types 
              of sports betting, casino games, and live betting exchanges. Unlike usual betting apps, this 
              one does not use official app stores or regular user registration systems.
            </p>

            {/* Image 2 - After first paragraph */}
            <div className="my-4 overflow-hidden rounded-xl">
              <img
                src="/Homepage Image 7.webp"
                alt="Sports betting interface"
                className="w-full h-auto object-cover rounded-xl shadow-md border border-[#ebdcb9]"
                loading="lazy"
              />
            </div>

            <p className="text-[#1a2530] font-normal">
              Actually, ReddyBook is based on a decentralised network of agents. Users are mostly introduced 
              to the service by agents who provide them with login credentials. So, users access the service 
              through intermediaries, unlike on regulated platforms, where they can register directly.
            </p>

            {/* Image 3 - After second paragraph */}
            <div className="my-4 overflow-hidden rounded-xl">
              <img
                src="/Homepage Image 9.webp"
                alt="Live betting exchange"
                className="w-full h-auto object-cover rounded-xl shadow-md border border-[#ebdcb9]"
                loading="lazy"
              />
            </div>

            <p className="text-[#2c3e50]">
              The terms in the ReddyBook ecosystem, like ReddyBook Club, ReddyBook App 2026, and ReddyBook 
              Betting ID, do not stand for independent services but different aspects or versions of a 
              single system, all developing the same business model.
            </p>

            {/* Image 4 - After third paragraph */}
            <div className="my-4 overflow-hidden rounded-xl">
              <img
                src="/Homepage Image 10 & 11.webp"
                alt="Casino and gaming options"
                className="w-full h-auto object-cover rounded-xl shadow-md border border-[#ebdcb9]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Sports Categories Section */}
          <div className="mt-8 pt-6 border-t border-[#ebdcb9]">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={22} className="text-[#b38f46]" />
              <h3 className="text-xl font-serif font-bold text-gray-900">Popular Sports Categories</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sportsImages.map((sport, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={sport.url} 
                    alt={sport.alt}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{sport.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Feature Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/60 p-4 rounded-xl border border-[#ebdcb9] flex items-start gap-3">
              <div className="p-2 bg-[#f4e9d4] rounded-lg">
                <Dice6 size={20} className="text-[#b38f46]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Casino Games</h4>
                <p className="text-xs text-gray-500">Slots, table games, live dealer options available</p>
              </div>
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-[#ebdcb9] flex items-start gap-3">
              <div className="p-2 bg-[#f4e9d4] rounded-lg">
                <Coins size={20} className="text-[#b38f46]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Live Exchange</h4>
                <p className="text-xs text-gray-500">Real-time betting markets with dynamic odds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Promotional Card */}
        <div className="w-full md:w-[380px] lg:w-[410px] sm:max-w-md sm:mx-auto md:mx-0 flex-shrink-0 mt-4 md:mt-0">
          <div className="bg-gradient-to-br from-[#fffdf9] to-[#f4e9d4] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ebdcb9] relative overflow-hidden h-full min-h-[520px]">
            <img
              src="/Homepage Image 13 & 14 (1).webp"
              alt="Reddy Book Club platform preview"
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf9]/90 via-[#f4e9d4]/90 to-[#faf6eb]/80 pointer-events-none" />
            <div className="relative z-10">
            
            {/* Top Right Mini Utility Bar */}
            <div className="flex justify-end gap-2 text-[#cbb07c] mb-6">
              <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Lock size={13} /></div>
              <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><User size={13} /></div>
              <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Mail size={13} /></div>
              <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Shield size={13} /></div>
            </div>

            {/* Premium Branding Block */}
            <div className="bg-[#111111] text-[#ebd18b] inline-flex flex-col px-4 py-2.5 rounded-md mb-6 shadow-md border border-yellow-600/20">
              <span className="font-serif font-black text-xl tracking-tight leading-none">REDDY</span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-white/90 font-semibold mt-1 leading-none">BOOK CLUB</span>
            </div>

            {/* Image inside card */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src="/Homepage Image 13 & 14.webp"
                alt="Platform features"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Primary Typography Headers */}
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-[1.1] text-black tracking-tight mb-2">
              REDDY BOOK <br /> GUIDE
            </h2>

            <p className="text-[#968059] italic text-sm sm:text-[15px] leading-snug mb-6 max-w-[280px]">
              Understand how the platform, login, and registration system works
            </p>

            {/* Core Features Bullet Points */}
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#3a3a3a] mb-8 relative z-10 font-medium">
              <li className="flex items-center gap-2.5">
                <Gamepad2 size={15} className="text-[#444] shrink-0" />
                <span>Sports, Casino & Live Exchange Access</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Users size={15} className="text-[#444] shrink-0" />
                <span>Agent-Based Account System</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Key size={15} className="text-[#962929] shrink-0" />
                <span>Login via Provided Credentials</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MonitorSmartphone size={15} className="text-[#2b6cb0] shrink-0" />
                <span>Multiple Terms, One Platform Model</span>
              </li>
              <li className="flex items-center gap-2.5">
                <AlertTriangle size={15} className="text-[#d69e2e] shrink-0" />
                <span>Different from Standard Registration</span>
              </li>
            </ul>

            {/* Image 13 & 14 (2) - Bottom of card */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src="/Homepage Image 13 & 14 (2).webp"
                alt="Additional features"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Interactive Actions & URL Anchors */}
            <div className="relative z-10 flex flex-col items-start gap-4">
              <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] hover:from-[#ffe054] hover:to-[#f0b000] text-black font-extrabold py-2.5 px-8 rounded-md shadow-md text-base transition-all duration-150 active:scale-[0.98] border border-[#cca300] flex items-center gap-2">
                <Sparkles size={16} /> Learn More
              </button>

              <div className="border border-[#cbb07c] rounded-md px-3.5 py-1 text-xs text-[#7c6643] bg-white/80 font-bold tracking-wide shadow-sm">
                reddybookclubs.com
              </div>
            </div>
            </div>

            {/* Vector Decors (Faux 3D Shield/Lock Mockups) */}
            <div className="absolute -bottom-12 -right-10 opacity-20 pointer-events-none transform rotate-12">
              <Shield size={220} className="text-[#cca300] fill-[#dfb539]" />
            </div>
            <div className="absolute bottom-12 right-6 opacity-35 pointer-events-none">
              <Lock size={85} className="text-[#222] fill-[#111]" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ReddyBookLanding;
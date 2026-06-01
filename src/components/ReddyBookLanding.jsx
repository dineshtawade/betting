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
  AlertTriangle 
} from 'lucide-react';

const ReddyBookLanding = () => {
  return (
    <div className="min-h-screen bg-[#faf6eb] py-6 px-4 sm:px-6 md:py-16 flex items-center justify-center font-sans">
      
      {/* Main Container Container */}
      <div className="w-full max-w-6xl bg-[#faf6eb] flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Content Section */}
        <div className="w-full md:flex-1 space-y-4 md:space-y-6 text-left">
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

            <p className="text-[#1a2530] font-normal">
              Actually, ReddyBook is based on a decentralised network of agents. Users are mostly introduced 
              to the service by agents who provide them with login credentials. So, users access the service 
              through intermediaries, unlike on regulated platforms, where they can register directly.
            </p>

            <p className="text-[#2c3e50]">
              The terms in the ReddyBook ecosystem, like ReddyBook Club, ReddyBook App 2026, and ReddyBook 
              Betting ID, do not stand for independent services but different aspects or versions of a 
              single system, all developing the same business model.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Promotional Card */}
        <div className="w-full md:w-[380px] lg:w-[410px] sm:max-w-md sm:mx-auto md:mx-0 flex-shrink-0 mt-4 md:mt-0">
          <div className="bg-gradient-to-br from-[#fffdf9] to-[#f4e9d4] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ebdcb9] relative overflow-hidden h-full min-h-[520px]">
            
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

            {/* Interactive Actions & URL Anchors */}
            <div className="relative z-10 flex flex-col items-start gap-4">
              <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] hover:from-[#ffe054] hover:to-[#f0b000] text-black font-extrabold py-2.5 px-8 rounded-md shadow-md text-base transition-all duration-150 active:scale-[0.98] border border-[#cca300]">
                Learn More
              </button>

              <div className="border border-[#cbb07c] rounded-md px-3.5 py-1 text-xs text-[#7c6643] bg-white/80 font-bold tracking-wide shadow-sm">
                reddybookclubs.com
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
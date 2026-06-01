import React from 'react';
import { 
  Shield, 
  Lock, 
  User, 
  Mail, 
  ArrowRight,
  UserCheck,
  Wallet,
  TrendingUp,
  Gamepad
} from 'lucide-react';

const ReddyBookFeatures = () => {
  return (
    <div className="min-h-screen bg-[#faf6eb] py-8 px-4 sm:px-6 md:py-16 flex items-center justify-center font-sans text-gray-800">
      <div className="w-full max-w-6xl space-y-8">
        
        {/* Top Section: At a Glance */}
        <div className="bg-[#faf6eb] space-y-4">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight">
            At a glance
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-700 text-base md:text-lg font-light pl-1">
            <li><span className="font-normal text-gray-900">Agent-based access</span> — no public self-signup</li>
            <li>Sports, casino & live exchange markets</li>
            <li>Cricket, football, tennis, basketball & esports</li>
            <li>UPI, net banking, bank transfer & wallets</li>
          </ul>
          <a 
            href="#about" 
            className="inline-flex items-center gap-1 text-[#a62b2b] hover:text-[#cd3d3d] font-medium text-sm md:text-base transition-colors pt-2 group"
          >
            About Reddy Book Club <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Divider line as seen in image_efef3e.png */}
        <hr className="border-[#ebdcb9] my-4" />

        {/* Bottom Section: Main Content Split Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column: How it operates */}
          <div className="w-full md:flex-1 space-y-6 text-left">
            <div>
              <span className="block text-xs md:text-sm text-gray-600 font-medium tracking-wide uppercase mb-1">
                How it works
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] text-[#1a2530] font-normal leading-tight tracking-tight">
                How ReddyBook Club operates?
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-[17px] font-light">
              ReddyBook Club operates in a way that is different from other traditional betting platforms. 
              The platform doesn't allow users to sign up directly, but rather it depends on intermediaries 
              (agents) to a large extent.
            </p>

            {/* Sub-feature 1 */}
            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-medium text-gray-900">
                Agent-based access
              </h3>
              <p className="text-gray-600 font-light text-sm md:text-base">
                Users are not allowed to independently open accounts — reach an agent for login details
              </p>
            </div>

            {/* Sub-feature 2 */}
            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-medium text-gray-900">
                Manual transactions
              </h3>
              <p className="text-gray-600 font-light text-sm md:text-base">
                Deposits and withdrawals are done through the agent manually, not via automated payment gateways
              </p>
            </div>
          </div>

          {/* Right Column: Visual System Features Card */}
          <div className="w-full md:w-[380px] lg:w-[410px] sm:max-w-md sm:mx-auto md:mx-0 flex-shrink-0">
            <div className="bg-gradient-to-br from-[#fffdf9] to-[#f4e9d4] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#ebdcb9] relative overflow-hidden min-h-[500px] flex flex-col justify-between">
              
              <div>
                {/* Top Right Header Utility Icons */}
                <div className="flex justify-end gap-2 text-[#cbb07c] mb-5">
                  <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Lock size={12} /></div>
                  <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><User size={12} /></div>
                  <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Mail size={12} /></div>
                  <div className="p-1.5 border border-[#ebdcb9] rounded-full bg-white/60 shadow-sm"><Shield size={12} /></div>
                </div>

                {/* Dark Logo Plate */}
                <div className="bg-[#111111] text-[#ebd18b] inline-flex flex-col px-4 py-2 rounded-md mb-6 shadow-md border border-yellow-600/10">
                  <span className="font-serif font-black text-lg tracking-tight leading-none">REDDY</span>
                  <span className="text-[8px] font-sans tracking-[0.2em] text-white/90 font-semibold mt-1 leading-none">BOOK CLUB</span>
                </div>

                {/* Card Title Header */}
                <h2 className="font-serif text-3xl font-extrabold leading-[1.1] text-black tracking-tight mb-2">
                  REDDY BOOK <br /> SYSTEM FEATURES
                </h2>

                {/* Card Context Label */}
                <p className="text-[#968059] text-xs sm:text-sm font-medium leading-snug mb-6 max-w-[280px]">
                  How the platform operates through agents and manual processes
                </p>

                {/* Feature Checkpoints */}
                <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#333333] relative z-10 font-medium">
                  <li className="flex items-center gap-2.5">
                    <UserCheck size={15} className="text-[#444] shrink-0" />
                    <span>Agent-Based Account Access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Wallet size={15} className="text-[#444] shrink-0" />
                    <span>Manual Deposits & Withdrawals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <TrendingUp size={15} className="text-[#444] shrink-0" />
                    <span>Exchange Betting with Live Odds</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Gamepad size={15} className="text-[#444] shrink-0" />
                    <span>Casino Games Integration</span>
                  </li>
                </ul>
              </div>

              {/* Decorative Card Subject Model Wrapper */}
              <div className="absolute bottom-0 right-0 w-[180px] h-[220px] pointer-events-none z-0 overflow-hidden rounded-br-2xl">
                {/* Masked elegant overlay representing the card graphics */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#f4e9d4] via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
                  alt="System Representative graphic" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale contrast-125"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReddyBookFeatures;
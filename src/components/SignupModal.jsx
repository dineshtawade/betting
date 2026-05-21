import React from 'react';

export default function SignupModal({ isOpen, onClose, switchToLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Dark Modal Container */}
      <div className="w-full max-w-md bg-[#222222] border-2 border-white/20 rounded-xl p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl font-bold transition-colors"
        >
          ✕
        </button>

        {/* Logo Header */}
        <div className="flex flex-col items-center justify-center mb-6 mt-2">
          <span className="text-[#cca04c] text-3xl font-light tracking-wide font-serif leading-none">
            RE<span className="font-semibold">DDY</span>
          </span>
          <div className="flex items-center text-[9px] text-[#cca04c] font-medium tracking-[0.2em] mt-0.5">
            <span className="border-t border-[#cca04c] w-3 mr-1"></span>
            BOOK.CLUB
            <span className="border-t border-[#cca04c] w-3 ml-1"></span>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Username 4 To 15 Alphanumeric"
              className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#a60a27]"
            />
          </div>

          {/* Mobile Input Group */}
          <div className="flex border border-gray-600 rounded bg-[#2a2a2a] overflow-hidden">
            <div className="flex items-center gap-1 bg-[#1e1e1e] px-3 border-r border-gray-600 text-sm text-gray-300">
              <span className="text-base">🇮🇳</span>
              <span>+91</span>
              <span className="text-[10px] text-gray-500 ml-1">▼</span>
            </div>
            <input
              type="tel"
              placeholder="Mobile No"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password 6 To 20 Alphanumeric"
              className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#a60a27]"
            />
            <p className="text-[10px] text-red-500 font-semibold mt-1">
              (Must be contained alphanumeric and more than 6 letters)
            </p>
          </div>

          {/* Referral Code */}
          <div>
            <input
              type="text"
              placeholder="Referral Code (Optional)"
              className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#a60a27]"
            />
          </div>

          {/* SMS Notice Disclaimer */}
          <p className="text-[11px] text-red-500 font-medium leading-tight">
            By continuing you will receive a one-time verification code to your phone number by SMS.
          </p>

          {/* Submission Action Button */}
          <button className="w-full bg-[#a60a27] hover:bg-[#8a0820] text-white font-bold text-sm py-3 rounded tracking-wider shadow-lg transition-colors mt-2">
            GET OTP ON WHATSAPP
          </button>
        </form>

        {/* Redirection Link footer */}
        <div className="text-center text-sm mt-6 text-gray-400">
          Already have account?{' '}
          <button 
            onClick={switchToLogin}
            className="text-red-500 font-medium underline hover:text-red-400 ml-1"
          >
            Log In
          </button>
        </div>

      </div>
    </div>
  );
}
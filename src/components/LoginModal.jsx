import React from 'react';

export default function LoginModal({ isOpen, onClose, switchToSignup }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Split Design Card */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative max-h-[90vh]">
        
        {/* Right Corner Close Button Overlay */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-3 text-white/80 hover:text-white text-xl font-bold z-20 md:text-white"
        >
          ✕
        </button>

        {/* LEFT SIDE PANEL: Input Blue Form */}
        <div className="w-full md:w-1/2 bg-[#004b93] p-6 flex flex-col justify-between text-white relative">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Account Login</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Username Field */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-white/90 mb-1">
                  Username / Mobile Number
                </label>
                <input
                  type="text"
                  className="w-full bg-[#003870] border border-blue-400/30 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-white/90 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-[#003870] border border-blue-400/30 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>

              {/* Remember Me Toggle */}
              <div className="flex items-center gap-2 pt-1">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded bg-[#003870] border-blue-400 checked:bg-blue-600 scale-105 accent-blue-500 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs font-medium text-white/90 cursor-pointer select-none">
                  Remember Me?
                </label>
              </div>

              {/* Recovery Option */}
              <div className="text-center pt-2">
                <button className="text-xs font-semibold underline hover:text-blue-200 tracking-wide text-white/90">
                  Forgot Password/Username?
                </button>
              </div>

              {/* Submission CTA Stack */}
              <div className="space-y-2 pt-2">
                <button className="w-full bg-white text-black font-bold text-sm py-2.5 rounded-full border border-red-600 hover:bg-gray-100 uppercase tracking-wider shadow transition-colors">
                  Log In
                </button>
                <button className="w-full bg-white text-black font-bold text-sm py-2.5 rounded-full border border-red-600 hover:bg-gray-100 uppercase tracking-wider shadow transition-colors">
                  Login With Demo ID
                </button>
              </div>
            </form>
          </div>

          {/* Footer Branding Content */}
          <div className="mt-8 text-center space-y-1">
            <button 
              onClick={switchToSignup}
              className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm py-2.5 rounded flex items-center justify-center gap-2 shadow tracking-wide uppercase transition-colors"
            >
              Download APK <span className="text-base">🤖</span>
            </button>
            <div className="text-[11px] font-medium text-white/80 pt-2">
              Powered By <span className="text-red-500 font-bold">Reddybook</span>
            </div>
            <div className="text-[11px] font-mono tracking-tight text-white/90">
              Reddybook.Clubofficial@Gmail.Com
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PANEL: Graphic Dynamic Sports Promo Banner */}
        <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-indigo-900 to-emerald-900 overflow-hidden h-full min-h-[460px]">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800" 
            alt="Sports Book Banner Promo" 
            className="w-full h-full object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-black/30 pointer-events-none" />
          
          {/* Bold Visual Text Overlay similar to image block */}
          <div className="absolute inset-0 flex flex-col justify-between items-center p-8 text-center select-none font-black text-white tracking-widest uppercase">
            <h1 className="text-4xl drop-shadow-lg font-serif">SPORTS</h1>
            <h1 className="text-5xl drop-shadow-2xl font-sans tracking-wide text-emerald-300">BOOK</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
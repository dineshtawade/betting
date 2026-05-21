import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    // 'fixed inset-0' aur 'bg-black/70' ko hata kar min-h-screen use kiya
    <div className="min-h-screen bg-[#eef2f5] flex items-center justify-center p-4">
      {/* Container - Thoda aur wide kiya */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative min-h-[500px]">
        
        {/* LEFT SIDE PANEL: Login Form */}
        <div className="w-full md:w-1/2 bg-[#004b93] p-8 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-8">Account Login</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-white/90 mb-1">
                  Username / Mobile Number
                </label>
                <input
                  type="text"
                  className="w-full bg-[#003870] border border-blue-400/30 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-white/90 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-[#003870] border border-blue-400/30 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="accent-blue-500 cursor-pointer" />
                <label htmlFor="remember" className="text-xs text-white/90 cursor-pointer">Remember Me?</label>
              </div>

              <button className="w-full bg-white text-black font-bold text-sm py-3 rounded-full border border-red-600 hover:bg-gray-100 uppercase tracking-wider shadow transition-colors">
                Log In
              </button>
              
              <button className="w-full bg-white text-black font-bold text-sm py-3 rounded-full border border-red-600 hover:bg-gray-100 uppercase tracking-wider shadow transition-colors">
                Login With Demo ID
              </button>
            </form>
          </div>

          <div className="mt-10 text-center space-y-3">
            <button className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm py-3 rounded uppercase transition-colors">
              Download APK 🤖
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="text-sm font-semibold underline text-white/80 hover:text-white"
            >
              Don't have an account? Register here
            </button>
          </div>
        </div>

        {/* RIGHT SIDE PANEL: Graphic Banner */}
        <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-indigo-900 to-emerald-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800" 
            alt="Sports" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center text-white font-black uppercase">
            <h1 className="text-4xl">SPORTS</h1>
            <h1 className="text-5xl text-emerald-300">BOOK</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
// ReddyBookClubPage.jsx
import React, { useState, useEffect } from 'react';

const ReddyBookClubPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="bg-black/70 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/40">
                <span className="font-black text-2xl">RB</span>
              </div>
              <div>
                <span className="text-3xl font-bold tracking-tighter">REDDY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BOOK</span></span>
                <p className="text-xs text-purple-300 -mt-1 tracking-widest">CLUB</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-purple-400 transition">Home</a>
              <a href="#live" className="hover:text-purple-400 transition">Live Betting</a>
              <a href="#sports" className="hover:text-purple-400 transition">Sports</a>
              <a href="#download" className="hover:text-purple-400 transition">Download</a>
              <a href="#support" className="hover:text-purple-400 transition">Support</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-2.5 text-sm font-semibold border border-purple-400 rounded-full hover:bg-purple-500/10 transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2.5 rounded-full font-bold shadow-lg shadow-purple-500/40 transition">
                Get Your ID Now
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-6 border-t border-purple-500/20 space-y-4">
              <a href="#" className="block py-2 px-4 hover:bg-purple-500/10 rounded-xl">Home</a>
              <a href="#" className="block py-2 px-4 hover:bg-purple-500/10 rounded-xl">Live Betting</a>
              <a href="#" className="block py-2 px-4 hover:bg-purple-500/10 rounded-xl">Sports</a>
              <a href="#" className="block py-2 px-4 hover:bg-purple-500/10 rounded-xl">Download APK</a>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-2xl font-bold">
                Get Your Reddybook ID
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Sports Betting Focus */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1622473596134-3e1a5f8c7e0d?w=2070&q=85" 
            alt="Cricket Stadium Betting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-purple-950/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400">🔴 LIVE</span>
              <span className="text-sm font-medium">IPL • T20 • International Matches</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
              Bet on <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Every Match</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              India's most trusted sports betting platform. Real-time odds, instant withdrawals, and the best cricket betting experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 transition transform shadow-2xl shadow-purple-500/50 flex items-center justify-center gap-3">
                🚀 Get Your Betting ID Now
              </button>
              <button className="border-2 border-white/60 hover:border-white text-white font-bold text-lg px-10 py-4 rounded-2xl transition flex items-center justify-center gap-3">
                📱 Download APK
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm">
              <div>✅ Instant UPI Deposits</div>
              <div>✅ Fast Withdrawals</div>
              <div>✅ 400% Welcome Bonus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-12 bg-black/60 border-t border-b border-purple-500/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1.8L+", label: "Active Bettors" },
            { number: "450+", label: "Live Matches" },
            { number: "₹85Cr+", label: "Paid This Month" },
            { number: "4.9/5", label: "User Rating" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-purple-400">{stat.number}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Sports Betting */}
      <section id="sports" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Popular Betting Markets</h2>
            <p className="text-gray-400">Bet on your favorite sports with competitive odds</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🏏", name: "Cricket", desc: "IPL, T20, Test", img: "https://images.unsplash.com/photo-1531415074967-9c3c2c7c5c0d?w=600" },
              { icon: "⚽", name: "Football", desc: "EPL, La Liga", img: "https://images.unsplash.com/photo-1622473596134-3e1a5f8c7e0d?w=600" },
              { icon: "🏀", name: "Basketball", desc: "NBA & More", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600" },
              { icon: "🎾", name: "Tennis", desc: "Grand Slams", img: "https://images.unsplash.com/photo-1622279457484-9c0e6b8d5e0a?w=600" },
              { icon: "🏎️", name: "Kabaddi", desc: "Pro Kabaddi", img: "https://images.unsplash.com/photo-1587280501635-68a0c8c3e8a5?w=600" },
              { icon: "🏅", name: "Esports", desc: "BGMI, Valorant", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600" },
            ].map((sport, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl h-80">
                <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-5xl mb-2">{sport.icon}</div>
                  <h3 className="text-2xl font-bold">{sport.name}</h3>
                  <p className="text-purple-300 text-sm">{sport.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Reddy Book Club */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">India's Favorite <span className="text-purple-400">Sports Betting</span> Platform</h2>
              <p className="text-lg text-gray-300 mb-6">
                Reddy Book Club offers the best cricket betting experience with live IPL matches, match winner, toss, player performance, and more.
              </p>
              <div className="space-y-4">
                {[
                  "Competitive Odds & High Returns",
                  "Live Streaming & In-Play Betting",
                  "Instant Deposits & Withdrawals",
                  "24/7 Hindi Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1560272564-c83b11b89c6b?w=800&q=85" 
              alt="Cricket Betting Action"
              className="rounded-3xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Get Your ID */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900/70 rounded-3xl p-10 border border-purple-500/20">
              <h3 className="text-3xl font-bold mb-8">Get Betting ID in 60 Seconds</h3>
              {[
                "Enter your mobile number",
                "Quick verification",
                "Receive ID & Password",
                "Start betting instantly"
              ].map((step, i) => (
                <div key={i} className="flex gap-4 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i+1}
                  </div>
                  <p className="text-lg text-gray-200 pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Betting Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "400% First Deposit Bonus",
                  "Live Match Betting",
                  "Highest IPL Odds",
                  "Cashback on Every Match"
                ].map((b, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs - Login, APK, Platform */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Access Your Betting Account</h2>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {[
              { id: 'login', label: 'Login', icon: '👤' },
              { id: 'apk', label: 'APK Download', icon: '📱' },
              { id: 'platform', label: 'Live Platform', icon: '🌐' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg' 
                  : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-purple-950/30 border border-purple-500/20 rounded-3xl p-12">
            {activeTab === 'login' && <p className="text-xl">Fast login with your Reddybook ID. Bet on live matches instantly.</p>}
            {activeTab === 'apk' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Download Reddybook APK</h3>
                <button className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-2xl text-lg font-bold">📱 Download Latest APK</button>
              </div>
            )}
            {activeTab === 'platform' && <p className="text-xl">No download needed. Bet directly from browser with live scores.</p>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 Reddy Book Club • 18+ Only • Play Responsibly • Gamble Responsibly
      </footer>
    </div>
  );
};

export default ReddyBookClubPage;
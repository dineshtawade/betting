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

  // All working image URLs
  const images = {
    hero: "https://images.unsplash.com/photo-1531415074967-9c3c2c7c5c0d?w=1600&q=85",
    cricket: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    football: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80",
    basketball: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    // tennis: "https://images.unsplash.com/photo-1622279457484-9c0e6b8d5e0a?w=800&q=80",
    // kabaddi: "https://images.unsplash.com/photo-1587280501635-68a0c8c3e8a5?w=800&q=80",
    esports: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    betting: "data:image/jpeg;base64,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"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-lg border-b border-blue-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/40">
                <span className="font-black text-xl sm:text-2xl">RB</span>
              </div>
              <div>
                <span className="text-xl sm:text-3xl font-bold tracking-tighter">REDDY <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">BOOK</span></span>
                <p className="text-[10px] sm:text-xs text-blue-300 -mt-1 tracking-widest">CLUB</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#live" className="hover:text-blue-400 transition">Live Betting</a>
              <a href="#sports" className="hover:text-blue-400 transition">Sports</a>
              <a href="#download" className="hover:text-blue-400 transition">Download</a>
              <a href="#support" className="hover:text-blue-400 transition">Support</a>
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <button className="px-5 py-2 text-sm font-semibold border border-blue-400 rounded-full hover:bg-blue-500/10 transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-5 py-2 rounded-full font-bold shadow-lg shadow-blue-500/40 transition">
                Get Your ID Now
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-blue-500/20 space-y-3">
              <a href="#" className="block py-2 px-4 hover:bg-blue-500/10 rounded-xl">Home</a>
              <a href="#" className="block py-2 px-4 hover:bg-blue-500/10 rounded-xl">Live Betting</a>
              <a href="#" className="block py-2 px-4 hover:bg-blue-500/10 rounded-xl">Sports</a>
              <a href="#" className="block py-2 px-4 hover:bg-blue-500/10 rounded-xl">Download APK</a>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-2xl font-bold">
                Get Your Reddybook ID
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero}
            alt="Cricket Stadium"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1.5 mb-5">
              <span className="text-red-400 animate-pulse">● LIVE</span>
              <span className="text-xs sm:text-sm font-medium">IPL • T20 • International Matches</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tighter mb-5">
              Bet on <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Every Match</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-300 mb-7 leading-relaxed">
              India's most trusted sports betting platform. Real-time odds, instant withdrawals, and the best cricket betting experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-2xl hover:scale-105 transition transform shadow-2xl shadow-blue-500/50 flex items-center justify-center gap-2">
                Get Your Betting ID Now
              </button>
              <button className="border-2 border-white/60 hover:border-white text-white font-bold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-2xl transition flex items-center justify-center gap-2">
                Download APK
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs sm:text-sm">
              <div className="flex items-center gap-2">✅ Instant UPI Deposits</div>
              <div className="flex items-center gap-2">✅ Fast Withdrawals</div>
              <div className="flex items-center gap-2">✅ 400% Welcome Bonus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-10 sm:py-12 bg-black/60 border-t border-b border-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { number: "1.8L+", label: "Active Bettors" },
            { number: "450+", label: "Live Matches" },
            { number: "₹85Cr+", label: "Paid This Month" },
            { number: "4.9/5", label: "User Rating" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-4xl font-bold text-blue-400">{stat.number}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Sports Betting */}
      <section id="sports" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Popular Betting Markets</h2>
            <p className="text-gray-400 text-sm sm:text-base">Bet on your favorite sports with competitive odds</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Cricket", desc: "IPL, T20, Test", img: images.cricket },
              { name: "Football", desc: "EPL, La Liga", img: images.football },
              { name: "Basketball", desc: "NBA & More", img: images.basketball },
              // { name: "Tennis", desc: "Grand Slams", img: images.tennis },
              // { name: "Kabaddi", desc: "Pro Kabaddi", img: images.kabaddi },
              { name: "Esports", desc: "BGMI, Valorant", img: images.esports },
            ].map((sport, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl h-72 sm:h-80">
                <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-bold">{sport.name}</h3>
                  <p className="text-blue-300 text-sm">{sport.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Reddy Book Club */}
      <section className="py-16 sm:py-20 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">India's Favorite <span className="text-blue-400">Sports Betting</span> Platform</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Reddy Book Club offers the best cricket betting experience with live IPL matches, match winner, toss, player performance, and more.
              </p>
              <div className="space-y-3">
                {[
                  "Competitive Odds & High Returns",
                  "Live Streaming & In-Play Betting",
                  "Instant Deposits & Withdrawals",
                  "24/7 Hindi Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-gray-200 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <img 
              src={images.betting}
              alt="Cricket Betting Action"
              className="rounded-2xl shadow-2xl border border-blue-500/20 w-full object-cover h-64 md:h-auto"
            />
          </div>
        </div>
      </section>

      {/* Get Your ID Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gray-900/70 rounded-2xl p-6 sm:p-10 border border-blue-500/20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get Betting ID in 60 Seconds</h3>
              {[
                "Enter your mobile number",
                "Quick verification",
                "Receive ID & Password",
                "Start betting instantly"
              ].map((step, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {i+1}
                  </div>
                  <p className="text-base sm:text-lg text-gray-200 pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold">Betting Benefits</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "400% First Deposit Bonus",
                  "Live Match Betting",
                  "Highest IPL Odds",
                  "Cashback on Every Match"
                ].map((b, i) => (
                  <div key={i} className="bg-white/5 p-4 sm:p-5 rounded-xl flex items-center gap-3">
                    <span className="text-xl">🏆</span>
                    <span className="text-sm sm:text-base">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 sm:py-20 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Access Your Betting Account</h2>

          <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
            {[
              { id: 'login', label: 'Login', icon: '👤' },
              { id: 'apk', label: 'APK Download', icon: '📱' },
              { id: 'platform', label: 'Live Platform', icon: '🌐' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all text-sm sm:text-base ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg' 
                  : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-blue-950/30 border border-blue-500/20 rounded-2xl p-6 sm:p-12">
            {activeTab === 'login' && (
              <div>
                <p className="text-base sm:text-xl mb-6">Fast login with your Reddybook ID. Bet on live matches instantly.</p>
                <input type="text" placeholder="Enter your User ID" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 mb-4 text-white" />
                <input type="password" placeholder="Password" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 mb-4 text-white" />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 w-full py-3 rounded-xl font-bold">Login Now</button>
              </div>
            )}
            {activeTab === 'apk' && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Download Reddybook APK</h3>
                <p className="mb-6 text-gray-300">Get the best mobile betting experience with our Android app.</p>
                <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl text-lg font-bold">Download Latest APK</button>
              </div>
            )}
            {activeTab === 'platform' && (
              <div>
                <p className="text-base sm:text-xl mb-6">No download needed. Bet directly from browser with live scores.</p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-xl font-bold">Launch Live Platform</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How to Start Betting</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Follow these simple steps to begin your winning journey</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Register", desc: "Sign up with your mobile number" },
              { step: "2", title: "Deposit Funds", desc: "Add money via UPI, Paytm, or Bank" },
              { step: "3", title: "Choose Match", desc: "Select from 450+ live events" },
              { step: "4", title: "Place Bet", desc: "Pick your odds and bet amount" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by 1.8 Lakh+ Bettors</h2>
          <p className="text-gray-400 mb-12">Real stories from our winning community</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Sharma", city: "Mumbai", text: "Best platform for IPL betting. Fast withdrawals and great odds!", rating: 5 },
              { name: "Priya Patel", city: "Delhi", text: "The live betting feature is amazing. Customer support is very helpful.", rating: 5 },
              { name: "Amit Singh", city: "Bangalore", text: "Got my ID in 2 minutes. Highest payouts in the market.", rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 text-yellow-400 mb-3">{"★".repeat(testimonial.rating)}</div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Is Reddy Book Club legal in India?", a: "Yes, online sports betting is legal in India and we operate under international gaming licenses." },
              { q: "How fast are withdrawals?", a: "Withdrawals are processed within 15-30 minutes to your bank account or UPI ID." },
              { q: "What is the minimum deposit?", a: "Minimum deposit is just ₹100 through UPI, Paytm, or Bank Transfer." },
              { q: "Do you offer live streaming?", a: "Yes, we provide live streaming for major cricket matches and sporting events." }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 sm:py-12 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
        <div className="container mx-auto px-4">
          <p>© 2026 Reddy Book Club • 18+ Only • Play Responsibly • Gamble Responsibly</p>
          <p className="mt-2">For support: support@reddybookclub.com | Toll Free: 1800-XXX-XXXX</p>
        </div>
      </footer>
    </div>
  );
};

export default ReddyBookClubPage;
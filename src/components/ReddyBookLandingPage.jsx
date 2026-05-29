// ReddyBookClubPage.jsx
import React, { useState, useEffect } from 'react';

const ReddyBookClubPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="font-bold text-white text-xl">RB</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight">
                  REDDY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">BOOK</span>
                </span>
                <span className="block text-xs text-gray-400 -mt-1">Club</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-purple-400 transition duration-300">Home</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">Login</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">APK Download</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">Features</a>
              <a href="#" className="hover:text-purple-400 transition duration-300">Support</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-5 rounded-full transition duration-300 shadow-lg shadow-purple-500/30 flex items-center gap-2">
                🚀 Get Your ID
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-purple-400 transition px-2 py-1">Home</a>
                <a href="#" className="hover:text-purple-400 transition px-2 py-1">Login</a>
                <a href="#" className="hover:text-purple-400 transition px-2 py-1">APK Download</a>
                <a href="#" className="hover:text-purple-400 transition px-2 py-1">Features</a>
                <a href="#" className="hover:text-purple-400 transition px-2 py-1">Support</a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-full w-full flex items-center justify-center gap-2">
                  🚀 Get Your ID
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Gaming Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Welcome to</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reddy Book</span> Club
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-6 mb-8">
              In the rapidly changing digitalized world, people are always seeking platforms that will provide them with ease, 
              speed and accessibility. Reddy Book club has become a common name among users seeking a legitimate and convenient 
              online experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2">
                🚀 Get Your Reddybook ID
              </button>
              <button className="border border-purple-500 hover:bg-purple-500/20 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center gap-2">
                📱 Download APK
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Reddy Book Club Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reddy Book Club</span>?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Reddy Book Club is an online solution where users can avail services using mobile and web-based systems. 
                It is geared towards <span className="text-purple-400 font-semibold">simplicity, efficiency, and ease of use</span> for all forms of users.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A good number of users type in <span className="text-purple-400 font-semibold">reddybook club or reddyanna</span> in search of a platform where they can access 
                without needless complication. Reddy Book Club serves this purpose by providing a simplistic interface that aids in navigating with ease.
              </p>
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                <p className="text-gray-200 italic">
                  "The site is designed in such a way that it is easy to use and one can create an account, log in and navigate without any hassle."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌐", title: "Web Access", desc: "Desktop & Mobile" },
                { icon: "📱", title: "Mobile First", desc: "Android & iOS ready" },
                { icon: "⚡", title: "Fast Access", desc: "No delays" },
                { icon: "🛡️", title: "Secure", desc: "Your data protected" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 hover:border-purple-500/50 transition-all">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Your Reddybook ID Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reddybook ID</span> in Minutes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              The initial stage to access the platform is to create your Reddybook ID. This ID is your individual entry point
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Steps */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                🔑 Simple Steps to Get Started
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Finish the fast registration procedure", icon: "👤" },
                  { step: "02", title: "Get your login details", icon: "🔑" },
                  { step: "03", title: "Log in to your account with reddybook", icon: "➡️" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 text-lg">{item.title}</p>
                    </div>
                    <div className="text-purple-400 text-2xl">{item.icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-gray-900/80 to-pink-900/20 rounded-2xl p-8 border border-pink-500/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                💰 With an Active ID, You Will Be Able To:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Control your account any time",
                  "Deposit funds instantly",
                  "Withdraw money smoothly",
                  "Browse each feature of the platform"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="text-gray-200 text-center">
                  ✨ It is structured in a way that it is easy to use by beginners and even new users can start-off with ease. ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login, APK & Platform Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reddybook</span> - Login, APK Download & Online Platform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'login', label: 'Login', icon: '👤' },
              { id: 'apk', label: 'APK Download', icon: '📱' },
              { id: 'platform', label: 'Online Platform', icon: '🌐' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30">
            {activeTab === 'login' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Easy Login Process</h3>
                  <p className="text-gray-300 mb-4">Access your Reddybook account anytime, anywhere with just a few clicks.</p>
                  <ul className="space-y-3">
                    {[
                      "Visit the official Reddybook portal",
                      "Enter your registered ID and password",
                      "Complete two-factor verification",
                      "Start your gaming experience"
                    ].map((step, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                        <span className="text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2">
                    Login Now ➡️
                  </button>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl text-purple-400">👤</div>
                    <div>
                      <p className="text-gray-400">Demo Credentials</p>
                      <p className="font-mono text-sm">ID: demo_user_123</p>
                      <p className="font-mono text-sm">Password: ••••••••</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <span className="text-3xl text-green-500 cursor-pointer hover:scale-110 transition">💬</span>
                    <span className="text-3xl text-blue-500 cursor-pointer hover:scale-110 transition">📨</span>
                    <span className="text-3xl text-purple-400 cursor-pointer hover:scale-110 transition">🎧</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'apk' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Download Reddybook APK</h3>
                  <p className="text-gray-300 mb-4">Get the best mobile experience with our official Android application.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <span className="text-3xl text-green-500">🤖</span>
                      <div>
                        <p className="font-semibold">Android Version</p>
                        <p className="text-sm text-gray-400">v4.2.1 | 45MB</p>
                      </div>
                      <button className="ml-auto bg-purple-500 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                        📱 Download
                      </button>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg opacity-50">
                      <span className="text-3xl text-gray-400">🍎</span>
                      <div>
                        <p className="font-semibold">iOS Version</p>
                        <p className="text-sm text-gray-400">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm">⚠️ Enable "Install from Unknown Sources" in settings before installing APK</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-6xl text-purple-400 mx-auto mb-4">📱</div>
                  <h4 className="font-bold text-xl mb-2">Why Download APK?</h4>
                  <ul className="text-left space-y-2">
                    {["Faster access", "Lower data usage", "Push notifications", "Exclusive mobile bonuses"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2"><span className="text-green-400">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'platform' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Online Platform Features</h3>
                <p className="text-gray-300 mb-6">Our web-based platform offers seamless access across all devices without any downloads required.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: "🌐", title: "Cross-Platform", desc: "Works on any browser" },
                    { icon: "⚡", title: "Fast Loading", desc: "Optimized for speed" },
                    { icon: "🛡️", title: "SSL Secure", desc: "Bank-level security" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition">
                      <div className="text-4xl text-purple-400 mb-2">{item.icon}</div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popularity Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-8 text-center">
            <div className="text-5xl text-purple-400 mx-auto mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-4">Why Reddy Book Club is Growing Rapidly</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The increased popularity of <span className="text-purple-400 font-semibold">reddy anna club and reddy anna book club</span> indicates that users are moving to websites 
              that provide easy navigation and fast access. Being digitally robust, reddybook still draws more users seeking 
              a trustworthy and user-friendly interface.
            </p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Games & Betting</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏏", name: "Cricket", color: "from-green-500 to-green-700" },
              { icon: "🏏", name: "IPL", color: "from-blue-500 to-blue-700" },
              { icon: "🃏", name: "Poker", color: "from-red-500 to-red-700" },
              { icon: "🎰", name: "Roulette", color: "from-yellow-500 to-yellow-700" },
              { icon: "🎮", name: "Slots", color: "from-pink-500 to-pink-700" },
              { icon: "🏆", name: "Live Casino", color: "from-purple-500 to-purple-700" }
            ].map((game, idx) => (
              <div key={idx} className={`bg-gradient-to-b ${game.color} rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-lg`}>
                <div className="text-4xl mb-2">{game.icon}</div>
                <span className="font-bold text-sm">{game.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⭐", title: "400% Welcome Bonus", desc: "On your first deposit" },
              { icon: "🎧", title: "24/7 Agent Support", desc: "Always available" },
              { icon: "💰", title: "Fast Withdrawals", desc: "Within 24 hours" },
              { icon: "✅", title: "Verified Agents", desc: "Trusted partners" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Get Started</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of satisfied users on Reddy Book Club today. Get your ID in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center gap-2">
              👤 Register Now
            </button>
            <button className="border border-purple-500 hover:bg-purple-500/20 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center gap-2">
              💬 Contact on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm">RB</span>
              </div>
              <span className="text-xl font-bold">REDDY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">BOOK</span> Club</span>
            </div>
            <div className="text-gray-500 text-sm text-center">
              © 2025 Reddy Book Club. 18+ Only. Play responsibly.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">Responsible Gaming</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReddyBookClubPage;
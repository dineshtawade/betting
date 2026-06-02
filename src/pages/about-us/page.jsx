import React, { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Banner Image 1 - No content overlay */}
        <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Privacy Policy Banner 1.webp"
            alt="Reddy Book Club Banner"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        {/* Hero Title Section */}
        <div className="text-center mb-12">
          <span className="text-[#a60a27] text-sm uppercase tracking-[0.3em] font-semibold">Welcome to</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mt-3 leading-tight">
            About Reddy Book Club: Platform Overview, Access, and User Experience
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Learn about Reddy Book Club, including account access, web and APK use,
            payments, support, KYC, and responsible play guidance for users in India today.
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-6">About Reddy Book Club</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Reddy Book Club is built for users who want a simple way to access online sports betting 
              and casino-style entertainment through one platform. If you searched for reddy book club, 
              reddybook club, reddyanna, or even a variation like raddybook, this page is here to explain 
              what the platform is, how it works, and what you should know before getting started.
            </p>
            <p>
              This is not a page full of hype. It is a practical overview of how Reddy Book Club works, 
              what kind of user experience the platform aims to offer, and why people in India often look 
              for terms such as reddy anna club, reddy anna book club, reddy book login, or reddy book club 
              apk when trying to access the site.
            </p>
            <div className="bg-amber-50 border-l-4 border-[#a60a27] p-4 rounded-r-xl mt-4">
              <p className="text-gray-800">
                💡 <span className="font-semibold">For Beginners:</span> You will get a clear starting point. 
                <span className="font-semibold"> For Experienced Users:</span> You will get a better sense of 
                how Reddy Book Club is positioned, what matters before logging in, and what to check for around 
                account access, payments, and responsible use.
              </p>
            </div>
          </div>
        </div>

        {/* What Is Reddy Book Club - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a121a] mb-4">What Is Reddy Book Club?</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                At its core, Reddy Book Club is a digital platform designed to give users access to sports 
                and gaming features in one place. For many users, the biggest appeal is convenience. Instead 
                of jumping between different pages or trying to figure out multiple systems, the goal is to 
                make account access, navigation, and ongoing use more straightforward.
              </p>
              <p>
                People often arrive here through different search terms. Some type reddybook club. Others look 
                for reddy anna login, reddy anna book login, or reddybook.club apk. These searches usually reflect 
                the same need: users want to find the right platform, understand what it offers, and log in without 
                confusion.
              </p>
              <p className="italic text-gray-600">
                Note: A search like "cricket club near me" can sound local or offline, but Reddy Book Club is 
                presented as an online platform rather than a physical cricket club.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#4a121a] to-[#7a081e] rounded-3xl shadow-xl p-6 sm:p-8 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">📋 Platform Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Account registration and login</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Access through web or mobile-friendly options</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Sports and cricket-focused betting interest</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Casino-style game access where available</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Deposit and withdrawal management</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Support when users need help with access or account issues</li>
            </ul>
            <p className="mt-4 text-white/80 text-sm pt-3 border-t border-white/20">
              That combination is why Reddy Book Club gets attention from both first-time users and more experienced bettors.
            </p>
          </div>
        </div>

        {/* How Reddy Book Club Works */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-8 text-center">How Reddy Book Club Works</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            For most users, the journey is simple: get access, log in, verify details if needed, add funds, 
            and use the platform features that are available to your account.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#a60a27]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#a60a27]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#4a121a] mb-3">Account Setup & Access</h3>
              <p className="text-gray-600 text-sm">
                Get an account by clicking Register or Get Cricket ID. Login details are provided to enter the platform.
              </p>
              <p className="text-xs text-gray-400 mt-3">🔍 Searches: reddy book login, reddy anna login</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#a60a27]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#a60a27]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#4a121a] mb-3">Web & APK Access</h3>
              <p className="text-gray-600 text-sm">
                Browser access via website, or download APK for Android app-like experience from trusted sources.
              </p>
              <p className="text-xs text-gray-400 mt-3">📱 Searches: reddy book club apk, reddybook.club apk</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#a60a27]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#a60a27]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#4a121a] mb-3">After Login</h3>
              <p className="text-gray-600 text-sm">
                View sports sections, check balance, manage deposits/withdrawals, access cricket markets, contact support.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="text-gray-700 text-center">
              ⚡ For new users, simple flow matters more than flashy promises. A platform feels easier to trust 
              when the basics work well: clear menus, fast loading, understandable account steps, and fewer surprises 
              during deposits or withdrawals.
            </p>
          </div>
        </div>

        {/* Banner Image 2 - No content overlay */}
        <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Privacy Policy Banner 2.webp"
            alt="Reddy Book Club Platform"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        {/* What Users Can Expect */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-4">What Users Can Expect From the Platform</h2>
          <p className="text-gray-600 mb-8">
            An About Us page should explain not just what a site is, but what the actual experience feels like. 
            Reddy Book Club is best understood as a convenience-first platform built around quick access, cricket-led 
            interest, flexible login options, and easier account handling.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <div className="text-4xl mb-3">🏏</div>
              <h3 className="text-lg font-bold text-[#4a121a] mb-2">Cricket-First Mindset</h3>
              <p className="text-gray-600 text-sm">
                For Indian users, cricket is the main entry point. Many start looking for a cricket website, 
                cricket ID, or direct access to match markets.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="text-lg font-bold text-[#4a121a] mb-2">Useful for Beginners</h3>
              <p className="text-gray-600 text-sm">
                Easy login & registration, clear dashboard, and basic understanding of deposits, withdrawals, and support.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-[#4a121a] mb-2">Speed for Regular Users</h3>
              <p className="text-gray-600 text-sm">
                More experienced users care about speed, stability, and easy movement through the site without friction.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-700 text-sm">
              🔍 <span className="font-semibold">Multiple ways to find the brand:</span> Users search by alternate names, typos, 
              or adjacent brand phrases like reddybook, reddyanna, www.reddy book.com, book777, or reddy kings login. 
              Always make sure you are on the correct website before entering personal details.
            </p>
          </div>
        </div>

        {/* Payments, Verification, and Practical Expectations */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d1a24] rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Payments, Verification, and Practical Expectations</h2>
          <p className="text-white/80 mb-8">
            One of the biggest reasons users read an About Us page is trust. They want to know what happens beyond the homepage pitch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#a60a27] mb-3">💰 Deposits and Withdrawals</h3>
              <p className="text-white/80 text-sm mb-3">
                Deposit and withdrawal experience often shapes whether a user stays with a platform.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Account verification before certain withdrawals</li>
                <li>• Matching payment details where required</li>
                <li>• Occasional manual review for unusual activity</li>
                <li>• Time differences depending on payment method or request size</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#a60a27] mb-3">🆔 KYC and Account Checks</h3>
              <p className="text-white/80 text-sm mb-3">
                Identity or account verification may be required for accessing features, changing details, or requesting withdrawals.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Basic profile checks</li>
                <li>• Age confirmation (18+ only)</li>
                <li>• Payment verification</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/70 text-sm">
              📍 <span className="font-semibold">Age and location expectations:</span> Reddy Book Club should only be used by adults 
              who meet the age requirement in their location (18+). Availability can depend on jurisdiction, and users are responsible 
              for following local rules.
            </p>
          </div>
        </div>

        {/* Safety, Transparency, and Responsible Gaming */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-4">Our Approach to Safety, Transparency, and Responsible Gaming</h2>
          <p className="text-gray-600 mb-6">
            A strong About Us page should not read like a sales script. It should help users make informed choices.
            At Reddy Book Club, we explain the platform clearly, avoid unrealistic promises, and encourage responsible use.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-[#4a121a] mb-3">⚠️ Being Honest About</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Betting and casino play involve risk</li>
                <li>• No platform should imply guaranteed wins</li>
                <li>• Bonuses or offers may come with terms and conditions</li>
                <li>• Payment methods can have limits, review checks, or verification steps</li>
                <li>• Users should never share login details with anyone else</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-[#4a121a] mb-3">🎯 Responsible Gaming</h3>
              <p className="text-sm text-gray-700 mb-3">
                Responsible gaming is part of trust, not an optional extra. Users should:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Set their own limits</li>
                <li>• Avoid chasing losses</li>
                <li>• Take breaks when needed</li>
                <li>• Stop if betting becomes stressful</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              📱 <span className="font-semibold">App & Download Safety:</span> If you are using the Reddy Book Club APK, 
              update it carefully, use verified sources, and avoid unofficial download pages. In a market full of lookalike 
              terms and cloned pages, caution protects your account.
            </p>
          </div>
        </div>

        {/* Why Users Choose */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-amber-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-4 text-center">Why Users Choose to Learn About Reddy Book Club First</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            The best users are informed users. Before signing up, logging in, or downloading anything, people want answers to simple questions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">❓</div>
              <p className="text-sm font-medium text-gray-800">What is the platform?</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🔐</div>
              <p className="text-sm font-medium text-gray-800">How does access work?</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm font-medium text-gray-800">Can I use it on mobile?</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">💳</div>
              <p className="text-sm font-medium text-gray-800">Payment & verification?</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🆘</div>
              <p className="text-sm font-medium text-gray-800">Where to get help?</p>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-6 text-sm">
            This page exists to make the platform easier to understand, help new users feel less lost, 
            and guide people toward the right next step.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a121a] mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-[#4a121a] text-lg mb-2">What is Reddy Book Club?</h3>
              <p className="text-gray-600">Reddy Book Club is an online platform focused on sports betting and gaming access through web and mobile-friendly options. Users often visit to understand the platform, create an account, or log in.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-[#4a121a] text-lg mb-2">Is Reddy Book Club the same as Reddybook Club or Reddy Anna Book Club?</h3>
              <p className="text-gray-600">In search behavior, users often use these names interchangeably. Variations like reddybook club, reddy anna club, and reddy anna book club usually reflect the same brand search intent.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-[#4a121a] text-lg mb-2">Can I use Reddy Book Club without downloading the APK?</h3>
              <p className="text-gray-600">Yes. Users generally look for both browser access and APK access. If you prefer not to install anything, web login is usually the simpler option.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-[#4a121a] text-lg mb-2">Is the Reddy Book Club APK safe to install?</h3>
              <p className="text-gray-600">It can be, but only if downloaded from a trusted source. Users should avoid random links, copied domains, or unverified files and should keep their device security settings in mind.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-[#4a121a] text-lg mb-2">What should beginners know before using Reddy Book Club?</h3>
              <p className="text-gray-600">Beginners should check the age requirement, confirm local availability, understand deposits and withdrawals, expect possible KYC checks, and use the platform responsibly.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-[#4a121a] to-[#a60a27] rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Conclusion</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-6">
            Reddy Book Club is best understood as a digital platform built around simple access, cricket-led user interest, 
            mobile convenience, and account usability. Whether users search for reddy book club, reddybook, reddyanna, 
            or APK and login-related terms, the real goal is the same: clear access, smoother account management, 
            and a better understanding of how the platform works.
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            A good next step is to move from this page to the section that matches your need most closely.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-[#a60a27] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Register Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Login
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Customer Care
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Responsible Gaming
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
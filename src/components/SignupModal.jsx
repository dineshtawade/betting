import React from 'react';

export default function SignupModal({ isOpen, onClose, switchToLogin }) {
  if (!isOpen) return null;

  // Premium, reliable Unsplash image assets to enrich the layout safely
  const UI_IMAGES = {
    cricketFeature: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    mobilePlatform: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    responsibleGaming: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      
      {/* Expanded Dual-Pane Premium Modal Frame Container */}
      <div className="w-full max-w-6xl bg-[#1e1e1e] border border-neutral-800 rounded-2xl shadow-2xl relative my-4 max-h-[92vh] flex flex-col lg:flex-row overflow-hidden">
        
        {/* Absolute Floating Close Window Action Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white text-xl font-bold transition-colors z-40 bg-[#2a2a2a]/60 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 shadow-md"
        >
          ✕
        </button>

        {/* Column 1: Left Fixed Interactive Registration Form Pane */}
        <div className="w-full lg:w-[420px] bg-[#222222] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 shrink-0 z-10">
          <div>
            {/* Logo Brand Header Block */}
            <div className="flex flex-col items-center justify-center mb-8 mt-2">
              <span className="text-[#cca04c] text-3xl font-light tracking-wide font-serif leading-none">
                RE<span className="font-semibold">DDY</span>
              </span>
              <div className="flex items-center text-[9px] text-[#cca04c] font-medium tracking-[0.2em] mt-1">
                <span className="border-t border-[#cca04c] w-3 mr-1"></span>
                BOOK.CLUB
                <span className="border-t border-[#cca04c] w-3 ml-1"></span>
              </div>
            </div>

            {/* Core Sign-Up Submission Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              
              {/* Username Input */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1 pl-0.5">Select Username</label>
                <input
                  type="text"
                  placeholder="Username 4 To 15 Alphanumeric"
                  className="w-full bg-[#2a2a2a] border border-neutral-700 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-[#a60a27] transition-colors"
                />
              </div>

              {/* Mobile Input Group */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1 pl-0.5">Mobile Registry Number</label>
                <div className="flex border border-neutral-700 rounded bg-[#2a2a2a] overflow-hidden focus-within:border-[#a60a27] transition-colors">
                  <div className="flex items-center gap-1 bg-[#161616] px-3 border-r border-neutral-700 text-sm text-gray-300 select-none">
                    <span className="text-base">🇮🇳</span>
                    <span>+91</span>
                    <span className="text-[10px] text-neutral-500 ml-1">▼</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-200 placeholder-neutral-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1 pl-0.5">Account Passkey</label>
                <input
                  type="password"
                  placeholder="Password 6 To 20 Alphanumeric"
                  className="w-full bg-[#2a2a2a] border border-neutral-700 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-[#a60a27] transition-colors"
                />
                <p className="text-[10px] text-red-400 font-medium mt-1 leading-tight">
                  (Must be contained alphanumeric and more than 6 letters)
                </p>
              </div>

              {/* Referral Code */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1 pl-0.5">Referral Token Code</label>
                <input
                  type="text"
                  placeholder="Referral Code (Optional)"
                  className="w-full bg-[#2a2a2a] border border-neutral-700 rounded px-3 py-2.5 text-sm text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-[#a60a27] transition-colors"
                />
              </div>

              {/* SMS Notice Disclaimer */}
              <p className="text-[11px] text-red-400 font-medium leading-tight pt-1">
                By continuing you will receive a one-time verification code to your phone number by SMS.
              </p>

              {/* Submission Action Button */}
              <button className="w-full bg-[#a60a27] hover:bg-[#8a0820] text-white font-bold text-sm py-3 rounded tracking-wider shadow-lg transition-colors mt-2 uppercase">
                GET OTP ON WHATSAPP
              </button>
            </form>
          </div>

          {/* Redirection Link footer */}
          <div className="text-center text-sm mt-8 pt-4 border-t border-neutral-800 text-neutral-400 font-medium">
            Already have account?{' '}
            <button 
              onClick={switchToLogin}
              className="text-red-400 font-bold underline hover:text-red-300 ml-1"
            >
              Log In
            </button>
          </div>
        </div>

        {/* Column 2: Right Scrollable Editorial Guide & Educational Content Matrix */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto text-neutral-300 space-y-8 bg-[#1a1a1a] text-sm leading-relaxed font-light z-20 scrollbar-thin">
          
          {/* Section 1: Main Introduction */}
          <section className="space-y-3">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#cca04c] bg-[#cca04c]/10 px-3 py-1 rounded-full inline-block">New Account Registration Terminal</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
              Reddy Book Registration: Get Your Reddy Book Club Cricket ID
            </h2>
            <div className="w-16 h-px bg-[#cca04c]"></div>
            
            <p className="text-neutral-400 font-normal text-sm sm:text-base">
              Ready to create your Reddy Book Club account? This Reddy Book registration page helps new users request a cricket ID, understand how account access works, and get ready for sports and casino betting features where available and legally permitted.
            </p>
            <p>
              If you are new to Reddy Book Club, the process is simple. You can click the **Register button** or the **Get Cricket ID button** to start your account request. Some users may also be able to fill out a registration form with basic details. After that, account access details may be shared through the official support or account team.
            </p>
            <p>
              This page explains how to register, what details you may need, how to use your new cricket ID, what to check before depositing, and how to keep your account safe. It is written for both beginners who are getting their first cricket ID and experienced bettors who want a smooth account setup.
            </p>
            <p className="text-xs text-neutral-400 bg-[#222] p-3 rounded border-l-2 border-neutral-600">
              Reddy Book Club should only be used by adults who meet the required age rules in their location. Availability may depend on local laws, platform rules, and account eligibility.
            </p>
          </section>

          {/* Media Element 1 */}
          <div className="w-full h-48 sm:h-60 rounded-xl overflow-hidden shadow-lg border border-neutral-800 relative">
            <img 
              src={UI_IMAGES.cricketFeature} 
              alt="Live Cricket Exchange Field Layout" 
              className="w-full h-full object-cover opacity-25 grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-neutral-400 tracking-wider uppercase">
              Sports Line Access & Live Betting Settlement Interface
            </div>
          </div>

          {/* Section 2: Path Selection Matrix */}
          <section className="bg-[#222] p-4 sm:p-5 rounded-xl border border-neutral-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#cca04c] flex items-center gap-1.5">
              <span>Choose your path:</span> Register Button vs Get Cricket ID Button
            </h3>
            <p className="text-xs text-neutral-400">Some users wonder whether they should click Register or Get Cricket ID. Both options can lead to account setup, but the wording is slightly different:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="space-y-1 p-3 bg-[#1a1a1a] rounded border border-neutral-800">
                <span className="font-bold text-white block uppercase tracking-wide text-[11px] text-[#cca04c]">Register button</span>
                <p className="text-neutral-400 font-light">Usually for users who want to create a new account by submitting their details through the registration process.</p>
              </div>
              <div className="space-y-1 p-3 bg-[#1a1a1a] rounded border border-neutral-800">
                <span className="font-bold text-white block uppercase tracking-wide text-[11px] text-[#cca04c]">Get Cricket ID button</span>
                <p className="text-neutral-400 font-light">More direct — often used by users who already know they want account access for cricket, sports, or casino gaming sections.</p>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 leading-tight pt-1.5 border-t border-neutral-800/60 italic">
              For beginners, either button is fine if it appears on the official Reddy Book Club website. The most important thing is to use the correct page and wait for proper account confirmation. Do not trust anyone who says you must pay extra just to “unlock” a special winning ID. A cricket ID gives account access. It does not guarantee profit, winning bets, or better results.
            </p>
          </section>

          {/* Section 3: Overview Definitions */}
          <section className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Overview: What Is Reddy Book Club Registration?</h3>
            <p>
              Reddy Book Club registration is the process of requesting a new account or cricket ID from the website. Once your account is created, you can use the login details provided to access your Reddy Book Club dashboard.
            </p>
            <p>
              Many users search for terms such as **reddy book club, reddybook club, reddy anna club, reddy anna book club, reddyanna, or reddy book login** when they are trying to find the right access page. For this page, the goal is simple: help new users get started with a new Reddy Book Club cricket ID.
            </p>
            <p>
              A cricket ID is your account access credential. It may allow you to enter sports sections, cricket markets, casino games, live betting-style areas, deposit options, withdrawal support, and customer care tools, depending on what is available for your account.
            </p>
            <div className="p-3.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs space-y-1.5 text-neutral-400">
              <span className="font-bold text-red-400 block uppercase tracking-wider text-[10px]">📌 Important Verification Note:</span>
              <p>This is not the same as searching for a physical cricket club near me. Reddy Book Club is an online cricket website and gaming access platform. You are not joining a local sports ground or cricket academy. You are requesting digital account access.</p>
            </div>
          </section>

          {/* Section 4: Operational Step Blueprint */}
          <section className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Step guide: How to Register on Reddy Book Club</h3>
            <p className="text-xs sm:text-sm text-neutral-400">The registration process should be easy to follow. Use the official website only and avoid random links shared in public groups or comments.</p>
            
            <div className="space-y-4 pl-1">
              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-[#a60a27] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-white">Step 1: Click the Register Button</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">To begin, click the Register button on the Reddy Book Club website. This starts the account request process. If you see a Get Cricket ID button instead, you can use that as well. Both buttons are designed to help new users request account access.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-[#a60a27] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-white">Step 2: Fill in the Required Details</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">You may be asked to provide basic information such as your name, mobile number, preferred username, or contact details. Enter your information carefully so the support team can process your request correctly. Do not submit fake details. Wrong information may delay your account setup or create problems later when you need support, payment help, or account recovery.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-[#a60a27] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-white">Step 3: Confirm Eligibility</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Before your account is created, make sure you are legally allowed to use gaming or betting-related services in your location. You should also meet the required age limit, which may be **18+** or **21+** depending on the rules that apply to you. Do not register if you are underage, using someone else’s identity, or accessing from a restricted location.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-[#a60a27] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-bold text-white">Step 4: Receive Your Cricket ID</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Once your registration request is accepted, you may receive a username, password, login link, or account access details. Keep these details private. Your cricket ID is important. Do not share it with friends, public groups, or anyone claiming they can place bets for you.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-[#a60a27] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                <div>
                  <h4 className="font-bold text-white">Step 5: Login and Check Your Account</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">After receiving your details, go to the Reddy Book login page and sign in. Check your dashboard, account details, balance section, support options, and available features before adding funds or using any market.</p>
                </div>
              </div>
            </div>

            {/* Quick metrics chip layout grids */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold uppercase tracking-wider pt-2">
              <div className="p-2.5 bg-[#222] border border-neutral-800 rounded">5 Steps</div>
              <div className="p-2.5 bg-[#222] border border-neutral-800 rounded">~ 3 Min Setup</div>
              <div className="p-2.5 bg-[#222] border border-neutral-800 rounded text-red-400">18+ Eligible</div>
              <div className="p-2.5 bg-[#222] border border-neutral-800 rounded text-[#cca04c]">Secure Server</div>
            </div>

            {/* Before You Start Floating Alert */}
            <div className="bg-[#242424] border border-neutral-800 rounded-xl p-4 text-xs space-y-2 mt-4">
              <span className="font-bold tracking-wider text-yellow-400 uppercase text-[10px] block">📋 Pre-Registration Checklist:</span>
              <ul className="list-disc list-inside space-y-1 text-neutral-400">
                <li>Open only the official Reddy Book Club site — no copied links.</li>
                <li>Keep your real name, age and contact number ready.</li>
                <li>Use a private device on a secure internet connection.</li>
                <li>Never share OTPs, UPI PINs or bank passwords with anyone.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Profile Parameters Requirements */}
          <section className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Details: What Details May Be Needed During Registration?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Reddy Book Club registration is usually straightforward, but the exact details may depend on the account process shown on the website. You may need to provide: Name or preferred username, Mobile number or contact method, Basic account request details, Confirmation that you meet age and eligibility requirements, and Payment details later, if you choose to deposit.
            </p>
            <p className="text-xs font-semibold text-red-400 bg-red-950/10 p-3 rounded border border-red-900/30">
              🔒 Security Note: You should never be asked for private banking passwords, UPI PINs, OTPs, or full card security details. If someone asks for these, stop immediately and contact official support. A proper registration process should help you create access, not expose your personal or financial information.
            </p>
          </section>

          {/* Section 6: Mobile and Native APK Environment Warnings */}
          <section className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Mobile: Reddy Book Club Registration on Mobile</h3>
            <p>
              Most users in India prefer mobile access because cricket matches, live markets, and casino games are easier to follow on a phone. The Reddy Book Club register page should work smoothly on mobile browsers. Open the official website on your mobile browser and tap Register or Get Cricket ID, fill in your details carefully, and run transactions over a secure connection. Avoid public Wi-Fi access pools.
            </p>

            {/* Media Element 2 */}
            <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-neutral-800 relative my-3">
              <img 
                src={UI_IMAGES.mobilePlatform} 
                alt="Smartphone Device with Security Layer Background" 
                className="w-full h-full object-cover opacity-20 grayscale brightness-90 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-xs font-medium text-neutral-400 uppercase tracking-wider">
                Mobile Web & Local Client System Architecture
              </div>
            </div>

            <h4 className="font-serif font-bold text-white text-base pt-1">What About the Reddy Book Club APK?</h4>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Some users search for reddy book club apk or reddybook.club apk when looking for mobile access. Be careful with APK files. Only use APK access if it is provided through an official and verified Reddy Book Club source. **Do not download files** from random Telegram groups, copied links, unknown websites, or pages using similar names like <span className="font-mono text-[11px] text-red-400">raddybook, book777</span>, or unrelated login terms. A fake APK can steal login details, payment information, or personal data. For most users, the mobile browser is safer and simpler than installing an unverified app file.
            </p>
          </section>

          {/* Section 7: System Post-Registration Actions */}
          <section className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">After registration: How to Use Your New Cricket ID</h3>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Once your Reddy Book Club account is ready, your cricket ID becomes your main access point. You can use it to log in and explore available sections:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg space-y-1">
                <span className="font-bold text-white block">Cricket & Sports</span>
                <p className="text-neutral-400 font-light leading-snug">Find cricket markets, match options, and live match sections. Beginners should learn how odds, stakes, and settlement rules work before placing any real-money activity.</p>
              </div>
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg space-y-1">
                <span className="font-bold text-white block">Casino Modules</span>
                <p className="text-neutral-400 font-light leading-snug">Includes card games, table games, slots, or live casino options where available. Always read the rules of each game before playing. Casino games involve financial risk.</p>
              </div>
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg space-y-1">
                <span className="font-bold text-white block">Dashboard Tools</span>
                <p className="text-neutral-400 font-light leading-snug">Your account dashboard displays balance updates, deposit configurations, withdrawal requests processing options, and customer care access coordinates.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Financial Architecture Flow & Security Protocols */}
          <section className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Payments & Safety: Deposits and Withdrawals After Registration</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Registration gives you access, but deposits and withdrawals should be handled with extra care. Before adding money, check the minimum deposit amount, available payment methods, expected processing time, and support instructions. Payment options may include UPI, bank transfer, net banking, or digital wallets. Keep clean track records of all payment activity—save transaction IDs, screenshots, and support messages.
            </p>
            <p className="text-neutral-400 text-xs">
              Never send money to unknown personal accounts without verification. If payment instructions look different from what you expected, ask official support before proceeding. Before withdrawing, confirm whether your account details are correct to avoid processing delays.
            </p>
            
            <div className="bg-[#222] p-4 rounded-xl border border-neutral-800 space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wide text-[11px] text-[#cca04c]">How to Stay Safe When Creating an Account:</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                Take your time and follow basic account safety rules. Use only the official Reddy Book Club website. Some users search for <span className="italic font-normal">www.reddy book.com, reddy anna login, reddy anna book login, reddy kings login</span>, but clone pages can look convincing. Create a password that is not used anywhere else. Avoid saving credentials on shared public computers. Be careful with messages promising fixed matches, guaranteed winnings, special accounts, or secret cricket tips. No genuine platform can promise a winning outcome.
              </p>
            </div>
          </section>

          {/* Media Element 3 */}
          <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-neutral-800 relative my-2">
            <img 
              src={UI_IMAGES.responsibleGaming} 
              alt="Analytical Dashboard Metrics Background" 
              className="w-full h-full object-cover opacity-20 grayscale brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Responsible Risk Control & Limitation Setting
            </div>
          </div>

          {/* Section 9: Responsible Use Guidelines */}
          <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-yellow-500">📋 Responsible Gaming Before You Start</h4>
            <p className="text-neutral-400 font-light leading-relaxed">
              Reddy Book Club registration should be treated as access to entertainment, not a way to earn guaranteed money. Sports betting and casino games carry financial risk. Set a clear budget before you play. Never use money meant for rent, bills, school fees, family needs, or debt repayment. Do not chase losses. Take breaks, especially during live matches or long casino sessions. Fast decisions can lead to poor choices. If gaming starts affecting your sleep, work, relationships, studies, or finances, pause immediately and seek help from someone you trust. Responsible gaming is not only for new users. Even expert bettors need limits and discipline.
            </p>
          </section>

          {/* Section 10: Troubleshooting Onboarding Breaks */}
          <section className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Troubleshoot: Common Registration Problems and Simple Fixes</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg">
                <span className="font-bold text-white block mb-0.5">The Register Button Is Not Working</span>
                <p className="text-neutral-400 font-light">Refresh the page, check your internet connection, or try another browser. If the issue continues, use the Get Cricket ID button or contact customer care.</p>
              </div>
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg">
                <span className="font-bold text-white block mb-0.5">The Form Is Not Submitting</span>
                <p className="text-neutral-400 font-light">Check whether all required fields are complete. Make sure your mobile number or contact details are entered correctly. Remove extra spaces from text fields.</p>
              </div>
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg">
                <span className="font-bold text-white block mb-0.5">I Did Not Receive My Cricket ID</span>
                <p className="text-neutral-400 font-light">Account setup may not always be instant. Check your messages and make sure your contact details were correct. If you still have no update, contact official support.</p>
              </div>
              <div className="p-3 bg-[#222] border border-neutral-800 rounded-lg">
                <span className="font-bold text-white block mb-0.5">I Entered the Wrong Details</span>
                <p className="text-neutral-400 font-light">Reach out to customer care as soon as possible. Do not submit multiple forms with different information, as this may create confusion.</p>
              </div>
            </div>
            
            <p className="p-3 bg-red-950/20 rounded border border-red-900/30 text-xs font-semibold text-red-400 pl-4">
              ▪ Existing Profile Check: Do not register again if you already have a cricket ID. Use the Login button instead. If you forgot your password, contact support for recovery help.
            </p>
          </section>

          {/* Section 11: Summary Conclusion */}
          <section className="space-y-2 border-t border-neutral-800 pt-5 text-xs text-neutral-400 font-normal">
            <h4 className="font-serif font-bold text-white text-sm">Why Register with Reddy Book Club?</h4>
            <p className="font-light">
              Users choose Reddy Book Club because they want a simple way to request a cricket ID and access sports, cricket, casino, and live gaming sections from one account area. The main benefit is convenience. Instead of searching across different pages, users can use one account to reach available features after login. For beginners, the registration process is designed to be easy. For experienced users, the platform may provide access to a wider range of markets and gaming options. Still, the smartest users register carefully, check the rules, confirm account details, and avoid unsafe links. Click Register or Get Cricket ID only when you are ready, eligible, and using the official Reddy Book Club website.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
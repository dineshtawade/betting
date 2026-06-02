// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import api from "@/lib/axios";

// Login API function
const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      toast.success("Login successful! Redirecting to dashboard...");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    },
  });

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    loginMutation.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const bettingImages = [
    { src: "/Login P1 IMAGE 1.webp", alt: "Casino" },
    { src: "/Login P2 IMAGE2.webp", alt: "Sports Betting" },
    { src: "/Login P4 IMAGE 3.webp", alt: "Tennis" }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4f7f6] py-12 px-4 sm:px-6 font-sans text-gray-850">
      
      {/* 1. Main Form Block Layout Section */}
      <div className="w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px] mx-auto rounded-2xl">
        
        {/* Left Side: Interactive Session Form */}
        <div className="flex-1 bg-[#004b93] p-6 sm:p-10 flex flex-col justify-center text-white">
          <button
            onClick={handleBack}
            className="mb-6 text-xs text-gray-200 hover:text-white underline w-fit tracking-wide transition-all uppercase"
          >
            &larr; Return Back
          </button>
          
          <div className="mb-6">
            <h2 className="text-3xl font-black uppercase mb-1 tracking-tight">Welcome Back</h2>
            <p className="text-emerald-300 text-xs font-medium uppercase tracking-wider">Access Your Reddy Book Club Account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-blue-200 mb-1">User Identification Account ID</label>
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Username or Cricket ID" 
                className="w-full bg-[#003870] p-3.5 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white border border-transparent focus:border-white/20 font-medium transition-all"
                required
              />
            </div>
            
            <div className="relative">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-blue-200 mb-1">Secure Account Passkey</label>
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password" 
                className="w-full bg-[#003870] p-3.5 rounded text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white border border-transparent focus:border-white/20 font-medium pr-12 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-[38px] text-gray-300 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            
            <button 
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-white text-[#004b93] font-black py-3.5 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider uppercase text-sm mt-4 shadow-md"
            >
              {loginMutation.isPending ? "Authenticating Session..." : "Secure Log In"}
            </button>
          </form>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-blue-400/20 pt-4 text-xs font-medium mt-6">
            <button 
              onClick={() => navigate('/forgot-password')} 
              className="underline hover:text-gray-200 transition text-blue-200"
            >
              Forgot Password?
            </button>
            
            <button 
              onClick={() => navigate('/register')} 
              className="underline hover:text-gray-200 transition text-emerald-300"
            >
              Don't have an account? Register here
            </button>
          </div>
        </div>

        {/* Right Side: Visual Info Panel */}
        <div className="flex-1 bg-gradient-to-br from-[#0c4a34] to-[#062c1e] p-6 sm:p-10 flex flex-col justify-center text-white overflow-y-auto relative">
          <img
            src="/Login Banner.webp"
            alt="Reddy Book login banner"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a34]/95 to-[#062c1e]/95" />
          <div className="relative z-10">
          
          {/* Internal Game Matrix Block */}
          <div className="mb-6">
            <h3 className="text-xs uppercase font-bold tracking-widest text-emerald-300 mb-3">Popular Betting Fields</h3>
            <div className="grid grid-cols-3 gap-3">
              {bettingImages.map((img, idx) => (
                <div key={idx} className="text-center group">
                  <div className="overflow-hidden rounded-lg shadow-md border border-emerald-700/40">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-300 grayscale contrast-125 brightness-90"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] font-bold tracking-wide uppercase mt-1 text-emerald-200/90">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight mb-1">
              REDDYBOOK <span className="text-yellow-300">LOGIN</span>
            </h2>
            <div className="w-12 h-0.5 bg-yellow-300 mb-4"></div>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed font-light">
              Fast, Secure & Reliable – The reddybook login procedure is engineered to clear within seconds. Enter your credential variables on the left panel to immediately gain dashboard environment routing without technical blocks.
            </p>
          </div>

          <div className="mb-5 space-y-2 text-xs">
            <h3 className="font-bold text-yellow-300 uppercase tracking-widest text-[10px]">Verification Checklist</h3>
            <ul className="space-y-1.5 font-medium text-emerald-100/90">
              <li className="flex items-center gap-2">▪ Type credentials manually — copy-paste can introduce blank spacing hooks.</li>
              <li className="flex items-center gap-2">▪ Confirm your Cricket ID matches capitalization casing parameters.</li>
              <li className="flex items-center gap-2">▪ Always tap out session logout variables when leaving terminal windows.</li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-2 text-[10px]">
              🔒 Session Isolation Protocol
            </h4>
            <p className="text-emerald-100/80 leading-relaxed font-light">
              Our framework is fully streamlined to execute live calculations across checking account balance tallies, adding liquidity margins, manual withdrawal parameters, and cross-feature routing. Never leak system variables to third party entities.
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* 2. Secondary Editorial Content Area Container */}
      <main className="w-full max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200/60 space-y-10 text-gray-700 text-sm md:text-base leading-relaxed font-light">
        
        {/* Login P6 IMAGE 4 - After main container */}
        <div className="mb-4 overflow-hidden rounded-2xl">
          <img 
            src="/Login P6 IMAGE 4.webp" 
            alt="Login Overview"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Document Introductory Block */}
        <section className="space-y-4">
          <h1 className="text-2xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight leading-tight">
            Reddy Book Login: Access Your Reddy Book Club Cricket ID Safely
          </h1>
          <div className="w-20 h-0.5 bg-[#004b93]"></div>
          <p className="text-gray-600 font-normal">
            Looking for the Reddy Book login page? You are in the right place. This page is for existing Reddy Book Club users who already have a valid cricket ID, username, or account details and want to sign in without confusion.
          </p>
          <p>
            Reddy Book Club is used by players who want one account area for sports, cricket markets, casino games, and live betting-style features where these services are available and legally permitted. The login process is simple, but it is important to use the correct link, enter the right details, and keep your account safe. This guide explains how to log in, what to do if your Reddy Book Club login is not working, how mobile access works, what beginners should know before using a cricket ID, and how to stay careful with account security, payments, and responsible gaming.
          </p>
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded text-xs sm:text-sm text-amber-900 font-medium space-y-1">
            <span className="font-bold uppercase tracking-wider block">⚠️ Important Compliance Eligibility Notice:</span>
            <p>Use Reddy Book Club only if you meet the required age limit and local rules allow access in your location. Never use betting or gaming platforms with borrowed details, fake accounts, or money you cannot afford to lose.</p>
          </div>
        </section>

        {/* Login P8 IMAGE 5 - After introductory block */}
        <div className="my-6 overflow-hidden rounded-2xl">
          <img 
            src="/Login P8 IMAGE 5.webp" 
            alt="Login Security Guide"
            className="w-full h-auto object-cover rounded-2xl border border-gray-100"
            loading="lazy"
          />
        </div>

        {/* Index Utility Block */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 max-w-md">
          <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-3">On This Page Architecture</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#004b93] underline">
            <li><a href="#what-is-login">What is login page</a></li>
            <li><a href="#step-guide">Step-by-step login guide</a></li>
            <li><a href="#mobile-apk">Login on mobile & APK</a></li>
            <li><a href="#troubleshoot">Common login problems</a></li>
            <li><a href="#safety-tips">Account safety tips</a></li>
            <li><a href="#transactions">Deposits & withdrawals</a></li>
          </ul>
        </section>

        {/* Section: Definition block */}
        <section id="what-is-login" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">What Is the Reddy Book Login Page?</h3>
          <p>
            The Reddy Book login page is the account access page for existing users of Reddy Book Club. Once you enter your username and password, you can reach your account dashboard and use the features connected to your cricket ID.
          </p>
          <p>
            For many users, a <span className="font-medium text-gray-900">"cricket ID"</span> is the account credential used to access cricket markets, live sports options, casino-style games, and account tools. Some people search for the same thing using terms like <span className="italic font-normal">reddy book club, reddybook club, reddy anna login, reddy anna book login, or reddy book login</span>. The wording may differ, but the user intent is usually the same: they want a safe and working login route.
          </p>
          <p className="bg-gray-50 p-3 rounded text-xs font-medium text-gray-600 border-l-2 border-gray-400">
            📌 <span className="font-bold">Clarification:</span> This is not a physical cricket club near me page. It is an online account login guide for users who already have Reddy Book Club access.
          </p>
          <div className="space-y-2 pt-2">
            <p className="font-bold text-gray-900 text-sm">Before logging in, check three things:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm">
              <li>You are using the official Reddy Book Club login route provided by the website or support team.</li>
              <li>Your username and password are entered exactly as given.</li>
              <li>You are using a private device and a secure internet connection.</li>
            </ul>
            <p className="text-xs text-red-700 font-semibold pt-1">⚠️ A login page should never ask for your banking password, OTP, UPI PIN, or private financial credentials.</p>
          </div>
        </section>

        {/* Section: Steps */}
        <section id="step-guide" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">How to Login to Your Reddy Book Club Account</h3>
          <p>Logging in should take less than a minute when your details are correct. Follow these steps carefully.</p>
          
          <div className="space-y-4 pl-1 pt-2">
            <div className="flex gap-4 items-start">
              <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Step 1: Open the Reddy Book Club Login Page</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Visit the login section of Reddy Book Club and wait for the page to load fully. Avoid opening random links from unknown Telegram groups, forwarded messages, or social media comments. Users sometimes type names like <span className="font-mono text-xs">www.reddy book.com, raddybook, reddybook club, or reddybook.club apk</span> when searching. These searches can lead to confusing results, so always check that you are on the correct Reddy Book Club website before entering your details.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Step 2: Enter Your Username or Cricket ID</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Type your username, user ID, or cricket ID into the login field. Avoid copying extra spaces before or after the ID, as this can cause a failed login. A Reddy Book Club cricket ID is usually case-sensitive, so enter it exactly as it was shared with you.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Step 3: Enter Your Password</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Add your password carefully. Use the show-password option only when nobody else can see your screen. Do not save your password on shared devices, cyber café computers, office laptops, or a phone that other people use.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Step 4: Click the "Login" Button</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Once the details are correct, click the Login button. You should be redirected to your account dashboard. From there, existing eligible users can access available account sections, check balance information, review markets, and manage account activity where the service is available.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Step 5: Log Out After Use</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">If you are using a browser, remember to log out after every session. This is especially important on shared devices. Logging out reduces the chance of someone else opening your account without permission.</p>
              </div>
            </div>
          </div>

          {/* Tips summary grid */}
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center text-xs font-semibold">
            <div className="p-2 bg-white rounded shadow-xs">Type credentials manually to prevent trailing space hooks.</div>
            <div className="p-2 bg-white rounded shadow-xs">Use show-password toggle only in private bounds.</div>
            <div className="p-2 bg-white rounded shadow-xs">Bookmark the verified login URL endpoint parameters.</div>
            <div className="p-2 bg-white rounded shadow-xs">Always tap log-out explicitly on shared hardware.</div>
          </div>
        </section>

        {/* Login P9.2 IMAGE 6 - After steps section */}
        <div className="my-6 overflow-hidden rounded-2xl">
          <img 
            src="/Login P9.2 IMAGE 6.webp" 
            alt="Login Step Guide"
            className="w-full h-auto object-cover rounded-2xl border border-gray-100"
            loading="lazy"
          />
        </div>

        {/* Section: Distinctions */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">New User or Existing User? Know the Difference</h3>
          <p>The Reddy Book login page is mainly for users who already have account details. If you do not have a cricket ID yet, the login page alone will not create one for you.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-1.5 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <h4 className="font-bold text-[#004b93]">Existing Users Protocol</h4>
              <p className="text-xs sm:text-sm text-gray-600">You are an existing user if you already have an active username, password array, access instructions from verified support, and an open account that has not been blocked or restricted. Simply sign in directly.</p>
            </div>
            
            <div className="space-y-1.5 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <h4 className="font-bold text-[#0c4a34]">New Registration Protocol</h4>
              <p className="text-xs sm:text-sm text-gray-600">New users usually need to use the Register or Get Cricket ID options on the primary platform. Any account setup parameters must be handled only via verified support lines. Never buy IDs from unverified users claiming special win parameters.</p>
            </div>
          </div>
        </section>

        {/* Section: Mobile Access */}
        <section id="mobile-apk" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Reddy Book Club Login on Mobile</h3>
          <p>Many users prefer mobile access because cricket and live sports move quickly. A mobile-friendly login page helps users check their account without needing a desktop. You can usually access Reddy Book Club through a mobile browser. Open the login page, enter your cricket ID and password, and click the Login button.</p>
          
          <div className="space-y-3 pl-1">
            <p className="font-bold text-gray-900 text-sm">Mobile browser checklist:</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-xs sm:text-sm text-gray-600">
              <li>Use your mobile browser and the official Reddy Book Club login route — not a copied link from a chat group.</li>
              <li>Avoid auto-fill configuration saves on shared mobile hardware.</li>
              <li>Ensure you clear old caching logs and hold a stable internet data packet signal.</li>
            </ul>
          </div>

          <h4 className="font-serif font-bold text-gray-900 text-lg pt-2">What About the Reddy Book Club APK?</h4>
          <p>Some users search for <span className="italic">reddy book club apk, reddybook.club apk, or Reddy Book app access</span>. Be careful with APK files. Unlike apps downloaded from official app stores, APK files can carry extra risk if they come from unknown sources.</p>
          
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs text-red-900">
            <span className="font-bold uppercase tracking-wider block">⚠️ APK Pre-installation Security Protocol:</span>
            <p>Check that files come explicitly from a verified Reddy Book Club source. Avoid files shared in random chat loops or comment sections. Do not install an APK package that requests unnecessary core device permission access parameters. Delete any app execution framework that behaves strangely or redirects browser windows to unknown pages. For most users, mobile browser login is simpler and safer than installing unverified files.</p>
          </div>
        </section>

        {/* Section: Troubleshooting */}
        <section id="troubleshoot" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Common Reddy Book Login Problems and Fixes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-3 border border-gray-200 rounded">
              <span className="font-bold text-gray-900 block mb-1">Wrong Details Error</span>
              Recheck for typos, case-sensitivity bounds, and hidden trailing space inputs.
            </div>
            <div className="p-3 border border-gray-200 rounded">
              <span className="font-bold text-gray-900 block mb-1">Page Fails to Load</span>
              Refresh the window, clear local browser cache parameters, or swap network routing routers.
            </div>
            <div className="p-3 border border-gray-200 rounded">
              <span className="font-bold text-gray-900 block mb-1">Account Locked</span>
              Wait briefly for cool-down timers to refresh, or reach official customer care channels.
            </div>
            <div className="p-3 border border-gray-200 rounded">
              <span className="font-bold text-gray-900 block mb-1">Forgot Password</span>
              Use the official password recovery pipeline provided inside the verified dashboard UI.
            </div>
            <div className="p-3 border border-gray-200 rounded">
              <span className="font-bold text-gray-900 block mb-1">Incorrect Link</span>
              Ensure you do not use old bookmark strings; use the latest login buttons via the official root site.
            </div>
          </div>
        </section>

        {/* Section: Safety Alerts */}
        <section id="safety-tips" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Account Safety Tips Before You Login</h3>
          <p>Your Reddy Book Club account should be treated like any other account that contains personal or financial activity. A few simple habits can prevent most problems.</p>
          <p>Use a strong password that is not used on other websites. Do not share your login with friends, agents, groups, or anyone claiming they can "manage" your account. No one should ask for your password to help you win.</p>
          <p>Be careful with similar names. Searches such as <span className="font-medium text-gray-900">reddy anna club, reddy anna book club, reddyanna, book777, reddy kings login, or reddy anna book login</span> may point to different websites, clone pages, or unrelated brands. Always confirm that you are logging into the correct Reddy Book Club account.</p>
          
          <div className="p-5 bg-red-950 text-white rounded-xl space-y-3 shadow-md border-b-4 border-red-700">
            <h4 className="font-bold text-xs uppercase tracking-widest text-red-400">🚨 CRITICAL SECURITY WARNING - NEVER SHARE THE FOLLOWING:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-2 bg-black/20 rounded">▪ OTP Session Tokens</div>
              <div className="p-2 bg-black/20 rounded">▪ UPI Secure PINs</div>
              <div className="p-2 bg-black/20 rounded">▪ Bank Passwords</div>
              <div className="p-2 bg-black/20 rounded">▪ Card Detail Hashes</div>
              <div className="p-2 bg-black/20 rounded">▪ Wallet Passwords</div>
              <div className="p-2 bg-black/20 rounded">▪ Full Account Layout Screens</div>
              <div className="p-2 bg-black/20 rounded">▪ Login Details in Public Chats</div>
            </div>
            <p className="text-xs text-gray-300 font-light pt-1 leading-normal">
              If someone contacts you with promises like fixed matches, sure wins, guaranteed profit, or secret cricket tips, treat it as a warning sign. Sports and casino gaming involve risk, and no genuine support team should promise guaranteed results.
            </p>
          </div>
        </section>

        {/* Section: Capabilities */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">What Can You Access After Login?</h3>
          <p>After signing in, eligible users may see account sections related to sports, cricket, casino games, live markets, account balance, deposits, withdrawals, and support, depending on what is available in their location and account type.</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">Cricket and Sports Sections</h4>
            <p className="text-gray-600 text-xs sm:text-sm">After login, users may look for match markets, live score-based options, pre-match sections, or event-specific markets. Beginners should learn how odds, stakes, and bet settlement work before placing any real-money activity. Expert bettors should still check limits, rules, and market status before every action.</p>
            
            <h4 className="font-bold text-gray-900 text-base pt-1">Casino and Game Sections</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Some users may access casino-style categories such as card games, slots, live casino, or table games where available. Read game rules before playing. Casino games are chance-based or mixed-risk activities, and outcomes cannot be controlled by strategy alone.</p>
          </div>
        </section>

        {/* Section: Transactions */}
        <section id="transactions" className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Deposits, Withdrawals, and Verification</h3>
          <p>Login is only the first step. Any deposit or withdrawal activity should be handled carefully. Before adding funds, check the minimum amount, accepted payment method, expected processing time, and whether any verification is required. Payment options may vary across Net Banking, UPI protocols, digital wallets, and credit/debit cards depending on account setup and support instructions.</p>
          
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-bold text-gray-900">Common payment-related checks include:</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Confirm the recipient details before sending funds.</li>
              <li>Keep screenshots or receipts for your database records.</li>
              <li>Do not send money to unknown personal accounts without verification.</li>
              <li>Do not accept pressure to deposit quickly.</li>
              <li>Ask support for clarification if payment instructions look different from usual.</li>
            </ul>
            <p className="pt-2">Withdrawals may require confirmation of account ownership, payment details, or prior activity. Delays can happen because of verification, bank processing, incorrect details, or support review. Save every transaction reference, match details with support, and allow standard processing time.</p>
          </div>
        </section>

        {/* Section: Responsible Use */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Responsible Gaming Reminder</h3>
          <p>Reddy Book Club login should be used responsibly. Betting and casino gaming are entertainment activities, not income plans. There is always a chance of losing money.</p>
          
          <div className="bg-amber-50/50 border border-amber-200 p-5 rounded-xl space-y-3 text-xs sm:text-sm text-gray-700">
            <p className="font-bold text-amber-900 uppercase tracking-wider text-xs">📋 Operational Safety Rules Configuration:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-1">
              <div>• Set a fixed budget allocation before session starts.</div>
              <div>• Never engage in chasing down capital losses.</div>
              <div>• Do not secure borrowed credit capital to play.</div>
              <div>• Avoid logging in when angry, tired, or stressed.</div>
              <div>• Configure regular session intervals and take breaks.</div>
              <div>• Halt immediately if play logs affect external family, sleep, or finances.</div>
            </div>
            <p className="text-xs text-gray-500 font-light italic border-t border-amber-200/60 pt-2">If you feel you are losing control, pause activity and speak to someone you trust. Reddy Book Club access is only for adults who meet age & legal eligibility parameters in their location.</p>
          </div>
        </section>

        {/* Section: Importance Statement */}
        <section className="space-y-3 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Why a Clear Login Page Matters</h3>
          <p>A good login page should do more than ask for a username and password. It should help users understand where they are, how to access their account, what to do when something goes wrong, and how to stay safe. This is especially important in the betting and gaming space because users often search quickly during live matches. That rush can lead to mistakes, including using fake links, entering passwords on clone pages, or downloading unsafe APK files.</p>
          <p>The Reddy Book login page should give users a direct, simple, and safe route to their account. It should also remind users that account access, payments, and gameplay are their responsibility. Click the Login button only after confirming you are on the correct Reddy Book Club page and your details are accurate.</p>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-gray-200 text-center text-gray-400 text-xs space-y-1 font-mono tracking-wide">
          <p>© 2026 REDDY BOOK CLUB • OFFICIAL TECHNICAL MANAGEMENT COMPLIANCE INTERFACE</p>
          <p className="text-gray-400/70 font-sans font-light">Disclaimer: Consult local gaming statutes before executing routing calls. Play responsibly inside verified framework thresholds only.</p>
        </footer>

      </main>
    </div>
  );
}
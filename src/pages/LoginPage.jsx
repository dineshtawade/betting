// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs font-bold tracking-wide uppercase mt-2 text-emerald-200/90">{img.alt}</p>
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
      <main className="w-full max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200/60 space-y-12 text-gray-700 text-sm md:text-base leading-relaxed font-light">
        
        {/* Document Introductory Block with Image Right */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight leading-tight">
              Reddy Book Club Login: Secure Account Access, Mobile Login & Help
            </h1>
            <div className="w-20 h-0.5 bg-[#004b93]"></div>
            <p className="text-gray-600 font-normal">
              If you already have your Cricket ID and want to access your account quickly, this page is for you. The Reddy Book Club login page is designed to help existing users sign in, reach their dashboard, and continue using sports and casino features without confusion.
            </p>
            <p>
              Many users search for terms like reddy book club, reddybook club, reddy anna login, reddy book login, or reddy anna book login when they simply want the correct place to access their account. This page makes that process clear.
            </p>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded text-xs sm:text-sm text-amber-900 font-medium">
              <span className="font-bold uppercase tracking-wider block mb-1">⚠️ Important Compliance Eligibility Notice:</span>
              <p>If you are a new user and do not yet have an ID, this is not the registration page. The login page is for existing account holders. 18+ only.</p>
            </div>
          </div>
          <div className="md:w-1/2 shrink-0 w-full">
            <img 
              src="/Login P6 IMAGE 4.webp" 
              alt="Login Overview"
              className="w-full h-full sm:h-64 md:h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* What Is Login Page - Image Left */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start pt-4 border-t border-gray-100">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">What Is the Reddy Book Club Login Page?</h3>
            <p>
              The Reddy Book Club login page is the account access point for users who already have valid login details. After signing in, users can reach their dashboard, view account activity, check balances, manage deposits and withdrawals, and use available sports or gaming sections.
            </p>
            <p>Users usually expect three things from a good login page:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><span className="font-semibold">Fast entry</span> - Clear path to sign in</li>
              <li><span className="font-semibold">Secure account access</span> - Protected login flow</li>
              <li><span className="font-semibold">Easy next steps</span> - Access to account tools and support</li>
            </ul>
          </div>
          <div className="md:w-1/2 shrink-0 w-full">
            <img 
              src="/Login P8 IMAGE 5.webp" 
              alt="Login Security Guide"
              className="w-full h-full sm:h-64 md:h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* How to Login - Image Right */}
        <div className="flex flex-col md:flex-row gap-8 items-start pt-4 border-t border-gray-100">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">How to Log In to Reddy Book Club</h3>
            <p>Logging in should be simple. If you already received your account details, the process usually looks like this:</p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <p><span className="font-semibold">Open the official login page</span> - Click the Login button on the website.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <p><span className="font-semibold">Enter your login credentials</span> - Username, mobile number, or password.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <p><span className="font-semibold">Complete any verification step</span> - OTP or device check if needed.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#004b93] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <p><span className="font-semibold">Access your account dashboard</span> - Start using available features.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 shrink-0 w-full">
            <img 
              src="/Login P9.2 IMAGE 6.webp" 
              alt="Login Step Guide"
              className="w-full h-full sm:h-64 md:h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* What Can You Access - Grid with Large Images */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-6">What Can You Access After Logging In?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-5 p-5 border border-gray-200 rounded-xl bg-gray-50/50">
              <img src="/Login P1 IMAGE 1.webp" alt="Account" className="w-full sm:w-40 h-full object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">📊 Account Overview</h4>
                <p className="text-gray-600">Check your wallet balance, transaction history, and current account status from a single dashboard. View your activity logs, track your wins and losses, and monitor your account health in real-time.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-5 border border-gray-200 rounded-xl bg-gray-50/50">
              <img src="/Login P2 IMAGE2.webp" alt="Payments" className="w-full sm:w-40 h-full object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">💰 Deposits & Withdrawals</h4>
                <p className="text-gray-600">Review payment status, add funds instantly, or request withdrawals securely. Track all your financial transactions, check pending requests, and verify completed payments with detailed transaction records.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-5 border border-gray-200 rounded-xl bg-gray-50/50">
              <img src="/Login P4 IMAGE 3.webp" alt="Sports" className="w-full sm:w-40 h-full object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">🎯 Sports & Gaming</h4>
                <p className="text-gray-600">Access a wide range of sports betting markets including cricket, football, tennis, and more. Explore casino games, live dealer tables, and slot machines all from your single login account.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-5 border border-gray-200 rounded-xl bg-gray-50/50">
              <img src="/Login P6 IMAGE 4.webp" alt="Profile" className="w-full sm:w-40 h-full object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">🆔 Profile & KYC</h4>
                <p className="text-gray-600">Update your contact details, manage account settings, and complete KYC verification. Submit required documents, track verification status, and ensure your account remains compliant.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety, KYC, and Account Protection - Expanded Content */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-6">Safety, KYC, and Account Protection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <img src="/Login P1 IMAGE 1.webp" alt="Security" className="w-50 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">🔐 Keep credentials private</h4>
                <p className="text-gray-600">Never share your password, OTP, or account details with anyone. Legitimate customer support will never ask for your password or sensitive information. Always log out after each session, especially on shared devices.</p>
                <p className="text-gray-600 mt-2">Use strong, unique passwords and enable two-factor authentication where available. Change your password regularly and avoid using the same password across multiple platforms.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <img src="/Login P2 IMAGE2.webp" alt="KYC" className="w-50 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">🆔 Expect verification</h4>
                <p className="text-gray-600">KYC (Know Your Customer) verification may be required for withdrawals, account changes, or security checks. This standard process helps prevent fraud, money laundering, and unauthorized access.</p>
                <p className="text-gray-600 mt-2">Submit valid government-issued ID proof, address proof, and payment method verification when requested. Complete verification early to avoid delays in withdrawals.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <img src="/Login P4 IMAGE 3.webp" alt="Device" className="w-50 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">📱 Review device security</h4>
                <p className="text-gray-600">Avoid public Wi-Fi networks when accessing your account. Use a secure, private internet connection. Keep your device's operating system and antivirus software updated regularly.</p>
                <p className="text-gray-600 mt-2">Log out from shared devices after use, clear browser cache, and never save passwords on public computers. Enable device recognition features for added security.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <img src="/Login P6 IMAGE 4.webp" alt="Payments" className="w-50 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">💰 Check payments carefully</h4>
                <p className="text-gray-600">Review deposit and withdrawal limits, verification requirements, and estimated processing times before initiating transactions. Different payment methods may have varying processing speeds and fees.</p>
                <p className="text-gray-600 mt-2">Always verify the recipient details before sending funds. Keep screenshots or transaction IDs for reference. Contact support immediately if you notice any suspicious payment activity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Access Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start pt-4 border-t border-gray-100">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Reddy Book Club Login on Mobile, APK, and Browser</h3>
            <p>A lot of branded searches are really about convenience. Some users want browser access. Others are specifically looking for APK access.</p>
            
            <div className="space-y-4">
              <div className="p-5 border border-gray-200 rounded-xl bg-blue-50">
                <h4 className="font-bold text-gray-900 text-lg">🌐 Browser Login</h4>
                <p className="text-gray-600">No installation required. Works on smartphones, tablets, and desktops. Simply open your preferred browser, navigate to the official website, and log in securely. Browser access is ideal for users who want quick access without downloading additional files.</p>
              </div>
              <div className="p-5 border border-gray-200 rounded-xl bg-green-50">
                <h4 className="font-bold text-gray-900 text-lg">📱 APK Login</h4>
                <p className="text-gray-600">App-style access for Android users. Only download APK files from trusted, verified sources linked directly from the official website. Avoid random APK download sites that may contain malware or steal your login credentials.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 shrink-0 w-full">
            <img src="/Login P8 IMAGE 5.webp" alt="Mobile Access" className="w-full h-full sm:h-64 md:h-full object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Common Problems Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start pt-4 border-t border-gray-100">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Common Login Problems and How to Fix Them</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <span className="font-bold text-lg">🔑 Wrong Password</span>
                <p className="text-gray-600 text-sm mt-1">Check case sensitivity, ensure caps lock is off, and verify there are no extra spaces. Use "Show Password" option if available.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <span className="font-bold text-lg">📱 OTP Not Received</span>
                <p className="text-gray-600 text-sm mt-1">Check network coverage, wait 2-3 minutes, verify registered mobile number, and check spam folder if using email OTP.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <span className="font-bold text-lg">🔒 Account Locked</span>
                <p className="text-gray-600 text-sm mt-1">Contact customer support immediately. Provide account verification details to restore access safely.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <span className="font-bold text-lg">🚫 Page Not Opening</span>
                <p className="text-gray-600 text-sm mt-1">Clear browser cache, try a different browser, check internet connection, or restart your device.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 shrink-0 w-full">
            <img src="/Login P9.2 IMAGE 6.webp" alt="Troubleshooting" className="w-full h-full sm:h-64 md:h-full object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Beginners and Experts - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-blue-100">
            <img src="/Login P8 IMAGE 5.webp" alt="Beginners" className="w-full sm:w-44 h-52 object-cover rounded-xl shrink-0 shadow-md" />
            <div>
              <h4 className="font-bold text-[#004b93] text-xl mb-2">🆕 For Beginners</h4>
              <p className="text-gray-700">Simple sign-in process with clear labels and instructions. Easy access to account support and help resources. Step-by-step guidance for first-time users to navigate the platform confidently.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border border-green-100">
            <img src="/Login P9.2 IMAGE 6.webp" alt="Experts" className="w-full sm:w-44 h-52 object-cover rounded-xl shrink-0 shadow-md" />
            <div>
              <h4 className="font-bold text-[#0c4a34] text-xl mb-2">⭐ For Experienced Users</h4>
              <p className="text-gray-700">Fast login speed, seamless account continuity across multiple devices, reliable payment processing, and quick access to transaction history and betting markets.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section with Large Icons */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <img src="/Login P1 IMAGE 1.webp" alt="FAQ" className="w-40 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">How do I log in to Reddy Book Club?</h4>
                <p className="text-gray-600">Go to the official login page, enter your registered account details (username/Cricket ID and password), and complete any required verification step like OTP or captcha. Once verified, you will be redirected to your account dashboard.</p>
              </div>  
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <img src="/Login P2 IMAGE2.webp" alt="FAQ" className="w-40 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">What if I forget my login details?</h4>
                <p className="text-gray-600">Use the official "Forgot Password" recovery option if available. You may need to verify your registered mobile number or email. If recovery is not available, contact customer support through the verified channel with your account details to regain access.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <img src="/Login P4 IMAGE 3.webp" alt="FAQ" className="w-40 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">Can I use Reddy Book Club without APK?</h4>
                <p className="text-gray-600">Yes, absolutely. Browser access is fully supported directly through the website on both mobile and desktop devices. You do not need to install any APK file to access your account and use platform features.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
              <img src="/Login P6 IMAGE 4.webp" alt="FAQ" className="w-40 h-52 object-cover rounded-xl shrink-0 shadow-md" />
              <div>
                <h4 className="font-bold text-[#004b93] text-lg">Is the APK safe to use?</h4>
                <p className="text-gray-600">The APK is safe only when downloaded from a trusted, verified source linked directly from the official website. Avoid downloading APK files from random websites, forwarded links, or unofficial sources as they may contain malware designed to steal your account credentials.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="pt-4 border-t border-gray-100 text-center">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">Conclusion</h3>
          <p className="text-gray-700 mb-6">The Reddy Book Club login page helps existing users access their account quickly, securely, and without guesswork. If you already have your Cricket ID, click the Login button and sign in using your registered credentials. If you do not have an account yet, use the registration route to create one. Always ensure you meet the eligibility requirements, complete any necessary verification, and use the platform responsibly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-[#004b93] text-white rounded-full text-sm font-semibold hover:bg-[#003870] transition-colors shadow-md">
              Login Now
            </button>
            <button onClick={() => navigate('/register')} className="px-8 py-3 border-2 border-[#004b93] text-[#004b93] rounded-full text-sm font-semibold hover:bg-[#004b93]/10 transition-colors">
              Register New Account
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-gray-200 text-center text-gray-400 text-xs space-y-1">
          <p>© 2026 REDDY BOOK CLUB • OFFICIAL TECHNICAL MANAGEMENT COMPLIANCE INTERFACE</p>
          <p className="text-gray-400/70">Disclaimer: Consult local gaming statutes before executing routing calls. Play responsibly inside verified framework thresholds only.</p>
        </footer>

      </main>
    </div>
  );
}
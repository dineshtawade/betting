import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Register Banner Image - Increased height */}
          <div className="w-full px-4 pt-4">
            <img
              src="/Register Banner.webp"
              alt="Reddy Book Club Register"
              className="w-full h-full sm:h-full md:h-full object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 md:p-10">
            
            {/* Title Section */}
            <div className="mb-8 sm:mb-10 border-b border-gray-200 pb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#a60a27] font-semibold">
                Register Now
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 leading-tight">
                Reddy Book Club Register: Get Your Cricket ID Quickly and Start with Confidence
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Register at Reddy Book Club to get your Cricket ID, complete quick verification, and access 
                sports, casino, payments, login help, and support today.
              </p>
            </div>

            {/* Introduction - Image Right Card */}
            <div className="mb-10 sm:mb-12 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you are on this page, you are probably looking for one thing: a simple way to register at 
                  Reddy Book Club and get your new Cricket ID without confusion. This page is built for exactly 
                  that. Whether you searched for reddy book club, reddybook club, reddy anna club, reddy anna 
                  book club, or even terms like reddy book login and reddy book club apk, the goal is the same 
                  — create your account, understand how access works, and get started the right way.
                </p>
                <div className="bg-amber-50 border-l-4 border-[#a60a27] p-4 rounded-r-xl">
                  <p className="text-gray-800 text-sm">
                    At Reddy Book Club, registration should feel straightforward. You can click the Register button, 
                    use the Get Cricket ID button, or fill out the form. Make sure you are <strong>18+ only</strong>, 
                    use accurate details, and check whether access is appropriate in your area.
                  </p>
                </div>
              </div>
              <div className="flex-1 md:w-48">
                <img
                  src="/Register P1 IMAGE 1.webp"
                  alt="Registration Process"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* What is Reddy Book Club registration - Image Left Card */}
            <div className="mb-10 sm:mb-12 flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="flex-1 space-y-4 text-gray-700 leading-relaxed">
                <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a]">
                  What is Reddy Book Club registration?
                </h2>
                <p>
                  Reddy Book Club registration is the process of requesting and activating your Cricket ID so you 
                  can access the platform's features. In simple terms, it is how a new user gets started.
                </p>
                <p>After registering, users usually expect to:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>receive their login details</li>
                  <li>access the platform through web or mobile</li>
                  <li>complete any required verification</li>
                  <li>add funds if needed</li>
                  <li>start exploring sports betting, exchange-style markets, or casino sections</li>
                </ul>
              </div>
              <div className="flex-1 md:w-48">
                <img
                  src="/Register P3 IMAGE 2.webp"
                  alt="Login Details"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* How to register - Cards with small images */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4">
                How to register at Reddy Book Club
              </h2>
              <p className="text-gray-600 mb-4">There are usually two easy ways to begin:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 border border-green-100 flex items-center gap-4">
                  <div className="w-20 h-20 shrink-0">
                    <img src="/Register P4 IMAGE 3.webp" alt="Register" className="w-30 h-30 object-cover rounded-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4a121a]">Click the Register button</h3>
                    <p className="text-gray-600 text-sm">The fastest route for users who already know they want a new Cricket ID.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100 flex items-center gap-4">
                  <div className="w-20 h-20 shrink-0">
                    <img src="/Register P5 IMAGE 4.webp" alt="Get Cricket ID" className="w-30 h-30 object-cover rounded-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4a121a]">Click Get Cricket ID</h3>
                    <p className="text-gray-600 text-sm">Designed for new users who want guided access to the platform.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What you should keep ready - Image Right Card */}
            <div className="mb-10 sm:mb-12 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a24] rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">
                    What you should keep ready before registering
                  </h2>
                  <p className="text-white/80 mb-4 text-sm">A smooth registration starts with the right preparation.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <h3 className="font-semibold text-[#a60a27] text-sm">📱 Working mobile number</h3>
                      <p className="text-white/70 text-xs">For account updates and communication</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <h3 className="font-semibold text-[#a60a27] text-sm">📝 Correct personal details</h3>
                      <p className="text-white/70 text-xs">Match your KYC documents</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <h3 className="font-semibold text-[#a60a27] text-sm">🎂 18+ Age proof</h3>
                      <p className="text-white/70 text-xs">Adults only - no underage users</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <h3 className="font-semibold text-[#a60a27] text-sm">🔒 Secure password</h3>
                      <p className="text-white/70 text-xs">Never share your login details</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-56 shrink-0">
                  <img
                    src="/Register P7 IMAGE 5.webp"
                    alt="Preparation Tips"
                    className="w-full h-52 object-cover rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step-by-step process - Image Left Card */}
            <div className="mb-10 sm:mb-12 flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4">
                  Step-by-step: how the Reddy Book Club register process works
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2">
                    <span className="w-7 h-7 bg-[#a60a27] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Choose your registration route</span>
                  </div>
                  <div className="flex items-start gap-3 p-2">
                    <span className="w-7 h-7 bg-[#a60a27] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Submit your basic details clearly</span>
                  </div>
                  <div className="flex items-start gap-3 p-2">
                    <span className="w-7 h-7 bg-[#a60a27] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Wait for confirmation or account response</span>
                  </div>
                  <div className="flex items-start gap-3 p-2">
                    <span className="w-7 h-7 bg-[#a60a27] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>Complete verification if required (KYC)</span>
                  </div>
                  <div className="flex items-start gap-3 p-2">
                    <span className="w-7 h-7 bg-[#a60a27] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>
                    <span>Log in and review your account</span>
                  </div>
                </div>
              </div>
              <div className="md:w-48 shrink-0">
                <img
                  src="/Register P7 IMAGE 5 (2).webp"
                  alt="Step by Step Process"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* What happens after Cricket ID - Grid with images */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4">
                What happens after you get your Cricket ID?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <img src="/Register last image.webp" alt="Login" className="w-full h-45 object-cover rounded-lg mb-3" />
                  <h3 className="font-bold text-[#4a121a] text-sm">🔐 Login & Access</h3>
                  <p className="text-gray-600 text-xs">Confirm your account details are working</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <img src="/Register P1 IMAGE 1.webp" alt="KYC" className="w-full h-45 object-cover rounded-lg mb-3" />
                  <h3 className="font-bold text-[#4a121a] text-sm">🆔 KYC Verification</h3>
                  <p className="text-gray-600 text-xs">Complete early for smoother withdrawals</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <img src="/Register P3 IMAGE 2.webp" alt="Payments" className="w-full h-45 object-cover rounded-lg mb-3" />
                  <h3 className="font-bold text-[#4a121a] text-sm">💰 Payment Setup</h3>
                  <p className="text-gray-600 text-xs">Review limits before adding funds</p>
                </div>
              </div>
            </div>

            {/* Why users choose - Image Right Card */}
            <div className="mb-10 sm:mb-12 flex flex-col md:flex-row gap-6 items-center bg-gray-50 rounded-2xl p-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-3">
                  Why users choose Reddy Book Club
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">✓</span> Simpler account access</div>
                  <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">✓</span> Easy register to login flow</div>
                  <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">✓</span> Flexible web & mobile options</div>
                  <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">✓</span> Works for beginners & pros</div>
                </div>
              </div>
              <div className="md:w-48 shrink-0">
                <img
                  src="/Register P4 IMAGE 3.webp"
                  alt="Why Choose Us"
                  className="w-full h-45 object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Beginners vs Experts - Two column with images */}
            <div className="mb-10 sm:mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <img src="/Register P5 IMAGE 4.webp" alt="Beginners" className="w-40 h-45 object-cover rounded-xl shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4a121a] text-lg">🆕 For beginners</h3>
                  <p className="text-gray-700 text-sm">Start with registration, use correct details, understand verification, and begin slowly.</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5 flex items-center gap-4">
                <img src="/Register P7 IMAGE 5.webp" alt="Experts" className="w-40 h-45 object-cover rounded-xl shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4a121a] text-lg">⭐ For experienced users</h3>
                  <p className="text-gray-700 text-sm">Focus on speed, market availability, payment flow, and quick registration to live use.</p>
                </div>
              </div>
            </div>

            {/* Important things to know */}
            <div className="mb-10 sm:mb-12 bg-red-50 rounded-2xl p-6 border border-red-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4 flex items-center gap-2">
                ⚠️ Important things to know before you click Register
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">•</span> Verification may still be needed</div>
                <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">•</span> Bonuses have terms - read carefully</div>
                <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">•</span> Availability depends on location</div>
                <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">•</span> Payment processing times vary</div>
                <div className="flex items-center gap-2 text-sm"><span className="text-[#a60a27]">•</span> Set a budget and play responsibly</div>
              </div>
            </div>

            {/* Web access options - Three cards */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4 text-center">
                Web access, app access, and APK questions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <img src="/Register P7 IMAGE 5 (2).webp" alt="Browser" className="w-full h-45 object-cover rounded-lg mb-2" />
                  <h3 className="font-bold text-[#4a121a] text-sm">🌐 Browser access</h3>
                  <p className="text-gray-600 text-xs">No installation needed - easiest option</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <img src="/Register last image.webp" alt="APK" className="w-full h-45 object-cover rounded-lg mb-2" />
                  <h3 className="font-bold text-[#4a121a] text-sm">📱 APK access</h3>
                  <p className="text-gray-600 text-xs">App-style on Android - use trusted sources</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <img src="/Register P1 IMAGE 1.webp" alt="Which is better" className="w-full h-45 object-cover rounded-lg mb-2" />
                  <h3 className="font-bold text-[#4a121a] text-sm">💡 Which is better?</h3>
                  <p className="text-gray-600 text-xs">Browser for beginners, APK for regular users</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] mb-1">How do I register at Reddy Book Club?</h3>
                  <p className="text-gray-600 text-sm">Click the Register or Get Cricket ID button, then submit your details or complete the form shown on the page.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] mb-1">Is Reddy Book Club registration free?</h3>
                  <p className="text-gray-600 text-sm">Registration itself is the account setup step. Funding and gameplay may have separate requirements.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] mb-1">Do I need KYC after registering?</h3>
                  <p className="text-gray-600 text-sm">You may. Some users are asked to complete identity verification, especially before withdrawals.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] mb-1">Can I use Reddy Book Club on mobile?</h3>
                  <p className="text-gray-600 text-sm">Yes, via mobile browser or APK-based access from trusted sources.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] mb-1">What should I do after I get my Cricket ID?</h3>
                  <p className="text-gray-600 text-sm">Log in, review your account, check verification requirements, and understand payment options.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a121a] mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Reddy Book Club Register helps users get their Cricket ID quickly and understand what comes next. 
                The page explains the process, sets realistic expectations around login, KYC, payments, and access.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-2 bg-[#a60a27] text-white rounded-full text-sm font-semibold hover:bg-[#7a081e] transition-colors shadow-md">
                  Register Now
                </button>
                <button className="px-6 py-2 border-2 border-[#a60a27] text-[#a60a27] rounded-full text-sm font-semibold hover:bg-[#a60a27]/10 transition-colors">
                  Get Cricket ID
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
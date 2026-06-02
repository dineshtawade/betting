import React, { useEffect } from "react";

export default function CustomerCare() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Banner Image 1 - Customer Care banner 1 */}
          <div className="w-full">
            <img
              src="/Customer Care banner 1.webp"
              alt="Reddy Book Club Customer Care"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            
            {/* Title Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 border-b border-gray-200 pb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#a60a27] font-semibold">
                Customer Care
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
                Reddy Book Club Customer Care: Help for Login, Cricket ID, Payments and Account Support
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Need help with Reddy Book Club? Contact customer care for Cricket ID support, login help, 
                KYC guidance, payments, withdrawals, and account recovery today.
              </p>
            </div>

            {/* Reddy Book Club Customer Care Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Reddy Book Club Customer Care
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you need help with your account, Cricket ID, login, deposits, withdrawals, or app access, 
                  this Reddy Book Club Customer Care page is here to guide you. Instead of making users search 
                  through multiple pages, this section brings the most important support information into one 
                  place so you know what kind of help is available, when verification may be needed, and how 
                  to reach the right team safely.
                </p>
                <p>
                  For many users, support is not just about fixing a technical issue. It is also about getting 
                  quick answers before registering, recovering login access, understanding payment status, 
                  checking KYC requirements, or confirming whether an APK or login link is official. That is 
                  why this page is written in plain English and designed for both beginners and experienced users.
                </p>
                <div className="bg-amber-50 border-l-4 border-[#a60a27] p-4 rounded-r-xl mt-4">
                  <p className="text-gray-800">
                    💡 <span className="font-semibold">Direct Assistance:</span> If you need direct assistance, 
                    use the Get Cricket ID button on the website to connect with the official support path shown 
                    by Reddy Book Club. Use only the contact option displayed on the official website and avoid 
                    unverified numbers, links, or third-party agents.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Contact Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6">
                How to Contact Reddy Book Club Customer Care
              </h2>
              <p className="text-gray-600 mb-6">
                Customer care should be easy to find and simple to use. At Reddy Book Club, the support journey 
                should feel just as straightforward as the rest of the account flow.
              </p>
              
              {/* Banner Image 2 - Customer Care Banner 2 */}
              <div className="my-6 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Customer  Care Banner 2.webp"
                  alt="Customer care support channels"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3 flex items-center gap-2">
                    🔘 Use the official support button
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The main support route for this page is the Get Cricket ID button. Users can click it to 
                    connect with the official support system for help with new Cricket ID requests, account 
                    login issues, deposit questions, withdrawal follow-ups, KYC or verification queries, app 
                    or APK access problems, and general account support.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3 flex items-center gap-2">
                    🔒 Use only official website contact options
                  </h3>
                  <p className="text-gray-600 text-sm">
                    If the website shows support through chat, WhatsApp, a form, or another direct channel, 
                    always use the one listed on the official page. Do not trust random contact numbers shared 
                    in Telegram groups, social media comments, or copied pages.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <h3 className="text-lg font-bold text-[#4a121a] mb-2 flex items-center gap-2">
                  📝 Contact support with clear details
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Support works faster when your message is specific. A short, complete message is better than 
                  sending many incomplete messages.
                </p>
                <p className="font-semibold text-gray-700 mb-2">A useful first message usually includes:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li>• your registered mobile number or username</li>
                  <li>• the issue type</li>
                  <li>• when the problem started</li>
                  <li>• whether you are using web or mobile</li>
                  <li>• a screenshot, if relevant</li>
                  <li>• payment reference details, if the issue is deposit or withdrawal related</li>
                </ul>
              </div>
            </section>

            {/* What Customer Care Can Help With */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6">
                What Reddy Book Club Customer Care Can Help With
              </h2>
              <p className="text-gray-600 mb-6">
                A good customer care page should explain real support scenarios, not just say "contact us anytime." 
                Most users want to know whether support can solve their exact problem.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🏏 Cricket ID and registration help</h3>
                  <p className="text-gray-600 text-sm mb-2">If you are new to Reddy Book Club, customer care can guide you through the first steps. This may include:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>requesting a new Cricket ID</li>
                    <li>understanding the registration process</li>
                    <li>checking what details are needed</li>
                    <li>solving sign-up errors</li>
                    <li>clarifying basic account setup questions</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🔐 Login and account recovery</h3>
                  <p className="text-gray-600 text-sm mb-2">One of the most common reasons people contact support is trouble logging in. Customer care may help with:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>forgotten login details</li>
                    <li>password reset guidance</li>
                    <li>account access problems</li>
                    <li>OTP-related issues</li>
                    <li>account recovery after failed login attempts</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">💰 Deposit and withdrawal support</h3>
                  <p className="text-gray-600 text-sm mb-2">Payment issues are another major reason users contact support. Customer care can usually assist with:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>deposit not credited</li>
                    <li>withdrawal under review</li>
                    <li>payment method mismatch</li>
                    <li>incorrect transaction amount</li>
                    <li>delay after submitting a payment request</li>
                    <li>checking whether more verification is needed</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🆔 KYC and verification guidance</h3>
                  <p className="text-gray-600 text-sm mb-2">Verification can feel confusing if you are not expecting it. Customer care can explain:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>why KYC was requested</li>
                    <li>what documents may be needed</li>
                    <li>how to upload or submit details</li>
                    <li>why a withdrawal may be pending</li>
                    <li>why account limits or temporary restrictions may appear</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">📱 App, APK, and device support</h3>
                  <p className="text-gray-600 text-sm mb-2">Users who access Reddy Book Club on mobile may need help with:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>APK download issues</li>
                    <li>installation problems</li>
                    <li>browser compatibility</li>
                    <li>login errors on mobile</li>
                    <li>update-related problems</li>
                    <li>switching between web and mobile access</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Get Faster Help */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a24] rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                How to Get Faster Help from Customer Care
              </h2>
              <p className="text-white/80 mb-6">
                Support becomes much easier when users know how to raise a clean request. This section can reduce 
                back-and-forth and improve response quality.
              </p>
              
              <div className="space-y-5">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#a60a27] mb-2">Explain the issue in one message</h3>
                  <p className="text-white/80 text-sm">
                    Instead of sending "hello" and waiting, explain the problem clearly in your first message.
                  </p>
                  <div className="mt-2 bg-white/5 rounded-lg p-3 italic text-white/70 text-sm">
                    "I can log in, but my withdrawal from today is still pending. My username is [username], 
                    the request was made at [time], and the amount is [amount]."
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#a60a27] mb-2">Keep screenshots ready</h3>
                  <p className="text-white/80 text-sm">Screenshots can save time, especially for:</p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-white/70">
                    <li>failed payment pages</li>
                    <li>error messages</li>
                    <li>missing transaction updates</li>
                    <li>login issues</li>
                    <li>KYC requests</li>
                    <li>app installation errors</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#a60a27] mb-2">Keep payment references with you</h3>
                  <p className="text-white/80 text-sm">If the issue is related to deposits or withdrawals, keep details such as:</p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-white/70">
                    <li>transaction ID</li>
                    <li>UTR number</li>
                    <li>amount</li>
                    <li>payment method used</li>
                    <li>date and time</li>
                    <li>last payment status shown on screen</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Safety Tips */}
            <section className="mb-10 sm:mb-12 bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6">
                ⚠️ Important Safety Tips Before Contacting Support
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-[#4a121a] mb-2">Use only official support</h3>
                  <p className="text-gray-600 text-sm">
                    Only contact Reddy Book Club through the support path shown on the official website. 
                    If someone contacts you first and claims to be support, be careful.
                  </p>
                </div>
                
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-[#4a121a] mb-2">Never share sensitive security details</h3>
                  <p className="text-gray-600 text-sm mb-2">Real support should not need your full password. You should never share:</p>
                  <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li>password</li>
                    <li>OTP</li>
                    <li>bank PIN</li>
                    <li>card PIN</li>
                    <li>UPI PIN</li>
                    <li>device lock code</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-[#4a121a] mb-2">Be careful with APK links</h3>
                  <p className="text-gray-600 text-sm">
                    If you need app help, use only the APK or mobile access route shown on the official site. 
                    Do not install files from random forwarded links or cloned pages.
                  </p>
                </div>
                
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-[#4a121a] mb-2">Avoid account sharing</h3>
                  <p className="text-gray-600 text-sm">
                    Support is easier and safer when each user manages only their own account. Shared accounts, 
                    borrowed payment methods, or mismatched personal details can create delays and extra verification.
                  </p>
                </div>
              </div>
            </section>

            {/* When Support May Take Longer */}
            <section className="mb-10 sm:mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                When Support May Take Longer Than Expected
              </h2>
              <p className="text-gray-600 mb-4">
                Fast support matters, but some issues naturally take more time than others. Setting the right 
                expectation helps users stay informed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#4a121a] mb-2">Cases that may take longer</h3>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>withdrawal verification</li>
                    <li>deposit mismatch</li>
                    <li>KYC review</li>
                    <li>account ownership confirmation</li>
                    <li>suspicious login activity</li>
                    <li>bank or payment processor delay</li>
                    <li>duplicate account checks</li>
                    <li>responsible gaming review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#4a121a] mb-2">What users should do during review</h3>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>avoid opening multiple tickets for the same problem</li>
                    <li>reply from the same registered contact method where possible</li>
                    <li>provide requested documents clearly</li>
                    <li>not submit conflicting payment details</li>
                    <li>check spam or message requests if waiting for a reply</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Customer Care and Responsible Gaming */}
            <section className="mb-10 sm:mb-12 bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Customer Care and Responsible Gaming
              </h2>
              <p className="text-gray-700 mb-3">
                Support is not only for technical and payment questions. It should also help users who need 
                account control or a break.
              </p>
              <p className="text-gray-700">
                If you feel that gaming is becoming difficult to manage, or you want help with spending control, 
                time management, or account limits, customer care should be able to guide you toward the responsible 
                gaming options available on the website.
              </p>
              <div className="mt-4 bg-white rounded-lg p-3 border border-green-200">
                <p className="text-sm text-gray-600">
                  📌 This page is intended for adults only. Users must be 18+ and should always check whether the 
                  service is suitable and permitted in their location. Support may also request verification if age 
                  or identity checks are needed.
                </p>
              </div>
            </section>

            {/* Why This Customer Care Page Is Useful */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Why This Customer Care Page Is Useful
              </h2>
              <p className="text-gray-700 mb-4">
                A strong customer care page should do more than repeat "contact support now." It should answer 
                the questions users actually have before they send a message.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-gray-700">✓ what support can solve</li>
                <li className="flex items-center gap-2 text-gray-700">✓ how to contact the right team</li>
                <li className="flex items-center gap-2 text-gray-700">✓ what to prepare before asking for help</li>
                <li className="flex items-center gap-2 text-gray-700">✓ why some issues need KYC or review</li>
                <li className="flex items-center gap-2 text-gray-700">✓ how to stay safe from fake agents</li>
                <li className="flex items-center gap-2 text-gray-700">✓ when to use support for responsible gaming concerns</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">How do I contact Reddy Book Club customer care?</h3>
                  <p className="text-gray-600">Use the official support route shown on the website, especially the Get Cricket ID button on this page. Only use contact details listed on the official site.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Can customer care help with login problems?</h3>
                  <p className="text-gray-600">Yes. Support can usually help with password reset guidance, account access issues, login errors, and account recovery checks.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Why is my withdrawal taking longer than expected?</h3>
                  <p className="text-gray-600">A withdrawal may take longer if KYC is incomplete, payment ownership needs review, account activity is being checked, or the payment method is delayed.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Can customer care help with Cricket ID registration?</h3>
                  <p className="text-gray-600">Yes. Customer care can guide users through new Cricket ID requests, basic registration help, and account setup questions.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Is it safe to share my password with support?</h3>
                  <p className="text-gray-600">No. You should never share your password, OTP, PIN, or banking security details with anyone claiming to be support.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reddy Book Club Customer Care should make support simpler, safer, and easier to use. Whether you 
                need help with a new Cricket ID, login access, deposits, withdrawals, KYC, or app-related issues, 
                the best first step is to use the official support route shown on the website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Keep your message clear, use only trusted contact options, and have your account or payment details 
                ready so the issue can be handled faster.
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-[#a60a27] text-white rounded-full font-semibold hover:bg-[#7a081e] transition-colors shadow-lg">
                  Get Cricket ID
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
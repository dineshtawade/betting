import React, { useEffect } from "react";

export default function PrivacyPolicy() {

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
          
          {/* Banner Image 1 - Privacy Policy Banner 1 */}
          <div className="w-full">
            <img
              src="/Privacy Policy Banner 1.webp"
              alt="Reddy Book Club Privacy Policy"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            
            {/* Title Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 border-b border-gray-200 pb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#a60a27] font-semibold">
                Privacy Policy
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
                Reddy Book Club Privacy Policy: How We Collect, Use and Protect Your Data
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Read the Reddy Book Club Privacy Policy to learn what data we collect, how we use it, 
                cookies, KYC checks, security, and your privacy choices.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Reddy Book Club Privacy Policy
              </h2>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Effective Date:</strong> [Insert Date]
                  <br />
                  <strong>Last Updated:</strong> [Insert Date]
                </p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Reddy Book Club, we take privacy seriously. This Privacy Policy explains what information 
                  we collect, how we use it, when we may share it, and what choices you have when using our 
                  website, registration forms, login area, customer support channels, and any mobile version 
                  or APK we officially provide.
                </p>
                <p>
                  If you visit Reddy Book Club to browse the site, create an account, request a Cricket ID, 
                  log in, contact support, or use account features linked to deposits, withdrawals, verification, 
                  or gameplay access, this page is meant to help you understand how your data is handled in 
                  simple terms. It also explains important limits, such as age restrictions, account verification 
                  requirements, and situations where we may need to retain certain records for security or legal reasons.
                </p>
                <div className="bg-amber-50 border-l-4 border-[#a60a27] p-4 rounded-r-xl mt-4">
                  <p className="text-gray-800">
                    By continuing to use our website or services, you agree to the practices described in this 
                    Privacy Policy, together with our Terms and Conditions and Responsible Gaming page.
                  </p>
                </div>
              </div>
            </section>

            {/* What This Policy Covers */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                What This Policy Covers
              </h2>
              <p className="text-gray-600 mb-4">
                This Privacy Policy applies to personal information collected through:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-[#4a121a] mb-2">🌐 Our website and mobile access</h3>
                  <p className="text-gray-600 text-sm">This includes pages you visit on the Reddy Book Club website, mobile browser sessions, landing pages, support forms, and any official app or APK access point made available by us.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-[#4a121a] mb-2">🔐 Registration, login, and account activity</h3>
                  <p className="text-gray-600 text-sm">If you register, request a Cricket ID, log in, reset a password, update account details, or communicate with our support team, we may collect information connected with those actions.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-[#4a121a] mb-2">💰 Payments, verification, and security checks</h3>
                  <p className="text-gray-600 text-sm">Where relevant, we may process information connected to deposits, withdrawals, fraud prevention, identity checks, responsible gaming reviews, and account protection.</p>
                </div>
              </div>
            </section>

            {/* What Information We May Collect */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                What Information We May Collect
              </h2>
              <p className="text-gray-600 mb-6">
                We only collect information that is reasonably needed to operate the website, support your account, 
                improve security, and meet legal or compliance obligations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">📝 Information you provide directly</h3>
                  <p className="text-gray-600 text-sm mb-2">You may give us information such as:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>your name</li>
                    <li>mobile number</li>
                    <li>email address</li>
                    <li>date of birth</li>
                    <li>username or login ID</li>
                    <li>payment-related details</li>
                    <li>customer support messages</li>
                    <li>documents submitted for KYC or verification</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🤖 Information collected automatically</h3>
                  <p className="text-gray-600 text-sm mb-2">When you browse or use the site, we may automatically collect:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>IP address</li>
                    <li>browser type</li>
                    <li>device type</li>
                    <li>operating system</li>
                    <li>language settings</li>
                    <li>pages viewed</li>
                    <li>time spent on the site</li>
                    <li>login timestamps and security logs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-[#4a121a] mb-2">🔗 Information from verification or payment partners</h3>
                <p className="text-gray-600 text-sm">
                  In some cases, trusted third-party providers may confirm details related to identity, fraud screening, 
                  payment validation, or transaction status. We use this only where needed to process services safely 
                  and responsibly.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use personal information for practical website and account purposes, not for vague or unnecessary reasons.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To create and manage your account</span> - We use your details to register your account, provide login access, verify credentials, respond to account issues, and maintain your profile.</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To provide services you request</span> - If you request a Cricket ID, contact customer care, use support channels, or access account services, we use your information to complete those actions.</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To process deposits, withdrawals, and account checks</span> - Payment-related information may be used to process transactions, confirm account ownership, reduce failed withdrawals, prevent fraud, and meet internal risk controls.</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To complete KYC, age, and eligibility checks</span> - Verification may be requested during registration, before a withdrawal, after unusual activity, or when account details change.</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To improve website performance and user experience</span> - We may use technical and behavioural data to improve page speed, mobile usability, navigation, login flow, and security systems.</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#a60a27] font-bold text-xl">✓</span>
                  <div><span className="font-semibold">To send important service messages</span> - We may send non-promotional messages related to account access, OTP or verification codes, password resets, security alerts, KYC requests, policy updates, and transaction status.</div>
                </div>
              </div>
            </section>

            {/* Cookies, Analytics, and Tracking Technologies */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a24] rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Cookies, Analytics, and Tracking Technologies
              </h2>
              <p className="text-white/80 mb-4">
                Like most modern websites, Reddy Book Club may use cookies and similar technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-[#a60a27] mb-2">🍪 What cookies do</h3>
                  <ul className="list-disc ml-4 text-sm text-white/70">
                    <li>keep you logged in</li>
                    <li>remember preferences</li>
                    <li>understand site usage</li>
                    <li>improve performance</li>
                    <li>prevent suspicious activity</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-[#a60a27] mb-2">📊 Types of cookies we may use</h3>
                  <ul className="list-disc ml-4 text-sm text-white/70">
                    <li>Essential cookies for core functions</li>
                    <li>Performance cookies for analytics</li>
                    <li>Functionality cookies for convenience</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-[#a60a27] mb-2">⚙️ Your choices</h3>
                  <p className="text-sm text-white/70">
                    You can usually manage cookies through your browser or device settings. Disabling essential 
                    cookies may affect login, page performance, or account functions.
                  </p>
                </div>
              </div>
            </section>

            {/* When We May Share Your Information */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                When We May Share Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We do not share personal information casually. We may share it only when there is a valid business, 
                security, legal, or service-related reason.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">🤝 Service providers and technical partners</h3>
                  <p className="text-gray-600 text-sm">We may work with third parties that help us with hosting, payments, analytics, communication tools, fraud prevention, customer support, or verification services.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">⚖️ Compliance, legal, and security reasons</h3>
                  <p className="text-gray-600 text-sm">We may disclose information to comply with applicable law, investigate fraud, enforce our Terms and Conditions, or protect users and our business.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">🔄 Business transfers or operational changes</h3>
                  <p className="text-gray-600 text-sm">If the website undergoes a business restructuring, merger, asset sale, or service transfer, relevant information may be transferred as part of that process.</p>
                </div>
              </div>
            </section>

            {/* Data Security and Retention */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Data Security and Retention
              </h2>
              
              {/* Banner Image 2 - Privacy Policy Banner 2 */}
              <div className="my-6 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Privacy Policy Banner 2.webp"
                  alt="Data security and privacy"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We use reasonable technical and organisational measures to help protect your information from 
                  unauthorised access, loss, misuse, or alteration. These measures may include controlled access, 
                  monitoring systems, secure storage practices, and account protection processes.
                </p>
                <p>
                  However, no website, app, server, or online transmission method can be guaranteed to be completely 
                  secure. That is why users should also protect their own accounts by using a strong password, keeping 
                  login details private, and contacting support quickly if they notice unusual activity.
                </p>
                <p>
                  We keep personal information only for as long as it is reasonably needed for account operation, 
                  payment and support records, security monitoring, fraud prevention, dispute handling, and legal 
                  or compliance requirements.
                </p>
              </div>
            </section>

            {/* Your Rights and Choices */}
            <section className="mb-10 sm:mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on your location and the nature of your request, you may have the right to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-700">✓ ask what personal information we hold about you</div>
                <div className="flex items-center gap-2 text-gray-700">✓ request correction of inaccurate details</div>
                <div className="flex items-center gap-2 text-gray-700">✓ request deletion of data that is no longer necessary</div>
                <div className="flex items-center gap-2 text-gray-700">✓ object to certain marketing communications</div>
                <div className="flex items-center gap-2 text-gray-700">✓ withdraw consent where processing relies on consent</div>
                <div className="flex items-center gap-2 text-gray-700">✓ request account closure, subject to legal or security retention needs</div>
              </div>
            </section>

            {/* Age Restrictions, Location Limits */}
            <section className="mb-10 sm:mb-12 bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Age Restrictions, Location Limits, and Responsible Use
              </h2>
              <p className="text-gray-700 mb-4">
                Reddy Book Club is intended only for users who are legally permitted to use the service in their location.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">🔞 18+ only</h3>
                  <p className="text-gray-600 text-sm">We do not knowingly collect personal information from anyone under 18. If we learn that an underage person has submitted personal data, we may suspend the account and take reasonable steps to delete the information.</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">📍 Jurisdiction and eligibility</h3>
                  <p className="text-gray-600 text-sm">Access to certain services may not be available in all states, regions, or countries. It is the user's responsibility to ensure that use of the site is lawful in their location.</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-bold text-[#4a121a] mb-2">🎯 Responsible gambling and account safety</h3>
                  <p className="text-gray-600 text-sm">In some cases, account activity may be reviewed for safer gambling purposes, fraud prevention, or risk control.</p>
                </div>
              </div>
            </section>

            {/* Third-Party Links */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Third-Party Links and External Services
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites, payment channels, messaging apps, or service 
                providers. Once you leave our site, their privacy practices apply, not ours. We recommend reading 
                the privacy policy of any external site or app before sharing personal information.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-2">
                We may update this Privacy Policy from time to time to reflect service changes, legal updates, 
                security improvements, or operational needs. When we make important changes, we may post the 
                revised version on this page and update the "Last Updated" date.
              </p>
              <p className="text-gray-700">
                Your continued use of Reddy Book Club after changes are published means you accept the updated 
                policy, to the extent allowed by applicable law.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, your account information, or a privacy-related 
                request, please contact us through our official support channel.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Website:</strong> Reddy Book Club</p>
                <p><strong>Privacy Email:</strong> [Insert Email]</p>
                <p><strong>Support Contact:</strong> [Insert WhatsApp / Live Chat / Form Link]</p>
                <p><strong>Business Name:</strong> [Insert Legal Entity Name]</p>
                <p><strong>Business Address:</strong> [Insert Registered Address]</p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">What information does Reddy Book Club collect?</h3>
                  <p className="text-gray-600">Reddy Book Club may collect details you provide directly, such as your name, mobile number, email, login information, support messages, payment details, and verification documents. It may also collect device and usage data automatically.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Why might Reddy Book Club ask for ID or KYC documents?</h3>
                  <p className="text-gray-600">KYC may be requested to confirm your identity, verify age, protect your account, prevent fraud, and review deposits or withdrawals. This is common when account security or payment ownership needs to be confirmed.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Does Reddy Book Club use cookies?</h3>
                  <p className="text-gray-600">Yes. Cookies may be used to keep you signed in, remember settings, improve performance, analyse usage, and support security. You can usually manage cookies through your browser settings.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Can I ask Reddy Book Club to update or delete my personal data?</h3>
                  <p className="text-gray-600">Yes, in many cases you can request access, correction, or deletion of your information. Some records may still need to be retained for security, financial, or legal reasons.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Does this Privacy Policy apply to the app or APK too?</h3>
                  <p className="text-gray-600">Yes. If Reddy Book Club offers an official mobile app or APK, this Privacy Policy should apply to that access as well, unless a separate policy is shown for that product.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reddy Book Club's Privacy Policy should help users understand a simple point: what data is collected, 
                why it is needed, how it may be shared, and what control the user has. For this type of site, the 
                most important areas are account access, KYC, payment-related checks, cookies, security, and age restrictions.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
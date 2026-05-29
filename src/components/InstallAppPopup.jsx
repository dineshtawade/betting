import React, { useEffect, useState } from "react";
import { X, Download, HelpCircle, AlertTriangle } from "lucide-react";

export default function InstallAppPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [currentView, setCurrentView] = useState("main"); // "main", "disclaimer", "faqs"

  useEffect(() => {
    const popupShown = localStorage.getItem("popup-shown");
    const disclaimerAccepted = localStorage.getItem("disclaimer-accepted");

    if (!popupShown) {
      setShowPopup(true);
    }
    
    if (disclaimerAccepted === "true") {
      setShowDisclaimer(false);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("popup-shown", "true");
    setShowPopup(false);
  };

  const acceptDisclaimer = () => {
    localStorage.setItem("disclaimer-accepted", "true");
    setShowDisclaimer(false);
  };

  if (!showPopup) return null;

  // FAQ Data
  const faqs = [
    {
      q: "What is Reddy Book Club and how does it work?",
      a: "Reddy Book Club is an online platform, where a user can access services using a mobile app, or web interface. Individuals are allowed to subscribe to the site, finish the reddybook sign-in, and begin utilizing the capabilities immediately. The site is made to be straightforward and easy to use, and both new and experienced users can easily use the site. There are a number of individuals who visit the site to find the reddybook club or reddyanna with the aim of accessing the site easily and conveniently."
    },
    {
      q: "What is Reddybook and why is it so popular?",
      a: "Reddybook is the online name of Reddy Book Club and is extensively searched by people who are seeking a good online source. Ease of navigation, easy way of logging in and easy user experience are the reasons why reddybook is popular. It is also known as reddybook club and this is an indication of its increasing popularity with the users."
    },
    {
      q: "How to complete Reddybook login step by step?",
      a: "To perform the process of reddybook login, users are required to open the platform, enter their username and password and press the button of logging in. Once logged in, users can access all features of the platform. The reddybook login is also speedy and safe, with the user being able to log-in their accounts without delays. To be on the safe side, it is necessary to keep your login details confidential."
    },
    {
      q: "What is the difference between it and Reddy Book Club?",
      a: "Reddybook club is a different name that is used to refer to Reddy Book Club. The two terms are used synonymously. When users search for reddybook club or reddy book club, they tend to interchange the names, which indicates the popularity of the platform under various names."
    },
    {
      q: "What is the club of Reddy Anna and why is it trending?",
      a: "Reddy anna club is a commonly searched term related to Reddy Book Club. It symbolizes the increasing community and popularity of the platform. Online, many users can be found using the platform under the name of reddy anna club, which in turn makes it a significant keyword related to the brand."
    },
    {
      q: "What is Reddy Anna Book Club?",
      a: "The other variant of the platform name that is used by users is Reddy anna book club. It is known as reddy book club. The presence of various names such as reddyanna, reddybook and reddy anna book club demonstrates the commonality with which the platform is used among various audiences."
    },
    {
      q: "What is the safest way to download Reddy Book Club APK?",
      a: "To download the reddy book club apk, users should always use a trusted and verified source. Once the APK file has been downloaded, the file can be installed into an Android device. The reddy book club apk enables users to access the platform without having to use an app store. Never use unverified links, always be careful."
    },
    {
      q: "What is Reddy Book Club APK and why do we use it?",
      a: "Reddy book club apk is an Android apk file that enables the user to manually install the application. It is convenient to the users who require fast access to the platform without necessarily going to app stores. The APK approach is popular due to its flexibility and quicker updates."
    },
    {
      q: "Is Reddybook safe and secure to use?",
      a: "Reddybook can be safely used in case of trusted sources. Users are advised to ensure their reddybook login details are not left unattended and they should not give out personal details. Security is user-based and thus it is better to remain vigilant whenever using any online platform."
    },
    {
      q: "Will I be able to access Reddybook online without APK?",
      a: "Yes, without downloading the reddy book club apk, the users can access reddybook online. It is browser-based and has the option of logging in and making use of features on the platform. This renders reddybook club adaptable and available across several gadgets."
    },
    {
      q: "What is making Reddybook club popular?",
      a: "Reddybook club is becoming popular due to its ease of use, fast access, and easy use. Consumers would choose sites that are user friendly and reddy book club provides them with that. Its growing demand is also demonstrated by the growing number of searches using the keyword reddyanna and similar to it."
    },
    {
      q: "How to enroll to Reddy Book Club?",
      a: "To sign up at the reddy book club, one has to register himself or herself by filling in simple registration details. Once registered, they are able to log in with reddybook login to view their account. It is an easy and fast onboarding process."
    },
    {
      q: "What are the compatible devices with Reddy Book Club APK?",
      a: "The apk version of the reddy book club is Android-based. It is compatible with most smartphones which accept APK installation. Before installing the APK, users need to make sure that their device can make the unknown source installations."
    },
    {
      q: "What is Reddyanna and how is it related to Reddybook?",
      a: "Reddyanna is a keyword that is frequently searched by the users when they are searching about reddy book club. It is connected with branding and community of the platform. The platform is known as reddyanna by many users, thus a significant search term."
    },
    {
      q: "How to upgrade Reddy Book Club APK to the new version?",
      a: "To update the reddy book club apk, one has to download the most recent version of the app and re-install it on their gadget. Updating also guarantees improved performance, enhanced features and security."
    }
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-[#0b0317] to-[#1a0a2e] p-6 text-white shadow-2xl">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
        >
          <X size={18} />
        </button>

        {/* View Toggle Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setCurrentView("main")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              currentView === "main" 
                ? "bg-cyan-400 text-black" 
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <Download size={16} /> Install App
          </button>
          <button
            onClick={() => setCurrentView("faqs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              currentView === "faqs" 
                ? "bg-cyan-400 text-black" 
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <HelpCircle size={16} /> FAQs
          </button>
        </div>

        {/* MAIN VIEW - Install App */}
        {currentView === "main" && (
          <>
            {/* Disclaimer Section */}
            {showDisclaimer && (
              <div className="mb-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-2">Disclaimer</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      This information is informational only. It is advised that users must do due diligence 
                      prior to downloading any APK files and observe local regulations when using any online platform.
                    </p>
                    <button
                      onClick={acceptDisclaimer}
                      className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 underline"
                    >
                      I understand and accept
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* HEADING */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-[#ffd79a] leading-tight">
                Install Application
              </h1>
              <p className="mt-2 text-lg font-semibold text-cyan-300">
                Fake Link Pe Login Karne Se Bacho ✨
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-300 text-center mb-5">
              Official app install karke smooth aur secure access pao.
            </p>

            {/* FEATURES */}
            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 mb-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span> Smooth 24x7 Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span> Faster Performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span> Safe & Secure Entry
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span> Seamless Gameplay
                </li>
              </ul>
            </div>

            {/* BUTTON */}
            <button
              onClick={closePopup}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-lg font-bold text-black hover:from-cyan-500 hover:to-blue-600 transition"
            >
              <Download size={20} />
              INSTALL OFFICIAL APP
            </button>

            {/* FAQ Link */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Have questions? <button onClick={() => setCurrentView("faqs")} className="text-cyan-400 hover:underline">Check our FAQs</button>
            </p>
          </>
        )}

        {/* FAQS VIEW */}
        {currentView === "faqs" && (
          <div>
            <h2 className="text-2xl font-bold text-[#ffd79a] mb-2">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-400 mb-6">Find answers to common questions about Reddy Book Club</p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-xl border border-cyan-400/20 bg-white/5 p-4 open:bg-white/10 transition">
                  <summary className="cursor-pointer text-sm font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-2">
                    <span className="text-cyan-400">Q{index + 1}.</span> {faq.q}
                  </summary>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed pl-6 border-l-2 border-cyan-400/30 ml-1">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            {/* Disclaimer at bottom of FAQs */}
            <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                  Disclaimer: This information is informational only. It is advised that users must do due diligence 
                  prior to downloading any APK files and observe local regulations when using any online platform.
                </p>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setCurrentView("main")}
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 py-3 text-sm font-medium text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              ← Back to Install App
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
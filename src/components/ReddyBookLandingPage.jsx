import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Check, 
  Award, 
  Smartphone, 
  Globe, 
  User, 
  Lock, 
  Download, 
  Star, 
  HelpCircle,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  ShieldCheck,
  Users,
  Layers,
  Sparkles
} from 'lucide-react';
import ReddyBookLanding from './ReddyBookLanding';
import ReddyBookFeatures from './ReddyBookFeatures';

const ReddyBookClubPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const images = {
    hero: "/Homepage Banner.webp",
    cricket: "/Homepage Image 5.webp",
    football: "/Homepage Image 7.webp",
    basketball: "/Homepage Image 9.webp",
    esports: "/Homepage Image 10 & 11.webp",
    betting1: "/Homepage Image 13 & 14 (1).webp",
    betting2: "/Homepage Image 13 & 14 (2).webp",
    betting: "/Homepage Image 13 & 14.webp"
  };

  const faqs = [
    { q: "What is Reddy Book Club and how does it work?", a: "Reddy Book Club is an online platform, where a user can access services using a mobile app, or web interface. Individuals are allowed to subscribe to the site, finish the reddybook sign-in, and begin utilizing the capabilities immediately. The site is made to be straightforward and easy to use, and both new and experienced users can easily use the site. There are a number of individuals who visit the site to find the reddybook club or reddyanna with the aim of accessing the site easily and conveniently." },
    { q: "What is Reddybook and why is it so popular?", a: "Reddybook is the online name of Reddy Book Club and is extensively searched by people who are seeking a good online source. Ease of navigation, easy way of logging in and easy user experience are the reasons why reddybook is popular. It is also known as reddybook club and this is an indication of its increasing popularity with the users." },
    { q: "How to complete Reddybook login step by step?", a: "To perform the process of reddybook login, users are required to open the platform, enter their username and password and press the button of logging in. Once logged in, users can access all features of the platform. The reddybook login is also speedy and safe, with the user being able to log-in their accounts without delays. To be on the safe side, it is necessary to keep your login details confidential." },
    { q: "What is the difference between it and Reddy Book Club?", a: "Reddybook club is a different name that is used to refer to Reddy Book Club. The two terms are used synonymously. When users search for reddybook club or reddy book club, they tend to interchange the names, which indicates the popularity of the platform under various names." },
    { q: "What is the club of Reddy Anna and why is it trending?", a: "Reddy anna club is a commonly searched term related to Reddy Book Club. It symbolizes the increasing community and popularity of the platform. Online, many users can be found using the platform under the name of reddy anna club, which in turn makes it a significant keyword related to the brand." },
    { q: "What is Reddy Anna Book Club?", a: "The other variant of the platform name that is used by users is Reddy anna book club. It is known as reddy book club. The presence of various names such as reddyanna, reddybook and reddy anna book club demonstrates the commonality with which the platform is used among various audiences." },
    { q: "What is the safest way to download Reddy Book Club APK?", a: "To download the reddy book club apk, users should always use a trusted and verified source. Once the APK file has been downloaded, the file can be installed into an Android device. The reddy book club apk enables users to access the platform without having to use an app store. Never use unverified links, always be careful." },
    { q: "What is Reddy Book Club APK and why do we use it?", a: "Baddy book club apk is an Android apk file that enables the user to manually install the application. It is convenient to the users who require fast access to the platform without necessarily going to app stores. The APK approach is popular due to its flexibility and quicker updates." },
    { q: "Is Reddybook safe and secure to use?", a: "Reddybook can be safely used in case of trusted sources. Users are advised to ensure their reddybook login details are not left unattended and they should not give out personal details. Security is user-based and thus it is better to remain vigilant whenever using any online platform." },
    { q: "Will I be able to access Reddybook online without APK?", a: "Yes, without downloading the reddy book club apk, the users can access reddybook online. It is browser-based and has the option of logging in and making use of features on the platform. This renders reddybook club adaptable and available across several gadgets." },
    { q: "What is making Reddybook club popular?", a: "Reddybook club is becoming popular due to its ease of use, fast access, and easy use. Consumers would choose sites that are user friendly and reddy book club provides them with that. Its growing demand is also demonstrated by the growing number of searches using the keyword reddyanna and similar to it." },
    { q: "How to enroll to Reddy Book Club?", a: "To sign up at the reddy book club, one has to register himself or herself by filling in simple registration details. Once registered, they are able to log in with reddybook login to view their account. It is an easy and fast onboarding process." },
    { q: "What are the compatible devices with Reddy Book Club APK?", a: "The apk version of the reddy book club is Android-based. It is compatible with most smartphones which accept APK installation. Before installing the APK, users need to make sure that their device can make the unknown source installations." },
    { q: "What is Reddyanna and how is it related to Reddybook?", a: "Reddyanna is a keyword that is frequently searched by the users when they are searching about reddy book club. It is connected with branding and community of the platform. The platform is known as reddyanna by many users, thus a significant search term." },
    { q: "How to upgrade Reddy Book Club APK to the new version?", a: "To update the reddy book club apk, one has to download the most recent version of the app and re-install it on their gadget. Updating also guarantees improved performance, enhanced features and security." }
  ];

  return (
    <div className="min-h-screen bg-[#faf6eb] text-[#2c3e50] overflow-x-hidden font-sans antialiased">
      
      {/* Top Premium Sticky Header */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#ebdcb9] sticky top-0 z-50 shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center space-x-3">
              <div className="bg-[#111111] text-[#ebd18b] flex flex-col px-4 py-1.5 rounded shadow-md border border-yellow-600/10">
                <span className="font-serif font-black text-lg tracking-tight leading-none">REDDY</span>
                <span className="text-[8px] font-sans tracking-[0.2em] text-white/90 font-semibold mt-0.5 leading-none">BOOK CLUB</span>
              </div>
              <span className="text-xs text-[#7c6643] hidden sm:inline-block border-l border-[#ebdcb9] pl-3 font-medium tracking-wide">
                reddybookclubs.com
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-gray-700">
              <a href="#home" className="hover:text-[#e0a100] transition">Home</a>
              <a href="#about" className="hover:text-[#e0a100] transition">About</a>
              <a href="#features" className="hover:text-[#e0a100] transition">Features</a>
              <a href="#terminal" className="hover:text-[#e0a100] transition">Terminal</a>
              <a href="#faq" className="hover:text-[#e0a100] transition">FAQs</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#terminal" onClick={() => setActiveTab('login')} className="px-5 py-2 text-sm font-bold border border-[#cbb07c] text-[#7c6643] bg-white/50 rounded-md hover:bg-[#fcfaf2] transition shadow-sm">
                Login
              </a>
              <a href="#terminal" onClick={() => setActiveTab('login')} className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold px-5 py-2 rounded-md shadow-md text-sm border border-[#cca300] transition-all">
                Get ID Now
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-3 py-4 border-t border-[#ebdcb9] space-y-2 font-medium text-gray-700">
              <a href="#home" className="block py-2 px-4 hover:bg-[#f4e9d4]/40 rounded-lg">Home</a>
              <a href="#about" className="block py-2 px-4 hover:bg-[#f4e9d4]/40 rounded-lg">About</a>
              <a href="#features" className="block py-2 px-4 hover:bg-[#f4e9d4]/40 rounded-lg">Features</a>
              <a href="#terminal" className="block py-2 px-4 hover:bg-[#f4e9d4]/40 rounded-lg">Terminal Terminal</a>
              <div className="pt-2 px-4">
                <a href="#terminal" className="block text-center w-full bg-gradient-to-b from-[#ffd726] to-[#e0a100] py-3 rounded-md font-extrabold text-black text-sm border border-[#cca300]">
                  Get Your Reddybook ID
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Luxury Hero Banner */}
      <header id="home" className="relative min-h-[90vh] flex items-center pt-8 border-b border-[#ebdcb9]">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Cricket Stadium Backdrop" 
            className="w-full h-full object-cover opacity-15 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6eb] via-[#faf6eb]/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#111111] text-[#ebd18b] border border-yellow-600/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Sparkles size={14} className="text-[#ffd726]" />
              <span className="text-xs font-bold tracking-wider uppercase">Welcome to Reddy Book Club</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black leading-[1.1] text-gray-900 tracking-tight mb-4">
              Reddy Book Club to Reddybook, <br />
              <span className="bg-gradient-to-r from-[#b38f46] via-[#e2c175] to-[#96732b] bg-clip-text text-transparent">Login, APK Download & Online Platform</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-8 font-light leading-relaxed max-w-3xl">
              In the rapidly changing digitalized world, people are always seeking platforms that will provide them with ease, speed and accessibility. Reddy Book club has become a common name among the users seeking a legitimate and convenient online experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#terminal" className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold text-center text-base px-8 py-4 rounded-md hover:brightness-105 transition transform shadow-lg border border-[#cca300]">
                Get Your Reddybook ID Now
              </a>
              <a href="#terminal" onClick={() => setActiveTab('apk')} className="border border-[#cbb07c] bg-white/80 hover:bg-white text-center text-[#7c6643] font-bold text-base px-8 py-4 rounded-md transition shadow-sm flex items-center justify-center gap-2">
                <Download size={18} /> Download Official APK File
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Numerical Trust Milestones Bar */}
      <section className="py-8 bg-white border-b border-[#ebdcb9] shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "1.8L+", label: "Active Listed Bettors" },
            { number: "450+", label: "Live Exchange Modules" },
            { number: "₹85Cr+", label: "Settled This Month" },
            { number: "4.9 / 5", label: "User Trust Standing" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-4xl font-serif font-black text-gray-900">{stat.number}</div>
              <div className="text-[#968059] text-xs font-bold tracking-wide uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Contextual Article Block */}
      <section id="about" className="py-16 sm:py-24 bg-[#fffdf9] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-[#968059] uppercase">Platform Overview</h2>
              <h3 className="text-3xl font-serif font-bold text-gray-900 leading-tight">What is Reddy Book Club?</h3>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Reddy Book Club is an online solution where the user can avail the services using a mobile and web-based system. It is geared towards simplicity, efficiency, and ease of use to all forms of users. 
              </p>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Be it in the process of trying to find the login to reddybook, or trying to find the apk of the reddy book club, or simply trying to find out what the reddybook club is, this site is created in such a way that it may be convenient and usable. The increased popularity of <span className="font-medium text-gray-900">reddy anna club</span> and <span className="font-medium text-gray-900">reddy anna book club</span> indicates that users are moving to websites that provide easy navigation and fast access. 
              </p>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Being digitally robust, reddybook still draws more users seeking a trustworthy and user-friendly interface. A good number of users type in reddybook club or reddyanna in search of a platform where they can access without needless complication. Reddy Book Club serves this purpose by providing a simplistic interface that aids in navigating with ease.
              </p>
            </div>
            
            <div className="md:col-span-4 bg-[#faf6eb] p-6 rounded-xl border border-[#ebdcb9] space-y-4 shadow-sm mt-6 md:mt-8">
              <h4 className="font-serif font-bold text-gray-900 text-lg">Community Trend</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Search trends demonstrate that the brand is receiving a high degree of recognition and trust across various public naming variants:
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#7c6643]">
                <li className="flex items-center gap-2">✓ reddy anna club</li>
                <li className="flex items-center gap-2">✓ reddy anna book club</li>
                <li className="flex items-center gap-2">✓ reddybook club</li>
                <li className="flex items-center gap-2">✓ reddyanna portals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Placement of image_f05fa1.png / image_effa09.png Side-by-Side Graphic Template */}
      <section id="features" className="bg-[#faf6eb] border-b border-[#ebdcb9]">
        <ReddyBookLanding />
      </section>

      {/* Sports Categories Gallery Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Explore Our Sports Categories</h2>
            <p className="text-sm text-gray-500 mt-2 font-light">Wide range of sports and events available on Reddy Book Club</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cricket */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.cricket} alt="Cricket" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Cricket</h3>
              </div>
            </div>
            
            {/* Football */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.football} alt="Football" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Football</h3>
              </div>
            </div>
            
            {/* Basketball */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.basketball} alt="Basketball" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Basketball</h3>
              </div>
            </div>
            
            {/* Esports */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.esports} alt="Esports" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Esports</h3>
              </div>
            </div>
            
            {/* Betting Options 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.betting1} alt="Live Betting" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Live Betting</h3>
              </div>
            </div>
            
            {/* Betting Options 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={images.betting2} alt="Exchange Platform" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold">Exchange Platform</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment and Step Walkthrough Engine Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#968059] uppercase block mb-2">Onboarding Flow</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Get Your Reddybook ID in Minutes</h2>
            <p className="text-sm text-gray-500 mt-2 font-light">The initial stage in order to gain access to the platform is to create your Reddybook ID. This ID is your individual entry point and enables you to access any features without limitations.</p>
            <div className="w-12 h-0.5 bg-[#ebdcb9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
            <div className="bg-[#faf6eb]/50 p-6 rounded-xl border border-[#ebdcb9] space-y-3 shadow-xs">
              <div className="w-8 h-8 bg-black text-[#ebd18b] rounded-full flex items-center justify-center font-serif font-bold text-sm">1</div>
              <h3 className="font-serif font-bold text-gray-900 text-lg">Registration</h3>
              <p className="text-sm text-gray-600 font-light">Finish the fast registration procedure by submitting your simple credential routing parameters to our registry node.</p>
            </div>
            
            <div className="bg-[#faf6eb]/50 p-6 rounded-xl border border-[#ebdcb9] space-y-3 shadow-xs">
              <div className="w-8 h-8 bg-black text-[#ebd18b] rounded-full flex items-center justify-center font-serif font-bold text-sm">2</div>
              <h3 className="font-serif font-bold text-gray-900 text-lg">Acquire Details</h3>
              <p className="text-sm text-gray-600 font-light">Get your verified login details and private passkeys generated instantly via the decentralized agent channel.</p>
            </div>
            
            <div className="bg-[#faf6eb]/50 p-6 rounded-xl border border-[#ebdcb9] space-y-3 shadow-xs">
              <div className="w-8 h-8 bg-black text-[#ebd18b] rounded-full flex items-center justify-center font-serif font-bold text-sm">3</div>
              <h3 className="font-serif font-bold text-gray-900 text-lg">Authenticate</h3>
              <p className="text-sm text-gray-600 font-light">Log in to your account with reddybook and immediately activate full capability without needless technical complications.</p>
            </div>
          </div>

          {/* Account Rights Summary Grid Block */}
          <div className="bg-[#faf6eb] border border-[#ebdcb9] rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-sm">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">With an active ID, you will be able to:</h3>
              <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                The platform cuts down on needless complexity, making it easy to use by both novices and advanced users. No complex procedures or lengthy queues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-xs text-gray-800">
                <div className="flex items-center gap-2"><Check size={14} className="text-green-700" /> Control your account any time</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-green-700" /> Deposit funds instantly</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-green-700" /> Withdraw money smoothly</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-green-700" /> Browse each feature fully</div>
              </div>
            </div>
            
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#ebdcb9] pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-bold text-[#968059] uppercase tracking-wide block">Performance Profile</span>
              <h4 className="text-lg font-serif font-bold text-gray-900">User Centric Design Performance</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Reddy Book Club is optimized to give a seamless performance on devices. The application software shell and browser mirror layouts are identical and fully synchronized.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-[#7c6643]">
                <span>• Fast loading speeds</span>
                <span>• Responsive structural grid</span>
                <span>• Regular security updates</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Financial Operations Step Architecture Ledger (Deposit & Withdrawal) */}
      <section className="py-16 sm:py-24 bg-[#fffdf9] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Deposit System Column */}
            <div className="bg-white border border-[#ebdcb9] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="inline-flex p-2.5 bg-green-50 text-green-700 rounded-lg border border-green-200"><ArrowDownLeft size={20} /></div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Quick & Hassle-Free Deposits</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  After logging in, you are prompted to add funds to your account portfolio. Reddy Book Club makes this transaction process easy, quick and safe so users do not face technical processing blocks.
                </p>
                <div className="w-8 h-px bg-[#ebdcb9]"></div>
                <ul className="space-y-2 text-xs font-medium text-gray-700">
                  <li className="flex items-center gap-2">▪ <span className="font-bold">Instant Processing:</span> Balance matches immediately</li>
                  <li className="flex items-center gap-2">▪ <span className="font-bold">Easy Payment Methods:</span> UPI, Bank, Wallets</li>
                  <li className="flex items-center gap-2">▪ <span className="font-bold">Secure Transactions:</span> Fully cryptographically isolated</li>
                  <li className="flex items-center gap-2">▪ <span className="font-bold">Real-Time Sync:</span> Automated dashboard balance balance</li>
                </ul>
              </div>
              <p className="text-xs text-gray-400 font-light mt-6 italic">You are free to add funds at any time and begin utilizing the platform features.</p>
            </div>

            {/* Withdrawal System Column */}
            <div className="bg-white border border-[#ebdcb9] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="inline-flex p-2.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200"><ArrowUpRight size={20} /></div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Smooth & Reliable Withdrawals</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Ease in the withdrawal of money is one of the most crucial attributes of any digital ledger. Reddy Book Club offers a withdrawal request routing system which is easy, reliable and safe.
                </p>
                <div className="w-8 h-px bg-[#ebdcb9]"></div>
                <ul className="space-y-2 text-xs font-medium text-gray-700">
                  <li className="flex items-center gap-2">▪ Easy request verification parameters</li>
                  <li className="flex items-center gap-2">▪ Safe management of user finance pipelines</li>
                  <li className="flex items-center gap-2">▪ Fast processing times via authorized agent nodes</li>
                  <li className="flex items-center gap-2">▪ Continuous financial audit reporting</li>
                </ul>
              </div>
              <p className="text-xs text-gray-400 font-light mt-6 italic">Once the reddybook login is made, users can request withdrawals with absolute confidence.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Structural Placement of image_efef3e.png System Features Component */}
      <section className="bg-[#faf6eb]">
        <ReddyBookFeatures />
      </section>

      {/* Tab-Switched Interactive Routing Terminal Area */}
      <section id="terminal" className="py-16 sm:py-24 bg-[#fffdf9] border-t border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold tracking-widest text-[#968059] uppercase block mb-2">Access Portal Hub</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Reddybook Login – Fast, Secure & Reliable</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8 font-light">The log-in procedure is designed to be fast and reliable. Users can authenticate within seconds and gain access to their accounts without unnecessary dashboard load delays.</p>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {[
              { id: 'login', label: 'Reddybook Login', icon: <User size={15} /> },
              { id: 'apk', label: 'Reddy Book Club APK', icon: <Smartphone size={15} /> },
              { id: 'platform', label: 'Reddybook Online Link', icon: <Globe size={15} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-md font-medium tracking-wide transition-all text-sm flex items-center gap-2 border ${activeTab === tab.id 
                  ? 'bg-gradient-to-b from-[#111111] to-[#2a2a2a] text-[#ebd18b] border-black shadow-md' 
                  : 'bg-white border-[#ebdcb9] text-gray-600 hover:bg-[#faf6eb]'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-white border border-[#ebdcb9] rounded-xl p-6 sm:p-10 shadow-xl text-left">
            {activeTab === 'login' && (
              <div className="space-y-4">
                <p className="text-xs text-gray-500 font-light mb-2">Always ensure that your login credentials are secure and not shared with others.</p>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Username or Account ID</label>
                  <input type="text" placeholder="Enter your ID" className="w-full bg-[#faf6eb]/40 border border-[#ebdcb9] rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:border-yellow-600 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Account Passkey Password</label>
                  <input type="password" placeholder="Password" className="w-full bg-[#faf6eb]/40 border border-[#ebdcb9] rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:border-yellow-600 text-sm" />
                </div>
                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold w-full py-3 rounded-md border border-[#cca300] shadow-sm text-xs uppercase tracking-wider mt-2">
                  Complete Reddybook Login
                </button>
                <div className="pt-2 flex flex-col gap-1.5 text-xs text-gray-500 font-light">
                  <span className="flex items-center gap-1.5">▪ Check account balance in real-time</span>
                  <span className="flex items-center gap-1.5">▪ Seamless navigation through all features</span>
                </div>
              </div>
            )}
            
            {activeTab === 'apk' && (
              <div className="text-center space-y-4 py-2">
                <Smartphone size={36} className="mx-auto text-[#968059]" />
                <h3 className="text-lg font-serif font-bold text-gray-900">Easy Download & Installation</h3>
                <p className="text-sm text-gray-500 font-light max-w-sm mx-auto">The apk file option is suitable for users who wish to access accounts using their smartphones. It enables fast installation without app store update delays.</p>
                
                <div className="bg-[#faf6eb] border border-[#ebdcb9] rounded-lg p-4 text-left max-w-md mx-auto my-3 text-xs space-y-1 text-gray-700 font-medium">
                  <p className="font-bold text-[#968059] mb-1">Installation steps:</p>
                  <p>1. Get the apk file of the reddy book club from a verified source.</p>
                  <p>2. Complete the local installation file routine on your device.</p>
                  <p>3. Open the app shell and complete your primary reddybook login.</p>
                </div>

                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold px-6 py-2.5 rounded-md border border-[#cca300] shadow-sm text-xs uppercase tracking-wider">
                  Download Latest Android APK File
                </button>
              </div>
            )}
            
            {activeTab === 'platform' && (
              <div className="text-center space-y-4 py-2">
                <Globe size={36} className="mx-auto text-[#968059]" />
                <h3 className="text-lg font-serif font-bold text-gray-900">Reddybook Online – Access Without Download</h3>
                <p className="text-sm text-gray-500 font-light max-w-sm mx-auto">You can also use reddybook online directly from any browser without having to install local storage application shells.</p>
                
                <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs font-semibold text-[#7c6643]">
                  <div className="p-2 border border-[#ebdcb9] bg-[#faf6eb]/50 rounded">No Installation</div>
                  <div className="p-2 border border-[#ebdcb9] bg-[#faf6eb]/50 rounded">Works on All Devices</div>
                  <div className="p-2 border border-[#ebdcb9] bg-[#faf6eb]/50 rounded">Complete Functionality</div>
                </div>

                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold px-6 py-2.5 rounded-md border border-[#cca300] shadow-sm text-xs uppercase tracking-wider">
                  Launch Web Browser Mirror Portal
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Consolidated Benefits Summary Matrix */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Why Choose Reddybook?</h2>
            <p className="text-sm text-gray-500 mt-1 font-light">Choosing reddybook means choosing a platform that prioritizes ease, user experience, safety and performance.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Authentication Secure", desc: "Quick and secure reddybook login framework." },
              { title: "Flexible Shell", desc: "Easy installation setup via reddy book club apk package files." },
              { title: "Fast Capital Loading", desc: "Hassle-free instant clearing transaction deposit system." },
              { title: "Trustworthy Settlements", desc: "Reliable, safe and transparent user balance withdrawal process." },
              { title: "Cross-Device Versatility", desc: "Accessible via synchronized responsive web mirrors and native apps." },
              { title: "Robust Group Growth", desc: "Building a supportive digital community with reddy anna club networks." }
            ].map((benefit, idx) => (
              <div key={idx} className="p-5 border border-[#ebdcb9] bg-[#fffdf9] rounded-xl flex items-start gap-3 shadow-xs">
                <ShieldCheck size={18} className="text-[#b38f46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm md:text-base">{benefit.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-light mt-0.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Best Practices Notice Block */}
          <div className="mt-10 p-5 bg-[#faf6eb] border border-yellow-600/10 rounded-xl space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5 text-amber-800">
              ⚠️ Safety & Best Practices Protocol
            </h4>
            <p className="text-gray-600 font-light leading-relaxed">
              In order to have a secure experience, consider the following technical safety tips: Only download the apk file of reddy book club from trusted and verified source mirrors. Your reddybook username and password details are strictly confidential—avoid sharing sensitive information or login details with others, and update the application shell regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 15 Accordion FAQ Matrix Grid */}
      <section id="faq" className="py-16 sm:py-24 bg-[#faf6eb]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <HelpCircle size={28} className="mx-auto text-[#968059] mb-2" />
            <h2 className="text-3xl font-serif font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500 mt-1 font-light">Review comprehensive procedural facts regarding reddybook club architecture</p>
            <div className="w-12 h-0.5 bg-[#ebdcb9] mx-auto mt-4"></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#ebdcb9] rounded-lg shadow-xs overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-serif font-bold text-sm sm:text-base text-gray-900 flex items-center justify-between gap-4 hover:bg-[#fffdf9]"
                >
                  <span className="flex items-start gap-2">
                    <span className="text-[#b38f46] font-mono font-normal">FAQ {idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {openFaq === idx ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                </button>
                
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 font-light border-t border-[#ebdcb9]/40 leading-relaxed bg-[#faf6eb]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Real Estate Brand Footer & Disclaimer */}
      <footer className="bg-[#111111] text-gray-400 py-12 border-t-2 border-[#b38f46] text-xs">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-6">
          
          <div className="bg-[#222222] text-[#ebd18b] inline-flex flex-col px-6 py-2.5 rounded shadow-md border border-yellow-600/10">
            <span className="font-serif font-black text-xl tracking-tight leading-none">REDDY BOOK CLUB</span>
            <span className="text-[8px] font-sans tracking-[0.25em] text-white/70 font-semibold mt-1.5 leading-none">OFFICIAL COMPREHENSIVE INFORMATION HUB • 2026</span>
          </div>

          {/* Explicit Legal Disclaimer */}
          <div className="p-4 bg-[#1a1a1a] rounded border border-neutral-800 text-left text-[11px] text-gray-500 space-y-1 font-light">
            <p className="font-bold text-gray-400 uppercase tracking-wider mb-1">Disclaimer Clause Notice:</p>
            <p>This provided operational breakdown text information is intended for educational, research and informational illustrative uses only. It is strongly advised that individual system users must execute extensive local due diligence prior to processing any verification parameters or downloading any APK execution packages. Users are expected to fully observe and correspond with local legal regulations when utilizing any digital online platform shell interface.</p>
          </div>

          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Reddy Book Club has gained massive popularity among individuals who prefer a reliable and convenient environment dashboard. Synchronized deployment across all web browser links and localized phone application binaries. 18+ Mandate Threshold. Gamble Responsibly.
          </p>

          <div className="w-12 h-px bg-neutral-800 mx-auto"></div>
          
          <p className="text-gray-600 font-mono text-[10px] tracking-wide">
            Ecosystem Registry Contact: support@reddybookclub.com | Encrypted Broker Proxy Active
          </p>
        </div>
      </footer>

    </div>
  );
};

export default ReddyBookClubPage;
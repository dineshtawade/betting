import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Check, 
  Smartphone, 
  Globe, 
  User, 
  Download, 
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowDownLeft,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  Gamepad2,
  Zap
} from 'lucide-react';

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
    { q: "What is Reddy Book Club APK and why do we use it?", a: "Baddy book club apk is an Android apk file that enables the user to manually install the application. It is convenient to the users who need fast access to the platform without necessarily going to app stores. The APK approach is popular due to its flexibility and quicker updates." },
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
              <a href="#terminal" className="block py-2 px-4 hover:bg-[#f4e9d4]/40 rounded-lg">Terminal</a>
              <div className="pt-2 px-4">
                <a href="#terminal" className="block text-center w-full bg-gradient-to-b from-[#ffd726] to-[#e0a100] py-3 rounded-md font-extrabold text-black text-sm border border-[#cca300]">
                  Get Your Reddybook ID
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Hero Section */}
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

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black leading-[1.1] text-gray-900 tracking-tight mb-4">
              Reddy Book Club to Reddybook, <br />
              <span className="bg-gradient-to-r from-[#b38f46] via-[#e2c175] to-[#96732b] bg-clip-text text-transparent">Login, APK Download & Online Platform</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-3xl">
              In the rapidly changing digitalized world, people are always seeking platforms that will provide them with ease, speed and accessibility. 
              Reddy Book club has become a common name among the users seeking a legitimate and convenient online experience.
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

      {/* Introduction Section */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 order-2 lg:order-1">
              <h2 className="text-xs font-bold tracking-widest text-[#968059] uppercase">About Reddy Book Club</h2>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">What is Reddy Book Club?</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                Reddy Book Club is an online solution where the user can avail the services using a mobile and web-based system. 
                It is geared towards simplicity, efficiency, and ease of use to all forms of users.
              </p>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                A good number of users type in reddybook club or reddyanna in search of a platform where they can access without needless complication. 
                Reddy Book Club serves this purpose by providing a simplistic interface that aids in navigating with ease.
              </p>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                The site is designed in such a way that it is easy to use and one can create an account, log in and navigate without any hassle.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.cricket} alt="Reddy Book Club" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Your Reddybook ID Section */}
      <section className="py-16 sm:py-20 bg-[#faf6eb] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.football} alt="Get Reddybook ID" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">Get Your Reddybook ID in Minutes</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                The initial stage in order to gain access to the platform is to create your Reddybook ID. 
                This ID is your individual entry point and enables you to access any features without limitations.
              </p>
              <div className="bg-white p-5 rounded-xl border border-[#ebdcb9]">
                <h4 className="font-bold text-gray-900 mb-3">Simple steps to get started:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Finish the fast registration procedure.</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Get your login details</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Log in to your account with reddybook.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Control your account any time</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Deposit funds instantly</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Withdraw money smoothly</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Browse each feature fully</div>
              </div>
              <p className="text-sm text-gray-500 italic">It is structured in a way that it is easy to use by beginners and even new users can start-off with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddybook Login Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">Reddybook Login – Fast, Secure & Reliable</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                The reddybook login procedure is designed to be fast and secure. They can log-in in a few seconds and get access to their accounts without delays.
              </p>
              <div className="bg-[#faf6eb] p-5 rounded-xl border border-[#ebdcb9]">
                <h4 className="font-bold text-gray-900 mb-3">Login steps:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="w-5 h-5 bg-[#e0a100] rounded-full flex items-center justify-center text-xs font-bold">1</span> Type in your name or ID.</li>
                  <li className="flex items-center gap-2"><span className="w-5 h-5 bg-[#e0a100] rounded-full flex items-center justify-center text-xs font-bold">2</span> Enter your password</li>
                  <li className="flex items-center gap-2"><span className="w-5 h-5 bg-[#e0a100] rounded-full flex items-center justify-center text-xs font-bold">3</span> Click on login</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500">The system is streamlined to offer real-time access to make the entire experience seamless and easy. Always ensure that your login credentials are secure and not shared with others.</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.basketball} alt="Login" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit and Withdrawal Section */}
      <section className="py-16 sm:py-20 bg-[#faf6eb] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Quick & Hassle-Free Transactions</h2>
            <div className="w-16 h-0.5 bg-[#e0a100] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Deposit */}
            <div className="bg-white border border-[#ebdcb9] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-700 rounded-xl"><ArrowDownLeft size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Deposit Money – Quick & Hassle-Free</h3>
                  <p className="text-gray-600 text-sm">After logging in, you are then prompted to deposit money to your account. Reddy Book Club makes this process easy, quick and safe.</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Instant processing</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Easy payment methods</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Secure transactions</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Real-time balance updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Withdrawal */}
            <div className="bg-white border border-[#ebdcb9] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><ArrowUpRight size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Withdraw Money – Smooth & Reliable</h3>
                  <p className="text-gray-600 text-sm">Ease in the withdrawal of money is one of the most crucial attributes of any platform. Reddy Book Club offers a withdrawal system which is easy and safe.</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Easy request process</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Safe management of finances</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Fast processing time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APK and Online Access Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.esports} alt="APK Download" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">Reddy Book Club APK – Easy Download & Installation</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                The reddy book club apk is suitable to users who wish to access it using their phones. It enables easy access and direct installation of your account.
              </p>
              <div className="bg-[#faf6eb] p-5 rounded-xl border border-[#ebdcb9]">
                <h4 className="font-bold text-gray-900 mb-3">Why choose APK?</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>✓ Faster installation</span>
                  <span>✓ No app store delays</span>
                  <span>✓ Easy updates</span>
                  <span>✓ Smooth performance</span>
                </div>
              </div>
              <div className="bg-[#faf6eb] p-5 rounded-xl border border-[#ebdcb9]">
                <h4 className="font-bold text-gray-900 mb-3">Installation steps:</h4>
                <ul className="space-y-2">
                  <li>1. Get the apk of the reddy book club.</li>
                  <li>2. Install the file onto your device.</li>
                  <li>3. Open the app</li>
                  <li>4. Complete reddybook login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reddybook Online Section */}
      <section className="py-16 sm:py-20 bg-[#faf6eb] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">Reddybook Online – Access Without Download</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                You can also use reddybook online without having to install an app.
              </p>
              <div className="bg-white p-5 rounded-xl border border-[#ebdcb9]">
                <h4 className="font-bold text-gray-900 mb-3">Advantages of going online:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> No installation required</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Works on all devices</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Complete access to every functionality</li>
                </ul>
              </div>
              <p className="text-gray-600">Through the reddybook online, users are free to log in, maintain their accounts, send money and take money at any time. Such a versatility renders the platform very convenient.</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.betting1} alt="Online Access" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Club Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={images.betting2} alt="Reddy Anna Club" className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">Reddy Anna Club – A Growing Community</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                It has a massive fan base and a robust community that has seen the platform being referred to as reddy anna club.
              </p>
              <p className="text-gray-600">Every day more users are joining as it is because:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Easy account setup</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Fast transactions</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Smooth navigation</li>
              </ul>
              <p className="text-gray-600">By joining reddy anna club, you are using a platform that is trusted by thousands of users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Reddybook Section */}
      <section className="py-16 sm:py-20 bg-[#faf6eb] border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Why Choose Reddybook?</h2>
            <p className="text-sm text-gray-500 mt-2">Choosing reddybook means choosing a platform that prioritizes ease and performance.</p>
            <div className="w-16 h-0.5 bg-[#e0a100] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Quick and secure reddybook login",
              "Easy installation via reddy book club apk",
              "Fast deposit system",
              "Reliable withdrawal process",
              "Accessible via web and app",
              "Building community with reddy anna club"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#ebdcb9] shadow-sm">
                <Check size={18} className="text-green-600 shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-white rounded-xl border border-yellow-600/20">
            <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-[#e0a100]" /> Safety & Best Practices
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Download apk file of reddy book club from trusted sources only.</li>
              <li>✓ Your reddybook username and password are confidential.</li>
              <li>✓ Avoid sharing sensitive information</li>
              <li>✓ Update the app regularly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal" className="py-16 sm:py-20 bg-white border-b border-[#ebdcb9]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">Get Started with Reddy Book Club Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">All is meant to be quick, easy and efficient.</p>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {[
              { id: 'login', label: 'Reddybook Login', icon: <User size={15} /> },
              { id: 'apk', label: 'Reddy Book Club APK', icon: <Smartphone size={15} /> },
              { id: 'platform', label: 'Reddybook Online', icon: <Globe size={15} /> }
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

          <div className="max-w-xl mx-auto bg-[#faf6eb] border border-[#ebdcb9] rounded-xl p-6 sm:p-8 shadow-xl text-left">
            {activeTab === 'login' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Login steps:</p>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Username or ID</label>
                  <input type="text" placeholder="Enter your ID" className="w-full bg-white border border-[#ebdcb9] rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:border-yellow-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Password</label>
                  <input type="password" placeholder="Enter your password" className="w-full bg-white border border-[#ebdcb9] rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:border-yellow-600" />
                </div>
                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold w-full py-3 rounded-md border border-[#cca300] text-sm">
                  Complete Reddybook Login
                </button>
                <p className="text-xs text-gray-500 text-center">Once logged in, users can check balance, add funds, withdraw money, and navigate easily.</p>
              </div>
            )}
            
            {activeTab === 'apk' && (
              <div className="text-center space-y-4">
                <Smartphone size={40} className="mx-auto text-[#968059]" />
                <h3 className="text-lg font-bold text-gray-900">Easy Download & Installation</h3>
                <p className="text-sm text-gray-600">Get the apk of the reddy book club from a verified source and install it on your device.</p>
                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold px-6 py-2.5 rounded-md border border-[#cca300] text-sm w-full">
                  Download Latest Android APK File
                </button>
                <p className="text-xs text-gray-500">In a few minutes, you will be able to access your account fully.</p>
              </div>
            )}
            
            {activeTab === 'platform' && (
              <div className="text-center space-y-4">
                <Globe size={40} className="mx-auto text-[#968059]" />
                <h3 className="text-lg font-bold text-gray-900">Access Without Download</h3>
                <p className="text-sm text-gray-600">Use reddybook online directly from any browser without installing an app.</p>
                <button className="bg-gradient-to-b from-[#ffd726] to-[#e0a100] text-black font-extrabold px-6 py-2.5 rounded-md border border-[#cca300] text-sm w-full">
                  Launch Web Browser Portal
                </button>
                <p className="text-xs text-gray-500">Works on all devices with complete functionality.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 bg-[#faf6eb]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle size={28} className="mx-auto text-[#968059] mb-2" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-12 h-0.5 bg-[#e0a100] mx-auto mt-4"></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#ebdcb9] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-semibold text-sm sm:text-base text-gray-900 flex items-center justify-between gap-4 hover:bg-[#fffdf9]"
                >
                  <span className="flex items-start gap-2">
                    <span className="text-[#b38f46] font-mono">{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-gray-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-600 border-t border-[#ebdcb9]/40 leading-relaxed bg-[#faf6eb]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-400 py-12 border-t-2 border-[#b38f46]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-6">
          <div className="bg-[#222222] text-[#ebd18b] inline-flex flex-col px-6 py-2.5 rounded shadow-md">
            <span className="font-serif font-black text-xl tracking-tight">REDDY BOOK CLUB</span>
            <span className="text-[8px] tracking-[0.25em] text-white/70 mt-1">OFFICIAL INFORMATION HUB • 2026</span>
          </div>

          <div className="p-4 bg-[#1a1a1a] rounded border border-neutral-800 text-left text-[11px] text-gray-500">
            <p className="font-bold text-gray-400 uppercase mb-1">Disclaimer:</p>
            <p>This information is informational only. It is advised that users must do due diligence prior to downloading any APK files and observe local regulations when using any online platform.</p>
          </div>

          <p className="text-gray-500 text-xs">Reddy Book Club has gained popularity among users who prefer a reliable and convenient platform. 18+ Mandate. Gamble Responsibly.</p>
          
          <p className="text-gray-600 text-[10px]">support@reddybookclub.com</p>
        </div>
      </footer>
    </div>
  );
};

export default ReddyBookClubPage;
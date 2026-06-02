import React, { useEffect } from "react";

export default function ResponsibleGaming() {

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
          
          {/* Banner Image 1 - Responsible gaming banner 2 */}
          <div className="w-full">
            <img
              src="/Responsible gaming banner 2.webp"
              alt="Reddy Book Club Responsible Gaming"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            
            {/* Title Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 border-b border-gray-200 pb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#a60a27] font-semibold">
                Responsible Gaming
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
                Reddy Book Club Responsible Gaming Guide: Play With Control and Know When to Stop
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Reddy Book Club responsible gaming guide with practical limits, warning signs, 
                self-exclusion tips, and support for safer play in India for all players.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-10 sm:mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Reddy Book Club, responsible gaming means keeping betting and gaming as entertainment, 
                  not as a way to solve money problems or deal with stress. Whether you found us by searching 
                  for Reddy Book Club, reddybook club, or reddy anna book club, the message is the same: 
                  play only if you are in control, understand the risks, and know when to take a break.
                </p>
                <p>
                  This page explains how to gamble more safely, what warning signs to watch for, and what 
                  steps to take if betting starts affecting your money, mood, work, or relationships. It is 
                  written for both beginners and experienced players in India who want clear, practical guidance 
                  without hype.
                </p>
              </div>
            </section>

            {/* What responsible gaming means */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                What responsible gaming means at Reddy Book Club
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Responsible gaming starts with a simple rule: only play if you can afford the time and money you spend.
                </p>
                <p>That means:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>using the platform only if you are 18+</li>
                  <li>treating betting or casino play as leisure, not income</li>
                  <li>setting a budget before you log in</li>
                  <li>accepting losses as part of the activity</li>
                  <li>stopping when you reach your limit instead of chasing money back</li>
                  <li>never gambling with borrowed money, bills, rent, or essential household funds</li>
                </ul>
                <p>
                  For many players, the biggest mistake is not the first bet. It is continuing after the plan 
                  has already been broken. A small deposit can quickly turn into repeated top-ups if you keep 
                  playing emotionally.
                </p>
                <p>A safer approach is to decide three things before you start:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 border border-green-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#a60a27]/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-[#a60a27]">1</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#4a121a] mb-2">Your money limit</h3>
                    <p className="text-gray-600 text-sm">Choose the exact amount you are comfortable losing for that session, week, or month.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 border border-blue-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#a60a27]/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-[#a60a27]">2</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#4a121a] mb-2">Your time limit</h3>
                    <p className="text-gray-600 text-sm">Set a clear finish time. Long sessions often lead to rushed decisions.</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border border-amber-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#a60a27]/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-[#a60a27]">3</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#4a121a] mb-2">Your stop point</h3>
                    <p className="text-gray-600 text-sm">Decide in advance when you will log out, whether you are winning or losing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning signs of problem gambling */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                What are the warning signs of problem gambling?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Problem gambling does not always look dramatic at first. It often starts with small habit 
                  changes that become regular.
                </p>
                <p>
                  You may need to pause and review your betting if you notice any of these signs:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">🎯 You are chasing losses</h3>
                    <p className="text-gray-600 text-sm">You keep depositing again because you want to recover what you lost in the last match, over, spin, or session.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">💰 You are spending more than planned</h3>
                    <p className="text-gray-600 text-sm">You start with one budget, then increase it after logging in.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">😤 You feel stressed, angry, or restless while playing</h3>
                    <p className="text-gray-600 text-sm">Instead of being entertainment, it starts affecting your mood.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">🤫 You are hiding your activity</h3>
                    <p className="text-gray-600 text-sm">You delete messages, avoid talking about deposits, or feel uncomfortable if someone asks how much you spent.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">📉 Betting is affecting daily life</h3>
                    <p className="text-gray-600 text-sm">It starts interfering with work, study, sleep, family time, or important expenses.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <h3 className="font-bold text-[#4a121a] mb-2">🏃 You use gambling to escape</h3>
                    <p className="text-gray-600 text-sm">You log in mainly because you feel low, bored, lonely, or under pressure.</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-[#a60a27] p-4 rounded-r-xl mt-4">
                  <p className="text-gray-800">
                    ⚠️ If any of these sound familiar, do not ignore them. The earlier you act, the easier it is to reset your habits.
                  </p>
                </div>
              </div>
            </section>

            {/* Practical tools to stay in control */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Practical tools to stay in control
              </h2>
              <p className="text-gray-600 mb-4">
                A good responsible gaming page should do more than say "play responsibly." It should tell users 
                what to actually do. Here are the most useful control steps.
              </p>
              
              {/* Banner Image 2 - Reponsible Gaming */}
              <div className="my-6 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Reponsible Gaming.webp"
                  alt="Responsible gaming tools"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-6 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">📊 Set deposit limits before you play</h3>
                  <p className="text-gray-600 text-sm mb-2">A deposit limit is one of the most effective tools because it creates a boundary before emotions take over.</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>set a daily, weekly, or monthly deposit cap</li>
                    <li>keep gambling money separate from your main spending money</li>
                    <li>do not increase the limit on impulse after a loss</li>
                    <li>review the limit only when you are calm, not during a live event</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">⏸️ Use cool-off periods</h3>
                  <p className="text-gray-600 text-sm mb-2">A cool-off period is a short break from betting. It can be useful if you feel frustrated, tilted, or too focused on recovering losses.</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>24 hours</li>
                    <li>7 days</li>
                    <li>a few weeks</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🚫 Choose self-exclusion if you need a stronger step</h3>
                  <p className="text-gray-600 text-sm">Self-exclusion is for players who feel a normal break is not enough. It is a longer restriction that stops account access for a fixed period.</p>
                </div>
              </div>
            </section>

            {/* Keep KYC and payment habits clean */}
            <section className="mb-10 sm:mb-12 bg-blue-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Keep KYC and payment habits clean
              </h2>
              <p className="text-gray-700 mb-3">
                Verification and payment discipline also support responsible gaming.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-gray-700">✓ using your own correct personal details</li>
                <li className="flex items-center gap-2 text-gray-700">✓ completing any required KYC honestly</li>
                <li className="flex items-center gap-2 text-gray-700">✓ checking deposits and withdrawals regularly</li>
                <li className="flex items-center gap-2 text-gray-700">✓ keeping a record of how much you actually spend</li>
                <li className="flex items-center gap-2 text-gray-700">✓ avoiding multiple accounts or shared accounts</li>
                <li className="flex items-center gap-2 text-gray-700">✓ not using money meant for essentials</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Players often focus only on wins and losses. A better habit is to track total deposits over time. 
                That gives you a more honest view of your real spending.
              </p>
            </section>

            {/* Safer betting habits */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Safer betting habits for beginners and regular players
              </h2>
              <p className="text-gray-600 mb-4">
                Different players lose control in different ways. The safest routine depends on how you use the platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🆕 For beginners</h3>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>start with small limits</li>
                    <li>do not try many products at once</li>
                    <li>learn one market before moving to another</li>
                    <li>avoid copying random "tips" or social media hype</li>
                    <li>take breaks between sessions</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🏏 For regular sports bettors</h3>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>set your stake before the match starts</li>
                    <li>do not raise your stake after an early loss</li>
                    <li>avoid betting every over or every market just because it is available</li>
                    <li>review your activity weekly, not emotionally after one result</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                  <h3 className="text-lg font-bold text-[#4a121a] mb-3">🎰 For casino and fast-game players</h3>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                    <li>use shorter sessions</li>
                    <li>take a break every 30 to 45 minutes</li>
                    <li>never continue just because you feel "due" for a win</li>
                    <li>stop immediately if the session becomes emotional</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Personal checklist */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4 text-center">
                A simple personal checklist before every session
              </h2>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-xl">🤔</span>
                  <span className="text-gray-700">Am I calm right now?</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-xl">💰</span>
                  <span className="text-gray-700">Can I afford to lose this amount?</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-xl">⏰</span>
                  <span className="text-gray-700">Have I set a stop time?</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-xl">🎯</span>
                  <span className="text-gray-700">Am I playing for fun, not to fix money problems?</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-xl">✅</span>
                  <span className="text-gray-700">Will I be okay if this session ends in a loss?</span>
                </div>
              </div>
              <p className="text-center text-gray-700 mt-4 font-semibold">
                If the answer to any of these is no, it is a good time not to play.
              </p>
            </section>

            {/* Support options */}
            <section className="mb-10 sm:mb-12 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a24] rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Support options and next steps in India
              </h2>
              <p className="text-white/80 mb-4">
                If gambling is starting to feel difficult to control, taking action early is the best move.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">✓ Pause your account activity and stop depositing.</div>
                <div className="flex items-center gap-3 text-white/80">✓ Request a cool-off or self-exclusion through support.</div>
                <div className="flex items-center gap-3 text-white/80">✓ Tell someone you trust so you are not handling it alone.</div>
                <div className="flex items-center gap-3 text-white/80">✓ Review your finances honestly, including deposits, not just wins and losses.</div>
                <div className="flex items-center gap-3 text-white/80">✓ Speak to a qualified support service if the behaviour feels repetitive or hard to stop.</div>
              </div>
              <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-white/90 text-sm">
                  📞 For India-based help, the Vandrevala Foundation says its free mental health support is available 
                  24x7, including WhatsApp support and a helpline at <strong>+91 9999 666 555</strong>. The NIMHANS Centre 
                  for Addiction Medicine also describes its services as evidence-based addiction treatment through a 
                  multidisciplinary team.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-6 text-center">
                Responsible Gaming FAQ
              </h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Is Reddy Book Club only for adults?</h3>
                  <p className="text-gray-600">Yes. Reddy Book Club should only be used by adults aged 18 and above. If you are underage, do not register, log in, or use any betting or gaming service.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">What is the best first step if I think I am gambling too much?</h3>
                  <p className="text-gray-600">Start by stopping deposits, taking a break, and reviewing how much you have really spent over the past few weeks. If the habit keeps repeating, request self-exclusion and seek support.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">What does self-exclusion mean?</h3>
                  <p className="text-gray-600">Self-exclusion is a longer account block that helps you stay away from betting for a fixed period. It is designed for players who need more than a short break.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Should I gamble with borrowed money or credit?</h3>
                  <p className="text-gray-600">No. Gambling with borrowed money, rent money, or essential funds is a major warning sign and can quickly make a manageable habit become harmful.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#4a121a] text-lg mb-2">Can I still enjoy betting without it becoming a problem?</h3>
                  <p className="text-gray-600">Yes, but only if you keep clear limits, accept losses, avoid emotional decisions, and stop when the activity is no longer fun or affordable.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a121a] mb-4">
                Conclusion
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Responsible gaming at Reddy Book Club is about staying aware, setting limits, and taking action 
                  early if your habits start to change. The safest players are not the ones who never lose. They 
                  are the ones who know their boundaries, stick to them, and step away when needed.
                </p>
                <p>
                  If you use Reddy Book Club, reddybook club, or any related access point, keep your play adult-only, 
                  budget-led, and fully under control. And if it no longer feels manageable, take a break and get support.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
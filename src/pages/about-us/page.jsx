import React, { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111]">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="bg-white shadow-sm rounded-3xl p-8 md:p-12">
          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100">
            <img
              src="/About Banner.webp"
              alt="About Reddy Book Club"
              className="h-56 w-full object-cover md:h-72"
            />
          </div>

          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.3em] text-[#a60a27]">
              About Reddy Book Club
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              About Reddy Book Club: Platform Overview, Access, and User Experience
            </h1>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Learn about Reddy Book Club, including account access, web and APK use,
              payments, support, KYC, and responsible play guidance for users in India today.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[#222] text-sm md:text-base leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                About Reddy Book Club
              </h2>

              <p>
                Reddy Book Club is built for users who want a simple way to access
                online sports betting and casino-style entertainment through one platform.
                If you searched for reddy book club, reddybook club, reddyanna, or even
                a variation like raddybook, this page is here to explain what the
                platform is, how it works, and what you should know before getting started.
              </p>

              {/* Image 1 - Homepage Image 5 */}
              <div className="my-6 overflow-hidden rounded-xl shadow-md">
                <img
                  src="/Homepage Image 5.webp"
                  alt="Cricket betting platform overview"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <p>
                This is not a page full of hype. It is a practical overview of how
                Reddy Book Club works, what kind of user experience the platform aims
                to offer, and why people in India often look for terms such as reddy
                anna club, reddy anna book club, reddy book login, or reddy book club
                apk when trying to access the site.
              </p>

              <p>
                If you are a beginner, you will get a clear starting point. If you are
                already familiar with online betting or casino platforms, you will get
                a better sense of how Reddy Book Club is positioned, what matters before
                logging in, and what to check for around account access, payments,
                and responsible use.
              </p>
            </section>

            <section className="space-y-4">
              <img
                src="/About Banner 2.webp"
                alt="Reddy Book Club platform overview"
                className="mb-6 h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                What Is Reddy Book Club?
              </h2>

              <p>
                At its core, Reddy Book Club is a digital platform designed to give
                users access to sports and gaming features in one place. For many
                users, the biggest appeal is convenience.
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>account registration and login</li>
                <li>access through web or mobile-friendly options</li>
                <li>sports and cricket-focused betting interest</li>
                <li>casino-style game access where available</li>
                <li>deposit and withdrawal management</li>
                <li>support when users need help with access or account issues</li>
              </ul>

              {/* Image 2 - Homepage Image 7 */}
              <div className="my-6 overflow-hidden rounded-xl shadow-md">
                <img
                  src="/Homepage Image 7.webp"
                  alt="Football and sports betting options"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                How Reddy Book Club Works
              </h2>

              <p>
                For most users, the journey is simple: get access, log in, verify
                details if needed, add funds, and use the platform features that
                are available to your account.
              </p>

              <h3 className="text-xl font-semibold">
                Account setup and access
              </h3>

              <p>
                The first step is getting an account. Depending on the site flow,
                users may either click a Register or Get Cricket ID style button,
                or fill in a form to request access.
              </p>

              <h3 className="text-xl font-semibold">
                Web use and APK access
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>
                  <strong>Browser access:</strong> Users who prefer not to install
                  anything can use the website directly from a mobile or desktop browser.
                </li>

                <li>
                  <strong>APK access:</strong> Some users prefer a mobile installation
                  route and search for reddy book club apk or reddybook.club apk.
                </li>
              </ul>

              <h3 className="text-xl font-semibold">
                What happens after login
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>view available sports or gaming sections</li>
                <li>check their account balance</li>
                <li>manage deposits and withdrawals</li>
                <li>access cricket-led markets and related features</li>
                <li>contact support if login or payment issues come up</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                What Users Can Expect From the Platform
              </h2>

              <p>
                Reddy Book Club is best understood as a convenience-first platform.
                The experience appears to be built around quick access, cricket-led
                interest, flexible login options, and easier account handling.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                A cricket-first mindset for Indian users
              </h3>

              <p>
                For users in India, cricket is usually the main entry point.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                Useful for beginners and regular users
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>an easy login and registration process</li>
                <li>a clear dashboard that is not overloaded</li>
                <li>a basic understanding of deposits, withdrawals, and support</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Payments, Verification, and Practical Expectations
              </h2>

              <p>
                Deposit and withdrawal experience often shapes whether a user
                stays with a platform.
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>account verification before certain withdrawals</li>
                <li>matching payment details where required</li>
                <li>occasional manual review for unusual activity</li>
                <li>time differences depending on payment method or request size</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Our Approach to Safety, Transparency, and Responsible Gaming
              </h2>

              <ul className="list-disc ml-5 space-y-2">
                <li>betting and casino play involve risk</li>
                <li>no platform should imply guaranteed wins</li>
                <li>bonuses may come with terms and conditions</li>
                <li>payment methods can have verification steps</li>
                <li>users should never share login details</li>
              </ul>
            </section>

            <section className="space-y-4 bg-[#faf9f5] rounded-3xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Why Users Choose to Learn About Reddy Book Club First
              </h2>

              <ul className="list-disc ml-5 space-y-2">
                <li>What is the platform?</li>
                <li>How does access work?</li>
                <li>Can I use it on mobile?</li>
                <li>What should I expect from payments and verification?</li>
                <li>Where do I go if I need help?</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                FAQ
              </h2>

              <div className="space-y-4 text-[#333]">

                <div>
                  <h3 className="font-semibold">
                    What is Reddy Book Club?
                  </h3>

                  <p>
                    Reddy Book Club is an online platform focused on sports betting
                    and gaming access through web and mobile-friendly options.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Can I use Reddy Book Club without downloading the APK?
                  </h3>

                  <p>
                    Yes. Users generally look for both browser access and APK access.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Is the Reddy Book Club APK safe to install?
                  </h3>

                  <p>
                    It can be, but only if downloaded from a trusted source.
                  </p>
                </div>

              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Conclusion
              </h2>

              <p>
                Reddy Book Club is best understood as a digital platform built
                around simple access, cricket-led user interest, mobile convenience,
                and account usability.
              </p>

              <p>
                A good next step is to move from this page to the section that
                matches your need most closely.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
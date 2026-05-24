import React, { useEffect } from "react";

export default function CustomerCare() {

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

          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.3em] text-[#a60a27]">
              Customer Care
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Reddy Book Club Customer Care: Help for Login, Cricket ID,
              Payments and Account Support
            </h1>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Need help with Reddy Book Club? Contact customer care for Cricket ID
              support, login help, KYC guidance, payments, withdrawals, and account
              recovery today.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[#222] text-sm md:text-base leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Reddy Book Club Customer Care
              </h2>

              <p>
                If you need help with your account, Cricket ID, login, deposits,
                withdrawals, or app access, this Reddy Book Club Customer Care
                page is here to guide you.
              </p>

              <p>
                Instead of making users search through multiple pages, this section
                brings the most important support information into one place so you
                know what kind of help is available, when verification may be needed,
                and how to reach the right team safely.
              </p>

              <p>
                For many users, support is not just about fixing a technical issue.
                It is also about getting quick answers before registering, recovering
                login access, understanding payment status, checking KYC requirements,
                or confirming whether an APK or login link is official.
              </p>

              <p>
                If you need direct assistance, use the Get Cricket ID button on
                the website to connect with the official support path shown by
                Reddy Book Club.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                How to Contact Reddy Book Club Customer Care
              </h2>

              <p>
                Customer care should be easy to find and simple to use.
              </p>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="p-5 bg-[#faf9f5] border rounded-2xl">
                  <h3 className="font-bold text-[#4a121a] mb-2">
                    Use the official support button
                  </h3>

                  <p className="text-sm">
                    Use the Get Cricket ID button for support related to account
                    login, deposits, withdrawals, KYC, app access, and registration.
                  </p>
                </div>

                <div className="p-5 bg-[#faf9f5] border rounded-2xl">
                  <h3 className="font-bold text-[#4a121a] mb-2">
                    Official contact only
                  </h3>

                  <p className="text-sm">
                    Use only support options shown on the official website.
                    Avoid third-party agents, copied pages, or random numbers.
                  </p>
                </div>

              </div>

              <p>
                Support works faster when your message is clear and complete.
              </p>

              <p>A useful first message usually includes:</p>

              <ul className="list-disc ml-5 space-y-2">
                <li>your registered mobile number or username</li>
                <li>the issue type</li>
                <li>when the problem started</li>
                <li>whether you are using web or mobile</li>
                <li>a screenshot if relevant</li>
                <li>payment reference details if needed</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                What Reddy Book Club Customer Care Can Help With
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Cricket ID and registration help
                  </h3>

                  <ul className="list-disc ml-5 space-y-2">
                    <li>requesting a new Cricket ID</li>
                    <li>understanding the registration process</li>
                    <li>checking required details</li>
                    <li>solving sign-up errors</li>
                    <li>basic account setup guidance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Login and account recovery
                  </h3>

                  <ul className="list-disc ml-5 space-y-2">
                    <li>forgotten login details</li>
                    <li>password reset guidance</li>
                    <li>OTP-related issues</li>
                    <li>account access problems</li>
                    <li>account recovery support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Deposit and withdrawal support
                  </h3>

                  <ul className="list-disc ml-5 space-y-2">
                    <li>deposit not credited</li>
                    <li>withdrawal under review</li>
                    <li>payment method mismatch</li>
                    <li>incorrect transaction amount</li>
                    <li>delay after payment request</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    KYC and verification guidance
                  </h3>

                  <ul className="list-disc ml-5 space-y-2">
                    <li>why KYC was requested</li>
                    <li>document submission guidance</li>
                    <li>pending withdrawal checks</li>
                    <li>temporary account restrictions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    App, APK, and device support
                  </h3>

                  <ul className="list-disc ml-5 space-y-2">
                    <li>APK download issues</li>
                    <li>installation problems</li>
                    <li>browser compatibility</li>
                    <li>mobile login errors</li>
                    <li>update-related issues</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                How to Get Faster Help from Customer Care
              </h2>

              <h3 className="text-xl font-semibold">
                Explain the issue in one message
              </h3>

              <p>
                Instead of sending “hello” and waiting, explain the problem clearly
                in your first message.
              </p>

              <div className="bg-[#faf9f5] border rounded-2xl p-5 italic">
                “I can log in, but my withdrawal from today is still pending.
                My username is [username], the request was made at [time],
                and the amount is [amount].”
              </div>

              <h3 className="text-xl font-semibold">
                Keep screenshots ready
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>failed payment pages</li>
                <li>error messages</li>
                <li>missing transaction updates</li>
                <li>login issues</li>
                <li>KYC requests</li>
              </ul>

              <h3 className="text-xl font-semibold">
                Keep payment references with you
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>transaction ID</li>
                <li>UTR number</li>
                <li>amount</li>
                <li>payment method used</li>
                <li>date and time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Important Safety Tips Before Contacting Support
              </h2>

              <h3 className="text-xl font-semibold">
                Use only official support
              </h3>

              <p>
                Only contact Reddy Book Club through the support path shown on
                the official website.
              </p>

              <h3 className="text-xl font-semibold">
                Never share sensitive security details
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>password</li>
                <li>OTP</li>
                <li>bank PIN</li>
                <li>card PIN</li>
                <li>UPI PIN</li>
              </ul>

              <h3 className="text-xl font-semibold">
                Be careful with APK links
              </h3>

              <p>
                Use only APK links shown on the official website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                When Support May Take Longer Than Expected
              </h2>

              <p>
                Fast support matters, but some issues naturally take more time.
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>withdrawal verification</li>
                <li>deposit mismatch</li>
                <li>KYC review</li>
                <li>account ownership confirmation</li>
                <li>suspicious login activity</li>
                <li>bank or payment processor delay</li>
              </ul>

              <p>
                While a case is under review, users should avoid opening multiple
                tickets for the same issue.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Customer Care and Responsible Gaming
              </h2>

              <p>
                Support is not only for technical and payment questions. It should
                also help users who need account control or a break.
              </p>

              <p>
                Users must be 18+ and should always check whether the service is
                suitable and permitted in their location.
              </p>
            </section>

            <section className="space-y-4 bg-[#faf9f5] rounded-3xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Why This Customer Care Page Is Useful
              </h2>

              <ul className="list-disc ml-5 space-y-2">
                <li>what support can solve</li>
                <li>how to contact the right team</li>
                <li>what to prepare before asking for help</li>
                <li>why some issues need KYC or review</li>
                <li>how to stay safe from fake agents</li>
                <li>when to use support for responsible gaming concerns</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                FAQ
              </h2>

              <div className="space-y-4 text-[#333]">

                <div>
                  <h3 className="font-semibold">
                    How do I contact Reddy Book Club customer care?
                  </h3>

                  <p>
                    Use the official support route shown on the website,
                    especially the Get Cricket ID button on this page.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Can customer care help with login problems?
                  </h3>

                  <p>
                    Yes. Support can help with password reset guidance,
                    account access issues, and login errors.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Why is my withdrawal taking longer than expected?
                  </h3>

                  <p>
                    A withdrawal may take longer if KYC is incomplete or
                    payment ownership needs review.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Is it safe to share my password with support?
                  </h3>

                  <p>
                    No. Never share your password, OTP, PIN, or banking details.
                  </p>
                </div>

              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Conclusion
              </h2>

              <p>
                Reddy Book Club Customer Care should make support simpler,
                safer, and easier to use.
              </p>

              <p>
                Whether you need help with a new Cricket ID, login access,
                deposits, withdrawals, KYC, or app-related issues, the best
                first step is to use the official support route shown on the website.
              </p>

              <p>
                Keep your message clear, use only trusted contact options,
                and have your account or payment details ready so the issue
                can be handled faster.
              </p>

            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
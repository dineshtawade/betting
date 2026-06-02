import React, { useEffect } from "react";

export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white shadow-sm rounded-3xl p-6 md:p-12">
          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100">
            <img
              src="/Privacy Policy Banner 1.webp"
              alt="Reddy Book Club privacy policy"
              className="h-56 w-full object-cover md:h-72"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#4a121a]">
            Reddy Book Club Privacy Policy
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            Learn how Reddy Book Club collects, uses, stores, and protects your
            personal information, including KYC, cookies, account security,
            payments, and user privacy rights.
          </p>

          <div className="mt-10 space-y-8 text-[#222] text-sm md:text-base leading-relaxed">

            <section className="space-y-4">
              <p>
                <strong>Effective Date:</strong> [Insert Date]
                <br />
                <strong>Last Updated:</strong> [Insert Date]
              </p>

              <p>
                At Reddy Book Club, we take privacy seriously. This Privacy Policy
                explains what information we collect, how we use it, when we may
                share it, and what choices you have when using our website,
                registration forms, login area, customer support channels, and any
                mobile version or APK we officially provide.
              </p>

              <p>
                If you visit Reddy Book Club to browse the site, create an
                account, request a Cricket ID, log in, contact support, or use
                account features linked to deposits, withdrawals, verification,
                or gameplay access, this page is meant to help you understand how
                your data is handled in simple terms.
              </p>

              <p>
                By continuing to use our website or services, you agree to the
                practices described in this Privacy Policy, together with our
                Terms and Conditions and Responsible Gaming page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                What This Policy Covers
              </h2>

              <h3 className="text-xl font-semibold">
                Our website and mobile access
              </h3>

              <p>
                This includes pages you visit on the Reddy Book Club website,
                mobile browser sessions, landing pages, support forms, and any
                official app or APK access point made available by us.
              </p>

              <h3 className="text-xl font-semibold">
                Registration, login, and account activity
              </h3>

              <p>
                If you register, request a Cricket ID, log in, reset a password,
                update account details, or communicate with our support team, we
                may collect information connected with those actions.
              </p>

              <h3 className="text-xl font-semibold">
                Payments, verification, and security checks
              </h3>

              <p>
                Where relevant, we may process information connected to deposits,
                withdrawals, fraud prevention, identity checks, responsible
                gaming reviews, and account protection.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                What Information We May Collect
              </h2>

              <p>
                We only collect information that is reasonably needed to operate
                the website, support your account, improve security, and meet
                legal or compliance obligations.
              </p>

              <h3 className="text-xl font-semibold">
                Information you provide directly
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>your name</li>
                <li>mobile number</li>
                <li>email address</li>
                <li>date of birth</li>
                <li>username or login ID</li>
                <li>payment-related details</li>
                <li>customer support messages</li>
                <li>documents submitted for KYC or verification</li>
              </ul>

              <p>
                Depending on the service you use, we may also ask for proof of
                identity, proof of age, proof of address, or payment ownership
                details before certain account actions are completed.
              </p>

              <h3 className="text-xl font-semibold">
                Information collected automatically
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>IP address</li>
                <li>browser type</li>
                <li>device type</li>
                <li>operating system</li>
                <li>language settings</li>
                <li>pages viewed</li>
                <li>time spent on the site</li>
                <li>referring links</li>
                <li>crash or error reports</li>
                <li>login timestamps and security logs</li>
              </ul>

              <p>
                This helps us keep the platform stable, prevent misuse, and
                understand how users interact with the website.
              </p>

              <h3 className="text-xl font-semibold">
                Information from verification or payment partners
              </h3>

              <p>
                In some cases, trusted third-party providers may confirm details
                related to identity, fraud screening, payment validation, or
                transaction status.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                How We Use Your Information
              </h2>

              <h3 className="text-xl font-semibold">
                To create and manage your account
              </h3>

              <p>
                We use your details to register your account, provide login
                access, verify credentials, respond to account issues, and
                maintain your profile.
              </p>

              <h3 className="text-xl font-semibold">
                To provide services you request
              </h3>

              <p>
                If you request a Cricket ID, contact customer care, use support
                channels, or access account services, we use your information to
                complete those actions and communicate with you.
              </p>

              <h3 className="text-xl font-semibold">
                To process deposits, withdrawals, and account checks
              </h3>

              <p>
                Payment-related information may be used to process transactions,
                confirm account ownership, reduce failed withdrawals, prevent
                fraud, and meet internal risk controls.
              </p>

              <h3 className="text-xl font-semibold">
                To complete KYC, age, and eligibility checks
              </h3>

              <p>
                Verification may be requested during registration, before a
                withdrawal, after unusual activity, or when account details
                change.
              </p>

              <h3 className="text-xl font-semibold">
                To improve website performance and user experience
              </h3>

              <p>
                We may use technical and behavioural data to improve page speed,
                mobile usability, navigation, login flow, support quality, and
                security systems.
              </p>

              <h3 className="text-xl font-semibold">
                To send important service messages
              </h3>

              <p>
                We may send messages related to account access, OTP verification,
                password resets, KYC requests, policy updates, and transaction
                status.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Cookies, Analytics, and Tracking Technologies
              </h2>

              <h3 className="text-xl font-semibold">
                What cookies do
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                <li>keep you logged in</li>
                <li>remember preferences</li>
                <li>understand site usage</li>
                <li>improve performance</li>
                <li>prevent suspicious activity</li>
                <li>measure page and device compatibility</li>
              </ul>

              <h3 className="text-xl font-semibold">
                Types of cookies we may use
              </h3>

              <p>
                We may use essential cookies for core site functions,
                performance cookies for analytics, and functionality cookies to
                improve convenience.
              </p>

              <h3 className="text-xl font-semibold">
                Your choices
              </h3>

              <p>
                You can usually manage cookies through your browser or device
                settings. Disabling essential cookies may affect login, page
                performance, or account functions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                When We May Share Your Information
              </h2>

              <h3 className="text-xl font-semibold">
                Service providers and technical partners
              </h3>

              <p>
                We may work with third parties that help us with hosting,
                payments, analytics, communication tools, fraud prevention,
                customer support, or verification services.
              </p>

              <h3 className="text-xl font-semibold">
                Compliance, legal, and security reasons
              </h3>

              <p>
                We may disclose information when reasonably necessary to comply
                with applicable law, investigate fraud, enforce our Terms and
                Conditions, or protect users and our business.
              </p>

              <h3 className="text-xl font-semibold">
                Business transfers or operational changes
              </h3>

              <p>
                If the website undergoes a business restructuring, merger, asset
                sale, or service transfer, relevant information may be
                transferred as part of that process.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Data Security and Retention
              </h2>
              <img
                src="/Privacy Policy Banner 2.webp"
                alt="Data security and privacy"
                className="h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />

              <p>
                We use reasonable technical and organisational measures to help
                protect your information from unauthorised access, loss, misuse,
                or alteration.
              </p>

              <p>
                However, no website, app, server, or online transmission method
                can be guaranteed to be completely secure.
              </p>

              <p>
                We keep personal information only for as long as it is reasonably
                needed for account operation, payment records, fraud prevention,
                dispute handling, and legal or compliance requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Your Rights and Choices
              </h2>

              <p>
                Depending on your location and the nature of your request, you
                may have the right to:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>ask what personal information we hold about you</li>
                <li>request correction of inaccurate details</li>
                <li>request deletion of unnecessary data</li>
                <li>object to certain marketing communications</li>
                <li>withdraw consent where applicable</li>
                <li>request account closure</li>
              </ul>

              <p>
                Before completing certain requests, we may need to verify your
                identity for account security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Age Restrictions, Location Limits, and Responsible Use
              </h2>

              <h3 className="text-xl font-semibold">
                18+ only
              </h3>

              <p>
                We do not knowingly collect personal information from anyone
                under 18.
              </p>

              <h3 className="text-xl font-semibold">
                Jurisdiction and eligibility
              </h3>

              <p>
                Access to certain services may not be available in all regions.
                It is the user’s responsibility to ensure that use of the site
                is lawful in their location.
              </p>

              <h3 className="text-xl font-semibold">
                Responsible gambling and account safety
              </h3>

              <p>
                In some cases, account activity may be reviewed for safer
                gambling purposes, fraud prevention, or risk control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Third-Party Links and External Services
              </h2>

              <p>
                Our website may contain links to third-party websites, payment
                channels, messaging apps, or service providers. Once you leave
                our site, their privacy practices apply, not ours.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                service changes, legal updates, security improvements, or
                operational needs.
              </p>

              <p>
                Your continued use of Reddy Book Club after changes are
                published means you accept the updated policy.
              </p>
            </section>

            <section className="space-y-4 bg-[#faf9f5] rounded-3xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy, your account
                information, or a privacy-related request, please contact us
                through our official support channel.
              </p>

              <ul className="space-y-2">
                <li><strong>Website:</strong> Reddy Book Club</li>
                <li><strong>Privacy Email:</strong> [Insert Email]</li>
                <li><strong>Support Contact:</strong> [Insert WhatsApp / Live Chat / Form Link]</li>
                <li><strong>Business Name:</strong> [Insert Legal Entity Name]</li>
                <li><strong>Business Address:</strong> [Insert Registered Address]</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                FAQs
              </h2>

              <div className="space-y-4">

                <div>
                  <h3 className="font-semibold">
                    What information does Reddy Book Club collect?
                  </h3>

                  <p>
                    Reddy Book Club may collect your name, mobile number, email,
                    login details, payment-related information, support messages,
                    and verification documents.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Why might Reddy Book Club ask for KYC documents?
                  </h3>

                  <p>
                    KYC may be requested to verify identity, age, account
                    ownership, payment methods, and account security.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Does Reddy Book Club use cookies?
                  </h3>

                  <p>
                    Yes. Cookies may be used for login sessions, analytics,
                    security, and performance improvements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Can I request deletion of my personal data?
                  </h3>

                  <p>
                    Yes. In many cases, users can request access, correction,
                    or deletion of personal information, subject to legal and
                    security requirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Does this policy apply to APK access too?
                  </h3>

                  <p>
                    Yes. If Reddy Book Club provides an official app or APK,
                    this Privacy Policy applies to that access as well.
                  </p>
                </div>

              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Conclusion
              </h2>

              <p>
                Reddy Book Club’s Privacy Policy is designed to help users
                understand what information is collected, why it is needed,
                how it may be shared, and what control users have over their
                personal data.
              </p>

              <p>
                The most important areas include account access, KYC,
                payment-related checks, cookies, security, and age restrictions.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

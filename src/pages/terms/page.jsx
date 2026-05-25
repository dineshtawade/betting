import React, { useEffect } from "react";

export default function Terms() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white shadow-sm rounded-3xl p-6 md:p-10">

          <h1 className="text-3xl md:text-5xl font-bold text-[#4a121a] border-b pb-5 mb-8 leading-tight">
            Reddy Book Club Terms and Conditions
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Effective Date: [Insert Date]
            <br />
            Last Updated: [Insert Date]
          </p>

          <div className="space-y-8 text-sm md:text-base text-gray-700 leading-relaxed">

            <section className="space-y-4">
              <p>
                Welcome to Reddy Book Club. These Terms and Conditions explain
                the rules that apply when you access our website, request a
                Cricket ID, create or use an account, log in, contact support,
                use any mobile or APK-based access we officially provide, or
                interact with services connected to sports, casino, gaming,
                payments, and account management.
              </p>

              <p>
                This page is here to make things clear. If you use Reddy Book
                Club, you should understand what is allowed, what is restricted,
                when verification may be required, how deposits and withdrawals
                may be reviewed, and when we may suspend or close an account.
                By using the website, you agree to these Terms and Conditions,
                along with our Privacy Policy and Responsible Gaming page.
              </p>

              <p>
                If you do not agree with these terms, you should not use the
                website or any related services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Who Can Use Reddy Book Club?
              </h2>

              <h3 className="text-xl font-semibold">
                Age requirement
              </h3>

              <p>
                You must be at least 18 years old to use this website or
                request an account. We may ask for proof of age at any stage,
                including during registration, before account activation,
                before a withdrawal, or during a routine account review.
              </p>

              <p>
                If we believe an account has been created or used by someone
                under 18, we may suspend or close the account and take any
                steps reasonably required under our internal compliance process.
              </p>

              <h3 className="text-xl font-semibold">
                Jurisdiction and local responsibility
              </h3>

              <p>
                Access to the website may not be appropriate, available, or
                lawful in every location. It is your responsibility to make
                sure that using Reddy Book Club is permitted in your state,
                region, or country.
              </p>

              <p>
                We do not promise that every feature, payment method,
                promotion, or service will be available everywhere.
                Location-based restrictions, payment rules, device
                compatibility, and verification requirements may affect access.
              </p>

              <h3 className="text-xl font-semibold">
                Personal use only
              </h3>

              <p>
                Your account is for your own personal use. You must not
                register on behalf of someone else, share access credentials,
                or allow another person to use your login, Cricket ID, or
                payment methods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Account Registration, Login and Verification
              </h2>

              <p>
                Using Reddy Book Club may involve requesting an ID,
                registering basic details, receiving login credentials,
                and accessing services through web or mobile.
              </p>

              <h3 className="text-xl font-semibold">
                Creating an account
              </h3>

              <p>
                When you register or request access, you agree that the
                information you provide is:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>true</li>
                <li>current</li>
                <li>complete</li>
                <li>provided in your own name where required</li>
              </ul>

              <p>
                You are responsible for keeping your contact details accurate.
                If your mobile number, email address, or payment information
                changes, you should update it promptly or contact support.
              </p>

              <h3 className="text-xl font-semibold">
                Login security
              </h3>

              <p>
                You are responsible for maintaining the confidentiality of your
                username, password, OTP, and any other login credentials.
                Do not share them with anyone.
              </p>

              <p>You agree to:</p>

              <ul className="list-disc ml-5 space-y-2">
                <li>use a strong password</li>
                <li>keep your account access private</li>
                <li>log out from shared devices</li>
                <li>
                  notify support if you suspect unauthorised access
                </li>
              </ul>

              <p>
                Any activity carried out through your account may be treated
                as your responsibility unless we determine otherwise through
                internal review.
              </p>

              <h3 className="text-xl font-semibold">
                KYC and account verification
              </h3>

              <p>
                We may request identity verification, age verification,
                address confirmation, or payment ownership documents at
                any time.
              </p>

              <p>This may happen:</p>

              <ul className="list-disc ml-5 space-y-2">
                <li>during registration</li>
                <li>before activating your account</li>
                <li>before processing a withdrawal</li>
                <li>when unusual activity is detected</li>
                <li>when account details change</li>
                <li>
                  as part of fraud prevention or safer gaming checks
                </li>
              </ul>

              <p>
                Until verification is completed, some account functions may
                be limited, delayed, or temporarily unavailable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Deposits, Withdrawals and Payment Rules
              </h2>

              <h3 className="text-xl font-semibold">
                Deposits
              </h3>

              <p>
                By making a deposit, you confirm that:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>
                  the funds belong to you or are being used lawfully by you
                </li>
                <li>
                  the payment method is authorised for your use
                </li>
                <li>
                  the transaction does not breach any law or third-party rights
                </li>
                <li>
                  you understand that processing times may vary
                </li>
              </ul>

              <p>
                Minimum and maximum deposit limits may apply. Some payment
                methods may also have their own rules, delays, or verification
                checks.
              </p>

              <h3 className="text-xl font-semibold">
                Withdrawals
              </h3>

              <p>
                Withdrawal requests may be reviewed before approval. We may
                ask for additional documents or information to confirm
                identity, payment ownership, account history, or unusual
                transaction patterns.
              </p>

              <p>
                A withdrawal may be delayed, limited, or declined where:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>KYC is incomplete</li>
                <li>account information does not match</li>
                <li>fraud or misuse is suspected</li>
                <li>bonus or offer terms have not been met</li>
                <li>duplicate or linked accounts are detected</li>
                <li>there is a payment or security concern</li>
              </ul>

              <h3 className="text-xl font-semibold">
                Fees, errors and balance corrections
              </h3>

              <p>
                We aim to keep account balances and transaction records
                accurate, but technical, pricing, settlement, or processing
                errors can happen.
              </p>

              <p>
                If a clear mistake affects your balance, deposit record,
                withdrawal amount, or account history, we reserve the right
                to correct it.
              </p>

              <p>
                You agree not to knowingly take advantage of any pricing,
                technical, or wallet error.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Acceptable Use and Restricted Behaviour
              </h2>

              <p>
                Reddy Book Club is meant to be used fairly, lawfully,
                and responsibly.
              </p>

              <p>You must not:</p>

              <ul className="list-disc ml-5 space-y-2">
                <li>
                  create more than one account without authorisation
                </li>
                <li>
                  use false, misleading, or stolen details
                </li>
                <li>
                  share or sell access to your account
                </li>
                <li>
                  attempt to bypass verification or location controls
                </li>
                <li>
                  use bots, scripts, automation tools, or exploit tools
                </li>
                <li>
                  interfere with the website, servers, odds feed,
                  payment process, or login systems
                </li>
                <li>
                  abuse bonuses, promotions, referral flows,
                  or account offers
                </li>
                <li>
                  engage in fraud, collusion, money laundering,
                  chargebacks, or suspicious transaction behaviour
                </li>
                <li>
                  upload harmful code or attempt unauthorised
                  access to our systems
                </li>
                <li>
                  use the platform in a way that harms other users
                  or our operations
                </li>
              </ul>

              <h3 className="text-xl font-semibold">
                Bonus and promotional misuse
              </h3>

              <p>
                If the website offers a welcome bonus, cashback,
                referral reward, or other promotion, that offer
                will always be subject to its own terms.
              </p>

              <p>
                Promotions may be withdrawn, limited, or cancelled
                if misuse, repeat claiming, account linking,
                or rule violations are detected.
              </p>

              <h3 className="text-xl font-semibold">
                Suspension and closure
              </h3>

              <p>
                We may suspend, restrict, or close an account
                if we reasonably believe these Terms have been
                breached, if verification is not completed,
                or if the account poses a legal, payment,
                fraud, or safety concern.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Platform Availability, Content and Liability Limits
              </h2>

              <h3 className="text-xl font-semibold">
                Availability of the service
              </h3>

              <p>
                We may update, modify, pause, or remove parts
                of the website at any time for maintenance,
                security, compliance, commercial, or technical reasons.
              </p>

              <p>This means we do not guarantee that:</p>

              <ul className="list-disc ml-5 space-y-2">
                <li>the website will always be available</li>
                <li>
                  every feature will work on every device
                </li>
                <li>
                  every page will load without interruption
                </li>
                <li>
                  every payment method will remain active
                </li>
                <li>
                  every service will be available in every location
                </li>
              </ul>

              <h3 className="text-xl font-semibold">
                Informational content and user responsibility
              </h3>

              <p>
                Any guides, FAQs, support content, or explanatory
                text on the site are provided for general
                information only.
              </p>

              <p>
                Nothing on the website should be treated as
                financial advice, legal advice, or a promise
                of outcomes.
              </p>

              <h3 className="text-xl font-semibold">
                Limitation of liability
              </h3>

              <p>
                To the fullest extent allowed by applicable law,
                Reddy Book Club and its operators will not be
                responsible for indirect, incidental, or
                consequential losses arising from:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>account misuse by the user</li>
                <li>
                  incorrect information submitted by the user
                </li>
                <li>device or internet failures</li>
                <li>third-party payment delays</li>
                <li>external service interruptions</li>
                <li>
                  unauthorised access caused by poor credential handling
                </li>
                <li>
                  temporary downtime, bugs, or maintenance events
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Intellectual Property, Third-Party Services and External Links
              </h2>

              <p>
                All website text, branding, layout, graphics,
                logos, and platform materials made available
                by Reddy Book Club are protected by applicable
                intellectual property principles unless stated otherwise.
              </p>

              <p>
                You may not copy, republish, reproduce, scrape,
                distribute, or commercially reuse our website
                content without prior written permission.
              </p>

              <h3 className="text-xl font-semibold">
                Third-party links and tools
              </h3>

              <p>
                The website may contain links to third-party
                services, payment providers, communication tools,
                or external pages.
              </p>

              <p>
                We do not control those third-party websites,
                and we are not responsible for their content,
                security, availability, or privacy practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Responsible Gaming, Complaints and Changes to These Terms
              </h2>

              <h3 className="text-xl font-semibold">
                Responsible gaming
              </h3>

              <p>
                Reddy Book Club is intended for responsible adult
                use only. If gaming is becoming difficult to control,
                or you feel you are chasing losses, spending beyond
                your limit, or using the site in a way that affects
                your finances or wellbeing, you should take a break
                and seek support.
              </p>

              <h3 className="text-xl font-semibold">
                Complaints and account issues
              </h3>

              <p>
                If you have a complaint about account access,
                transaction review, a verification request,
                or support handling, you should contact
                customer support through the official website channel.
              </p>

              <p>
                To help resolve complaints, include:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>your registered account details</li>
                <li>the issue date</li>
                <li>
                  the payment or account reference, if relevant
                </li>
                <li>
                  any screenshots or supporting information
                </li>
              </ul>

              <h3 className="text-xl font-semibold">
                Changes to these Terms
              </h3>

              <p>
                We may update these Terms and Conditions from
                time to time. Where changes are important,
                the updated version will be posted on this page
                with a revised “Last Updated” date.
              </p>
            </section>

            <section className="space-y-4 bg-[#faf9f5] border border-gray-200 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Contact Information
              </h2>

              <p>
                If you have questions about these Terms and Conditions,
                account eligibility, verification, or service rules,
                contact us through the official support details
                listed on the website.
              </p>

              <ul className="space-y-2">
                <li>
                  <strong>Website:</strong> Reddy Book Club
                </li>
                <li>
                  <strong>Support Email:</strong> [Insert Email]
                </li>
                <li>
                  <strong>Support Channel:</strong> [Insert WhatsApp / Live Chat / Contact Form]
                </li>
                <li>
                  <strong>Legal Entity Name:</strong> [Insert Business Name]
                </li>
                <li>
                  <strong>Registered Address:</strong> [Insert Address]
                </li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                FAQ
              </h2>

              <div>
                <h3 className="font-semibold">
                  What do the Reddy Book Club Terms and Conditions cover?
                </h3>

                <p>
                  They explain the main rules for using the website,
                  including eligibility, account registration,
                  login security, KYC, payments, restricted behaviour,
                  and account suspension.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Can Reddy Book Club ask for KYC after registration?
                </h3>

                <p>
                  Yes. Verification can be requested during sign-up,
                  before withdrawals, after account changes,
                  or when unusual activity is detected.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Can my Reddy Book Club account be suspended?
                </h3>

                <p>
                  Yes. An account may be restricted or closed if
                  there is a terms breach, failed verification,
                  suspected fraud, underage use, or suspicious
                  payment activity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Are deposits and withdrawals always instant?
                </h3>

                <p>
                  Not always. Processing times can vary depending
                  on payment method, account review,
                  verification status, and security checks.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Do these Terms apply to mobile or APK access too?
                </h3>

                <p>
                  Yes. If Reddy Book Club provides official mobile
                  or APK access, these Terms should apply to that
                  use as well unless separate product terms are shown.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a121a]">
                Conclusion
              </h2>

              <p>
                These Reddy Book Club Terms and Conditions are
                designed to explain the rules clearly before a
                user registers, logs in, deposits, withdraws,
                or uses the site regularly.
              </p>

              <p>
                The most important points are simple: you must
                be 18+, use accurate personal details, protect
                your login, complete KYC when asked, use only
                authorised payment methods, and avoid any
                misleading, abusive, or suspicious behaviour.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}